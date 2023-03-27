const {DefaultAzureCredential, ClientSecretCredential }= require('@azure/identity')
const { SubscriptionClient } = require('@azure/arm-subscriptions')
const { ComputeManagementClient } = require('@azure/arm-compute')
const { ResourceManagementClient } = require('@azure/arm-resources')

// bash script would need to set the environment variables 
const tenantId = process.env["AZURE_TENANT_ID"]
const clientId = process.env["AZURE_CLIENT_ID"]
const clientSecret = process.env["AZURE_CLIENT_SECRET"]
const resourceGroupName = "aks-demos"
const vmScaleSetName = "test"
const updatedImage = ""


const creds = new ClientSecretCredential(tenantId, clientId, clientSecret)

const main = async () => { 
try { 
    const getSubId = await listSubs()
    const rg = resourceGroupName
    /*
    for await (const rgs of client.resourceGroups.list()) { 
        console.log(rgs.name)
    }
    */
   const client = new ComputeManagementClient(creds, getSubId)
   const result = await client.virtualMachineScaleSets.get(rg, vmScaleSetName)
   const parameter = { 
        virtualMachineProfile: { 
            storageProfile: { 
                imageReference: { 
                  id: "/subscriptions/f80dea2d-81bb-442f-a102-d86eb72cb7d6/resourceGroups/aks-demos/providers/Microsoft.Compute/images/prod-frontend-new"
                }
            }
        }
   }
   // code to update the vm scale set 
   const update = await client.virtualMachineScaleSets.beginUpdate(rg, vmScaleSetName, parameter )
   // code to get the status object
   let status = await client.virtualMachineScaleSets.getInstanceView(rg, vmScaleSetName)
   // code to return the code
   let progress = status.statuses.forEach((index)=> console.log(index.code));
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


main(creds)


