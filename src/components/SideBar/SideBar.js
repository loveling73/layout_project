import { Col, Image, Layout, Menu, Row } from 'antd';
import { ShopOutlined ,BarChartOutlined, RestOutlined,UserOutlined,RiseOutlined,FileDoneOutlined,SettingOutlined,ReconciliationOutlined} from '@ant-design/icons';

import React from 'react';

const { Sider } = Layout;

const item = [
    getItem('Tổng quan', '1', <BarChartOutlined />),
    getItem('Kho', '2', <ShopOutlined />, 
        [   
            getItem('Danh mục kho', '3'),
            getItem('Xuất kho', '4'),
            getItem('Nhập kho', '5'),
            getItem('Kiểm kê', '6')
        ]),
    getItem('Sản phẩm', '7', <RestOutlined />),
    getItem('Kinh doanh', '8', <RiseOutlined />,
        [
            getItem('Khách hàng', '9'),
            getItem('Báo giá', '10'),
            getItem('Đơn đặt hàng', '11'),
            getItem('Đơn bán hàng', '12'),
        ]),
    
    getItem('Kế toán', '13', <FileDoneOutlined />,
        [
        getItem('Phiếu thu', '14'),
        getItem('Phiếu chi', '15'),]),

    getItem('Báo cáo', '16', <ReconciliationOutlined />,
        [   
            getItem('Đơn bán hàng', '17'),
            getItem('Đơn đặt hàng', '18'),
            getItem('Nợ công đơn hàng', '19'),
            getItem('Đơn bán hàng', '20'),
        ]),
    getItem('Nhân viên', '21', <UserOutlined />),
    getItem('Cài đặt', '22', <SettingOutlined />),
    ]

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

function SideBar(props) {
    return (
        <>
            <Sider

                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Row>
                    <Col span={1}>
                        <Image className='rounded-full mt-3'
                            preview={{ visible: false }}
                            width={40}
                            src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/282647232_3372145673013688_1051696226724793886_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=afQt19GgwJ4AX_-egDC&_nc_ht=scontent.fhan3-1.fna&oh=00_AT_vN3BSoIL8KgPZL6enPTcEqgRkH2FsEo7hkL6Bps-YgA&oe=62D5D37C"

                        /></Col>
                    <Col span={12} push={6}>
                        <h1 className="text-stone-300 pt-5"> Đức Mạnh </h1>

                    </Col>


                </Row>
                <Menu
                    className='sidebar'
                    theme="dark"
                    mode="inline"
                    items={item}
                        
                />
            </Sider>
        </>
    );
}

export default SideBar;