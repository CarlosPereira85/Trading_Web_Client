import { useEffect } from "react";
import { GoSearch } from "react-icons/go";

const Form = ({ handleSubmit, language, languageHandler, searchRef }) => {
  useEffect(() => {
    searchRef.current.focus();
  }, [searchRef]);

  return (
    <form>
      <input type="text" placeholder="Search" ref={searchRef} />

      <button className="search-button" onClick={handleSubmit}>
        <GoSearch className="search-icon" />
      </button>
      <label>
        <input
          type="radio"
          checked={language === "en"}
          value="en"
          onChange={languageHandler}
        />
        <span>EN</span>
      </label>
      <label>
        <input
          type="radio"
          checked={language === "pt"}
          value="pt"
          onChange={languageHandler}
        />
        <span>PT</span>
      </label>
      <label>
        <input
          type="radio"
          checked={language === "es"}
          value="es"
          onChange={languageHandler}
        />
        <span>ES</span>
      </label>
      <label>
        <input
          type="radio"
          checked={language === "de"}
          value="de"
          onChange={languageHandler}
        />
        <span>DE</span>
      </label>
    </form>
  );
};

export default Form;
