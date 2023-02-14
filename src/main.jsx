import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp'
import { AppRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
)
