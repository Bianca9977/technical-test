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
          <video-vote videoLink="https://www.youtube.com/embed/emdjcTuGhSQ?si=M41N4-Ng-XJX72YK" />
          <video-vote videoLink="https://www.youtube.com/embed/X6Yitp-R7X0?si=3O3yMIixY6e_uiwP" />
          <video-vote videoLink="https://www.youtube.com/embed/q3dsM0Qtc3w?si=AoRhKLj5JMlUUpNe" />
        </div>
    </div>
    </section>
    <section class="vote-form py-14 lg:py-28">
      <div class="form-wrapper lg:max-w-screen-md lg:mx-auto">
        <h2 class="color-light lg:pt-12">FORMULAR DE ÎNSCRIERE</h2>
        <vote-form class="mt-6 lg:mt-16 lg:pb-12"/>
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
import VideoVote from "../partials/VideoVote.vue"
import VoteForm from "../partials/VoteForm.vue"
import PrizeBox from "../partials/PrizeBox.vue"
export default {
  name: 'Landing-page',
  components: {
    VideoVote, VoteForm, PrizeBox
  },
  props: {
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

.form-wrapper {
  border: 2px solid $complementary-accent;
}
</style>
