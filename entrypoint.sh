#!/bin/sh -l 

echo "Resource Group: $1"
echo "Tenant Id: $2"
echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT
