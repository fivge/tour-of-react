# doc

## font

## icon

```tsx
<span className="material-icons">open_in_new</span>
```

## ui component

```tsx
import "@material/web/checkbox/checkbox";

<label>
  Material 3<md-checkbox checked></md-checkbox>
</label>;
```

## css

```ts
import styled from "@emotion/styled";

const Page = styled.div``;

export default { Page };
```

```ts
import N from "./nodes";
```

## todo

### JSX

```tsx
<tr-foo-a>as</tr-foo-a>

<md-filled-button>Next</md-filled-button>
```

`.d.ts`

```ts
declare global {
  interface HTMLElementTagNameMap {
    "md-list-item1": any;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-menu2": MdMenu;
  }
}
```

类型“JSX.IntrinsicElements”上不存在属性“md-filled-button”。ts(2339)

### mtd

https://github.com/rmwc/rmwc

https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components

https://github.com/material-components/material-components-web
