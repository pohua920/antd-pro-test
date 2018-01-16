const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '分析頁',
    path: 'analysis',
  }, {
    name: '監控頁',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,
  }],
}, {
  name: '表單頁',
  icon: 'form',
  path: 'form',
  children: [{
    name: '基礎表單',
    path: 'basic-form',
  }, {
    name: '分步表單',
    path: 'step-form',
  }, {
    name: '高級表單',
    authority: 'admin',
    path: 'advanced-form',
  }],
}, {
  name: '列表页',
  icon: 'table',
  path: 'list',
  children: [{
    name: '查詢表格',
    path: 'table-list',
  }, {
    name: '表準列表',
    path: 'basic-list',
  }, {
    name: '卡片列表',
    path: 'card-list',
  }, {
    name: '搜索列表',
    path: 'search',
    children: [{
      name: '搜索列表（文章）',
      path: 'articles',
    }, {
      name: '搜索列表（項目）',
      path: 'projects',
    }, {
      name: '搜索列表（應用）',
      path: 'applications',
    }],
  }],
}, {
  name: '詳情頁',
  icon: 'profile',
  path: 'profile',
  children: [{
    name: '基礎詳情頁',
    path: 'basic',
  }, {
    name: '高级詳情頁',
    path: 'advanced',
    authority: 'admin',
  }],
}, {
  name: '结果页',
  icon: 'check-circle-o',
  path: 'result',
  children: [{
    name: '成功',
    path: 'success',
  }, {
    name: '失敗',
    path: 'fail',
  }],
}, {
  name: '異常頁',
  icon: 'warning',
  path: 'exception',
  children: [{
    name: '403',
    path: '403',
  }, {
    name: '404',
    path: '404',
  }, {
    name: '500',
    path: '500',
  }, {
    name: '觸發異常',
    path: 'trigger',
  }],
}, {
  name: '帳戶',
  icon: 'user',
  path: 'user',
  authority: 'guest',
  children: [{
    name: '登入',
    path: 'login',
  }, {
    name: '註冊',
    path: 'register',
  }, {
    name: '註冊結果',
    path: 'register-result',
  }],
}, {
  name: '參考檔案',
  icon: 'book',
  path: 'http://pro.ant.design/docs/getting-started',
  target: '_blank',
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
