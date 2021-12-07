(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1649:function(e,t,n){"use strict";n.r(t);var i=n(26),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with GitHub.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GitHub/"}},[e._v("GitHub")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/GitHubTrigger/"}},[e._v("GitHub Trigger")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("⛅️ Note for n8n.cloud users")]),e._v(" "),n("p",[e._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your GitHub account to n8n.")])]),e._v(" "),n("ol",[n("li",[e._v("Open your GitHub "),n("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on your user icon in the top right.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Settings")])]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Developer settings")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select "),n("em",[n("strong",[e._v("OAuth Apps")])]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Register a new application")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter the "),n("em",[n("strong",[e._v("Application name")])]),e._v(" and "),n("em",[n("strong",[e._v("Homepage URL")])]),e._v(".")]),e._v(" "),n("li",[e._v("Copy the "),n("em",[n("strong",[e._v("OAuth Callback URL")])]),e._v(" from n8n and paste it in the "),n("em",[n("strong",[e._v("Authorization callback URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Register application")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Copy the displayed 'Client ID'.")]),e._v(" "),n("li",[e._v("Enter the name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Github OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the client ID in the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" field in the 'Github OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("On your application page, click on the "),n("em",[n("strong",[e._v("Generate a new client secret")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Copy the displayed 'Client Secret'.")]),e._v(" "),n("li",[e._v("Paste the client secret in the "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(" field in the 'Github OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the circle button in the OAuth section to connect a GitHub account to n8n.")]),e._v(" "),n("li",[e._v("Click the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials in n8n.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/O1kEes6mQcs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("p",[e._v("The following video demonstrates the steps to authenticate the GitHub node on "),n("a",{attrs:{href:"https://n8n.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("n8n.cloud"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/WtjRxIVVCIg",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"using-access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[e._v("#")]),e._v(" Using Access Token")]),e._v(" "),n("ol",[n("li",[e._v("Open your GitHub "),n("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on your user icon in the top right.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Settings")])]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Developer settings")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select "),n("em",[n("strong",[e._v("Personal access tokens")])]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Generate new token")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter a note in the "),n("em",[n("strong",[e._v("Note")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the relevant scopes from the "),n("em",[n("strong",[e._v("Select scopes")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Scroll down to the bottom and click on the "),n("em",[n("strong",[e._v("Generate token")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Copy the displayed 'Personal access token'.")]),e._v(" "),n("li",[e._v("Enter the name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Github API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Enter your GitHub username in the "),n("em",[n("strong",[e._v("User")])]),e._v(" field in the 'Github API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the access token in the "),n("em",[n("strong",[e._v("Access Token")])]),e._v(" field in the 'Github API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click the "),n("em",[n("strong",[e._v("Create")])]),e._v(" button to save your credentials in n8n.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/zookYdMldt4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);