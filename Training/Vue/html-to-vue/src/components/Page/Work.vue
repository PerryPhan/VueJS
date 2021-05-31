<template>
<!-- 2.2----------------------COMPONENT : SLIDE #2 WORK ------------- -->
  <li class="slide">
    <div class="container neg-50">
      <!-- 2.2.1----------------------COMPONENT : INTRODUCTION  -------------- -->
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 text-center">
          <div class="hero">
            <h1 class="hero-text">Some random work</h1>
            <p>
              Some random work from Behance. All credit due to the
              original creators, I had nothing to do with these
              projects.
            </p>
          </div>
        </div>
      </div>
      <!-- 2.2.2----------------------COMPONENT : PROJECTS  -------------- -->
      <ul class="grid">
        <li @click="$emit('openDialog','https://static.wixstatic.com/media/a64726_320040b8bc694f8fa386a4fd04e8f0ce~mv2_d_1709_2367_s_2.jpg/v1/fill/w_539,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_320040b8bc694f8fa386a4fd04e8f0ce~mv2_d_1709_2367_s_2.webp')">
          <a href="#" id="p1">
            <span><span>Shitty Render 1</span></span>
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/202/cc702c67052055.Y3JvcCwxMDczLDg0MCw5Myww.jpg"
          /></a>
        </li>

        <li @click="$emit('openDialog','https://static.wixstatic.com/media/a64726_fc48e4a7431b485ca486c0621fd3ec4e~mv2_d_2400_3000_s_4_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_fc48e4a7431b485ca486c0621fd3ec4e~mv2_d_2400_3000_s_4_2.webp')">
          <a href="#" id="p2"
            ><span><span>Shitty Render 2</span></span
            ><img
              src="https://mir-s3-cdn-cf.behance.net/projects/202/97a87b66451465.Y3JvcCwxNDAwLDEwOTUsMCww.png"
          /></a>
        </li>

        <li @click="$emit('openDialog','https://static.wixstatic.com/media/a64726_b3c52835aa40473ba908cabfb89012be~mv2_d_2400_3000_s_4_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_b3c52835aa40473ba908cabfb89012be~mv2_d_2400_3000_s_4_2.webp')">
          <a href="#" id="p3">
            <span><span>Shitty Render 3</span></span>
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/202/b40b8c62585797.Y3JvcCwyNTM2LDE5ODQsMjMyLDA.jpg"
          /></a>
        </li>

        <li @click="$emit('openDialog','https://static.wixstatic.com/media/a64726_4b3a35a859ab44b0ace7147bbdfd2b5c~mv2_d_1600_2000_s_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_4b3a35a859ab44b0ace7147bbdfd2b5c~mv2_d_1600_2000_s_2.webp')">
          <a href="#" id="p4">
            <span><span>Shitty Render 4</span></span>
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/202/11a02566595471.Y3JvcCwxNTc1LDEyMzEsMCww.jpg"
          /></a>
        </li>
      </ul>
      <!-- EOL 2.2.2-------------- -->
    </div>
  </li>
</template>

<script>
export default {
    name:"Work"
}
</script>

<style>

</style>