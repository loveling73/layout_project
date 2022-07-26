import { AndroidOutlined, BarChartOutlined, DeleteOutlined, EditOutlined, EyeOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import React from 'react';
const columns0 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tên hàng',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tài khoản Ngân hàng',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Mã số thuế',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'date',
        key: 'address',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EyeOutlined className='p-1 rounded-full bg-orange-400 text-white' />
                <EditOutlined className='p-1 rounded-full bg-green-600 text-white' />
                <DeleteOutlined className='p-1 rounded-full bg-red-600 text-white' />
            </Space>
        ),
    },
];

const data0 = [
    {
        key: '1',
        name: '1',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '2',
        name: '2',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '3',
        name: '3',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '4',
        name: '4',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '5',
        name: '5',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '6',
        name: '6',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '7',
        name: '7',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },
    {
        key: '7',
        name: '7',
        age: 'Thép Anh Khoa',
        address: '092335442365 - Thép Anh Khoa - Ngâ..',
        tags: '+84 889 988 123',
        date: 'thepanhkhoa124@gmail.com',
        phone: '+84 667 778 889'
    },


];
export { data0, columns0 };
