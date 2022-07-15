import { BellOutlined, DeleteOutlined, DownOutlined, EditOutlined, EyeOutlined, MenuFoldOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Image, Input, Layout, Space, Table, Tag } from 'antd';
import React from 'react';
import avatar from '../../assets/image/avatar.jpg';
import { arrayitems, data, columns } from '../../auth/utils/fakeData';
import SideBar from '../SideBar/SideBar';
import "./index.css";
const { Header, Content, Footer } = Layout;


const Product = () => (
    <>
        <Layout style={{ height: '100vh' }}>
            <SideBar array={arrayitems} />
            <Layout className='flex flex-1'>

                <Header className="site-layout-sub-header-background" style={{ padding: 0, height: 130 }}>
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/4 mx-4 my-3 flex align-center items-center">

                            <MenuFoldOutlined style={{ fontSize: '25px' }} className="mx-2 my-3" />
                            <span className="mx-2" style={{ fontSize: '20px', fontWeight: 800 }}>Danh sách sản phẩm</span>
                        </div>

                        <div className="basis-1/4 mx-4 my-3 flex items-center content-end "  >
                            <BellOutlined style={{ fontSize: '25px' }} className="mx-5 my-3 " />
                            <Image
                                className='rounded-full'
                                preview={{ visible: false }}
                                width={40}
                                src={avatar}

                            />
                            <span className="grid grid-cols-1 mx-5">
                                <span style={{ fontSize: '13px' }}>Phan Đức Mạnh</span>
                                <span style={{ fontSize: '10px' }}>Quản trị viên</span>

                            </span>
                            <span><DownOutlined /></span>
                        </div>

                    </div>
                </Header>
                <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px' }}>

                    <Input placeholder="Mã Hàng" style={{ width: 280, height: 50, marginLeft: '10px' }} />
                    <Input placeholder="Tên Hàng" style={{ width: 550, height: 50, marginLeft: '30px' }} />
                    <Button type="primary flex justify-center items-center" className=' bg-slate-700' style={{ width: 260, height: 50, marginLeft: '10px' }}> <SearchOutlined /><span>Tìm Kiếm</span></Button>
                    <Button type="primary flex justify-center items-center" className='bg-blue-700' style={{ width: 260, height: 50, marginLeft: '10px' }}><PlusOutlined /> <span>Tạo sản phẩm</span></Button>


                </Content>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background overflow-auto flex-shrink-0" style={{ padding: 24, height: '500px' }}>
                        <Table columns={columns} dataSource={data} />;
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}> ManhPD12 </Footer>


            </Layout>
        </Layout>
    </>
);

export default Product;
