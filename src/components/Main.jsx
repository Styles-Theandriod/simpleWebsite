import ifeanyi6 from "../assets/ifeanyi6.jpeg";
import "./Main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col " style={{ marginTop: "200px" }}>
          <h1 className="fs-1 fw-bolder">
            Creating Change Using <br /> Emerging Technological <br /> Solutions
          </h1>
          <p>
            Were dedicated to pioneering technology, nurturing growth,
            safeguarding data, fostering diversity, and driving positive global
            change through innovation.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "yellowgreen" }}
              />{" "}
              We provide innovative and reliable technology solutions.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "yellowgreen" }}
              />{" "}
              We provide innovative and reliable technology solutions.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "yellowgreen" }}
              />{" "}
              We provide innovative and reliable technology solutions.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "yellowgreen" }}
              />{" "}
              We provide innovative and reliable technology solutions.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckDouble}
                style={{ color: "yellowgreen" }}
              />{" "}
              We provide innovative and reliable technology solutions.
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={ifeanyi6} alt="" className="img-fluid rounded-5 img-thumbnail border-5 border-danger" />
        </div>
      </div>
    </div>
  );
}

export default Main;
