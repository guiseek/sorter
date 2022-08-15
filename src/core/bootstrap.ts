import { fileControl } from '../control/file-control'
import { sortControl } from '../control/sort-control'
import { CSVToArray } from '../utils/csv-to-array'

export const bootstrap = (
  input: HTMLInputElement,
  button: HTMLButtonElement
) => {
  fileControl(input, (value) => {
    const list = CSVToArray(value as string)
    const names = list.map(([name]) => name)

    sortControl(button, names)
    
    button.disabled = false
    input.form?.remove()
  })
}
