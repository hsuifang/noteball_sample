<script setup>
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'warning',
  },
  placeholder: {
    type: String,
    default: 'Type something...',
  },
  label: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const notes = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

/**
 * focus textarea
 */
const textareaRef = ref(null)
const focusTextarea = () => {
  textareaRef.value.focus()
}
defineExpose({
  focusTextarea,
})
</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">
    <label class="label has-text-white" v-if="props.label">{{ props.label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-autofocus
          class="textarea"
          :placeholder="props.placeholder"
          ref="textareaRef"
          v-model="notes"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<style></style>
