install:
	npm install

start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npx eslint .
