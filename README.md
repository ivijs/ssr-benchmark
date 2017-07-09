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
marko-search x 6,520 ops/sec ±1.02% (89 runs sampled)
marko-color x 21,208 ops/sec ±0.84% (83 runs sampled)
rax x 9,534 ops/sec ±0.13% (96 runs sampled)
vidom x 9,495 ops/sec ±0.62% (93 runs sampled)
medium x 926,057 ops/sec ±0.08% (96 runs sampled)
```

### Node v6.10.3

```
marko-search x 5,563 ops/sec ±0.51% (91 runs sampled)
marko-color x 16,069 ops/sec ±0.54% (92 runs sampled)
rax x 8,302 ops/sec ±0.46% (95 runs sampled)
vidom x 7,071 ops/sec ±0.57% (92 runs sampled)
medium x 1,050,008 ops/sec ±0.43% (94 runs sampled)
```
