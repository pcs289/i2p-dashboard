import React, { Component, createContext } from 'react';

const DashboardContext = createContext();

const { Provider } = DashboardContext;

const DashboardConsumer = DashboardContext.Consumer;

export const withDashboard = Comp => {
    return class withDashboard extends Component {
      render() {
          return (
              <DashboardConsumer>
                  {({setActive, setInactive, isActive, list}) => (
                          <Comp
                              {...this.props}
                              setActive = {setActive}
                              setInactive = {setInactive}
                              isActive = {isActive}
                              list = {list}
                          />
                          )}
              </DashboardConsumer>
          );
      }
    };
};

export default class DashboardProvider extends Component {

    state = {
        list: localStorage.getItem('list') ?
            JSON.parse(localStorage.getItem('list')) :
            [
                { title: "Ongoing Matters", active: true },
                { title: "Matters closed this month", active: true },
                { title: "Avg. Matters per Lawyer", active: true },
                { title: "Expenses this month", active: true },
                { title: "Active Cases with external help", active: true },
                { title: "Average time to close case", active: true },
                { title: "Average spend on case", active: true },
                { title: "Total Matters resolved", active: true },
                { title: "Case Updates", active: true },
                { title: "Employees Status", active: true },
                { title: "Active Matters by Category", active: true },
                { title: "Internal vs. External Cost", active: true },
                { title: "Active Matters by Department", active: true },
                { title: "Internal Customer Satisfaction", active: true },
            ]
    };

    constructor(props) {
        super(props);
        this.isActive = this.isActive.bind(this);
        this.setActive = this.setActive.bind(this);
        this.setInactive = this.setInactive.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.list !== prevState.list) {
            localStorage.setItem('list', JSON.stringify(this.state.list));
        }
    }

    isActive(title) {
        const item = this.state.list.find((item) => item.title === title);
        return item ? item.active : null;
    }

    setActive(title) {
        const newList = this.state.list.map(item => {
            if (item.title === title) {
                item.active = true;
            }
            return item;
        });
        this.setState({list: newList});
    }

    setInactive(title) {
        const newList = this.state.list.map(item => {
            if (item.title === title) {
                item.active = false;
            }
            return item;
        });
        this.setState({list: newList});
    }

    render() {
        const { children } = this.props;
        const { list } = this.state;
        return (
            <Provider value={{
                setActive: this.setActive,
                setInactive: this.setInactive,
                isActive: this.isActive,
                list
            }}>
                {children}
            </Provider>
        );
    }
}
