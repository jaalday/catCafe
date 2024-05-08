import { useContext } from "react";
import { ShopContext, ShopContextProvider } from "./components/Shop-context";



export const products = [
    {
        id: 1,
        name: "Cat Mug",
        price: 9.99,
        category: "mugs",
        img:  "https://sp.apolloboxassets.com/vendor/product/productImages/2021-05-07/I2BTlArray_11.jpg"
    },
    { 
        id: 2,
        name: "T-Shirt",
        price: 14.99,
        category: "clothing",
        img: "https://mercyroadapparel.com/cdn/shop/files/MeowdyHDeepTeal_grande.jpg?v=1687552694"
    },
    {
        id: 3,
        name: "Sticker",
        price: 1.99,
        category: "stickers",
        img: "https://d6ce0no7ktiq.cloudfront.net/images/preview/2020/08/31/design-73167/template-sticker-600x600.png"
    },
    {
        id: 4,
        name: "Keychain",
        price: 3.99,
        category: "keychains",
        img: "https://i.ebayimg.com/images/g/YWYAAOSwl9BiDzq~/s-l1200.webp"

    },
    {
        id: 5,
        name: "Plush",
        price: 19.99,
        category: "plushies",
        img: "https://qmartco.com/cdn/shop/files/blue-cat-plushie-qmartco.jpg?v=1701885221"
    },
    {
        id: 6,
        name: "Long Cats",
        price: 12.99,
        category: "plushies",
        img: "https://shaketeaus.com/cdn/shop/products/Long-Cat-Pillow-Plush-5779-841375.jpg?v=1692214241"

    },
    {
        id: 7,
        name: "Cat Tote Bag",
        price: 9.99,
        category: "bags",
        img: "https://meowden.com/cdn/shop/products/nope-cat-tote-bag-766.jpg?v=1679299278"
    },
    {
        id: 8,
        name: "Cat Hat",
        price: 7.99,
        category: "clothing",
        img: "https://m.media-amazon.com/images/I/716zPe0lMkL._AC_SL1500_.jpg"
    },
    {
        id: 9,
        name: "Cat Socks",
        price: 4.99,
        category: "clothing",
        img: "https://www.happypopsox.com/cdn/shop/products/51fjMpMrg8L.jpg?v=1700601516"
    },
    {
        id: 10,
        name: "Cat Earrings",
        price: 5.99,    
        category: "jewelry",
        img: "https://littlerooms.com/cdn/shop/products/LittleRooms-BlackCatEarrings-AltView_1200x1200.jpg?v=1633725793"
    },
    {
        id: 11,
        name: "Necklace",
        price: 6.99,
        category: "jewelry",
        img: "https://petnlove.co/cdn/shop/products/IMG_2516.jpg?v=1593205783"
    },
    {
        id: 12,
        name: "Bracelet",
        price: 7.99,
        category: "jewelry",
        img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/62d82931d9d31c41b9bf1dc4f39cbb9c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
    },
    {
        id: 13,
        name: "Ring",
        price: 8.99,
        category: "jewelry",
        img: "https://superkittycats.com/cdn/shop/products/elegant-pink-cat-ring-38724839-7-same-as-photo-328594_640x.jpg?v=1683955489"
    },
    {
        id: 14,
        name: "Phone Case",
        price: 9.99,
        category: "phone cases",
        img: "https://res.cloudinary.com/teepublic/image/private/s--cVnLlyTB--/c_crop,x_10,y_10/c_fit,w_416/c_crop,g_north_west,h_1101,w_554,x_-69,y_-242/l_upload:v1697685424:production:blanks:e6cc3yohhabggbsez5ct/fl_layer_apply,g_north_west,x_-422,y_-318/b_rgb:e6b3a6/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1639250684/production/designs/26257423_0.jpg"
    },
    {
        id: 15,
        name: "Laptop Case",
        price: 10.99,
        category: "laptop cases",
        img: "https://img.kwcdn.com/product/Material/ImageCut/6508a089/e6830f0b-1db7-4041-a167-afc6cbb1959e.jpg"
    },

]



const Store = () => {
    
    const {addToCart} = useContext(ShopContext); 
        
      






    return (
        <>
      
        <div className="storeHeader">
            <h1>Store</h1>
            <p className="storeText">Welcome to our store! We have a variety of items for sale, including cat-themed mugs, t-shirts, and more. Check out our selection below!</p>
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="product-card">
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <img className="img2" src={product.img} alt={product.name}/>
                            <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
                        </div>
                    );
                })
            }
        </div>
        <div>
            
        </div>
      
      
    

        </>
        
    );
} 

export default Store;