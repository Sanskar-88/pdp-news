import Link from "next/link";
import { getImage } from "../../data/news";
import { news } from "../../data/news";
export default function Business() {

 const businessNews = news.filter(n => n.category === "Business");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Business News</h1>

      {businessNews.map((n) => (
        <div key={n.id}>
          <img src={getImage(n.category)} style={{ width: "100%", height: "200px" }} />

          <Link href={`/article/${n.id}`}>
            <h2>{n.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}