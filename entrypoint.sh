#!/bin/sh -l 

echo $resourceGroup
echo $scaleSetName
echo $tenantId 
echo $clientId 
echo $clientSecret
echo $subscriptionId

#export CLIENT_ID=$clientId 
#export CLIENT_SECRET=$clientSecret
#export TENANT_ID=$tenantId
#export AZURE_SUBSCRP

az login --service-principal --username $clientId --password $clientSecret --tenant $tenantId 
node index.js

    




