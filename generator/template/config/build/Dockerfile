FROM base_image
ADD . /opt/app/
WORKDIR  /opt/app 
RUN npm install && npm run build
ENTRYPOINT /usr/sbin/sshd && mkdir -p /export/logs && mkdir -p /dev/shm/nginx_temp/client_body && nginx -c /opt/nginx/conf/nginx.conf && sleep 9999999d