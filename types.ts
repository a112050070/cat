
export interface Cat {
  id: string;
  name: string;
  breed: string;
  gender: '公' | '母';
  color: string;
  location: string;
  age: '幼貓' | '成貓' | '熟齡貓';
  description: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  content: string;
}
