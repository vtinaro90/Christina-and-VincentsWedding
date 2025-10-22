<template>
  <footer class="details-section2">
    <div class="details-container">
      <div class="board">
        <h1 class="welcome">Welcome</h1>
        <div class="were-so-excited-container">
          <p class="were-so-excited">
            We’re so excited to celebrate our special day with you in beautiful
            Bergen, Norway — surrounded by mountains, fjords, and the people we
            love most.
          </p>
          <p class="were-so-excited">
            Whether you’re traveling across the ocean or just across town, thank
            you for joining us for this unforgettable celebration
          </p>
        </div>
      </div>
    </div>
    <div class="details-section2-bottom-container">
      <div class="the-ceremony">
        <div class="details-section2-the-ceremony">
          <p class="were-so-excited">The Ceremony</p>
        </div>
        <div class="sandvikskirken-sandviken-chur-container">
          <p class="were-so-excited">📍 Sandvikskirken (Sandviken Church)</p>
          <p class="were-so-excited">Address: Sandviksveien 55, 5035 Bergen</p>
          <p class="were-so-excited">
            Date & Time: Saturday, [Insert Date], at [Insert Time]
          </p>
          <p class="blank-line">&nbsp;</p>
          <p class="were-so-excited">
            Our ceremony will take place in the historic Sandviken Church,
            overlooking the harbor and surrounded by Bergen’s charming wooden
            houses. Please arrive 15–20 minutes early to find your seat and
            enjoy the music before the ceremony begins.
          </p>
        </div>
      </div>
      <div class="the-reception">
        <div class="details-section2-the-ceremony">The Reception</div>
        <div class="varegg-fotballklubb-varegg-container">
          <p class="were-so-excited">
            📍 Varegg Fotballklubb (Varegg Football Club)
          </p>
          <p class="were-so-excited">
            Address: Øvre Sandviksvei 130, 5035 Bergen
          </p>
          <p class="were-so-excited">&nbsp;</p>
          <p class="were-so-excited">
            After the ceremony, we’ll continue the celebration with dinner,
            drinks, and dancing at Varegg Football Club, a cozy venue just a few
            minutes from the church.
          </p>
          <p class="were-so-excited">
            Expect Norwegian charm, delicious local food, and plenty of
            laughter!
          </p>
        </div>
      </div>
      <div class="schedule">
        <div class="details-section2-the-ceremony">Schedule</div>
        <div class="details-section2-ceremony-begins1600-container">
          <p class="were-so-excited">15:00 — Ceremony begins</p>
          <p class="were-so-excited">16:00 — Photos and travel to reception</p>
          <p class="were-so-excited">17:00 — Dinner & speeches</p>
          <p class="were-so-excited">20:00 — Dancing & celebration</p>
          <p class="were-so-excited">00:00 — Late-night snacks and farewells</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
  .details-section2 {
    background-color: #882e4f;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 124px 40px;
    box-sizing: border-box;
    opacity: 0.5;
    max-width: 100%;
    z-index: 0;
    text-align: center;
    font-size: 72px;
    color: #fff;
    font-family: "PT Serif";
  }
   .details-container {
    margin-left: 40px;
    margin-right: 40px;
    width: 100%;
    align-self: center;
    height: 417px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 131px 0px;
    box-sizing: border-box;
    background-image: url("/Details-Container@3x.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 100%;
    z-index: 0;
  }
  .board {
    height: 115px;
    display: flex;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    gap: 46px;
    max-width: 100%;
    z-index: 0;
  }
  .welcome {
    margin: 0;
    align-self: stretch;
    width: 291px;
    position: relative;
    font-size: inherit;
    line-height: 150%;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    z-index: 0;
    flex-shrink: 0;
  }
  .were-so-excited-container {
    height: 171px;
    width: 527px;
    position: relative;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 170%;
    text-align: left;
    display: inline-block;
    max-width: 100%;
    z-index: 0;
    flex-shrink: 0;
  }
  .were-so-excited {
    margin: 0;
  }
  .details-section2-bottom-container {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 100%;
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
  }
  .the-ceremony {
    height: 425px;
    width: 280px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 41px;
    z-index: 0;
  }
  .details-section2-the-ceremony {
    width: 184px;
    height: 34px;
    position: relative;
    line-height: 120%;
    display: inline-block;
    z-index: 0;
  }
  .sandvikskirken-sandviken-chur-container {
    align-self: stretch;
    height: 336px;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    z-index: 0;
  }
  .blank-line {
    margin: 0;
    color: #000;
  }
  .the-reception {
    height: 425px;
    width: 280px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 79px;
    z-index: 0;
  }
  .varegg-fotballklubb-varegg-container {
    align-self: stretch;
    height: 292px;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    z-index: 0;
  }
  .schedule {
    height: 425px;
    width: 306px;
    border: 3px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 1px 251px 10px;
    z-index: 0;
  }
  .details-section2-ceremony-begins1600-container {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    display: inline-block;
    height: 120px;
    flex-shrink: 0;
    z-index: 0;
  }

  @media screen and (max-width: 1200px) {
    .details-section2 {
      padding-top: 81px;
      padding-bottom: 81px;
      box-sizing: border-box;
    }

    .details-container {
      height: auto;
    }

    .board {
      height: auto;
      flex-wrap: wrap;
    }

    .welcome {
      flex: 1;
    }

    .were-so-excited-container {
      flex: 1;
    }

    .details-section2-bottom-container {
      padding-left: 83px;
      padding-right: 83px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .details-section2 {
      padding-top: 53px;
      padding-bottom: 53px;
      box-sizing: border-box;
    }

    .welcome {
      font-size: 58px;
      line-height: 86px;
    }

    .were-so-excited-container {
      min-width: 100%;
    }

    .details-section2-bottom-container {
      gap: 20px;
      padding-left: 41px;
      padding-right: 41px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .details-container {
      padding-top: 85px;
      padding-bottom: 85px;
      box-sizing: border-box;
    }

    .board {
      gap: 23px;
    }

    .welcome {
      font-size: 43px;
      line-height: 65px;
    }

    .the-ceremony {
      padding-top: 20px;
      padding-bottom: 27px;
      box-sizing: border-box;
    }

    .details-section2-the-ceremony {
      font-size: 19px;
      line-height: 23px;
    }

    .the-reception {
      padding-top: 20px;
      padding-bottom: 51px;
      box-sizing: border-box;
    }

    .schedule {
      padding-top: 20px;
      padding-bottom: 163px;
      box-sizing: border-box;
    }
  }
</style>
