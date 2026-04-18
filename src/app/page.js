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

  const data = search && filteredNews.length ? filteredNews : news;

  const mainNews = data.length > 0 ? data[0] : null;
  const otherNews = data.slice(1);

  // reset count when search changes
  useEffect(() => {
    setCount(6);
  }, [search]);


  return (
    <div>

      {/* SEARCH BAR */}
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center"
      }}>
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid #ddd",
            outline: "none",
            width: "300px",   // ⭐ bigger
            maxWidth: "90%",
            transition: "all 0.3s ease",
            background: "#f9f9f9",
            boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
            fontSize: "15px"
          }}
          onMouseOver={(e) => {
            e.target.style.border = "1px solid #007bff";
            e.target.style.boxShadow = "0 0 0 3px rgba(0,123,255,0.15)";
          }}
          onMouseOut={(e) => {
            e.target.style.border = "1px solid #ddd";
            e.target.style.boxShadow = "0 3px 10px rgba(0,0,0,0.06)";
          }}
          onFocus={(e) => {
            e.target.style.border = "1px solid #007bff";
            e.target.style.boxShadow = "0 0 0 4px rgba(0,123,255,0.2)";
            e.target.style.background = "#fff";
            e.target.style.width = "340px"; // slight expand only
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid #ddd";
            e.target.style.boxShadow = "0 3px 10px rgba(0,0,0,0.06)";
            e.target.style.background = "#f9f9f9";
            e.target.style.width = "300px";
          }}
        />
      </div>
      {/* Search Input */}
      {search && data.length === 0 && (
        <div style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "10px",
          background: "#fff3f3",
          border: "1px solid #ffd6d6",
          borderRadius: "6px"
        }}>
          <p style={{ color: "#c40000", fontWeight: "bold" }}>
            No results found for "{search}"
          </p>
        </div>
      )}

      {/* FEATURED */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >


        <div style={{ flex: "3 1 600px" }}>
          <h2 style={{
            color: "#c40000",
            fontSize: "22px",
            marginBottom: "15px",
            fontWeight: "bold"
          }}>
            Top News
          </h2>


          {/* TOP NEWS SECTION */}
          <div  style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginBottom: "25px"
          }}>

            {/* LEFT - IMAGE */}
            {mainNews && (
              <Link href={`/article/${mainNews.id}`} style={{ textDecoration: "none", color: "black" }}>
                <img
                className="text-hover"
                  src={getImage(mainNews.category, mainNews.id)}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                />
              </Link>
            )}
            {/* RIGHT - SIDE NEWS */}
            <div>
              {otherNews.slice(0, 4).map((n) => (
                <Link key={n.id} href={`/article/${n.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{
                    marginBottom: "12px",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "8px",
                    cursor: "pointer"
                  }}>
                    <p style={{
                      fontSize: "12px",
                      color: "#c40000",
                      fontWeight: "bold"
                    }}>
                      {n.category.toUpperCase()}
                    </p>

                    <h4 className="text-hover" style={{
                      fontSize: "15px",
                      lineHeight: "1.4"
                    }}>
                      {n.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* MAIN HEADLINE BELOW */}
          <Link href={`/article/${mainNews.id}`} style={{ textDecoration: "none", color: "black" }}>
            <h1 className="text-hover" style={{
              fontSize: "26px",
              lineHeight: "1.3",
              marginBottom: "10px"
            }}>
              {mainNews.title}
            </h1>

            <p style={{
              color: "#555",
              marginBottom: "20px"
            }}>
              {mainNews.category} News Update
            </p>
          </Link>

          {/* CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              alignItems: "start"
            }}
          >
            {otherNews.slice(4, count + 4).map((n) => (
              <Link
                key={n.id}
                href={`/article/${n.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  className="card-hover"
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    height: "260px"
                  }}
                >

                  {/* IMAGE */}
                  <img
                    src={getImage(n.category, n.id)}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover"
                    }}
                  />

                  {/* CONTENT */}
                  <div className="text-hover" style={{
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1
                  }}>

                    {/* TITLE */}
                    <h3 style={{
                      fontSize: "15px",
                      lineHeight: "1.4",
                      marginBottom: "8px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                      {n.title}
                    </h3>

                    {/* CATEGORY */}
                    <p style={{
                      color: "#777",
                      fontSize: "13px",
                      marginTop: "auto"
                    }}>
                      {n.category}
                    </p>

                  </div>
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
                  background: "linear-gradient(135deg, #c40000, #00c6ff)",
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
                backgroundColor: "#c40000",
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