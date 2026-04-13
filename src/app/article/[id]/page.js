import { news } from "../../../data/news";
import { getImage } from "../../../data/news";
export default async function Article({ params }) {

  const { id } = await params;

  const article = news.find((n) => n.id === Number(id));

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>

      <img
        src={getImage(article.category)}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

      <p style={{
        marginTop: "20px",
        lineHeight: "1.8",
        fontSize: "16px",
        whiteSpace: "pre-line"
      }}>
        {article.content}
      </p>
    </div>
  );
}