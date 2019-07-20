install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

 publish --dry-run:
 	npm publish --dry-run
