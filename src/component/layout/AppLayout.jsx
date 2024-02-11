import { Layout, Spin } from 'antd'
import React from 'react'
import CryptoContext from '../../context/crypto-context'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import AppSider from './AppSider'

export default function AppLayout() {
	const { loading } = React.useContext(CryptoContext)

	if (loading) {
		return <Spin fullscreen />
	}

	return (
		<Layout>
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	)
}
