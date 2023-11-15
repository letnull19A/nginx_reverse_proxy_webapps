FROM nginx:alpine

WORKDIR /

COPY ./nginx.conf /etc/nginx

EXPOSE 7070

ENTRYPOINT ["nginx", "-g", "daemon off;"]