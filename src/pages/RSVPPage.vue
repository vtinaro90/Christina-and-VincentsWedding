<template>
  <div class="rsvp-page">
    <Group
      :onTitleClick="onTitleClick"
      :onHomeClick="onHomeClick"
      :onRegistryTextClick="onRegistryTextClick"
      :onLocationTextClick="onLocationTextClick"
      :onRsvpTextClick="onRsvpTextClick"
    />
    <footer class="details-section">
      <div class="bottom-container">
        <div class="rsvp2">
          <div class="rsvp-title">
            <div class="rsvp3">RSVP</div>
          </div>
          <div class="ceremony-begins1600-container">
              <p class="rsvp-page-christina-and-vincents">
              We can’t wait to celebrate with you!
            </p>
            <p class="rsvp-page-christina-and-vincents">
              Please let us know if you’ll be joining us by February 1st 2026.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from "vue-router"
  import Group from "../components/Group.vue"

  const router = useRouter()

  function onTitleClick() {
    router.push("/")
  }

  function onRegistryTextClick() {
    router.push("/registry-page")
  }

  function onLocationTextClick() {
    router.push("/travel-and-accomodation-page")
  }

  function onRsvpTextClick() {
    router.push("/rsvp-page")
  }

  function onHomeClick() {
    router.push("/")
  }
/*
  <p class="rsvp-page-christina-and-vincents">
              We can’t wait to celebrate with you!
            </p>
            <p class="rsvp-page-christina-and-vincents">
              Please let us know if you’ll be joining us by February 1st 2026.
            </p>

*/
</script>
<style scoped>
  .rsvp-page {
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

  .rsvp {

  }
  .rsvp2 {
     height: 175px;
    width: 306px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px 1px;
    z-index: 0;
  
  }
  .rsvp-page-title {
    align-self: stretch;
    height: 116px;
    background-color: rgba(136, 46, 77, 0.52);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 372px;
    padding-right: 372px;
    box-sizing: border-box;
    z-index: 0;
  }
  .rsvp-page-main-title {
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
  }
  .rsvp-page-christina-and-vincents {
    margin: 0;
  }
  .rsvp-page-menu-items {
    width: 1441px;
    background-color: rgba(136, 46, 79, 0.52);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 554px;
    padding-right: 554px;
    box-sizing: border-box;
    gap: 49.5px;
    z-index: 0;
    font-size: 24px;
  }
  .rsvp-page-registry {
    position: relative;
    line-height: 120%;
    display: inline-block;
    height: 58px;
    z-index: 0;
  }
  .rsvp-page-location {
    align-self: stretch;
    width: 94px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .rsvp-page-details-section {
    background-color: #882e4f;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 40px;
    opacity: 0.5;
    z-index: 0;
    text-align: left;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  .rsvp-page-bottom-container {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 1281px;
    align-self: center;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 487px;
    box-sizing: border-box;
    z-index: 0;
  }
  .rsvp3 {
     height: 34px;
    width: 82px;
    align-self: center;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .rsvp-title {
      width: 84px;
    align-self: center;
    display: flex;
    align-items: flex-start;
    padding-right: 2px;
    box-sizing: border-box;
    z-index: 0;
  }
  .rsvp4 {
    height: 34px;
    width: 82px;
    align-self: center;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
    .ceremony-begins1600-container {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    width: 285px;
    z-index: 0;
  }

 @media screen and (max-width: 925px) {
    .title {
      gap: 43px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .main-title {
      font-size: 29px;
      line-height: 35px;
    }

    .menu-items {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .rsvp {
      font-size: 19px;
      line-height: 23px;
    }

    .location {
      font-size: 19px;
      line-height: 23px;
    }

    .home {
      font-size: 19px;
      line-height: 23px;
    }

    .details-section {
      padding-top: 81px;
      padding-bottom: 81px;
      box-sizing: border-box;
    }

    .bottom-container {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .rsvp3 {
      font-size: 19px;
      line-height: 23px;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      gap: 86px;
      padding-left: 186px;
      padding-right: 186px;
      box-sizing: border-box;
    }

    .menu-items {
      gap: 25px;
      padding-left: 277px;
      padding-right: 277px;
      box-sizing: border-box;
    }

    .bottom-container {
      gap: 20px;
      padding-left: 121px;
      padding-right: 121px;
      box-sizing: border-box;
    }
  }
  

  .details-section {
    background-color: #882e4f;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 40px;
    opacity: 0.5;
    z-index: 0;
    text-align: left;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  .bottom-container {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 1281px;
    align-self: center;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 487px;
    box-sizing: border-box;
    z-index: 0;
  }
</style>
