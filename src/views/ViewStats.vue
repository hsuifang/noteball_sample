<script setup>
import { useStoreNotes } from '../store/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '../composable/useWatchCharacters'

// store
const storeNotes = useStoreNotes()

// loveNoteballs
const loveNoteballs = ref('')

useWatchCharacters(loveNoteballs, 50)
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      v-autofocus
      type="text"
      class="input"
      placeholder="Do you love noteballs?"
    />
  </div>
</template>

<style></style>
