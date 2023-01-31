<script setup lang="ts">
import Counter from "~/components/Counter.vue";
import { georgian, Letter, sample, shuffle } from "~/utils/georgian";
import { computed, onMounted, onUnmounted, ref } from "vue";

const options = ref(shuffle(georgian).slice(0, 4));
const letter = computed(() => sample(options.value));
const revealed = ref<string | null>(null);

const duration = 5_000;
const pick = (option: Letter) => {
  revealed.value = option.name;
  setTimeout(next, duration);
};

const next = () => {
  const current = revealed.value;
  revealed.value = null;
  options.value = shuffle(
    georgian.filter((option) => option.name !== current)
  ).slice(0, 4);
};

const shortcuts = (e: KeyboardEvent) => {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
      pick(options.value[parseInt(e.key, 10) - 1]);
  }
};
onMounted(() => {
  window.addEventListener("keypress", shortcuts);
});
onUnmounted(() => {
  window.removeEventListener("keypress", shortcuts);
});
</script>

<template>
  <main
    class="mx-auto flex h-full w-full min-w-[360px] max-w-[480px] flex-auto flex-col items-stretch justify-center gap-10 px-2 pt-8 pb-16"
  >
    <div
      class="relative flex flex-col justify-center gap-3 text-center text-8xl"
    >
      <Counter
        v-if="revealed"
        class="absolute right-0 top-0"
        :duration="duration / 1000"
      />
      <dt lang="ka">
        {{ letter.name }}
      </dt>
      <dd class="text-4xl" :class="{ invisible: !revealed }">
        {{ letter.latin }} {{ letter.ipa }}
      </dd>
    </div>
    <ul class="grid min-w-[320px] list-none grid-cols-2 grid-rows-2 gap-4">
      <li v-for="(option, index) in options">
        <button
          @click="pick(option)"
          :disabled="!!revealed"
          class="relative w-full whitespace-nowrap rounded-md px-4 pt-3 pb-4 text-3xl text-black"
          :class="{
            'bg-purple-300': !revealed,
            'bg-green-300': revealed && option.name === letter.name,
            'bg-red-300': revealed && option.name !== letter.name,
          }"
        >
          <span class="absolute top-[1px] left-[3px] text-sm">{{
            index + 1
          }}</span>
          <span :class="{ invisible: !revealed }" lang="ka">{{
            option.name
          }}</span>
          {{ option.latin }} {{ option.ipa }}
        </button>
      </li>
    </ul>
  </main>
</template>

<style>
:root,
body,
#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 auto;
}

:root {
  @apply bg-gray-100;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style scoped></style>
