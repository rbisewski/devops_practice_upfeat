# DevOps Practice - Upfeat

Operations Hello World.

Website: upfeat.ibiscybernetics.com

### Building the docker images

To build the docker images:

```bash
git clone https://github.com/rbisewski/devops_practice_upfeat
cd devops_practice_upfeat
docker build -t upfeat-devops-app:latest ./app
```

### Setting up the images

Install docker compose and then type:

```bash
docker-compose up -d
```
