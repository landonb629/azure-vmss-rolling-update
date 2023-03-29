#!/bin/bash
az login --service-principal --username $AZURE_CLIENT_ID --password $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID 
loginStatus=$?

if [[ $loginStatus -eq 1 ]]
then
  echo "there was an error authenticating to Azure"
  echo "check /tmp/authlog.txt for the error message"
fi

node index.js
updateStatus=$?

if [[ $updateStatus -eq 1 ]]
then 
  echo "Deployment Failed: please check the output for the error message"
elif [[ $status -eq 0 ]]
then 
  echo "Deployment Completed"
fi


    




