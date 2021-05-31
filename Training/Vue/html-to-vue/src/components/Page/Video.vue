<template>
<!-- 2.3---------------COMPONENT : SLIDE #3 VIDEO ------------- -->
  <li class="slide">
    <div class="container">
      <div class="row">
        <!-- 2.3.1--------COMPONENT: TEXT -->
        <div class="col-sm-6">
          <div class="hero">
            <h1 class="hero-text">And now time for a cat video.</h1>
            <a
              class="alt-btn"
              href="https://www.facebook.com/phandai3008/"
              target="_blank"
            >
              Get me on Facebook
            </a>
          </div>
        </div>
        <!-- 2.3.2--------COMPONENT: IFRAME -->
        <div class="col-sm-6">
          <div class="vimeo video">
            <iframe
              src="https://player.vimeo.com/video/11936324"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    name:"Video"
}
</script>

<style>

</style>