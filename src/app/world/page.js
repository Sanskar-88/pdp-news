import NewsLayout from "@/components/NewsLayout";
import { news } from "../../data/news";
export default function World() {

  const worldNews = news.filter(n => n.category === "World");

  return (
       <div>
   
         {/* 🔥 HEADER SECTION */}
         <div style={{ textAlign: "center", margin: "20px 0" }}>
   
           <div style={{ height: "2px", background: "#ddd", marginBottom: "10px" }} />
   
           <h1 style={{
             fontSize: "28px",
             color: "#c40000",
             margin: "0",
             fontWeight: "bold"
           }}>
             World
           </h1>
         </div>
   
         {/* LAYOUT */}
         <NewsLayout news={worldNews} />
   
       </div>
     );
   }