import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Layout, Row, Space, Table } from 'antd';
import React, { useState } from 'react';

import avatar from '../../assets/image/avatar.jpg';

import Button from '../../components/Button/Button';

import Header from '../../components/Header/Header';

import Modals from '../../components/Modals/Modals';

import SearchBox from '../../components/SearchBox/SearchBox';

import SideBar from '../../components/SideBar/SideBar';


import styles from './Staff.module.scss';

import classNames from 'classnames';


const { Content, Footer } = Layout;

const columns0 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Tên nhân viên',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Email',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Số điện thoại',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'address',
    },
    {
        title: 'Kho',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'priority',
        key: 'phone',
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
                <EyeOutlined className='p-3 rounded-full bg-orange-400 text-white' />
                <EditOutlined className='p-3 rounded-full bg-green-600 text-white' />
                <DeleteOutlined className='p-3 rounded-full bg-red-600 text-white' />
            </Space>
        ),
    },
];

const data0 = [
    {
        key: '1',
        name: '1',
        age: 'Ngô Hòa Thái',
        priority: <div className={styles.priority}>Hoạt động</div>,
        address: 'thainh@gmail.com',
        role: 'Quản trị viên',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '2',
        name: '2',
        age: 'Ngô Hòa Thái',
        role: 'Quản trị viên',
        priority: <div className={styles.priority1}> Đã khóa</div>,
        address: 'thainh@gmail.comn',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '3',
        name: '3',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '4',
        name: '4',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '5',
        name: '5',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '6',
        name: '6',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '7',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '8',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        role: 'Quản trị viên',
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '7',
        name: '9',
        role: 'Quản trị viên',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority1}>Đã khóa</div>,
        address: 'thainh@gmail.com',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },
    {
        key: '8',
        name: '10',
        age: 'Ngô Hòa Thái', priority: <div className={styles.priority}>Hoạt động</div>,
        address: 'thainh@gmail.com',
        role: 'Quản trị viên',
        tags: '0338622864',
        date: 'Tổng kho số 1 Hà Nội',
        phone: '27/4/2022'
    },



];


const Staff = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(true);
    function handleChange() {

        setShowModal(!showModal);

    }
    function handleXoa() {
        setShowModal1(!showModal1);
    }
    function handleView() {
        setShowModal2(!showModal2)
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



                        <Header title='Nhân viên ' avatar={avatar} />

                        <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>




                            <SearchBox title={'Nhân viên'} tiny ></SearchBox>
                            <SearchBox title={'Số điện thoại'} tiny ></SearchBox>
                            <SearchBox title={'Email'} tiny ></SearchBox>
                            <SearchBox title={'Vai trò'} tiny style={{ marginRight: '5px' }}></SearchBox>


                            {/* <SearchBox title={'Từ ngày                       --->                    Đến ngày '} large></SearchBox> */}




                            <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>

                            <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo đơn mới</Button>




                        </Content>


                        {showModal2 && <Modals
                            type={'primary'}

                            title={'Chi tiết nhân viên'}

                            detail
                            info={{ 'Tên đăng nhập': 'kinhdoanh', 'Họ và tên': 'Nguyễn Văn A', 'Số điện thoại': '0987654321', 'Email': 'manhkuppj008@gmail.com', 'Vai trò ': 'Kế toán', 'Ngày tạo': '30-6-2022', 'Trạng thái': 'Hoạt động' }}
                            mes={''}

                            input={[]}

                            messenge={''}

                            content={[]}

                            buttonContent={['Đóng']}>

                        </Modals>

                        }
                        {showModal && <Modals
                            type={'primary'}

                            title={'Tạo mới nhân viên'}

                            select
                            mes={'Chọn vai trò'}

                            input={['Tên đăng nhập', 'Mật khẩu', 'Họ và Tên', 'Số điện thoại', 'Email']}

                            messenge={''}

                            content={[]}

                            buttonContent={['Hủy', 'Tạo']}>

                        </Modals>

                        }

                        {showModal1 && <Modals

                            type={'primary'}

                            title={'Xóa nhân viên'}

                            input={[]}

                            messenge={'Bạn có thực sự muốn  xóa nhân viên này không ?'}

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








export default Staff;
