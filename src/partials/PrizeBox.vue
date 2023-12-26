<template>
    <div class="prize-box relative flex flex-col justify-center items-center mt-4 md:mt-0">
       <img :src=imgSrc />
        <span class="quantity-box text-4xl flex justify-center items-center">{{ quantity }}x</span>
       <span>*imagine cu titlu de prezentare</span>
       <h3 class="text-2xl pt-4">Premiul {{ index }}</h3>
       <p class="text-2xl">{{ description }}</p>
    </div>
 </template>
   
<script>
export default {
    name: 'Prize-Box',
    props: {
        imgSrc: String,
        quantity: String,
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
    max-width: 400px;
    width: 100%;
    height: auto;
}

.quantity-box {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 10%;
    left: 20%;
    border-radius: 50%;
    background-color: $primary-accent;
    color: $neutral-background;

    @media (max-width: 768px) {
        left: 10%;
    }
}

span {
    color: $secondary-neutral;
}

p {
    color: $primary-background;
}
</style>
   