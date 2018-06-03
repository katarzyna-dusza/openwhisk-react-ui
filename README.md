# UI for Apache OpenWhisk

This repo is an experiment with the main purpose of learning React & Redux.
Because I played around with Apache OpenWhisk earlier, I decided to create a UI for this FaaS platform.

With this UI, you will be able to create actions, triggers and rules. 
This UI can be useful when working with custom cloud deployments of OpenWhisk.

## Technologies
- **React**
- **Redux**
- **Webpack**

Other libraries:
- axios
- lodash
- react-ace
- react-pagination
- redux-logger
- redux-promise
- redux-thunk

For testing:
- jest 
- enzyme
- sinon
- deep-freeze

## Prerequisites

You have 2 options here:
- Deploy a custom OpenWhisk in your cloud infrastructure
- Use a hosted version of OpenWhisk on BlueMix:
  - create an account on [BlueMix OpenWhisk](https://console.bluemix.net/registration/?target=%2Fopenwhisk),
  - install and enable in Chrome Browser [Allow-Control-Allow-Origin: * add-on](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) - without it, you will be able to ONLY displaying all resources.

> Remember about disabling the CORS add-on after you're finished playing around.

## Run app
1. Install all dependencies
    ```shell
    yarn install
    ```

1. Paste the link, namespace and token from your OpenWhisk account into `config.js` file :
    ```javascript
    export const config = {
        baseUrl: 'URL_TO_OPENWHISK',
        namespace: 'YOUR_NAMESPACE_dev',
        token: 'Basic YOUR_TOKEN'
    };
    
    ```

1. Run
    ```shell
    npm start
    ```
The application should appear under [localhost](localhost:8080) (port 8080 is set by default).


And Voilà! Have fun!

## Simple user journey

1. Create an action with this code and name it as you want:
```javascript
function main(params) {
   return {
       result: 'Hello ' + params.name
   };
}
```
2. Create a trigger with these parameters:
```json
[
  {
    "key": "name",
    "value": "WRITE_HERE_YOUR_NAME"
  }
]
```

3. Create a rule to connect your action and trigger.
4. Go to Trigger list and Run your trigger.
5. Go to Activations list and display details. You should see something like this:
```json
{
  "response": {
    "result": {
      "result": "Hello WRITE_HERE_YOUR_NAME"
    },
    "success": true,
    "status": "success"
  },
  "logs": []
}
```

> In case if you don't see new activation, just wait. When you run a trigger, OpenWhisk has to take its parameters, 
inject them into the action and then create an activation. It can take a while. 

## Roadmap

There are a couple of things, which will be improved:
- [ ] RWD (the application was tested only on Chrome browser and 15-inch laptop)
- [ ] modals (confirmation before deleting and information in case of any failures)
- [ ] listening for the new activations
- [ ] caching
- [ ] add possibility to run the code using a custom image (blackbox option)
- [ ] create sequence actions (with drag and drop)

## Resources
- https://console.bluemix.net/docs/openwhisk/index.html#getting-started-with-openwhisk)
- https://console.bluemix.net/apidocs/98-cloud-functions?&language=node#introduction
