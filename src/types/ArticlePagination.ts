import { ArticleInstance } from './../models/Article';
export type ArticlePagination = {
    previous: boolean;
    previous_url: string;
    next: boolean;
    next_url: string;
    count: number;
    articles: ArticleInstance[];
}