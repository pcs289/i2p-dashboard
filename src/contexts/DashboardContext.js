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
        list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
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
