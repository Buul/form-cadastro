import React from 'react';
import { Modal } from 'antd';

const CustomModal = (props) => (
  <div>
    <Modal
      title="Atenção"
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <p style={{ fontWeight: 'bold', color: 'green' }}> {props.message} </p>
    </Modal>
  </div>
);

export default CustomModal;