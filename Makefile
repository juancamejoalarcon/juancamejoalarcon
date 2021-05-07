local-dev: run-client-local run-server-local

run-server-local:
	cd server && uvicorn app.main:app --reload

run-client-local:
	npm start --prefix ./client

build-client:
	npm run build --prefix ./client
	mv client/build client/static
	rm -r server/static
	mv client/static server

deploy-heroku:
	git subtree push --prefix web heroku master

