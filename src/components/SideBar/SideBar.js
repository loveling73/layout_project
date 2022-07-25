import { Col, Image, Layout, Menu, Row } from 'antd';
import { ShopOutlined, BarChartOutlined, RestOutlined, UserOutlined, RiseOutlined, FileDoneOutlined, SettingOutlined, ReconciliationOutlined, DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import './index.css';


const { Sider } = Layout;

const Menus = [
    {
        tilte: 'Tổng quan',
        icon: BarChartOutlined,
        link: 'overall',
    },
    {
        tilte: 'Kho',
        icon: ShopOutlined,
        link: 'depots',
        submenu: true,
        submenuItems: [
            {
                tilte: 'Danh mục kho',
                link: 'depotslist',
            },
            { tilte: 'Xuất kho' },
            { tilte: 'Nhập kho' },
            { tilte: 'Kiểm kê' },
        ]
    },
    {
        tilte: 'Sản phẩm',
        icon: RestOutlined,
        link: 'products',

    },
    {
        tilte: 'Kinh doanh',
        icon: RiseOutlined,
        link: 'bussiness',
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
        icon: SettingOutlined,
        link: 'settings',

    },
]


function SideBar(props) {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    return (
        <>
            <div className="bg-dark-purple h-screen pt-8 w-96" >
                <Row>
                    <Col span={2}>
                        <Image className='rounded-full mt-3'
                            preview={{ visible: false }}
                            width={40}
                            src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/282647232_3372145673013688_1051696226724793886_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=afQt19GgwJ4AX_-egDC&_nc_ht=scontent.fhan3-1.fna&oh=00_AT_vN3BSoIL8KgPZL6enPTcEqgRkH2FsEo7hkL6Bps-YgA&oe=62D5D37C"

                        />
                    </Col>
                    <Col span={12} push={6}>
                        <h1 className="text-stone-300 pt-5"> Đức Mạnh </h1>

                    </Col>
                </Row>
                <hr className=" mt-8"></hr>
                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className="relative text-gray-300 text-md flex item-center cursor-pointer gap-x-4 p-2 hover:bg-blue-white rounded-md mt-2">
                                <span className="block float-left"> {React.createElement(menu.icon)} </span>
                                <a href={menu.link}>
                                <span className="mt-1 font-medium "> {menu.tilte} </span>
                                </a>
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
                                                <span> <BsDot /> </span>
                                                <a href={submenuItems.link}>
                                                {submenuItems.tilte}
                                                </a>
                                            </li>
                                        </div>
                                    ))},
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