<template>
    <div>
        <label :for="title" class="input-title">{{ title }}</label>
        <input
            v-model="value"
            class="input-field"
            :placeholder="placeholder"
            :id="title"
        >
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: ['title', 'placeholder'],
        emits: ['inputValue'],
        data() {
            return {
                value: ''
            }
        },
        watch: {
            value: function(inputValue) {
                this.$emit('inputValue', inputValue)
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/variables';
    
    .input {
        &-title {
            letter-spacing: 1px;
            font-size: .8rem;
        }

        &-field {
            border: 1px solid $dark-violet;
            border-radius: $sm;
            height: 45px;
            width: 100%;
            padding: $md;
            box-sizing: border-box;
            margin-top: $sm;

            &:focus, &:focus-visible {
                outline: none;
                border-color: $border-focus;
                box-shadow: 0px 0px 3px rgba($active-shadow, $alpha: 0.1);
            }
        }
    }

</style>