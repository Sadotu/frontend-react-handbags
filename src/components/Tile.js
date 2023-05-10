import React from 'react';

const Tile = ({ imageSrc, title, paragraphs }) => {

    return (
        <section>
            { imageSrc ? <img src={imageSrc} alt="" /> : <h2>{title}</h2> }
            {paragraphs && paragraphs.length > 0 && (
                <>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </>
            )}
        </section>
    );
};

export default Tile;
