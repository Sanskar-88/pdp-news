import Link from "next/link";
import { getImage } from "../../data/news";
import { news } from "../../data/news";
export default function Business() {

  const businessNews = news.filter(n => n.category === "Business");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}
    >

      {businessNews.map((n) => (
        <div key={n.id}>

          <Link
            key={n.id}
            href={`/article/${n.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="card-hover"
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px"
              }}
            > 
              <img
                src={getImage(n.category)}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {/* TEXT */}
              <div style={{ padding: "10px" }}>
                <h3 className="text-hover" style={{ margin: "10px 0 5px" }}>{n.title}</h3>

                <p style={{ color: "#777" }}>
                  {n.category}
                </p>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}