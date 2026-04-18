"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          fontFamily: "Georgia, serif",
          backgroundColor: "white",
          color: "black",
          margin: 0
        }}
      >
        {/* HEADER */}
        <div
          style={{
            position: "relative",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center"
          }}
        >

          {/* LEFT: e-Paper + Date */}
          <div
            style={{
              fontSize: "14px",
              color: "#555",
              whiteSpace: "nowrap"
            }}
          >
            <strong>e-Paper</strong> |{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })}
          </div>

          {/* CENTER (desktop) / RIGHT (mobile) */}
          <Link href="/" style={{ textDecoration: "none", marginLeft: "30%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer"
              }}
            >
              <img
                src="/logo.png"
                style={{
                  width: "50px",
                  height: "50px"
                }}
              />

              <h1
                style={{
                  fontSize: "clamp(20px, 4vw, 36px)",
                  margin: 0,
                  color: "black"
                }}
              >
                PDP NEWS
              </h1>
            </div>
          </Link>

        </div>

        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            padding: "6px 0",
            fontWeight: "bold"
          }}
        >

          {[
            { name: "Home", path: "/" },
            { name: "Sports", path: "/sports" },
            { name: "Business", path: "/business" },
            { name: "World", path: "/world" },
            { name: "Tech", path: "/tech" }
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                textDecoration: "none",
                color: pathname === item.path ? "#c40000" : "black",
                padding: "6px 12px",
                borderRadius: "6px",
                transition: "0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f2f2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* PAGE CONTENT */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            borderTop: "1px solid #ddd"
          }}
        >

          <h3 style={{ marginBottom: "10px" }}>
            PDP NEWS
          </h3>

          <p style={{ color: "#555", fontSize: "14px" }}>
            Your trusted source for latest news across India and the world.
          </p>

          {/* LINKS */}
          <div style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "14px"
          }}>

            <Link href="/" style={{ textDecoration: "none", color: "#007bff" }}>
              Home
            </Link>

            <Link href="/sports" style={{ textDecoration: "none", color: "#007bff" }}>
              Sports
            </Link>

            <Link href="/business" style={{ textDecoration: "none", color: "#007bff" }}>
              Business
            </Link>

            <Link href="/world" style={{ textDecoration: "none", color: "#007bff" }}>
              World
            </Link>

            <Link href="/tech" style={{ textDecoration: "none", color: "#007bff" }}>
              Tech
            </Link>

          </div>

          {/* COPYRIGHT */}
          <p style={{ marginTop: "15px", fontSize: "12px", color: "#888" }}>
            © {new Date().getFullYear()} PDP NEWS. All rights reserved.
          </p>

        </footer>

      </body>
    </html>
  );
}