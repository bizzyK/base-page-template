"use strict";(self.webpackChunkbase_page_template=self.webpackChunkbase_page_template||[]).push([[45],{"./stories/Announcements.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Announcements_stories});var react=__webpack_require__("./node_modules/react/index.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardMedia=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),dist=__webpack_require__("./node_modules/react-material-ui-carousel/dist/index.js"),dist_default=__webpack_require__.n(dist),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js");const CustomIndicator=({length,activeIndex,onClick})=>react.createElement(Box.A,{sx:{display:"flex",justifyContent:"center",mt:2}},Array.from({length}).map(((_,index)=>react.createElement(Button.A,{key:index,onClick:()=>onClick(index),sx:{backgroundColor:activeIndex===index?"#e74c3c":"#fff",color:activeIndex===index?"#fff":"#000",borderRadius:"50%",width:"30px",height:"30px",minWidth:"30px",margin:"0 5px",padding:"0"}},index+1)))),customindicator=CustomIndicator;CustomIndicator.__docgenInfo={description:"",methods:[],displayName:"CustomIndicator",props:{length:{required:!0,tsType:{name:"number"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Item=({item})=>react.createElement(Card.A,{sx:{position:"relative",backgroundColor:"#333"}},react.createElement(CardMedia.A,{component:"img",height:"400",image:item.image,alt:item.description}),react.createElement(CardContent.A,{sx:{position:"absolute",bottom:0,left:0,width:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",textAlign:"left",padding:"10px",transition:"opacity 0.3s"}},react.createElement(Typography.A,{variant:"h6"},item.title),react.createElement(Typography.A,{variant:"body2"},item.description))),Announcements=({data})=>{const[activeIndex,setActiveIndex]=(0,react.useState)(0);return react.createElement(Box.A,{sx:{padding:"20px"}},react.createElement(Typography.A,{variant:"h6",sx:{color:"#e9542f",fontWeight:"bold",fontSize:"28px",textAlign:"left",marginBottom:"20px"}},"Announcements"),react.createElement(dist_default(),{animation:"slide",indicators:!1,navButtonsAlwaysVisible:!0,index:activeIndex,onChange:(now,previous)=>{"number"!=typeof now||isNaN(now)||setActiveIndex(now)},sx:{maxWidth:"50%",flexGrow:1,margin:"auto"}},data.announcements.map(((item,i)=>react.createElement(Item,{key:i,item})))),react.createElement(customindicator,{length:data.announcements.length,activeIndex,onClick:index=>{setActiveIndex(index)}}))},announcements=Announcements;Announcements.__docgenInfo={description:"",methods:[],displayName:"Announcements",props:{data:{required:!0,tsType:{name:"AnnouncementsData"},description:""}}};const Announcements_stories={title:"Components/Announcements",component:announcements},Default=(args=>react.createElement(announcements,args)).bind({});Default.args={data:{announcements:[{image:"https://via.placeholder.com/400",title:"Announcement 1",description:"This is the first announcement."},{image:"https://via.placeholder.com/400",title:"Announcement 2",description:"This is the second announcement."}]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Announcements {...args} />",...Default.parameters?.docs?.source}}}}}]);