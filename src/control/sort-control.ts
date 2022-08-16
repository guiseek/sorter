import { sortName } from '../core/sort-name'

export function sortControl(
  element: HTMLButtonElement,
  names: string[],
  excludes: number[] = []
) {
  const sorter = sortName(names, excludes)

  const setCurrent = ({ value, done }: ReturnType<typeof sorter.next>) => {
    if (!done) {
      element.innerHTML = `sorted is ${value}`
    } else {
      element.innerHTML = `complete`
      element.disabled = true
    }
  }

  element.onclick = () => setCurrent(sorter.next())
}
