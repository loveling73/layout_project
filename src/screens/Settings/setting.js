import { BellOutlined, DownOutlined, MenuFoldOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Image, Input, Layout, Table, Row, Col, Switch } from 'antd';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { arrayitems, columns, data } from '../../utils/fakeDataM';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss'



const { Content, Footer } = Layout;

const cx = classNames.bind(styles);

const menuSettings = [ 'Đơn đặt hàng', 'Đơn bán hàng']

const Setting = () => {
    const [showModal, setShowModal] = useState(false);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (

        <div className='flex'>

            <>
                <Row>
                    <Col span={2}>
                        <SideBar className='' />
                    </Col>
                </Row>


                <Layout style={{ height: '770px' }}>

                    <Layout className='flex flex-1'>

                        <Header title='Cài đặt' avatar={avatar} />
                            <div className='flex items-center'>
                        { menuSettings.map((settings) =>(
                            <div className='bg-white box-border h-68 w-520 p-4 border-2 m-5 '>
                                <div>
                                    <div className={cx('icon')}>
                                    </div>
                                    <div className='-mt-11 font-bold float-left ml-12' >
                                        {settings}
                                    </div>
                                    <hr className='bg-back mt-4 ml-5'></hr>
                                </div>
                                <div>

                                    <div className='mt-6'>
                                        <span className='float-left ml-10 font-medium'>
                                            Thông báo
                                        </span>
                                        <span className='float-right mr-3'>
                                            <Switch size="small" defaultChecked onChange={onChange} />
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-20'>
                                    <div className='mt-6'>
                                        <span className='float-left ml-10 font-medium mt-3'>
                                            Thời gian cảnh báo
                                        </span>
                                        <span className='bg-white box-border w-64 p-4 border-2 float-right'>
                                            <span className='font-semibold float-left'> 10 </span>
                                            <span className='opacity-50 float-right'> ngày </span>

                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            
                            ))}
                            </div>


                    </Layout>
                </Layout>
            </>

        </div>
    );
}






export default Setting;
