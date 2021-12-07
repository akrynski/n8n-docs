(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1898:function(e,t,a){"use strict";a.r(t);var o=a(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"emelia"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#emelia"}},[e._v("#")]),e._v(" Emelia")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://emelia.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emelia"),o("OutboundLink")],1),e._v(" is a cold-mailing tool.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Emelia/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("Resource",{attrs:{node:"n8n-nodes-base.emelia"}}),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create a campaign, add a contact, and get the campaign from Emelia. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/961",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("Emelia")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(913),alt:"A workflow with the Emelia node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-emelia-node-campaign-create"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-emelia-node-campaign-create"}},[e._v("#")]),e._v(" 2. Emelia node (campaign: create)")]),e._v(" "),o("p",[e._v("This node will create a new campaign in Emelia.")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the Emelia node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Emelia/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select 'Create' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter the campaign name in the "),o("em",[o("strong",[e._v("Campaign Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node creates a new campaign.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(914),alt:"Using the Emelia node to create a new campaign"}})]),e._v(" "),o("h3",{attrs:{id:"_3-emelia1-node-campaign-addcontact"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-emelia1-node-campaign-addcontact"}},[e._v("#")]),e._v(" 3. Emelia1 node (campaign: addContact)")]),e._v(" "),o("p",[e._v("This node will add a contact to the campaign that we created in the previous node.")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Add Contact' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select the campaign from the "),o("em",[o("strong",[e._v("Campaign ID")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter the contact's email address in the "),o("em",[o("strong",[e._v("Contact Email")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name'.")]),e._v(" "),o("li",[e._v("Enter the first name in the "),o("em",[o("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node adds the contact to the campaign that we created in the previous node.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(915),alt:"Using the Emelia node to add a contact to a campaign"}})]),e._v(" "),o("h3",{attrs:{id:"_4-emelia2-node-campaign-get"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-emelia2-node-campaign-get"}},[e._v("#")]),e._v(" 4. Emelia2 node (campaign: get)")]),e._v(" "),o("p",[e._v("This node will get the information about the campaign that we created earlier.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Get' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Campaign ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Emelia > Output Data > JSON > _id. You can also add the following expression: "),o("code",[e._v('{{$node["Emelia"].json["_id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node returns the information of the campaign.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(916),alt:"Using the Emelia node to return the information a campaign"}})])],1)}),[],!1,null,null,null);t.default=n.exports},913:function(e,t,a){e.exports=a.p+"assets/img/workflow.aaca8af3.png"},914:function(e,t,a){e.exports=a.p+"assets/img/Emelia_node.7a0be8a7.png"},915:function(e,t,a){e.exports=a.p+"assets/img/Emelia1_node.c18e80a4.png"},916:function(e,t,a){e.exports=a.p+"assets/img/Emelia2_node.48a8f027.png"}}]);