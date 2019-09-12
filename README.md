# DevOps Practice - Upfeat

Operations Hello World.

Website: upfeat.ibiscybernetics.com

### Building the docker images locally and using them

To build the docker images:

```bash
git clone https://github.com/rbisewski/devops_practice_upfeat
cd devops_practice_upfeat
docker build -t upfeat-devops-app:latest ./app
docker-compose up -d
```

### Setting up the images

Deploy the docker instances to the GCP cloud VM:

```bash
ansible-playbook -K ansible/deploy-operations-hello-world.yml
```
