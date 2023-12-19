import {
  PostContent,
  VideoContent,
  VoteContent
} from '@/pages/Structure/Bridge/type.ts'

export const content: (PostContent | VideoContent | VoteContent)[] = [
  {
    id: '1',
    title:
      'В Москве тестируют технологии, позволяющие найти болезнь еще до симптомов',
    caption:
      'О том, как развивается медицина в столице России, как будет меняться социальная сфера...',
    imageURL:
      'https://cdnn21.img.ria.ru/images/07e7/01/11/1845471296_0:86:3068:1813_1920x0_80_0_0_903f617151c6cd273182e8030e3c94fa.jpg',
    url: 'https://mock.mock',
    type: 'post'
  },
  {
    id: '2',
    title: 'Милые котята',
    description: 'Милые котята играю друг с другом',
    thumbnailUrl: 'https://99px.ru/sstorage/53/2014/10/tmb_112004_2136.jpg',
    url: 'https://mock.mock',
    type: 'video'
  },
  {
    id: '3',
    title: 'Какой язык программирования лучше',
    options: ['Typescript', 'TS', 'TypeScript'],
    thumbnailUrl:
      'https://infostart.ru/upload/iblock/208/208d58eb46233a558678f1ebedac2696.jpg',
    url: 'https://mock.mock',
    type: 'vote'
  }
]
