export const CSVToArray = <T extends string>(
  data: T,
  delimiter = ',',
  omitFirstRow = false
) => {
  const ordered = data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)

  return ordered.split('\n').map((v: string) => v.split(delimiter))
}
