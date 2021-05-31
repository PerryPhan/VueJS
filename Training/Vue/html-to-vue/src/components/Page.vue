<template>
<!-- 2----------------------COMPONENT : PAGE -------------------------------- -->
  <div class="page">
      <div class="page-slider">
        <Dialog 
          v-show="showDialog"
          :label="label"     
          @close="hideDialog"     
        ></Dialog>
        <ul class="slides" >
          <About 
            @goto-work="gotoWork"
            ></About>
          <Work
            v-on:openDialog="openDialog"
            ></Work>
          <Video
            ></Video>
        </ul>
      </div>
  </div>
</template>

<script>
import About from "./Page/About.vue";
import Work from "./Page/Work.vue";
import Video from "./Page/Video.vue";
import Dialog from "./Dialog.vue";
export default {
    name: "Page",
    components:{
      About,
      Work,
      Video,
      Dialog,
    },
    data: function(){
      return {
        showDialog: false,
        label: "",
        el: ".page-slider",
        options: {
          selector: '.slides > .slide', 
              animation: 'slide',
          directionNav: true,
          smoothHeight: false,
          controlNav: true,
          slideshow:false,
          controlsContainer: '.page-slider-nav',
          manualControls: 'ul.menu > li.nav-button',
        }
      }
    },
    mounted(){
      window.jQuery(this.el).flexslider(this.options);
    },
    methods:{
      gotoWork: function(){
        window.jQuery(this.el).flexslider('next')
      },
      openDialog: function( label ){
        this.showDialog = true;
        this.label = label;
      },
      hideDialog: function(){
        this.showDialog = false;
      }
    }
}
</script>

<style>

</style>