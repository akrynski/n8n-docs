(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1751:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"slack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slack"}},[e._v("#")]),e._v(" Slack")]),e._v(" "),o("p",[e._v("You can use these credentials to authenticate the following nodes:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Slack/"}},[e._v("Slack")])],1)]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Create a "),o("a",{attrs:{href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),o("OutboundLink")],1),e._v(" account.")]),e._v(" "),o("h2",{attrs:{id:"using-oauth"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("⛅️ Note for n8n.cloud users")]),e._v(" "),o("p",[e._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your Slack account to n8n.")])]),e._v(" "),o("ol",[o("li",[e._v("Open the "),o("a",{attrs:{href:"https://api.slack.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack API"),o("OutboundLink")],1),e._v(" page.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Create an app")])]),e._v(" button and select "),o("strong",[e._v("From scratch")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter an "),o("em",[o("strong",[e._v("App Name")])]),e._v(" in the corresponding field.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Select a workspace")])]),e._v(" for your app from the dropdown list.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Create App")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Scroll down to the "),o("em",[o("strong",[e._v("App Credentials")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Copy and paste "),o("em",[o("strong",[e._v("Client ID")])]),e._v(" and "),o("em",[o("strong",[e._v("Client Secret")])]),e._v(" in the corresponding fields of your n8n credentials.")]),e._v(" "),o("li",[e._v("On the Basic Information page, navigate to "),o("em",[o("strong",[e._v("Building Apps for Slack")])]),e._v(" > "),o("em",[o("strong",[e._v("Add features and functionality")])]),e._v(" > "),o("em",[o("strong",[e._v("Permissions")])]),e._v(".")]),e._v(" "),o("li",[e._v("In the "),o("em",[o("strong",[e._v("Redirect URLs")])]),e._v(" section, click on "),o("em",[o("strong",[e._v("Add New Redirect URL")])]),e._v(".")]),e._v(" "),o("li",[e._v("Copy the "),o("em",[o("strong",[e._v("OAuth Callback URL")])]),e._v(" provided in n8n and paste it here.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Save URLs")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Scroll down to the "),o("em",[o("strong",[e._v("Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("Add the required scopes under the "),o("em",[o("strong",[e._v("Bot Token Scopes")])]),e._v(" section. You can refer to the list of scopes on the "),o("a",{attrs:{href:"https://api.slack.com/scopes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scopes and permissions"),o("OutboundLink")],1),e._v(" documentation on Slack.")]),e._v(" "),o("li",[e._v("Click on the circle button in the OAuth section to connect a Slack account to n8n.")]),e._v(" "),o("li",[e._v("Click the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button to save your credentials in n8n.")]),e._v(" "),o("li",[e._v("Return to the Slack OAuth & Permissions page, scroll up to the "),o("em",[o("strong",[e._v("OAuth Tokens for Your Workspace")])]),e._v(" section and click on "),o("em",[o("strong",[e._v("Install to Workspace")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Allow")])]),e._v(" button.")])]),e._v(" "),o("h2",{attrs:{id:"using-access-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[e._v("#")]),e._v(" Using Access Token")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open the "),o("a",{attrs:{href:"https://api.slack.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack API"),o("OutboundLink")],1),e._v(" page.")])]),e._v(" "),o("li",[o("p",[e._v("Click on the "),o("em",[o("strong",[e._v("Create an app")])]),e._v(" button and select "),o("strong",[e._v("From scratch")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter an "),o("em",[o("strong",[e._v("App Name")])]),e._v(" in the corresponding field.")])]),e._v(" "),o("li",[o("p",[o("em",[o("strong",[e._v("Select a workspace")])]),e._v(" for your app from the dropdown list.")])]),e._v(" "),o("li",[o("p",[e._v("Click on the "),o("em",[o("strong",[e._v("Create App")])]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("em",[o("strong",[e._v("Add features and functionality")])]),e._v(" section select "),o("strong",[e._v("Permissions")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Scroll down to the "),o("em",[o("strong",[e._v("Scopes")])]),e._v(" section and:")]),e._v(" "),o("ul",[o("li",[e._v("If you want your app to act on behalf of users that authorize the app, add the required scopes under the "),o("em",[o("strong",[e._v("User Token Scopes")])]),e._v(" section.")]),e._v(" "),o("li",[e._v("If you're building a bot, add the required scopes under the "),o("em",[o("strong",[e._v("Bot Token Scopes")])]),e._v(" section.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Scopes")]),e._v(" "),o("p",[e._v("You can refer to the list of scopes on the officials Slack "),o("a",{attrs:{href:"https://api.slack.com/scopes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scopes and permissions"),o("OutboundLink")],1),e._v(" documentation.")])])]),e._v(" "),o("li",[o("p",[e._v("From the "),o("em",[o("strong",[e._v("OAuth Tokens for Your Workspace")])]),e._v(" section click on the "),o("em",[o("strong",[e._v("Install to Workspace")])]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("Click on the "),o("em",[o("strong",[e._v("Allow")])]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("In n8n, enter the "),o("em",[o("strong",[e._v("Access Token")])]),e._v(" created above.")])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("em",[o("strong",[e._v("Save")])]),e._v(" button to save your credentials in n8n.")])])]),e._v(" "),o("h2",{attrs:{id:"privacy-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#privacy-policy"}},[e._v("#")]),e._v(" Privacy policy")]),e._v(" "),o("p",[e._v("For details about how you data is collected and used, see the "),o("a",{attrs:{href:"https://n8n.io/legal/privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("n8n"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://slack.com/intl/en-de/trust/privacy/privacy-policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),o("OutboundLink")],1),e._v(" privacy policies.")])])}),[],!1,null,null,null);t.default=r.exports}}]);