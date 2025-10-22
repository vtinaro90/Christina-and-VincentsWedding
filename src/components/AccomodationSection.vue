<template>
  <main class="accomodation-section">
    <section class="accomodation-title">
      <div class="title-box">
        <div class="accomodation-section-title">
          <div class="accomodation-this-is-only-container">
            <p class="accomodation main-title">Accomodation</p>
            <p class="accomodation">
              This is only a few options there are many other great places to
              choose
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="accomodation-options">
      <div class="hotel-norge">
        <div class="accomodation-section-by-air-title">
          <div class="accomodation-section-the-ceremony">
            Hotel Norge by Scandic
          </div>
        </div>
        <div class="modern-and-central-container">
          <p class="accomodation">
            Modern and central, near shops and restaurants.
          </p>
          <p class="accomodation">20 min walk from the Church</p>
        </div>
      </div>
      <div class="thon-hotel-rozenkrantz">
        <div class="accomodation-section-by-train-title">
          <div class="sandic-byparken">Sandic Byparken</div>
          <img
            class="accomodation-section-twemojitrain-icon"
            alt=""
            src="/twemoji-train.svg"
          />
        </div>
        <div class="very-central-and">
          Very central and cozy affordable option
        </div>
      </div>
      <div class="accomodation-section-by-sea">
        <div class="accomodation-section-by-sea-title">
          <div class="radisson-blu-bryggen">Radisson Blu Bryggen</div>
        </div>
        <div class="accomodation-section-ceremony-begins1600">
          Alongside the beautiful Bryggen historical district
        </div>
      </div>
    </section>
    <section class="budget-and-local-options">
      <div class="budget-title-box">
        <div class="budget-title-container">
          <p class="budget-title">Budget and Local Options</p>
        </div>
      </div>
    </section>
    <section class="accomodation-section-budget-and-local-options">
      <div class="accomodation-section-title-box">
        <div class="title3">
          <div class="budget-and-local-container">
            <p class="accomodation">Budget and Local Options</p>
            <p class="accomodation">For budget-friendly stays:</p>
            <p class="accomodation">
              - Sandviken Guesthouse – cozy and walkable.
            </p>
            <p class="accomodation">
              - Airbnb options near Sandviksfjellet or Bryggen.
            </p>
            <p class="accomodation">
              - Citybox Bergen – modern and affordable downtown.
            </p>
            <p class="accomodation">
              If you stay downtown you will only be 10 minutes away from both
              venues
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
  .accomodation-section {
    width: 100%;
    height: 100%;
    background-color: #882e4f;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.5;
    z-index: 0;
  }
  .accomodation-title {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 0;
    text-align: center;
    color: #fff;
    font-family: "PT Serif";
    font-size: 18px;
  }
  .title-box {
    border: 3px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 7px;
    z-index: 0;
  }
  .accomodation-section-title {
    display: flex;
    align-items: flex-start;
    z-index: 0;
  }
  .accomodation-this-is-only-container {
    height: 140px;
    width: 320px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .accomodation {
    margin: 0;
  }
  .accomodation-options {
    width: 1430px;
    align-self: center;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 242px;
    box-sizing: border-box;
    gap: 40px;
    z-index: 0;
    text-align: left;
    font-size: 24px;
    color: #fff;
    font-family: "PT Serif";
  }
  .hotel-norge {
    height: 176px;
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
  .accomodation-section-by-air-title {
    width: 230px;
    height: 65px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 7px;
    box-sizing: border-box;
    z-index: 0;
  }
  .accomodation-section-the-ceremony {
    height: 58px;
    width: 230px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .modern-and-central-container {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    z-index: 0;
  }
  .thon-hotel-rozenkrantz {
    height: 176px;
    width: 280px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 15px;
    z-index: 0;
  }
  .accomodation-section-by-train-title {
    width: 153px;
    display: flex;
    align-items: flex-start;
    z-index: 0;
  }
  .sandic-byparken {
    height: 74px;
    width: 144px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    flex-shrink: 0;
    z-index: 0;
  }
  .accomodation-section-twemojitrain-icon {
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 0;
    flex-shrink: 0;
  }
  .very-central-and {
    align-self: stretch;
    height: 67px;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    z-index: 0;
  }
  .accomodation-section-by-sea {
    height: 176px;
    width: 306px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 1px 66px 10px;
    z-index: 0;
  }
  .accomodation-section-by-sea-title {
    width: 261px;
    height: 42px;
    display: flex;
    align-items: flex-start;
    padding-right: 15px;
    padding-bottom: 4px;
    box-sizing: border-box;
    z-index: 0;
  }
  .radisson-blu-bryggen {
    height: 38px;
    width: 246px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .accomodation-section-ceremony-begins1600 {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    width: 285px;
    z-index: 0;
  }
  .budget-and-local-options {
    width: 1439px;
    align-self: center;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 569px;
    box-sizing: border-box;
    z-index: 0;
  }
  .budget-title-box {
    border: 3px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    z-index: 0;
  }
  .budget-title-container {
    display: flex;
    align-items: center;
    z-index: 0;
  }
  .budget-title {
    color: #fff;
    font-family: "PT Serif";
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }
  .accomodation-section-budget-and-local-options {
    width: 1444px;
    align-self: center;
    height: 380px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 558px 30px;
    box-sizing: border-box;
    flex-shrink: 0;
    z-index: 0;
    text-align: left;
    color: #fff;
    font-family: "PT Serif";
  }
  .accomodation-section-title-box {
    width: 380px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 7px;
    z-index: 0;
  }
  .title3 {
    width: 350px;
    align-self: center;
    height: 300px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 10px;
    box-sizing: border-box;
    z-index: 0;
  }
  .budget-and-local-container {
    height: 290px;
    width: 350px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
    flex-shrink: 0;
    font-size: 16px;
  }
  .main-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1050px) {
    .accomodation-options {
      gap: 20px;
      padding-left: 121px;
      padding-right: 121px;
      box-sizing: border-box;
    }

    .budget-and-local-options {
      gap: 20px;
      padding-left: 284px;
      padding-right: 284px;
      box-sizing: border-box;
    }

    .accomodation-section-budget-and-local-options {
      gap: 20px;
      padding-left: 279px;
      padding-right: 279px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .accomodation-options {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .accomodation-title {
      font-size: 16px;
    }

    .accomodation-this-is-only-container {
      width: 280px;
      height: 120px;
    }

    .sandic-byparken {
      font-size: 19px;
      line-height: 23px;
    }

    .radisson-blu-bryggen {
      font-size: 19px;
      line-height: 23px;
    }

    .budget-and-local-options {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .accomodation-section-budget-and-local-options {
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }

    .budget-and-local-container {
      font-size: 14px;
      width: 280px;
    }

    .accomodation-section-title-box {
      width: 300px;
    }

    .title3 {
      width: 280px;
    }

    .main-title {
      font-size: 22px;
    }

    .budget-title {
      font-size: 18px;
    }
  }
</style>
