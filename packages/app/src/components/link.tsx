import { type ComponentProps, splitProps } from "solid-js"

export function Link(props: ComponentProps<"a">) {
  const [local, rest] = splitProps(props, ["children", "class", "href", "target", "rel"])
  return (
    <a
      href={local.href}
      class={local.class}
      target={local.target ?? "_blank"}
      rel={local.rel ?? "noopener noreferrer"}
      {...rest}
    >
      {local.children}
    </a>
  )
}
