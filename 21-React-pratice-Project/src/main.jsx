import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./context/themeChangeContext.jsx"
import {BrowserRouter} from "react-router-dom"
import UserContext from "./context/addusersContext.jsx"
import CardThemeContext from "./context/cardTheme.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CardThemeContext>
  <UserContext>
  <ThemeContext>
    <App />
  </ThemeContext>
  </UserContext>
  </CardThemeContext>
  </BrowserRouter>
)
