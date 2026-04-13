import Link from "next/link";
import { getImage } from "../../data/news";
import { news } from "../../data/news";
export default function Tech() {

 const techNews = news.filter(n => n.category === "Tech");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tech News</h1>

      {techNews.map((n) => (
        <div key={n.id}>
          <img 
            src={getImage(n.category)} 
            style={{ width: "100%", height: "200px", objectFit: "cover" }} 
          />

          <Link href={`/article/${n.id}`}>
            <h2>{n.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}