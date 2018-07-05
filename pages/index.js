import React from 'react';
import withRedux from 'next-redux-wrapper';
import 'isomorphic-unfetch';

import {
	connect
} from 'react-redux';

import {Menu} from 'antd';

// const {
// 	Header,
// 	Footer,
// 	Sider,
// 	Content
// } = Layout;

// import {
// 	bindActionCreators
// } from 'redux';

// import Head from 'next/head'; // 引入内置组件
// import Link from 'next/link';
// import {
// 	css
// } from 'glamor';

// import {
// 	withRouter
// } from 'next/router';

// const cookieParser = require("cookie-parser");



// const AAA = css({
// 	color: 'yellow',
// 	':hover': {
// 		color: 'blue'
// 	},
// 	'@media (max-width: 500px)': {
// 		color: 'rebeccapurple'
// 	}
// });

// class Index extends React.Component {
	

// 	constructor(props) {
// 		super(props);
// 	}

// 	componentDidMount() {

// 		notification['success']({
// 			message: 'SSR 秒开(有数据变化的)',
// 			description: '用户刷新无感知性能体验',
// 		});

// 	}


// 	render() {



// 		return (
// 			<div>
// 			    <Head>
// 					<title>变化的数据</title>
// 					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
// 					<link rel="stylesheet" href="/static/antd.css" />
// 					<link rel="stylesheet" href="/static/demo.css" />
// 				</Head>
// 				<Layout>
// 					<Header style={{color:"white"}}>
// 					<div className="logo" >SSR demo</div>
// 				      <Menu
// 				        theme="dark"
// 				        mode="horizontal"
// 				        selectedKeys={['1']}
// 				        style={{ lineHeight: '64px' }}
// 				      >
// 				        <Menu.Item key="1">变化的数据</Menu.Item>
// 				        <Menu.Item key="2"><Link href='/about'><a>不变化的数据</a></Link></Menu.Item>
// 				      </Menu>


// 					</Header>

// 					<Content>

// 						<div style={{ background: '#ECECEC', padding: '30px' }}>
// 						    <Card title="小洪（高级前端架构师）" bordered={false}>
// 								aaa
// 		  					</Card>
// 	  					</div>
// 						<div className={AAA}>

// 			hello
// 			</div>


// 					</Content>
// 					<Footer>Footer</Footer>

// 				</Layout>
// 				    <style jsx={"true"}>{`
//     	.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected, .ant-menu.ant-menu-dark .ant-menu-item-selected {
//     		background-color: #00ffff;
//     	}
//     `}</style>
// 			</div>
// 		)
// 	}
// }



// export default Index;


import Link from 'next/link'
//import Link from 'next/prefetch'
const Index = () => (
  <div>
    <Link href="/about?id=111">
      <a>About Page</a>
    </Link>
    <p>Hello ssr+pwa</p>
  </div>
)
 
 export default Index