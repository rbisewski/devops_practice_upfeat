# DevOps Practice - Upfeat

Operations Hello World.

Website: upfeat.ibiscybernetics.com

### Building the docker images

To build the docker images:

```bash
git clone https://github.com/rbisewski/devops_practice_upfeat
cd devops_practice_upfeat
docker build -t upfeat-frontend ./frontend
```

### Setting up the images

Setup a MongoDB as follows:

```bash
sudo mkdir -p /mongodb/user-database

docker run -d -it --restart always --name app-user-db \
           -p 27017:27017 -v /mongodb/user-database:/data/db \
           -e MONGO_INITDB_DATABASE=admin \
           -e MONGO_INITDB_ROOT_USERNAME=db-user \
           -e MONGO_INITDB_ROOT_PASSWORD=7fKDcA2RC9gcufb1agxSd2ncucNaD3f42R8EQBHP6QysgHwaA4XWgeHdbNYIjUou \
           mongo:latest
```

Install docker compose and then type:

```bash
docker-compose up -d
```
