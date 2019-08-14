install:
	npm install

start:
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish

lint:
	npx eslint .

list:
	npx babel-node src/bin/commands.js list

menu:
	npx babel-node src/bin/commands.js menu
