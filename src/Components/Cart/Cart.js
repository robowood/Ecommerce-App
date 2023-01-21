import'./Cart.css';
import Card from '../UI/Card';
const Cart = (Props)=>{
    const cartElements = [

        {

        title: 'Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

        },

        {

        title: 'Black ',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

        },

        {

        title: 'Yellow ',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

        }

        ]

        const cartItems = <ul>
                 <span className="cartHeader">
                    <span className="Item">ITEM</span>
                    <span className="Price">PRICE</span>
                    <span className="Quantity">QUANTITY</span>
                </span>
            {cartElements.map(item=>(

                <li className="singleList">
                    <img src={item.imageUrl} alt="Album Image" className="cartImages" />
                   <span className="title"> {item.title}</span>
                    <span className="price">{item.price}</span>
                    <span className="quantity">{item.quantity}</span>
                    <button className="removeButton">Remove</button>
                    <hr></hr>
                    
                </li>

            ))}
        </ul>
        // const showSomething = ()=>{
        //     console.log('showing')
        //}

        return(
            <Card >
                <div className="cartName">CART</div>
                <button className="closeCart" onClick={Props.onClose}>X</button>
                {cartItems}
            </Card>
        )
}

export default Cart;
