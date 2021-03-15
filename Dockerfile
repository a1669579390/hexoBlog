FROM nginx
COPY ./public/ dist/
COPY ./docker/nginx.conf /etc/nginx/conf.d/fe.conf
EXPOSE 80