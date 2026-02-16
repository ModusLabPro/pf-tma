@extends('layouts.layout_forms')

@section('content')
    <form method="POST" name="passwordChangeForm" action="{{route('password.update')}}" class="flex flex-col gap-8 mt-auto">
        @csrf
        <input type="hidden" name="email" value="{{request()->email}}">
        <input type="hidden" name="token" value="{{request()->token}}">
        <div class="flex flex-col gap-3">
            <h2 class="text-headline3 xs:text-headline2 font-bold text-inactive">Восстановление пароля</h2>
            <p class="text-secondary text-additional_md">
                Придумайте новый пароль
            </p>
        </div>
        <div class="flex flex-col gap-2">
            <div class="input-group">
                <label class="relative">
                    <span class="password-control cursor-pointer absolute top-1/2 translate-y-[-50%] w-[16px] h-[16px] right-[10px]"></span>
                    <input type="password" name="password" id="password" placeholder="Введите новый пароль"
                           class="w-full bg-filling rounded-lg py-3 px-4 text text-secondary placeholder:text-stroke focus:outline-secondary focus-visible:outline-secondary"
                           required
                    >
                </label>
            </div>
            <div class="input-group">
                <label class="relative">
                    <span class="password-control cursor-pointer absolute top-1/2 translate-y-[-50%] w-[16px] h-[16px] right-[10px]"></span>
                    <input type="password" name="password_confirmation" id="password_confirmation"
                           placeholder="Подтвердите новый пароль"
                           class="w-full bg-filling rounded-lg py-3 px-4 text text-secondary placeholder:text-stroke focus:outline-secondary focus-visible:outline-secondary"
                           required
                    >
                </label>
            </div>
        </div>
        <button type="submit"
                class="w-full bg-primary py-3 px-4 rounded-lg text-inactive text hover:bg-hover-yellow transition-all duration-300"
        >
            Создать
        </button>

    </form>
@endsection
    <!-- Встроенные скрипты из HTML -->
@push('scripts')
    <script>
        $(document).ready(function () {
            $("form[name='passwordChangeForm']").validate({
                rules: {
                    password: {
                        required: true,
                        minlength: 6
                    },
                    password_confirmation: {
                        minlength: 6,
                        equalTo: "#password"
                    }
                },
                messages: {
                    password: {
                        required: "Введите пароль",
                        minlength: "Пароль должен быть не менее 6 символов",
                    },
                    password_confirmation: {
                        required: "Введите пароль",
                        minlength: "Пароль должен быть не менее 6 символов",
                        equalTo: "Пароли не совпадают"
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
