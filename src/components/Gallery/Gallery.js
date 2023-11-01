import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import img1 from '../../assets/images/image-1.webp';
import img2 from '../../assets/images/image-2.webp';
import img3 from '../../assets/images/image-3.webp';
import img4 from '../../assets/images/image-4.webp';
import img5 from '../../assets/images/image-5.webp';
import img6 from '../../assets/images/image-6.webp';
import img7 from '../../assets/images/image-7.webp';
import img8 from '../../assets/images/image-8.webp';
import img9 from '../../assets/images/image-9.webp';
import img10 from '../../assets/images/image-10.jpeg';
import img11 from '../../assets/images/image-11.jpeg';

const Gallery = () => {

    return (
        <div className='mx-auto mt-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white'>
            <div class="px-4 py-4 md:px-24 lg:px-8 grid grid-rows-3 grid-cols-5 gap-4">
                <div class="row-span-2 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none col-span-2">
                <img src={img1} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img2} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img3} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" /> 
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img4} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img5} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img6} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img7} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img8} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img9} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1  rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img10} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1  rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={img11} className='bg-white rounded-lg object-cover hover:opacity-50' alt="" />
                </div>
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none text-center justify-center align-middle px-auto py-auto">
                    <div className='my-20' >
                    <BsImages className='text-2xl text-gray-700 mx-auto mb-2'></BsImages>
                   <p>Add Images</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;