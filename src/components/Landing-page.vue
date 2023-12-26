<template>
  <div class="landing-page">
    <div class="background-image"></div>
    <h1 class="text-2xl lg:text-4xl md:px-12 lg:px-72">
      Tu sari de pe fix și votezi, iar Shopster îți da premii pentru o distracție pe cinste! 
      <br/><br/>
      Poți câștiga o boxa karaoke sau un proiector sau chiar o pereche de ochelari VR, totul pentru starea ta de bine!
    </h1>
    <section class="video-section mt-8 md:p-8 mt-14">
      <h2 class="text-2xl md:px-4 lg:px-0 lg:pt-10">
        Votează cel mai Sărit(i) de pe FIX moment și poți câștigă premiile puse în joc! 
        <br/><br/>
        Dă click pe butonul VOTEAZĂ și completează formularul de înscriere.
      </h2>
      <div>
        <div class="grid lg:grid-cols-3 mt-6 lg:mt-28 lg:max-w-screen-2xl lg:mx-auto">
          <div class="video-container flex flex-col justify-center	mx-4 mt-4 md:mx-12 md:mt-0">
            <iframe id="video-1" class="video" src="https://www.youtube.com/embed/emdjcTuGhSQ?si=M41N4-Ng-XJX72YK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button id="video-1-btn" @click="toggleForm('video-1')" class="py-2 px-4 mt-12 mx-auto vote-btn">VOTEAZĂ</button>
          </div>
          <div class="video-container flex flex-col justify-center	mx-4 mt-4 md:mx-12 md:mt-0">
            <iframe id="video-2" class="video" src="https://www.youtube.com/embed/X6Yitp-R7X0?si=3O3yMIixY6e_uiwP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button id="video-2-btn" @click="toggleForm('video-2')" class="py-2 px-4 mt-12 mx-auto vote-btn">VOTEAZĂ</button>
          </div>
          <div class="video-container flex flex-col justify-center	mx-4 mt-4 md:mx-12 md:mt-0">
            <iframe id="video-3" class="video" src="https://www.youtube.com/embed/q3dsM0Qtc3w?si=AoRhKLj5JMlUUpNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button id="video-3-btn" @click="toggleForm('video-3')" class="py-2 px-4 mt-12 mx-auto vote-btn">VOTEAZĂ</button>
          </div>
        </div>
      </div>
      </section>
      <section class="py-8 vote-form" id="formSection">
        <div v-show="formToggle" class="form-wrapper my-14 lg:max-w-screen-md lg:mx-auto relative">
          <h2 class="color-light pt-10">FORMULAR DE ÎNSCRIERE</h2>
          <vote-form class="pt-6 lg:pt-10"/>
        </div>
      </section>
    <section class="prizes-section p-4 md:p-8">
      <h2 class="color-blue">
        PREMII
      </h2>
      <div>
        <div class="grid lg:grid-cols-3 lg:max-w-screen-2xl lg:mx-auto">
          <prize-box imgSrc="images/proiector.png" quantity="5" description="Videoproiector Portabil" index="1" />
          <prize-box imgSrc="images/boxa.png" quantity="3" description="Boxa Bluetooth Portabila Karaoke" index="2"/>
          <prize-box imgSrc="images/ochelari-vr.png" quantity="10" description="Ochelari VR NUODWELL" index="3"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VoteForm from "../partials/VoteForm.vue"
import PrizeBox from "../partials/PrizeBox.vue"
export default {
  name: 'Landing-page',
  data() {
    return {
      formToggle: false,
    }
  },
  components: {
    VoteForm, PrizeBox
  },
  props: {
  },
  methods: {
    toggleForm(videoId) {
      this.formToggle = true;
      const el = document.getElementById('formSection');
      this.$nextTick(() => el.scrollIntoView({ behavior: "smooth" }));

      let videosEl = document.querySelectorAll('.video');
      videosEl.forEach((video) => {
        video.classList.remove('video-active');
      }) 
      const videoEl = document.getElementById(videoId);
      videoEl.classList.add('video-active');

      let voteBtns = document.querySelectorAll('.vote-btn');
      voteBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
      }) 
      const activeBtn = document.getElementById(videoId + '-btn');
      activeBtn.classList.add('btn-active');
    },

    closeForm() {
      this.formToggle = false;

      let voteBtns = document.querySelectorAll('.vote-btn');
      voteBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
      }) 

      let videosEl = document.querySelectorAll('.video');
      videosEl.forEach((video) => {
        video.classList.remove('video-active');
      }) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
h1, h2 {
  color: $primary-accent;
  font-family: $font-bold;

  &.color-light {
    color: $neutral-background;
  }

  &.color-blue {
    color: $primary-background;
  }
}
.video-section,
.vote-form {
  background-color: $primary-background;
}

.video-section {
  iframe {
    height: 230px;
    width: auto;

    @media (max-width: 768px) {
      height: 200px;
    }

    &.video-active {
      border: 2px solid $primary-accent;
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

    &.btn-active {
      background-color: $primary-accent;
    }
  }
}

.form-wrapper {
  border: 2px solid $complementary-accent;
}
</style>
