//! Props (short for properties) are values passed from a parent component to a child component.
//? They allow components to become dynamic and reusable instead of hard-coded.
//* Props are read-only.A component can use props but should not change them.
import Cards from "./components/cards/cards.jsx"
const App = ()=> {
  return <div className="parent">
    <Cards username="Kaneki" src="https://i.pinimg.com/1200x/90/74/a6/9074a68f86e0f006a9ec7183530e66c0.jpg"/>
    <Cards username="Isagi" src="https://i.pinimg.com/736x/db/fa/90/dbfa902581a25c25bac51b6d65b678d0.jpg"/>
    <Cards username="Touka" src="https://i.pinimg.com/736x/e9/9c/2a/e99c2a0d2be3026b236587f0477252a7.jpg"/>
    <Cards username="Aakh Makh Kout" src="https://i.pinimg.com/736x/c2/d1/4d/c2d14d79cf08225ad44804321cb682e2.jpg"/>
  </div>
}

export default App