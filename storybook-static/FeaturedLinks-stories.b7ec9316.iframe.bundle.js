"use strict";(self.webpackChunkbase_page_template=self.webpackChunkbase_page_template||[]).push([[476],{"./stories/FeaturedLinks.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FeaturedLinks_stories});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js");const containerStyles={height:"102px",alignSelf:"stretch",flexGrow:0,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",padding:0},chip={height:"48px",width:"160px",color:"white",gap:"8px",marginRight:"12px",backgroundColor:"#526474",flexGrow:0,fontSize:"12px","&:hover":{backgroundColor:"#0a1d2b"},"&:focus":{backgroundColor:"#526474"}},title={fontFamily:"Libre Franklin, sans-serif",color:"#526474",fontSize:"25px",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",lineHeight:"normal",letterSpacing:"normal",textAlign:"left"},FeaturedLinks=({data})=>react.createElement(Box.A,{sx:containerStyles},react.createElement(Typography.A,{variant:"h6",sx:title},"Featured Links"),react.createElement(Grid.Ay,{container:!0,sx:{marginTop:"24px",justifyContent:"center"}},data.links.map(((link,index)=>react.createElement(Chip.A,{label:link.name,component:"a",href:link.url,clickable:!0,sx:chip,key:index}))))),featuredlinks=FeaturedLinks;FeaturedLinks.__docgenInfo={description:"",methods:[],displayName:"FeaturedLinks",props:{data:{required:!0,tsType:{name:"FeaturedLinksData"},description:""}}};const FeaturedLinks_stories={title:"Components/FeaturedLinks",component:featuredlinks},Default=(args=>react.createElement(featuredlinks,args)).bind({});Default.args={data:{links:[{url:"https://example.com",title:"Link 1",description:"This is the first link."},{url:"https://example.com",title:"Link 2",description:"This is the second link."}]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <FeaturedLinks {...args} />",...Default.parameters?.docs?.source}}}}}]);