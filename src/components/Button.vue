<template>
    <button class="primary-btn">{{ title }}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: ['title']
    }
</script>

<style lang="scss">
    @import '../scss/variables';

    .primary-btn {
        border-radius: $sm;
        padding: 18px;
        text-align: center;
        color: $white;
        background-color: $deep-violet;
        transition: $transition;
        font-size: 1rem;
        letter-spacing: 2px;
        border: none;

        &:hover {
            background-color: lighten($deep-violet, 20%);
            cursor: pointer;
        }
    }
</style>