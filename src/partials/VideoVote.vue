<template>
   <div class="video-container flex flex-col justify-center	mx-4 mt-4 md:mx-12 md:mt-0">
      <iframe :src=videoLink title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button class="py-2 px-4 mt-12 mx-auto">VOTEAZĂ</button>
   </div>
</template>
  
  <script>
  export default {
    name: 'Video-Vote',
    props: {
      videoLink: String,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  iframe {
    height: 230px;
    width: auto;

    @media (max-width: 768px) {
      height: 200px;
    }
  }

  button {
    background-color: transparent;
    border: 2px solid $primary-accent;
    color: $complementary-accent;
    font-family: $font-bold;
    border-radius: 2px;
    transition: 0.5s all;

    &:hover {
      border-color: $complementary-accent;
      color: $complementary-accent;
    }
  }
  </style>
  