(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1869:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"brandfetch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#brandfetch"}},[e._v("#")]),e._v(" Brandfetch")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.Brandfetch.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brandfetch"),n("OutboundLink")],1),e._v(" is a brand search engine that helps you find logos, colors, fonts, images, and more.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Brandfetch/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.Brandfetch"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to get the logo, icon, and information of a company and store it in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/835",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Brandfetch")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(834),alt:"A workflow with the Brandfetch node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-brandfetch-node-logo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-brandfetch-node-logo"}},[e._v("#")]),e._v(" 2. Brandfetch node (logo)")]),e._v(" "),n("p",[e._v("This node will fetch the URL of the logo and icon of n8n. If you want the logo and icon of a different company, enter the domain name of that company instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Brandfetch node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Brandfetch/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n.io")]),e._v(" in the "),n("em",[n("strong",[e._v("Domain")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node retrieves the URL of n8n's logo and icon.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(835),alt:"Using the Brandfetch node to retrieve the URL of the logo and icon of a comapny"}})]),e._v(" "),n("h3",{attrs:{id:"_3-brandfetch1-node-company"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-brandfetch1-node-company"}},[e._v("#")]),e._v(" 3. Brandfetch1 node (company)")]),e._v(" "),n("p",[e._v("This node will fetch company data about n8n.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Brandfetch node.")]),e._v(" "),n("li",[e._v("Select 'Company' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Domain")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Brandfetch > Parameters > domain. You can also add the following expression: "),n("code",[e._v('{{$node["Brandfetch"].parameter["domain"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns company data about n8n.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(836),alt:"Using the Brandfetch node to retrieve the company data"}})]),e._v(" "),n("h3",{attrs:{id:"_4-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-node"}},[e._v("#")]),e._v(" 4. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),n("code",[e._v("Name")]),e._v(", "),n("code",[e._v("Icon URL")]),e._v(", and "),n("code",[e._v("Logo URL")]),e._v("in this node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Brandfetch1 > Output Data > JSON > name. You can also add the following expression: "),n("code",[e._v('{{$node["Brandfetch1"].json["name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Icon URL")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Brandfetch > Output Data > JSON > icon > image. You can also add the following expression: "),n("code",[e._v('{{$node["Brandfetch"].json["icon"]["image"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Logo URL")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Brandfetch > Output Data > JSON > logo > image. You can also add the following expression: "),n("code",[e._v('{{$node["Brandfetch"].json["logo"]["image"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the value of "),n("code",[e._v("Name")]),e._v(", "),n("code",[e._v("Icon URL")]),e._v(", and "),n("code",[e._v("Logo URL")]),e._v(". This value is passed to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(837),alt:"Using the Set node to set data to be inserted by the Airtable node"}})]),e._v(" "),n("h3",{attrs:{id:"_5-airtable-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-airtable-node-append"}},[e._v("#")]),e._v(" 5. Airtable node (Append)")]),e._v(" "),n("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),n("a",{attrs:{href:"https://airtable.com/shrPVVaVZuHofrDVw",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Base ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),n("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),n("li",[e._v("Enter the name of your table in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(838),alt:"Using the Airtable node to insert data into an Airtable table"}})])],1)}),[],!1,null,null,null);t.default=a.exports},834:function(e,t,o){e.exports=o.p+"assets/img/workflow.70e8a203.png"},835:function(e,t,o){e.exports=o.p+"assets/img/Brandfetch_node.2abb24eb.png"},836:function(e,t,o){e.exports=o.p+"assets/img/Brandfetch1_node.cd614b36.png"},837:function(e,t,o){e.exports=o.p+"assets/img/Set_node.94450b1c.png"},838:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.8e6e9ccc.png"}}]);