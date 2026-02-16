import { IArticle, IArticleCategory } from '@/entities/article';

export interface IBlogPageProps {
  popular_article: IArticle[];
  popular_selections: IArticleCategory[];
  mainSelection: IArticleCategory;
  selections: IArticleCategory[];
}
