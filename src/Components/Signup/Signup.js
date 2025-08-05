// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import anime from "animejs";
// import background from "../../images/pic.jpg";
// import "./Signup.css";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   useEffect(() => {
//     let current = null;

//     const nameInput = document.querySelector("#name");
//     const emailInput = document.querySelector("#email");
//     const passwordInput = document.querySelector("#password");
//     const submitInput = document.querySelector("#submit");

//     const handleFocus = (offset, dashArray) => {
//       if (current) current.pause();
//       current = anime({
//         targets: "path",
//         strokeDashoffset: {
//           value: offset,
//           duration: 700,
//           easing: "easeOutQuart",
//         },
//         strokeDasharray: {
//           value: dashArray,
//           duration: 700,
//           easing: "easeOutQuart",
//         },
//       });
//     };

//     nameInput?.addEventListener("focus", () => handleFocus(0, "240 1386"));
//     emailInput?.addEventListener("focus", () => handleFocus(-240, "240 1386"));
//     passwordInput?.addEventListener("focus", () => handleFocus(-480, "240 1386"));
//     submitInput?.addEventListener("focus", () => handleFocus(-730, "530 1386"));

//     return () => {
//       nameInput?.removeEventListener("focus", () => handleFocus(0, "240 1386"));
//       emailInput?.removeEventListener("focus", () => handleFocus(-240, "240 1386"));
//       passwordInput?.removeEventListener("focus", () => handleFocus(-480, "240 1386"));
//       submitInput?.removeEventListener("focus", () => handleFocus(-730, "530 1386"));
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform backend registration here

//     alert("Registered successfully!");
//     navigate("/login"); // Redirect after success
//   };

//   return (
//     <div
//       className="page"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container">
//         <div className="left">
//           <div className="login">Sign Up</div>
//           <div className="eula">
//             <b>Join Devotech and start your wellness journey today.</b>
//           </div>
//         </div>
//         <div className="right">
//           <svg viewBox="0 0 320 300">
//             <defs>
//               <linearGradient
//                 id="linearGradient"
//                 x1="13"
//                 y1="193.5"
//                 x2="307"
//                 y2="193.5"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop style={{ stopColor: "#00ffff" }} offset="0" />
//                 <stop style={{ stopColor: "#ff00ff" }} offset="1" />
//               </linearGradient>
//             </defs>
//             <path
//               d="m 40,120 240,0 0,40 -240,0 z"
//               stroke="url(#linearGradient)"
//               strokeWidth="5"
//               fill="none"
//             />
//           </svg>
//           <form className="form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <input type="submit" id="submit" value="Register" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useEffect, useState } from "react";
import anime from "animejs";
import background from "../../images/pic.jpg";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let current = null;

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const submitInput = document.querySelector("#submit");

    const handleFocus = (offset, dashArray) => {
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: dashArray,
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    };

    const nameFocus = () => handleFocus(0, "240 1386");
    const emailFocus = () => handleFocus(-240, "240 1386");
    const passwordFocus = () => handleFocus(-480, "240 1386");
    const submitFocus = () => handleFocus(-730, "530 1386");

    nameInput?.addEventListener("focus", nameFocus);
    emailInput?.addEventListener("focus", emailFocus);
    passwordInput?.addEventListener("focus", passwordFocus);
    submitInput?.addEventListener("focus", submitFocus);

    return () => {
      nameInput?.removeEventListener("focus", nameFocus);
      emailInput?.removeEventListener("focus", emailFocus);
      passwordInput?.removeEventListener("focus", passwordFocus);
      submitInput?.removeEventListener("focus", submitFocus);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({ name: "", email: "", password: "" }); // Reset form
      } else {
        const err = await response.text();
        alert("Error: " + err);
      }
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <div
      className="page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="left">
          <div className="login">Sign Up</div>
          <div className="eula">
            <b>Join Devotech and start your wellness journey today.</b>
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style={{ stopColor: "#00ffff" }} offset="0" />
                <stop style={{ stopColor: "#ff00ff" }} offset="1" />
              </linearGradient>
            </defs>
            <path
              d="m 40,120 240,0 0,40 -240,0 z"
              stroke="url(#linearGradient)"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input type="submit" id="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
