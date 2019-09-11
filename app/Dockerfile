FROM archlinux/base:latest
RUN pacman -Syyuv --noconfirm && pacman --noconfirm -S wget procps nginx make gcc sqlcipher nodejs yarn npm python2 python grep
RUN mkdir /app
ADD . /app/
RUN cd /app/ && yarn
RUN cd /app/ && yarn build
RUN rm -rf /usr/share/nginx/html
RUN ln -s /app/dist /usr/share/nginx/html
ENTRYPOINT ["/bin/bash","/app/init.sh"]
