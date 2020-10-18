export interface PostData {
 content: string;
 author: string;
 date: Date;
 views?: number;
}

export default class Post {
 private content: string;
 private author: string;
 private date: Date;
 private views: number;
 constructor(data: PostData) {
  this.content = data.content;
  this.author = data.author;
  this.date = data.date;
  if (data.views !== undefined) this.views = data.views;
  else this.views = 0;
 }
}
