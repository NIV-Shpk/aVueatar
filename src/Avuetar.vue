<template>
    <div class="avuetar-wrapper" 
        @mouseenter="z = 3"
        @mouseleave="z = 1"
        :style='{
            "width": size + "px",
            height: size + "px",
            "border-radius": radius_size + "px",
            "background-color": "#" + BACKGROUND_COLORS[key],
            "box-sizing": "border-box",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "user-select": "none",
            "z-index": z,
            "border": border_dec,
            "box-shadow": shadow ? "0px 3px 8px rgba(18, 18, 18, 0.04), 0px 1px 1px rgba(18, 18, 18, 0.02)" : "unset"
        }'>
        <p class="avuetar-text" :style='{
        "color": "#" + TEXT_COLORS[key],
        "font-size": text_size + "px",
        "margin": "0",
        "padding": "0",
        "text-align": "center",
        "box-sizing": "border-box",
        "font-family": ["-apple-system","BlinkMacSystemFont", "Inter", "Segoe UI", "Roboto", "sans-serif"],
        "line-height": "0",
        "text-transform": "uppercase",
        "font-weight": "500",
        }'
        v-if="style === 'character'" >{{name}}</p>
        <Shape v-else :name="shapeName" :color="shapeColor" :size="Math.round((size) / 100 * 50)" />
    </div>
</template>
<script lang="ts">
export default {name: 'Avuetar'}
</script>
<script setup lang="ts">
import Shape from './shape/Shape.vue'
import randiman from './lib/random'
import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from './lib/colors'
import * as tp from './types';
import {toRefs, computed, ref } from 'vue'
const props = withDefaults(
    defineProps<{
        displayValue?: string
        value: string
        size?: number
        shadow?: boolean
        style?: tp.Style
        border?: boolean
        borderSize?: number
        borderColor?: string
        radius?: number
    }>(), {
        displayValue: "",
        style: "character",
        size: 32,
        value: "",
        shadow: false,
        border: false,
        borderSize: 2,
        borderColor: "#fff",
});
const z = ref(1);
const { displayValue, value, style, size, shadow, border, borderColor, borderSize, radius } = toRefs(props)
const name = computed(() => { return String(displayValue.value || value.value).substring(0, 2);})    
const key = computed(() => { return randiman({ value: value.value, min: 0, max: 19 })})   
const border_dec = computed(() => { return border.value ? borderSize.value + "px solid " + borderColor.value : "unset"})
const shapeColor = computed(() => { return SHAPE_COLORS[key.value];})
const shapeKey = computed(() => { return randiman({ value: value.value, min: 1, max: 60 })})
const shapeName = computed(() => { return 'Shape' + shapeKey.value.toString() as tp.ShapeNames });
const text_size = computed(() => { return Math.round(size.value / 100 * 37) })
const radius_size = computed(() => { return radius?.value ? radius.value : Math.round(size.value / 100 * 37)})
</script>

<style scoped lang="scss">

</style>