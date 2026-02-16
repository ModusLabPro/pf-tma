<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import type { ICity } from '@/entities/city';
import type { IUserCity } from '@/entities/user';
import type { FormSubmitEvent } from '@primevue/forms';

import { Link, router, useForm, usePage } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { register } from 'swiper/element/bundle';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { z } from 'zod';

import CatalogNav from '@/app/layouts/default-layout/ui/CatalogNav.vue';
import MobileMenuFooter from '@/app/layouts/default-layout/ui/MobileMenuFooter.vue';
import { ICart } from '@/entities/cart/model/cart';
import { IProduct } from '@/entities/products';
import { useBreadcrumbSchema } from '@/shared/composables/useBreadcrumbList';
import { LangSwitcher } from '@/shared/i18n';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconBookOpen from '@/shared/icons/IconBookOpen.svg';
import IconDzenOutline from '@/shared/icons/IconDzenOutline.svg?skipsvgo';
import IconFire from '@/shared/icons/IconFire.svg';
import IconMir from '@/shared/icons/IconMir.svg';
import IconPayKeeper from '@/shared/icons/IconPayKeeper.svg?skipsvgo';
import IconPhoneCall from '@/shared/icons/IconPhoneCall.svg';
import IconPin from '@/shared/icons/IconPin.svg?skipsvgo';
import IconPinFilled from '@/shared/icons/IconPinFilled.svg?skipsvgo';
import IconPlus from '@/shared/icons/IconPlus.svg';
import IconSealPercent from '@/shared/icons/IconSealPercent.svg';
import IconSearch from '@/shared/icons/IconSearch.svg';
import IconShoppingCart from '@/shared/icons/IconShoppingCart.svg?skipsvgo';
import IconSquaresFour from '@/shared/icons/IconSquaresFour.svg?skipsvgo';
import IconTelegramOutline from '@/shared/icons/IconTelegramOutline.svg?skipsvgo';
import IconTruck from '@/shared/icons/IconTruck.svg';
import IconVkOutline from '@/shared/icons/IconVkOutline.svg?skipsvgo';
import IconYoutubeOutline from '@/shared/icons/IconYoutubeOutline.svg?skipsvgo';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { CatalogMenu } from '@/shared/ui/catalog-menu';
import { VContainer } from '@/shared/ui/container';
import { VFormItem } from '@/shared/ui/form-item';
import { VMenuBar } from '@/shared/ui/menu-bar';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { default as Button } from '@/shared/ui/volt/Button.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import ConfirmDialog from '@/shared/ui/volt/ConfirmDialog.vue';
import Dialog from '@/shared/ui/volt/Dialog.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import OverlayBadge from '@/shared/ui/volt/OverlayBadge.vue';
import { default as Popover } from '@/shared/ui/volt/Popover.vue';
import { default as RadioButton } from '@/shared/ui/volt/RadioButton.vue';
import Toast from '@/shared/ui/volt/Toast.vue';
import { SignInModal } from '@/widgets/auth';
import { CallMe } from '@/widgets/call-me';
import { CartPopup } from '@/widgets/cart-popup';
import { CookieReminder } from '@/widgets/cookie-reminder';
import { RulesAndAgreementsDrawer } from '@/widgets/rules-and-agreements-drawer';

import { ISearchProductHint } from '../model/searchTypes';

register();

const { t } = useI18n();

const page = usePage<{ cities: ICity[]; user_city: IUserCity; cart: ICart; noveltyProducts: IProduct[] }>();

// TODO: унифицировать логику мобильных меню
const isMobileMenuOpen = ref<boolean>(false);
const isCatalogMenuOpen = ref<boolean>(false);
const isBurgerOpen = ref<boolean>(false);
const isRulesDrawerOpen = ref<boolean>(false);

const toggleCatalogMenu = (): void => {
  const currentRoute = route().current();
  if (currentRoute && currentRoute !== 'catalog.index') {
    router.visit(route('catalog.index', { menu: 'open' }), {
      onSuccess: () => {
        isCatalogMenuOpen.value = true;
      },
    });
  } else {
    isCatalogMenuOpen.value = !isCatalogMenuOpen.value;
    isBurgerOpen.value = !isBurgerOpen.value;
    if (isCatalogMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  }
};

const toggleMobileMenu = (): void => {
  if (isCatalogMenuOpen.value) {
    isCatalogMenuOpen.value = false;
  } else if (isSearchMenuOpen.value) {
    isSearchMenuOpen.value = false;
  } else {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }
  isBurgerOpen.value = !isBurgerOpen.value;
};

const currentYear = new Date().getFullYear();

const menuItems = computed<MenuItem[]>(() => [
  {
    label: t('header.promo'),
    iconComponent: IconSealPercent,
    route: 'promotion.index',
  },
  {
    label: t('header.recipes'),
    iconComponent: IconBookOpen,
    route: 'recipe.index',
  },
  {
    label: t('header.deliveryAndPayment'),
    iconComponent: IconTruck,
    route: 'faq.faq.index',
  },
]);

const searchQuery = ref<string>();

const form = useForm({
  email: '',
  agreement: false,
});

const resolver = zodResolver(
  z.object({
    email: z.string().email('Введите корректный email'),
    agreement: z.boolean().refine((val) => val, {
      message: 'Обязательное поле',
      path: ['agreement'],
    }),
  }),
);

const onSubmit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    form.post(route('subscribe.store'), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset();
      },
    });
  }
};

