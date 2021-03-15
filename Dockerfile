FROM nginx
COPY ./dist/ dist/
EXPOSE 80