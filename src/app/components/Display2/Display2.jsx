import React from 'react';
import styles from './Display2.module.css'
import Image from 'next/image';
import JeansCollect from '../../../../public/images/jeans-collection.jpg'
import svgShape  from '../../../../public/images/blob.svg'


const Display2 = () => {
    return (
        <>
        <div className={`h-64 relative ${styles.display2}`}>
   
         

        </div>
            {/* <Image alt='Jeans' src={JeansCollect} className='h-full lg:h-[700px] w-full'/> */}
        </>
    );
};

export default Display2;