@extends('layouts.layout_forms')

@section('content')
    <form method="POST" action="{{route('code.confirm')}}" class="flex flex-col gap-8 mt-auto">
        @csrf
        <input type="hidden" name="rule" value="dont_exist">
        <input type="hidden" name="type" value="phone">
        <input type="hidden" name="phone" value="{{request()->phone}}">
        <a
            href="{{route('register')}}"
            class="flex items-center text text-additional font-semibold gap-2"
        >
            <img src="{{asset('/assets/img/icon/arrow-left.svg')}}" alt="">
            Назад
        </a>
        <div class="flex flex-col gap-3">
            <h2 class="text-headline3 xs:text-headline2 font-bold text-inactive">Регистрация</h2>
            <p class="text-secondary text-additional_md">
                Введите код из SMS
            </p>
        </div>
        <div class="flex justify-between xs:gap-2 pincode">
            <input type="hidden" id="fullval" name="code" value="">
            <label>
                <input type="number" maxlength="1" min="0" tabindex="1"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px]  rounded-2xl border border-stroke py-3 px-4 text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
            <label>
                <input type="number" maxlength="1" min="0" tabindex="2"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px] rounded-2xl border border-stroke text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
            <label>
                <input type="number" maxlength="1" min="0" tabindex="3"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px] rounded-2xl border border-stroke text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
            <label>
                <input type="number" maxlength="1" min="0" tabindex="4"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px] rounded-2xl border border-stroke text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
            <label>
                <input type="number" maxlength="1" min="0" tabindex="5"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px] rounded-2xl border border-stroke text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
            <label>
                <input type="number" maxlength="1" min="0" tabindex="6"
                       class="w-[45px] h-[60px] xl:w-[64px] xl:h-[72px] rounded-2xl border border-stroke text-headline3 xs:text-headline2 font-bold text-center focus:border-secondary focus-visible:border-secondary"
                       required
                >
            </label>
        </div>
        <div class="flex flex-col gap-2">

            <button type="submit"
                    class="w-full bg-primary py-3 px-4 rounded-lg text-inactive text hover:bg-hover-yellow transition-all duration-300"
            >
                Продолжить
            </button>
        </div>
    </form>
    <form method="POST" action="{{route('code.send')}}" class="flex flex-col mt-3">
        @csrf
        <input type="hidden" name="rule" value="dont_exist">
        <input type="hidden" name="type" value="phone">
        <input type="hidden" name="phone" value="{{request()->phone}}">
        <button
            id="resend"
            class="w-full py-3 px-4 rounded-lg border border-additional text-additional text text-center hover:bg-hover-green hover:text-white hover:border-hover-green transition-all duration-300 disabled:text-stroke disabled:border-stroke disabled:cursor-not-allowed disabled:hover:bg-transparent"
            disabled
        >
        Отправить код повторно <span id="timer"></span>
    </button>
    </form>
@endsection

@push('scripts')
    <script>
        function countDown(elm, duration, fn) {
            let countDownDate = new Date().getTime() + (1000 * duration);
            let x = setInterval(function () {
                let now = new Date().getTime();
                let distance = countDownDate - now;
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                elm.innerHTML = "через " + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
                if (distance < 0) {
                    clearInterval(x);
                    fn();
                    elm.innerHTML = "";
                }
            }, 0);
        }

        countDown(document.getElementById("timer"), 60, function () {
            document.getElementById("resend").disabled = false;
        });
    </script>
    <script>
        $("input").keydown(function (e) {
            $(this).val("");
        });
        $("input").keyup(function (e) {
            var $wrap = $(this).closest(".pincode");
            var $inputs = $wrap.find("input[type=\"number\"]");
            var val = $(this).val();
            if (val === val.replace(/[0-9]/, "")) {
                $(this).val("");
                return false;
            }
            $inputs.eq($inputs.index(this) + 1).focus();
            var fullval = "";
            $inputs.each(function () {
                fullval = fullval + (parseInt($(this).val()) || "0");
            });
            $wrap.find("#fullval").val(fullval);
        });
    </script>
@endpush
