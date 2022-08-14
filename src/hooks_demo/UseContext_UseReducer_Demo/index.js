import React from 'react'
import { StoreProvider } from './store';
import App from './App';

const ContextReducerDemo = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    )
}

export default ContextReducerDemo;