local-dev: run-client-local run-server-local

run-server-local:
	uvicorn server.main:app --reload

run-client-local:
	npm start --prefix ./client