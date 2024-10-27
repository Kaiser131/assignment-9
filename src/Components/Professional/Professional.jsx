import { FaHome } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Professional = () => {
    return (
        <div className="my-10">

            <div>
                <div className='text-center space-y-5'>
                    <h1 className='text-4xl font-light  '>The best luxury professionals</h1>
                    <p className='text-slate-400'>Place your trust in the world's most prestigious real-estate firms to value and sell your luxury properties.</p>
                </div>

                <div className=" my-10">
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">

                        <div className="max-w-[460px] max-h-[254px] bg-black text-white items-center space-y-3 p-10  font-sans text-center">
                            <div className="flex justify-center text-5xl">
                                <FaHome></FaHome>
                            </div>
                            <h1 className="text-2xl">Value a property</h1>
                            <p>Discover the market value of luxury properties all around the world</p>
                            <h1>START VALUATION</h1>
                        </div>

                        <div className="max-w-[460px] max-h-[254px] bg-black text-white items-center space-y-3 p-10  font-sans text-center">
                            <div className="flex justify-center text-5xl">
                                <GiShoppingCart></GiShoppingCart>
                            </div>
                            <h1 className="text-2xl">Sell a property</h1>
                            <p>Entrust the sell of your property to a real estate professional</p>
                            <h1>BEGIN SELL PROCESS</h1>
                        </div>

                    </div>
                </div>

                <div className='text-center space-y-5'>
                    <h1 className='text-4xl font-light  '>Are you a real estate agent?</h1>
                    <p className='text-slate-400'>Publish your listings now on the #1 portal in the world for luxury properties.</p>
                    <button className="font-sans bg-[#8a0018] px-4 py-3 text-white ">Find Out More</button>
                </div>

            </div>


        </div>
    );
};

export default Professional;