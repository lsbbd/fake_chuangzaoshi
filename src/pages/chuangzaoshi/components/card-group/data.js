import Mock from 'mockjs'

let linkListTemplate = {
  data: {
    'catalog': '@CWORD(4)',
    'iconName': 'czs-fire-l',
    'list|10-25': [{
      'name': '@WORD(4, 10)',
      'url': '@URL',
      'desc': '@CWORD(10, 15)',
      'logo': '@DATAIMAGE(50x50)',
      'watch|0-1000': 0,
      'good|0-1000': 0
    }]
  }
}

let appListTemplate = {
  data: {
    'catalog': '@CWORD(4)',
    'iconName': 'czs-fire-l',
    'list|10-50': [{
      'name': '@WORD(5, 10)',
      'platforms': [ 'windows', 'macos', 'linux' ],
      'logo': '@DATAIMAGE(212x212)',
      'desc': '@CWORD(10, 20)',
      'url': '@URL',
      'backgroundColor|1': ['#262c38', '#000', '#ff6858', '#156a6a']
    }]
  }
}

let linkList = Mock.mock(linkListTemplate).data
let appList = Mock.mock(appListTemplate).data

export {
  linkList,
  appList
}
