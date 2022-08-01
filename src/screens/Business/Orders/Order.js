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


import styles from './Order.module.scss';

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
        title: 'Phụ trách kinh doanh',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Ưu tiên',
        dataIndex: 'priority',
        key: 'address',
    },
    {
        title: 'Hạn giao hàng',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EyeOutlined className='p-1 rounded-full bg-orange-400 text-white' />
                <EditOutlined className='p-1 rounded-full bg-green-600 text-white' />
                <DeleteOutlined className='p-1 rounded-full bg-red-600 text-white' />
            </Space>
        ),
    },
];

const data0 = [
    {
        key: '1',
        name: '1',
        age: 'DH003',
        priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Phạm Mĩ Tâm',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '2',
        name: '2',
        age: 'DH003',
        priority: <div className={styles.priority1}> Ưu tiên</div>,
        address: 'Phan Đức Mạnh',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '3',
        name: '3',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Hồ Tấn Tài',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '4',
        name: '4',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Thế Nghĩa',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '5',
        name: '5',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Việt Thắng',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '6',
        name: '6',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Nguyễn Thị Anh',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '7',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'La Văn Đức',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '8',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '9',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },
    {
        key: '8',
        name: '10',
        age: 'DH003', priority: <div className={styles.priority}>Không ưu tiên</div>,
        address: 'Đùng Văn Phá',
        tags: 'Kinh doanh',
        date: '28/06/2022',
        phone: '27/4/2022'
    },



];

const Order = () => {

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



                        <Header title='Đơn đặt hàng' avatar={avatar} />

                        <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>




                            <SearchBox title={'Người tạo'} small ></SearchBox>

                            <SearchBox title={'Từ ngày                       --->                    Đến ngày '} large></SearchBox>




                            <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>

                            <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo đơn mới</Button>




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








export default Order;
