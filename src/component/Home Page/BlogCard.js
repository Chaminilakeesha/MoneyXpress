import React from 'react';
import Card from 'react-bootstrap/Card'
import './Home Page.css';
import clock from './images/icons8-clock.svg';

const BlogCard = (props) => {



    return (




        <Card className="blogcard col-3  col-xs-12 " >
            {/* <Card.Img variant="top" src={car} width="50px" /> */}
            <div style={{ width: "100%", height: "50px", backgroundColor: "green" }}></div>
            <div><h3>{props.blogdet.title}</h3></div>
            <div className="row">
                <div className="col-1"><img src={clock} width="25px" height="25px"></img></div>
                <div className="col-4">{props.blogdet.day}<sup>th</sup>{props.blogdet.month} {props.blogdet.year}</div>
                <div className="col-3">{props.blogdet.time} min read</div>
                <div className="col-4"></div>
            </div>


            <Card.Text>
                <p className="p" style={{ textAlign: "justify" }}>{props.blogdet.content}</p>

            </Card.Text>
        </Card>


    );

}

export default BlogCard;