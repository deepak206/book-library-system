import React from "react";
import MiniDrawer from "../../views/mini-drawer";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  state = {
    activeNav: "Books"
  };

  navClick = activeNav => {
    this.setState({ activeNav: activeNav });
  };

  render() {
    const { books } = this.props;
    const { activeNav } = this.state;
    let result = [];
    if (activeNav !== "Add Book") {
      result =
        activeNav !== "Books"
          ? books.filter(book =>
              activeNav === "Favorite Books" ? book.favoutite : book.status
            )
          : books;
    }
    return (
      <>
        <MiniDrawer
          books={result}
          navClick={this.navClick}
          activeNav={activeNav}
        />
      </>
    );
  }
}

const mapStateToProps = ({ Books: { books } }) => ({ books });
export default connect(
  mapStateToProps,
  null
)(Dashboard);
