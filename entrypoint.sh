#!/bin/sh -l 
az login --service-principal --username $CLIENT_ID --password $CLIENT_SECRET --tenant $TENANT_ID

#echo "Resource Group: $1"
#echo "Tenant Id: $2"
#echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT


