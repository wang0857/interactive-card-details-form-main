<template>
    <div class="card-info">
        <div :class="errors.name !== '' || errors.blank !=='' ? 'input-field-error' : ''">
            <Input
                title="CARDHOLDER NAME"
                placeholder="e.g. Jane Appleseed"
                @inputValue="nameValidate"
            />
            <p
                v-if="errors.name !== ''"
                class="card-info-error"
            >
                {{ errors.name }}
            </p>
            <p
                v-if="errors.name === '' && errors.blank !== ''"
                class="card-info-error"
            >
                {{ errors.blank }}
            </p>
        </div>
        <div :class="errors.number !== '' || errors.blank !=='' ? 'input-field-error' : ''">
            <Input
                title="CARD NUMBER"
                placeholder="e.g. 1234 5678 9123 0000"
                @inputValue="numberValidate"
            />
            <p
                v-if="errors.number !== ''"
                class="card-info-error"
            >
                {{ errors.number }}
            </p>
            <p
                v-if="errors.number === '' && errors.blank !== ''"
                class="card-info-error"
            >
                {{ errors.blank }}
            </p>
        </div>
        <div class="card-info-date">
            <div :class="errors.blank !=='' ? 'input-field-error' : ''">
                <ExpDateInput
                    @expMM="expMMValidate"
                    @expYY="expYYValidate"
                    :class="
                        (monthErrorExist ? 'input-field-error-month' : '') ||
                        (yearErrorExist ? 'input-field-error-year' : '')
                    "
                />
                <p
                    v-if="errors.exp !== ''"
                    class="card-info-error"
                >
                    {{ errors.exp }}
                </p>
                <p
                    v-if="errors.exp === '' && errors.blank !== ''"
                    class="card-info-error"
                >
                    {{ errors.blank }}
                </p>
            </div>
          <div :class="errors.cvc !== '' || errors.blank !=='' ? 'input-field-error' : ''">
              <Input
                title="CVC"
                placeholder="e.g. 123"
                @inputValue="cvcValidate"
               />
               <p
                    v-if="errors.cvc !== ''"
                    class="card-info-error"
                >
                    {{ errors.cvc }}
                </p>
                <p
                    v-if="errors.cvc === '' && errors.blank !== ''"
                    class="card-info-error"
                >
                    {{ errors.blank }}
                </p>
          </div>
        </div>
        <Button title="Confirm" class="card-info-btn" @click="infoValidate"></Button>
    </div>
</template>

