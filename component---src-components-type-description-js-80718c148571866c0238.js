(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(147),l=a(149),c=a(155),p=a(4),u=a.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.title;return 0===t.length?null:i.a.createElement(i.a.Fragment,null,"string"==typeof a?i.a.createElement("h2",null,a):a,i.a.createElement("ul",null,t.map(function(e,t){return i.a.createElement("li",{key:t},e)})))},t}(i.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.className,t=Object(l.getClassInheritance)(e);return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Property"),i.a.createElement("th",null,"Expected Type"),i.a.createElement("th",null,"Description"))),t.reverse().map(function(e){return i.a.createElement(f,{classData:e,key:e.id})}))},t}(i.a.Component);d.propTypes={className:u.a.string.isRequired};var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classData,t=e.id,a=e.properties,n=void 0===a?[]:a;return 0===n.length?null:i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"3"},"Properties of ",i.a.createElement(c.a,{to:t}))),n.map(function(e,t){var a=Object(l.findPropertyData)(e)||{},n=a.url,r=void 0===n?e:n,s=a.rangeIncludes,o=void 0===s?["TODO"]:s,p=a.comment,u=void 0===p?"TODO":p;return i.a.createElement("tr",{key:t},i.a.createElement("th",null,i.a.createElement(c.a,{to:r})),i.a.createElement("td",null,o.join(" or ")),i.a.createElement("td",null,u))}))},t}(i.a.Component);f.propTypes={classData:u.a.string.isRequired};var h=d,y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.className;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{className:e}),i.a.createElement(m,{title:"More Specific Types"},Object(l.getSuperClasses)(e).map(function(e){var t=e.id;return i.a.createElement(c.a,{to:t})})))},t}(i.a.Component);y.propTypes={name:u.a.string.isRequired};var g=y,b=(a(75),a(76),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.propName,t=Object(l.getClassDescriptions)().filter(function(t){var a=t.properties;return(void 0===a?[]:a).includes(e)}),a=Object(l.findPropertyData)(e).rangeIncludes,n=void 0===a?[]:a;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{title:"Expected Types"},n.map(function(e){return i.a.createElement(c.a,{to:e})})),i.a.createElement(m,{title:"Property of Class"},t.map(function(e,t){var a=e.id;return i.a.createElement(c.a,{to:a})})))},t}(i.a.Component)),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext;if(!e)throw new Error("Unknown type "+this.props.title);var t=e.label,a=e.id,n=e.comment,r=e.type,s=Object(l.getClassInheritance)(a),p="https://axrl.org/"+a,u="Class"===r?i.a.createElement(g,{className:a}):i.a.createElement(b,{propName:a});return i.a.createElement(o.a,{title:a},i.a.createElement("h1",null,t||a),i.a.createElement("p",null,"Canonical URL: ",i.a.createElement("a",{href:p},p)),i.a.createElement("p",null,s.map(function(e,t){var a=e.id;return i.a.createElement("span",{key:t},0===t?"":" > ",i.a.createElement(c.a,{to:a}))})),i.a.createElement("p",null,n),u,this.props.children)},t}(i.a.Component);t.default=C},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(144),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(146),p=a.n(c);a.d(t,"PageRenderer",function(){return p.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},147:function(e,t,a){"use strict";var n=a(150),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(145),c=function(e){var t=e.siteTitle;return s.a.createElement("header",null,s.a.createElement("div",{className:"layoutSize"},s.a.createElement(l.Link,{to:"/",className:"brand"},t)),s.a.createElement("nav",{className:"mainNav"},s.a.createElement("ul",{className:"layoutSize"},s.a.createElement("li",null,s.a.createElement(l.Link,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(l.Link,{to:"/docs/examples"},"Examples")),s.a.createElement("li",null,s.a.createElement(l.Link,{to:"/docs/schema"},"Schema")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/dequelabs/axrl/issues"},"Give feedback")))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var p=c,u=a(148),m=(a(153),a(154),function(e){var t=e.children,a=e.title,r=e.pageContext,i=void 0===r?{}:r;return s.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{title:a||i.title}),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,t))},data:n})});m.propTypes={children:o.a.node.isRequired,title:o.a.string.isRequired};t.a=m},148:function(e,t,a){"use strict";var n=a(152),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(156),c=a.n(l),p=a(145);function u(e){var t=e.description,a=e.lang,r=e.title;return s.a.createElement(p.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n}]})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,title:o.a.string.isRequired},t.a=u;var m="763876243"},149:function(e,t,a){a(74),a(32),a(73);var n=a(157),r=a(158),s=a(159);function i(e){return n["@graph"].find(function(t){return t.id===e})}function o(e){return r["@graph"].find(function(t){return t.id===e})}function l(){return[].concat(r["@graph"])}function c(){return[].concat(n["@graph"])}function p(){return Object.assign({},s)}e.exports={findClassData:i,findPropertyData:o,findTypeData:function(e){return i(e)||o(e)},getClassInheritance:function e(t){var a=i(t);return a?e(a.subClassOf).concat(a):[]},getSuperClasses:function(e){return n["@graph"].filter(function(t){return t.subClassOf===e})},getClassDescriptions:c,getPropertyDescriptions:l,getTypeDescriptions:function(){return[].concat(l(),c())},getClassHierarchy:function e(t){return c().filter(function(e){return e.subClassOf===t}).map(function(t){return Object.assign({subclasses:e(t.id)},t)})},getContext:p,getUrl:function(e){var t=e.split(":"),a=t[0],n=t[1];if(!n)return"/"+e;var r=p()[a];if(!r)throw new Error("Unknown namespace '"+a+"' in context.json");return r+n}}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language"}}}}},151:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language",description:"A data format for ICT accessibility testing",author:"Wilco Fiers"}}}}},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(145),l=a(149),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.to,t=Object(l.findTypeData)(e);if(!t)return i.a.createElement("a",null,e);var a=Object(l.getUrl)(e),n=t.label||t.id;return"http"===a.substr(0,4)?i.a.createElement("a",{href:a,target:"_blank"},n):i.a.createElement(o.Link,{to:a},n)},t}(i.a.Component);t.a=c},157:function(e){e.exports={"@graph":[{id:"StateTest",type:"Class",comment:"A single test of an generic interface in a particular state.",properties:["result","subject","state","scope","testset","timestamp","environment","testEngine","engineOptions","testRunner"]},{id:"TestSubject",type:"Class",comment:"A generic interface that tests can be performed on"},{id:"web/HTMLPage",type:"Class",subClassOf:"TestSubject",label:"HTMLPage (web)",comment:"An HTML page that tests can be performed on",properties:["crawlerDepth"]},{id:"ios/UIViewController",type:"Class",subClassOf:"TestSubject",label:"UIViewController (iOS)",comment:"TODO"},{id:"android/Layout",type:"Class",subClassOf:"TestSubject",label:"Layout (Android)",comment:"TODO"},{id:"TestResult",type:"Class",comment:"The result of a test.",properties:["description","summary","helpUrl","requiredBy","taxonomy"]},{id:"TestSuccess",type:"Class",comment:"The result of successful a test.",subClassOf:"TestResult",properties:["target","relatedTargets"]},{id:"TestInapplicable",type:"Class",comment:"The result of an inapplicable test.",subClassOf:"TestResult",properties:["target","relatedTargets"]},{id:"TestFailure",type:"Class",comment:"The result of failed a test.",subClassOf:"TestResult",properties:["target","relatedTargets","impact","remediation"]},{id:"TestAbort",type:"Class",comment:"The result of a test that was not completed.",subClassOf:"TestResult",properties:["target","relatedTargets"]},{id:"ImpactType",type:"Class",comment:"An issue hinders the use of an interface to some degree"},{id:"Critical",type:"Class",subClassOf:"ImpactType",comment:"An issue that stops users from accessing information or functionality"},{id:"Serious",type:"Class",subClassOf:"ImpactType",comment:"An issue that can make functionality difficult to use, or content difficult to understand"},{id:"Moderate",type:"Class",subClassOf:"ImpactType",comment:"An issue that can make functionality frustrating to use"},{id:"Minor",type:"Class",subClassOf:"ImpactType",comment:"An issue that has little to no impact on users"},{id:"TestTarget",type:"Class",comment:'A generic "part" of an interface, such as an element, node, view or component',properties:["semanticRole","accessibleName"]},{id:"web/DOMNode",type:"Class",subClassOf:"TestTarget",label:"DOMNode (web)",comment:"A description of a node in the DOM",properties:["codeSnippet","web/selector"]},{id:"ios/UIView",type:"Class",subClassOf:"TestTarget",label:"UIView (iOS)",comment:"TODO",properties:["todo"]},{id:"android/View",type:"Class",subClassOf:"TestTarget",label:"View (Android)",comment:"TODO",properties:["todo"]},{id:"Remediation",type:"Class",comment:"Fix any of the solutions to resolve the failure",properties:["solutions"]},{id:"RemediationAll",type:"Class",subClassOf:"Remediation",comment:"Fix all of the solutions to resolve the failure"},{id:"TestScope",type:"Class",comment:"A generalised description of one or more areas in a user interface"},{id:"web/PageScope",type:"Class",label:"PageScope (web)",subClassOf:"TestScope",comment:"Describe which elements are included, and which are excluded from the test of an HTML page",properties:["included","excluded"]},{id:"ptr:pointerClass",type:"Class",label:"Pointer (W3C, Pointers-in-RDF)",comment:"A method that could be used to point out different parts of electronic documents or applications."},{id:"web/Selector",type:"Class",label:"Selector (web)",subClassOf:"ptr:pointerClass",comment:"A CSS Selector of a DOM node, a list of CSS selectors, of iframes ending at a DOM node, or a list of lists of CSS selectors of shadow DOM roots nodes in iframes, ending at a DOM node."},{id:"TestEnvironment",type:"Class",comment:"A generalised description of the setup for a test environment"},{id:"web/BrowserSetup",type:"Class",label:"BrowserSetup (web)",subClassOf:"TestEnvironment",comment:"A description of the browser setup",properties:["browserName","browserVersion","windowWidth","windowHeight"]},{id:"Software",type:"Class",comment:"A generic piece of executable code, such as an app, a web page, a command line tool, etc.",properties:["name","description","homepage","created","release"]},{id:"TestEngine",type:"Class",comment:"Software that identifies accessibility issues, automatically or for user review",subClassOf:"Software"},{id:"TestRunner",type:"Class",comment:"A program that initiates a test engine and reports on its results",subClassOf:"Software"},{id:"Application",type:"Class",subClassOf:"Software",comment:"Some program, or set of programs that has an interface which can be tested for accessibility."},{id:"Options",type:"Class",comment:"A generic configuration used by a TestEngine"},{id:"web/WebSite",type:"Class",subClassOf:"Application",label:"WebSite (web)",comment:"A WebSite is a set of related web pages and other items typically served from a single web domain and available via URLs."},{id:"ios/UIApplication",type:"Class",subClassOf:"Application",label:"UIApplication (iOS)",comment:"TODO",properties:["todo"]},{id:"ScreenShot",type:"Class",comment:"A graphic of a user interface, at the state of testing"},{id:"SubresourceIntegrity",type:"Class",comment:"A base64-encoded cryptographic of the a file, at the state of testing"},{id:"schema:Date",type:"Class",label:"Date (schema.org)",comment:"A date value in ISO 8601 date format"},{id:"schema:Text",type:"Class",label:"Text (schema.org)",comment:"A text data type"},{id:"schema:URL",type:"Class",label:"URL (schema.org)",subClassOf:"schema:Text",comment:"A text expressing a URL"}]}},158:function(e){e.exports={"@graph":[{id:"description","@type":"Property",comment:"Description of the (part of the) requirement that was tested",rangeIncludes:["schema:Text"]},{id:"summary","@type":"Property",comment:"shortened variation of the description",rangeIncludes:["schema:Text"]},{id:"helpUrl","@type":"Property",comment:"URL where more information about the requirement can be found",rangeIncludes:["schema:URL"]},{id:"impact","@type":"Property",comment:"Impact of the test result on users: minor, moderate, serious, critical. Impact must only be set if the outcome is failed.",rangeIncludes:["ImpactType"]},{id:"target","@type":"Property",comment:"Definition of the node, view, component or other item in an interface that was tested.",rangeIncludes:["TestTarget","ptr:pointerClass"]},{id:"relatedTargets","@type":"Property",comment:"An item in an interface that along with the tested target lead to the test result",rangeIncludes:["TestTarget","ptr:pointerClass"]},{id:"remediation","@type":"Property",comment:"A description of one or more solutions to remediate an issue",rangeIncludes:["Remediation","schema:Text"]},{id:"solutions","@type":"Property",comment:"One or more changes that remediate an issue",rangeIncludes:["schema:Text"]},{id:"scope","@type":"Property",comment:"What part(s) of the test subject were tested",rangeIncludes:["ptr:pointerClass","TestScope"]},{id:"name","@type":"Property",comment:"Human readable name of the software",rangeIncludes:["schema:Text"]},{id:"description","@type":"Property",comment:"Human readable description of the software",rangeIncludes:["schema:Text"]},{id:"homepage","@type":"Property",comment:"Homepage for the software",rangeIncludes:["schema:URL"]},{id:"created","@type":"Property",comment:"Date when the software was created or released, in YYYY-MM-DD form. e.g. 2004-04-05",rangeIncludes:["schema:Date"]},{id:"release","@type":"Property",comment:"Version information about the software release",rangeIncludes:["schema:Text"]},{id:"engineOptions","@type":"Property",comment:"Options used to run the test engine",rangeIncludes:["Options"]}]}},159:function(e){e.exports={"@base":"http://schema.org/",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",xsd:"http://www.w3.org/2001/XMLSchema#",ptr:"https://www.w3.org/TR/Pointers-in-RDF/#",earl:"https://www.w3.org/TR/EARL10-Schema/#",schema:"http://schema.org/",comment:"rdfs:comment",subClassOf:{"@id":"rdfs:subClassOf","@type":"@id"},rangeIncludes:{"@id":"rdfs:rangeIncludes","@type":"@id"},Class:"rdf:Class",properties:{"@reverse":"schema:domainIncludes","@type":"@id"},id:"@id",type:"@type"}}}]);
//# sourceMappingURL=component---src-components-type-description-js-80718c148571866c0238.js.map