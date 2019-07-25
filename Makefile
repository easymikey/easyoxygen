install:
	npm install

start:
	npx babel-node src/bin/bramain-even.js

publish --dry-run:
	npm publish --dry-run

lint:
	npx eslint .
