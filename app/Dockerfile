FROM debian:stretch-slim
RUN  apt update && apt install -y curl gnupg wget procps nginx
RUN  curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt update && apt install -y nodejs yarn
RUN  mkdir /app
ADD  . /app/
RUN  cd /app/ && yarn
RUN  cd /app/ && yarn build
ENTRYPOINT ["/bin/bash","/app/init.sh"]
