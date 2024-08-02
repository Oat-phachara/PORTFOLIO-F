import { Outlet, Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Face5Icon from "@mui/icons-material/Face5";
import "./root.css";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>
          <a className="git" href="https://github.com/Oat-phachara">
            GITHUB CONTACTS
          </a>
        </h1>
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <Chip
              icon={<Face5Icon />}
              label="PHACHARA"
              variant="outlined"
              style={{ fontSize: "17px" }}
            />
          </Link>
        </div>
        <nav>
          <motion.div
            className="picture"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          />
          <section className="section">
            <div>
              <div className="flexitems">
                <MapPinIcon className="icon" />
                <a
                  href="https://maps.app.goo.gl/i34gidZ1uXFPuAC26"
                  target="_blank"
                  className="font"
                >
                  Thailand ,Bangkok
                </a>
              </div>
              <div className="flexitems">
                <BriefcaseIcon className="icon" />
                <a
                  href="https://www.workpoint.co.th/en/home"
                  target="_blank"
                  className="font"
                >
                  Creative Editor - Workpoint Entertainment
                </a>
              </div>
              <div className="flexitems">
                <BuildingLibraryIcon className="icon" />
                <a
                  href="https://www.bu.ac.th/th/"
                  target="_blank"
                  className="font"
                >
                  Bangkok University
                </a>
              </div>
            </div>
          </section>

          <ul style={{ fontSize: "24px" }}>
            <li>
              <Link to={`About`}>About</Link>
            </li>
            <li>
              <Link to={`Services`}>Services</Link>
            </li>
            <li>
              <Link to={`Portfolio`}>Portfolio</Link>
            </li>
            <li>
              <Link to={`Contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {" "}
        <Outlet />
      </div>
    </>
  );
}
