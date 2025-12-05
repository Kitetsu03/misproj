import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

function GatekeeperNav() {
  const navRef = useRef();
  return (
    <>
      <nav id="sidebar" className="sticky w-80 flex-row " ref={navRef}>
        <ul class="nav flex-column navbar-expand-lg">
          <a class="toggle" onclick="toggleNav1()">
            <span class="hamburger text-white flex justify-end mt-1 me-3 fs-3">
              <hr />
              <hr />
              <hr />
            </span>
          </a>
          <span class="admin text-white flex justify-center items-center">
            <BsPerson />
          </span>
          <span class="navtitle border-bottom rounded-5 text-white flex justify-center items-center mb-2">
            Admin
          </span>
          <li class="nav-item">
            <a
              class="nav-link active bg-info-subtle text-info-emphasis"
              aria-current="page"
              href="#"
            >
              <span class="icon">
                <BsPerson />
              </span>
              <span class="text"> Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon">
                <BsPerson />
              </span>
              <span class="text"> Users & Access</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon">
                <BsPerson />
              </span>
              <span class="text"> Members Data</span>
            </a>
          </li>
          <li class="nav-item">
            <button className="dropdown-btn">
              <BsPerson />
              <span class="icon">Reports & Analytics</span>
              <BsPerson />
            </button>
            <ul>
              <li>Overview</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon">
                <BsPerson />
              </span>
              <span class="text">System Settings</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="icon">
                <BsPerson />
              </span>
              <span class="text">Log-out</span>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="container">
          <h2>Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quae, deserunt recusandae perferendis accusamus adipisci animi porro
            repellendus possimus iure illum, inventore deleniti eos soluta at,
            sunt error omnis et?
          </p>
        </div>
        <div className="container">
          <h2>Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quae, deserunt recusandae perferendis accusamus adipisci animi porro
            repellendus possimus iure illum, inventore deleniti eos soluta at,
            sunt error omnis et?
          </p>
        </div>
        <div className="container">
          <h2>Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quae, deserunt recusandae perferendis accusamus adipisci animi porro
            repellendus possimus iure illum, inventore deleniti eos soluta at,
            sunt error omnis et?
          </p>
        </div>
      </main>
    </>
  );
}

export default GatekeeperNav;
