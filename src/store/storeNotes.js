import { defineStore } from 'pinia'
import { find as _find, filter as _filter, reduce as _reduce } from 'lodash'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid enim quidem consectetur debitis tenetur ipsa consequuntur saepe hic, tempore mollitia aspernatur omnis placeat distinctio odit. Sunt quidem facere alias?',
        },
        {
          id: '2',
          content: 'This is shorter notes',
        },
      ],
    }
  },
  actions: {
    addNote(payload) {
      const current = new Date().getTime()
      let id = current.toString()
      let note = {
        id,
        content: payload,
      }
      this.notes.unshift(note)
    },
    deleteNote(id) {
      // const idx = notes.value.findIndex((val) => val.id === id)
      // notes.value.splice(idx, 1)
      this.notes = _filter(this.notes, (v) => v.id !== id)
    },
    updateNote(id, content) {
      const item = _find(this.notes, (note) => note.id === id)
      item.content = content
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        const item = _find(state.notes, (note) => note.id === id)
        if (!item) return ''
        return item.content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      return _reduce(state.notes, (acc, note) => acc + note.content.length, 0)
    },
  },
})
