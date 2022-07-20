import { Col, Image, Layout, Menu, Row } from 'antd';
import React from 'react';
const { Sider } = Layout;


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
                    defaultSelectedKeys={['8']}
                    items={props.array.map(
                        (item, index, tag) => ({
                            key: String(index + 1),
                            icon: React.createElement(item.icon),
                            label: item.label,

                        }),
                    )}

                />
            </Sider>
        </>
    );
}

export default SideBar;