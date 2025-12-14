import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
export function LineChart() {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const handleResize = () => setResize((r) => r + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="card p-5 col-span-2 row-span-1 rounded-2xl h-72 sm:h-80 md:h-96 flex flex-col justify-start items-start w-full">
      <div className="w-full h-full max-w-4xl max-h-96 flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">MEMBERSHIP GROWTH</h2>
        <p>Total and active members over the last 6 months</p>
        <div className="w-full h-[180px] sm:h-[220px] md:h-64 lg:h-80">
          <Line
            key={resize}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
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
                  label: "Member Growth",
                  data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
