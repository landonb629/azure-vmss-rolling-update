const {DefaultAzureCredential, ClientSecretCredential }= require('@azure/identity')
const { SubscriptionClient } = require('@azure/arm-subscriptions')
const { ComputeManagementClient } = require('@azure/arm-compute')


// bash script would need to set the environment variables 
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"]
const tenantId = process.env["AZURE_TENANT_ID"]
const clientId = process.env["AZURE_CLIENT_ID"]
const clientSecret = process.env["AZURE_CLIENT_SECRET"]
const resourceGroupName = process.env["resourceGroup"]
const vmScaleSetName = process.env["scaleSetName"]
const updatedImage = "/subscriptions/f80dea2d-81bb-442f-a102-d86eb72cb7d6/resourceGroups/aks-demos/providers/Microsoft.Compute/images/prod-frontend-new"


const creds = new ClientSecretCredential(tenantId, clientId, clientSecret)

const main = async () => { 
try { 
    //const getSubscriptionId = await listSubs()
    const client = new ComputeManagementClient(creds, subscriptionId)
    //const result = await client.virtualMachineScaleSets.get(resourceGroupName, vmScaleSetName)
    const parameter = { 
        virtualMachineProfile: { 
            storageProfile: { 
                imageReference: { 
                  id: `${updatedImage}`
                }
            }
        }
   }
   const triggerUpdate = await client.virtualMachineScaleSets.beginUpdateAndWait(resourceGroupName, vmScaleSetName, parameter)
   console.log(triggerUpdate);
   //const updatingVirtualMachineScaleSet = updateScaleSet(resourceGroupName, vmScaleSetName, parameter, client)
   // code to update the vm scale set 
   // code to get the status object
   
   // code to return the code
   
   //while (progress !== "ProvisioningState/succeeded") {
   //}

   //console.log(update);
   //console.log(result);
   //console.log(result.virtualMachineProfile.storageProfile.imageReference);
} catch(error) { 
    console.log(error)
}
}

// function where we get the subscription ID that we are authenticated to 
const listSubs = async () => { 
    try { 
        const client = new SubscriptionClient(creds);
        const subscription = client.subscriptions.list()
        for await (const sub of subscription) { 
          const subscriptionDetails = await client.subscriptions.get(sub.subscriptionId)
         return subscriptionDetails.subscriptionId
        }
    } catch(error) { 
        console.log(error)
    }
}

const updateScaleSet = async (resourceGroup, scaleSetName, parameter, client) => { 
    try { 
       const triggerUpdate =  await client.virtualMachineScaleSets.beginUpdateAndWait(resourceGroup, scaleSetName, parameter )
       console.log(triggerUpdate);
       return 
    } catch(error) { 
      console.log(error);
    }
}

const checkScaleSet = async (resourecGroup, scaleSetName, client) => { 
    try { 
        let status = await client.virtualMachineScaleSets.getInstanceView(resourceGroupName, vmScaleSetName)
        let progress = status.statuses.forEach((index)=> console.log(index.code));
        return
    } catch(error) { 

    }
}


main(creds)


