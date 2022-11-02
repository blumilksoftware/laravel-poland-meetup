## laravel-poland-meetup (work in progress)
This is a source code for the **Laravel Poland Meetup** official website.

![./screenshot.png](./screenshot.png)

### Development
Static database is built from JSON files from `resources` directory. PHP builder script can be run from Docker container (and requires some vendor installations):
```bash
docker-compose up -d
docker-compose exec php composer install
docker-compose exec php php backend/builder.php
```

Frontend can be run from another container (also with node modules installed):
```bash
docker-compose exec node npm install
docker-compose exec node npm run dev
```

### Deployment
The website should be automatically deployed to GitHub Pages with every pull requests to the `main` branch.