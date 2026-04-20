import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./context/themeChangeContext.jsx"
import {BrowserRouter} from "react-router-dom"
import UserContext from "./context/addusersContext.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContext>
  <ThemeContext>
    <App />
  </ThemeContext>
  </UserContext>
  </BrowserRouter>
)
