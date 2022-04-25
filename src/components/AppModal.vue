<template>
    <div class="modal-backdrop"></div>
    <div class="modal">
        <h3 v-if="title">{{ title }}</h3>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    },
    setup() {
        
    },
}
</script>