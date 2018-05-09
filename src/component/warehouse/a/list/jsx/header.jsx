import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

import {
  isaPositiveNumber,
} from 'shein-lib/is';

import { search } from '../action';
import style from '../style.css';


const Header = (props) => {
  const {
    dispatch,
    dataLoading,
    formData,
  } = props;
  return (
    <div className={style.flexBox} style={{ paddingTop: 0 }}>
      <div className={style.inputItem}>
        <span className={style.itemTitle}>
          二次工艺：{formData.kkk.join(': ')}
        </span>
        <Input
          className={style.inputBox}
          size="large"
          data-bind="formData.kkk.1"
          data-disallow={val => !isaPositiveNumber(val)}
        />
      </div>
      <div className={style.inputItem}>
        <Button
          loading={dataLoading}
          type="primary"
          size="large"
          onClick={() => dispatch(search())}
        >
          搜索
        </Button>
      </div>
    </div>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    kkk: PropTypes.string,
  }).isRequired,
  dataLoading: PropTypes.bool.isRequired,
};

export default Header;
