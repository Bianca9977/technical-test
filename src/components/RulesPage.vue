<template>
    <div class="rules-page pb-10">
        <div class="background-image"></div>
        <h2 class="py-10 text-xl lg:text-2xl">REGULAMENT</h2>
        <div class="rules-wrapper lg:max-w-screen-md lg:mx-auto mx-8">

        </div>
    </div>
</template>
  
<script>

export default {
    name: 'RulesPage',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.rules-page {
    background-color: $primary-background;
}
h2 {
  color: $primary-accent;
  font-family: $font-bold;
}
.rules-wrapper {
    height: 50vh;
    border: 2px solid $complementary-accent;
}
</style>
  