install:
	npm install

start:
	npx babel-node src/bin/bramain-even.js

publish:
	npm publish

lint:
	npx eslint .
