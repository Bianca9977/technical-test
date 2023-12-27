<template>
    <div class="footer text-center h-20 flex justify-center items-center">
        <p>2023 PROTV</p>
    </div>
</template>
   
<script>
export default {
    name: 'FooterSection',
    data() {
        return {
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.footer {
    background-color: $secondary-neutral;
}
p {
    background-color: transparent;
    color: $neutral-background;
    font-family: $font-bold;
}
</style>
   