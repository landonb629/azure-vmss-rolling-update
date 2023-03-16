#!/bin/sh -l 

echo $1
resourceGroupId=$($1)
echo "resourceGroupId=$resourceGroupId" >> $GITHUB_OUTPUT