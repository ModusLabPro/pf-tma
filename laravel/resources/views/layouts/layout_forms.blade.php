<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @stack('styles')
</head>
<body>
@include('components.session_alert.session_alert')
<style>
    .alert-session {
        z-index: 101;
        bottom: 7px;
        position: fixed;
        margin-right: auto;
        left: 0;
        right: 0;
        display: flex;
        margin-left: auto !important;
        text-align: center;
        max-width: calc(100% - 320px);
        justify-content: flex-start;
    }
</style>

 @yield('content')

</body>

@stack('scripts')

</html>
