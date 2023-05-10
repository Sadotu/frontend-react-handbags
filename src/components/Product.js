import React from 'react';

const Product = ({ label, imageSrc, name, price }) => {
    return (
        <article>
            <span className="label">{label}</span>
            <img src={imageSrc} alt={name} />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
};

export default Product;
