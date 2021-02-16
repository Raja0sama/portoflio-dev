import React from "react"
import useWindowSize from "../../utils/windowSize"
import BoxBg from "../../assets/svg/box.svg"
import self from "./../../assets/img/self.jpg"
import asp from "./../../assets/icons/asp.png"
import c from "./../../assets/icons/c.png"
import csharp from "./../../assets/icons/c#.png"
import dart from "./../../assets/icons/dart.png"
import django from "./../../assets/icons/django.png"
import electron from "./../../assets/icons/electron.png"
import firebase from "./../../assets/icons/firebase.png"
import flutter from "./../../assets/icons/flutter.png"
import graphql from "./../../assets/icons/graphql.png"
import java from "./../../assets/icons/java.png"
import javascript from "./../../assets/icons/javascript.png"
import laravel from "./../../assets/icons/laravel.png"
import medium from "./../../assets/icons/medium.png"
import mysql from "./../../assets/icons/mysql.png"
import php from "./../../assets/icons/php.png"
import python from "./../../assets/icons/python.png"
import mongo from "./../../assets/icons/mongo.png"
import reactnative from "./../../assets/icons/reactnative.png"
import sass from "./../../assets/icons/sass.png"
import sql from "./../../assets/icons/sql.png"
import vercel from "./../../assets/icons/vercel.png"
import vue from "./../../assets/icons/vue.png"
import react from "./../../assets/icons/react.png"
import gatsby from "./../../assets/icons/gatsby.png"
import next from "./../../assets/icons/next.png"
import twitter from "./../../assets/icons/twitter.png"
import linkedin from "./../../assets/icons/linkedin.png"
import github from "./../../assets/icons/github.png"
import Layout from "../home/Layout"
import { Helmet } from "react-helmet"

const About = () => {
  const { height, width } = useWindowSize()
  //   console.log({ BoxBg })
  return (
    <Layout>
      <Helmet>
        <title>Raja Osama | About Raja Osama</title>
      </Helmet>
      <div
        style={{
          padding: "100px 0",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
        }}
      >
        <Content
          width={width}
          react={react}
          next={next}
          gatsby={gatsby}
          vue={vue}
          vercel={vercel}
          graphql={graphql}
          reactnative={reactnative}
          flutter={flutter}
          electron={electron}
          firebase={firebase}
          laravel={laravel}
          asp={asp}
          mongo={mongo}
          django={django}
          sql={sql}
          mysql={mysql}
          sass={sass}
          csharp={csharp}
          php={php}
          javascript={javascript}
          java={java}
          dart={dart}
          c={c}
          python={python}
          medium={medium}
          twitter={twitter}
          linkedin={linkedin}
          github={github}
        />
      </div>
    </Layout>
  )
}

