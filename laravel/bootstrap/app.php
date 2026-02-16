<?php

//use App\Http\Middleware\HandleInertiaRequests;
//use Illuminate\Foundation\Application;
//use Illuminate\Foundation\Configuration\Exceptions;
//use Illuminate\Foundation\Configuration\Middleware;
//use Illuminate\Http\Request;
//use Illuminate\Support\Arr;
//use Illuminate\Validation\ValidationException;
//use Inertia\Inertia;
//use Symfony\Component\HttpFoundation\Response;
//
//return Application::configure(basePath: dirname(__DIR__))
//    ->withRouting(
//        web: __DIR__.'/../routes/web.php',
//        commands: __DIR__.'/../routes/console.php',
//        health: '/up',
//    )
//
//    ->withMiddleware(function (Middleware $middleware) {
//        $middleware->trustProxies(at: '*'); //чтобы email верификация работала, без этого бьет постоянно 403 при проверке подписи сигнатуры
//        $middleware->web(append: [
//            \App\Http\Middleware\HandleInertiaRequests::class,
//            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
//
//        ]);
//
//        $middleware->validateCsrfTokens(except: [
//            '*' // <-- exclude this route
//        ]);
//        $middleware->web(append: [
//            HandleInertiaRequests::class,
//
//        ]);
//        $middleware->alias([
//            'verified' => \App\Http\Middleware\EnsureVerified::class
//        ]);
//        $middleware->redirectGuestsTo(fn (Request $request) => route('main-page').'?modal=login');
//    })
//    ->withExceptions(function (Exceptions $exceptions) {
//
//        $exceptions->render(function (Throwable $exception, Request $request) {
//            if(request()->expectsJson() && !\request()->is('admin/*')) {
//                if ($exception instanceof ValidationException) {
//                    return response()->json([
//                        'success' => false,
//                        'message' =>  $exception->getMessage(),
//                        'data' => $exception->errors(),
//                    ], 422, options: JSON_UNESCAPED_UNICODE);
//                } else {
//                    $message = $exception->getMessage();
//                    $code = $exception->getCode();
//                    return response()->json([
//                        'success' => false,
//                        'message' => $message ? $message : "Ошибка сервера",
//                        'data' => null,
//                        'exception' => get_class($exception),
//                        'line' => $exception->getLine(),
//                    ],  $code ? $code : 500, options: JSON_UNESCAPED_UNICODE);
//
//                    /* 'exception' => get_class($exception),
//                     'file' => $exception->getFile(),
//                     'line' => $exception->getLine(),
//                     'trace' => collect($exception->getTrace())->map(function ($trace) {
//                         return Arr::except($trace, ['args']);
//                     })->all(),*/
//                }
//
//            }
//
//            /*  return redirect($exception->redirectTo ?? url()->previous())
//                  ->withInput(Arr::except($request->input(), $this->dontFlash))
//                  ->withErrors($exception->errors(), $request->input('_error_bag', $exception->errorBag));*/
//        });
//
//        /*        $exceptions->render(function (Throwable $th) {
//                    $view = $request->is('admin/*')
//                        ? 'admin.errors.500'
//                        : 'frontend.errors.500';
//
//                    if (view()->exists($view)) {
//                        return response()->view($view, ['exception' => $th], 500);
//                    }
//                });*/
//    })
//    ->create();






use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->trustProxies(at: '*'); //чтобы email верификация работала, без этого бьет постоянно 403 при проверке подписи сигнатуры
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            \App\Http\Middleware\LogoutBlockedUser::class,
            \App\Http\Middleware\DetectSearchEngineBot::class,

        ]);

        $middleware->validateCsrfTokens(except: [
            '*' // <-- exclude this route
        ]);
        $middleware->web(append: [
            HandleInertiaRequests::class,

        ]);
        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureVerified::class
        ]);
        $middleware->redirectGuestsTo(fn(Request $request) => route('main-page') . '?modal=login');
    })
    ->withExceptions(function (Exceptions $exceptions) {

        $exceptions->render(function (Response $response,Throwable $exception, Request $request) {
            if ($response->getStatusCode() !== 404) {
                return $response;
            }
            if (request()->expectsJson() && !\request()->is('admin/*')) {
                if ($exception instanceof ValidationException) {
                    return response()->json([
                        'success' => false,
                        'message' => $exception->getMessage(),
                        'data' => $exception->errors(),
                    ], 422, options: JSON_UNESCAPED_UNICODE);
                } else {
                    $message = $exception->getMessage();
                    $code = $exception->getCode();
                    return response()->json([
                        'success' => false,
                        'message' => $message ? $message : "Ошибка сервера",
                        'data' => null,
                        'exception' => get_class($exception),
                        'line' => $exception->getLine(),
                    ], $code ? $code : 500, options: JSON_UNESCAPED_UNICODE);

                    /* 'exception' => get_class($exception),
                     'file' => $exception->getFile(),
                     'line' => $exception->getLine(),
                     'trace' => collect($exception->getTrace())->map(function ($trace) {
                         return Arr::except($trace, ['args']);
                     })->all(),*/
                }
            }

        });

        $exceptions->respond(function (Response $response,Throwable $exception, Request $request) {
            if ($response->getStatusCode() !== 404) {
                return $response;
            }
            if (!$request->is('admin/*')) {
                $status = $response->getStatusCode() ?? 500;
                if ($status == 404) {

                    $shared = app(HandleInertiaRequests::class)->share($request);

                    $message = 'Страница не найдена';

                    return Inertia::render('404/ui/404Page', array_merge($shared, [
                        'status' => $status,
                        'message' => $message,
                    ]))->toResponse($request)->setStatusCode($status);
                }
            }

        });

    })
    ->create();





