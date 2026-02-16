<script setup lang="ts">
import { ref } from 'vue';

import IconCalendarFilled from '@/shared/icons/IconCalendarFilled.svg?skipsvgo';
import IconClockFilled from '@/shared/icons/IconClockFilled.svg?skipsvgo';
import IconClockOutline from '@/shared/icons/IconClockOutline.svg?skipsvgo';
import IconMapPin from '@/shared/icons/IconMapPinOutline.svg?skipsvgo';
import IconTruckFilled from '@/shared/icons/IconTruckFilled.svg?skipsvgo';
import IconWalletOutline from '@/shared/icons/IconWalletOutline.svg';
import { useScreenSize } from '@/shared/media-queries';
import Accordion from '@/shared/ui/volt/Accordion.vue';
import AccordionContent from '@/shared/ui/volt/AccordionContent.vue';
import AccordionHeader from '@/shared/ui/volt/AccordionHeader.vue';
import AccordionPanel from '@/shared/ui/volt/AccordionPanel.vue';
import Tab from '@/shared/ui/volt/Tab.vue';
import TabList from '@/shared/ui/volt/TabList.vue';
import TabPanel from '@/shared/ui/volt/TabPanel.vue';
import TabPanels from '@/shared/ui/volt/TabPanels.vue';
import Tabs from '@/shared/ui/volt/Tabs.vue';

const { isMobile, isDesktop } = useScreenSize();
const menuItems = [
  { label: 'Москва' },
  { label: 'Санкт-Петербург' },
  { label: 'Сочи' },
  { label: 'Нижний Новгород' },
  { label: 'Доставка по России' },
];

