<template>
  <div class="custom-modal">
    <div class="container " >
      <div class="content">
        <img :src="label" alt="hero" />
      </div>
      <button @click.prevent="$emit('close')"
        class="abs mt-3 border-b border-teal font-semibold"> 
          Close
        </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Dialog',
          props:['label'],
    };
</script>


<style lang="css" scoped>
  .custom-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
  }
  .custom-modal .container{
    background-color: white;
    position: relative;
    width: 1000px;
    height: 700px;
  }
  .custom-modal .container .content{
    max-width: 1000px;
    max-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .custom-modal .container .content img{
    width: 100%;
    height: 100%;
  }
  .abs{
    position: absolute;
    top: 10px;
    left: 30px;
    background: rgb(221, 27, 27);
    color: white;
  }
</style>