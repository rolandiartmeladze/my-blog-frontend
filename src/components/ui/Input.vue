<template>
  <div>
    <label :for="id" class="block text-md mb-1">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="w-full border rounded bg-inherit px-3 py-2 outline-none"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | null;
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}>();
</script>
