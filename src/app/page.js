"use client";

import { getImage, news } from "../data/news";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(6);
  const [search, setSearch] = useState("");

  // 🔍 filter
  const filteredNews = news.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const data = search ? filteredNews : news;

  const mainNews = data[0];
  const otherNews = data.slice(1);

  // ✅ reset count when search changes
  useEffect(() => {
    setCount(6);
  }, [search]);

  return (
    <div>

      {/* SEARCH BAR */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT SIDE */}
        <div style={{ flex: "3 1 600px" }}>

          {/* FEATURED */}
          {mainNews && (
            <div style={{ marginBottom: "30px" }}>
              <Link href={`/article/${mainNews.id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="card-hover">
                  <img
                    src={getImage(mainNews.category, mainNews.id)}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "200px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />
                  <h2 className="text-hover" style={{ fontSize: "28px", marginTop: "10px" }}>
                    {mainNews.title}
                  </h2>
                  <p style={{ color: "#777" }}>{mainNews.category}</p>
                </div>
              </Link>
            </div>
          )}

          {/* CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              alignItems: "start"
            }}
          >
            {otherNews.slice(0, count).map((n) => (
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
                    src={getImage(n.category, n.id)}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "200px",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                  <h3 className="text-hover" style={{ margin: "10px 0 5px" }}>{n.title}</h3>
                  <p style={{ color: "#777" }}>{n.category}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* LOAD MORE */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            {otherNews.length > count ? (
              <button
                onClick={() => setCount((prev) => prev + 3)}
                style={{
                  padding: "12px 30px",
                  background: "linear-gradient(135deg, #007bff, #00c6ff)",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
              >
                Load More ↓
              </button>
            ) : (
              <p style={{ color: "#777" }}>No more news</p>
            )}
          </div>

        </div>

        {/* SIDEBAR */}
        <div style={{ flex: "1 1 250px" }}>

          {/* TRENDING */}
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ borderBottom: "2px solid black" }}>
              Trending 🔥
            </h3>

            {news.slice(0, 5).map((n) => (
              <Link
                key={n.id}
                href={`/article/${n.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ marginBottom: "12px", cursor: "pointer" }}>
                  <p className="text-hover" style={{ fontWeight: "bold" }}>{n.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* LATEST NEWS */}
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ borderBottom: "2px solid black" }}>
              Latest 🕒
            </h3>

            {news.slice(-5).map((n) => (
              <Link
                key={n.id}
                href={`/article/${n.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ marginBottom: "12px", cursor: "pointer" }}>
                  <p className="text-hover" >{n.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CATEGORIES */}
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ borderBottom: "2px solid black" }}>
              Categories 📂
            </h3>

            {["Sports", "Business", "World", "Tech"].map((cat) => (
              <Link
                key={cat}
                href={`/${cat.toLowerCase()}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{
                  marginBottom: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  {cat}
                </div>
              </Link>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px"
          }}>
            <h3>Subscribe 📧</h3>

            <input
              type="email"
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />

            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "8px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}