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

Build benchmarks bundle.

```sh
$ npm run dist
```

Run benchmarks.

```sh
$ npm run benchmark
```

## Results

### Node v9.0.0-v8-canary

```
marko-search x 6,309 ops/sec ±1.40% (89 runs sampled)
marko-color x 22,214 ops/sec ±0.74% (94 runs sampled)
rax x 9,569 ops/sec ±0.29% (94 runs sampled)
vidom x 8,929 ops/sec ±0.76% (94 runs sampled)
medium x 926,610 ops/sec ±0.06% (93 runs sampled)
```

### Node v6.10.3

```
marko-search x 4,855 ops/sec ±0.54% (92 runs sampled)
marko-color x 14,200 ops/sec ±0.39% (94 runs sampled)
rax x 7,896 ops/sec ±0.54% (94 runs sampled)
vidom x 6,731 ops/sec ±0.56% (93 runs sampled)
medium x 1,010,200 ops/sec ±0.51% (91 runs sampled)
```
