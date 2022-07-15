import { EyeOutlined, AndroidOutlined, BarChartOutlined, BellOutlined, DownOutlined, MenuFoldOutlined, SearchOutlined, DeleteOutlined, EditOutlined, FolderViewOutlined, PlusOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Image, Layout, Menu, Row } from 'antd';
import React, { useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Button } from 'antd';
import { Input } from 'antd';
import { Space, Table, Tag, Modal } from 'antd'
import { data1, data2, columns1,columns2,arrayitems } from '../../utils/fakeDataN';


const { Header, Content, Footer, Sider } = Layout;


const Depot = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Layout  >

                <SideBar array={arrayitems}/>
                <Layout>

                    <Header className="site-layout-sub-header-background" style={{ padding: 0, height: 130 }}>
                        <div className="flex flex-row justify-between">
                            <div className="basis-1/4 mx-4 my-3 flex align-center items-center">

                                <MenuFoldOutlined style={{ fontSize: '25px' }} className="mx-2 my-3" />
                                <span className="mx-2" style={{ fontSize: '20px', fontWeight: 800 }}>Danh mục kho</span>
                            </div>

                            <div className="basis-1/4 mx-4 my-3 flex items-center content-end "  >
                                <BellOutlined style={{ fontSize: '25px' }} className="mx-5 my-3 " />
                                <Image
                                    className='rounded-full'
                                    preview={{ visible: false }}
                                    width={40}
                                    src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/282647232_3372145673013688_1051696226724793886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ob5SjNyO1IkAX8fhZE3&_nc_ht=scontent.fhan5-2.fna&oh=00_AT-4jZ0kvmaR7n_rvfZ2s_CpESwaE2ivlIF7zoV34zrN7w&oe=62C9FE7A"

                                />
                                <span className="grid grid-cols-1 mx-5">
                                    <span style={{ fontSize: '13px' }}>Nguyễn Thế Nghĩa</span>
                                    <span style={{ fontSize: '10px' }}>Quản trị viên</span>

                                </span>
                                <span><DownOutlined /></span>
                            </div>

                        </div>
                    </Header>
                    <Content className="flex align-center items-center" style={{ padding: 0, height: 40, marginTop: '15px' }}>

                        <Input placeholder="Mã Hàng" style={{ width: 280, height: 50, marginLeft: '10px' }} />
                        <Input placeholder="Tên Hàng" style={{ width: 550, height: 50, marginLeft: '30px' }} />
                        <Button type="primary flex justify-center items-center" className=' bg-slate-700' style={{ width: 260, height: 50, marginLeft: '10px' }}> <SearchOutlined />
                            <span>Tìm Kiếm</span>
                        </Button>
                        <Button type="primary flex justify-center items-center" className='bg-blue-700' style={{ width: 260, height: 50, marginLeft: '10px' }} onClick={showModal}><PlusOutlined />
                            <span>Tạo sản phẩm</span>
                        </Button>
                        <Modal title="Tạo kho mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p>Mã kho</p>
                            <Input className="" size="large" placeholder="Mã kho" />
                            <p className="mt-5" >Tên kho</p>
                            <Input className="" size="large" placeholder="Tên kho" />
                        </Modal>

                    </Content>

                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Table columns={columns1} dataSource={data1} />;
                        </div>
                    </Content>

                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Table columns={columns2} dataSource={data2} />;
                        </div>
                    </Content>
                    <div> Có {data2.length} sản phẩm</div>

                    <Footer style={{ textAlign: 'center' }}> Nghiant36 </Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default Depot;
