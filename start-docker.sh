docker run --name uio-mobile-nginx \
    -v ~/source/uio-mobile:/usr/share/nginx/html:ro -d \
    -p 8111:80 nginx
