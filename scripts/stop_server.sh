#!/bin/bash
source /home/ec2-user/.bash_profile
echo 'installing forever'
npm i forever -g
forever stopall