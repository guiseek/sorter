export function query<K extends keyof HTMLElementTagNameMap>(selector: K) {
  return document.querySelector(selector)
}
