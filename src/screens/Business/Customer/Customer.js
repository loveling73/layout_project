import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { Col, Layout, Row, Table } from 'antd';

import React, { useState } from 'react';

import avatar from '../../../assets/image/avatar.jpg';

import Button from '../../../components/Button/Button';

import Header from '../../../components/Header/Header';

import Modals from '../../../components/Modals/Modals';

import SearchBox from '../../../components/SearchBox/SearchBox';

import SideBar from '../../../components/SideBar/SideBar';

import { columns0, data0 } from '../../../utils/fakeDataCustomer';

import styles from './Customer.module.scss';

import classNames from 'classnames'


const { Content, Footer } = Layout;



const Customer = () => {

    const [showModal, setShowModal] = useState(false);

    function handleChange() {

        setShowModal(!showModal);

    }



    return (



        <div className='flex'>



            <>

                <Row>

                    <Col span={2}>

                        <SideBar small />

                    </Col>



                </Row>




                <Layout >



                    <Layout className={classNames('flex flex-1')} >



                        <Header title='Khách Hàng' avatar={avatar} />

                        <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>




                            <SearchBox title={'Mã hàng'} small ></SearchBox>

                            <SearchBox title={'Tên hàng'} large></SearchBox>



                            <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>

                            <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo sản phẩm</Button>




                        </Content>



                        {showModal && <Modals

                            title={'Tạo sản phẩm'}

                            input={['Mã hàng', 'Tên hàng', ' Xuất sứ ', 'Đơn vị']}

                            messenge={''}

                            content={[]}

                            buttonContent={['Tạo']}>

                        </Modals>

                        }



                        <Content  >

                            <div style={{ padding: 24 }} className={styles.content}>

                                <Table columns={columns0} dataSource={data0} />
                                <div className={styles.product}> Có <span className={styles.number}>15</span> sản phẩm</div>

                            </div>


                        </Content>






                    </Layout>


                </Layout>


            </>



        </div>

    );

}








export default Customer;
