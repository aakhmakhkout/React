import "./cards.css"

const Cards = ({username, src}) => {
    return <div className="cards">
        <img src={src} alt="pfp" />
        <h1>{username}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est vel non, cum iure voluptate neque eaque inventore fugit quos adipisci sequi quaerat eos impedit consectetur voluptatem atque animi id quam!</p>
        <button>view profile</button>
    </div>
}

export default Cards