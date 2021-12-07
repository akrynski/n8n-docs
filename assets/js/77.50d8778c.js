(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1813:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"http-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-request"}},[e._v("#")]),e._v(" HTTP Request")]),e._v(" "),r("p",[e._v("The HTTP Request node is one of the most versatile nodes in n8n. It allows you to make HTTP requests which can be used to query data from apps and services.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credential")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/HTTPRequest/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Authentication:")]),e._v(" Select the authentication method to use for the request from the following:\n"),r("ul",[r("li",[e._v("Basic Auth")]),e._v(" "),r("li",[e._v("Digest Auth")]),e._v(" "),r("li",[e._v("Header Auth")]),e._v(" "),r("li",[e._v("OAuth1")]),e._v(" "),r("li",[e._v("OAuth2")]),e._v(" "),r("li",[e._v("None")])])]),e._v(" "),r("li",[r("strong",[e._v("Request Method:")]),e._v(" Select the method to be used for the request:\n"),r("ul",[r("li",[e._v("DELETE")]),e._v(" "),r("li",[e._v("GET")]),e._v(" "),r("li",[e._v("HEAD")]),e._v(" "),r("li",[e._v("PATCH")]),e._v(" "),r("li",[e._v("POST")]),e._v(" "),r("li",[e._v("PUT")])])]),e._v(" "),r("li",[r("strong",[e._v("URL:")]),e._v(" This field is where the URL to request has to be entered.")]),e._v(" "),r("li",[r("strong",[e._v("Ignore SSL Issues:")]),e._v(" This option can be used to download the response even if SSL validation is not possible.")]),e._v(" "),r("li",[r("strong",[e._v("Response Format:")]),e._v(" Select the format in which the data gets returned from the URL. You can choose between File, JSON, and String.")]),e._v(" "),r("li",[r("strong",[e._v("JSON/RAW Parameters:")]),e._v(" This option can be used to specify whether the body/query parameter should be set via the value-key pair UI or JSON/RAW.")]),e._v(" "),r("li",[r("strong",[e._v("Options")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Batch Interval:")]),e._v(" The time (in milliseconds) between each batch of requests. Set to "),r("code",[e._v("0")]),e._v(" to disable.")]),e._v(" "),r("li",[r("strong",[e._v("Batch Size:")]),e._v(" If set, input will be split in batches to throttle requests. Use "),r("code",[e._v("-1")]),e._v(" to disable. "),r("code",[e._v("0")]),e._v(" will be treated as "),r("code",[e._v("1")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Full Response:")]),e._v(" This option can be used to retrieve the full response instead of only the body from the URL.")]),e._v(" "),r("li",[r("strong",[e._v("Follow Redirect:")]),e._v(" This option can be used to follow any redirections with a status code "),r("code",[e._v("3xx")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Ignore Response Code:")]),e._v(" This option can be used to let the node execute even when the HTTP status code is not 2xx.")]),e._v(" "),r("li",[r("strong",[e._v("Proxy:")]),e._v(" This field is used to specify an HTTP proxy that you may want to use.")]),e._v(" "),r("li",[r("strong",[e._v("Split Into Items:")]),e._v(" This option can be used to flatten the node output as a simple array. See the "),r("a",{attrs:{href:"#faqs"}},[e._v("FAQ")]),e._v(" section to learn more.")]),e._v(" "),r("li",[r("strong",[e._v("Timeout:")]),e._v(" The maximum time (in ms) to wait for a response header from the server before aborting the request.")]),e._v(" "),r("li",[r("strong",[e._v("Use Querystring:")]),e._v(" Set this option to "),r("code",[e._v("true")]),e._v(" if you need arrays to be serialized as "),r("code",[e._v("foo=bar&foo=baz")]),e._v(" instead of the default "),r("code",[e._v("foo[0]=bar&foo[1]=baz")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("Headers:")]),e._v(" This section is used to specify any optional HTTP request headers you may want to include with your request.")]),e._v(" "),r("li",[r("strong",[e._v("Query Parameters:")]),e._v(" This section is used to specify any HTTP query parameters you may want to include with your request.")])])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to GET a sample list of users from "),r("a",{attrs:{href:"https://reqres.in/",target:"_blank",rel:"noopener noreferrer"}},[e._v("reqres.in"),r("OutboundLink")],1),e._v(", add a new user using a POST request, and update the user using a PATCH request. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/602",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("HTTP Request")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(686),alt:"A workflow with the HTTP Request node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-http-request-node-get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),r("ol",[r("li",[e._v("Enter "),r("code",[e._v("https://reqres.in/api/users")]),e._v(" in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(687),alt:"Get a list of sample users using the HTTP Request node"}})]),e._v(" "),r("h3",{attrs:{id:"_3-http-request1-node-post"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request1-node-post"}},[e._v("#")]),e._v(" 3. HTTP Request1 node (POST)")]),e._v(" "),r("ol",[r("li",[e._v("Select 'POST' from the "),r("em",[r("strong",[e._v("Request Method")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("https://reqres.in/api/users")]),e._v(" in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Parameter")])]),e._v(" button in the "),r("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("name")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Neo")]),e._v(" in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Parameter")])]),e._v(" button in the "),r("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("job")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Programmer")]),e._v(" in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(688),alt:"Create a user using the HTTP Request node"}})]),e._v(" "),r("h3",{attrs:{id:"_4-http-request2-node-patch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-request2-node-patch"}},[e._v("#")]),e._v(" 4. HTTP Request2 node (PATCH)")]),e._v(" "),r("ol",[r("li",[e._v("Select 'PATCH' from the "),r("em",[r("strong",[e._v("Request Method")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("https://reqres.in/api/users/2")]),e._v(" in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Parameter")])]),e._v(" button in the "),r("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("name")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Neo")]),e._v(" in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Parameter")])]),e._v(" button in the "),r("em",[e._v("Body Parameters")]),e._v(" section.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("job")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("The Chosen One")]),e._v(" in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(689),alt:"Update a user using the HTTP Request node"}})]),e._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),r("h3",{attrs:{id:"how-to-fetch-a-binary-file-from-a-url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-fetch-a-binary-file-from-a-url"}},[e._v("#")]),e._v(" How to fetch a binary file from a URL?")]),e._v(" "),r("ol",[r("li",[e._v("Enter the URL of the file in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field. For example, you can enter "),r("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" to fetch the n8n logo.")]),e._v(" "),r("li",[e._v("Select 'File' from the "),r("em",[r("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("(Optional) Change the binary property value in the "),r("em",[r("strong",[e._v("Binary Property")])]),e._v(" field. Throughout the workflow, you can refer to the binary data with the value you set in this field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")]),e._v(" "),r("li",[e._v("After the node gets executed, click on the "),r("em",[r("strong",[e._v("Binary")])]),e._v(" tab.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Show Binary Data")])]),e._v(" button to view the file.")])]),e._v(" "),r("h3",{attrs:{id:"how-to-send-a-binary-file-to-an-api-endpoint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-a-binary-file-to-an-api-endpoint"}},[e._v("#")]),e._v(" How to send a binary file to an API endpoint?")]),e._v(" "),r("p",[e._v("Depending on your use-case, you might want to send a binary file to an API endpoint. To do that, follow the steps mentioned below.")]),e._v(" "),r("ol",[r("li",[e._v("Connect the HTTP Request node with a node that has previously fetched the binary file. This node can be an HTTP Request node, "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node, "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleDrive/"}},[e._v("Google Drive")]),e._v(" node or any such node.")],1),e._v(" "),r("li",[e._v("Select 'POST' from the "),r("em",[r("strong",[e._v("Request Method")])]),e._v(" dropdown list ("),r("strong",[e._v("Note:")]),e._v(" Refer to the API documentation of your API to make sure that you have selected the correct HTTP request method).")]),e._v(" "),r("li",[e._v("Enter the URL where you want to send the binary file in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("JSON/RAW Parameters")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Send Binary Data")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Option")])]),e._v(" and select 'Body Content Type' from the dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Form-Data Multipart' from the "),r("em",[r("strong",[e._v("Body Content Type")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("If you are referring to the binary property with a different value, enter that value in the "),r("em",[r("strong",[e._v("Binary Property")])]),e._v(" field (name displayed in the binary tab after executing the previous node).\n"),r("strong",[e._v("Note:")]),e._v(" To set a name for the form field, separate the field name with a colon, example "),r("code",[e._v("sendKey:binaryProperty")]),e._v(". If you want to send multiple files, separate them with comma, example: "),r("code",[e._v("sendKey1:binaryProperty1,sendKey2:binaryProperty2")])]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("Refer to this example "),r("a",{attrs:{href:"https://n8n.io/workflows/1338",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"how-to-get-the-http-status-code-after-an-execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-http-status-code-after-an-execution"}},[e._v("#")]),e._v(" How to get the HTTP status code after an execution?")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Option")])]),e._v(" and select 'Full Response'.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Full Response")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")])]),e._v(" "),r("p",[e._v("When the node gets executed, you will receive the HTTP status code, the HTTP status message, and the header parameters.")]),e._v(" "),r("h3",{attrs:{id:"how-to-send-xml-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-xml-data"}},[e._v("#")]),e._v(" How to send XML data?")]),e._v(" "),r("ol",[r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("JSON/RAW Parameters")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Option")])]),e._v(" and select 'Body Content Type'.")]),e._v(" "),r("li",[e._v("Select 'RAW/Custom' from the "),r("em",[r("strong",[e._v("Body Content Type")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the XML data in the "),r("em",[r("strong",[e._v("Body")])]),e._v(" field.")])]),e._v(" "),r("h3",{attrs:{id:"when-to-use-the-split-into-items-parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-the-split-into-items-parameter"}},[e._v("#")]),e._v(" When to use the Split Into Items parameter?")]),e._v(" "),r("p",[e._v("Not all incoming data you receive will be properly "),r("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#data-structure"}},[e._v("structured")]),e._v(" to allow nodes to "),r("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#data-flow"}},[e._v("process")]),e._v(" each individual item.")],1),e._v(" "),r("p",[e._v("Typically you would need to use "),r("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html"}},[e._v("JavaScript code")]),e._v(" inside the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")]),e._v(" node to "),r("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html#modify-data-structure"}},[e._v("modify the data structure")]),e._v(".")],1),e._v(" "),r("p",[e._v("The HTTP Request node allows you to do this automatically by enabling the Split Into Items parameter.")]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=n.exports},686:function(e,t,o){e.exports=o.p+"assets/img/workflow.7ef78ff9.png"},687:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.5b860ab9.png"},688:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest1_node.76efed8b.png"},689:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest2_node.365c73f3.png"}}]);