<template>
  <div id="app">
    <Navbar></Navbar>
    <Page></Page>
    <Footer></Footer>
    <Ballground></Ballground>
    <a href="#" id="close">Close</a>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Page from './components/Page.vue'
import Footer from './components/Footer.vue'
import Ballground from "./components/Ballground";
export default {
  name: 'App',
  components: {
    Navbar,
    Page,
    Footer,
    Ballground,
  },
  created(){
    document.getElementById("title").innerText= "Dai's Portfolio"
  },
}
</script>

<style>
 @import './assets/style.css';
</style>
