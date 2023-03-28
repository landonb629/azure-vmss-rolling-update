#!/bin/bash
set -e
#az login --service-principal --username $AZURE_CLIENT_ID --password $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID 
scriptRun=$(node index.js)
status="$?"
echo $status
#if [[ $status -eq 0 ]]
#then 
 #   echo "Rolling update completed"
  #  exit 
#else if 

    




