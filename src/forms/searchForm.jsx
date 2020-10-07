import React, { useState } from "react";
import { Input } from "reactstrap";

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const raiseSearch = e => {
    if (e.keyCode === 13) onSearch(value);
  };
  return (
    <>
      <Input
        placeholder="Search"
        onChange={e => setValue(e.target.value)}
        onKeyDown={raiseSearch}
      />
    </>
  );
};

export default SearchForm;
