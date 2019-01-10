# citation-styles
NPM packages for CSL citation styles and locales.

Styles and locale information provided by Citation Style Language project, https://citationstyles.org.
This project is as yet independent of this organisation.

## Usage
Install the packages using `npm`:

```shell
npm install --save style-vancouver locale-en-us
```

Or `yarn`:

```shell
yarn add style-vancouver locale-en-us
```

These styles may then be imported directly for use with software libraries such as [citeproc-js][citeproc-js], [Citation.js][citation-js] or [simple-cite][simple-cite], i.e.

```js
import Processor from 'simple-cite'
import style from 'style-vancouver'
import locale from 'locale-en-us'

import items from './refs'

const processor = new Processor({ items, style, locale })
```

[citeproc-js]: https://github.com/Juris-M/citeproc-js
[citation-js]: https://github.com/citation-js/citation-js
[simple-cite]: https://github.com/richlewis42/simple-cite

## License

The code in this library is licensed under the [MIT license][mit], by the actual styles are licensed under the [CC-BY-SA 3.0 license][cc-by-sa-3.0].

[mit]: https://opensource.org/licenses/MIT
[cc-by-sa-3.0]: https://creativecommons.org/licenses/by-sa/3.0/
