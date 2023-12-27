<template>
    <div class="winners-page pb-10">
        <div class="background-image"></div>
        <h2 class="py-10">CÂȘTIGĂTORI</h2>
        <div class="winners-wrapper lg:max-w-screen-md lg:mx-auto mx-8">

        </div>
    </div>
</template>
  
<script>

export default {
    name: 'WinnersPage',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.winners-page {
    background-color: $primary-background;
}
h2 {
  color: $primary-accent;
  font-family: $font-bold;
}
.winners-wrapper {
    height: 50vh;
    border: 2px solid $complementary-accent;
}
</style>
  