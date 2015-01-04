# murl

murl is fast url pattern matching and replacing.
It's avaiable through npm:

```
npm install murl
```

## What?

murl exposes a single function that accepts a pattern

``` js
var murl = require('murl')
var pattern = murl('/{hello}')
```

If you pass a string to the pattern murl will try and match it

``` js
pattern('/world') // -> {hello:'world'}
```

If you pass an object it will replace into the pattern

``` js
pattern({hello:'world'}) // -> '/world'
```

## Patterns

You can use `?` to specify a group as optional

``` js
// matches both '/a' and '/a/b'
murl('/{hello}/{world}?')
```

Per default the `{}` groups matches until the next character or `/`.

``` js
// matches '/a' but not '/a/b'
murl('/{hello}')

// matches '/200x200'
murl('/{wid}x{hei}')
```

Use `*` to match anything

``` js
// matches '/a', '/a/b/c' and so on
murl('/*') 
```

## Strict mode

Per default murl will disregard trailing `/` from the input string.
Pass `{strict:true}` to disable this.

``` js
var pattern = murl('/{hello}', {strict:true});

console.log(pattern('/world/')); // returns null
console.log(pattern('/world'))   // return {hello:'world'}
```

## License

MIT
