FROM php:7.4-apache

LABEL maintainer="Elena Browne"

#Set the working directory in the image
WORKDIR /app/serv

#Copy our app folder to the image
COPY app /srv/app

RUN docker-php-ext-install pdo_mysql

# Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

#PHP Configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

#Copy our public folder to the working directory
COPY app/public .