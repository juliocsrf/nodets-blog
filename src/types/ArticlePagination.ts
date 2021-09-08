import { ArticleInstance } from './../models/Article';
export type ArticlePagination = {
    next: boolean;
    count: number;
    articles: ArticleInstance[];
}