import React from 'react';

import './styles.scss'

const Input = ({placeholder, ...rest}) => <input className="input-field" placeholder={placeholder} {...rest}/>

Input.defaultProps = {
    placeholder: 'Input search query',
};

export default Input;
