import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Step6: Create store.js file
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Step6: Create store.js file */}
    <App />
    </Provider> {/* Step6: Create store.js file */}
  </React.StrictMode>,
)
