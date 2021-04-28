import React, { Component } from "react";
import "./App.css";

import hashtag from "./images/hashtag.svg";
import AliceCarousel from "react-alice-carousel";
import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import image4 from "./images/img4.jpeg";
import image4bis from "./images/img4bis.jpg";
import image5 from "./images/img5.jpeg";
import image7 from "./images/img7.jpeg";
import image8 from "./images/img8.jpeg";
import image9 from "./images/img9.jpeg";
import image10 from "./images/img10.jpeg";
import image12 from "./images/img12.jpeg";
import image13 from "./images/img13.jpeg";
import image14 from "./images/img14.jpeg";
import image15 from "./images/img15.jpeg";
import image16 from "./images/img16.jpeg";
import image17 from "./images/img17.png";
import image18 from "./images/img18.jpeg";
import image20 from "./images/img20.png";
import image21 from "./images/img21.jpeg";
import image24 from "./images/img24.jpg";
import image25 from "./images/img25.png";
import image26 from "./images/img26.png";
import heart from "./images/heart.svg";
import linkedinIcon from "./images/linkedin.svg";
import mailIcon from "./images/envelope.svg";
import githubIcon from "./images/github.svg";

import "react-alice-carousel/lib/alice-carousel.css";

class LandingPage extends Component {
  render() {
    const responsive = {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    };

    return (
      <div className="wrapper">
        <div className="header">
          <AliceCarousel
            autoPlay={false}
            autoPlayInterval={7500}
            infinite={true}
            animationType="fadeout"
            animationDuration={1000}
            buttonsDisabled={true}
            responsive={responsive}
          >
            <blockquote>
              <span className="quote5 sidekick">
                Work hard in silence, let the success be your noise.
              </span>
              <cite className="author"> &mdash; Franck Ocean</cite>
            </blockquote>
            <blockquote>
              <span className="quote1 sidekick">
                A goal without a plan is just a wish.
              </span>
              <cite className="author"> &mdash; Antoine De Saint-Exupery</cite>
            </blockquote>
            <blockquote>
              <span className="quote2 sidekick">
                Master your weakness, grow your strenghts.
              </span>
              <cite className="author"> &mdash; Ryan Kahn</cite>
            </blockquote>
            <blockquote>
              <span className="quote3 sidekick">
                Optimizing physical capacity requires training at unsustainable
                intensities.
              </span>
              <cite className="author"> &mdash; Greg Glassman</cite>
            </blockquote>
            <blockquote>
              <span className="quote4 sidekick">
                Fitness is a small, small world within the universe of movement.
              </span>
              <cite className="author"> &mdash; Ido Portal</cite>
            </blockquote>
            <blockquote>
              <span className="quote5 sidekick">
                Work hard in silence, let the success be your noise.
              </span>
              <cite className="author"> &mdash; Franck Ocean</cite>
            </blockquote>
          </AliceCarousel>
        </div>

        <div className="nav">
          <div className="nav-wrapper">
            <div className="nav-title"># WORD</div>
            <div className="nav-text">
              <div>Work</div>
              <div>Out</div>
              <div>Record</div>
              <div>Diary©</div>
            </div>
          </div>
        </div>
        <div className="section">
          {/*<AliceCarousel
            autoPlay={true}
            autoPlayInterval={4500}
            infinite={true}
            animationType="fadeout"
            animationDuration={100}
            buttonsDisabled={true}
            responsive={responsive}
          >
            <img
              src={image1}
              className="sliderimg"
              alt="Handstand-hold-position-man"
            />
            <img src={image2} className="sliderimg" alt="Man weightlifting" />
            <img src={image3} className="sliderimg" alt="Men junggling" />
            <img src={image4} className="sliderimg" alt="Men doing sissy squat" />
            <img
              src={image4bis}
              className="sliderimg"
              alt="Men doing gym movement"
            />
            <img
              src={image5}
              className="sliderimg"
              alt="Man standing on hands"
            />
            <img
              src={image25}
              className="sliderimg"
              alt="Men doing bridge movement"
            />
            <img src={image7} className="sliderimg" alt="Men doing handstand" />
            <img
              src={image8}
              className="sliderimg"
              alt="Men doing handstand on stairs"
            />
            <img
              src={image21}
              className="sliderimg"
              alt="Men doing gym movement"
            />
            <img
              src={image9}
              className="sliderimg"
              alt="Men doing lsit movement"
            />
            <img
              src={image10}
              className="sliderimg"
              alt="Men doing sissi squat"
            />
            <img src={image13} className="sliderimg" alt="Men doing back flip-" />
            <img
              src={image26}
              className="sliderimg img26"
              alt="Men doing weighlifting"
            />
            <img src={image18} className="sliderimg" alt="Men doing bridge" />
            <img
              src={image14}
              className="sliderimg"
              alt="Men doing handstand with bended legs "
            />
            <img
              src={image15}
              className="sliderimg"
              alt="Men doing handstand with open legs"
            />
            <img
              src={image12}
              className="sliderimg"
              alt="Man doing sissi squat"
            />
            <img
              src={image17}
              className="sliderimg"
              alt="Men balancing on a chair"
            />
            <img
              src={image20}
              className="sliderimg"
              alt="Men carrying slam ball"
            />
            <img src={image16} className="sliderimg" alt="Men doing bridge" />
            <img
              src={image24}
              className="sliderimg img24"
              alt="Men grabbing dumbells"
            />
          </AliceCarousel>*/}
        </div>
        <div className="aside">
          <div className="aside-content">
            <div className="aside-title">
              <img
                className="aside-hashtag"
                src={hashtag}
                alt="hashtag-symbol"
              ></img>
              {/* <span className="aside-hashtag">#</span> */}

              <span className="aside-span-effect" data-fill="WORD">
                WORD
              </span>
            </div>
            <div className="aside-text">
              <span
                className="aside-text-effect"
                data-content="Work Out Record Diary"
              >
                Work Out Record Diary
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-contacts">
            <a href="https://www.linkedin.com/in/clarachaouatb3981363/">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="mailto:clara.chaouat@gmail.com?subject = Feedback&body = Message">
              <img src={mailIcon} alt="envelope icon" />
            </a>
            <a href="https://github.com/ClaraChaouat">
              <img src={githubIcon} alt="github icon" />
            </a>
          </div>

          <div className="footer-text">
            Made with
            <img className="heart-icon" src={heart} alt="love" />
            somewhere over the rainbow
          </div>
          <div className="footer signature">Cléo © 2021</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
