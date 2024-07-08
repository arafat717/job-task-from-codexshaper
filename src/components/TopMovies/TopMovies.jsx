import "./TopMovies.css";
import img1 from "../../photos/pictures/Rectangle 189.png";
import img2 from "../../photos/pictures/Rectangle 190.png";
import img3 from "../../photos/pictures/Rectangle 191.png";
import img4 from "../../photos/pictures/Rectangle 192.png";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const TopMovies = () => {
  return (
    <div className="topMovies">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          position: "absolute",
          padding: "0 100px",
          top: "-90px",
        }}
      >
        <div className="card">
          <img src={img1} alt="" />
          <div className="cardbody">
            <h1 className="cardTitle">Samelill sronle</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaStar style={{ fontSize: "20px", color: "#D27304" }}></FaStar>{" "}
                <span>4.9</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                <span>02h 30m</span>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
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
            <p className="card-pera">Action, Comedy</p>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <div className="cardbody">
            <h1 className="cardTitle">The family monky</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaStar style={{ fontSize: "20px", color: "#D27304" }}></FaStar>{" "}
                <span>4.9</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                <span>02h 30m</span>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
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
            <p className="card-pera">Action, Comedy</p>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <div className="cardbody">
            <h1 className="cardTitle">Chiefly universes </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaStar style={{ fontSize: "20px", color: "#D27304" }}></FaStar>{" "}
                <span>4.9</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                <span>02h 30m</span>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
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
            <p className="card-pera">Action, Comedy</p>
          </div>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <div className="cardbody">
            <h1 className="cardTitle">World war 02</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaStar style={{ fontSize: "20px", color: "#D27304" }}></FaStar>{" "}
                <span>4.9</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
                }}
              >
                <FaClock style={{ fontSize: "20px" }}></FaClock>{" "}
                <span>02h 30m</span>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "#999999",
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
            <p className="card-pera">Action, Comedy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