const openCitySelect = shallowRef<InstanceType<typeof Popover>>();
const isCitySelectOpen = ref<boolean>(false);
const selectedCityId = ref<number | null>(null);

const toggleCitySelect = (e: Event): void => {
  openCitySelect.value?.toggle(e);
  isCitySelectOpen.value = false;
};

const setUserCity = async (e: Event, city_id: number): Promise<void> => {
  const response = await fetch('/city/set-city', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ city_id }),
  });

  if (response.ok) {
    router.reload();
    toggleCitySelect(e);
  }
};

watch(
  () => page.props.user_city?.city_id,
  (id) => {
    if (id !== null && selectedCityId.value === null) {
      selectedCityId.value = id;
    }
  },
  { immediate: true },
);

const scrollY = ref<number>(0);
const showMenuBar = ref<boolean>(true);
const logoHeight = ref<string>('100%');

let ticking: boolean = false;
let lastScrollY: number = 0;
let lastShowMenuBar: boolean = true;
let lastLogoHeight: string = '100%';

const handleScroll = (): void => {
  if (typeof window === 'undefined') return;

  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY) < 2) return;

  if (!ticking) {
    requestAnimationFrame(() => {
      lastScrollY = currentScrollY;

      const scrollThreshold = 25;
      const hysteresis = 20;

      let newShowMenuBar;
      if (lastShowMenuBar) {
        newShowMenuBar = currentScrollY < scrollThreshold + hysteresis;
      } else {
        newShowMenuBar = currentScrollY < scrollThreshold - hysteresis;
      }

      if (lastShowMenuBar !== newShowMenuBar) {
        showMenuBar.value = newShowMenuBar;
        lastShowMenuBar = newShowMenuBar;
      }

      const minLogoHeight = 60;
      const maxLogoHeight = 100;

      const newLogoHeight = newShowMenuBar
        ? `${minLogoHeight + (maxLogoHeight - minLogoHeight) * (1 - Math.min(currentScrollY, scrollThreshold) / scrollThreshold)}px`
        : `${minLogoHeight}px`;

      if (lastLogoHeight !== newLogoHeight) {
        logoHeight.value = newLogoHeight;
        lastLogoHeight = newLogoHeight;
      }

      scrollY.value = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
};

const isSearchModalOpen = ref<boolean>(false);
const isSearchMenuOpen = ref<boolean>(false);
const searchModalInput = ref<HTMLInputElement>();
const isSearchExpanded = ref<boolean>(false);

const toggleSearchMenu = (): void => {
  isSearchMenuOpen.value = !isSearchMenuOpen.value;
  if (!isBurgerOpen.value) {
    isBurgerOpen.value = !isBurgerOpen.value;
  } else {
    isCatalogMenuOpen.value = false;
    isMobileMenuOpen.value = false;
  }
};

const closeMenu = (): void => {
  isCatalogMenuOpen.value = false;
  isBurgerOpen.value = false;
  isSearchMenuOpen.value = false;
  isCombinationsMenuOpen.value = false;
};

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false;
  isBurgerOpen.value = false;
};

const openSearchModal = (): void => {
  isSearchModalOpen.value = true;
  nextTick(() => {
    searchModalInput.value?.focus();
  });
};

const closeModal = (): void => {
  isSearchModalOpen.value = false;
};

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

watch(searchQuery, (newValue) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    if (newValue?.trim()) {
      sendSearchRequest(newValue);
    }
  }, 350);
});

const foundProducts = ref<ISearchProductHint[]>([]);

const sendSearchRequest = async (query: string): Promise<void> => {
  const url = `/catalog/autocomplete?search=${encodeURIComponent(query)}`;

  foundProducts.value = await fetch(url).then((res) => res.json());
};

const goToCatalogSearch = (): void => {
  if (!!searchQuery.value) {
    isSearchExpanded.value = false;
    router.visit(`/catalog?search=${searchQuery.value}`, {
      onFinish: () => {
        isCatalogMenuOpen.value = false;
        isBurgerOpen.value = false;
        isMobileMenuOpen.value = false;
        isSearchMenuOpen.value = false;
      },
    });
  }
};

const validFoundProducts = computed(() => foundProducts.value.filter((p) => p.name && p.price_type && p.price && p.slug));

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && isSearchModalOpen.value) {
    closeModal();
  }
};

const clearSearchQuery = (): void => {
  searchQuery.value = '';
};

