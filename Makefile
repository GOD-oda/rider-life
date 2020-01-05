.PHONY: build
build:
	docker-compose run --rm app npm run build

.PHONY: install
install:
	docker-compose run --rm app npm ci

.PHONY: up
up:
	docker-compose up -d