<template>
  <section class="travel-section">
    <div class="travel-container">
      <div class="getting-around-bergen">
        <div class="getting-around-bergen-title">
          <div class="travel-section-title">Getting Around Bergen</div>
         
        </div>
        <div class="getting-around-is">
          Getting around is easy, as Bergen is so compact. This is a short list
          of travel methods to quickly explore Bergen City
        </div>
      </div>
      <section class="travel-info-section">
        <div class="light-rail-title">
          <div class="bybanen-light-rail">Bybanen (light rail)</div>
        
        </div>
        <div class="light-rail-text">
          Quick and Easy way to get around, the rail comes very often.
        </div>
        <div class="bus-title">Skyss Buses</div>
        <div class="light-rail-text">
          Reliable Local Transport. There is an app to download to buy tickets
        </div>
        <div class="travel-section-bus-title">Walking</div>
        <div class="light-rail-text">
          Bergen is compact and scenic. Easy to get around walking.
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped>
  .travel-section {
    width: 100%;
    background-color: #882e4f;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px 84px;
    box-sizing: border-box;
    opacity: 0.5;
    text-align: left;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  
  .travel-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
    justify-content: center;
    padding: 40px 0;
  }
  
  .getting-around-bergen {
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    height: fit-content;
    min-height: 220px;
  }
  
  .getting-around-bergen-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .travel-section-title {
    font-size: 24px;
    line-height: 120%;
    margin: 0;
  }
  
  .travel-section-emojionesmall-airplane-icon {
    width: 30px;
    height: 30px;
    align-self: center;
  }
  
  .getting-around-is {
    font-size: 16px;
    line-height: 150%;
    flex: 1;
  }
  
  .travel-info-section {
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    height: fit-content;
    min-height: 220px;
  }
  
  .light-rail-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .bybanen-light-rail {
    font-size: 24px;
    line-height: 120%;
    margin: 0;
  }
  
  .travel-section-twemojitrain-icon {
    height: 30px;
    width: 30px;
  }
  
  .light-rail-text {
    font-size: 16px;
    line-height: 150%;
    margin: 0 0 10px 0;
  }
  
  .bus-title {
    font-size: 24px;
    line-height: 120%;
    margin: 10px 0 0 0;
  }
  
  .travel-section-bus-title {
    font-size: 24px;
    line-height: 120%;
    margin: 10px 0 0 0;
  }

  /* Tablet styles */
  @media screen and (max-width: 768px) {
    .travel-container {
      grid-template-columns: 1fr;
      gap: 30px;
      max-width: 500px;
    }
    
    .travel-section {
      padding: 40px 20px 60px;
    }
    
    .getting-around-bergen,
    .travel-info-section {
      width: 100%;
    }
  }

  /* Mobile styles */
  @media screen and (max-width: 480px) {
    .travel-section {
      padding: 30px 15px 40px;
      font-size: 20px;
    }
    
    .travel-container {
      gap: 20px;
      padding: 20px 0;
    }
    
    .getting-around-bergen,
    .travel-info-section {
      padding: 15px;
    }
    
    .travel-section-title,
    .bybanen-light-rail,
    .bus-title,
    .travel-section-bus-title {
      font-size: 20px;
      line-height: 120%;
    }
    
    .getting-around-is,
    .light-rail-text {
      font-size: 14px;
      line-height: 140%;
    }
  }
</style>