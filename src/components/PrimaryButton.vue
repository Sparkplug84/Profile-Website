<script setup>
const props = defineProps({ text: { type: String } })
</script>

<template>
  <div
    class="h-12 text-white flex items-center justify-center w-fit px-10 bg-gradient-to-r from-[#6ee1f5] to-[#6152e4] cursor-pointer border-r-2 border-r-[#6152e4] border-l-2 border-l-[#6ee1f5] hover:bg-none hover:border-2 hover:border-white"
  >
    <p>{{ props.text }}</p>
  </div>
</template>
<style scoped></style>
