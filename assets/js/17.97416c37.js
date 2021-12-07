(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1574:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"looping-in-n8n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looping-in-n8n"}},[e._v("#")]),e._v(" Looping in n8n")]),e._v(" "),n("p",[e._v("Looping enables you to repeatedly perform the same actions, stopping only after a set number of repetitions (e.g. fetch the 10 most recent items) or when a specific condition is met (e.g. no new items exist).")]),e._v(" "),n("p",[e._v("Looping is useful when you want to process multiple similar items, for example sending a message to every contact in your address book. In n8n this repetitive processing is handled automatically, meaning you do not need to specifically build loops into your workflows. There are some "),n("a",{attrs:{href:"#node-exceptions"}},[e._v("special cases")]),e._v(" where this isn’t true.")]),e._v(" "),n("h2",{attrs:{id:"using-loops-in-n8n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-loops-in-n8n"}},[e._v("#")]),e._v(" Using loops in n8n")]),e._v(" "),n("p",[e._v("n8n nodes take any number of items as input, process these items, and output the results. You can think of each item as a single data point (or a single row in the output table of a node).")]),e._v(" "),n("p",[e._v("The following image shows the output from the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/N8nTrainingCustomerDatastore/"}},[e._v("Customer Datastore")]),e._v(" node, where each row is an individual item.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(465),alt:"The Customer Datastore node"}})]),e._v(" "),n("p",[n("strong",[e._v("Nodes usually run once for each item")]),e._v(". For example, if you want to send the name and notes of the customers as a message on "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Slack/"}},[e._v("Slack")]),e._v(", connect the Slack node to the Customer Datastore node, configure the parameters, and execute the node. You will receive 5 messages — one for each item.")],1),e._v(" "),n("p",[e._v("This is how you can process multiple items without having to explicitly connect nodes in a loop.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),n("p",[e._v("Your data must be in the proper structure for n8n to process it as described here. See "),n("RouterLink",{attrs:{to:"/getting-started/key-concepts/transforming-data.html"}},[e._v("Transforming Data")]),e._v(" to learn more.")],1)]),e._v(" "),n("h3",{attrs:{id:"executing-nodes-once"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#executing-nodes-once"}},[e._v("#")]),e._v(" Executing nodes once")]),e._v(" "),n("p",[e._v("For situations where you do not want a node to process all received items, for example sending a Slack message only to the first customer, you can do so by toggling the "),n("strong",[e._v("Execute Once")]),e._v(" parameter in the "),n("em",[e._v("Settings")]),e._v(" tab of that node.")]),e._v(" "),n("p",[e._v("This setting is helpful when the incoming data contains multiple items and you want to only process the first one. Using the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/N8nTrainingCustomerDatastore/"}},[e._v("Customer Datastore")]),e._v(" and "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Slack/"}},[e._v("Slack")]),e._v(" example from above, it would look like the following:")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(466),alt:"Execute once enabled for the Slack node"}})]),e._v(" "),n("p",[e._v("You can see a message was sent only for the first customer - Jay Gatsby.")]),e._v(" "),n("h3",{attrs:{id:"executions-indicator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#executions-indicator"}},[e._v("#")]),e._v(" Executions indicator")]),e._v(" "),n("p",[e._v("When you execute a node a green number gets displayed on its icon. This number represents the number of times the node has executed, it "),n("strong",[e._v("doesn't")]),e._v(" represent the number of items returned by the node. Each execution may return multiple items.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(467),alt:"The executions indicator."}})]),e._v(" "),n("p",[e._v("If a node receives input from multiple nodes, it will execute separately for each set of input data. For example, if the above node has two input nodes, it will execute twice, once for each input as pictured below.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(468),alt:"Node taking inputs from two different nodes"}})]),e._v(" "),n("p",[n("strong",[e._v("Note")]),e._v(": The only exception to this is the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Merge/"}},[e._v("Merge")]),e._v(" node.")],1),e._v(" "),n("p",[e._v("In the above image, notice that the Customer Datastore node gets executed twice, once for each input. To view the output for each input node, select the execution from the "),n("strong",[e._v("Data of Execution")]),e._v(" dropdown list:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(469),alt:"Node output for inputs from two different nodes"}})]),e._v(" "),n("p",[e._v("When you have a loop in a workflow, the node gets executed multiple times. The number on the node will represent the total number of executions:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(470),alt:"Number of executions of a node in a loop"}})]),e._v(" "),n("h2",{attrs:{id:"creating-loops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-loops"}},[e._v("#")]),e._v(" Creating loops")]),e._v(" "),n("p",[e._v("As discussed above, n8n typically handles the iteration for all incoming items. However, there are certain scenarios where you will have to create a loop to iterate through all items. You can learn more about these "),n("a",{attrs:{href:"#node-exceptions"}},[e._v("here")]),e._v(".")]),e._v(" "),n("p",[e._v("To create a loop in an n8n workflow, connect the output of one node to the input of a previous node. Make sure you add an "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")]),e._v(" node to check when to stop the loop. You now have a loop that iterates over each item.")],1),e._v(" "),n("p",[e._v("Here is an "),n("a",{attrs:{href:"https://n8n.io/workflows/1130",target:"_blank",rel:"noopener noreferrer"}},[e._v("example workflow"),n("OutboundLink")],1),e._v(" that implements a loop with an "),n("code",[e._v("IF")]),e._v(" node:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(471),alt:"Editor UI view of sample workflow"}})]),e._v(" "),n("p",[e._v("You should use the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SplitInBatches/"}},[e._v("Split In Batches")]),e._v(" node when you want to batch the data in groups and process these batches. This approach is useful for avoiding API rate limits when processing large incoming data or when you only want to process a specific group of returned items.")],1),e._v(" "),n("p",[n("strong",[e._v("Note")]),e._v(": The Split In Batches node stops executing after all the incoming items get divided into batches and passed on to the next node in the workflow so it is not necessary to add an IF node to stop the loop.")]),e._v(" "),n("h2",{attrs:{id:"node-exceptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-exceptions"}},[e._v("#")]),e._v(" Node exceptions")]),e._v(" "),n("p",[e._v("There are a limited number of nodes and operations where you need to design a loop into your workflow:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[n("strong",[e._v("Airtable")])]),e._v(" node:\n"),n("ul",[n("li",[n("strong",[e._v("List")]),e._v(": This operation executes only once, not for each incoming item.")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Coda/"}},[n("strong",[e._v("Coda")])]),e._v(" node:\n"),n("ul",[n("li",[n("strong",[e._v("Get All")]),e._v(": For the Table and View resources, this operation executes only once.")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/crateDb/"}},[n("strong",[e._v("CrateDB")])]),e._v(" node will execute and iterate over all incoming items only for Postgres related functions (e.g. "),n("code",[e._v("pgInsert")]),e._v(", "),n("code",[e._v("pgUpdate")]),e._v(", "),n("code",[e._v("pqQuery")]),e._v(").")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ExecuteWorkflow/"}},[n("strong",[e._v("Execute Workflow")])]),e._v(" node executes only once by default.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[n("strong",[e._v("Function")])]),e._v(" node processes all the items based on the entered code snippet, but it gets executed only once. If you need to execute the Function node multiple times you have to create a loop using the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SplitInBatches/"}},[e._v("Split In Batches")]),e._v(" node.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleCloudFirestore/"}},[n("strong",[e._v("Google Cloud Firestore")])]),e._v(" node:\n"),n("ul",[n("li",[n("strong",[e._v("Get All")]),e._v(": For the Collection and Document resources, this operation executes only once.")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/httpRequest/"}},[n("strong",[e._v("HTTP Request")])]),e._v(" node: You must handle pagination yourself. If your API call returns paginated results you must create a loop to fetch one page at a time.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/microsoftSql/"}},[n("strong",[e._v("Microsoft SQL")])]),e._v(" node does not natively handle looping, so if you want the node to process all incoming items you must create a loop.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/postgres/"}},[n("strong",[e._v("Postgres")])]),e._v(" node will execute and iterate over all incoming items only for Postgres related functions (e.g. "),n("code",[e._v("pgInsert")]),e._v(", "),n("code",[e._v("pgUpdate")]),e._v(", "),n("code",[e._v("pqQuery")]),e._v(").")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/QuestDb/"}},[n("strong",[e._v("QuestDB")])]),e._v(" node will execute and iterate over all incoming items only for Postgres related functions (e.g. "),n("code",[e._v("pgInsert")]),e._v(", "),n("code",[e._v("pgUpdate")]),e._v(", "),n("code",[e._v("pqQuery")]),e._v(").")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/readBinaryFiles/"}},[n("strong",[e._v("Read Binary Files")])]),e._v(" node will fetch the files from the specified path only once. This node doesn’t execute multiple times based on the incoming data. However, if the path is referenced from the incoming data, the node will fetch the files for all the valid paths.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/redis/"}},[n("strong",[e._v("Redis")])]),e._v(" node:\n"),n("ul",[n("li",[n("strong",[e._v("Info")]),e._v(": This operation executes only once, regardless of the number of items in the incoming data.")])])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/RSSREAD/"}},[n("strong",[e._v("RSS")])]),e._v(" nodes executes only once regardless of the number of items in the incoming data.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SpreadsheetFile/"}},[n("strong",[e._v("Spreadsheet")])]),e._v(" node processes all the incoming data and creates a single file with all the incoming data. If you want to create individual files for each incoming item, you have to create a loop.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/TimescaleDb/"}},[n("strong",[e._v("TimescaleDB")])]),e._v(" node will execute and iterate over all incoming items only for Postgres related functions (e.g. "),n("code",[e._v("pgInsert")]),e._v(", "),n("code",[e._v("pgUpdate")]),e._v(", "),n("code",[e._v("pqQuery")]),e._v(").")],1)])])}),[],!1,null,null,null);t.default=s.exports},465:function(e,t,o){e.exports=o.p+"assets/img/customer_datastore_node.7b7875b0.png"},466:function(e,t,o){e.exports=o.p+"assets/img/execute_once.1ae9d376.png"},467:function(e,t,o){e.exports=o.p+"assets/img/executions_indicator.e03d9743.png"},468:function(e,t,o){e.exports=o.p+"assets/img/multiple_inputs.fd85791d.png"},469:function(e,t,o){e.exports=o.p+"assets/img/multiple_outputs.69b1e8d2.png"},470:function(e,t,o){e.exports=o.p+"assets/img/loop_executions.cc485bb9.png"},471:function(e,t,o){e.exports=o.p+"assets/img/example_workflow.c75c4470.png"}}]);