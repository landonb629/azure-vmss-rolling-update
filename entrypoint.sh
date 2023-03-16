#!/bin/sh -l 

echo "Resource Group: $1"
echo "Tenant Id: $2"
if [[ "$2" == "tenanttester" ]]
then 
 echo true
else 
 echo false
fi
resourceGroupId=$1
echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT
