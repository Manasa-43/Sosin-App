import React from "react";
export default function Login() {
  const [loginFormData, setLoginFormData]= React.useState({
      email:"",
      password:""
  })

  // console.log(loginFormData)

  function handleChange(event){
   const {name,value} =event.target
   setLoginFormData(prev=>(
    {
      ...prev,
      [name]: value
    }
   ))
  }
  // console.log(loginFormData)

  function handleSubmit(event){
    console.log("Login is working")
    console.log(loginFormData)
    event.preventDefault()
  

  }
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-8 login-box bg-red text-light d-flex flex-column justify-content-end pb-5 ps-5 ">
          <h2 className="fw-bold">Signin with Sosin Classes</h2>
          <a href="./" className="link-light text-decoration-none">
            <h4 className="fw-light">
              <b>Home</b>
            </h4>
          </a>
        </div>

        <div className="col-md-4 pt-5">
          <div>
            
              <div className="d-flex align-items-center justify-content-center" >
                
                <img src= {require("../assets/Sosin Logo.jpeg")} alt="Logo" className="rounded-circle logo-img"></img>
              
            <h6 className="txt-red text-center fw-bolder pt-3 pb-2">
                Sosin
                <br />
                Classes
              </h6>
              </div>
            <h4 className="fw-semibold text-center">Login into Your Account</h4>
            <form className="my-3" onSubmit={handleSubmit}>
              <div className="mx-3">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                >
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="exampleInputEmail1"
                  placeholder="eg: John"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  name="email"
                  value={loginFormData.email}
                />
              </div>
              <div className="mb-2 mx-3">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold  mt-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="**********"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleChange}
                />
              </div>
              <a
                href="./"
                className="d-flex justify-content-end txt-grey mb-3 mx-3 text-decoration-none"
              >
                <p className="mb-0">Forgot Password?</p>
              </a>

              <div className=" d-flex justify-content-center mb-3">
                <button
                  type="submit"
                  className=" fw-semibold bg-red border-0 text-light rounded-pill px-5 py-2"
                  
                >
                  Login
                </button>
              </div>
              <h6 className=" text-center txt-grey">
                Don't have an account?
                <span>
                  <a className="txt-red text-decoration-none ms-1" href="./">
                     Register Now
                  </a>
                </span>
              </h6>
              <p className="text-center txt-grey py-1">© Erasmus Training Services Pvt. Ltd.2022</p>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
