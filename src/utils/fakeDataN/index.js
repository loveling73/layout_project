import { EyeOutlined, AndroidOutlined, BarChartOutlined, BellOutlined, DownOutlined, MenuFoldOutlined, SearchOutlined, DeleteOutlined, EditOutlined, FolderViewOutlined, PlusOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Space, Tag } from 'antd'


const data1 = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['Đang hoạt động'],
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
        tags: ['Đang hoạt động'],
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
        dataIndex: 'age',
        key: 'age',

    },
    {
        title: 'Mã kho',
        dataIndex: 'name',
        key: 'name',
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
                    let color = 'green';

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
        title: 'Thao tác',
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
        dataIndex: 'age',
        key: 'age',

    },
    {
        title: 'Mã hàng',
        dataIndex: 'name',
        key: 'name',
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
        icon: AndroidOutlined,
        tag: "overall"
    },
    {
        label: 'Kho',
        icon: BarChartOutlined,
        tag: "depots"
    },
    {
        label: 'Sản phẩm',
        icon: SlidersOutlined,
        tag: "products"
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

export { arrayitems, data1,data2, columns1, columns2 };
