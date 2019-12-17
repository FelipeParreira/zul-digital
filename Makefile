DOCKER_CMP_COMMAND=docker-compose
DOCKER_CMP_COMMAND_EXEC=$(DOCKER_CMP_COMMAND) exec 

run:
	$(DOCKER_CMP_COMMAND) up --build

test:
	$(DOCKER_CMP_COMMAND_EXEC) app npm run test

test-app:
	docker build -t zuldigital/engineer-exam . && \
	docker run --rm zuldigital/engineer-exam

shutdown:
	$(DOCKER_CMP_COMMAND) down
