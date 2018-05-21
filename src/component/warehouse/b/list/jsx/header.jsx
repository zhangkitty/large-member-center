import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'shineout';
import { search } from '../action';

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(data) {
    this.props.dispatch(search(data));
  }

  render() {
    const { dataLoading } = this.props;

    return (
      <Form inline disabeld={dataLoading} onSubmit={this.handleSearch}>
        <Form.Item label="二次工艺：">
          <Input name="kkk" />
        </Form.Item>
        <Form.Submit>搜索</Form.Submit>
        <Button style={{ marginLeft: 12 }} href="#/warehouse/b/edit">Add new</Button>
      </Form>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dataLoading: PropTypes.bool.isRequired,
};

export default Header;
