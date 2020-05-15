run:
	deno run --unstable  --importmap importmap.json  --config tsconfig.json --allow-net --allow-read server/index.ts
debug:
	deno run --allow-net --inspect-brk  --allow-read server/index.ts
test:
	deno test --allow-all  --unstable --importmap=importmap.json
format:
	deno fmtn
bundle:
	rm -rf build/
	mkdir build
	deno bundle server/index.ts build/index