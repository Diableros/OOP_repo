import { PostContentType } from './PostContentType'
import { VideoContentType } from './VideoContentType'
import { VoteContentType } from './VoteContentType'
import { ContentTypeImplementation } from './types.ts'

export const content: ContentTypeImplementation[] = [
  new PostContentType(
    '1',
    'В Москве тестируют технологии, позволяющие найти болезнь еще до симптомов',
    'О том, как развивается медицина в столице России, как будет меняться социальная сфера...',
    'https://cdnn21.img.ria.ru/images/07e7/01/11/1845471296_0:86:3068:1813_1920x0_80_0_0_903f617151c6cd273182e8030e3c94fa.jpg',
    'https://mock.mock'
  ),
  new VideoContentType(
    '2',
    'Милые котята',
    'Милые котята играю друг с другом',
    'https://99px.ru/sstorage/53/2014/10/tmb_112004_2136.jpg',
    'https://mock.mock'
  ),
  new VoteContentType(
    '3',
    'Какой язык программирования лучше',
    ['Typescript', 'TS', 'TypeScript'],
    'https://infostart.ru/upload/iblock/208/208d58eb46233a558678f1ebedac2696.jpg',
    'https://mock.mock'
  )
]
