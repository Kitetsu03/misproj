import React from "react";

const MyGiving = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="my-logo"></div>
        <div className="portal-title">MEMBERS PORTAL</div>
        <hr className="separator" />
      </header>

      <main className="main-content">
        <section className="giving-header">
          <h2>MY GIVING</h2>
          <p>View your giving summary and fund allocation</p>
        </section>

        <section className="giving-summary-card">
          <div className="giving-summary-title">2025 Giving Summary</div>
          <div className="total-given">₱750.00</div>
          <div className="total-given-text">Total given this year</div>

          <div className="fund-bar-row">
            <span className="fund-label">General Fund</span>
            <span className="fund-amount">₱750.00 (75%)</span>
          </div>
          <div className="progress-bar general-fund"></div>

          <div className="fund-bar-row">
            <span className="fund-label">Missions</span>
            <span className="fund-amount">₱150.00 (15%)</span>
          </div>
          <div className="progress-bar missions"></div>

          <div className="fund-bar-row">
            <span className="fund-label">Building Fund</span>
            <span className="fund-amount">₱100.00 (10%)</span>
          </div>
          <div className="progress-bar building-fund"></div>
        </section>
      </main>

      <nav
        className="bottom-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          target="_self"
          href="./memberportal01.html"
          className="nav-item nav-selected"
          aria-current="page"
        >
          <i className="bx bx-home"></i>
          <span>Home</span>
        </a>

        <a target="_self" href="./memberportal02.html" className="nav-item">
          <i className="bx bx-user"></i>
          <span>Profile</span>
        </a>

        <a className="nav-item">
          <i className="bx bxs-wallet"></i>
          <span>Giving</span>
        </a>
      </nav>
    </div>
  );
};

export default MyGiving;
