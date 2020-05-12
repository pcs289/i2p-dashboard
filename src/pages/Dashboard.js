import {Header} from "../components/Header";
import DashboardWrapper from "../components/DashboardWrapper";
import SubHeading from "../components/SubHeading";
import KPICard from "../components/KPICard";
import CaseUpdates from "../components/CaseUpdates";
import EmployeeStatus from "../components/EmployeeStatus";
import PieChart from "../components/PieChart";
import InternalSatisfaction from "../components/InternalSatisfaction";
import React, {Component} from "react";
import {makeMatters} from "../makeFakeData";
import {withDashboard} from "../contexts/DashboardContext";

const { matters, KPIList, employeeStatus } = makeMatters(500);
const ongoingMatters = matters.filter((matter) => matter.active === true);

class Dashboard extends Component {

    render() {
        const {isActive, list} = this.props;
        return (<>
            <Header />
            <DashboardWrapper>
                <SubHeading text="KPI Overview" />
                <div className="row">
                    {/* KPI List */}
                    {KPIList.map((KPI, i) => (
                        isActive(KPI.title) ? <KPICard key={i} title={KPI.title} value={KPI.value} /> : null
                    ))}
                    {/* KPI List End */}
                    { isActive('Case Updates') || isActive('Employees Status') ? <SubHeading text="Matter Details" /> : null }
                    { isActive('Case Updates') ? <CaseUpdates matters={ongoingMatters} /> : null }
                    { isActive('Employees Status') ? <EmployeeStatus employeeStatus={employeeStatus} /> : null }

                    { isActive('Active Matters by Category') || isActive('Internal vs. External Cost') || isActive('Active Matters by Department') ? <SubHeading text="Active Cases" /> : null }
                    { isActive('Active Matters by Category') ? <PieChart title="Active Matters by Category" id="matters-by-category" /> : null }
                    { isActive('Internal vs. External Cost') ? <PieChart title="Internal vs. External Cost" id="internal-vs-external"/> : null }
                    { isActive('Active Matters by Department') ? <PieChart title="Active Matters by Department" id="matters-by-department"/> : null }

                    { isActive('Internal Customer Satisfaction') ? <><SubHeading text="Client Details" /> <InternalSatisfaction /></> : null }
                </div>
            </DashboardWrapper>
        </>);
    }
}

export default withDashboard(Dashboard);
