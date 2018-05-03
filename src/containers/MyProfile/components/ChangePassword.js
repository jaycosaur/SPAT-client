import React from 'react'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class ChangePasswordForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="change-password-form">
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('newpassword', {
            rules: [{ required: true, message: 'Please input your new Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirmpassword', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm New Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Change Password
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedChangePasswordForm = Form.create()(ChangePasswordForm)

export default (props) => <WrappedChangePasswordForm {...props}/>