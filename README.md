# Trigger azure virtual machine scale set rolling update 

This action will aid in rolling out new azure custom images to virtual machine scale sets

# INPUTS 

RESOURCE_GROUP

VM_SCALE_SET

AZURE_TENANT_ID

AZURE_CLIENT_ID

AZURE_CLIENT_SECRET

IMAGE_ID

AZURE_SUBSCRIPTION_ID

# EXAMPLE USAGE 




KNOWN ISSUE:

In a scenario where a rolling update is triggered, and someone goes into the azure portal and manually cancels the update, azure will respond with a successful status. 

