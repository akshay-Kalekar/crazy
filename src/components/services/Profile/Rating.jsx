import React from "react";

const Rating = () => {
    return (
        <div className='rating rating-sm rating-half '>
            <input type='radio' name='rating-10' className='rating-hidden' />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-1'
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-2 '
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-1'
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-2 '
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-1'
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-2 '
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-1'
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-2 '
                checked
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-1'
            />
            <input
                type='radio'
                name='rating-10'
                className='bg-green-500 mask mask-star-2 mask-half-2 '
            />
        </div>
    );
};

export default Rating;
