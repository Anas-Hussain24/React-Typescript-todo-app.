import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvider } from './store/todos.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TodosProvider>
    <App />
    </TodosProvider>
    </BrowserRouter>
  </StrictMode>
)
