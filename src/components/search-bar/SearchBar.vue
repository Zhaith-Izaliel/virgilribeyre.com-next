<template>
  <form>
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <IconoirProvider>
          <Search></Search>
        </IconoirProvider>
      </div>
      <input
        id="default-search"
        type="search"
        :value="modelValue"
        class="block w-full ml-2 px-6 py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
        :placeholder="t(placeholder)"
        @input="updateModel"
      />
    </div>
  </form>
</template>
<script src="./SearchBar.ts" lang="ts"></script>
