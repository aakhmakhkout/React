//! Wrapping App with theme context, now themecontext will become parent and app becomes its child, and we can access the child(app) as a prop.children in themecontext.jsx file and render it on browser

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./context/themecontext.jsx"


createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <App />
  </ThemeContext>
)