watch([isMobileMenuOpen, isCatalogMenuOpen, isSearchModalOpen, isSearchMenuOpen], ([mobileOpen, catalogOpen, modalOpen, searchOpen]) => {
  if (typeof document === 'undefined') return;

  if (mobileOpen || catalogOpen || modalOpen || searchOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

onMounted(() => {
  if (route().params.menu === 'open') {
    requestAnimationFrame(() => {
      isCatalogMenuOpen.value = true;
      isBurgerOpen.value = true;
    });
  }
  if (route().params.search) {
    searchQuery.value = route().params.search;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('keydown', handleKeydown);
});

const isRedirectPopupOpen = ref<boolean>(false);

onMounted(() => {
  if (route().params.popup === 'redirect') {
    requestAnimationFrame(() => {
      isRedirectPopupOpen.value = true;
    });
  }
});

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('overflow-hidden');
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
  if (typeof document !== 'undefined') {
    document.removeEventListener('keydown', handleKeydown);
  }
});

const { isMobile, isTablet, isDesktop } = useScreenSize();

const signInModal = useTemplateRef<InstanceType<typeof SignInModal>>('signInModal');

const modalParam = computed(() => {
  if (typeof window === 'undefined') return null;

  try {
    const url = new URL(page.url, window.location.origin);
    return url.searchParams.get('modal');
  } catch (e) {
    // В SSR контексте используем page.url напрямую
    const url = new URL(page.url, 'http://localhost');
    return url.searchParams.get('modal');
  }
});

onMounted(() => {
  checkAndOpenModal(modalParam.value);
});

watch(modalParam, (newVal) => {
  checkAndOpenModal(newVal);
});

function checkAndOpenModal(modal: string | null) {
  if (typeof window === 'undefined') return;

  if (modal === 'login' && signInModal.value) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    signInModal.value.openModal();
    params.delete('modal');

    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');

    router.replace({
      url: newUrl,
      preserveScroll: true,
    });
  }
}

const isCombinationsMenuOpen = ref(false);
const onOpenMenu = (): void => {
  isCombinationsMenuOpen.value = true;
  isCatalogMenuOpen.value = true;
  isBurgerOpen.value = true;
};

const scrollToNovelty = async () => {
  if (typeof document === 'undefined') return;

  const currentRoute = route().current();
  const isMainPage = currentRoute && currentRoute === 'main-page';

  const scroll = () => {
    const section = document.getElementById('noveltySection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isMainPage) {
    await nextTick(scroll);
  } else {
    router.visit(route('main-page', { scroll: 'novelty' }), {
      preserveScroll: true,
      onSuccess: () => {
        setTimeout(scroll, 500);
      },
    });
  }
};

const { generateSchema } = useBreadcrumbSchema();
generateSchema();

const openRulesDrawer = () => {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  url.searchParams.set('rules', 'open');
  const newUrl = url.pathname + (url.search ? url.search : '') + (url.hash || '');

  isRulesDrawerOpen.value = true;

  router.replace({
    url: newUrl,
    preserveScroll: true,
  });
};
</script>

<template>
  <Toast />
  <Toast group="html">
    <template #message="{ message }">
      <div class="[&_a]:font-semibold [&_a]:underline" v-html="message.detail" />
    </template>
  </Toast>
  <Dialog v-model:visible="isRedirectPopupOpen" modal :draggable="false" class="!pt-0">
    <h2 class="text-default-bold md:text-heavy-bold mt-0 w-full text-center">Мы обновились!</h2>
    <p class="text-small-medium mt-3 text-center font-normal">
      Мы улучшаем наш сервис и переехали на PrimeFoods. <br />
      Это наш новый официальный магазин.
    </p>
    <VButton label="Понятно" class="mt-6 w-full" @click="isRedirectPopupOpen = false" />
  </Dialog>
  <ConfirmDialog />
  <section class="relative flex min-h-screen flex-col">
    <header
      class="bg-white pt-6 sm:pb-6"
      :class="[isCatalogMenuOpen || isSearchMenuOpen ? '!bg-light-gray' : '', showMenuBar ? '' : 'sticky top-0 z-[1000]']"
    >
      <VContainer v-if="!isMobile && !isTablet">
        <div class="flex items-center gap-8 px-8">
          <Link
            v-if="!isMobile"
            :href="route('main-page')"
            class="flex w-[174px] shrink-0 flex-col justify-end"
            :class="showMenuBar ? 'h-[100px]' : 'h-auto'"
          >
            <img
              src="/images/logo2017.png"
              alt="alt"
              class="block w-full object-contain transition-all duration-200 ease-in-out"
              :style="{ height: logoHeight }"
            />
          </Link>
          <div class="flex flex-auto flex-col gap-2">
            <VMenuBar v-show="showMenuBar" :model="menuItems" class="overflow-hidden">
              <template #item="{ item }">
                <Link :href="route(item.route)" class="flex items-center gap-2" :class="route().current() === item.route ? 'text-default' : ''">
                  <Component :is="item.iconComponent" />
                  {{ item.label }}
                </Link>
              </template>
              <template #end>
                <div class="flex items-center gap-6">
                  <LangSwitcher />
                  <div class="flex items-center gap-2">
                    <a href="tel:8-499-938-90-10" class="text-subsidiary-reg">8-499-938-90-10</a>
                    <!--                    <span class="text-complimentary-bold">{{ t('header.roundTheClock') }}</span>-->
                  </div>
                </div>
              </template>
            </VMenuBar>
            <div v-if="!isMobile" class="flex flex-1 gap-6">
              <CatalogNav />
              <div class="relative flex-1">
                <div
                  class="flex cursor-pointer justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                  @click="openSearchModal"
                >
                  <input
                    v-model="searchQuery"
                    type="text"
                    class="text-mob-small-reg/[16px] pointer-events-none w-full outline-none"
                    :placeholder="t('header.search')"
                    readonly
                  />
                  <div
                    id="search-button_toggle_modal"
                    class="bg-filling cursor-pointer rounded-[50px] p-2 text-[#666666]"
                    :class="!!searchQuery ? 'bg-text text-white' : 'bg-filling text-[#666666]'"
                  >
                    <IconSearch />
                  </div>
                </div>
                <div v-if="isSearchModalOpen" class="fixed inset-0 z-20 h-full w-full" @click="closeModal"></div>
                <div v-if="isSearchModalOpen" class="absolute -top-24 z-[51] mt-20 flex w-full items-start justify-center">
                  <div
                    class="rounded-20 w-full min-w-[650px] bg-white p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
                    @click.stop
                  >
                    <div class="mb-4 flex items-center justify-between">
                      <div
                        class="flex flex-1 cursor-pointer items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                      >
                        <input
                          ref="searchModalInput"
                          v-model="searchQuery"
                          type="text"
                          class="text-subsidiary-reg w-full outline-none"
                          :placeholder="t('header.search')"
                        />
                        <IconPlus v-if="!!searchQuery" class="text-default rotate-45" @click="clearSearchQuery" />
                        <div
                          id="search-button"
                          class="cursor-pointer rounded-[50px] p-2"
                          :class="!!searchQuery ? 'bg-text text-white' : 'bg-filling text-[#666666]'"
                        >
                          <IconSearch @click="goToCatalogSearch" />
                        </div>
                      </div>
                    </div>
                    <div v-if="!searchQuery">
                      <h3 class="text-default-medium mt-4 text-center">Поиск по товарам</h3>
                      <p class="text-subsidiary-reg mt-2 text-center">Для поиска товаров начните вводить текст</p>
                      <VButton label="В каталог" class="mx-auto mt-6" @click="router.visit(route('catalog.index'))" />
                    </div>
                    <div v-else-if="searchQuery && validFoundProducts.length === 0">
                      <h3 class="text-default-medium mt-4 text-center">Ничего не найдено</h3>
                    </div>
                    <div v-else>
                      <VScrollPanel class="max-h-[485px]">
                        <template v-for="product in validFoundProducts" :key="product.id">
                          <article class="border-b-filling border-b py-2">
                            <Link :href="`/catalog/product/${product.slug}`" :on-finish="closeModal" class="flex gap-4">
                              <VPicture
                                v-if="product.images[0]?.path"
                                :src="product.images[0]?.path"
                                alt="Изображение товара"
                                width="115px"
                                height="80px"
                                class="rounded-lg bg-[#f2f2f2]"
                                img-classes="rounded-lg min-w-[115px]"
                              />
                              <VPicture
                                v-else
                                src="/images/productPlaceholder.png"
                                alt="Изображение товара"
                                width="115px"
                                height="80px"
                                class="rounded-lg bg-[#f2f2f2]"
                                img-classes="rounded-lg min-w-[115px]"
                              />
                              <div class="flex flex-col justify-between">
                                <p class="text-mob-small-bold flex-auto">{{ product.name }}</p>
                                <div class="flex items-center gap-4 pb-2">
                                  <template v-if="product.sale_price">
                                    <span class="text-mob-small-bold text-default">{{ product.sale_price }} {{ product.price_type }}</span>
                                    <span class="text-complimentary-reg text-subsidiary line-through"
                                      >{{ product.price }} {{ product.price_type }}</span
                                    >
                                  </template>
                                  <template v-else>
                                    <span class="text-mob-small-bold text-default"> {{ product.price }} {{ product.price_type }}</span>
                                  </template>
                                  <span v-if="product.sale_percent" class="text-complimentary-reg bg-delete rounded-full px-2 py-1 text-white">
                                    -{{ product.sale_percent }}%
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </article>
                        </template>
                      </VScrollPanel>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-2">
                <Button v-if="!!page.props.user_city" rounded variant="outlined" @click="toggleCitySelect">
                  <template #default>
                    <IconPinFilled class="mr-1" />
                    <span class="text-default text-subsidiary-medium">{{ page.props.user_city.city }}</span>
                    <IconArrowDown class="ml-1 transition-transform duration-200" :class="{ 'rotate-180': isCitySelectOpen }" />
                  </template>
                </Button>

                <Button v-else rounded variant="outlined" @click="toggleCitySelect">
                  <template #default>
                    <IconPin class="mr-1" />
                    <span>{{ t('header.chooseCity') }}</span>
                    <IconArrowDown class="ml-1 transition-transform duration-200" :class="{ 'rotate-180': isCitySelectOpen }" />
                  </template>
                </Button>

                <Popover ref="openCitySelect" @show="isCitySelectOpen = true" @hide="isCitySelectOpen = false">
                  <h4 class="text-small-medium mb-4">{{ t('header.chooseCity') }}</h4>
                  <div class="text-small-regular flex min-w-[260px] flex-col gap-2">
                    <div v-for="city in page.props.cities" :key="city.id">
                      <RadioButton
                        v-model="selectedCityId"
                        :input-id="String(city.id)"
                        :name="String(city.id)"
                        :value="city.id"
                        @change="setUserCity($event, city.id)"
                      />
                      <label class="cursor-pointer pl-3" :for="String(city.id)">{{ city.name }}</label>
                    </div>
                  </div>
                </Popover>

                <CartPopup />
                <SignInModal ref="signInModal" />
              </div>
            </div>
          </div>
        </div>
      </VContainer>
      <div v-else class="flex w-full items-center gap-8">
        <div class="border-b-filling flex w-full flex-col gap-2 border-b">
          <div class="relative z-[1100] flex w-full items-center px-6" :class="!isSearchMenuOpen ? 'justify-between' : 'bg-light-gray pb-2'">
            <div class="flex items-center gap-4">
              <button v-if="!isSearchExpanded" class="p-2 focus:outline-none" aria-label="Toggle menu" @click="toggleMobileMenu">
                <div class="relative h-6 w-6">
                  <span
                    class="bg-text absolute top-1 left-0 h-[1.5px] w-6 origin-left transition-transform duration-300 ease-out"
                    :class="{
                      '!bg-default translate-y-2 scale-x-75 -rotate-45': isBurgerOpen,
                    }"
                  ></span>

                  <span
                    class="bg-text absolute top-3 left-0 h-[1.5px] w-6 transition-opacity duration-300 ease-out"
                    :class="{
                      '!bg-default': isBurgerOpen,
                    }"
                  ></span>

                  <span
                    class="bg-text absolute top-5 left-0 h-[1.5px] w-6 origin-left transition-transform duration-300 ease-out"
                    :class="{
                      '!bg-default -translate-y-2 scale-x-75 rotate-45': isBurgerOpen,
                    }"
                  ></span>
                </div>
              </button>

              <IconSearch v-if="!isSearchMenuOpen" class="text-subsidiary h-8 w-8" @click="toggleSearchMenu" />
            </div>

            <template v-if="!isSearchMenuOpen">
              <div>
                <Link :href="route('main-page')">
                  <VPicture src="/images/Logo2017.svg" alt="logo" height="40px" />
                </Link>
              </div>

              <div class="flex items-center gap-4">
                <Link :href="route('cart.index')" class="flex items-center justify-center">
                  <OverlayBadge :value="page.props.cart?.cartQuantity || 0" severity="danger" class="!translate-x-2 !-translate-y-2">
                    <IconShoppingCart class="flex items-center justify-center" />
                  </OverlayBadge>
                </Link>
                <SignInModal ref="signInModal" />
              </div>
            </template>
            <div v-else class="flex flex-1 items-center justify-between">
              <div
                class="bg-light-gray flex flex-1 cursor-pointer items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
              >
                <input v-model="searchQuery" type="text" class="text-mob-small-reg/[16px] w-full outline-none" :placeholder="t('header.search')" />
                <IconPlus v-if="!!searchQuery" class="text-default rotate-45" @click="clearSearchQuery" />
                <div class="cursor-pointer rounded-[50px] p-2" :class="!!searchQuery ? 'bg-text text-white' : 'bg-filling text-[#666666]'">
                  <IconSearch @click="goToCatalogSearch" />
                </div>
              </div>
            </div>
          </div>

          <div class="border-t-filling mt-2 w-full overflow-auto border-t">
            <div v-if="showMenuBar" class="text-subsidiary-medium flex min-w-max flex-nowrap gap-4 py-2 pl-4">
              <button class="text-default flex shrink-0 items-center gap-1" @click="toggleCatalogMenu">
                <IconSquaresFour />
                Каталог
              </button>
              <button v-if="!!page.props.user_city" class="text-default flex shrink-0 items-center gap-1" @click="isCitySelectOpen = true">
                <IconPinFilled />
                {{ page.props.user_city.city }}
              </button>
              <button v-else class="flex shrink-0 items-center gap-1" @click="isCitySelectOpen = true">
                <IconPin />
                Выберите город
              </button>
              <Dialog v-model:visible="isCitySelectOpen" modal :draggable="false" class="!rounded-20 w-9/10 pt-2 pr-3 pb-3">
                <template #header>
                  <h4 class="text-small-medium ml-4">{{ t('header.chooseCity') }}</h4>
                </template>
                <div class="text-small-regular ml-3.5 flex min-w-[260px] flex-col gap-3">
                  <div v-for="city in page.props.cities" :key="city.id">
                    <RadioButton
                      v-model="selectedCityId"
                      :input-id="city.name"
                      :name="city.name"
                      :value="city.id"
                      @change="setUserCity($event, city.id)"
                    />
                    <label class="cursor-pointer pl-3" :for="city.name">{{ city.name }}</label>
                  </div>
                </div>
              </Dialog>
              <Link :href="route('promotion.index')" class="flex shrink-0 items-center gap-1">
                <IconSealPercent />
                Акции
              </Link>
              <Link :href="route('recipe.index')" class="flex shrink-0 items-center gap-1">
                <IconBookOpen />
                Рецепты
              </Link>
              <button v-if="page.props?.noveltyProducts?.length" class="flex shrink-0 items-center gap-1" @click="scrollToNovelty">
                <IconFire />
                Новинки
              </button>
              <a href="/page/contacts" class="flex shrink-0 items-center gap-1">
                <IconPhoneCall />
                Контакты
              </a>
            </div>
          </div>
        </div>
        <div
          class="fixed inset-0 z-[1000] mt-12 flex flex-col overflow-auto bg-white px-6 py-4 transition-transform duration-500 ease-in-out"
          :class="{
            '-translate-x-full': !isMobileMenuOpen,
            'translate-x-0': isMobileMenuOpen,
          }"
        >
          <!-- Заголовок с логотипом и ссылкой на каталог -->
          <div class="bg-text mt-10 min-h-15 w-full rounded-2xl px-3">
            <Link :href="route('catalog.index')" class="flex justify-between" @click="closeMobileMenu">
              <h2 class="text-small-bold mt-3 flex items-center text-white">Каталог товаров</h2>
              <VPicture src="/images/test-images/header_mobile.webp" alt="header_mobile" class="-mt-9 h-[80px] w-[160px]" />
            </Link>
          </div>

          <!-- Навигация -->
          <nav class="text-small ml-3 flex max-h-[80%] flex-auto flex-col overflow-auto">
            <Link :href="route('promotion.index')" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Акции </Link>
            <Link href="/#noveltySection" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Новинки </Link>
            <Link :href="route('recipe.index')" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Рецепты </Link>
            <Link :href="route('combo.index')" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Комбо наборы </Link>
            <Link :href="route('page.page.about-us')" class="border-b-filling border-b py-3" @click="closeMobileMenu"> О нас </Link>
            <Link href="/page/privilege-program" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Программа лояльности </Link>
            <Link href="/page/return-exchange" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Условия возврата и обмена </Link>
            <Link :href="route('faq.faq.index')" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Часто задаваемые вопросы </Link>
            <Link href="/page/contacts" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Контакты </Link>
            <Link href="#requisites" class="border-b-filling border-b py-3" @click="closeMobileMenu"> Реквизиты </Link>
          </nav>

          <MobileMenuFooter />
        </div>
        <!-- TODO Вынести в отдельный компонент -->
        <div
          class="bg-light-gray fixed inset-0 z-[1000] mt-14 flex flex-col overflow-auto px-6 py-4 transition-transform duration-500 ease-in-out"
          :class="{
            '-translate-x-full': !isCatalogMenuOpen,
            'translate-x-0': isCatalogMenuOpen,
          }"
        >
          <CatalogMenu
            :base-path="isCombinationsMenuOpen ? 'combination' : 'catalog'"
            :is-catalog-page="!isCombinationsMenuOpen"
            :base-breadcrumbs="
              isCombinationsMenuOpen
                ? [
                    { label: 'Главная', route: route('main-page') },
                    { label: 'Рекомендации по сочетанию продуктов', route: route('combination.index') },
                  ]
                : undefined
            "
            @close-menu="closeMenu"
          />

          <MobileMenuFooter />
        </div>
        <div
          class="bg-light-gray fixed inset-0 z-[1000] mt-14 flex flex-col overflow-auto px-6 py-4 transition-transform duration-500 ease-in-out"
          :class="{
            '-translate-x-full': !isSearchMenuOpen,
            'translate-x-0': isSearchMenuOpen,
          }"
        >
          <div v-if="!searchQuery">
            <h3 class="text-default-medium mt-8 text-center">Поиск по товарам</h3>
            <p class="text-subsidiary-reg mt-2 text-center">Для поиска товаров начните вводить текст</p>
            <VButton label="В каталог" class="mx-auto mt-6" @click="router.visit(route('catalog.index'))" />
          </div>
          <div v-else-if="searchQuery && validFoundProducts.length === 0">
            <h3 class="text-default-medium mt-8 text-center">Ничего не найдено</h3>
          </div>
          <div v-else>
            <VScrollPanel>
              <template v-for="product in validFoundProducts" :key="product.id">
                <article class="border-b-filling mt-4 border-b py-2">
                  <Link :href="`/catalog/product/${product.slug}`" :on-finish="toggleMobileMenu" class="flex gap-2">
                    <VPicture
                      v-if="product.images[0]?.path"
                      :src="product.images[0]?.path"
                      alt="Изображение товара"
                      width="74px"
                      height="64px"
                      class="rounded-lg bg-[#f2f2f2]"
                      img-classes="rounded-lg min-w-[74px]"
                    />
                    <VPicture
                      v-else
                      src="/images/productPlaceholder.png"
                      alt="Изображение товара"
                      width="74px"
                      height="64px"
                      class="rounded-lg bg-[#f2f2f2]"
                      img-classes="rounded-lg min-w-[74px]"
                    />
                    <div class="flex flex-col justify-between">
                      <p class="text-subsidiary-medium flex-auto">{{ product.name }}</p>
                      <div class="mt-2 flex items-center gap-4 pb-2">
                        <template v-if="product.sale_price">
                          <span class="text-mob-small-bold text-default">{{ product.sale_price }} {{ product.price_type }}</span>
                          <span class="text-complimentary-reg text-subsidiary line-through">{{ product.price }} {{ product.price_type }}</span>
                        </template>
                        <template v-else>
                          <span class="text-mob-small-bold text-default"> {{ product.price }} {{ product.price_type }}</span>
                        </template>
                        <span v-if="product.sale_percent" class="text-complimentary-reg bg-delete rounded-full px-2 py-1 text-white">
                          -{{ product.sale_percent }}%
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </template>
            </VScrollPanel>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-auto">
      <slot :open-menu="onOpenMenu" />
    </main>
    <CallMe>
      <template #button="{ openModal }">
        <button
          id="call-me-button"
          class="bg-light-gray fixed right-2 bottom-2 z-[100] cursor-pointer rounded-full border border-white p-2 shadow-[0px_4px_24px_rgba(0,0,0,0.25)] md:right-14 md:bottom-32.5"
          @click.stop="openModal"
        >
          <div class="bg-text rounded-full p-2">
            <IconPhoneCall class="text-white" />
          </div>
        </button>
      </template>
    </CallMe>
    <CookieReminder />
    <RulesAndAgreementsDrawer v-model:is-open="isRulesDrawerOpen" />
    <footer class="text-text-secondary text-small mt-10 bg-[#F5F7FA] px-2 pt-12">
      <VContainer class="px-4 md:px-8">
        <div class="border-stroke flex justify-between border-b pb-8 max-sm:flex-col max-sm:gap-8">
          <div v-if="isMobile" class="flex flex-col gap-4">
            <h4 class="text-small-medium">Рассылка о вкусном и полезном</h4>
            <Form v-slot="$form" class="flex w-full flex-col gap-2" :resolver :initial-values="form" @submit="onSubmit">
              <VFormItem :error="$form.email?.error?.message ?? form.errors.email">
                <InputText
                  v-model="form.email"
                  :placeholder="t('footer.input_email')"
                  type="email"
                  class="border-text hover:border-text-secondary"
                  required
                  autocomplete="username"
                  name="email"
                  :invalid="!!form.errors.email"
                />
              </VFormItem>
              <VFormItem>
                <div class="flex gap-3">
                  <Checkbox v-model="form.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
                  <label for="policy-checkbox" class="text-complimentary-reg text-additional w-full"
                    >{{ t('footer.privacy_policy_checkbox_step_1') }}
                    <a
                      href="#"
                      target="_blank"
                      download="политика конфиденциальности.pdf"
                      class="hover:text-additional underline transition-colors"
                      >{{ t('footer.privacy_policy_checkbox_link') }}</a
                    >
                    {{ t('footer.privacy_policy_checkbox_step_2') }}</label
                  >
                </div>
              </VFormItem>
              <VButton type="submit" class="w-full py-10" label="Подписаться" />
            </Form>
          </div>
          <div class="flex flex-col items-center gap-6 pr-4">
            <div>
              <Link :href="route('main-page')">
                <VPicture src="/images/logo2017.png" alt="alt" width="170px" height="100%" />
              </Link>
            </div>
            <div v-if="isDesktop || isTablet">
              <p class="font-medium">{{ t('footer.payment_systems') }}</p>
              <div class="mt-3 flex items-center gap-6">
                <IconPayKeeper />
                <IconMir />
              </div>
            </div>
          </div>

          <div class="flex gap-10">
            <div class="flex flex-col justify-center gap-6 max-sm:w-full sm:flex-row lg:gap-12">
              <nav class="items-center justify-between max-sm:flex">
                <div class="flex flex-col gap-3">
                  <Link :href="route('catalog.index')">Каталог</Link>
                  <Link href="/page/company/about-us">О нас</Link>
                  <Link href="/page/newsletter">Рассылка</Link>
                  <Link :href="route('blog.index')">Блог</Link>
                </div>
                <div class="flex flex-col gap-3 sm:mt-3">
                  <Link href="/page/return-exchange">Возврат и обмен</Link>
                  <Link href="/page/privilege-program">Программа привилегий</Link>
                  <Link href="/page/contacts">Контакты</Link>
                </div>
              </nav>

              <div id="requisites">
                <h4 class="text-small-medium">Контакты</h4>
                <div class="text-mob-small-reg mt-3 flex items-start gap-4 max-sm:justify-between lg:gap-20">
                  <div class="flex flex-col gap-3">
                    <div>
                      <p class="text-subsidiary text-complimentary-reg">{{ t('footer.make_order') }}</p>
                      <a href="tel:8-499-938-90-10" class="max-sm:text-subsidiary-medium sm:font-bold">8-499-938-90-10</a>
                    </div>
                    <div>
                      <p class="text-subsidiary text-complimentary-reg">{{ t('footer.order_time') }}</p>
                      <p class="max-sm:text-subsidiary-medium max-sm:mt-1">10:00 - 20:00</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div>
                      <p class="text-subsidiary text-complimentary-reg">HoReCa</p>
                      <a href="tel:+7 800 101-47-28" class="max-sm:text-subsidiary-medium sm:font-bold">+7 800 101-47-28</a>
                    </div>
                    <div>
                      <p class="text-subsidiary text-complimentary-reg">{{ t('footer.corporate_mail') }}</p>
                      <a class="max-sm:text-subsidiary-medium break-all" href="mailto:zakaz@primefoods.ru">zakaz@primefoods.ru</a>
                    </div>
                  </div>
                </div>
                <div v-if="isTablet" class="mt-6 flex max-w-[352px] flex-col gap-4">
                  <h4 class="text-small-medium">Рассылка о вкусном и полезном</h4>
                  <Form v-slot="$form" class="flex w-full flex-col gap-2" :resolver :initial-values="form" @submit="onSubmit">
                    <VFormItem :error="$form.email?.error?.message ?? form.errors.email">
                      <InputText
                        v-model="form.email"
                        :placeholder="t('footer.input_email')"
                        type="email"
                        class="border-text hover:border-text-secondary"
                        required
                        autocomplete="username"
                        name="email"
                        :invalid="!!form.errors.email"
                      />
                    </VFormItem>
                    <VFormItem>
                      <div class="flex gap-3">
                        <Checkbox v-model="form.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
                        <label for="policy-checkbox" class="text-complimentary-reg text-additional w-full"
                          >{{ t('footer.privacy_policy_checkbox_step_1') }}
                          <a
                            href="#"
                            target="_blank"
                            download="политика конфиденциальности.pdf"
                            class="hover:text-additional underline transition-colors"
                            >{{ t('footer.privacy_policy_checkbox_link') }}</a
                          >
                          {{ t('footer.privacy_policy_checkbox_step_2') }}</label
                        >
                      </div>
                    </VFormItem>
                    <VButton type="submit" class="w-full py-10" label="Подписаться" />
                  </Form>
                </div>
              </div>
              <div v-if="isMobile">
                <p class="text-small-medium">{{ t('footer.payment_systems') }}</p>
                <div class="flex items-center gap-6">
                  <IconPayKeeper />
                  <IconMir />
                </div>
              </div>
            </div>
            <div v-if="isDesktop" class="flex max-w-[352px] flex-col gap-4">
              <h4 class="text-small-medium">Рассылка о вкусном и полезном</h4>
              <Form v-slot="$form" class="flex w-full flex-col gap-2" :resolver :initial-values="form" @submit="onSubmit">
                <VFormItem :error="$form.email?.error?.message ?? form.errors.email">
                  <InputText
                    v-model="form.email"
                    :placeholder="t('footer.input_email')"
                    type="email"
                    class="border-text hover:border-text-secondary"
                    required
                    autocomplete="username"
                    name="email"
                    :invalid="!!form.errors.email"
                  />
                </VFormItem>
                <VFormItem>
                  <div class="flex gap-3">
                    <Checkbox v-model="form.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
                    <label for="policy-checkbox" class="text-complimentary-reg text-additional w-full"
                      >{{ t('footer.privacy_policy_checkbox_step_1') }}
                      <a
                        href="#"
                        target="_blank"
                        download="политика конфиденциальности.pdf"
                        class="hover:text-additional underline transition-colors"
                        >{{ t('footer.privacy_policy_checkbox_link') }}</a
                      >
                      {{ t('footer.privacy_policy_checkbox_step_2') }}</label
                    >
                  </div>
                </VFormItem>
                <VButton type="submit" class="w-full py-10" :label="t('footer.subscribe')" />
              </Form>
            </div>
          </div>
        </div>

        <div class="text-mob-small-reg lg:text-complimentary-reg flex flex-col justify-between gap-8 pt-6 pb-17 lg:flex-row lg:items-center">
          <div class="flex flex-col gap-3 max-lg:justify-between sm:flex-row lg:gap-50">
            <Link :href="route('main-page')">© ТД Прайм Фудс, {{ currentYear }}</Link>
            <Link href="/page/privacy-policy" class="hover:text-additional transition-colors">
              {{ t('footer.privacy_policy') }}
            </Link>
            <Link href="/faq" class="hover:text-additional transition-colors"> FAQ</Link>
            <button type="button" class="hover:text-additional w-fit cursor-pointer transition-colors" @click="openRulesDrawer">
              Правила и соглашения
            </button>
          </div>
          <div class="flex justify-between gap-4">
            <a href="https://www.youtube.com/channel/UCAiFMHSSTHQqL3Kd0D_3_hQ" target="_blank">
              <IconYoutubeOutline
                class="hover:text-default text-[#83939E] transition-colors duration-300"
                :width="isMobile || isTablet ? '48px' : '32px'"
                :height="isMobile || isTablet ? '48px' : '32px'"
              />
            </a>
            <a href="https://t.me/primefoods_ru" target="_blank">
              <IconTelegramOutline
                class="hover:text-default text-[#83939E] transition-colors duration-300"
                :width="isMobile || isTablet ? '48px' : '32px'"
                :height="isMobile || isTablet ? '48px' : '32px'"
              />
            </a>
            <a href="https://dzen.ru/primefoods" target="_blank">
              <IconDzenOutline
                class="hover:text-default text-[#83939E] transition-colors duration-300"
                :width="isMobile || isTablet ? '48px' : '32px'"
                :height="isMobile || isTablet ? '48px' : '32px'"
              />
            </a>
            <a href="https://vk.com/primefoods_ru" target="_blank">
              <IconVkOutline
                class="hover:text-default text-[#83939E] transition-colors duration-300"
                :width="isMobile || isTablet ? '48px' : '32px'"
                :height="isMobile || isTablet ? '48px' : '32px'"
              />
            </a>
          </div>
        </div>
      </VContainer>
    </footer>
  </section>
</template>

<style>
#noveltySection {
  @media (width < 1024px) {
    scroll-margin-top: 135px;
  }
}
</style>
