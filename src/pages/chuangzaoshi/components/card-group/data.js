import Mock from 'mockjs'

let template = {
  data: {
    'catalog': '@CWORD(4)',
    'iconName': 'czs-fire-l',
    'list|50': [
      {
        'name': '@WORD(4, 10)',
        'url': '@URL',
        'desc': '@CSENTENCE(10, 15)',
        'logo': '@DATAIMAGE(50x50)',
        'watch|0-1000': 0,
        'good|0-1000': 0
      }
    ]
  }
}

export default Mock.mock(template).data
