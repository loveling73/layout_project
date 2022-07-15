import { EyeOutlined, AndroidOutlined, BarChartOutlined, BellOutlined, DownOutlined, MenuFoldOutlined, SearchOutlined, DeleteOutlined, EditOutlined, FolderViewOutlined, PlusOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Image, Layout, Menu, Row } from 'antd';
import React, { useState } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { Space, Table, Tag, Modal } from 'antd'



const { Header, Content, Footer, Sider } = Layout;

const data1 = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['Đang hoạt động', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['Đang hoạt động'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['Không hoạt động',],
    },
];

const data2 = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },

];
const columns1 = [
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
        title: 'Trạng Thái',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    if (tag === 'Không hoạt động') {
                        color = 'volcano';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        ttitle: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EyeOutlined className='p-1 rounded-full bg-orange-700/70 text-white' />
                <EditOutlined className='p-1 rounded-full bg-green-700/70 text-white' />
                <DeleteOutlined className='p-1 rounded-full bg-red-700/70 text-white' />
            </Space>
        ),
    }
];

const columns2 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Mã hàng',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tên hàng',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Đơn vị',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
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
            </>
        ),
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EyeOutlined className='p-1 rounded-full bg-orange-700/70 text-white' />
                <EditOutlined className='p-1 rounded-full bg-green-700/70 text-white' />
                <DeleteOutlined className='p-1 rounded-full bg-red-700/70 text-white' />
            </Space>
        ),
    },
];

const arrayitems = [
    {
        label: 'Tổng quan',
        icon: AndroidOutlined
    },
    {
        label: 'Kho',
        icon: BarChartOutlined
    },
    {
        label: 'Sản phẩm',
        icon: SlidersOutlined
    },
    {
        label: 'Kinh doanh',
        icon: PieChartOutlined
    }, {
        label: 'Nhân viên',
        icon: UploadOutlined
    }, {
        label: 'Báo cáo',
        icon: UserOutlined
    }, {
        label: 'Bảo quản',
        icon: VideoCameraOutlined
    },
]

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

                <Sider
                    onChange={(affixed) => console.log(affixed)}
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
                        <Col span={12} push={6}>
                            <h1 className="text-stone-300 pt-5"> Nghĩa </h1>

                        </Col>
                        <Col span={12} pull={18}>
                            <Image
                                preview={{ visible: false }}
                                width={40}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"

                            />
                        </Col>
                    </Row>
                    <Menu
                        className='sidebar'
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['8']}
                        items={arrayitems.map(
                            (item, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(item.icon),
                                label: item.label,
                            }),
                        )}
                    />
                </Sider>
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
