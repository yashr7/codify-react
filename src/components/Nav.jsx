import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHeadphones } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>
        <FontAwesomeIcon icon={faHeadphones} />
        &nbsp; CODIFY
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
