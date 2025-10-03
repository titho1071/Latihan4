import { getArticles } from "./services/getarticles";
import CardArticle from "./components/card_article";

type Article = {
  id: number;
  title: string;
  urlimage: string;
  description: string;
  author: string;
};

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar artikel</h1>
      <ul className="grid gap-4 p-4">
        {articles.map((article) => (
          <CardArticle key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
