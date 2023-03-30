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
const updatedImage = "/subscriptions/f80dea2d-81bb-442f-a102-d86eb72cb7d6/resourceGroups/aks-demos/providers/Microsoft.Compute/images/prod-frontend-initial"


const creds = new ClientSecretCredential(tenantId, clientId, clientSecret)

const main = async () => { 
    try { 
    const client = new ComputeManagementClient(creds, subscriptionId)
    const parameter = { 
        virtualMachineProfile: { 
            storageProfile: { 
                imageReference: { 
                  id: `${updatedImage}`
                }
            }
        }
   }
   console.log('running rolling update....');
   const triggerUpdate = await client.virtualMachineScaleSets.beginUpdateAndWait(resourceGroupName, vmScaleSetName, parameter)
   console.log(`Rolling update status: ${triggerUpdate.status}`);
    } catch(error) { 
        console.log(error);
        process.exit(1)
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

main(creds)


