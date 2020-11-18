import React from 'react';
import './Home.css';
import Product from './Product';
import watch from './Images/watch.jpg'
import samsung from './Images/samsung.jpg'
import microwave from './Images/microwave.jpg'
import tv from './Images/tv.webp'
import mixer from './Images/mixer.webp'
import washer from './Images/washer.webp'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="prime_banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Prime banner" />
                <div className="home_rows">
                    <Product
                        id="125644"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={18799.00}
                        image={watch}
                        rating={5}
                    />
                    <Product
                        id="125645"
                        title="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)"
                        price={22499}
                        image={samsung}
                        rating={4}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125646"
                        title="Koryo by Big Bazaar KMC2525 25L Convection Microwave Oven"
                        price={7999}
                        image={microwave}
                        rating={4}
                    />
                    <Product
                        id="125647"
                        title="Butterfly Smart Wet Grinder,2L with Coconut Scrapper Attachment, 150W"
                        price={3099}
                        image={mixer}
                        rating={3}
                    />
                    <Product
                        id="125648"
                        title="LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer"
                        price={69499}
                        image={washer}
                        rating={5}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125646"
                        title="Koryo by Big Bazaar KMC2525 25L Convection Microwave Oven"
                        price={7999}
                        image={microwave}
                        rating={4}
                    />
                    <Product
                        id="125647"
                        title="Butterfly Smart Wet Grinder,2L with Coconut Scrapper Attachment, 150W"
                        price={3099}
                        image={mixer}
                        rating={3}
                    />
                    <Product
                        id="125648"
                        title="LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer"
                        price={69499}
                        image={washer}
                        rating={5}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125646"
                        title="Koryo by Big Bazaar KMC2525 25L Convection Microwave Oven"
                        price={7999}
                        image={microwave}
                        rating={4}
                    />
                    <Product
                        id="125647"
                        title="Butterfly Smart Wet Grinder,2L with Coconut Scrapper Attachment, 150W"
                        price={3099}
                        image={mixer}
                        rating={3}
                    />
                    <Product
                        id="125648"
                        title="LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer"
                        price={69499}
                        image={washer}
                        rating={5}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125649"
                        title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black)"
                        price={23990}
                        image={tv}
                        rating={4}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125649"
                        title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black)"
                        price={23990}
                        image={tv}
                        rating={4}
                    />
                </div>
                <div className="home_rows">
                    <Product
                        id="125649"
                        title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black)"
                        price={23990}
                        image={tv}
                        rating={4}
                    />
                    <Product
                        id="125647"
                        title="Butterfly Smart Wet Grinder,2L with Coconut Scrapper Attachment, 150W"
                        price={3099}
                        image={mixer}
                        rating={3}
                    />
                    <Product
                        id="125648"
                        title="LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer"
                        price={69499}
                        image={washer}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
