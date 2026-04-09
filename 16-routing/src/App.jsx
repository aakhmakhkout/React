//! Routing: React routing means showing different components/pages based on the URL --- without reloading the page

//! Router: watches url and decides which component to show.

//? react routing is not inbuilt so we use react router dom library.

//? Routes = container that hold all routes.
//? route = defines which component loads for which path. (route path = / for home, route path = /about for about component);

//! LINK = used to navigate without page reload

//? react router gives us multiple routers:- 

//todo 1: BrowserRouter: wraps our entire app to enable routing. uses the browsers history api to keep urls clean(no symbols). it is used most of the time (99%)

//* example. eduhub, eduhub/courses, eduhub/about ...


//todo 2: HashRouter: it uses URL hash to manage routing, everything comes after hash (like eduhub/#/about) is handled by react and browser ignores the hash part when requesting the server, so server doesn't know the hash part also. no server setup needed and is used in simple hosting like github pages.

//todo 3: MemoryRouter (advanced): stores routing in memory (not in URL); no URL change, routes stored internally, mostly used for testing


//* why routing: without routing: no URL change, no Bookmark page, no share link, page refreshes and breaks state. no browser navigation, like backward forward and also it is not scalable. and everthing depends on state if we are not using Routing, which makes routing dependable on URL 

import {Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contactUs.jsx"
import Navbar from "./components/navbar.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App