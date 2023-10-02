<template>
    <h5>Custom Component</h5>
    {{  text }}
    <Content/>
</template>

<script>
export default {
    data() {
        return {
            text: 'This is the content of the custom layout'
        }
    },
}
</script>