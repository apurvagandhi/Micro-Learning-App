# How To Create a **Service** 🤖
**Definition**: Service is responsible for processing data and enforcing rules for permissions.
It helps your application to understand if a request can be completed successfully. For example,
a non-existent user would pass through the controller layer and  service layer, but the service layer would
return null or some err response after the repo fails to get the data. It is only the repo's job to grab data,
not make decisions on what to do with said data.

