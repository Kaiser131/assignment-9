import { useEffect, useState } from "react";
import map from '../../../public/images/map2.jpg';
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {

        fetch('countries.json')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    // const lawra = countries;
    // console.log(lawra);
    return (
        <div className="relative" >

            <div style={{ backgroundImage: `url("${map}")` }} className="w-screen  z-10 font-sans min-h-screen bg-no-repeat bg-cover bg-center  bg-fixed  ">

                <div className="">
                    <div className="text-center space-y-8 py-12 mx-10">
                        <h1 className='text-4xl font-light'>Luxury properties in top locations worldwide</h1>
                        <div className="flex gap-10 max-w-[1000px] mx-auto my-5 ">
                            <p>With over 500,000 luxury homes in over 120 countries, LuxuryEstate.com provides the largest selection of luxury properties. More than 50,000 real estate agencies display their finest luxury properties on the website, the largest number of high-end agents on a single website. Our goal is to provide the easiest and most efficient way to search for exceptional</p>
                            <p>Properties around the world, relying on trusted and independent professionals in luxury real estate. LuxuryEstate.com will open your eyes to the most enchanting properties in the world: luxury homes, prestigious estates, classic residences, unique castles and country homes. To rediscover that beauty is not a luxury. It is a necessity.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-7 w-5/6 mx-auto pl-14">
                        {
                            countries.map((got, idx) => <Country key={idx} got={got} ></Country>)
                        }
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Countries;