function Content({
  width,
  react,
  next,
  gatsby,
  vue,
  vercel,
  graphql,
  reactnative,
  flutter,
  electron,
  firebase,
  laravel,
  asp,
  mongo,
  django,
  sql,
  mysql,
  sass,
  csharp,
  php,
  javascript,
  java,
  dart,
  c,
  python,
  medium,
  twitter,
  linkedin,
  github,
}) {
  return (
    <>
      {" "}
      <h1
        style={{
          fontSize: width < 500 ? 46 : width / 15,
          fontWeight: "bolder",
          letterSpacing: "0px",
        }}
      >
        Raja Osama
      </h1>
      <div
        style={{
          fontSize: "20px",
          opacity: "0.8",
          lineHeight: 1.4,
        }}
      >
        Hey, I'm Raja Osama 👋
        <br />
        <br />
        <div className="row">
          <div className="col-md-9">
            I'm a Creative product designer, and I assist companies with their
            products such as mobile applications and web applications.
            <br />
            <br />I always loved programming; I started when I was 12 years old
            with HTML and CSS, and then I enrolled in a web development program
            where I earned a diploma. I am the kind of person who will stand out
            in a group of people because of my working skills and dedication.
            <br />
            <br />I like to call my self a tech agnostic developer, I have
            worked with uncountable frameworks and technologies. I always love
            to learn new technologies, because I have this fear of being left
            behind.
            <br />
            <br />
            I started programming because of gamming; when I was 12, I got
            curious about all these website sharing games over the internet,
            which sparked my interest in web development eventually. I started
            taking an online course for web development, where I learn PHP and
            HTML, CSS, javascript. After some years of blogging over bloggers, I
            enrolled in a Software Engineering Program after completing my High
            School Degree.
            <br />
            <br />I am a Drop-out that needs to put out there, I left my degree
            in Bachelors in Computer Science because it was not for me every
            thing they were teaching was either out of context or every out
            dated.
          </div>
        </div>
        I'm usually focused on:
        <br />
        🎛️&nbsp;&nbsp;Designing great User interfaces. experience <br />
        🌐&nbsp;&nbsp;Developing full-stack websites that scales
        <br /> ✨&nbsp;&nbsp;Developing backend and structuring databases.
        <br /> 🧰&nbsp;&nbsp;Building Libraries and writing Technical blogs.
        <br />
        <br />
        In my work, I value:
        <br />
        ⏱️&nbsp;&nbsp;Efficiency
        <br />
        🎯&nbsp;&nbsp;Consistency
        <br />
        ♻️&nbsp;&nbsp;Reusability
        <br />
        ⚙️&nbsp;&nbsp;Systems
        <br />
        📋&nbsp;&nbsp;Standards
        <br /> 🤖Automation
        <br />
        💠&nbsp;&nbsp;Modular Design
        <br />
        👍&nbsp;&nbsp;Emoji Lists
        <br />
        <br />
        <h2
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Uses
        </h2>
        I'm Frequently asked about the stack I use, so here's a complete list.
        <br />
        <br />
        Prefered web stack
        <br />
        <br />
        <img
          src={react}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; React - Ui Library
        <br />
        <img
          src={next}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Next.js - React Framework
        <br />
        <img
          src={gatsby}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Gatsby - React Framework
        <br />
        <img
          src={vue}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Vue.js - Framework
        <br />
        <img
          src={vercel}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Vercel - Static / Serverless Deployment / Mico services &
        CDN
        <br />
        <img
          src={react}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;Node.js - Javascript based Backend
        <br />
        <img
          src={graphql}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; GraphQL - data query and manipulation language
        <br />
        <br />
        Prefered cross platform stack
        <br />
        <img
          src={reactnative}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; React-Native - Cross-platform development Mobile framework
        <br />
        <img
          src={flutter}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Flutter - Cross-platform development Mobile framework
        <br />
        <img
          src={electron}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Electron - Cross-platform Desktop App development framework
        <br />
        <img
          src={firebase}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Firebase - Serverless Backend
        <br />
        <img
          src={react}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Node.js - Javascript Backend <br />
        <br />
        <br />
        I Also Work with
        <br />
        <br />
        <img
          src={laravel}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Laravel - PHP framework
        <br />
        <img
          src={asp}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; asp.Net - C# based web development Framework
        <br />
        <img
          src={mongo}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; MongoDB - NoSQL Database
        <br />
        <img
          src={django}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; django - Python based
        <br />
        <img
          src={sql}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; SQL - SQL Database
        <br />
        <img
          src={mysql}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; MySQL - SQL Database
        <br />
        <img
          src={sass}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Sass - StyleSheet language
        <br />
        <br />
        Languages I learned
        <br />
        <br />
        <img
          src={csharp}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; C#
        <br />
        <img
          src={php}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; PHP
        <br />
        <img
          src={javascript}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Javascript
        <br />
        <img
          src={java}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp; Java
        <br />
        <img
          src={dart}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;Dart
        <br />
        <img
          src={c}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;C
        <br />
        <img
          src={sql}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;SQL
        <br />
        <img
          src={graphql}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;GraphQL
        <br />
        <img
          src={python}
          style={{
            width: 20,
          }}
        />{" "}
        &nbsp;&nbsp;Python
        <br />
        <br />
        <br />
        Blog
        <br />
        <br />
        <img
          src={medium}
          style={{
            width: 20,
          }}
        />
        &nbsp;&nbsp;{" "}
        <a href={"https://supersami.medium.com/"}>
          <u> Medium</u>
        </a>
        <br />
        <br />
        <br />
        <br />
        Follow me on{" "}
        <img
          src={twitter}
          style={{
            width: 20,
          }}
        />
        &nbsp;{" "}
        <a href={"https://twitter.com/devrajaosama"}>
          <u>Twitter</u>
        </a>
        ,{" "}
        <img
          src={linkedin}
          style={{
            width: 20,
          }}
        />
        &nbsp;{" "}
        <a href={"https://www.linkedin.com/in/rajaosama/"}>
          <u>Linkedin</u>
        </a>
        ,
        <img
          src={github}
          style={{
            width: 20,
          }}
        />
        &nbsp;{" "}
        <a href={"https://github.com/Raja0sama"}>
          <u>Github</u>
        </a>
        .
        <br />
        Built with <span role="img">❤</span>,{" "}
        <img
          src={gatsby}
          style={{
            width: 20,
          }}
        />
        &nbsp; Gatsby and{" "}
        <img
          src={vercel}
          style={{
            width: 20,
          }}
        />
        &nbsp;Vercel
        <br />
        <br />
      </div>
    </>
  )
}

export default About
