import { BellOutlined, DownOutlined, MenuFoldOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Image, Input, Layout, Table } from 'antd';
import React from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Modals from '../../components/Modals';
import SideBar from '../../components/SideBar/SideBar';
import { arrayitems, columns, data } from '../../utils/fakeDataM';
import "./index.css";
const { Header, Content, Footer } = Layout;


const Product = () => (
    <>
        <Layout style={{ height: '770px' }}>
            <SideBar array={arrayitems} />
            <Layout className='flex flex-1'>

                <Header className="site-layout-sub-header-background" style={{ padding: 0, height: 130 }}>
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/4 mx-4 my-3 flex align-center items-center">

                            <MenuFoldOutlined style={{ fontSize: '25px' }} className="mx-2 my-3" />
                            <span className="mx-5" style={{ fontSize: '20px', fontWeight: 600 }}>Danh sách sản phẩm</span>
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
                <Modals 
                    title={'Tạo kho mới '} 
                    input={[
                        { name: 'Mã kho',
                          key: 'makho',
                          tag: 'impotant'  
                        },
                        { name: 'Tên kho',
                          key: 'makho',
                          tag: 'impotant'  
                        },
                        { name: 'don vi toih',
                          key: 'makho',
                          tag: 'noimpotant'  
                        },
                    ]} 
                        buttonContent={['Hủy','Tạo']}></Modals>
                <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>

                    <Input placeholder="Mã Hàng" style={{ width: 280, height: 50, marginLeft: '10px' }} />
                    <Input placeholder="Tên Hàng" style={{ width: 400, height: 50, marginLeft: '30px', marginRight: '40px' }} />
                    <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>
                    <Button primary leftIcon={<PlusOutlined />}> Tạo sản phẩm</Button>



                </Content>

                <Content style={{ marginBottom: '30px' }}>
                    <div className="site-layout-background  flex-shrink-0" style={{ padding: 24, height: '500px' }}>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center', marginTop: '100px' }} > ManhPD12 </Footer>


            </Layout>
        </Layout>
    </>
);

export default Product;
