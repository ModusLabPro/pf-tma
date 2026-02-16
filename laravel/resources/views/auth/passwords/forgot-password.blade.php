@extends('layouts.layout_forms')

@section('content')
    <form method="POST" name="passwordRecForm" action="{{route('password.email')}}" class="flex flex-col gap-8 mt-auto">
        @csrf
        <a
            href="{{route('login')}}"
            class="flex items-center text text-additional font-semibold gap-2"
        >
            <img src="{{asset('/assets/img/icon/arrow-left.svg')}}" alt="">
            Назад
        </a>
        <div class="flex flex-col gap-3">
            <h2 class="text-headline3 xs:text-headline2 font-bold text-inactive">Восстановление пароля</h2>
            <p class="text-secondary text-additional_md">
                Введите почту, которая указана в личном кабинете. Убедитесь в правильности введенных данных.
            </p>
        </div>
        <div class="input-group">
            <label>
                <input type="email" name="email" id="email" placeholder="E-mail"
                       class="w-full bg-filling rounded-lg py-3 px-4 text text-secondary placeholder:text-stroke focus:outline-secondary focus-visible:outline-secondary"
                       required
                >
            </label>
        </div>
        <button type="submit"
                class="w-full bg-primary py-3 px-4 rounded-lg text-inactive text hover:bg-hover-yellow transition-all duration-300"
        >
            Восстановить пароль
        </button>
    </form>
@endsection
@push('scripts')
    <script>
        $(document).ready(function () {
            $("form[name='passwordRecForm']").validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    email: {
                        required: "Введите E-mail",
                        email: "Введите корректный E-mail"
                    }
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
