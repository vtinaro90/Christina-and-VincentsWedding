<template>
  <section class="group2">
    <div class="title2" :style="titleStyle">
      <h1 class="main-title2" @click="onTitleClick">
        <p class="christina-and-vincents2">Christina and Vincent's Wedding</p>
      </h1>
    </div>
    <nav class="menu-items2">
      <div class="home" @click="onHomeClick" :style="homeStyle">
        <p class="christina-and-vincents2">Home</p>
      </div>
      <div
        class="registry5"
        @click="onRegistryTextClick"
        :style="registryStyle"
      >
        <p class="christina-and-vincents2">Registry</p>
      </div>
      <div
        class="location2"
        @click="onLocationTextClick"
        :style="locationStyle"
      >
        <p class="christina-and-vincents2">Location</p>
      </div>
      <div class="rsvp5" @click="onRsvpTextClick" :style="rsvpStyle">
        <p class="christina-and-vincents2">Rsvp</p>
      </div>
    </nav>
  </section>
</template>
<script setup lang="ts">
  import { StyleValue, computed } from "vue"
  import { useRouter } from "vue-router"

  const props = defineProps({
    titleFlex: { type: String },
    titleMinHeight: { type: [Object, Array, String, Number, Boolean] },
    titleHeight: { type: [Object, Array, String, Number, Boolean] },
    registryWidth: { type: [Object, Array, String, Number, Boolean] },
    locationHeight: { type: [Object, Array, String, Number, Boolean] },
    locationAlignSelf: { type: String },
    locationFontFamily: { type: String },
    rsvpWidth: { type: [Object, Array, String, Number, Boolean] },
    onRegistryTextClick: { type: Function },
    onLocationTextClick: { type: Function },
    onRsvpTextClick: { type: Function },
    onTitleClick: { type: Function },
    onHomeClick: { type: Function },
    homeWidth: { type: [Object, Array, String, Number, Boolean] },
  })
  const router = useRouter()
  const titleStyle = computed(
    (): StyleValue => ({
      flex: props.titleFlex,
      minHeight: props.titleMinHeight,
      height: props.titleHeight,
    }),
  )
  const registryStyle = computed(
    (): StyleValue => ({
      width: props.registryWidth,
    }),
  )
  const locationStyle = computed(
    (): StyleValue => ({
      height: props.locationHeight,
      alignSelf: props.locationAlignSelf,
      fontFamily: props.locationFontFamily,
    }),
  )
  const rsvpStyle = computed(
    (): StyleValue => ({
      width: props.rsvpWidth,
    }),
  )
  const homeStyle = computed(
    (): StyleValue => ({
      width: props.homeWidth,
    }),
  )

  function onRegistryTextClick1() {
    router.push("/registry-page")
  }

  function onLocationTextClick1() {
    router.push("/travel-and-accomodation-page")
  }

  function onRsvpTextClick1() {
    router.push("/rsvp-page")
  }

  function onHomeClick() {
    if (props.onHomeClick) {
      props.onHomeClick()
    } else {
      router.push("/")
    }
  }

  function onTitleClick() {
    if (props.onTitleClick) {
      props.onTitleClick()
    } else {
      router.push("/")
    }
  }
</script>
<style scoped>
  .group2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 0;
    text-align: justify;
    font-size: 48px;
    color: #fff;
    font-family: "PT Serif";
  }
  .title2 {
    align-self: stretch;
    flex: 1;
    background-color: rgba(136, 46, 77, 0.52);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 372px;
    padding-right: 372px;
    box-sizing: border-box;
    min-height: 115px;
    z-index: 0;
  }
  .main-title2 {
    margin: 0;
    height: 116px;
    width: 695px;
    align-self: center;
    position: relative;
    font-size: inherit;
    line-height: 120%;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    z-index: 0;
    cursor: pointer;
  }
  .christina-and-vincents2 {
    margin: 0;
  }
  .menu-items2 {
    margin: 0;
    width: 100%;
    background-color: rgba(136, 46, 79, 0.52);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 553px;
    padding-right: 553px;
    box-sizing: border-box;
    gap: 50px;
    z-index: 0;
    text-align: justify;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  .home {
    height: 58px;
    width: 60px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    cursor: pointer;
    z-index: 0;
  }
  .registry5 {
    height: 58px;
    width: 88px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    cursor: pointer;
    z-index: 0;
  }
  .location2 {
    height: 58px;
    width: 94px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    cursor: pointer;
    z-index: 0;
  }
  .rsvp5 {
    height: 58px;
    width: 52px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    cursor: pointer;
    z-index: 0;
  }

  @media screen and (max-width: 1200px) {
    .main-title2 {
      display: none;
    }
  }
  @media screen and (max-width: 925px) {
    .title2 {
      gap: 86px;
      padding-left: 186px;
      padding-right: 186px;
      box-sizing: border-box;
    }

    .menu-items2 {
      gap: 25px;
      padding-left: 276px;
      padding-right: 276px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title2 {
      gap: 43px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .menu-items2 {
      display: none;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
</style>
