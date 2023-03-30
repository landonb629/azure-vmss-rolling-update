#!/bin/bash
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'
az login --service-principal --username $AZURE_CLIENT_ID --password $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID 
loginStatus=$?
echo $loginStatus
if [[ $loginStatus -eq 1 ]]
then
  echo "${RED}there was an error authenticating to Azure${NC}"
  echo "${RED}check /tmp/authlog.txt for the error message${NC}"
elif [[ $loginStatus -eq 0 ]]
then 
  echo "${GREEN}Successfully authenticated to Azure${NC}"
fi

node index.js
updateStatus=$?
echo $updateStatus
if [[ $updateStatus -eq 1 ]]
then 
  echo "${RED}Deployment Failed: please check the output for the error message${NC}"
elif [[ $status -eq 0 ]]
then 
  echo "${GREEN}Deployment Completed{NC}"
fi


    




