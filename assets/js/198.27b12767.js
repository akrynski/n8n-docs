(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1630:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dropbox"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropbox"}},[e._v("#")]),e._v(" Dropbox")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with Dropbox.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Dropbox/"}},[e._v("Dropbox")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://www.dropbox.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("⛅️ Note for n8n.cloud users")]),e._v(" "),n("p",[e._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your Dropbox account to n8n.")])]),e._v(" "),n("ol",[n("li",[e._v("Access the "),n("a",{attrs:{href:"https://www.dropbox.com/developers/apps/create",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox app creation"),n("OutboundLink")],1),e._v(" page.")]),e._v(" "),n("li",[e._v("Select 'Scoped access' under the "),n("em",[n("strong",[e._v("Choose an API")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Select an access type under the "),n("em",[n("strong",[e._v("Choose the type of access you need")])]),e._v(". You can read more about the access type "),n("a",{attrs:{href:"https://www.dropbox.com/developers/reference/developer-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Name your app")])]),e._v(" section, enter a name for your app.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Create app")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Permissions")])]),e._v(" tab and give all the permissions under the "),n("em",[n("strong",[e._v("Files and folders")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Submit")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Settings")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Copy your OAuth Callback URL from the 'Create New Credentials' screen in n8n and paste in the "),n("em",[n("strong",[e._v("Redirect URIs")])]),e._v(" field under the "),n("em",[n("strong",[e._v("OAuth 2")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter the provided "),n("em",[n("strong",[e._v("App key")])]),e._v(" and the "),n("em",[n("strong",[e._v("App secret")])]),e._v(" in the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" and "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(" field, respectively, in your Dropbox OAuth2 API credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the circle button in the OAuth section to connect your Dropbox account to n8n.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(532),alt:"Getting Dropbox credentials"}})]),e._v(" "),n("h2",{attrs:{id:"using-access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[e._v("#")]),e._v(" Using Access Token")]),e._v(" "),n("ol",[n("li",[e._v("Access the "),n("a",{attrs:{href:"https://www.dropbox.com/developers/apps/create",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox app creation"),n("OutboundLink")],1),e._v(" page.")]),e._v(" "),n("li",[e._v("Select 'Scoped access' under the "),n("em",[n("strong",[e._v("Choose an API")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Select an access type under the "),n("em",[n("strong",[e._v("Choose the type of access you need")])]),e._v(". You can read more about the access type "),n("a",{attrs:{href:"https://www.dropbox.com/developers/reference/developer-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Name your app")])]),e._v(" section, enter a name for your app.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Create app")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Permissions")])]),e._v(" tab and give all the permissions under the "),n("em",[n("strong",[e._v("Files and folders")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Submit")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Settings")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Scroll down to the "),n("em",[n("strong",[e._v("OAuth 2")])]),e._v(" section and select 'No expiration' from the "),n("em",[n("strong",[e._v("Access token expiration")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Generate")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Use the displayed "),n("em",[n("strong",[e._v("Generated access token")])]),e._v(" with your Dropbox credentials in n8n.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(533),alt:"Getting Dropbox credentials"}})])])}),[],!1,null,null,null);t.default=r.exports},532:function(e,t,o){e.exports=o.p+"assets/img/using-oauth.3c6d91c2.gif"},533:function(e,t,o){e.exports=o.p+"assets/img/using-access-token.dc007ccc.gif"}}]);