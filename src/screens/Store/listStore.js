import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { array3, columns3, data3 } from '../../utils/fakeData';
import styles from './Store.module.scss'
import { Radio, Space, Table, Tag, Layout } from 'antd';

const { Content, Footer } = Layout;

const Danhmuc = () => {
    const [showModal, setShowModal] = useState(false);
    function handleChange() {
        setShowModal(!showModal);
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'name',
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
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Thao tác',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags) => (
                <span>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';

                        if (tag === 'loser') {
                            color = 'volcano';
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: '1',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: '2',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },

    ];

    return (
        <>
            <Layout style={{ height: '700px' }}>
                <SideBar array={array3} />
                <Layout className='flex flex-1'>

                    <Header title='Danh mục kho' avatar={avatar} />
                    <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>


                        <SearchBox title={'Mã hàng'} small ></SearchBox>
                        <SearchBox title={'Tên hàng'} large></SearchBox>

                        <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>
                        <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo kho</Button>


                    </Content>

                    {showModal && <Modals
                        title={'Chọn hóa đơn '}
                        input={[]}
                        messenge={'Vui lòng chọn tùy chọn trước khi tạo mới đơn hàng'}
                        content={['Nhập kho mà không cần hóa đơn mua', ' Nhập kho theo hóa đơn']}
                        buttonContent={['Hủy', 'Tạo']}>
                    </Modals>
                    }


                    <Content style={{ marginBottom: '400px' }}>
                        <div className="" style={{ padding: 24, height: '500px' }}>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </Content>
                    <span className={styles.product}> Có <span className={styles.number}>15</span> sản phẩm</span>




                </Layout>
            </Layout>
        </>
    );
}






export default Danhmuc;
