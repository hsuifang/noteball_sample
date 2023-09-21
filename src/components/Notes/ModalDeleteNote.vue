<script setup>
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from '../../store/storeNotes'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

// store
const storeNotes = useStoreNotes()

// close modal
const closeModal = () => {
  emit('update:modelValue', false)
}

// click outside to close
const modalCardRef = ref(null)
onClickOutside(modalCardRef, () => {
  closeModal()
})

// keyboard control
const handleKeyboard = (e) => {
  if (e.key === 'Escape') closeModal()
}
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>

<template>
  <div class="modal is-active p-2" :class="{ 'is-active': props.modalValue }">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to delete this note ?</section>
      <footer class="modal-card-foot is-justify-content-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(props.noteId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<style lang="scss"></style>
