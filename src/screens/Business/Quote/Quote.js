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

import styles from './Quote.module.scss';

import classNames from 'classnames'


const { Content, Footer } = Layout;



const Quote = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    function handleChange() {

        setShowModal(!showModal);

    }
    function handleXoa() {
        setShowModal1(!showModal1);
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



                        <Header title='Báo giá' avatar={avatar} />

                        <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>




                            <SearchBox title={'Người tạo'} small ></SearchBox>

                            <SearchBox title={'Từ ngày                       --->                    Đến ngày '} large></SearchBox>




                            <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>

                            <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo báo giá</Button>




                        </Content>



                        {showModal && <Modals
                            type={'primary'}

                            title={'Thêm thông tin sản phẩm'}

                            input={['Mã hàng', 'Tên hàng hóa', ' Đơn vị tính ', 'Số lượng', 'Khối lượng (Kg) ', 'Đơn giá (VND)']}

                            messenge={''}

                            content={[]}

                            buttonContent={['Hủy', 'Tạo']}>

                        </Modals>

                        }

                        {showModal1 && <Modals

                            type={'primary'}

                            title={'Húy báo giá'}

                            input={[]}

                            messenge={'Bạn có thực sự muốn hủy tạo mới báo giá này không?'}

                            content={[]}

                            buttonContent={['Hủy', 'Đồng ý']}>

                        </Modals>

                        }


                        <Content  >

                            <div style={{ padding: 24 }} className={styles.content} onClick={handleXoa}>

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








export default Quote;
