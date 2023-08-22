import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./Redux/store.ts"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <App/>
  </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
