import React from 'react';
import { Button, Form, Input } from 'antd-mobile'
import { Link } from "react-router-dom";

function LoginContainer() {

  const gotoList = () => {

  }

  return (
    <div id="login-container">
      <Form
        footer={
          <Link to="list">
            <Button block color='primary' size='large' onClick={gotoList}>
              Login
            </Button>
          </Link>
        }
      >
        <Form.Header>Fanta Coke</Form.Header>
        <Form.Item name='phoneNumber' label='手机号码' rules={[{ required: true }]}>
          <Input placeholder='请输入手机号码' />
        </Form.Item>
        <Form.Item name='password' label='密码' rules={[{ required: true }]}>
          <Input placeholder='请输入密码' type='password' />
        </Form.Item>
      </Form>

    </div>
  )
}

export default LoginContainer;