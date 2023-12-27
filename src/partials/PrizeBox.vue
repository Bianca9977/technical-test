<template>
    <div class="prize-box relative flex flex-col justify-center items-center mt-12 lg:mt-0">
       <img :src=imgSrc />
       <span>*imagine cu titlu de prezentare</span>
       <h3 class="text-2xl pt-4">Premiul {{ index }}</h3>
       <p class="text-xl">{{ description }}</p>
    </div>
 </template>
   
<script>
export default {
    name: 'Prize-Box',
    props: {
        imgSrc: String,
        description: String,
        index: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
h3 {
    color: $primary-accent;
    font-family: $font-bold;
}
img {
    max-width: 300px;
    width: 100%;
    height: auto;
}

span {
    color: $secondary-neutral;
}

p {
    color: $primary-background;
}
</style>
   