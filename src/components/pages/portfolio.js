import React from 'react';
import '../../components/style.css';

function Portfolio() {

  return (
    <>
      <div className="container mt-lg-5 ">
        <div className="row col-12  my-5 ">
          <section className="col-8 bg-white mb-5">
            <h2 className="header m-auto">Portfolio</h2>
            <div className="row justify-content-center mt-3 pb-3 ">
              <div className=" col-lg-5 m-1">
                <img src={require("../../img/technics-q-c-640-480-1.jpg")} className="img-fluid " alt="" />
                <div className=" position-absolute portfolioname ">Hangman</div>
              </div>
              <div className=" col-lg-5 m-1">
                <img src={require("../../img/technics-q-c-640-480-2.jpg")} className="img-fluid " alt="" />
                <div className="position-absolute portfolioname ">RPG Game</div>
              </div>
              <div className=" col-lg-5 m-1">

                <img src={require("../../img/technics-q-c-640-480-5.jpg")} className="img-fluid " alt="" />
                <div className="position-absolute portfolioname">Trivia Game</div>
              </div>
              <div className=" col-lg-5 m-1">

                <img src={require("../../img/technics-q-c-640-480-7.jpg")} className="img-fluid " alt="" />
                <div className="position-absolute portfolioname">Rutgers Info Widget</div>
              </div>
              <div className=" col-lg-5 m-1 ">

                <img src={require("../../img/technics-q-c-640-480-9.jpg")} className="img-fluid " alt="" />
                <div className="position-absolute portfolioname ">Rock Paper Scissors</div>
              </div>
            </div>
          </section>



          <section className="connect bg-light col-3 ml-auto pb-1 ">
            <h2 className="header">Connect with Me</h2>
            <div className=" row col-12 justify-content-center">
              <a href="https://github.com/" className="col-4">
                <img src={require("../../img/github-128.png")} className="img-fluid float-left d-inline " alt="" />
              </a>
              <a href="https://www.linkedin.com/login/tr" className="col-4">
                <img src={require("../../img/linkedin-128.png")} className="img-fluid float-left d-inline " alt="" />
              </a>
              <a href="https://stackoverflow.com/" className="col-4">
                <img src={require("../../img/stackoverflow-128.png")} className="img-fluid float-left d-inline " alt="" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default Portfolio