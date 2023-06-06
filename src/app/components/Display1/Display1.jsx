import React from 'react';
import styles from './Display1.module.css'
import tshirHanger from '../../../../public/images/olive-tshirt.jpg'
import Image from 'next/image';
const Display1 = () => {
    return (
     
     <>
     <div className={`h-48 lg:h-64 ${styles.display} flex justify-center items-center`}>
        <h2 className='font-bold text-white text-2xl md:text-4xl lg:text-5xl text-center '><span className='text-[#b3ec07]'>Unlocking</span>  the World of Fashionable Possibilities.</h2>
        </div>
      <div className='lg:h-1/3'>
      <Image src={tshirHanger} alt='tshirt' className='object-fill w-full h-3/5 lg:h-1/3'/>
      </div>
     </>
    );
};

export default Display1;