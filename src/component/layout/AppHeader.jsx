import { Layout } from 'antd'
import React from 'react'

const headerStyle = {
	width: '100%',
	textAlign: 'center',
	height: 60,
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}

export default function AppHeader() {
	return <Layout.Header style={headerStyle}>Header</Layout.Header>
}
