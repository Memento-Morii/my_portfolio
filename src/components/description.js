import React from "react";
import * as ReactBootStrap  from "react-bootstrap";


const Description = () => {
    return <div className="container">
        <ReactBootStrap.Container id="circleAvatar">
        <ReactBootStrap.Row>
            <ReactBootStrap.Col xs={6} md={4}>
                <ReactBootStrap.Image width="130" height="130" src="https://cdn2.iconfinder.com/data/icons/black-man-professions-1/512/profession_avatar_man_people_user_professional_black_work_job-05-512.png" roundedCircle />
            </ReactBootStrap.Col>
        </ReactBootStrap.Row>
    </ReactBootStrap.Container>
        <h4>Hi, I'm Yafet</h4>
        <h1>Building Websites</h1>
        <h1 id="center">and Digital Products for </h1>
        <h1>Customers</h1>
        <p id="top">a <b>Software Developer</b> and <b>Graphics Designer</b></p>
        <p>I specialize in <b>Flutter </b>and <b>React.js </b></p>
        <ReactBootStrap.Button variant="light" id="circle-button">CONNECT WITH ME</ReactBootStrap.Button>
    </div>
}
export default Description;