// import React, { useState } from "react";
// import { SiConsul } from "react-icons/si";
// import { BsPhoneVibrate } from "react-icons/bs";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { CgMenuGridO } from "react-icons/cg";
// // import images
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   //lets remove \nav for small
//   const [active, setActive] = useState("navBarMenu");
//   const handleToggle = () => {
//     if (active === "navBarMenu") {
//       setActive("navBarMenu showNavbar");
//     } else {
//       setActive("navBarMenu");
//     }
//   };
//   const [noBg, addBg] = useState("navBarTwo");
//   const addBgColor = () => {
//     if (window.scrollY >= 10) {
//       addBg("navBarTwo navbar_With_Bg");
//     } else {
//       addBg("navBarTwo");
//     }
//   };
//   window.addEventListener("scroll", addBgColor);
//   return (
//     <div>
//       <div className="navBar flex">
//         <div className="navBarOne flex">
//           <div>
//             <SiConsul className="icon" />
//           </div>

//           <ul className="none flex">
//             <li className="flex">
//               <BsPhoneVibrate />
//               Support
//             </li>
//             <li className="flex ">
//               <AiOutlineGlobal />
//               Languages
//             </li>
//           </ul>

//           <div className="atb flex">
//             <span>Sign In</span>
//             <span>Sign out</span>
//           </div>
//         </div>
//         <div className={noBg} navBarTwo>
//           <div className="logoDiv">
//             <img src={logo} className="logo" />
//           </div>

//           <div className={active} navBarTwo>
//             <ul className="menu flex">
//               <li onClick={handleToggle} className="listItem">
//                 Home
//               </li>
//               <li onClick={handleToggle} className="listItem">
//                 About
//               </li>
//               <li onClick={handleToggle} className="listItem">
//                 Offers
//               </li>
//               <li onClick={handleToggle} className="listItem">
//                 seats
//               </li>
//               <li onClick={handleToggle} className="listItem">
//                 Destinations
//               </li>
//             </ul>
//             <button onClick={handleToggle} className="btn flex btnOne">
//               Contact
//             </button>
//           </div>
//           <div onClick={handleToggle} className="toggleIcon">
//             <CgMenuGridO className="icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { SiConsul } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // remove navBar on small screens
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // add bgcolor on second nabVar
  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
            <li onClick={removeNavBar} className="listItem">
              Offers
            </li>
            <li onClick={removeNavBar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listItem">
              Destinations
            </li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
