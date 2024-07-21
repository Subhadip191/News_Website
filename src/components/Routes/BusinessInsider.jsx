import { useEffect, useState } from "react"
import  Card  from "../Card";
import RequestFetcher from "../RequestFetcher";

const Cards = () => {

  const [articles, setArticles] = useState([]);
   
  RequestFetcher("Business",articles,setArticles)


  const filterNews = () =>{
    return articles.filter((article)=>(article.source.name==="Business Insider" || article.source.id==="business-insider"));
  }
  const filteredArticles = filterNews();

  return (
    
    <div className="text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-teal-50">
      {
        
        filteredArticles.map((article, id)=>{
          return <Card key={id} title={article.title} author={article.author} description={article.description} 
          imgUrl = {article.urlToImage} source={article.source.name} date={article.publishedAt} url={article.url}
          />
        })
      }
    </div>
  )
}
export default Cards;