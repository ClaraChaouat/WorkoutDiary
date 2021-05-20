import React, { Component } from "react";
import "./App.css";
import BurgerMenu from "./BurgerMenu";
import hashtag from "./images/hashtag.svg";
import AliceCarousel from "react-alice-carousel";
import Swal from "sweetalert2";

import image1 from "./images/img1.jpeg";
import image7 from "./images/img7.jpeg";
import image9 from "./images/img9.jpeg";
import image13 from "./images/img13.jpeg";
import image14 from "./images/img14.jpeg";
import image15 from "./images/img15.jpeg";
import image21 from "./images/img21.jpeg";
import image24 from "./images/img24.jpg";
import image25 from "./images/img25.png";
import image20 from "./images/img20.png";
import image27 from "./images/img27.png";
import image26 from "./images/img26.png";
import image17 from "./images/img17.png";
import heart from "./images/heart.svg";
import linkedinIcon from "./images/linkedin.svg";
import mailIcon from "./images/envelope.svg";
import githubIcon from "./images/github.svg";
import "react-alice-carousel/lib/alice-carousel.css";

class LandingPage extends Component {
  opensweetalert() {
    Swal.fire({
      title: "Cant' wait to start to track?",
      text: "#WORD is under construction and will be ready soon.",
      input: "email",
      inputLabel: "Enter your e-mail address to stay in the latest news",
      inputPlaceholder: "Enter your email address",
      confirmButtonText: "Notify me!",
      validationMessage: "Thanks for subscribing! We'll get to you soon",
      showDenyButton: "true",
      denyButtonText: "No, thanks",
      confirmButtonColor: "#b49d9a",
      denyButtonColor: "black",
      showCloseButton: true,
      imageUrl: image27,
      imageAlt: "Man exercising with gym rings",
      width: 380,
    }).then((email) => {
      if (email.isConfirmed) {
        Swal.fire(`Your e-mail address: ${email.value} has been saved!`);
      } else if (email.isDenied) {
        Swal.fire("Hope to see you soon!");
      }
    });
  }

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
          <div className="header-burger-menu">
            <BurgerMenu></BurgerMenu>
          </div>
          <div className="header-logo">
            <div className="header-logo-text">#WORD</div>
            <div className="header-logo-acronym">
              <div>Work</div>
              <div>Out</div>
              <div>Record</div>
              <div>Diary©</div>
            </div>
          </div>

          <div className="header-carousel">
            <AliceCarousel
              autoPlay={true}
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
                <cite className="author">
                  {" "}
                  &mdash; Antoine De Saint-Exupery
                </cite>
              </blockquote>
              <blockquote>
                <span className="quote2 sidekick">
                  Master your weakness, grow your strenghts.
                </span>
                <cite className="author"> &mdash; Ryan Kahn</cite>
              </blockquote>
              <blockquote>
                <span className="quote3 sidekick">
                  Optimizing physical capacity requires training at
                  unsustainable intensities.
                </span>
                <cite className="author"> &mdash; G.Glassman</cite>
              </blockquote>
              <blockquote>
                <span className="quote4 sidekick">
                  Fitness is a small, small world within the universe of
                  movement.
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
        </div>
        <div className="section">
          <div className="section-wrapper">
            <div className="section-title">
              READY TO TRACK <br></br> YOUR <br></br> PERFORMANCES?
            </div>
            <div className="section-text">
              Recording your performances for each of your work out sessions is
              the key of progress and consequently of success. #WORD helps you
              to record, track and therefore have an accurate overview of your
              progress. Enter your number of reps, the weights and all the
              useful information to track to become a better athlete
            </div>
            <div className="section-buttons">
              <button onClick={this.opensweetalert}>Sign up</button>
              <button onClick={this.opensweetalert}>Log in</button>
            </div>
          </div>
          <div className="section-carousel">
            <AliceCarousel
              autoPlay={true}
              autoPlayInterval={4500}
              infinite={true}
              animationType="fadeout"
              animationDuration={5000}
              buttonsDisabled={true}
              responsive={responsive}
            >
              <img
                src={image25}
                className="sliderimg"
                alt="Men doing bridge movement"
              />

              <img
                src={image26}
                className="sliderimg img26"
                alt="Men doing weighlifting"
              />

              <img
                src={image7}
                className="sliderimg"
                alt="Men doing handstand"
              />

              <img
                src={image24}
                className="sliderimg img24"
                alt="Men grabbing dumbells"
              />
              <img
                src={image1}
                className="sliderimg img1"
                alt="Handstand-hold-position-man"
              />

              <img src={image17} className="sliderimg" alt="Men doing gym movement on a chair" />
    
              <img
                src={image21}
                className="sliderimg"
                alt="Men doing gym movement"
              />
              {/* <img
                src={image12}
                className="sliderimg img12"
                alt="Man doing sissi squat"
              /> */}
              <img
                src={image9}
                className="sliderimg"
                alt="Men doing lsit movement"
              />
              {/* <img
                src={image10}
                className="sliderimg"
                alt="Men doing sissi squat"
              /> */}
              <img
                src={image13}
                className="sliderimg"
                alt="Men doing back flip-"
              />

              {/* <img src={image18} className="sliderimg" alt="Men doing bridge" /> */}
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
                src={image20}
                className="sliderimg img20"
                alt="Men holding slam ball"
              />
            </AliceCarousel>
          </div>
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
            Hand-crafted with
            <img className="heart-icon" src={heart} alt="love" />
            somewhere over the rainbow
          </div>
          <div className="footer-signature"> by Cléo©</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
