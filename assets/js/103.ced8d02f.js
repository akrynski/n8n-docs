(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1053:function(e,t,o){e.exports=o.p+"assets/img/workflow.e37d293e.png"},1054:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.7c629e8e.png"},1055:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.5b2e691d.png"},1056:function(e,t,o){e.exports=o.p+"assets/img/Line_node.60ef8337.png"},1947:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"line"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#line"}},[e._v("#")]),e._v(" Line")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://line.me/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Line"),n("OutboundLink")],1),e._v(" is a mobile messenger app that allows you to make free voice calls and send messages.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Line/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.line"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to send daily weather updates via a notification using the Line node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/773",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Line")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1053),alt:"A workflow with the Line node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow daily at 9 AM.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Set hours to 9 in the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 9 AM.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1054),alt:"Using the Cron node to trigger the workflow daily at 9 am"}})]),e._v(" "),n("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),n("p",[e._v("This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("berlin")]),e._v(" in the "),n("em",[n("strong",[e._v("City")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1055),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),n("h3",{attrs:{id:"_3-line-node-send-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-line-node-send-notification"}},[e._v("#")]),e._v(" 3. Line node (send: notification)")]),e._v(" "),n("p",[e._v("This node will send a notification with the weather update.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Line node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Line/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"3"}},[n("li",[e._v("Enter the following message in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field: "),n("code",[e._v('Hey! The temperature outside is {{$node["OpenWeatherMap"].json["main"]["temp"]}}°C.')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends a notification with the weather update.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1056),alt:"Using the Line node to send weather updates via a notification"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);