<script setup>
const props = defineProps({ text: { type: String } })
</script>

<template>
  <div
    class="h-12 text-white flex items-center justify-center w-fit px-10 border-2 border-white cursor-pointer hover:bg-gradient-to-r hover:from-[#6ee1f5] hover:to-[#6152e4] border-gradient border-gradient-color"
  >
    <p>{{ props.text }}</p>
  </div>
</template>
<style scoped>
.border-gradient:hover {
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-color:hover {
  border-image-source: linear-gradient(to right, #6ee1f5, #6152e4);
}
</style>