<script>
    import Input from '../components/Input.vue';
    import ExpDateInput from '../components/ExpDateInput.vue';
    import Button from '../components/Button.vue';

    export default {
        name: 'CreditCard',
        components: { Input, ExpDateInput, Button },
        emits: [
            'cardHolderName',
            'cardNumber',
            'cardCVC',
            'expMonth',
            'expYear'
        ],
        data() {
            return {
                cardInfo: {
                    name: '',
                    number: '',
                    expMonth: '',
                    expYear: '',
                    cvc: ''
                },
                errors: {
                    name: '',
                    number: '',
                    exp: '',
                    cvc: '',
                    blank: ''
                },
                errorExist: false,
                monthErrorExist: false,
                yearErrorExist: false
            }
        },
        methods: {
            nameValidate(name) {
                if (name === '') {
                    this.errors.name = "Can't be blank"
                    this.errorExist = true
                } else {
                    this.errors.name = ''
                    this.errorExist = false
                }

                this.cardInfo.name = name
                this.$emit('cardHolderName', name)
            },
            numberValidate(number) {
                if (number.match(/[a-z]/) || number.match(/ /)) {
                    this.errors.number = 'Wrong format, numbers only'
                    this.errorExist = true
                } else if (number.match(/[0-9]{17}/)) {
                    this.errors.number = 'Maximum 16 digits'
                    this.errorExist = true
                } else if (number === '') {
                    this.errors.number = "Can't be blank"
                    this.errorExist = true
                } else {
                    this.errors.number = ''
                    this.errorExist = false
                }

                const cardNumbers = []
                cardNumbers.push(number.toString().slice(0, 4))
                cardNumbers.push(number.toString().slice(4, 8))
                cardNumbers.push(number.toString().slice(8, 12))
                cardNumbers.push(number.toString().slice(12, 16))

                this.cardInfo.number = cardNumbers.join(' ')
                this.$emit('cardNumber', this.cardInfo.number)
            },
            cvcValidate(cvc) {
                if (cvc.match(/[a-z]/) || cvc.match(/ /)) {
                    this.errors.cvc = 'Wrong format, numbers only'
                    this.errorExist = true
                } else if (cvc.match(/[0-9]{4}/)) {
                    this.errors.cvc = "Maximum 3 digits"
                    this.errorExist = true
                } else if (cvc === '') {
                    this.errors.cvc = "Can't be blank"
                    this.errorExist = true
                } else {
                    this.errors.cvc = ''
                    this.errorExist = false
                }

                this.cardInfo.cvc = cvc
                this.$emit('cardCVC', this.cardInfo.cvc)
            },
            expMMValidate(mm) {
                if (mm.match(/[a-z]/) || mm.match(/ /)) {
                    this.errors.exp = 'Wrong format, numbers only'
                    this.monthErrorExist = true
                } else if (mm.match(/[0-9]{3}/)) {
                    this.errors.exp = "Maximum 2 digits"
                    this.monthErrorExist = true
                } else if (mm === '') {
                    this.errors.exp = "Can't be blank"
                    this.monthErrorExist = true
                } else {
                    this.errors.exp = ''
                    this.monthErrorExist = false
                }

                this.cardInfo.expMonth = mm
                this.$emit('expMonth', this.cardInfo.expMonth)
            },
            expYYValidate(yy) {
                if (yy.match(/[a-z]/) || yy.match(/ /)) {
                    this.errors.exp = 'Wrong format, numbers only'
                    this.yearErrorExist = true
                } else if (yy.match(/[0-9]{3}/)) {
                    this.errors.exp = "Maximum 2 digits"
                    this.yearErrorExist = true
                } else if (yy === '') {
                    this.errors.exp = "Can't be blank"
                    this.yearErrorExist = true
                } else {
                    this.errors.exp = ''
                    this.yearErrorExist = false
                }

                this.cardInfo.expYear = yy
                this.$emit('expYear', this.cardInfo.expYear)
            },
            infoValidate() {
                for (let props in this.cardInfo) {
                    if (this.cardInfo[props] === '') {
                        this.errors.blank = "Can't be blank"
                        this.errorExist = true    
                    } else {
                        this.errors.blank = ''
                        this.errorExist = false 
                    }
                }

                if (!this.errorExist) {
                    if (this.cardInfo.number.length < 19) {
                        this.errors.number = "Minimum 16 digits"
                        this.errorExist = true
                    } else if (this.cardInfo.cvc.length < 3) {
                        this.errors.cvc = "Minimum 3 digits"
                        this.errorExist = true
                    } else if (this.cardInfo.expMonth.length < 2) {
                        this.errors.exp = "Minimum 2 digits"
                        this.monthErrorExist = true
                    } else if (this.cardInfo.expYear.length < 2) {
                        this.errors.exp = "Minimum 2 digits"
                        this.yearErrorExist = true
                    }
                }

                if (this.errorExist || this.monthErrorExist || this.yearErrorExist) {
                    return
                } else {
                    this.$router.push('/thank-you')
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/variables';

    .card-info {
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 380px;

        &-date {
            display: flex;
            gap: 25px;
        }

        &-btn {
            width: 100%;
        }

        &-error {
            color: $error;
            font-size: .9rem;
            margin-top: $sm;
        }
    }

    .input-field-error {
        input {
            border-color: $error;
            outline: none;

            &:focus, &:focus-visible {
                border-color: $error;
                outline: none;
            }
        }

        &-month {
            input {
                &:first-child {
                    border-color: $error;
                    outline: none;

                    &:focus, &:focus-visible {
                        border-color: $error;
                        outline: none;
                    }
                }
            }
        }

        &-year {
            input {
                &:last-child {
                    border-color: $error;
                    outline: none;

                    &:focus, &:focus-visible {
                        border-color: $error;
                        outline: none;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .card-info {
            width: 326px;
        }
    }

</style>