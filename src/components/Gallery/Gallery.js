import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { BsCheckSquareFill } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
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
import Testorder from './Testorder';

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

    const [isDragging, setIsDragging] = useState(false);
    const [dragIndex, setDragIndex] = useState(-1);
    const [dragOffset, setDragOffset] = useState(0);

    const startDrag = (index, event) => {
      setDragIndex(index);
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text", index);
    };

    const onDragOver = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    };

    const onDrop = (index, event) => {
      event.preventDefault();
      const movedImageIndex = event.dataTransfer.getData("text");
      if (movedImageIndex !== "") {
        const fromIndex = parseInt(movedImageIndex);
        const toIndex = index;

        // Rearrange the images array
        const movedImage = data[fromIndex];
        const updatedImages = [...data];
        updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, movedImage);
        setData(updatedImages);
      }
      setDragIndex(-1);
    };

    return (
        <div>
        <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white rounded-t-lg">
            <div className='grid justify-between grid-cols-2'>
            <ul class="items-center hidden lg:flex">
            <li>
                <p
                class="flex items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                <BsCheckSquareFill className='mr-2 text-blue-600'></BsCheckSquareFill>
                <span>{selectedRows.length} Files Sletected</span>
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
            <MdMenu></MdMenu>
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
                        <IoMdClose></IoMdClose>
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
        {/* <Testorder></Testorder> */}
            <div className='mx-auto mt-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white'>
            <div class="px-4 py-4 md:px-24 lg:px-8 grid grid-rows-3 grid-cols-5 gap-4">
                {data.map((arr, index) => (
                <div 
                key={index}
                draggable="true"
                onDragStart={(event) => startDrag(index, event)}
                onDragOver={(event) => onDragOver(event)}
                onDrop={(event) => onDrop(index, event)}
                className={`${
                  index === 0 ? "col-span-2 row-span-2" : "col-span-1"
                  } group relative rounded-lg shadow-xl border hover:bg-gray-900 inset-0 hover:border-none`}
                >
                <img src={arr.img} className='bg-white h-full rounded-lg object-cover hover:opacity-50' alt="" />
                <input
                className="absolute invisible group-hover:visible w-4 h-4 top-3 left-3"
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