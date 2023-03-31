#!/bin/bash
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'
az login --service-principal --username $AZURE_CLIENT_ID --password $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID > /dev/null 2>&1 
loginStatus=$?
echo $loginStatus
if [[ $loginStatus -eq 1 ]]
then
  echo "${RED}there was an error authenticating to Azure${NC}"
  exit 1
elif [[ $loginStatus -eq 0 ]]
then 
  echo "${GREEN}Successfully authenticated to Azure${NC}"
fi

node index.js
updateStatus=$?

if [[ $updateStatus -eq 1 ]]
then 
  echo "${RED}Deployment Failed: please check the output for the error message${NC}"
  exit 1
elif [[ $status -eq 0 ]]
then 
  echo "${GREEN}Deployment Completed${NC}"
fi


    




