<script setup>
import { useStoreNotes } from '../store/storeNotes'

// router
const route = useRoute()
const router = useRouter()

// note
const noteContent = ref('')
const storeNotes = useStoreNotes()
const noteId = route.params.id
noteContent.value = storeNotes.getNoteContent(noteId)

// save click
const handleSaveClick = () => {
  storeNotes.updateNote(noteId, noteContent)
  router.push({ name: 'notes' })
}
</script>

<template>
  <div class="edit-note">
    <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link" placeholder="Edit note">
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
        <button
          @click="handleSaveClick"
          class="button is-link has-text-dark has-background-warning"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style></style>
