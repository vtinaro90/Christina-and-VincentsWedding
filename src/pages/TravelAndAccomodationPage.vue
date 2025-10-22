<template>
  <div class="travel-and-accomodation-page">
    <Group
      titleFlex="unset"
      titleMinHeight="unset"
      titleHeight="116px"
      registryWidth="unset"
      locationHeight="unset"
      locationAlignSelf="stretch"
      locationFontFamily="'PT Serif'"
      rsvpWidth="unset"
      :onTitleClick="onTitleClick"
      :onHomeClick="onHomeClick"
      :onRegistryTextClick="onRegistryTextClick"
      :onLocationTextClick="onLocationTextClick"
      :onRsvpTextClick="onRsvpTextClick"
    />
    <section class="travel-and-accomodation-page-hero-section">
      <div class="travel-and-accomodation-page-hero-text">
        <h1 class="getting-here">Getting Here</h1>
        <div class="bergen-is-reachable">
          Bergen is reachable by boat train or plane. It is even more beautiful
          with you here!
        </div>
      </div>
    </section>
    <DetailsSection1 />
    <TravelSection />
    <AccomodationSection />
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from "vue-router"
  import Group from "../components/Group.vue"
  import DetailsSection1 from "../components/DetailsSection1.vue"
  import TravelSection from "../components/TravelSection.vue"
  import AccomodationSection from "../components/AccomodationSection.vue"

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
  .travel-and-accomodation-page {
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
  .travel-and-accomodation-page-hero-section {
    align-self: stretch;
    height: 618px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 151px 371px;
    box-sizing: border-box;
    background-image: url("/Hero-Section1@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 0;
    text-align: left;
    font-size: 72px;
    color: #fff;
    font-family: "PT Serif";
  }
  .travel-and-accomodation-page-hero-text {
    height: 187px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 0;
  }
  .getting-here {
    margin: 0;
    width: 429px;
    height: 120px;
    position: relative;
    font-size: inherit;
    line-height: 120%;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    z-index: 0;
  }
  .bergen-is-reachable {
    width: 429px;
    height: 67px;
    position: relative;
    font-size: 18px;
    line-height: 120%;
    font-family: sourcesanspro;
    text-align: center;
    display: inline-block;
    z-index: 0;
  }

  @media screen and (max-width: 1050px) {
    .travel-and-accomodation-page-hero-section {
      padding: 20px 75px 241px;
      box-sizing: border-box;
    }

    .getting-here {
      font-size: 58px;
      line-height: 69px;
    }
  }
  @media screen and (max-width: 925px) {
    .travel-and-accomodation-page {
      height: auto;
    }
  }
  @media screen and (max-width: 450px) {
    .travel-and-accomodation-page-hero-section {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .getting-here {
      font-size: 43px;
      line-height: 52px;
    }
  }
</style>
