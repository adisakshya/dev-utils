#!/bin/bash

###################################################################
#  A simple script to install required packages on Amazon Linux   #
###################################################################

# Update Packages
sudo yum update -y

# Install pakages
# Git
sudo yum install git -y
# NodeJs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
# yarn
npm install -g yarn
# gtop
npm install -g gtop

# Install docker
sudo amazon-linux-extras install docker -y
# Start docker
sudo service docker start
# Create group
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

# Install AWS CLI
sudo curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo unzip awscliv2.zip
sudo ./aws/install

# Install Copilot CLI
curl -Lo /usr/local/bin/copilot https://github.com/aws/copilot-cli/releases/download/v0.2.0/copilot-linux-v0.2.0
chmod +x /usr/local/bin/copilot

# Test installations
docker --version
docker run hello-world
aws --version
copilot --version
