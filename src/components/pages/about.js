import React from 'react';
import '../../components/style.css';
function About() {

    return (
        <>
            <div className="container mt-lg-5 ">
                <div className="row col-12  my-5 ">
                    <section className="col-8 bg-white mb-5">
                        <h2 className="header m-auto">About Me</h2>
                        <div className="p-2 ">
                            <img src={require("../../img/cat.jpg")} className="w-50  p-3 float-left d-inline " alt="" />
                            <p className="text lh-base ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem non dicta ipsum vitae, sunt eius rem unde? Necessitatibus dolorem architecto odit, qui similique, dignissimos a ipsa commodi sapiente, alias soluta. Itaque est exercitationem deleniti omnis repellendus veritatis porro architecto at, voluptatem sunt eligendi voluptatibus, animi iste? Qui, a deserunt dicta, nihil harum nam officia labore at odit doloremque fuga quidem temporibus cum, eius similique minima maiores! Recusandae in fugit deleniti, quos, est soluta esse reprehenderit possimus voluptatibus quidem minima illo similique voluptas laborum eligendi saepe unde ex modi quas iure. Sapiente nulla iure odio architecto fugiat quis nemo sequi!</p>
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
export default About