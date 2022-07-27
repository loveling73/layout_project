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
        title: 'Tên khách hàng',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tên hàng',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tài khoản Ngân hàng',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Mã số thuế',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Số điện thoại',
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
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '2',
        name: '2',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '3',
        name: '3',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '4',
        name: '4',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '5',
        name: '5',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '6',
        name: '6',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '7',
        name: '7',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '7',
        name: '7',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
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








export default Order;
