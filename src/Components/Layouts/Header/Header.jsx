import React, { useState } from "react";
import "./Header.css"
import Modal from "../Modal/Modal"

function Header() {
  const [show , setShow] = useState(false);
  const opencity =() =>{
    setShow(true);
  }
  

  return(
      <>
      
      <div className="header">
            <div>
                <img className="headerlogoicon" src="https://i.imgur.com/jaXIWIk.png" alt="logo icon" />
                <img className="headerMenuicon" src="https://i.imgur.com/dALQkvY.png" alt="menu icon" />
                <div className="headerloginsection">
                  <div className="headerloginimgsection">
                    <img className="headerloginicon" src="https://i.imgur.com/NJqP1D0.png" alt="login icon" />
                  </div>
                  <h2 className="headerlogintext">Login</h2>
                </div>
            </div>
            
            <div>
                <img className="headerlocationicon" src="https://i.imgur.com/O1XQO1e.png" alt="location icon" />
                <button className="headercityselector" name="headercity" onClick={() => opencity()}>
                  Greater Noida
                </button>
                <button className="headerlocalityselector" name="headercity">
                  Gaur City 2
                </button>
                <div className="headerSearchbar">
                  <img className="headersearchicon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Search.webp" alt="Search" />
                  <input class="headerSearch" type="text" placeholder="Search For Services" name="search"></input>
                  <button className="headermicbtn"><img className="headermicicon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Microphone.webp" alt="Search" /></button>
                </div>
            </div>

            <div className="headercatsection">
              <div className="headerCat">
                <img className="headercaticon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Group-31.webp"></img>
                <h2 className="headercattext">Fashion</h2>
              </div>
              <div className="headerCat">
                <img className="headercaticon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Group-32.webp"></img>
                <h2 className="headercattext">Pets</h2>
              </div>
              <div className="headerCat">
                <img className="headercaticon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Group-33.webp"></img>
                <h2 className="headercattext">Food & Beverages</h2>
              </div>
              <div className="headerCat">
                <img className="headercaticon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Group-34.webp"></img>
                <h2 className="headercattext">Groceries</h2>
              </div>
              <div className="headerCat">
                <img className="headercaticon" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Group-35.webp"></img>
                <h2 className="headercattext">Home Decor</h2>
              </div>
            </div>
            


      <Modal show={show} setShow={setShow} />
      </div>
      </>
  )
}

export default Header;