import React from "react";

import {
    Form, Select, Button, Upload, Icon, Card, Input
  } from 'antd';
  const FormItem = Form.Item;
  const Option = Select.Option;
export default (props) => (
    <Card title="Contact Form">
        <WrappedContactForm />
    </Card>
)
  
class ContactForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Contact Reason"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Select Contact Reason!' },
            ],
          })(
            <Select placeholder="Select Contact Reason">
              <Option value="feedback">Feedback</Option>
              <Option value="bug">Problem / Error / Bug</Option>
              <Option value="general">General Contact</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please enter your query title.', type: 'array' },
            ],
          })(
              <Input placeholder="Short description of your query." />

          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Description"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please describe your query.', type: 'array' },
            ],
          })(
              <Input.TextArea rows={8} placeholder="Long description of your query." />

          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Uploads"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Do you need to upload any files?</p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Send Message</Button>
        </FormItem>
      </Form>
    );
  }
}
  
const WrappedContactForm = Form.create()(ContactForm);