import { Input, Modal,Button, Radio } from 'antd';
import React, { useState } from 'react';
import styles from './Modals.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Modals = ({ title, messenge , input,  content ,buttonContent }) => {

  const [isModalVisible, setIsModalVisible] = useState(true);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

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
        footer = {null} 
        visible={isModalVisible} 
        onCancel={() => handleCancel()}>     
               
        <div className={cx('messenge')}> {messenge} </div>

        <div className={cx('icon')}>
          {input.map((item) => (
            <>
              <div className='mt-5'>{item} 
                <span className={cx('a')}>*</span>
              </div>
              <Input className="" size="large" placeholder={item} />
            </>
          ))}
        </div>

        <div className='flex justify-center items-center'>
            {content.map((item, index) => (
              <div>
                <Radio
                value={index}             
                >
                  {item}
                </Radio>
              </div>
            ))}        
        </div>
       
        <div className={cx('buttons')}>
          <div className='flex justify-center items-center'>
            {buttonContent.map((item, index) => (
              <Button
                type = {index < 1 ? "" : "primary"}
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