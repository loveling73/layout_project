import { BellOutlined, DownOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Image,Layout} from 'antd';
import React from 'react';
import avatar from '../../assets/image/avatar.jpg';
const { Header, Content, Footer } = Layout;


const HeaderMain = () => (
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

);

export default HeaderMain;