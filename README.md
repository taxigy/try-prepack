# Try Prepack with Webpack

This is a tryout of [Prepack](/facebook/prepack), a tool to minimize the JS code via partial evaluation, so that instead of

```javascript
const MINUTE = 1000 * 60;
```

the result contains evaluated code:

```javascript
const MINUTE = 60000;
```

I was curious if it is applicable to React code, and looks like it is only partially applicable due to lots of unsupported breaking things in highly complex React code. For one, I found that

```javascript
import { renderToStaticMarkup } from 'react-dom/server';
```

would throw an exception and never proceed. Webpack would never output anything. So this stub is very basic because of that as well.

## Result

Just as expected: what can be evaluated, is evaluated, and Webpack's IIFE gets reduced into a little line of code, giving significant win in the output:

```bash
$ # without Prepack
$ yarn webpack > /dev/null; du -sh ./build/index.js
148K	./build/index.js

$ # with Prepack
$ ENABLE_PREPACK=true yarn webpack > /dev/null; du -sh ./build/index.js
4.0K	./build/index.js
```

with some insignificant increase in processing time.
