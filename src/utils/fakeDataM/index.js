import { AndroidOutlined, BarChartOutlined, DeleteOutlined, EditOutlined, EyeOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import React from 'react';
const columns = [
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

    },
    {
        title: 'Ngày tạo',
        dataIndex: 'date',
        key: 'address',
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
const arrayitems = [
    {
        label: 'Tổng quan',
        icon: AndroidOutlined,
        tag: 'overall'
    },
    {
        label: 'Kho',
        icon: BarChartOutlined
        , tag: 'overall'
    },
    {
        label: 'Sản phẩm',
        icon: SlidersOutlined,
        tag: 'overall'
    },
    {
        label: 'Kinh doanh',
        icon: PieChartOutlined,
        tag: 'overall'
    }, {
        label: 'Nhân viên',
        icon: UploadOutlined,
        tag: 'overall'
    }, {
        label: 'Báo cáo',
        icon: UserOutlined,
        tag: 'overall'
    }, {
        label: 'Bảo quản',
        icon: VideoCameraOutlined,
        tag: 'overall'
    },
]
const data = [
    {
        key: '1',
        name: '1',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '2',
        name: '2',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '3',
        name: '3',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '4',
        name: '4',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '5',
        name: '5',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '6',
        name: '6',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },
    {
        key: '7',
        name: '7',
        age: 'T001',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'Cây',
        date: '27/06/2022 22:15:30'
    },


];
export { arrayitems, data, columns };
