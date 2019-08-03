install:
	npm install

start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js
	npx babel-node src/bin/brain-progression.js
	npx babel-node src/bin/brain-prime.js


publish:
	npm publish

lint:
	npx eslint .
