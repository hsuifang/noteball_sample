import { watch } from 'vue'
export function useWatchCharacters(val, maxChars = 50) {
  // watch characters
  watch(val, (newVal) => {
    if (newVal.length > maxChars) {
      alert(`Only ${maxChars} characters allows`)
    }
  })
}
