<script setup></script>

<template>
  <div class="bubble-container">
    <div id="background-wrap">
      <div class="bubble x1"></div>
      <div class="bubble x2 invisibke md:visible"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4 invisibke md:visible"></div>
      <div class="bubble x5"></div>
      <div class="bubble x6 invisibke md:visible"></div>
      <div class="bubble x7"></div>
      <div class="bubble x8 invisibke md:visible"></div>
      <div class="bubble x9"></div>
      <div class="bubble x10 invisibke md:visible"></div>
    </div>
  </div>
</template>

<style scoped>
.bubble-container {
  position: absolute;
  background: #000000;
  color: #333;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  opacity: 75%;
}

#background-wrap {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow:
    0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  box-shadow:
    0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

  height: 200px;
  position: absolute;
  width: 200px;
}

.bubble:after {
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(255, 255, 255, 0.5)),
    color-stop(70%, rgba(255, 255, 255, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

  content: '';
  height: 180px;
  left: 10px;
  position: absolute;
  width: 180px;
}
/* ANIMATIONS */

.x1 {
  -webkit-animation:
    animateBubble 60s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 60s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation:
    animateBubble 60s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  left: -5%;
  top: 5%;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}
.x2 {
  -webkit-animation:
    animateBubble 57s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 57s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation:
    animateBubble 57s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 5%;
  top: 80%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x3 {
  -webkit-animation:
    animateBubble 55s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 55s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation:
    animateBubble 55s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 10%;
  top: 40%;

  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  transform: scale(0.7);
}

.x4 {
  -webkit-animation:
    animateBubble 51s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 51s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation:
    animateBubble 51s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x5 {
  -webkit-animation:
    animateBubble 48s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 48s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation:
    animateBubble 48s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 30%;
  top: 50%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x6 {
  -webkit-animation:
    animateBubble 48s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 48s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation:
    animateBubble 48s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 50%;
  top: 0;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
}

.x7 {
  -webkit-animation:
    animateBubble 45s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 45s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation:
    animateBubble 45s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 70%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x8 {
  -webkit-animation:
    animateBubble 42s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 42s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation:
    animateBubble 42s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 80%;
  top: 10%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x9 {
  -webkit-animation:
    animateBubble 42s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 42s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation:
    animateBubble 42s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x10 {
  -webkit-animation:
    animateBubble 35s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation:
    animateBubble 35s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation:
    animateBubble 35s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 80%;
  top: 80%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

/* KEYFRAMES */

@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
</style>
