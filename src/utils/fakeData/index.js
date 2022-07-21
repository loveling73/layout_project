import { AndroidOutlined, BarChartOutlined, PieChartOutlined, SlidersOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const columns3 = [
    {
        title: 'STT',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Kho hàng',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Mã phiếu nhập',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Khách hàng',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Người nhận',
        dataIndex: 'receive',
        key: 'address',
    },
    {
        title: 'Hóa đơn',
        dataIndex: 'bill',
        key: 'address',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdate',
        key: 'address',
    },

];
const array3 = [
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
const data3 = [
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
export { array3, data3, columns3 };

