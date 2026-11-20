FROM composer/composer:2.11.2-bin@sha256:269d47ef954e254227bccb35e3e40f642756abee44dded405e1fbb6f5e52af0c AS composer_binary

FROM php:8.3.37-fpm-alpine@sha256:8e8db93687494e48607b70cc7f7e9414d1cda0a393dfac5dae2580dff66a9fa4

COPY --from=composer_binary /composer /usr/bin/composer

ENV COMPOSER_HOME=/application/.composer
ENV COMPOSER_MEMORY_LIMIT=-1

RUN apk update && apk upgrade \
    && apk add --no-cache icu-dev \
    && docker-php-ext-install \
        mysqli \
        pdo \
        pdo_mysql
