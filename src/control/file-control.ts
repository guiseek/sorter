export function fileControl(
  element: HTMLInputElement,
  onLoad: (data: string | ArrayBuffer | null) => void
) {
  element.onchange = () => {
    const file = element.files?.item(0)
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => onLoad(reader.result)
    reader.readAsText(file)
  }
}
