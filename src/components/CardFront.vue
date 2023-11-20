<template>
    <div class="card-front-container">
      <div class="card-front-logo">
          <img src="../assets/card-logo.svg" alt="card logo">
      </div>
      <h2>
        {{ (cardNumber === '' || cardNumber.indexOf(' ') === 0) ? '0000 0000 0000 0000' : cardNumber }}
      </h2>
      <div class="card-front-name">
        <p>
          {{ cardHolderName ? cardHolderName : 'Jane Appleseed' }}
        </p>
        <p>{{ expMonth ? expMonth : '00' }}/{{ expYear ? expYear : '00' }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'CardFront',
        props: ['cardHolderName', 'cardNumber', 'expMonth', 'expYear']
    }
</script>

<style lang="scss">
  @import '../scss/variables';

  .card-front {
    &-container {
      position: absolute;
      top: 186px;
      left: 165px;
      background-image: url('../assets/bg-card-front.png');
      background-repeat: no-repeat;
      background-size: initial;
      width: 447px;
      height: 245px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      color: $white;
      box-shadow: 0px 20px 50px rgba(black, $alpha: 0.3);
      border-radius: $sm;
    }

    &-logo {
      flex-grow: 1;
    }

    &-name {
      display: flex;
      justify-content: space-between;
      margin-top: $lg;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 768px) {
    .card-front {
      &-container {
        top: 126px;
        left: 16px;
        width: 286px;
        height: 158px;
        background-size: cover;
        padding: $lg;
        border-radius: 7px;
        z-index: 1;

        h2 {
          font-size: 1.1rem;
          letter-spacing: 2px;
        }
      }

      &-logo {
        img {
          height: 30px;
        }
      }

      &-name {
        letter-spacing: 1px;
        font-size: .6rem;
      }
    }
  }

</style>