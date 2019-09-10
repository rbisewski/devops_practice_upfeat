#!/bin/bash
docker-compose -f /git/devops_practice_upfeat/docker-compose.yml down
docker build -t upfeat-frontend:latest /git/devops_practice_upfeat/frontend/
docker-compose -f /git/devops_practice_upfeat/docker-compose.yml up -d
