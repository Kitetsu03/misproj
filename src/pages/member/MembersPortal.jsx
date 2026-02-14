import { MembersNav } from "../../components/MembersNav";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { LuPhilippinePeso } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import { BlackButton } from "../../components/ui/buttons/BlackButton";
import { ViewAllAnouncement } from "../../components/ViewAllAnouncement";
import { ViewFullAttendace } from "../../components/ViewFullAttendance";
import { ViewFullHistory } from "../../components/ViewFullHistory";

function MemberPortal() {
  const navitem = [
    {
      id: 1,
      icon: <FaHome />,
      text: "Home ",
      path: "/member",
    },
    {
      id: 2,
      icon: <MdPerson />,
      text: "Profile",
      path: "/profile",
    },
    {
      id: 3,
      icon: <FaWallet />,
      text: "Giving",
      path: "/giving",
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-complementary border-t shadow-md">
        <div className="max-w-4xl mx-auto flex bg-complementary">
          {navitem.map((item) => (
            <MembersNav
              key={item.id}
              icon={item.icon}
              title={item.text}
              to={item.path}
            />
          ))}
        </div>
      </div>
      <div className="min-h-screen pb-20">
        <div className="card w-full md:w-full pt-5">
          <div className="card-header">
            <div className="my-logo justify-center"></div>
            <h2 className="cursor-default text-center pb-2 text-[min(5vw,20px)] md:text-[min(5vw,30px)]"></h2>
            <hr className="p-1 border-white bg-white" />
          </div>
        </div>

        <main className="main-content px-5 space-y-5">
          <section className="welcome-section text-center p-4  ">
            <h1 className="welcome-title font-extrabold text-3xl sm:text-5xl md:text-6xl p-4 font-secondary ">
              WELCOME BACK, KIM!
            </h1>
            <p className="welcome-subtext text-xl">
              Here's your church dashboard.
            </p>
          </section>

          <div className="font-secondary space-y-5">
            <section className="cards-container flex gap-4 sm:w-full md:w-3/4 mx-auto">
              <div id="total-giving-card" className="flex-5 bg-white w-full p-4 shadow rounded-xl">
                <div className="flex items-center gap-4 sm:justify-center">
                  <FaRegHeart className="text-3xl" />
                  <div className="flex flex-col">
                    <span>This Year</span>
                    <span className="font-semibold">10,000 Given</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="font-secondary space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <section className="section-card bg-white w-full p-4 shadow rounded-xl">
              <div className="section-title flex items-center gap-4 mb-3">
                <FaCalendar />
                <strong>Next LifeGroup Meeting</strong>
              </div>

              <div className="text-block space-y-2 mb-4">
                <p className="meeting-group font-semibold text-lg">
                  The Smith’s Family Lifegroup
                </p>
                <p>Thursday, October 12 at 7:00 AM</p>
                <i>Topic: "Walking in Faith - Hebrews 11"</i>
              </div>

              <div className="flex flex-col items-center gap-3 mt-2">
                <button className="btn flex items-center gap-3 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  <FaCalendar />
                  Add To Calendar
                </button>

                <button className="btn flex items-center gap-3 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  <TbListDetails />
                  View Group Details
                </button>
              </div>
            </section>

            <section className="section-card bg-white w-full p-4 shadow rounded-xl">
              <div className="section-title flex items-center gap-4 mb-4">
                <LuPhilippinePeso />
                <strong>Recent Giving</strong>
              </div>

              <div className="giving-list space-y-3 mb-4">
                <div className="give-row flex justify-between items-center">
                  <span>October 1 — Tithes</span>
                  <span className="font-semibold">₱150.00</span>
                </div>

                <div className="give-row flex justify-between items-center">
                  <span>September 24 — Missions</span>
                  <span className="font-semibold">₱230.00</span>
                </div>

                <div className="give-row flex justify-between items-center">
                  <span>September 17 — Pledges</span>
                  <span className="font-semibold">₱150.00</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="btn flex items-center gap-3 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  <TbListDetails />
                  View Full History
                </button>
              </div>
            </section>

            <section className="section-card bg-white w-full p-4 shadow rounded-xl">
              <div className="section-title flex items-center gap-4 mb-4">
                <FaUserCheck className="text-xl" />
                <strong>Attendance Summary</strong>
              </div>

              <div className="attendance-list space-y-3">
                <div className="attendance-row flex justify-between items-center">
                  <span>Sunday Service</span>
                  <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-green-100 text-green-700">
                    Present
                  </span>
                </div>

                <div className="attendance-row flex justify-between items-center">
                  <span>LifeGroup (Oct 5)</span>
                  <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-green-100 text-green-700">
                    Present
                  </span>
                </div>

                <div className="attendance-row flex justify-between items-center">
                  <span>Prayer Meeting (Oct 4)</span>
                  <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-red-100 text-red-700">
                    Absent
                  </span>
                </div>

                <div className="attendance-row flex justify-between items-center">
                  <span>Sunday Service (Oct 1)</span>
                  <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-green-100 text-green-700">
                    Present
                  </span>
                </div>
              </div>

              <div className="attendance-footer flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>This Month</span>
                <span>75% Attendance</span>
              </div>

              <div className="flex justify-center mt-4">
                <button className="btn flex items-center gap-3 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                <BlackButton
                  val="View All Anouncement"
                  exc="Lagyan nyo"
                  comp={<ViewFullAttendace />}
                />
                </button>
              </div>
            </section>

            <section className="section-card bg-white w-full p-4 shadow rounded-xl">
              <div className="section-title flex items-center gap-4 mb-4">
                <MdAnnouncement />
                <strong>Church Announcements</strong>
              </div>

              <div className="announcement-text space-y-2 mb-4">
                <p className="announcement-title font-semibold text-lg">
                  Prayer Meeting Tonight
                </p>
                <p className="announcement-desc text-gray-700">
                  Join us at 7 PM in the sanctuary for our weekly prayer
                  gathering.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <button className="btn flex items-center gap-3 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
               <BlackButton
                  val="View All Anouncement"
                  exc="OK"
                  comp={<ViewAllAnouncement />}
                />
                </button>
              </div>
            </section>
          </div>

        </main>
      </div>
    </>
  );
}

export default MemberPortal;
