FROM php:8.0-fpm-buster

EXPOSE 9000

# Install tools required for build stage
RUN set -xe \
 && apt-get update \
 && apt-get install -fyqq \
    bash curl ca-certificates openssl git tzdata \
    nginx \
    libxrender1 fontconfig libc6 \
    gnupg binutils-gold autoconf \
    g++ gcc gnupg libgcc1 linux-headers-amd64 make python \
    libonig5 libonig-dev \
    mariadb-client libmariadbclient-dev \
    libicu63 libicu-dev \
    zip libzip-dev \
    libpng-tools libpng-dev \
 && docker-php-ext-install \
    pcntl \
    bcmath \
    sockets \
    mbstring \
    pdo_mysql mysqli \
    intl \
    zip \
    gd \
 && apt-get remove -fyqq libonig-dev libmariadbclient-dev libicu-dev libzip-dev \
 && pecl install redis xdebug \
 && docker-php-ext-enable redis \
 && php -m \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer \
 && chmod 755 /usr/bin/composer \
 && chown -vR www-data:www-data /run /var/run /var/lib/nginx

# Install nodejs and latest npm
RUN set -xe \
 && echo 'deb https://deb.nodesource.com/node_14.x focal main' > '/etc/apt/sources.list.d/nodesource.list' \
 && apt-key adv --keyserver keyserver.ubuntu.com --recv 1655A0AB68576280 \
 && apt-get update \
 && apt-get install nodejs -fyqq \
 && npm install -g npm@latest

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/php-fpm.conf /usr/local/etc/php-fpm.conf
COPY ./docker/php.ini /usr/local/etc/php.ini
WORKDIR /app
COPY . /app

ARG COMPOSER_ARGS="--no-dev"

RUN npm install \
 && npm run prod \
 && composer install $COMPOSER_ARGS \
 && php artisan optimize:clear \
 && chown -R www-data:www-data /app

ENTRYPOINT ["/app/entrypoint.sh"]
