import './Store.css';
const Store=()=>{
    const productsArr = [
 {
     title: 'Colors',
     price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    key:Math.random().toString()
     },
     {
     title: 'Black and white Colors',
     price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    key:Math.random().toString()
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    key:Math.random().toString()
    },
    {
        title: 'Blue Color',
         price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        key:Math.random().toString()
      }
     ]
    
            const storeItems = <ul className="unOrderedList">
        {productsArr.map(item=>
            (
                <div key={item.key} className="mainList">

                    <li className="itemTitle">{item.title}</li>
                    <img className="itemImage" src={item.imageUrl}/>
                    <div> 
                        <div className="itemPrice">{`Rs${item.price}`}</div>  
                        <button className="addToCart" onClick={addToCartHandler}>Add TO Cart</button>
                    </div>
               </div>


            ))}
    </ul>
    

        return(
            <div>
                <h1 className='music'> MUSIC</h1>
                {storeItems}
            </div>
        );
    
    
};
export default Store;
