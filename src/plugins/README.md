## Plugins

A custom user plugin system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { AppPlugin } from '~/types'

export const install: AppPlugin = ({ app, router, isClient }) => {
  // do something
}
```
