<template>
  <div>
    <label :for="id" class="block text-sm mb-1">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      class="w-full border rounded px-3 py-2"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}>();
</script>
