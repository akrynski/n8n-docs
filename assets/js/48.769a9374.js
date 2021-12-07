(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1893:function(e,o,t){"use strict";t.r(o);var r=t(26),s=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dropbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dropbox"}},[e._v("#")]),e._v(" Dropbox")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://dropbox.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropbox"),r("OutboundLink")],1),e._v(" is a cloud-based file storage and sharing service, accessible through multiple devices.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Dropbox/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.dropbox"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a folder in Dropbox, upload a file into that folder, and list the contents of the folder. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/615",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Dropbox")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(896),alt:"A workflow with the Dropbox node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-dropbox-node-create-folder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-dropbox-node-create-folder"}},[e._v("#")]),e._v(" 2. Dropbox node (create: folder)")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Dropbox node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Dropbox/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Folder' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the new folder in the "),r("em",[r("strong",[e._v("Folder")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:t(897),alt:"Create a folder in Dropbox using the Dropbox node"}})]),e._v(" "),r("h3",{attrs:{id:"_3-http-request-node-get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request-node-get"}},[e._v("#")]),e._v(" 3. HTTP Request node (GET)")]),e._v(" "),r("ol",[r("li",[e._v("Enter "),r("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select 'File' from the "),r("em",[r("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:t(898),alt:"Get a file to upload in Dropbox using the HTTP Request node"}})]),e._v(" "),r("h3",{attrs:{id:"_4-dropbox1-node-upload-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-dropbox1-node-upload-file"}},[e._v("#")]),e._v(" 4. Dropbox1 node (upload: file)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the Dropbox node.")]),e._v(" "),r("li",[e._v("Enter the path of the Dropbox folder you created in the previous steps along with a file name in the "),r("em",[r("strong",[e._v("File Path")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Set the "),r("em",[r("strong",[e._v("Binary Data")])]),e._v(" toggle to true.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:t(899),alt:"Upload a file in Dropbox using the Dropbox node"}})]),e._v(" "),r("h3",{attrs:{id:"_5-dropbox2-node-list-folder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-dropbox2-node-list-folder"}},[e._v("#")]),e._v(" 5. Dropbox2 node (list: folder)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the Dropbox node.")]),e._v(" "),r("li",[e._v("Select 'Folder' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'List' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the path of the Dropbox folder you created in the previous steps in the "),r("em",[r("strong",[e._v("Folder Path")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:t(900),alt:"List the contents of a Dropbox folder using the Dropbox node"}})])],1)}),[],!1,null,null,null);o.default=s.exports},896:function(e,o,t){e.exports=t.p+"assets/img/workflow.09e8ace7.png"},897:function(e,o,t){e.exports=t.p+"assets/img/Dropbox_node.b0c966c0.png"},898:function(e,o,t){e.exports=t.p+"assets/img/HTTPRequest_node.564b8efd.png"},899:function(e,o,t){e.exports=t.p+"assets/img/Dropbox1_node.df77f236.png"},900:function(e,o,t){e.exports=t.p+"assets/img/Dropbox2_node.5d2397a6.png"}}]);