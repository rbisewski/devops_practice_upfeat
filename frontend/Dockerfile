FROM nginx:stable
RUN  apt update && apt install -y curl gnupg wget
RUN  curl -sL https://deb.nodesource.com/setup_11.x | bash - 
RUN  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt update && apt install -y nodejs yarn
RUN  mkdir /app
ADD  . /app/build
#RUN  cd /app/ && yarn
#RUN  cd /app/ && yarn build
RUN  rm -rf /usr/share/nginx/html
RUN  ln -s /app/build /usr/share/nginx/html
ENTRYPOINT nginx -g "daemon off;"
