<template>
    <span :style='{
    "display": "inline-flex",
    "align-items": "center",
    "vertical-align": "middle",
    "color": "#" + color
    }' role="img">
        <component :is="name" :width="size + 'px'"></component>
    </span>
</template>
<script  lang="ts">
import * as shapes from './shapes';
type ShapeNames = keyof typeof shapes

export default { name: 'Shape' }
</script>
<script setup lang="ts">
import {reactive, toRefs } from 'vue'
const props = withDefaults(
    defineProps<{
        name: ShapeNames
        size?: number
        color: string
    }>(), {
        size: 24,
});
const { name, size, color } = toRefs(props)
</script>

<style scoped>

</style>