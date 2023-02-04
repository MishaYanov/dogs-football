import React from "react";
import "../../styles/components/about.scss";
//@ts-ignore
import Card from "./card/Card";

function About() {
  const mockCoaches = [
    {
      name: "John Doe",
      position: "Head Coach",
      img: "https://images.unsplash.com/photo-1517841900229-3c9a5c82f5b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvb2wlMjBjb2FjaGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic distinctio aspernatur nostrum reiciendis deleniti sit libero ratione, quaerat accusamus accusantium quasi tempora. Inventore velit voluptas odio nam? Expedita, sapiente.",
    },
    {
      name: "John Doe",
      position: "Head Coach",
      img: "https://images.unsplash.com/photo-1517841900229-3c9a5c82f5b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvb2wlMjBjb2FjaGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic distinctio aspernatur nostrum reiciendis deleniti sit libero ratione, quaerat accusamus accusantium quasi tempora. Inventore velit voluptas odio nam? Expedita, sapiente.",
    },
    {
      name: "John Doe",
      position: "Head Coach",
      img: "https://images.unsplash.com/photo-1517841900229-3c9a5c82f5b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvb2wlMjBjb2FjaGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic distinctio aspernatur nostrum reiciendis deleniti sit libero ratione, quaerat accusamus accusantium quasi tempora. Inventore velit voluptas odio nam? Expedita, sapiente.",
    },
    {
      name: "John Doe",
      position: "Head Coach",
      img: "https://images.unsplash.com/photo-1517841900229-3c9a5c82f5b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvb2wlMjBjb2FjaGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic distinctio aspernatur nostrum reiciendis deleniti sit libero ratione, quaerat accusamus accusantium quasi tempora. Inventore velit voluptas odio nam? Expedita, sapiente.",
    },
  ];
  return (
    <>
      <div className="about-story">
        <h1 className="story-header">Our <span className="highlight">Story</span></h1>
        <p className="story-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic
          distinctio aspernatur nostrum reiciendis deleniti sit libero ratione,
          quaerat accusamus accusantium quasi tempora. Inventore velit voluptas
          odio nam? Expedita, sapiente. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates nobis, iure optio quam sint explicabo
          aperiam temporibus magnam esse molestiae consequuntur mollitia,
          nostrum, quidem tempora officia odit perferendis delectus laudantium?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          impedit fugiat ipsam facilis veritatis voluptatibus voluptas omnis
          temporibus animi laudantium, quasi, aliquam explicabo dolore
          recusandae obcaecati enim dolores sunt alias? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Atque at porro quos, numquam,
          temporibus suscipit nemo sint omnis delectus ab, soluta magnam? Illo
          animi, maiores ullam cumque modi repellendus corporis!
        </p>
      </div>
      <div className="about-managment">
        <h1 className="managment-header">Our Managment</h1>
        <div className="managment-cards">
          {mockCoaches.map((coach) => {
            return <Card coach={coach}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default About;
