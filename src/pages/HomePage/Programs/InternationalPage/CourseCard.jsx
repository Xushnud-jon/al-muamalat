import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

import Sample from '../../../../assets/images/Sample.png';
import Sample2 from '../../../../assets/images/Sample2.png';
import Sample3 from '../../../../assets/images/Sample3.png';

const products = [
    { name: 'Design Course', price: '$500', rating: 5, reviews: 20, category: 'Design', image: Sample },
    { name: 'Checklist Business', price: '$500', rating: 4, reviews: 102, category: 'Business', image: Sample2 },
    { name: 'Business Book', price: '$500', rating: 4, reviews: 102, category: 'Business', image: Sample3 },
    { name: 'Extra Course', price: '$500', rating: 4, reviews: 80, category: 'Design', image: Sample },
];

const itemTemplate = (product) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 text-left w-[300px] min-h-[380px] flex flex-col justify-between mx-2 my-4">
            <div>
                <div className="relative mb-3">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-[180px] object-cover rounded-xl"
                    />
                    <span className="absolute top-2 left-2 bg-white text-xs font-medium text-gray-700 px-2 py-1 rounded">
                        {product.category}
                    </span>
                </div>
                <div className=" text-gray-800 font-medium text-[20px] leading-[28px] tracking-[0] align-bottom">{product.name}</div>
                <div className="flex items-center text-yellow-500 mt-1 text-xl">
                    {'★'.repeat(product.rating)}
                    {'☆'.repeat(5 - product.rating)}
                    <span className="text-gray-500 ml-1">({product.reviews})</span>
                </div>
            </div>
           <div className="pt-3 border-t border-[#E7E9EB] mt-2 flex items-center justify-between">
    <div className="font-sans text-[24px] leading-[32px] tracking-[0.002em] align-bottom text-gray-800">
        {product.price}
    </div>
    <Button 
        icon="pi pi-arrow-up-right" 
        className="p-button-rounded p-button-success p-button-sm" 
    />
</div>

        </div>
    );
};

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

const MyCarousel = () => {
    return (
        <div className="py-10 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Most Popular Course</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
            </p>
            <div className="max-w-[1200px] mx-auto">
                <Carousel
                    value={products}
                    itemTemplate={itemTemplate}
                    numScroll={1}
                    numVisible={3}
                    responsiveOptions={responsiveOptions}
                    showIndicators={true}
                    showNavigators={true}
                    circular={true}
                    autoplayInterval={5000}
                    containerClassName="px-2"  // itemClassName o'rniga containerClassName
                    className="border-0"
                    pt={{
                        content: { className: 'py-4' },
                        previousButton: { className: 'left-2' },
                        nextButton: { className: 'right-2' },
                    }}
                />
            </div>
        </div>
    );
};

export default MyCarousel;