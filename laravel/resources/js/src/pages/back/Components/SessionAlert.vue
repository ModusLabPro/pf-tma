<!--пример: return redirect()->back()->with(['success' => 'Сообщение']);
пример: return redirect()->back()->with(['error' => 'Сообщение']);
пример: return redirect()->back()->with(['message' => 'Сообщение', 'alert' => 'danger']); //alert - классы бустрапа, необязательно, по умолчанию primary-->

<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      />
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      />
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </symbol>
  </svg>

  <div>
    <div
      v-if="$page.props.flash.success"
      class="border-additional justify-content-start alert-session alert alert-success alert-dismissible fade show bg-green-active border-additional mt-8 flex h-[50px] items-center gap-3 rounded-[12px] border p-0 px-3 py-2 sm:mt-10 sm:ml-72 sm:p-4"
      role="alert"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_62_33575)">
          <path d="M11 17L14 20L21 13" stroke="#01814E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#01814E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_62_33575">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h3 class="text-secondary text-sm font-semibold">{{ $page.props.flash.success }}</h3>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div
      v-if="$page.props.flash.message"
      class="alert-session alert alert-primary alert-{{ $page.props.flash.alert }} alert-dismissible fade show"
      role="alert"
    >
      <svg class="bi me-2 flex-shrink-0" style="margin-right: 10px" width="24" height="24" role="img" aria-label="Info:">
        <use xlink:href="#info-fill" />
      </svg>
      <strong>{{ $page.props.flash.message }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div v-if="$page.props.flash.error" class="alert-session alert alert-warning alert-dismissible fade show" role="alert">
      <svg class="bi me-2 flex-shrink-0" style="margin-right: 10px" width="24" height="24" role="img" aria-label="Danger:">
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <strong>{{ $page.props.flash.error }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div v-if="$page.props.flash.errors" class="alert-session alert alert-warning alert-dismissible fade show" role="alert">
      <svg class="bi me-2 flex-shrink-0" style="margin-right: 10px" width="24" height="24" role="img" aria-label="Danger:">
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <strong v-for="(error, index) in $page.props.flash.errors">{{ error }}</strong>
      <button type="button" class="btn-close" onclick="" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<!--не работает в инерции скрипт-->
<!--<script>
document.querySelector('.btn-close').addEventListener('click', function(event) {
    event.target.closest(".alert-session").display = "none";
})
</script>-->

<style>
.alert {
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-warning {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-primary {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-session {
  z-index: 101;
  bottom: 7px;
  position: fixed;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  margin-left: 18rem;
  text-align: center;
  max-width: calc(100% - 320px);
  justify-content: flex-start;
  /*        color: black;*/
}
.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
  height: 10px;
}
</style>
<script setup></script>
