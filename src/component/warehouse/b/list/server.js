import { under2Camal } from 'shein-lib/camal-case-convertor';

export const pickingList = () => under2Camal({
  code: 0,
  info: {
    list: [{
      in_storage_no: 'RC1708190000',
      produce_order_id: '321456',
      production_group: '1',
      material_sku: '16MLYT00906003',
      new_material_sku: '16MLYT00906003',
      material_name: '26-1163#精梳32S全棉拉架卫衣食毛',
      material_color: '白色',
      storage_num: '1',
      unit: '米',
      in_storage_id: '1',
      processing_num: '1',
      processing_type: '二次加工对单',
      secondary_process: 'dress60301264',
      goods_sku: 'dress60301264',
      color_code: '56',
      id: '56',
    }],
    page_count: 1,
    record_count: 6,
  },
  msg: 'ok',
});

export const pickingListDelete = () => ({
  code: 0,
  info: {},
  msg: 'ok',
});


export const generate = () => ({
  code: 0,
  info: {},
  msg: 'ok',
});
