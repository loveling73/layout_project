import { PlusOutlined, SearchOutlined, DownOutlined, UpOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { array3, columns3, data3 } from '../../utils/fakeData';
import styles from './listStore.module.scss'
import { Radio, Space, Table, Tag, Layout, Modal } from 'antd';
import { columns4, data4 } from '../../utils/fakeDanhmuc';

const { Content, Footer } = Layout;

const Danhmuc = () => {
    const [showModal, setShowModal] = useState(false);
    function handleChange() {
        setShowModal(!showModal);
    }
    function showDelete() {
        setShowModal1(!showModal1);
    }
    const [showModal1, setShowModal1] = useState(false);


    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'name',

        },
        {
            title: 'STT',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Mã kho',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tên kho',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'tags',
            key: 'address',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EyeOutlined className='p-1 rounded-full bg-orange-400 text-white' />
                    <EditOutlined className='p-1 rounded-full bg-green-600 text-white' />
                    <DeleteOutlined className='p-1 rounded-full bg-red-600 text-white' onClick={error} />
                </Space>
            ),
        },

    ];
    const data = [
        {
            key: <DownOutlined style={{ color: 'blue' }} />,
            name: '1',
            age: 'KH001HN',
            address: 'Kho 01 Hà Đông - Hà Nội',
            tags: <span className={styles.active}>Đang hoạt động</span>,
        },
        {
            key: <UpOutlined style={{ color: 'blue' }} />,
            name: '2',
            age: 'KH001HN',
            address: 'Kho 01 Hà Đông - Hà Nội',
            tags: <span className={styles.active}>Đang hoạt động</span>,
        },

    ];
    const error = () => {
        Modal.error({
            title: 'Xóa kho',
            content: 'Kho hàng có thể có các đơn nhận ,xuất hàng.Bạn có chắc chắn muốn xóa Kho 01 Hà Đông- Hà Nội này ?',
            okText: 'Xóa',
            cancelButtonProps: 'X'
        });
    };

    return (
        <>
            <Layout style={{ height: '930px' }}>
                <SideBar array={array3} />
                <Layout className='flex flex-1'>

                    <Header title='Danh mục kho' avatar={avatar} />
                    <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>


                        <SearchBox title={'Mã hàng'} small ></SearchBox>
                        <SearchBox title={'Tên hàng'} large></SearchBox>

                        <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>
                        <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo kho</Button>


                    </Content>
                    <span className={styles.notify}><PlusCircleOutlined />Thêm sản phẩm thành công <CloseOutlined /></span>

                    {showModal && <Modals
                        title={'Tạo kho mới '}
                        input={['Mã kho', ' Tên kho']}
                        messenge={''}
                        content={[]}
                        buttonContent={['Hủy', 'Tạo']}>
                    </Modals>
                    }



                    <Content style={{ marginBottom: '400px' }}>
                        <div className="" style={{ padding: 24, height: '500px' }}>
                            <Table columns={columns} dataSource={data} />
                            <Table columns={columns4} dataSource={data4} />
                        </div>
                        <span className={styles.product}> Có <span className={styles.number}>15</span> sản phẩm</span>

                    </Content>




                </Layout>

            </Layout>
        </>
    );
}






export default Danhmuc;
