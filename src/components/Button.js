import React from 'react';

const Button = ({ buttonType, isDisabled, clickHandler, children }) => {
    return (
        <button
            type={buttonType}
            disabled={isDisabled}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
