import React, { useState } from 'react';
import { MenuFoldOutlined, BellOutlined, DownOutlined, CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './Header.module.scss'


function Header({ title, icon, avatar, }) {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }
    return (

        <header className={styles.header}>
            <div className={styles.title}>
                <div><MenuFoldOutlined style={{ fontSize: '25px' }} /></div>
                <div style={{ marginLeft: '15px', fontSize: '25px', fontWeight: '650' }}>{title}</div>
            </div>
            <nav className={styles.nav}>
                <div className={styles.parent}>
                    <span className={styles.dot}></span>
                    <BellOutlined style={{ fontSize: '25px', marginRight: '30px' }} className="mx-5 my-3 " />
                </div>
                <div className={styles.user}>
                    <img className={styles.avatar} alt='avatar' src={avatar} onClick={handleShow} />
                    <div className={styles.info}>
                        <span style={{ fontWeight: '600' }} >Phan Đức Mạnh</span>
                        <span style={{ fontWeight: '300' }}>Quản trị viên</span>
                    </div>
                    <DownOutlined className={styles.downIcon} />
                </div>
            </nav>
            {show && <div className={styles.inform}> <CheckCircleOutlined /> Tạo thành công <CloseOutlined /> </div>}
        </header>
    );
}
export default Header;
