import { CiMenuFries } from "react-icons/ci";
import { LuCrown } from "react-icons/lu";
import {
  IoPerson,
  IoHomeOutline,
  IoGameControllerOutline,
  IoAmericanFootballOutline,
} from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaClock } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import "./Navbar.css";
import icon from "../../photos/icons/logo.svg";
import img from "../../photos/pictures/file_1-removebg-preview.png";

const Navbar = () => {
  return (
    <div className="banner">
      <div className="transparent-gradient">
        <div>
          <img className="bannerImg" src={img} alt="" />
        </div>
      </div>
      <div className="banner-bgimg">
        <div className="banner-text">
          <h1>
            The Lord <br /> of The Rings
          </h1>
          <div className="details-buttom">
            <div className="review">
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                <span>4.9 Reviews</span>
              </p>
            </div>
            <div className="review">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                <span>02h 30m</span>
              </p>
            </div>
            <div className="review">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    background: "white",
                    padding: "3px",
                    color: "black",
                    fontSize: "11px",
                  }}
                >
                  4K
                </span>
                4k Quality
              </p>
            </div>
          </div>
          <p className="banner-sm-title">
            The Lord of the Rings is a trilogy of epic fantasy adventure films
            directed.
          </p>
          <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
            <button className="button-filled">
              <LuCrown style={{ fontSize: "16px" }}></LuCrown> Play Trailer
            </button>
            <button className="button-outline">
              <LuCrown style={{ fontSize: "16px" }}></LuCrown> add to list
            </button>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="div1">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <CiMenuFries className="me"></CiMenuFries>
        </div>
        <div className="div2">
          <button className="button-filled">
            <LuCrown style={{ fontSize: "16px" }}></LuCrown> Subscribe Now
          </button>
          <IoPerson
            style={{
              fontSize: "20px",
              color: "white",
              background: "rgba(31, 31, 31, 1)",
              padding: "20px",
              borderRadius: "50px",
            }}
          ></IoPerson>
        </div>
      </div>

      <div className="linkIcons">
        <p>
          <IoHomeOutline className="navIcon"></IoHomeOutline>
        </p>
        <p>
          <FaSearch className="navIcon"></FaSearch>
        </p>
        <p style={{ position: "relative" }}>
          <GoDeviceCameraVideo className="navIcon"></GoDeviceCameraVideo>
        </p>
        <p>
          <RiPlayList2Line className="navIcon"></RiPlayList2Line>
        </p>
        <p>
          <SlScreenDesktop className="navIcon"></SlScreenDesktop>
        </p>
        <p>
          <IoGameControllerOutline className="navIcon"></IoGameControllerOutline>
        </p>
        <p>
          <IoAmericanFootballOutline className="navIcon"></IoAmericanFootballOutline>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
