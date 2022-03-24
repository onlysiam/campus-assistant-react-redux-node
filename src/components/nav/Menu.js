import { motion } from "framer-motion";
import { menuAnimation } from "../Animation";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//reducer
import { userLogout } from "../../store/user";
const Menu = ({ navbarScroll, setMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handlers
  const profileHandler = () => {
    setMenu(false);
    navigate("/profile");
  };
  const logoutHandler = () => {
    setMenu(false);
    dispatch(userLogout());
    navigate("/home");
  };
  return (
    <motion.div
      variants={menuAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={
        (navbarScroll
          ? "bg-navPurple text-white "
          : "bg-white text-gray-700 ") +
        "flex flex-col justify-start items-center w-full rounded px-2 py-2 cursor-pointer duration-100"
      }
    >
      <h1
        onClick={profileHandler}
        className="flex justify-center items-center text-md font-goth w-full font-semibold px-2 py-2 rounded hover:bg-secondary hover:text-white duration-100"
      >
        Profile
      </h1>
      <h1 className="flex justify-center items-center text-md font-goth w-full font-semibold px-2 py-2 rounded hover:bg-secondary hover:text-white duration-100">
        Outfits
      </h1>
      <h1
        onClick={logoutHandler}
        className="flex justify-center items-center text-md font-goth w-full font-semibold px-2 py-2 rounded hover:bg-secondary hover:text-white duration-100"
      >
        Logout
      </h1>
    </motion.div>
  );
};

export default Menu;
