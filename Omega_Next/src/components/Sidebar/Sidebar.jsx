import React from "react";

import Link from "next/link";
import navLinks from "@/assets/dummy-data/navLinks";
import { useRouter } from "next/router";

const Sidebar = ({toggle}) => {


  const router = useRouter()
  return (
    <div className="sidebar" style={toggle?{}:{width:90}}>
      <div className="sidebar__top">
        <h2>
          <span>
            <i className="ri-taxi-line"></i>
          </span>{" "}
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <Link
                  href={item.path}
                  className={ router.pathname === item.path ? "nav__active nav__link" : "nav__link"}
                >
                  {item.icon}

                  {toggle && item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;