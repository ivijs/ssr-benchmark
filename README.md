# ivi SSR Benchmarks

## Benchmarks

- `marko-search` and `marko-color` from https://github.com/marko-js/isomorphic-ui-benchmarks
- `rax` from https://github.com/raxjs/server-side-rendering-comparison
- `vidom` from https://github.com/dfilatov/vidom/tree/master/benchmarks/renderToString

## Running Benchmarks

Install all dependencies.

```sh
$ npm install
```

Build HTTP server bundle.

```sh
$ npm run dist
```

Launch HTTP server.

```sh
$ npm run serve
```

Run benchmarks.

```sh
$ ./benchmark.sh
```
