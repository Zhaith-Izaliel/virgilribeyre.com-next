<template>
  <Menu
    as="div"
    class="relative"
  >
    <div>
      <MenuButton>
        <slot>
          <AnimatedButton
            aria-expanded="false"
            aria-haspopup="true"
            class="text-default py-4 px-2"
          >
            <div class="flex justify-center items-center space-x-2">
              <span class="sr-only">{{ t('sr.l_open_language_menu') }}</span>
              <IconoirProvider>
                <Language />
              </IconoirProvider>
              <span>{{ t('l_language') }}</span>
            </div>
          </AnimatedButton>
        </slot>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute space-y-2 text-default flex flex-col right-0 z-20 mt-3 w-48 origin-top-right rounded-md bg-alt/75 backdrop-blur-3xl shadow-lg shadow-default/20 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem
          v-for="locale in availableLocales"
          :key="`locale-${locale}`"
        >
          <AnimatedButton
            class="p-4 w-full"
            @click="setLocale(locale)"
          >
            <div class="w-full flex space-x-4">
              <img
                :src="`@/../node_modules/svg-country-flags/svg/${
                  locale === 'en' ? 'us' : locale
                }.svg`"
                :alt="`${locale}-lang`"
                width="30rem"
              />
              <span>
                {{ t(`locale.l_${locale}`) }}
              </span>
            </div>
          </AnimatedButton>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script lang="ts" src="./LangMenu.ts"></script>
