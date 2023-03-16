const {DefaultAzureCredential, ClientSecretCredential }= require('@azure/identity')
const { SubscriptionClient } = require('@azure/arm-subscriptions')
const { ComputeManagementClient } = require('@azure/arm-compute')
const { ResourceManagementClient } = require('@azure/arm-resources')

// bash script would need to set the environment variables 
const tenantId = process.env["AZURE_TENANT_ID"]
const clientId = process.env["AZURE_CLIENT_ID"]
const clientSecret = process.env["AZURE_CLIENT_SECRET"]
const resourceGroupName = "mern-app"


const creds = new ClientSecretCredential(tenantId, clientId, clientSecret)

const main = async () => { 
try { 
    const getSubId = await listSubs()
    const client = new ResourceManagementClient(creds, getSubId)
    const rg = resourceGroupName
    for await (const rgs of client.resourceGroups.list()) { 
        console.log(rgs.name)
    }
    //const vmScaleSetName = "test"
    //const imageId = "demo-image"
    //const computeClient = new ComputeManagementClient(creds, getSubId)
    //console.log(computeClient)
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


