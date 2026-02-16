<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
</head>
<body>
<div>
{{--    вк начало --}}
    <div style="width: 200px">
        <script src="https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js"></script>
        <script type="text/javascript">
            if ('VKIDSDK' in window) {
                const VKID = window.VKIDSDK;

                VKID.Config.init({
                    app: 53624087,
                    redirectUrl: 'https://pstore-dev.zhuk.team/auth/vk/callback',
                    responseMode: VKID.ConfigResponseMode.Callback,
                    source: VKID.ConfigSource.LOWCODE,
                    scope: '', // Заполните нужными доступами по необходимости
                });

                const oneTap = new VKID.OneTap();

                oneTap.render({
                    container: document.currentScript.parentElement,
                    fastAuthEnabled: false,
                    showAlternativeLogin: true,
                    styles: {
                        borderRadius: 20
                    }
                })
                    .on(VKID.WidgetEvents.ERROR, vkidOnError)
                    .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
                        const code = payload.code;
                        const deviceId = payload.device_id;

                        VKID.Auth.exchangeCode(code, deviceId)
                            .then(vkidOnSuccess)
                            .catch(vkidOnError);
                    });

                function vkidOnSuccess(data) {
                    const url = '/auth/vk/callback';
                    fetch(url, {
                        method: 'POST', // Указываем метод
                        headers: {
                            'Content-Type': 'application/json' // Тип отправляемых данных
                        },
                        body: JSON.stringify(data) // Преобразуем объект в JSON
                    })
                        .then(response => response.json())
                        .then(resp => {
                            console.log('Ответ от сервера:', resp);
                        })
                        .catch(error => {
                            console.error('Ошибка:', error);
                        });
                }

                function vkidOnError(error) {
                    // Обработка ошибки
                }
            }
        </script>
    </div>
{{--    вк конец--}}

{{--  яндекс начало  --}}
    <a href="{{route("yandex.get")}}">yandex</a>
{{--    <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js"></script>--}}
{{--    <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></script>--}}
{{--    <script>--}}

{{--        window.YaAuthSuggest.init(--}}
{{--            {--}}
{{--                client_id: "6c94edd8670f465eb35a16d6f816b01b",--}}
{{--                response_type: "token",--}}
{{--                redirect_uri: "https://pstore-dev.zhuk.team/auth/vk/callback"--}}
{{--            },--}}
{{--            "https://pstore-dev.zhuk.team",--}}
{{--            {--}}
{{--                view: "button",--}}
{{--                parentId: "buttonContainerId",--}}
{{--                buttonSize: 'm',--}}
{{--                buttonView: 'main',--}}
{{--                buttonTheme: 'light',--}}
{{--                buttonBorderRadius: "17",--}}
{{--                buttonIcon: 'ya',--}}
{{--            }--}}
{{--        )--}}
{{--            .then(({handler}) => handler())--}}
{{--            .then(data => console.log('Сообщение с токеном', data))--}}
{{--            .catch(error => console.log('Обработка ошибки', error))--}}
{{--    </script>--}}
{{--  яндекс конец  --}}
</div>
</body>
</html>
