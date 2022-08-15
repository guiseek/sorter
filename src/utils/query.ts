export type IdSelector =
  | `#${string}`
  | `#${string} ${string}`
  | `#${string} > ${string}`
  | `${string}#${string}`

export type ClassSelector =
  | `.${string}`
  | `.${string} .${string}`
  | `.${string} > .${string}`
  | `${string}.${string}`

export type AttributeSelector =
  | `[${string}]`
  | `[${string}] ${string}`
  | `[${string}] > ${string}`
  | `${string}[${string}]`

type Selector = IdSelector | ClassSelector | AttributeSelector

type ElementType = HTMLElement | SVGElement

type ElementMap = keyof SVGElementTagNameMap | keyof HTMLElementTagNameMap

type ElementSelector<Key extends string> =
  Key extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Key]
    : Key extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[Key]
    : Key extends Selector
    ? HTMLElement
    : never

export function query<Tag extends ElementMap>(
  selector: Tag | Selector,
  parentElement: ElementType = document.body
): ElementSelector<Tag> | null {
  return parentElement.querySelector(selector)
}

export function queryAll<Tag extends ElementMap>(
  selector: Tag | Selector,
  parentElement: HTMLElement | SVGElement = document.body
): NodeListOf<ElementSelector<Tag>> {
  return parentElement.querySelectorAll(selector)
}
