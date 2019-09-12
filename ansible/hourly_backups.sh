#!/bin/bash
cd /git/devops_practice_upfeat && git pull
cp /database/users.sqlcipher /git/devops_practice_upfeat/app/database/
cd /git/devops_practice_upfeat && git push
