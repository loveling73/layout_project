import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Layout, Row, Space, Table } from 'antd';
import React, { useState } from 'react';

import avatar from '../../../assets/image/avatar.jpg';

import Button from '../../../components/Button/Button';

import Header from '../../../components/Header/Header';

import Modals from '../../../components/Modals/Modals';

import SearchBox from '../../../components/SearchBox/SearchBox';

import SideBar from '../../../components/SideBar/SideBar';


import styles from './Seller.module.scss';

import classNames from 'classnames';


const { Content, Footer } = Layout;

const columns0 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Mã đơn hàng',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Khách hàng',
        dataIndex: 'address',
        key: 'address',
    },

    {
        title: 'Ưu tiên',
        dataIndex: 'priority',
        key: 'address',
    },
    {
        title: 'Trạng thái thanh toán',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: ' Thời hạn thanh toán',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: ' Hạn giao hàng',
        dataIndex: 'deadline',
        key: 'address',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'phone',
        key: 'phone',
    },

];

const data0 = [
    {
        key: '1',
        name: '1',
        age: 'DH003',
        priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Phạm Mĩ Tâm',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '2',
        name: '2',
        age: 'DH003',
        priority: <div className={styles.priority}> Không Ưu tiên</div>,
        address: 'Phan Đức Mạnh',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '3',
        name: '3',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Hồ Tấn Tài',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '4',
        name: '4',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Thế Nghĩa',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '5',
        name: '5',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Việt Thắng',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '6',
        name: '6',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Thị Anh',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '7',
        name: '7',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'La Văn Đức',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '7',
        name: '8',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '7',
        name: '9',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },
    {
        key: '8',
        name: '10',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: <div className={styles.priority1}> Đã thanh toán</div>,
        deadline: '30/6/2022',
        date: '30/6/2022',
        phone: '25/6/2022'
    },



];

const Seller1 = () => {

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



                        <Header title='Đơn bán hàng ' avatar={avatar} />

                        <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>



                            <SearchBox title={'Chọn trạng thái thanh toán'} small ></SearchBox>
                            <SearchBox title={'Khách hàng'} small ></SearchBox>

                            <SearchBox title={'Từ ngày                       --->                    Đến ngày '} large></SearchBox>




                            <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>

                            {/* <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo đơn mới</Button> */}




                        </Content>



                        {showModal && <Modals
                            type={'primary'}

                            title={'Tạo đơn bán hàng'}

                            select

                            input={[]}

                            messenge={'Vui lòng chọn tùy chọn trước khi tạo mới đơn bán hàng'}

                            content={['Không sử dụng mẫu báo giá ', 'Sử dụng mẫu báo giá']}

                            buttonContent={['Hủy', 'Tiếp tục']}>

                        </Modals>

                        }

                        {showModal1 && <Modals

                            type={'primary'}

                            title={'Xóa sản phẩm'}

                            input={[]}

                            messenge={'Bạn có thực sự muốn hủy xóa sản phẩm này không ?'}

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








export default Seller1;
