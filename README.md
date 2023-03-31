# azure-vmss-rolling-update
Github actions to help with easily rolling out new actions to an Azure virtual machine scale set


referencing the samples 
https://github.com/Azure-Samples/azure-sdk-for-js-samples


KNOWN ISSUE:

In a scenario where a rolling update is triggered, and someone goes into the azure portal and manually cancels the update, azure will respond with a successful status. 

