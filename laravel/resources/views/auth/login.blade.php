@extends('layouts.layout_forms')

@section('content')
    <form method="POST" name="loginForm" action="{{route('login.action')}}" class="flex flex-col gap-8 mt-0 md:mt-auto">
        @csrf
        <h2 class="text-headline3 md:text-headline2 font-bold text-inactive">Вход в кабинет</h2>
        <div class="flex flex-col gap-2">
            <div class="input-group">
                <label>
                    <span class="w-full relative inline-block">
                        <span class="absolute h-full left-0 top-0 bottom-0">
                            <span class="flex items-center h-full px-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_591_30216)">
                                        <path d="M24 17.9999C24 18.7072 23.719 19.3854 23.219 19.8855C22.7189 20.3856 22.0406 20.6666 21.3333 20.6666H2.66667C1.95942 20.6666 1.28115 20.3856 0.781049 19.8855C0.280952 19.3854 0 18.7072 0 17.9999V15.3333H24V17.9999Z"
                                              fill="#E12320" />
                                        <path d="M0 8.66675H24V15.3334H0V8.66675Z" fill="#162F9F" />
                                        <path d="M21.3333 3.33325H2.66667C1.95942 3.33325 1.28115 3.6142 0.781049 4.1143C0.280952 4.6144 0 5.29267 0 5.99992L0 8.66659H24V5.99992C24 5.29267 23.719 4.6144 23.219 4.1143C22.7189 3.6142 22.0406 3.33325 21.3333 3.33325Z"
                                              fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_591_30216">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </span>
                        <input type="tel" name="phone" id="phone"
                               class="phone w-full bg-filling border-none rounded-lg py-3 pr-4 pl-[50px] text text-secondary placeholder:text-stroke focus:outline-secondary focus-visible:outline-secondary"
                               placeholder="+ 7 ___ ___-__-__"
                               required
                               @if(env('APP_ENV') == 'local') value="9770159556" @endif
                        >
                    </span>
                </label>
            </div>
            <div class="input-group">
                <label class="relative">
                    <span class="password-control cursor-pointer absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] right-[10px]"></span>
                    <input type="password" name="password" id="password" placeholder="Пароль"
                           class="w-full bg-filling rounded-lg py-3 px-4 text text-secondary border-none placeholder:text-stroke focus:outline-secondary focus-visible:outline-secondary"
                           required
                    >
                </label>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <button type="submit"
                    class="w-full bg-primary py-3 px-4 rounded-lg text-inactive text hover:bg-hover-yellow transition-all duration-300"
            >
                Войти
            </button>
            <a href="{{route('register')}}"
               class="w-full py-3 px-4 rounded-lg border border-additional text-additional text text-center hover:bg-hover-green hover:text-white hover:border-hover-green transition-all duration-300">
                Зарегистрироваться
            </a>
        </div>
        @if(session('role') == null || session('role') == \User\Enums\RoleEnum::supplier->name)
            <a href="{{route('password.request')}}"
               class="w-max text text-additional font-semibold hover:text-hover-green transition-all duration-300"
            >
                Забыли пароль?
            </a>
        @else
            <a href="#" data-modal-target="default-modal" data-modal-toggle="default-modal"
               class="w-max text text-additional font-semibold hover:text-hover-green transition-all duration-300"
            >
                Забыли пароль?
            </a>
        @endif
    </form>

@endsection
@push('scripts')
    <script>
        $(document).ready(function () {
            $("form[name='loginForm']").validate({
                rules: {
                    phone: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    phone: {
                        required: "Введите Телефон"
                    },
                    password: {
                        required: "Введите пароль"
                    },
                },
                errorPlacement: function (error, element) {
                    let placement = element.closest(".input-group");
                    placement.append(error);
                },
                submitHandler: function (form) {
                    form.submit();
                }
            });
        });
    </script>
@endpush
<x-modal.forgot-password description="Для восстановления логина или пароля свяжитесь с технической поддержкой по номеру телефона" phone="8 800 555 35 35"></x-modal.forgot-password>
