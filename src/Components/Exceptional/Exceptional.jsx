import exception1 from '../../../public/images/card-1.jpg';
import exception2 from '../../../public/images/card-2.jpg';
import exception3 from '../../../public/images/card-3.jpg';
import exception4 from '../../../public/images/card-4.jpg';
import exception5 from '../../../public/images/card-8.jpg';
import exception6 from '../../../public/images/card-6.jpg';
import exception7 from '../../../public/images/card-7.jpg';
import exception8 from '../../../public/images/card-9.jpg';

const Exceptional = () => {


    return (
        <div className='font-sans my-14 mx-10'>

            <div className='text-center space-y-5'>
                <h1 className='text-4xl font-light  '>Exceptional properties around the world</h1>
                <p className='text-slate-400'>Great cities or exclusive localities. Choose the luxury that suits you.</p>
            </div>

            <div className='columns-3 max-w-[1050px]  my-8  mx-auto  '>
                <div className='relative'>
                    <img className='w-[350px] block mb-3' src={exception1} alt="" />
                    <p></p>
                </div>
                <div className=''>
                    <img className='w-[350px] block mb-3 ' src={exception3} alt="" />
                    <p></p>
                </div>
                <div className=''>
                    <img className='w-[350px] max-h-[350px]  block mb-3 ' src={exception4} alt="" />
                    <p></p>
                </div>
                <div className=''>
                    <img className='w-[350px] block mb-3 ' src={exception5} alt="" />
                    <p></p>
                </div>
                <div className=''>
                    <img className='w-[350px] block mb-3 ' src={exception6} alt="" />
                    <p></p>
                </div>

                <div>
                    <img className='w-[350px] block mb-3 ' src={exception7} alt="" />
                    <p></p>
                </div>

                <div className=''>
                    <img className='w-[350px] block mb-3 ' src={exception2} alt="" />
                    <p></p>
                </div>
                <div className=''>
                    <img className='w-[350px] block mb-3 ' src={exception8} alt="" />
                    <p></p>
                </div>
            </div>


        </div>

    );
};

export default Exceptional;