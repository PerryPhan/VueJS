<template>
<!-- 2.1----------------------COMPONENT : SLIDE #1 ABOUT -------------- -->
  <li class="slide">
    <div class="container">
      <div class="row">
        <!-- 2.1.1----------------------COMPONENT : INFORMATION  -------------- -->
        <div class="col-sm-10">
          <div class="hero">
            <h1 class="hero-text">
              Hey there, my name is
              <span class="grad">
                <span class="grad-text">Dai</span></span
              >.<br />
              A developer, designer and explorer. On the quest to better
              myself.
            </h1>
            <a class="alt-btn" @click="$emit('goto-work')"> View some work </a>
            <a
              class="main-btn"
              href="https://www.facebook.com/phandai3008/"
              target="_blank"
            >
              Get me on Facebook
            </a>
          </div>
        </div>
        <!-- EOL 2.1.1-------------- -->
      </div>
    </div>
  </li>
</template>

<script>
export default {
    name:"About"
}
</script>

<style>

</style>