setup:
	docker-compose up -d
	docker-compose exec php composer install
	docker-compose exec node npm install
	docker-compose exec node npm run dev
