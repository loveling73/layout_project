import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Radio } from 'antd';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Modals.module.scss';

const cx = classNames.bind(styles);

const Modals = ({ title, messenge, input, content, buttonContent, add = false, type }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <Modal
        title={title}
        footer={null}
        visible={isModalVisible}
        onCancel={() => handleCancel()}>

        <div className={cx('messenge')}> {messenge} </div>

        <div className={cx('icon')}>
        </div>
        {input.map((item) => (
          <>
            <div className='mt-5'>{item}
              <span className={cx('a')}>*</span>
            </div>
            <Input className="" size="large" placeholder={item} />
          </>
        ))}


        {content.map((item, index) => (
          <div className="my-10">
            <Radio
              value={index}
            >
              {item}
            </Radio>
          </div>
        ))}

        {add && <div className={cx('add')}><PlusOutlined /> <div style={{ marginLeft: '15px' }}>Thêm tài khoản ngân hàng</div></div>}
        <div className={cx('buttons')}>
          <div className='flex justify-center items-center'>
            {buttonContent.map((item, index) => (
              <Button
                key={index}
                type={index < 1 ? "" : `${type}`}
                className={cx('action_btn')}
                onClick={() => handleClose()}
              >
                {item}
              </Button>
            ))}
          </div>

        </div>

      </Modal>
    </>
  );
};

export default Modals;