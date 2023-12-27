<template>
    <div class="flex justify-center items-center flex-col px-8 sm:px-0">
        <form class="flex flex-col lg:max-w-96 text-xl">
            <label for="lastName" class="mt-4">Nume*</label>
            <input type="text" name="lastName" placeholder="" v-model="lastName" required>
            <label for="firstName" class="mt-4">Prenume*</label>
            <input type="text" name="firstName" placeholder="" v-model="firstName" required>
            <label for="phone" class="mt-4">Număr de telefon*</label>
            <input type="text" name="phone" placeholder="" v-model="phoneNo" required>
            <label for="email" class="mt-4">Adresă de email*</label>
            <input type="text" name="email" placeholder="" v-model="email" required> 
            <span class="error-msg" v-if="errorMsg">{{ errorMsg }}</span>
            <div class="flex flex-row-reverse justify-end items-center text-left relative pt-4">
                <label class="pl-4 text-base mt-0" for="ageCheckbox">Am împlinit 18 ani;</label>
                <input type="checkbox" id="ageCheckbox" v-model="ageCheck" />
            </div>
            <div class="flex flex-row-reverse justify-end items-center text-left relative pt-2">
                <label class="pl-4 text-base mt-0" for="rulesCheckbox">Sunt de acord cu Regulamentul concursului;</label>
                <input type="checkbox" id="rulesCheckbox" v-model="rulesCheck" />
            </div> 
        </form>
        <button @click="submitForm" class="py-2 px-8 mt-10 mb-3 mx-auto">TRIMITE</button>
        <div v-show="submitOverlay" class="submit-overlay absolute flex justify-center">
            <div class="text-box py-10 px-10 lg:py-12 lg:px-16 mx-4 lg:mx-0 m-auto">
                <h3>
                    Felicitări te-ai înscris!
                </h3>
                <div class="flex items-center flex-col lg:flex-row">
                    <p>
                        Recomandă și prietenilor tăi de pe Facebook
                    </p>
                    <button class="share-btn">
                        <img src="images/facebook_share.png" class="h-6 w-auto ml-2 mt-2 lg:mt-0"/>
                    </button>
                </div>
                <button @click="closeForm" class="py-2 px-8 mt-6 mb-3 mx-auto btn-close">ÎNCHIDE</button>
            </div>
        </div>
    </div>
 </template>
   
<script>
export default {
    name: 'Vote-Form',
    data() {
        return {
            submitOverlay: false,
            lastName: '',
            firstName: '',
            phoneNo: '',
            email: '',
            errorMsg: '',
            ageCheck: false,
            rulesCheck: false,
        }
    },
    watch: {
        email(value){
            this.email = value;
            this.validateEmail(value);
        }
    },
    methods: {
        validateEmail(value){
            // eslint-disable-next-line
            const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (regex.test(value)) {
                this.errorMsg = '';
            } 
            else{
                this.errorMsg = "Adresă de email invalidă";
            } 
        },
        
        submitForm() {
            this.submitOverlay = true;
        },

        closeForm() {
            this.submitOverlay = false;
            this.$parent.closeForm();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
label {
    color: $neutral-background;
    align-self: flex-start;
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
    appearance: none;
    background-color: transparent;
    margin: 0;
    color: $complementary-accent;
    width: 20px;
    height: 20px;
    border: 1px solid $complementary-accent;
    border-radius: 1px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em $complementary-accent;
    }
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
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

    &.btn-close {
        color: $primary-accent;

        &:hover {
            color: $complementary-accent !important;
        }
    }

    &.share-btn {
        background-color: transparent;
        outline: none;
        border: none;
    }
}

.error-msg {
    color: $primary-accent;
    font-family: $font-bold;
    text-align: left;
    padding-top: 4px
}

.submit-overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);

    .text-box {
        background-color: $neutral-background;

        h3 {
            color: $primary-accent;
            font-family: $font-bold;
        }

        p {
            color: $primary-background;
        }
    }
}
</style>
   