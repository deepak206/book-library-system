import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { func } from "prop-types";

/**
 * Search Box Component
 * @handelButtonClick - type of function and handel search click
 *
 */
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function SearchBox(props) {
  const classes = useStyles();

  const [search, setSearch] = useState();

  const handelButtonClick = e => {
    e.preventDefault();
    props.hanedlSearchClick(search);
  };

  const searchChange = e => {
    e.preventDefault();
    if (!e.target.value) props.hanedlSearchClick("");
    setSearch(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Book"
        inputProps={{ "aria-label": "search google maps" }}
        value={search}
        onChange={e => searchChange(e)}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={e => handelButtonClick(e)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchBox.propTypes = {
  handelButtonClick: func
};
