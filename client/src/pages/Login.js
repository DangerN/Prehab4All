// import React, { useState ,useHistory} from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import { Link } from "react-router-dom";
// import API from "../utils/API";
// // import Hero from "../components/Hero";
// // import Container from "../components/Container";

// let userId = localStorage.getItem("userID");

// function Login() {
 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);


//   const handleEmail = e => {
//     setEmail(e.target.value);
//   };
//   const handlePassword = e => {
//     setPassword(e.target.value);
//   };

//   const handleSignIn = e => {
//     console.log("handleSignIn");
//     e.preventDefault();
//     API.getLoggedUser({ email: email, password: password })
//       .then(response => {
//         console.log("get one user", response.data);
//         if (response.data) {
//           API.getUserHash(email).then(response => {
//             console.log("hash response", response.data);
         
//             window.localStorage.setItem("userID", response.data._id);
//             window.location.replace("/Choices");

//           });
//          alert("successful Login");

//           handleClose();
        
//         } else {
//           console.log("No user exit");
//         }
//       })
//       .catch(error => {
//         alert("User does not exist.");
//         console.log(error);
//       });
//   };
  
//   // function loginUser(email, password) {
//   //   $.post("/api/login", {
//   //     email: email,
//   //     password: password
//   //   })
//   //     .then(function () {
//   //       window.location.replace("/");
//   //       // If there's an error, log the error
//   //     })
//   //     .catch(handleLoginErr);
//   // }
 
 

//   return (
//     <MDBContainer>
//       {/* Login */}
//     <MDBRow>
//          <MDBCol md="6">
//            <form>
//              <p className="h5 text-center mb-4"></p>
//              <div className="grey-text">
//                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//                  success="right"  value={email || ''}
//                  onChange={handleEmail}/>
//                <MDBInput label="Type your password" icon="lock" group type="password" validate  value={password || ''}
//                      onChange={handlePassword} />
//              </div>
//              <div className="text-center">
//                <MDBBtn id="sign-in" variant="primary" onClick={handleSignIn}>signin</MDBBtn>
//              </div>
//            </form>
//          </MDBCol>
//        </MDBRow>
    
//       </MDBContainer>
  
//   )}

// export default Login;

import React, { useState } from "react";
import {Button,} from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import API from "../utils/API"
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarL from "../components/NavbarL/index";
let userId = localStorage.getItem("userID");
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleSignIn = e => {
    console.log("handleSignIn");
    e.preventDefault();
    API.getLoggedUser({ email: email, password: password })
      .then(response => {
        console.log("get one user", response.data);
        if (response.data) {
          API.getUserHash(email).then(response => {
            console.log("hash response", response.data);
            window.localStorage.setItem("userID", response.data._id);
            window.location.replace("/Choices");
          });
         alert("successful Login");
          handleClose();
        } else {
          console.log("No user exit");
        }
      })
      .catch(error => {
        alert("User does not exist.");
        console.log(error);
      });
  };
 
  return (
    <div>
    <NavbarL />
    <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Become a Member</h1>
        </HeroSmall>
          <br></br>
          <br></br>
          <br></br>
       
                <MDBContainer>
                  <MDBRow>
              <MDBCol md="6">
                <form>
                  <div className="grey-text">

                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                      success="right"  value={email || ''}
                      onChange={handleEmail}/>
                    <MDBInput label="Type your password" icon="lock" group type="password" validate  value={password || ''}
                          onChange={handlePassword} />
                  </div>
                  <div className="text-center">
                    <MDBBtn className="h5 text-center mb-4" id="sign-in" variant="primary" onClick={handleSignIn}> signin</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
          </div>
        
  </div>
        
    
  );
}
export default Login;