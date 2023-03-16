#!/bin/sh -l 

echo "Resource Group: $1"
resourceGroupId=$1
echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT