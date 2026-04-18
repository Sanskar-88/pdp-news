import NewsLayout from "@/components/NewsLayout";
import { news } from "../../data/news";
export default function Tech() {

  const techNews = news.filter(n => n.category === "Tech");

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
           Technology
         </h1>
       </div>
 
       {/* LAYOUT */}
       <NewsLayout news={techNews} />
 
     </div>
   );
 }