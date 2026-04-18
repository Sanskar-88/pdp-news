"use client";

import Link from "next/link";
import { getImage } from "../data/news";

export default function NewsLayout({ news }) {
    const mainNews = news[0];
    const leftNews = news.slice(1, 5);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                gap: "20px"
            }}
        >

            {/* LEFT */}
            <div>
                {leftNews.map((n) => (
                    <Link key={n.id} href={`/article/${n.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ marginBottom: "20px", borderBottom: "1px solid #eee" }}>
                            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
                                {n.category.toUpperCase()}
                            </p>
                            <h4>{n.title}</h4>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CENTER */}
            <div>
                <Link href={`/article/${mainNews.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <h1 style={{ fontSize: "26px" }}>{mainNews.title}</h1>

                    <img
                        src={getImage(mainNews.category, mainNews.id)}
                        style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                </Link>
            </div>

            {/* RIGHT */}
            <div>

                {/* TITLE */}
                <h3 style={{
                    borderBottom: "2px solid black",
                    paddingBottom: "6px",
                    marginBottom: "15px",
                    fontSize: "18px"
                }}>
                    Most Popular
                </h3>

                {/* LIST */}
                {news.slice(0, 5).map((n, index) => (
                    <Link
                        key={n.id}
                        href={`/article/${n.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                marginBottom: "15px",
                                paddingBottom: "10px",
                                borderBottom: "1px solid #eee",
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateX(5px)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateX(0)";
                            }}
                        >

                            {/* NUMBER */}
                            <div style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#c40000",
                                minWidth: "20px"
                            }}>
                                {index + 1}
                            </div>

                            {/* TEXT */}
                            <div>
                                <p style={{
                                    fontSize: "14px",
                                    lineHeight: "1.4"
                                }}>
                                    {n.title}
                                </p>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>

        </div>
    );
}