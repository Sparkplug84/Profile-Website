<script setup>
import { ref } from 'vue'
import HamburgerButton from './HamburgerButton.vue'

const mobileMenuActive = ref(false)

function toggleMobileMenu() {
  mobileMenuActive.value = !mobileMenuActive.value
}
</script>

<template>
  <div>
    <div
      class="fixed flex items-center justify-between w-screen h-20 bg-transparent px-8 text-white z-10 animate-fadeInDown z-20"
    >
      <div>
        <img src="../assets/logo3.png" alt="" class="h-6 md:h-10" />
        <!-- <logo></logo> -->
      </div>
      <div class="hidden md:flex space-x-8">
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <!-- @mobileMenuActive="toggleMobileMenu()" -->
      <HamburgerButton
        class="block md:hidden"
        @click="toggleMobileMenu()"
        :mobileMenuActive="mobileMenuActive"
      />
    </div>
    <div
      class="absolute top-0 left-0 w-screen h-screen bg-black -translate-y-full transition duration-500 ease-in-out z-10"
      :class="{ 'translate-y-0': mobileMenuActive }"
    ></div>
  </div>
</template>
