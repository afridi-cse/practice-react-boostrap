import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4322f6b800b84306b4c159af038ff20a')
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
    },[])
    return (
        <div>
            <h2>Top Headline {articles.length} </h2>
            {
                articles.map(article=> <News article={article} ></News> )
            }
        </div>
    );
};

export default TopHeadline;