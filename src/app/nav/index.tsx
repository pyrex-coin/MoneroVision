import * as React from 'react';
import './nav.scss';
import { NodeDropdown } from 'components/node-dropdown';
import { SearchInput } from 'components/search-input';
import { NavLink } from 'react-router-dom';
import { OutsideAlerter } from 'components/outside-click';
import { Select } from 'components/node-dropdown/components/select-node';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Logo = () => (
  <img src="logo_128.png"/>

);

export class Nav extends React.Component {
  public state = {
    open: false
  };

  public toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  public render() {
    const { toggleDrawer } = this;
    const { open } = this.state;
    return (
      <>
        <nav className="Navigation">
          <div className="Navigation-wrapper">
            <button
              className="Navigation-open-drawer"
              onClick={() => this.setState({ open: true })}
            >
              <i className="nc-icon nc-ic_menu_24px size_24px" />
            </button>
            <NavLink to="/" className="Navigation-title">
              <Logo />
            </NavLink>
            <div className="flex-spacer" />
            <SearchInput />
            <div className="flex-spacer" />
            <NodeDropdown />
          </div>
        </nav>
        <TransitionGroup>
          {open && (
            <CSSTransition classNames="Navigation-Drawer-animation" timeout={200}>
              <aside className="Navigation-Drawer-wrapper">
                <OutsideAlerter onClick={this.toggleDrawer}>
                  <nav className="Navigation-Drawer">
                    <header className="Navigation-Drawer-header">
                      <NavLink to="/" className="Navigation-title" onClick={toggleDrawer}>
                        <Logo />
                      </NavLink>
                    </header>
                    <Select onSelect={toggleDrawer} />
                  </nav>
                </OutsideAlerter>
              </aside>
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}
