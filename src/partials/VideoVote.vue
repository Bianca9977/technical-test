<template>
   <div class="video-container flex flex-col justify-center	mx-4 mt-4 md:mx-12 md:mt-0">
      <iframe :src=videoLink title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button @click="toggleForm(this)" class="py-2 px-4 mt-12 mx-auto">VOTEAZĂ</button>
   </div>
</template>
  
  <script>
  export default {
    name: 'Video-Vote',
    data() {
    return {
      isActive: false,
      };
    },
    props: {
      videoLink: String,
    },
    methods: {
      toggleForm() {

        
        this.$parent.toggleForm();
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  @import "../assets/styles/variables.scss";

  </style>
  