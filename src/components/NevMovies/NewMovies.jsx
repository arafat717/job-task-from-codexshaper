import "./NewMovies.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaClock, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../photos/pictures/Rectangle 202.png";
import img2 from "../../photos/pictures/Rectangle 203.png";
import img4 from "../../photos/pictures/Rectangle 205.png";
import img5 from "../../photos/pictures/Rectangle 206.png";
import img6 from "../../photos/pictures/Rectangle 207.png";
import { IoHomeOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";
import { FaPlay, FaStar } from "react-icons/fa6";

const NewMovies = () => {
  return (
    <div className="newMovies">
      <div className="scroll">
        <div className="scroll-title">
          <h1>Newest releases</h1>
          <IoIosArrowForward
            style={{ fontSize: "40px", color: "white" }}
          ></IoIosArrowForward>
        </div>
        <div className="scroll-arrow">
          <FaArrowLeft
            style={{
              fontSize: "22px",
              color: "white",
              border: "3px solid white",
              padding: "18px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          ></FaArrowLeft>
          <FaArrowRight
            style={{
              fontSize: "22px",
              color: "white",
              border: "3px solid white",
              padding: "18px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          ></FaArrowRight>
        </div>
      </div>
      <div>
        <div className="allnewmovies">
          <div className="cardimg">
            <img className="img" src={img1} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
          <div className="cardimg">
            <img className="img" src={img2} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
          <div className="cardimg">
            <img className="img" src={img1} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
          <div className="cardimg">
            <img className="img" src={img4} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
          <div className="cardimg">
            <img className="img" src={img5} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
          <div className="cardimg">
            <img className="img" src={img6} alt="" />
            <div className="shareIcons">
              <p>
                <IoHomeOutline className="shareicon"></IoHomeOutline>
              </p>
              <p>
                <FaSearch className="shareicon"></FaSearch>
              </p>
              <p style={{ position: "relative" }}>
                <GoDeviceCameraVideo className="shareicon"></GoDeviceCameraVideo>
              </p>
              <p>
                <RiPlayList2Line className="shareicon"></RiPlayList2Line>
              </p>
            </div>
            <div>
              <p className="playicons">
                <FaPlay className="playIcon"></FaPlay>
              </p>
            </div>
            <div className="cardpara">
              <h1 className="cardTitle">World war 02</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaStar style={{ fontSize: "20px" }}></FaStar>{" "}
                  <span>4.9</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                  <span>02h 30m</span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
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
              <p style={{ color: "#999999", marginTop: "8px" }}>
                Action, Comedy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovies;
