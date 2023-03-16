#!/bin/sh -l 

echo "Resource Group: $1"
echo "Tenant Id: $2"
resourceGroupId=$1
echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT
