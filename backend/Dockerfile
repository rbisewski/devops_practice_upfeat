FROM nginx:stable
RUN  apt update && apt install -y curl gnupg wget
RUN  curl -sL https://deb.nodesource.com/setup_11.x | bash - 
RUN  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt update && apt install -y nodejs yarn
RUN  mkdir /app
ADD  . /app/
RUN  rm -rf /usr/share/nginx/html
RUN  cd /app/ && yarn
ENTRYPOINT cd /app/ && yarn start
