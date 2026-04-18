import { news, getImage } from "../../../data/news";
import Link from "next/link";

export default async function Article({ params }) {
  const { id } = await params;

  const article = news.find((n) => n.id === Number(id));

  if (!article) {
    return <h1>Article not found</h1>;
  }

  // 🔥 RELATED ARTICLES (same category)
  const related = news
    .filter((n) => n.category === article.category && n.id !== article.id)
    .slice(0, 4);

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>

      {/* CATEGORY */}
      <p style={{
        color: "#c40000",
        fontWeight: "bold",
        fontSize: "13px",
        marginBottom: "5px"
      }}>
        {article.category.toUpperCase()}
      </p>

      {/* HEADLINE */}
      <h1 style={{
        fontSize: "34px",
        lineHeight: "1.3",
        fontWeight: "700",
        marginBottom: "10px"
      }}>
        {article.title}
      </h1>

      {/* SUB INFO */}
      <p style={{
        color: "#777",
        fontSize: "14px",
        marginBottom: "20px"
      }}>
        Published • Today
      </p>

      {/* IMAGE (SMALLER & CLEAN) */}
      <div style={{
        width: "100%",
        maxHeight: "300px",
        overflow: "hidden",
        borderRadius: "8px",
        marginBottom: "20px"
      }}>
        <img
          src={getImage(article.category, article.id)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      {/* CONTENT */}
      <p style={{
        lineHeight: "1.9",
        fontSize: "17px",
        color: "#333",
        whiteSpace: "pre-line"
      }}>
        {article.content}
      </p>

      {/* 🔥 RELATED ARTICLES */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{
          borderBottom: "2px solid black",
          paddingBottom: "5px",
          marginBottom: "15px"
        }}>
          Related News
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px"
        }}>
          {related.map((n) => (
            <Link
              key={n.id}
              href={`/article/${n.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="related-card" style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "0.3s"
              }}
               
              >

                <img
                  src={getImage(n.category, n.id)}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover"
                  }}
                />

                <div style={{ padding: "10px" }}>
                  <h4 style={{
                    fontSize: "14px",
                    lineHeight: "1.4"
                  }}>
                    {n.title}
                  </h4>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}