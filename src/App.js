import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import KPICard from "./components/KPICard";
import CaseUpdates from "./components/CaseUpdates";
import { makeMatters } from "./makeFakeData";
import EmployeeStatus from "./components/EmployeeStatus";
import PieChart from "./components/PieChart";
import InternalSatisfaction from "./components/InternalSatisfaction";
import SubHeading from "./components/SubHeading";
import DashboardWrapper from "./components/DashboardWrapper";

const { matters, KPIList, employeeStatus } = makeMatters(500);
const ongoingMatters = matters.filter((matter) => matter.active === true);

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <DashboardWrapper>
        <SubHeading text="KPI Overview" />
        <div className="row">
          {/* KPI List */}
          {KPIList.map((KPI, i) => (
            <KPICard key={i} title={KPI.title} value={KPI.value} />
          ))}
          {/* KPI List End */}
          <SubHeading text="Matter Details" />
          <CaseUpdates matters={ongoingMatters} />
          <EmployeeStatus employeeStatus={employeeStatus} />

          <SubHeading text="Active Cases" />
          <PieChart
            title="Active Matters by Category"
            id="matters-by-category"
          />
          <PieChart
            title="Internal vs. External Cost"
            id="internal-vs-external"
          />
          <PieChart
            title="Active Matters by Department"
            id="matters-by-department"
          />

          <SubHeading text="Client Details" />
          <InternalSatisfaction />
        </div>
      </DashboardWrapper>
    </>
  );
}

export default App;
