#!/bin/sh -l 

echo $resourceGroup
echo $scaleSetName
echo $tenantId 
echo $clientId 
echo $clientSecret
az login --service-principal --username $clientId --password $clientSecret --tenant $tenantId
az group show -o table


