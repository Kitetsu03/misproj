import { IoPersonOutline } from "react-icons/io5";

const MembersPortal = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="my-logo"></div>
        <div className="portal-title">MEMBERS PORTAL</div>
        <hr className="separator" />
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <h1 className="welcome-title">WELCOME BACK, KIM!</h1>
          <p className="welcome-subtext">Here's your church dashboard.</p>
        </section>

        <section className="top-cards">
          <div className="card">
            <div className="card-icon-text">
              <IoPersonOutline />
              <span>This Year</span>
            </div>
            <div className="card-value">10,000 Given</div>
          </div>
          <div className="card">
            <div className="card-icon-text">
              <i className="bx bx-user"></i>
              <span>Next Volunteer</span>
            </div>
            <div className="card-value">Sunday 10 AM</div>
          </div>
        </section>

        <section className="section-card">
          <div className="section-title">
            <i className="bx bx-calendar"></i>
            <strong>Next LifeGroup Meeting</strong>
          </div>
          <p className="meeting-group">
            {" "}
            <strong>The Smith’s Family Lifegroup</strong>
          </p>
          <p>Thursday, October 12 at 7:00 AM</p>
          <p>Topic: "Walking in Faith - Hebrews 11"</p>
          <button className="btn">Add To Calendar</button>
          <button className="btn">View Group Details</button>
        </section>

        <section className="section-card">
          <div className="section-title">
            <i className="bx bx-peso"></i>
            <strong>Recent Giving</strong>
          </div>

          <div className="giving-list">
            <div className="give-row">
              <span>October 1 - General Fund</span>
              <span>₱150.00</span>
            </div>

            <div className="give-row">
              <span>September 24 - Missions</span>
              <span>₱230.00</span>
            </div>

            <div className="give-row">
              <span>September 17 - General Fund</span>
              <span>₱150.00</span>
            </div>
          </div>
          <button className="btn">View Full History</button>
        </section>

        <section className="section-card">
          <strong>Attendance Summary</strong>

          <div className="attendance-list">
            <div className="attendance-row">
              <span>Sunday Service</span>
              <span className="status present">Present</span>
            </div>

            <div className="attendance-row">
              <span>LifeGroup (Oct 5)</span>
              <span className="status present">Present</span>
            </div>

            <div className="attendance-row">
              <span>Prayer Meeting (Oct 4)</span>
              <span className="status absent">Absent</span>
            </div>

            <div className="attendance-row">
              <span>Sunday Service (Oct 1)</span>
              <span className="status present">Present</span>
            </div>
          </div>

          <div className="attendance-footer">
            <span>This Month</span>
            <span>75% Attendance</span>
          </div>
          <button className="btn">View Full Attendance</button>
        </section>

        <section className="section-card announcement">
          <strong>Church Announcements</strong>
          <p className="announcement-title">Prayer Meeting Tonight</p>
          <p className="announcement-desc">
            Join us at 7 PM in the sanctuary for our weekly prayer gathering.
          </p>
          <button className="btn">View All Announcement</button>
        </section>
      </main>

      <nav
        className="bottom-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <a className="nav-item nav-selected" aria-current="page">
          <i className="bx bx-home"></i>
          <span>Home</span>
        </a>

        <a target="_self" href="./memberportal02.html" className="nav-item">
          <i className="bx bx-user"></i>
          <span>Profile</span>
        </a>

        <a target="_self" href="./membersportal03.html" className="nav-item">
          <i className="bx bxs-wallet"></i>
          <span>Giving</span>
        </a>
      </nav>
    </div>
  );
};

export default MembersPortal;
