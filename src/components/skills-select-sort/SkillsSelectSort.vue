<template>
  <div class="w-72">
    <Listbox
      :model-value="modelValue"
      @update:model-value="updateModel"
    >
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white border-default border py-2 pl-3 text-left sm:text-sm"
        >
          <span class="block truncate">{{ t(modelValue.label) }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <IconoirProvider>
              <ArrowSeparateVertical
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </IconoirProvider>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-background/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="option in skillsSortOptions"
              v-slot="{ active, selected }"
              :key="option.name"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-50 text-primary' : 'text-gray-900',
                  'relative cursor-default transition-all duration-300 ease-in-out select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ t(option.label) }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                >
                  <IconoirProvider>
                    <Check
                      class="h-5 w-5"
                      aria-hidden="true"
                    />
                  </IconoirProvider>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
<script lang="ts" src="./SkillsSelectSort.ts"></script>
