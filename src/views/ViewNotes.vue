<script setup>
import NoteView from '@/components/Notes/Note.vue'
import AddEditNoteView from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '../store/storeNotes'
import { useWatchCharacters } from '../composable/useWatchCharacters'

// store
const storeNotes = useStoreNotes()

// notes
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote, 100)
</script>

<template>
  <div class="notes">
    <AddEditNoteView v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button
          class="button is-link has-text-dark has-background-warning"
          @click="addNote"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNoteView>
    <NoteView v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<style></style>
