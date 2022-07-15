import { Button, Modal,Input } from 'antd';
import React, { useState } from 'react';


const NewModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Tạo kho mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Mã kho</p>
        <Input className="" size="large" placeholder="Mã kho" />   
        <p className="mt-5" >Tên kho</p>
        <Input className="" size="large" placeholder="Tên kho" />   
      </Modal>
    </>
  );
};

export default NewModal;