<template>
    <div>
        <label for="exp-date" class="expDate-title">EXP. DATE (MM/YY)</label>
        <div class="expDate-fields">
            <input v-model="mm" placeholder="MM" id="exp-date-mm">
            <input v-model="yy" placeholder="YY" id="exp-date-yy">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExpDateInput',
        emits: ['expMM', 'expYY'],
        data() {
            return {
                yy: '',
                mm: ''
            }
        },
        watch: {
            mm: function(mm) {
                this.$emit('expMM', mm)
            },
            yy: function (yy) {
                this.$emit('expYY', yy)
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/variables';

    .expDate {
        &-title {
            letter-spacing: 1px;
            font-size: .9rem;
        }

        &-fields {
            display: flex;
            justify-content: space-between;
            gap: $sm;
            margin-top: $sm;

            input {
                border: 1px solid $dark-violet;
                border-radius: $sm;
                height: 45px;
                width: 80px;
                padding: $md;
                box-sizing: border-box;

                &:focus, &:focus-visible {
                    border-color: $border-focus;
                    outline: none;
                    box-shadow: 0px 0px 3px rgba($active-shadow, $alpha: 0.1);
                }

                &:invalid {
                    border-color: $error;
                    outline: none;
                }
            }
        }
    }

</style>