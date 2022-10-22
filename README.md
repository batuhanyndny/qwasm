# QWasm

Run wasm with React. This project uses vite, lerna, react, rust and wasm-pack to run web assembly on the browser. 

#### Why is the Q prefix?
I intend to build a quantum simulation toolkit with rust and run the compute heavy processes on the browser using web assembly.

# Dependencies

- You need `rust`, `cargo`, `wasm-pack`
	- [rust and cargo](https://www.rust-lang.org/tools/install)
	- [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/)
- `node` and `yarn`
	- [node](https://nodejs.org/en/download/)
	- [yarn](https://yarnpkg.com/getting-started/install)

# Usage

- Bootstrap packages using `yarn bootstrap`
- Build rust code with `wasm-pack` using `yarn build:qwasm`
- Run React app with `yarn dev`
