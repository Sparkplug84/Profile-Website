<script setup>
import PrimaryButton from './PrimaryButton.vue'
import SecondayButton from './SecondaryButton.vue'
import BackgroundAnimation from './BackgroundAnimation.vue'
</script>

<template>
  <div class="flex items-center h-screen w-screen text-white">
    <img src="../assets/landingImage.jpg" alt="" class="h-full w-full object-cover" />
    <!-- <div class="absolute h-screen w-screen bg-black opacity-75"></div> -->
    <background-animation class="absolute h-screen w-screen opacity-75" />
    <div class="absolute left-1/4">
      <p class="text-2xl opacity-0 animate-fadeInLeft animation-delay-1s">Web Developer</p>
      <img
        class="opacity-0 h-20 md:h-40 animate-fadeInRight animation-delay-1s"
        src="../assets/NameLogo.png"
        alt=""
      />
      <div
        class="opacity-0 mt-6 block md:flex space-x-0 md:space-x-6 animate-fadeInUp animation-delay-1s"
      >
        <PrimaryButton :text="'Explore my work'" />
        <SecondayButton class="mt-4 md:mt-0" :text="'Contact me'" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
