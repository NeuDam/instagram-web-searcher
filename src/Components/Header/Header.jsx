import React, { useState } from "react";
import "./Header.css";
import { GlobalStateContext } from "../../Context/ContextState";

function Header() {
  const { fetchUser } = GlobalStateContext();

  const [tempUsername, setTempUsername] = useState();

  const onFetchUserIg = () => {
    fetchUser(tempUsername);
    setTempUsername("");
  };

  return (
    <header className="header">
      <form className="container_searcher" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="username_input"
          value={tempUsername}
          placeholder="cristiano"
          onChange={(e) => {
            setTempUsername(e.target.value);
          }}
        />
        <button
          type="submit"
          className="submit_button_username"
          onClick={onFetchUserIg}
        >
          <box-icon name="search-alt"></box-icon>
        </button>
      </form>
    </header>
  );
}

export default Header;
