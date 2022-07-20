import { Input } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';

const cx = classNames.bind(styles);


function SearchBox({ title, large = false, small = false }) {
    const classes = cx({
        small,
        large,
    });
    return (
        <div>
            <Input placeholder={title} className={classes}></Input>
        </div>
    );
}

export default SearchBox;