FROM nginx
COPY ./public/ dist/
EXPOSE 80