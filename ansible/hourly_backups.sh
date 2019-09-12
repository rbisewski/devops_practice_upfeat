#!/bin/bash
echo "Attempting backup on: `date`"
cd /git/devops_practice_upfeat
git pull
git config --global user.email "contact@ibiscybernetics.com"
git config --global user.name "Robert Bisewski"
cp /database/users.sqlcipher /git/devops_practice_upfeat/app/database/
cd /git/devops_practice_upfeat
git add *
git commit -m "hourly database backup"
git push

if [ $? -eq 0 ]
then
    echo "Backup was successful."
else
    echo "Backup failed."
fi
