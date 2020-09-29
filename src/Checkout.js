import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <h3>Votre panier</h3>
                        <p>
                            Votre panier est vide pour le moment.
                            Mais vous avez des articles mis de côté pour un achat ultérieur. Pour en acheter un ou plus maintenant, cliquez sur Déplacer dans le panier à côté de l'article.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket </h2>
                        
                        {/* List out all of the Checkout Products */}
                        {basket?.map((item) => {
                                    return (
                                        <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        /> 
                                    ) 
                                }          
                            )
                        }    
                    </div>  
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout