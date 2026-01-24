import GatekeeperNav from "../../components/GatekeeperNav.jsx";
import { FinanceTab } from "../../components/FinanceTab.jsx";
export function Finance() {
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <GatekeeperNav />
        <main className="flex-1 p-6 space-y-6 font-secondary">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-white">
                FINANCIAL MANAGEMENT
              </h1>
              <p className="text-white/90 text-sm">
                Tithes, Offerings, and Expenses Tracker
              </p>
            </div>
          </div>
          <FinanceTab />
        </main>
      </div>
    </>
  );
}
