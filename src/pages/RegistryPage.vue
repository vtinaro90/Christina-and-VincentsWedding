<template>
  <div class="registry-page">
    <Group
      :onTitleClick="onTitleClick"
      :onHomeClick="onHomeClick"
      :onRegistryTextClick="onRegistryTextClick"
      :onLocationTextClick="onLocationTextClick"
      :onRsvpTextClick="onRsvpTextClick"
    />
    <footer class="details-section">
      <div class="bottom-container">
        <div class="registry2">
          <div class="registry-title">
            <div class="registry3">Registry</div>
          </div>
          <div class="ceremony-begins1600-container">
            <p class="christina-and-vincents">
              Your presence is the greatest gift of all!
            </p>
            <p class="christina-and-vincents">
              If you’d like to honor us with something extra, we’ve created a
              small registry with items we love and a few experiences for our
              future together.
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
</script>
<style scoped>
  .registry-page {
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
  .registry2 {
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
  .registry-title {
    width: 84px;
    align-self: center;
    display: flex;
    align-items: flex-start;
    padding-right: 2px;
    box-sizing: border-box;
    z-index: 0;
  }
  .registry3 {
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

  @media screen and (max-width: 1200px) {
    .bottom-container {
      padding-left: 243px;
      padding-right: 243px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .main-title {
      font-size: 38px;
      line-height: 46px;
    }
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

    .registry {
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

    .registry3 {
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
  
</style>
    

