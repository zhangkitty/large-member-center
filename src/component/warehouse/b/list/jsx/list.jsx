import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'shineout';

const List = (props) => {
  const {
    list,
    dataLoading,
  } = props;
  const columns = [{
    title: '入库单号',
    width: 100,
    render: 'inStorageNo',
  }, {
    title: '生产制单',
    width: 100,
    render: 'produceOrderId',
  }, {
    title: '生产组',
    width: 100,
    render: 'productionGroup',
  }];
  return (
    <div>
      <Table
        bordered
        keygen="id"
        data={list}
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
