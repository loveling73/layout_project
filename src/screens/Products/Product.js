import { BellOutlined, DownOutlined, MenuFoldOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Image, Input, Layout, Table, Row, Col } from 'antd';
import React, { useState } from 'react';
import avatar from '../../assets/image/avatar.jpg';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Modals from '../../components/Modals';
import SearchBox from '../../components/SearchBox/SearchBox';
import SideBar from '../../components/SideBar/SideBar';
import { arrayitems, columns, data } from '../../utils/fakeDataM';
import "./index.css";

const { Content, Footer } = Layout;

const Product = () => {
    const [showModal, setShowModal] = useState(false);
    function handleChange() {
        setShowModal(!showModal);
    }

    return (
        
        <div className='flex'>

      <>
            <Row>
                <Col span={2}>
                    <SideBar className='' />
                </Col>
            </Row> 


            <Layout style={{ height: '770px' }}>
              
                <Layout className='flex flex-1'>

                    <Header title='Danh sách sản phẩm' avatar={avatar} />
                    <Content className="flex align-center items-centent " style={{ padding: 0, height: 40, marginTop: '15px', marginBottom: '50px' }}>


                        <SearchBox title={'Mã hàng'} small ></SearchBox>
                        <SearchBox title={'Tên hàng'} large></SearchBox>

                        <Button secondary leftIcon={<SearchOutlined />}> Tìm kiếm</Button>
                        <Button primary leftIcon={<PlusOutlined />} onClick={handleChange}> Tạo sản phẩm</Button>


                    </Content>

                    {showModal && <Modals
                        title={'Tạo sản phẩm'}
                        input={['Mã hàng', 'Tên hàng', ' Xuất sứ ', 'Đơn vị']}
                        messenge={''}
                        content={[]}
                        buttonContent={['Tạo']}>
                    </Modals>
                    }

                    <Content style={{ marginBottom: '400px' }}>
                        <div className="" style={{ padding: 24, height: '500px' }}>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </Content>




                </Layout>
            </Layout>
                    </>
    
     </div>
    );
}






export default Product;
