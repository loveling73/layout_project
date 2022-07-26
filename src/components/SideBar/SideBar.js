import { Col, Image, Layout, Menu, Row } from 'antd';
import { ShopOutlined, BarChartOutlined, RestOutlined, UserOutlined, RiseOutlined, FileDoneOutlined, SettingOutlined, ReconciliationOutlined, DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import avatar from '../../assets/image/avatar.jpg'
import classNamesBind from 'classnames/bind';
import classNames from 'classnames'
import styles from './SideBar.module.scss';

const { Sider } = Layout;
const cx = classNamesBind.bind(styles);

const Menus = [

    {
        tilte: 'Tổng quan',
        icon: BarChartOutlined
    },
    {
        tilte: 'Kho',
        icon: ShopOutlined,
        submenu: true,
        submenuItems: [
            { tilte: 'Danh mục kho' },
            { tilte: 'Xuất kho' },
            { tilte: 'Nhập kho' },
            { tilte: 'Kiểm kê' },
        ]
    },
    {
        tilte: 'Sản phẩm',
        icon: RestOutlined
    },
    {
        tilte: 'Kinh doanh',
        icon: RiseOutlined,
        submenu: true,
        submenuItems: [
            { tilte: 'Khách hàng' },
            { tilte: 'Báo giá' },
            { tilte: 'Đơn đặt hàng' },
            { tilte: 'Đơn bán hàng' },
        ]
    },
    {
        tilte: 'Kế toán',
        icon: FileDoneOutlined,
        submenu: true,
        submenuItems: [
            { tilte: 'Phiếu thu' },
            { tilte: 'Phiếu chi' },
        ]
    },
    {
        tilte: 'Báo cáo',
        icon: ReconciliationOutlined,
        submenu: true,
        submenuItems: [
            { tilte: 'Đơn bán hàng' },
            { tilte: 'Đơn đặt hàng' },
            { tilte: 'Nợ công đơn hàng' },
            { tilte: 'Nợ công khách hàng' },
        ]
    },
    {
        tilte: 'Nhân viên',
        icon: UserOutlined
    },
    {
        tilte: 'Cài đặt',
        icon: SettingOutlined
    },
]


function SideBar({

    small = false,
    large = false,


}) {
    const classes = cx('bg-dark-purple', {
        small,
        large,
    });
    const [submenuOpen, setSubmenuOpen] = useState(false);
    return (
        <>
            <div className={classNames('w-96', classes)} >
                <Row>
                    <Col span={1}>
                        <Image className='rounded-full mt-3'
                            preview={{ visible: false }}
                            width={40}
                            src={avatar}

                        />
                    </Col>
                    <Col span={12} push={6}>
                        <h1 className="text-stone-300 pt-5"> Đức Mạnh </h1>

                    </Col>
                </Row>
                <hr className="-mx-5 mt-8"></hr>
                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className="relative text-gray-300 text-md flex item-center cursor-pointer gap-x-4 p-2 hover:bg-blue-white rounded-md mt-2">
                                <span className="block float-left"> {React.createElement(menu.icon)} </span>
                                <span className="mt-1 font-medium "> {menu.tilte} </span>

                                {menu.submenu && (
                                    <div className="absolute inset-y-5 right-2">
                                        <AiOutlineDown className={`${submenuOpen && "rotate-180"}`} onClick={() =>
                                            setSubmenuOpen(!submenuOpen)} />
                                    </div>
                                )}
                            </li>
                            {menu.submenu && submenuOpen && (
                                <ul>
                                    {menu.submenuItems.map((submenuItems, index) => (
                                        <div className="">
                                            <li key={index} className="text-gray-300 text-base flex item-center cursor-pointer gap-x-4 p-2 hover:bg-blue-white rounded-md ml-2">
                                                <span > <BsDot></BsDot> </span>
                                                {submenuItems.tilte}
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}

                </ul>

            </div>
        </>
    );
}

export default SideBar;