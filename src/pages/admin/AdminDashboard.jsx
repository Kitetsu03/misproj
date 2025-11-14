import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import AdminNav from "../../components/AdminNav";

function AdminDashboard() {
  return (
    <>
      <div className="min-h-dvh flex grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="body">
          <header className="p-5">
            <h1 className="text-3xl text-white">CHURCH MANAGEMENT DASHBOARD</h1>
            <p className="pt-3 text-white">
              Welcome back! Here's an overview of your church's key metrics and
              recent activity.
            </p>
          </header>
          <div className="grid grid-cols-4 grid-rows-5 gap-4 p-5">
            <div className="card p-5 row-start-1 rounded-2xl">
              <div className="text-black">
                Lorem ipsum dolor sit amet consecstetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
            </div>
            <div className="card p-5 row-start-1 rounded-2xl">
              <div className="text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
            </div>
            <div className="card p-5 row-start-1 rounded-2xl">
              <div className="text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
            </div>
            <div className="card p-5 row-start-1 rounded-2xl">
              <div className="text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
              {/* chart1 */}
            </div>
            <div className="card p-5 col-span-2 row-span-2 rounded-2xl">
              <div className="">
                <Bar
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sept",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    datasets: [
                      {
                        label: "My First Dataset",
                        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="card p-5 col-span-2 row-span-2 rounded-2xl">
              <div className="">
                <Doughnut
                  data={{
                    labels: ["Red", "Blue", "Yellow"],
                    datasets: [
                      {
                        label: "My First Dataset",
                        data: [300, 50, 100],
                        backgroundColor: [
                          "rgb(255, 99, 132)",
                          "rgb(54, 162, 235)",
                          "rgb(255, 205, 86)",
                        ],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="card p-5 row-span-2 col-start-1 row-start-4 rounded-2xl">
              <div className="text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
            </div>
            <div className="card p-5 col-span-3 row-span-2 col-start-2 row-start-4 rounded-2xl">
              <div className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quo labore et excepturi eos, dolores veniam est? Ducimus ut
                molestiae sapiente nesciunt facilis similique voluptatem,
                mollitia expedita? Ex, explicabo ut.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
