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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [selectedRows, setSelectedRows] = useState([]);
    const [data, setData] = useState([
      { id: 1, img: img1 },
      { id: 2, img: img2 },
      { id: 3, img: img3 },
      { id: 4, img: img4 },
      { id: 5, img: img5 },
      { id: 6, img: img6 },
      { id: 7, img: img7 },
      { id: 8, img: img8 },
      { id: 9, img: img9 },
      { id: 10, img: img10 },
      { id: 11, img: img11 },
    ]);

    const handleRowSelection = (rowId, img) => {
      if (selectedRows.includes(rowId)) {
        setSelectedRows(selectedRows.filter((id) => id !== rowId));
      } else {
        setSelectedRows([...selectedRows, rowId]);
      }
      const newData = data.map((row) => {
        if (row.id === rowId) {
          return { ...row, img };
        }
        return row;
      });
      setData(newData);
    };

    const handleDeleteRows = () => {
      const newData = data.filter((row) => !selectedRows.includes(row.id));
      setData(newData);
      setSelectedRows([]);
    };
    return (
        <div>
        <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white rounded-t-lg">
            <div className='grid justify-between grid-cols-2'>
            <ul class="items-center hidden lg:flex">
            <li>
                <p
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                Sletected Item {selectedRows.length}
                </p>
            </li>
            </ul>
            <ul class="items-center hidden ml-auto lg:flex">
            <li>
            <button
                
                class="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gray-100 hover:bg-white focus:shadow-outline focus:outline-none"
                onClick={handleDeleteRows}
                title="Delete Files">
                Delete Files
            </button>
            </li>
            </ul>
            </div>
            <div class="ml-auto lg:hidden">
            <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
            >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
                </svg>
            </button>
            {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                    <div>
                        <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                        >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                        </svg>
                        </button>
                    </div>
                    </div>
                    <nav>
                    <ul class="space-y-4">
                        <li>
                        <p
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Product
                        </p>
                        </li>
                        <li>
                        <button
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gray-100 hover:bg-white focus:shadow-outline focus:outline-none"
                            onClick={handleDeleteRows}

                        >
                            Delete Files
                        </button>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            )}
            </div>
        </div>   
            <div className='mx-auto mt-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white'>
            <div class="px-4 py-4 md:px-24 lg:px-8 grid grid-rows-3 grid-cols-5 gap-4">
                {data
                .filter(data => {
                 return (
                 data.id === 1
                 );
                 })
                .map((arr) => (
                <div class="relative row-span-2 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none col-span-2">
                <img src={arr.img} className='bg-white h-full rounded-lg object-cover hover:opacity-50' alt="" />
                <input
                className="absolute w-4 h-4 top-3 left-3"
                type="checkbox"
                checked={selectedRows.includes(arr.id)}
                onChange={() => handleRowSelection(arr.id, arr.img)}
               />
                </div>
                ))}

                {data
                .filter(data => {
                 return (
                 data.id !== 1
                 );
                 })
                .map((arr) => (
                <div class="relative col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none">
                <img src={arr.img} className='bg-white rounded-lg h-full object-cover mb-0 hover:opacity-50' alt="" />
                <input
                className="absolute w-4 h-4 top-3 left-3"
                type="checkbox"
                checked={selectedRows.includes(arr.id)}
                onChange={() => handleRowSelection(arr.id, arr.img)}
               />
                </div>
                ))}
                <div class="col-span-1 rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none text-center justify-center align-middle px-auto py-auto">
                    <div className='my-20' >
                    <BsImages className='text-2xl text-gray-700 mx-auto mb-2'></BsImages>
                   <p>Add Images</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;