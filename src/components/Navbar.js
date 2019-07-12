import React from "react";

export default class Navbar extends React.Component {
  state = {
    menu: false
  };
  showMenu = () => {
    this.setState(() => ({ menu: !this.state.menu }));
    console.log(this.state.menu);
  };
  render() {
    return (
      <div id="nav-bar">
        <button
          onClick={this.showMenu}
          id={this.state.menu ? "rotate-button" : ""}
        >
          <img src={require("../img/menu.svg")} alt="menu" />
        </button>
        <nav id={this.state.menu ? "show-menu" : ""}>
          <ul>
            <li>
              <a href="#home">البداية</a>
            </li>
            <li>
              <a href="#gallery">المعرض</a>
            </li>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
            <li>
              <a href="#status">متابعة طلبك</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
