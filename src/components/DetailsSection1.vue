<template>
  <section class="details-section3">
    <div class="gravity-uimap-pin">

      <div class="base-background" />
    </div>
    <section class="details-section3-bottom-container">
      <div class="by-air">
        <div class="by-air-title">
          <div class="details-section3-the-ceremony">By Air</div>
         
        </div>
        <div class="fly-into-bergen">
          Fly into Bergen Airport (BGO). 45 min light rail to city center.
        </div>
      </div>
      <div class="by-train">
        <div class="by-air-title">
          <div class="details-section3-by-train">By Train</div>
        
        </div>
        <div class="hour-scenic-train">
          7-hour scenic train from Oslo — one of Europe’s most beautiful routes.
        </div>
      </div>
      <div class="by-sea">
        <div class="by-sea-title">
          <div class="details-section3-by-sea">By Sea</div>
        
        </div>
        <div class="ceremony-begins1600">
          Daily ferries from Stavanger and the fjords, arriving right in Bergen
          harbor.
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
  .details-section3 {
    background-color: #882e4f;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 40px;
    opacity: 0.5;
    z-index: 0;
  }
  .gravity-uimap-pin {
    width: 40px;
    align-self: center;
    height: 40px;
    position: relative;
    z-index: 0;
  }
  .svg-path-icon {
    position: absolute;
    top: 1.2px;
    left: 3.8px;
    width: 32.5px;
    height: 37.5px;
  }
  .base-background {
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .details-section3-bottom-container {
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
    padding: 20px 167px;
    box-sizing: border-box;
    gap: 40px;
    z-index: 0;
    text-align: left;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  .by-air {
    height: 121px;
    width: 280px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 19px;
    z-index: 0;
  }
  .by-air-title {
    display: flex;
    align-items: flex-start;
    z-index: 0;
  }
  .details-section3-the-ceremony {
    height: 34px;
    width: 74px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .emojionesmall-airplane-icon {
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 0;
  }
  .fly-into-bergen {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    z-index: 0;
  }
  .by-train {
    width: 280px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    z-index: 0;
  }
  .details-section3-by-train {
    height: 34px;
    width: 102px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .hour-scenic-train {
    align-self: stretch;
    height: 67px;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    z-index: 0;
  }
  .by-sea {
    height: 121px;
    width: 306px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 1px 19px 10px;
    z-index: 0;
  }
  .by-sea-title {
    width: 84px;
    display: flex;
    align-items: flex-start;
    z-index: 0;
  }
  .details-section3-by-sea {
    height: 34px;
    width: 82px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    flex-shrink: 0;
    z-index: 0;
  }
  .noto-v1motor-boat-icon {
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 0;
    flex-shrink: 0;
  }
  .ceremony-begins1600 {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    width: 285px;
    z-index: 0;
  }

  @media screen and (max-width: 1050px) {
    .details-section3-bottom-container {
      gap: 20px;
      padding-left: 41px;
      padding-right: 41px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .details-section3-bottom-container {
      padding-left: 83px;
      padding-right: 83px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .details-section3 {
      padding-top: 81px;
      padding-bottom: 81px;
      box-sizing: border-box;
    }

    .details-section3-the-ceremony {
      font-size: 19px;
      line-height: 23px;
    }

    .details-section3-by-train {
      font-size: 19px;
      line-height: 23px;
    }

    .details-section3-by-sea {
      font-size: 19px;
      line-height: 23px;
    }
  }
</style>
