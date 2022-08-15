import { sortName } from '../core/sort-name'

export function sortControl(
  element: HTMLButtonElement,
  names: string[],
  excludes: number[] = []
) {
  const sorter = sortName(names, excludes)
  
  const setCurrent = ({ value, done }: ReturnType<typeof sorter.next>) => {
    element.innerHTML = done ? `complete` : `sorted is ${value}`
  }

  element.onclick = () => setCurrent(sorter.next())
}
