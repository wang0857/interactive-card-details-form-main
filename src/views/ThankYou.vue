<template>
    <div class="thank-you-container">
        <div class="thank-you-img">
            <img src="../assets/icon-complete.svg" alt="Completed!">
        </div>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <router-link to="/" class="thank-you-btn">
            <Button title="Continue"></Button>
        </router-link>
    </div>
</template>

<script>
    import Button from '../components/Button.vue'

    export default {
        name: 'ThankYou',
        components: { Button },
    }
</script>

<style lang="scss">
    @import '../scss/variables';

    .thank-you {
        &-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 380px;
            
            h2 {
                margin: 42px 0px 26px;
                letter-spacing: 2px;
            }

            p {
                color: $dark-violet;
                margin-bottom: 48px;
            }
        }

        &-btn {
            width: 100%;

            button {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .thank-you {
            &-container {
                width: 326px;
            }
        }
    }
</style>