import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import styles from './Modals.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Modals = ({ title, input }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>

      <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className={cx('icon')}></div>
        {input.map((item) => (
          <>
            <p>{item}</p>
            <Input className="" size="large" placeholder={item} />
          </>
        ))}


      </Modal>
    </>
  );
};

export default Modals;