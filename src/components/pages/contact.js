import React from 'react';
import '../../components/style.css';
function Contact() {

    return (
        <>
            <div className="container mt-lg-5 ">
                <div className="row col-12  my-5 ">
                    <section className="col-lg-8 col-md-12 bg-white mb-5">
                        <h2 className="header m-auto">Contact</h2>
                        <div className="row justify-content-center mt-3 col-12 ">
                            <form action="" className="m-2 w-100">
                                <p>Name</p>
                                <input className="form-control" type="text" placeholder="John Smith"/>
                                    <p>Email</p>
                                    <input className="form-control" type="email" placeholder="example@gmail.com"/>
                                        <p>Message</p>
                                        <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Your message">
                                        </textarea>
                                        <button type="submit" className="btn btn-dark m-1">Submit</button>
                                    </form>
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
            export default Contact