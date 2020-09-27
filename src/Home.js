import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <img
                className="home__image"
                src="./images/banner.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="POWRX Haltères hexagone en Caoutchouc/Dumbbell 5 kg à 30kg / altere Musculation"
                    price={70.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Ua-pRQdGL._AC_SL1000_.jpg203,200_.jpg"
                />

                <Product
                    id="11395"
                    title="Découvrez Ring Indoor Cam, Caméra de surveillance HD compacte avec prise, Système audio bidirectionnel, Blanc, Fonctionne avec Alexa"
                    price={59.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61uiEGZ4OPL._SL1000_.jpg"
                />               
            </div>

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="15745"
                    title="10 pièces Bouche Visières Bouclier Facial Visage Couvre Anti-Salive Anti-Eclaboussure"
                    price={21.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61khovu3yCL._AC_SL1000_.jpg"
                />

                <Product
                    id="33315"
                    title="ASUS Vivobook S S413FA-EK713T PC Portable FHD (Intel Core i3-10110U, RAM 8G, 512G SSD PCIE + OPTANE 32G, W10) Clavier AZERTY Français"
                    price={499.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81uBWr4d1LL._AC_SL1500_.jpg"
                /> 

                <Product
                    id="92225"
                    title="Lamicall Support Téléphone, Dock Téléphone : Support Dock pour Phone XS XS Max XR X 8 7 6 6S Plus 5 4, Huawei, Samsung S9 S8 S7 S6 S5 S4 S3, Accessoires, d'autres Smartphones Aluminium - Rouge"
                    price={13.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61IHL1IeReL._AC_SL1300_.jpg"
                />             
            </div>

            <div className="home__row">
                <Product
                    id="694714"
                    title="Tasses en céramique pour lait, café, thé–tasse pour petit déjeuner avec animal 3D, Cadeau idéal pour boisson du matin, ou pour les mariages, anniversaires, Céramique, 8oz (Panda)"
                    price={12.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Efui6paTL._AC_SL1000_.jpg"
                />              
            </div>
            
        </div>
    )
}

export default Home
