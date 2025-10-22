<template>
  <div class="homepage">
    <Group
      :onTitleClick="onTitleClick"
      :onHomeClick="onHomeClick"
      :onRegistryTextClick="onRegistryTextClick"
      :onLocationTextClick="onLocationTextClick"
      :onRsvpTextClick="onRsvpTextClick"
    />
    <div class="hero-section">
      <div class="hero-text">
        <div class="august-1st-2026">August 1st 2026</div>
      </div>
    </div>
    <DetailsSection />
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from "vue-router"
  import Group from "../components/Group.vue"
  import DetailsSection from "../components/DetailsSection.vue"

  const router = useRouter()

  function onRegistryTextClick() {
    router.push("/registry-page")
  }

  function onLocationTextClick() {
    router.push("/travel-and-accomodation-page")
  }

  function onRsvpTextClick() {
    router.push("/rsvp-page")
  }

  function onTitleClick() {
    router.push("/")
  }

  function onHomeClick() {
    router.push("/")
  }
</script>
<style scoped>
  .homepage {
    width: 100%;
    min-height: 100%;

    align-items: center;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: 72px;
    color: #fff;
    font-family: "PT Serif";
    margin: 0;
    padding: 0;
  }
 .hero-section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 30px 151px 853px;
    box-sizing: border-box;
    background-image: url("/Hero-Section@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }
  .hero-text {
    width: 215px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
  .august-1st-2026 {
    position: relative;
    line-height: 120%;
    display: inline-block;
    height: 87px;
    flex-shrink: 0;
    z-index: 0;
  }

  @media screen and (max-width: 1200px) {
    .hero-section {
      padding-top: 20px;
      padding-bottom: 554px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .hero-section {
      padding-left: 75px;
      padding-right: 75px;
      padding-bottom: 360px;
      box-sizing: border-box;
    }

    .august-1st-2026 {
      font-size: 58px;
      line-height: 69px;
    }
  }
  @media screen and (max-width: 450px) {
    .hero-section {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .august-1st-2026 {
      font-size: 43px;
      line-height: 52px;
    }
  }
</style>

