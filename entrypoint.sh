#!/bin/sh -l 

echo $resourceGroup
echo $scaleSetName
echo $tenantId 
echo $clientId 
echo $clientSecret

export CLIENT_ID=$clientId 
export CLIENT_SECRET=$clientSecret
export TENANT_ID=$tenantId

az login --service-principal --username $CLIENT_ID --password $CLIENT_SECRET --tenant $TENANT_ID





