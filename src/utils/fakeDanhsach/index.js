import { AndroidOutlined, BarChartOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useState } from 'react';


const columns7 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Má số',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Người kiểm',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Người xác nhận',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Kho',
        dataIndex: 'receive',
        key: 'address',
    },
    {
        title: 'SLSP thay đổi',
        dataIndex: 'bill',
        key: 'address',
    },
    {
        title: 'Ngày kiểm',
        dataIndex: 'bill',
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
const array7 = [
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
const data7 = [
    {
        key: '1',
        name: '1',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '2',
        name: '2',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '3',
        name: '3',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '4',
        name: '4',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '5',
        name: '5',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '6',
        name: '6',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý',
        receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },
    {
        key: '7',
        name: '7',
        age: 'Kho 01 Hà Đông - Hà Nội',
        address: 'Thép Việt Pháp Hình chữ U',
        tags: 'PN001',
        date: 'Cty TNHH Thép Việt Ý', receive: 'Kho',
        bill: 'HD002',
        createdate: '27/06/2022'
    },


];
export { data7, columns7 };

