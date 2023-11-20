<template>
    <div class="card-back-container">
      <p>{{ cardCVC ? cardCVC : '000' }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CardBack',
        props:['cardCVC']
    }
</script>

<style lang="scss">
    @import '../scss/variables';

    .card-back {
        &-container {
            position: absolute;
            top: 470px;
            left: 258px;
            background-image: url('../assets/bg-card-back.png');
            background-repeat: no-repeat;
            background-size: initial;
            width: 447px;
            height: 245px;
            box-sizing: border-box;
            color: $white;
            box-shadow: 0px 20px 50px rgba(black, $alpha: 0.3);
            border-radius: $sm;

            p {
                margin: 110px 60px 120px 356px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .card-back {
            &-container {
                top: 30px;
                left: 73px;
                width: 286px;
                height: 158px;
                background-size: cover;
                border-radius: 7px;

                p {
                    margin: 72px 28px 74px 232px;
                    letter-spacing: 1px;
                    font-size: .6rem;
                }
            }
        }
    }
</style>