import React, { PureComponent } from 'react';
import { Form, Input, Checkbox } from 'shineout';
import { Input as AntdInput, Checkbox as AntdCheckbox } from 'antd';

const formStyle = { width: 500, padding: 30 };

class Container extends PureComponent {
  constructor(props) {
    super(props);

    this.rules = {
      inStorageNo: [
        { required: true, message: '请填写入库单号' },
      ],
      produceOrderId: [
        { required: true, message: '请填写生产制单' },
      ],
      frontColor: [
        { min: 2, message: '至少选择 {min} 个前景色' },
      ],
      backgroundColor: [
        { min: 2, message: '至少选择 {min} 个后景色' },
      ],
    };

    this.colors = ['白色', '红色', '蓝色', '绿色'];

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line
  handleSubmit(data) {
    console.log(data);
    // dispatch(post(data))
  }

  render() {
    return (
      <div>
        <Form rules={this.rules} style={formStyle} onSubmit={this.handleSubmit}>
          <Form.Item required label="入库单号">
            <Input name="inStorageNo" />
          </Form.Item>

          <Form.Item required label="生产制单">
            <Form.Field name="produceOrderId">
              <AntdInput />
            </Form.Field>
          </Form.Item>

          <Form.Item required label="前景色">
            <Form.Field name="frontColor">
              <AntdCheckbox.Group
                options={this.colors.map(c => ({ label: c, value: c }))}
              />
            </Form.Field>
          </Form.Item>

          <Form.Item required label="背景色">
            <Checkbox.Group name="backgroundColor" datum={{ separator: ',' }} data={this.colors} />
          </Form.Item>

          <Form.Item label="">
            <Form.Button>提交</Form.Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Container;

