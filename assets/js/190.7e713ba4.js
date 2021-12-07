(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1551:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_4-setting-values-for-processing-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-setting-values-for-processing-orders"}},[e._v("#")]),e._v(" 4. Setting Values for Processing Orders")]),e._v(" "),a("p",[e._v("In this step of the workflow you will learn how to select and set data before transferring it to Airtable using the "),a("em",[e._v("Set")]),e._v(" node.")]),e._v(" "),a("p",[e._v("The next step in Nathan’s workflow is to insert the "),a("em",[e._v("employeeName")]),e._v(" and "),a("em",[e._v("orderId")]),e._v(" of all "),a("em",[e._v("processing")]),e._v(" orders into Airtable.")]),e._v(" "),a("p",[e._v("For this, you need to use the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[a("strong",[e._v("Set node")])]),e._v(", which allows you to select and set the data you want to be transferred from one app/service to another.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📖 Set node")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Set")]),e._v(" node can set completely new data as well as overwrite data that already exists. This node is crucial in workflows which expect incoming data from previous nodes, such as when inserting values into spreadsheets or databases.")])]),e._v(" "),a("p",[e._v("In your workflow, add a new "),a("em",[e._v("Set")]),e._v(" node between the "),a("em",[e._v("IF")]),e._v(" node and the "),a("em",[e._v("Airtable")]),e._v(" node. In the Set node window you need to toggle "),a("em",[e._v("Keep Only Set")]),e._v(" to true and then add two values:")]),e._v(" "),a("div",{pre:!0},[a("ul",[a("li",[a("em",[e._v("Add Value > Number:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Name:")]),e._v(" orderId")]),e._v(" "),a("li",[a("em",[e._v("Value:")]),e._v(" "),a("code",[e._v('{{$json["orderID"]}}')]),e._v(" "),a("em",[e._v("Current Node > Input Data > JSON > orderID")])])])]),e._v(" "),a("li",[a("em",[e._v("Add Value > String:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Name:")]),e._v(" employeeName")]),e._v(" "),a("li",[a("em",[e._v("Value:")]),e._v(" "),a("code",[e._v('{{$json["employeeName"]}}')]),e._v(" "),a("em",[e._v("Current Node > Input Data > JSON > employeeName")])])])])])]),a("p",[e._v("After setting the two values click on "),a("em",[e._v("Execute Node")]),e._v(" and you should see the following results:")]),e._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:o(422),alt:"Set node"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[e._v("Set node")])])]),e._v(" "),a("p",[e._v("Next, we need to insert these values into Airtable. Go to your Airtable account and add a new table called "),a("em",[e._v("processingOrders")]),e._v(" with two columns, "),a("em",[e._v("orderId")]),e._v(" and "),a("em",[e._v("employeeName")]),e._v(", just like you learned in the lesson "),a("RouterLink",{attrs:{to:"/courses/level-one/chapter-5/chapter-5.2.html"}},[e._v("Inserting data into Airtable")]),e._v(".")],1),e._v(" "),a("p",[e._v("Remember to update the Airtable node configuration to point to this new table.")]),e._v(" "),a("p",[e._v("Once that’s done, execute the "),a("em",[e._v("Airtable")]),e._v(" node in the workflow and you should see the records inserted in the table.")]),e._v(" "),a("p",[e._v("At this stage, it looks like this:")]),e._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:o(423),alt:"Workflow with the Set node"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[e._v("Workflow with the Set node")])])]),e._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),a("p",[a("strong",[e._v("Nathan 🙋")]),e._v(": You've already automated half of my work! Now I still need to calculate the booked orders for my colleagues. Can that be automated as well?")]),e._v(" "),a("p",[a("strong",[e._v("You 👩‍🔧")]),e._v(": Of course! In the next step, I'll use some JavaScript code in a node to calculate the booked orders.")])])}),[],!1,null,null,null);t.default=s.exports},422:function(e,t,o){e.exports=o.p+"assets/img/Set-node.673ad62c.png"},423:function(e,t,o){e.exports=o.p+"assets/img/Workflow-with-set-node.afe41992.png"}}]);