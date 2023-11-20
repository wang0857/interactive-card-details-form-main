<template>
  <div class="container">
    <div class="card-background">
      <CardFront
        :cardHolderName="cardHolderName"
        :cardNumber="cardNumber"
        :expMonth="expMonth"
        :expYear="expYear"
      />
      <CardBack :cardCVC="cardCVC" />
    </div>
    <div class="card-info-container">
      <router-view
        @cardHolderName="cardHolderNameHandler"
        @cardNumber="cardNumberHandler"
        @cardCVC="cardCVCHandler"
        @expMonth="expMonthHandler"
        @expYear="expYearHandler"
      />
    </div>
  </div>
</template>

<script>
  import CardFront from './components/CardFront.vue';
  import CardBack from './components/CardBack.vue';

  export default {
    name: 'App',
    components: { CardFront, CardBack },
    data() {
      return {
        cardHolderName: '',
        cardNumber: '',
        cardCVC: '',
        expMonth: '',
        expYear: ''
      }
    },
    methods: {
      cardHolderNameHandler(name) {
        this.cardHolderName = name
      },
      cardNumberHandler(number) {
        this.cardNumber = number
      },
      cardCVCHandler(cvc) {
        this.cardCVC = cvc
      },
      expMonthHandler(mm) {
        this.expMonth = mm
      },
      expYearHandler(yy) {
        this.expYear = yy
      }
    }
  }
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 482px auto;
  }

  .card-background {
    background-image: url('./assets/bg-main-desktop.png');
    background-size: cover;
    position: relative;
    min-height: 100vh;
  }

  .card-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }

    .card-background {
      grid-row: 1 / 2;
      min-height: unset;
      height: 240px;
    }

    .card-info-container {
      grid-row: 2 / 3;
      padding-top: 94px;
      padding-bottom: 45px;
    }
  }
</style>
