import React from "react";
import { connect } from "react-redux";
import { addBook } from "../../actions/books-action-type";
import { Container } from "@material-ui/core";
import InputField from "../input-field";
import ContainedButtons from "../contained-buttons";
import { func } from "prop-types";

/**
 * This block is used to add new oob into redux store
 * This has five fields name, author, description, count, publish
 * Name and Author are required, rest are non required
 * Props : backHandler - type of function use to set back to default nav
 */

class AddBook extends React.Component {
  state = {
    name: "",
    description: "",
    author: "",
    publish: "",
    count: "",
    fieldValidations: {
      name: false,
      author: false
    }
  };
  handleChange = (field, e) => {
    const { target } = e;
    const { fieldValidations } = this.state;
    if (
      (field === "name" && !fieldValidations.name) ||
      (field === "author" && !fieldValidations.author)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: { [field]: false }
      });
    } else {
      this.setState({ [field]: target.value });
    }
  };

  handleSubmitonClick = () => {
    const { name, author, publish, count, description } = this.state;

    let validation = true;
    let errorIn;
    if (!name) {
      errorIn = { name: true };
      validation = false;
    }
    if (!author) {
      errorIn = { ...errorIn, author: true };
      validation = false;
    }

    if (validation) {
      this.props.addBook({
        name,
        author,
        publish,
        count,
        description,
        favoutite: false,
        status: false
      });
      this.props.backHandler("Books");
    } else {
      this.setState({ fieldValidations: errorIn });
    }
  };

  render() {
    const {
      name,
      description,
      author,
      publish,
      count,
      fieldValidations
    } = this.state;

    return (
      <Container>
        <h1>Add New Book</h1>
        <InputField
          label={"Name"}
          name="name"
          value={name}
          error={fieldValidations.name}
          handleChange={this.handleChange.bind(this, "name")}
        />
        <InputField
          label={"Autor"}
          name="author"
          value={author}
          error={fieldValidations.author}
          handleChange={this.handleChange.bind(this, "author")}
        />
        <InputField
          label={"Count"}
          name="count"
          value={count}
          handleChange={this.handleChange.bind(this, "count")}
        />
        <InputField
          label={"Publish"}
          name="publish"
          value={publish}
          handleChange={this.handleChange.bind(this, "publish")}
        />
        <InputField
          label={"Description"}
          name="description"
          value={description}
          handleChange={this.handleChange.bind(this, "description")}
        />
        <ContainedButtons
          title="Add Book"
          onClick={() => this.handleSubmitonClick()}
        />
      </Container>
    );
  }
}
export default connect(
  null,
  { addBook }
)(AddBook);

AddBook.propTypes = {
  backHandler: func
};