const openIndex = ref<number | null>(0);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <Tabs v-if="isDesktop" value="0">
    <TabList>
      <Tab v-for="(item, index) in menuItems" :key="index" :value="String(index)">
        <div class="flex items-center justify-center gap-1.5">
          <IconMapPin />
          <p>{{ item.label }}</p>
        </div>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="text-text flex gap-8">
          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium mb-3">График приема заказов</h4>

            <div class="grid grid-cols-2 gap-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-mob-small-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-subsidiary-medium mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-mob-small-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium text-text mb-3">Стоимость доставки</h4>
            <Accordion value="0">
              <AccordionPanel value="0">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">1 зона</p>
                    <p class="text-complimentary-reg mt-0.5">в пределах МКАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 09:00 до 21:00</p>
                          <p class="text-complimentary-reg text-subsidiary">любое 4-х часовое окно</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">400 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">2 зона</p>
                    <p class="text-complimentary-reg mt-0.5">МКАД до 20 км</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 10:00 до 21:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">500 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">3 зона</p>
                    <p class="text-complimentary-reg mt-0.5">МКАД до 30 км</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 12:00 до 18:00</p>
                          <p class="text-complimentary-reg text-subsidiary">любое 4-х часовое окно</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 15000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 15000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">700 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="3">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">4 зона</p>
                    <p class="text-complimentary-reg mt-0.5">МКАД от 30 км до 60км</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 12:00 до 18:00</p>
                          <p class="text-complimentary-reg text-subsidiary">любое 4-х часовое окно</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 15000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 15000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">700 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="text-text flex gap-8">
          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium mb-3">График приема заказов</h4>

            <div class="grid grid-cols-2 gap-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-mob-small-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-subsidiary-medium mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-mob-small-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium text-text mb-3">Стоимость доставки</h4>
            <Accordion value="0">
              <AccordionPanel value="0">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">1 зона</p>
                    <p class="text-complimentary-reg mt-0.5">внутри КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 11:00 до 17:00</p>
                          <p class="text-complimentary-reg text-subsidiary">17:00 - 22:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">550 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">2 зона</p>
                    <p class="text-complimentary-reg mt-0.5">до 10 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 14:00 до 19:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">600 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">3 зона</p>
                    <p class="text-complimentary-reg mt-0.5">до 20 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 19:00 до 23:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 30000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 30000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">800 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="3">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">4 зона</p>
                    <p class="text-complimentary-reg mt-0.5">от 20 до 30 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 19:00 до 23:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 50000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 50000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">1300 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="2">
        <div class="text-text flex gap-8">
          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium mb-3">График приема заказов</h4>

            <div class="grid grid-cols-2 gap-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-mob-small-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-subsidiary-medium mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-mob-small-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium text-text mb-3">Стоимость доставки</h4>
            <Accordion value="0">
              <AccordionPanel value="0">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">1 зона</p>
                    <p class="text-complimentary-reg mt-0.5">Сочи</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 09:00 до 21:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 6000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 6000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">400 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">2 зона</p>
                    <p class="text-complimentary-reg mt-0.5">Адлер, Сириус</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Понедельник, Среда, Пятница</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">1000 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">3 зона</p>
                    <p class="text-complimentary-reg mt-0.5">Красная Поляна</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Понедельник, Среда, Пятница</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 25000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 25000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">2000 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="3">
        <div class="text-text flex gap-8">
          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium mb-3">График приема заказов</h4>

            <div class="grid grid-cols-2 gap-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-mob-small-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-subsidiary-medium mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-mob-small-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 basis-1/2">
            <h4 class="text-default-medium text-text mb-3">Стоимость доставки</h4>
            <Accordion value="0">
              <AccordionPanel value="0">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">1 зона</p>
                    <p class="text-complimentary-reg mt-0.5">внутри КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 11:00 до 17:00</p>
                          <p class="text-complimentary-reg text-subsidiary">17:00–22:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">550 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">2 зона</p>
                    <p class="text-complimentary-reg mt-0.5">до 10 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 14:00 до 19:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>от 8000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">600 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">3 зона</p>
                    <p class="text-complimentary-reg mt-0.5">до 20 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 19:00 до 23:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 50000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 50000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">1300 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="3">
                <AccordionHeader>
                  <div class="flex flex-col items-start justify-items-start">
                    <p class="text-small-medium">4 зона</p>
                    <p class="text-complimentary-reg mt-0.5">от 20 до 30 км от КАД</p>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div class="flex justify-between">
                    <div class="flex gap-2">
                      <div>
                        <IconClockOutline width="20px" height="20px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Интервалы доставки</h4>
                        <div class="mt-1">
                          <p class="text-mob-small">Ежедневно с 19:00 до 23:00</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-0.5" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-small-medium">Стоимость доставки</h4>
                        <div class="mt-1">
                          <div class="text-mob-small flex items-center justify-between gap-10">
                            <p>от 30000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                          </div>
                          <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                            <p>до 30000 руб.</p>
                            <div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">800 руб.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </TabPanel>
      <TabPanel value="4">
        <div class="text-text flex gap-8">Информация о доставке</div>
      </TabPanel>
    </TabPanels>
  </Tabs>
  <div v-else class="mt-4">
    <div class="w-full">
      <div v-for="(item, index) in menuItems" :key="index" class="border-stroke justify-between border-b">
        <button class="flex w-full items-center justify-between px-2 py-4" @click="toggle(index)">
          <h4 class="text-small-medium flex items-center gap-1">
            <IconMapPin width="13px" height="13px" />
            {{ item.label }}
          </h4>
          <div class="flex items-center justify-between gap-2 text-base font-semibold">
            <div class="relative h-4 w-4">
              <span
                class="bg-text absolute top-1/2 left-0 h-[1px] w-full transition-transform duration-300"
                :class="{
                  'rotate-45': openIndex === index,
                  'rotate-0': openIndex !== index,
                }"
              />
              <span
                class="bg-text absolute top-1/2 left-0 h-[1px] w-full transition-transform duration-300"
                :class="{
                  '-rotate-45': openIndex === index,
                  'rotate-90': openIndex !== index,
                }"
              />
            </div>
          </div>
        </button>
        <Transition name="dropdown">
          <div v-show="openIndex === index" class="space-y-2 transition-all duration-300">
            <p class="text-mob-small-medium">График приема заказов {{ index }}</p>
            <div v-if="isMobile" class="space-y-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled width="24px" height="24px" />
                </div>
                <div>
                  <h4 class="text-mob-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-subsidiary-reg">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled width="24px" height="24px" />
                </div>
                <div>
                  <h4 class="text-mob-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-subsidiary-reg">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled width="24px" height="24px" />
                </div>
                <div>
                  <h4 class="text-mob-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-1 gap-1.5 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-subsidiary-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-subsidiary-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-complimentary-reg mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-1 gap-1.5">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-subsidiary-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-subsidiary-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="grid grid-cols-2 gap-2">
              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconClockFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Прием заказов</h4>
                  <div class="mt-2 flex flex-col gap-0.5">
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                    <p class="text-subsidiary-reg">Через сайт - круглосуточно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconTruckFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Оформление заказов</h4>
                  <div class="mt-2">
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                    <p class="text-mob-small">с 10:00 до 20:00</p>
                    <p class="text-complimentary-reg text-subsidiary">Ежедневно</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap">
                <div>
                  <IconCalendarFilled />
                </div>
                <div>
                  <h4 class="text-small-medium">Сроки доставки</h4>
                  <div class="mt-2">
                    <div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3">
                      <p class="text-additional text-subsidiary-medium">
                        Доставка: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium">
                        Самовывоз: <span class="text-mob-small-medium text-text">день в день</span>
                      </p>
                    </div>
                    <p class="text-additional text-subsidiary-medium mt-3">Оформление заказа после 19:00</p>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                      <p class="text-additional text-subsidiary-medium basis-1/2">
                        Доставка: <span class="text-mob-small-medium text-text">через день</span>
                      </p>
                      <p class="text-additional text-subsidiary-medium shrink-0 basis-1/2">
                        Самовывоз: <span class="text-mob-small-medium text-text">на следующий день</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-fit">
              <h4 class="text-small-medium mb-2">Стоимость доставки</h4>
              <Tabs value="0">
                <TabList>
                  <Tab value="0">
                    <div class="flex items-center justify-center gap-1.5">1 зона</div>
                  </Tab>
                  <Tab value="1">
                    <div class="flex items-center justify-center gap-1.5">2 зона</div>
                  </Tab>
                  <Tab value="2">
                    <div class="flex items-center justify-center gap-1.5">3 зона</div>
                  </Tab>
                  <Tab value="3">
                    <div class="flex items-center justify-center gap-1.5">4 зона</div>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel v-for="(_, i) in new Array(4)" :key="i" :value="String(i)">
                    <div class="flex gap-2">
                      <div>
                        <IconWalletOutline class="mt-1" width="16px" height="16px" />
                      </div>
                      <div class="flex-grow-1 space-y-2">
                        <p class="!text-text text-mob-small-medium">Стоимость доставки {{ i }}</p>
                        <div class="text-mob-small flex items-center justify-between gap-10">
                          <p class="!text-text max-md:text-subsidiary-reg">от 8000 руб.</p>
                          <div class="text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">Бесплатно</div>
                        </div>
                        <div class="text-mob-small mt-2 flex items-center justify-between gap-10">
                          <p class="!text-text max-md:text-subsidiary-reg">от 8000 руб.</p>
                          <div class="text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5">400 руб.</div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 flex gap-2">
                      <div>
                        <IconClockOutline class="mt-0.5" width="16px" height="16px" />
                      </div>
                      <div class="!text-text">
                        <h4 class="text-mob-small-medium md:text-small-medium">Интервалы доставки</h4>
                        <div class="mt-2">
                          <p class="text-subsidiary-reg md:text-mob-small">Ежедневно с 09:00 до 21:00</p>
                          <p class="text-complimentary-reg text-additional">любое 4-х часовое окно</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.4s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
