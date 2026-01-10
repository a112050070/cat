
import { Cat, NewsItem } from './types';

export const CATS_DATA: Cat[] = [
  {
    id: '1',
    name: '小虎',
    breed: '米克斯 (Mix)',
    gender: '公',
    color: '黃虎斑',
    location: '板橋動物之家',
    age: '成貓',
    description: '活潑親人，已完成絕育與狂犬病疫苗接種。',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: '黑珍珠',
    breed: '米克斯 (Mix)',
    gender: '母',
    color: '純黑',
    location: '中和動物之家',
    age: '成貓',
    description: '眼神犀利但個性溫柔，適合穩定家庭。',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: '雪兒',
    breed: '米克斯 (Mix)',
    gender: '母',
    color: '白/橘',
    location: '新店動物之家',
    age: '幼貓',
    description: '幼貓，愛撒嬌，需要有耐心的領養人照顧。',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: '大壯',
    breed: '米克斯 (Mix)',
    gender: '公',
    color: '灰白',
    location: '八里動物之家',
    age: '成貓',
    description: '體型結實，適合有較大生活空間的飼主。',
    imageUrl: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: '甜甜',
    breed: '米克斯 (Mix)',
    gender: '母',
    color: '三花',
    location: '五股動物之家',
    age: '熟齡貓',
    description: '對聲音較敏感，初期需較多空間適應。',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800'
  }
];

export const NEWS_DATA: NewsItem[] = [
  { id: '1', category: '緊急救援', title: '士林巷弄虎斑小貓', content: '昨晚在士林巷弄發現的虎斑小貓，目前已送往合作醫院檢查，有嚴重的脫水現象，請大家一起為牠加油！' },
  { id: '2', category: '好消息', title: '大白體力恢復', content: '上週救援的『大白』體力已恢復，今天開始練習吃主食罐囉！即將開放中途預約。' },
  { id: '3', category: '找家快訊', title: '黏人精『阿橋』', content: '黏人精『阿橋』還在等他的專屬沙發！1 歲大的溫柔暖男，適合有養貓經驗的家庭。' },
  { id: '4', category: '結紮專案', title: '大安區完成 5 隻母貓 TNR', content: '本月大安區已完成 5 隻母貓 TNR，感謝志工們在寒風中守候，有效降低社區幼貓出生率。' }
];

export const THEME_COLOR = {
  bg: '#FDFBF7',
  orange: '#F39C12',
};
