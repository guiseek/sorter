import { getRandom } from '../utils/get-random'

export function* sortName(names: string[], excludes: number[] = []) {
  const max = names.length
  
  let random = getRandom(max)

  while (excludes.length < max) {
    if (!excludes.includes(random)) {
      excludes.push(random)
      yield names[random]
    }

    random = getRandom(max)
  }
}
