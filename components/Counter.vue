<script setup lang="ts">
import { defineProps, onUnmounted, ref } from "vue";

const props = defineProps<{
  duration: number;
}>();

const timer = ref(props.duration);

const id = setInterval(() => {
  timer.value--;
}, 1_000);
onUnmounted(() => clearInterval(id));
</script>

<template>
  <span v-if="timer > 0" class="grid grid-cols-1 grid-rows-1 text-xl">
    <svg
      class="col-start-1 row-start-1 h-7 w-7 overflow-visible stroke-orange-500 stroke-2"
      :style="{ '--duration': props.duration + 's' }"
    >
      <circle r="14" cx="14" cy="14" fill="none"></circle>
    </svg>
    <span class="col-start-1 row-start-1 h-7 w-7">{{ timer }}</span>
  </span>
</template>

<style scoped>
circle {
  stroke-dasharray: 88;
  stroke-dashoffset: 0;
  animation: countdown var(--duration) linear forwards;
  transform: rotate(-90deg);
  transform-origin: center;
}

@keyframes countdown {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 88;
  }
}
</style>
