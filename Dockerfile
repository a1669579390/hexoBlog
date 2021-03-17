FROM nginx
COPY ./public/ /usr/share/nginx/html/hexo
COPY ./docker/nginx.conf /etc/nginx/conf.d/fe.conf
EXPOSE 80