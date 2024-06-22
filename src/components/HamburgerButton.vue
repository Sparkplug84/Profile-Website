<script setup>
const props = defineProps({
  mobileMenuActive: {
    type: Boolean
  }
})
</script>

<template>
  <div id="nav-icon" :class="{ open: props.mobileMenuActive }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
#nav-icon {
  width: 35px;
  height: 28px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
}

#nav-icon span:nth-child(2) {
  top: 12px;
}

#nav-icon span:nth-child(3) {
  top: 24px;
}

#nav-icon.open span:nth-child(1) {
  top: 12px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon.open span:nth-child(3) {
  top: 12px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
