"use client"
import Image from 'next/image';
import tshirt from '../../../../public/images/black-tshirt.png'
import blackJeans from '../../../../public/images/black-jeans.png'
import JeansCollection from '../../../../public/images/cloth-collection.jpg'
import styles from './HeroSection.module.css'


 const HeroSection = () => {
    return (
        <div className="relative">
        <Image
          src={JeansCollection}
          className="absolute lg:hidden inset-0 object-cover w-full h-full"
          alt="Jeans"
        />
        <div className="relative bg-opacity-60 lg:bg-opacity-70 bg-black">
          <svg
            className="absolute inset-x-0 bottom-0 bottom-hidden text-white"
            viewBox="00 00 00 00"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
    
          <div className="relative  px-4 pt-16 md:pt-4  pb-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="w-full flex flex-col justify-center items-center md:pt-12 lg:pt-0 max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                {/* <h2 className="block lg:hidden max-w-lg mb-6 font-bold tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-non leading-relaxed">
                 <span className='lg:py-4'>Your Garments</span> <span className='lg:py-4'>Apparel <br className='lg:hidden'/> Supplier</span> <br className="hidden lg:block" /> <span className='lg:pt-12'>From Bangladesh</span>
                </h2> */}
            
        <h2 className="text-center max-w-lg mb-2 font-bold tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-non leading-relaxed">Reliable <span className='text-[#b3ec07]'>Garments</span></h2>
        <h2 className="text-center max-w-lg mb-2 font-bold tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-non leading-relaxed">Apparel <span className='text-[#b3ec07]'>Supplier</span></h2>
        <h2 className=" text-center max-w-lg mb-4 font-bold tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-non leading-relaxed">From <span className='text-[#b3ec07]'>Bangladesh</span></h2>

                <p className="text-center max-w-xl mb-4 font-medium text-gray-50 md:text-lg">
                We are your gateway to exceptional garment sourcing. With a keen focus on quality, craftsmanship, and reliable partnerships, we are here to connect you with the finest suppliers and manufacturers in the industry.
                </p>
            
              </div>
              <div className="w-full lg:h-[80vh] max-w-xl xl:px-8 xl:w-5/12 relative">
              <Image width='300' height='300'  className={`transform rotate-90 ${styles.tShirtUpDown} hidden transform rotate-45 lg:block`} src={tshirt} alt="" />


              <Image width='300' height='300'  className={`  ${styles.jeansUpDown} hidden  lg:block`} src={blackJeans} alt="" />
      
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default HeroSection