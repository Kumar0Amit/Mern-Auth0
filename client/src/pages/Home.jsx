import React, { useContext } from "react";
import Hero from "../components/Hero";
import Instructor from "../components/Instructor";
import Technologies from "../components/Technologies";
import "../styles/Home.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const logout = async () => {
    await axios
      .get(
        // Use the environment variable for the base URL
        `${import.meta.env.VITE_API_BASE_URL}api/v1/user/logout`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.error(err);
      });
  };

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <>
      <section className="home">
        <Hero />
        <Instructor />
        <Technologies />
        <Footer />
        <button onClick={logout}>Logout</button>
      </section>
    </>
  );
};

export default Home;


// import React, { useContext } from "react";
// import Hero from "../components/Hero";
// import Instructor from "../components/Instructor";
// import Technologies from "../components/Technologies";
// import "../styles/Home.css";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { Context } from "../main";
// import { Navigate, useNavigate } from "react-router-dom";
// import Footer from "../layout/Footer";

// const Home = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

//   const logout = async () => {
//     await axios
//       .get("http://localhost:3000/api/v1/user/logout", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setUser(null);
//         setIsAuthenticated(false);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//         console.error(err);
//       });
//   };

//   if (!isAuthenticated) {
//     return <Navigate to={"/auth"} />;
//   }

//   return (
//     <>
//       <section className="home">
//         <Hero />
//         <Instructor />
//         <Technologies />
//         <Footer />
//         <button onClick={logout}>Logout</button>
//       </section>
//     </>
//   );
// };

// export default Home;