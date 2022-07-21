import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Radio, Table } from 'antd';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { array3, columns3, data3 } from '../../utils/fakeData';
import styles from './Store.module.scss'

const { Content, Footer } = Layout;

const Store = () => {
    const [showModal, setShowModal] = useState(false);
    function handleChange() {
        setShowModal(!showModal);
    }

    return (
        <>
            <Layout style={{ height: '700px' }}>
                <SideBar array={array3} />
                <Layout className='flex flex-1'>

                    <Header title='Nhập Kho' avatar={avatar} />
                    <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>


                        <SearchBox title={'Mã hàng'} small ></SearchBox>
                        <SearchBox title={'Tên hàng'} large></SearchBox>

                        <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>
                        <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo phiếu nhập</Button>


                    </Content>

                    {showModal && <Modals
                        title={'Chọn hóa đơn '}
                        input={[]}
                        messenge={'Vui lòng chọn tùy chọn trước khi tạo mới đơn hàng'}
                        content={['Nhập kho mà không cần hóa đơn mua', ' Nhập kho theo hóa đơn']}
                        buttonContent={['Hủy', 'Tạo']}>
                    </Modals>
                    }


                    <Content style={{ marginBottom: '400px' }}>
                        <div className="" style={{ padding: 24, height: '500px' }}>
                            <Table columns={columns3} dataSource={data3} />
                        </div>
                    </Content>
                    <span className={styles.product}> Có <span className={styles.number}>15</span> sản phẩm</span>




                </Layout>
            </Layout>
        </>
    );
}






export default Store;
