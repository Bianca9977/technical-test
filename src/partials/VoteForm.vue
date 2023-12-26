<template>
    <div class="vote-form flex justify-center items-center flex-col">
        <form class="flex flex-col lg:max-w-96">
            <label for="lastName">Nume*</label>
            <input type="text" name="lastName" placeholder="">
            <label for="firstName">Prenume*</label>
            <input type="text" name="firstName" placeholder="">
            <label for="phone">Număr de telefon*</label>
            <input type="text" name="phone" placeholder="">
            <label for="email">Adresă de email*</label>
            <input type="text" name="email" placeholder=""> 
            <div class="flex relative pt-2">
                <label class="pl-8" for="ageCheckbox">Am împlinit 18 ani;
                    <input type="checkbox" id="ageCheckbox" checked="checked" />
                    <span class="custom-checkbox"></span> 
                </label>
            </div>
            <div class="flex relative pt-2">
                <input type="checkbox" id="rulesCheckbox" v-model="checked" />
                <label class="pl-4" for="rulesCheckbox">Sunt de acord cu Regulamentul concursului;</label>
                <span class="custom-checkbox"></span> 
            </div>
        </form>
        <button class="py-2 px-8 mt-6 mb-3 mx-auto">TRIMITE</button>
    </div>
 </template>
   
<script>
export default {
    name: 'Vote-Form',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
label {
    color: $neutral-background;
    align-self: flex-start;
    margin-top: 1rem;
}

input {
    border: 1px solid $complementary-accent;
    padding: 6px;
    background-color: transparent;
    color: $neutral-background;
   
    &:focus {
        outline: solid $complementary-accent;
    } 
}

input[type="checkbox"] {
    visibility: hidden;   
}
.custom-checkbox {
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid $complementary-accent;
}

button {
    background-color: transparent;
    color: $complementary-accent;
    font-family: $font-bold;
    border-radius: 2px;
    border: 2px solid $primary-accent;
    transition: 0.5s all;

    &:hover {
        background-color: $primary-accent;
        color: $complementary-accent;
    }
}
</style>
   