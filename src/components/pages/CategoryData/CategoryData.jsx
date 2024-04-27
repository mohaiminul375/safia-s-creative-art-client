import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h2>CategoryDataHere</h2>
        </div>
    );
};

export default CategoryData;