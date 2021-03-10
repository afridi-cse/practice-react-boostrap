import React from 'react';
import {Card,Button} from 'react-bootstrap';

const News = (props) => {
    console.log(props.article);
    const{publishedAt,description,content,author,title,url,urlToImage }=props.article;
    return (
        <Card>
            <Card.Header>{publishedAt}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{description}</Card.Title>                
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;