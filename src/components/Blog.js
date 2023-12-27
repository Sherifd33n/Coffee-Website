import React from "react";
import outline_img from "../assets/bx-right-arrow-alt.svg";
import sms_btn from "../assets/bx-comment.svg";
import eye_btn from "../assets/bx-bullseye.svg";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Our blogs coffee with <br />
          insightful topic
        </h2>

        <div className="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog1.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <img src={outline_img} className="bx" alt="" />
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <img src={eye_btn} className="bx" alt="" />
                  <span>12</span>
                </div>
                <div className="blog__reaction">
                  <img src={sms_btn} alt="" className="bx" />
                  <span>76,5k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to grow coffee beans</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to grow
                coffee beans with high standard.
              </p>
            </div>
          </article>
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog2.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <img src={outline_img} className="bx" alt="" />
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>96</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,7k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to make coffee for beginner</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to make a
                coffee with a good place coffee.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
