import banner1 from '../../../public/images/luxary-banner-1.webp';
import banner2 from '../../../public/images/luxury-banner-2.jpg';
import banner3 from '../../../public/images/luxury-banner-3.webp';
import banner4 from '../../../public/images/luxury-banner-4.jpg';
import banner5 from '../../../public/images/luxury-banner--5.jpg';

import './Banner.css';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

const Banner = () => {
    return (

        <div >

            {/* w-[1140px] max-w[80%] flex items-center */}

            <div className=' w-[100vw] h-[100vh] overflow-hidden mt-[-94px] relative text-white'>

                {/* list */}
                <div className='list'>

                    {/* item */}
                    <div className='item absolute inset-0'>
                        <img className=' w-[100%] h-[100%] object-cover ' src={banner1} alt="" />
                        {/* content */}
                        <div className='content absolute top-[20%] w-[1040px] max-w-[80%] left-[50%] text-shadow-lg transform: translate-x-[-50%] pr-[30%] '>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 author font-bold'>L u n d e v</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 title font-bold text-7xl '>Design Slider</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 topic font-bold text-7xl text-orange-500 '>Animal</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae, aspernatur voluptates, saepe exercitationem veniam mollitia molestias porro placeat fugit a magni ut nostrum neque, expedita fuga quasi enim pariatur.</div>
                            <div className=' translate-y-[50px] blur-[20px] opacity-0 btn btn-outline text-white mt-7'>
                                <button >See More</button>
                            </div>
                        </div>
                    </div>


                    <div className='item absolute inset-0 '>
                        <img className='w-[100%] h-[100%] object-cover ' src={banner2} alt="" />
                        {/* content */}
                        <div className='content absolute top-[20%] w-[1040px] max-w-[80%] left-[50%] text-shadow-lg transform: translate-x-[-50%] pr-[30%] '>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 author font-bold'>L u n d e v</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 title font-bold text-7xl '>Design Slider</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 topic font-bold text-7xl text-orange-500 '>Animal</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae, aspernatur voluptates, saepe exercitationem veniam mollitia molestias porro placeat fugit a magni ut nostrum neque, expedita fuga quasi enim pariatur.</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 btn btn-outline text-white mt-7'>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>


                    <div className='item absolute inset-0 '>
                        <img className='w-[100%] h-[100%] object-cover ' src={banner3} alt="" />
                        {/* content */}
                        <div className='content absolute top-[20%] w-[1040px] max-w-[80%] left-[50%] text-shadow-lg transform: translate-x-[-50%] pr-[30%] '>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 author font-bold'>L u n d e v</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 title font-bold text-7xl '>Design Slider</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 topic font-bold text-7xl text-orange-500 '>Animal</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae, aspernatur voluptates, saepe exercitationem veniam mollitia molestias porro placeat fugit a magni ut nostrum neque, expedita fuga quasi enim pariatur.</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 btn btn-outline text-white mt-7'>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>


                    <div className='item absolute inset-0 '>
                        <img className='w-[100%] h-[100%] object-cover ' src={banner4} alt="" />
                        {/* content */}
                        <div className='content absolute top-[20%] w-[1040px] max-w-[80%] left-[50%] text-shadow-lg transform: translate-x-[-50%] pr-[30%] '>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 author font-bold'>L u n d e v</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 title font-bold text-7xl '>Design Slider</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 topic font-bold text-7xl text-orange-500 '>Animal</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae, aspernatur voluptates, saepe exercitationem veniam mollitia molestias porro placeat fugit a magni ut nostrum neque, expedita fuga quasi enim pariatur.</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 btn btn-outline text-white mt-7'>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    <div className='item absolute inset-0 z-[1]'>
                        <img className='img5 w-[100%] h-[100%] object-cover ' src={banner2} alt="" />
                        {/* content */}
                        <div className='content absolute top-[20%] w-[1040px] max-w-[80%] left-[50%] text-shadow-lg transform: translate-x-[-50%] pr-[30%] '>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 author font-bold'>S K Y L I N E</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 title font-bold text-7xl '>TOP</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 topic font-bold text-7xl text-orange-500 '>PROPERTY</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 des'>Welcome to a world where luxury meets lifestyle at [Website Name]. We specialize in showcasing the finest high-end real estate properties that define elegance, exclusivity, and refined living. With a carefully curated portfolio of premier estates, ranging from modern architectural masterpieces to timeless classic mansions, our website serves as your gateway to exceptional homes worldwide.</div>
                            <div className='translate-y-[50px] blur-[20px] opacity-0 button btn btn-outline text-white mt-7'>
                                <button className=''>See More</button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* thumbnail */}

                <div className="thumbnail absolute bottom-[50px] left-[50%] w-max z-[100] flex gap-5 ">

                    {/* item */}
                    <div className=" h-[220px] w-[150px] flex-shrink-0 relative  ">
                        <img className='w-[100%] h-[100%] object-cover rounded-xl ' src={banner1} alt="" />
                        <div className="content absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="text-shadow-lg title font-bold">Name slider</div>
                            <div className="text-shadow-lg des">Description</div>
                        </div>
                    </div>

                    {/* item 2*/}
                    <div className=" h-[220px] w-[150px] flex-shrink-0 relative  ">
                        <img className='w-[100%] h-[100%] object-cover rounded-xl ' src={banner2} alt="" />
                        <div className="content absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="text-shadow-lg title font-bold">Name slider</div>
                            <div className="text-shadow-lg des">Description</div>
                        </div>
                    </div>

                    {/* item 3*/}
                    <div className=" h-[220px] w-[150px] flex-shrink-0 relative  ">
                        <img className='w-[100%] h-[100%] object-cover rounded-xl ' src={banner3} alt="" />
                        <div className="content absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="text-shadow-lg title font-bold">Name slider</div>
                            <div className="text-shadow-lg des">Description</div>
                        </div>
                    </div>

                    {/* item 4*/}
                    <div className=" h-[220px] w-[150px] flex-shrink-0 relative  ">
                        <img className='w-[100%] h-[100%] object-cover rounded-xl ' src={banner4} alt="" />
                        <div className="content absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="text-shadow-lg title font-bold">Name slider</div>
                            <div className="text-shadow-lg des">Description</div>
                        </div>
                    </div>

                    {/* item 5*/}
                    <div className="item h-[220px] w-[150px] flex-shrink-0 relative  ">
                        <img className='w-[100%] h-[100%] object-cover rounded-xl ' src={banner5} alt="" />
                        <div className="content absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="text-shadow-lg title font-bold">Name slider</div>
                            <div className="text-shadow-lg des">Description</div>
                        </div>
                    </div>

                </div>

                {/* arrows */}

                <div className="arrows absolute top-[80%] right-[52%] w-[300px] max-w-[30%] flex gap-10">
                    <button className='z-[100] text-xl bg-[#eee4] rounded-full p-5 text-white font-bold transition-[.5s] hover:bg-[#eee] hover:text-[#555] ' ><HiArrowSmallLeft></HiArrowSmallLeft> </button>
                    <button className='z-[100] text-xl bg-[#eee4] rounded-full p-5 text-white font-bold transition-[.5s] hover:bg-[#eee] hover:text-[#555] ' ><HiArrowSmallRight></HiArrowSmallRight> </button>
                </div>


            </div>



        </div>

    );
};

export default Banner;