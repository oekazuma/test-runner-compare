# test-runner-compare

- [Jest](https://github.com/facebook/jest)
- [AVA](https://github.com/avajs/ava)
- [Mocha](https://github.com/mochajs/mocha)
- [tape](https://github.com/substack/tape)
- [Jasmine](https://github.com/jasmine/jasmine)
- [uvu](https://github.com/lukeed/uvu)
- [vitest](https://github.com/vitest-dev/vitest)

## Benchmarks (M1 Mac)
```
~> "jest" 424ms
~> "ava" 282ms
~> "mocha" 102ms
~> "tape" 50ms
~> "jasmine" 45ms
~> "uvu" 47ms
~> "vitest" 58ms
```

## Benchmarks (Intel Mac)
```
~> "jest" 1.12s
~> "ava" 626ms
~> "mocha" 209ms
~> "tape" 105ms
~> "jasmine" 81ms
~> "uvu" 86ms
~> "vitest" 109ms
```