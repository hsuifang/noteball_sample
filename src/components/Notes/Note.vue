<script setup>
import { computed } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    default: () => ({}),
  },
})

const characterLength = computed(() => {
  const length = props.note.content.length
  return `${length} character${length > 1 ? 's' : ''}`
})

// modal
const modals = reactive({
  deleteNote: false,
})
</script>

<template>
  <div class="card mb-3">
    <div class="card-content">
      <div class="content">
        {{ props.note.content }}
        <div class="has-text-right has-text-grey-light mt-3">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link
        :to="{ name: 'edit-note', params: { id: props.note.id } }"
        class="card-footer-item"
        >Edit</router-link
      >
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="props.note.id" />
  </div>
</template>
