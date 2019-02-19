#!/bin/bash
source /home/ec2-user/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 10.13.0
node -e "console.log('Running Node.js ' + process.version)"
echo 'installing forever'
npm i forever -g
cd /var/app
echo $PWD
npm start