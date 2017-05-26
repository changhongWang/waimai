// 数据存取
export function saveToLocal(id, key, value) {
  // 最外层 使用ESLint需要指明ls所属空间
  let seller = window.localStorage.__seller__;
  if (!seller) {
    // 首次存储
    seller = {};
    seller[id] = {};
  } else {
    // 非首次
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  // 无seller返回默认值
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
