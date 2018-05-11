import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const List = (props) => {
  const {
    list,
    dataLoading,
  } = props;
  const columns = [{
    title: '入库单号',
    dataIndex: 'inStorageNo',
    width: 100,
  }, {
    title: '生产制单',
    dataIndex: 'produceOrderId',
    width: 100,
  }, {
    title: '生产组',
    dataIndex: 'productionGroup',
    width: 100,
  }];
  return (
    <div>
      <Table
        bordered
        rowKey="id"
        dataSource={list}
        loading={dataLoading}
        columns={columns}
      />
    </div>
  );
};

List.propTypes = {
  dataLoading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default List;
