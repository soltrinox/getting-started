# Getting Started with DocuSign Integrations at Hackathons

## Overview
In our Developer Center, we have complete [guides](https://developers.docusign.com/esign-rest-api/guides), [code examples](https://developers.docusign.com/esign-rest-api/code-examples), and [API reference](https://developers.docusign.com/esign-rest-api/reference). However, we know that at hackathons, you aren't looking for best practices. You just want to get your app working - fast! We've created this readme to get you running in minutes!

## Getting Started
Our eSignature API uses OAUTH which, for production environments, has a few steps to setup. For your hackathon project, you can bypass all of this with a temporary OUATH token (good for 8 hours) that is simple to generate. Here are the steps to take to get started:
1. Create a free [DocuSign developer account sandbox](https://go.docusign.com/o/sandbox/).
2. Locate your API Account ID by following these steps:
    1. Login to your sandbox account created above (if you are not already logged in).
    2. Click the top-righ icon and click **Go to Admin**
    3. Scroll down to the **INTEGRATIONS** section and click **API and Keys**.
    4. Copy your **API Account ID** value. You'll need this for your DocuSign API calls. 

4. Navigate to [OAUTH Token Generator Page](https://developers.docusign.com/oauth-token-generator) and click **GET MY ACCESS TOKEN** and copy the token. You'll need this for your DocuSign API calls.
5. Open the NodeJSSample.txt file and substitute the two values  you copied above into the **OAuthToken** and **accountId** variables.

## Additional Resources
* Real-time help: If you need any help from DocuSign engineers, contact us using the channel supported by the hackathon (devpost, Slack, etc.)
* Videos:
* [DocuSign Developer Center](https://developers.docusign.com)