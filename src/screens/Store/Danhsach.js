import { PlusOutlined, SearchOutlined, PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Layout, Modal, Radio, Table } from 'antd';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { columns7, data7 } from '../../utils/fakeDanhsach';
import { array3, columns3, data3 } from '../../utils/fakeData';
import styles from './Store.module.scss'

const { Content, Footer } = Layout;

const Danhsach = () => {
    const [showModal, setShowModal] = useState(false);
    function handleChange() {
        setShowModal(!showModal);
    }
    const [showModal1, setShowModal1] = useState(false);
    function handleChange1() {
        setShowModal1(!showModal1);
    }
    const [show, setShow] = useState(false);


    return (
        <>
            <Layout style={{ height: '700px' }}>
                <SideBar array={array3} />
                <Layout className='flex flex-1'>

                    <Header title='Danh sách kiểm kê' avatar={avatar} />
                    <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>


                        <SearchBox title={'Mã hàng'} small ></SearchBox>
                        <SearchBox title={'Tên hàng'} large></SearchBox>

                        <Button secondary leftIcon={<SearchOutlined />} onClick={handleChange1}> Tìm kiếm</Button>
                        <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo kiểm kê</Button>



                    </Content>

                    {showModal && <Modals
                        title={'Chọn hóa đơn '}
                        input={[]}
                        messenge={'Vui lòng chọn tùy chọn trước khi tạo mới đơn hàng'}
                        content={['Nhập kho mà không cần hóa đơn mua', ' Nhập kho theo hóa đơn']}
                        buttonContent={['Hủy', 'Xóa']}>
                    </Modals>

                    }
                    {showModal1 && <Modal
                        title={'Xóa phiếu kiểm kê '}
                        input={[]}
                        messenge={'Bạn có chắc chắn muốn xóa kiểm kê KK001 này?'}
                        content={[]}
                        buttonContent={['Hủy', 'Xóa']}>
                    </Modal>

                    }



                    <Content style={{ marginBottom: '400px' }}>
                        <div className="" style={{ padding: 24, height: '500px' }}>
                            <Table columns={columns7} dataSource={data7} />
                        </div>
                    </Content>
                    <span className={styles.product}> Có <span className={styles.number}>15</span> sản phẩm</span>





                </Layout>
            </Layout>
        </>
    );
}






export default Danhsach;
