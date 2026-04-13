import { news } from "../../data/news";
import { getImage } from "../../data/news";
import Link from "next/link";
export default function Sports() {

  // filter only sports news
  const sportsNews = news.filter((n) => n.category === "Sports");

  return (
    <div>
      <h1>Sports News</h1>

      {sportsNews.map((n) => (
        <div key={n.id} style={{ marginBottom: "20px" }}>

          <img
           src={getImage(n.category)}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />

          <Link href={`/article/${n.id}`}>
            <h2 style={{ cursor: "pointer" }}>{n.title}</h2>
          </Link>
          <p>{n.category}</p>

        </div>
      ))}
    </div>
  );
}