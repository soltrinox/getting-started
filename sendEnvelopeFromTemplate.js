const express = require('express');
const docusign = require('docusign-esign');
const path = require('path');
const apiClient = new docusign.ApiClient();
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
let fs = require('fs');


//On execution an envelope is sent to the provided email address, one signHere
//tab is added, the document supplied in workingdirectory\fileName is used.
//Open a new browser pointed at http://localhost:3000 to execute. 
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//Fill in Variables Here

//Obtain an OAuth token from https://developers.hqtest.tst/oauth-token-generator
//Obtain your accountId from account-d.docusign.com > Go To Admin > API and Keys

const OAuthToken = '';
const accountId = '';


//Recipient Information goes here
const templateRoleName = ''; //IE: Signer 1
const recipientName = '';
const recipientEmail = '';
const templateId = '';


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------







app.get('/', function (req, res) {
	

apiClient.setBasePath('https://demo.docusign.net/restapi');
apiClient.addDefaultHeader('Authorization', 'Bearer ' + OAuthToken);



// Envelope Code goes here



docusign.Configuration.default.setDefaultApiClient(apiClient);

let envDef = new docusign.EnvelopeDefinition();

//Set the Email Subject line and email message
envDef.emailSubject = 'Please sign this document sent from Node SDK';
envDef.emailBlurb = 'Please sign this document sent from the DocuSign Node.JS SDK.'

envDef.templateId = templateId;


let signer1TemplateRole = new docusign.TemplateRole();
signer1TemplateRole.roleName = templateRoleName;
signer1TemplateRole.email = recipientEmail;
signer1TemplateRole.name = recipientName;

let templateRoleArray = [];
templateRoleArray.push(signer1TemplateRole);

let templateRecipients = new docusign.TemplateRecipients;
templateRecipients = templateRoleArray;


envDef.templateRoles = templateRecipients;

//Envelope status for drafts is created, set to sent if wanting to send the envelope right away
envDef.status = 'sent';


//Send the envelope
let envelopesApi = new docusign.EnvelopesApi();
envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (err, envelopeSummary, response) {


if(err)
	console.log(err);


res.send(envelopeSummary);

});

















});



app.listen(port, host, function (err) {
  if (err)
    throw err;

  console.log('Your server is running on http://' + host + ':' + port + '.');
});