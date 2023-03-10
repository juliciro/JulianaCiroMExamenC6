
import { useState } from "react";
import "./Form.css";
import { Card } from "../Card/Card";

export const Form = () => {
  const [user, setUser] = useState({
    nickName: "",
    password: "",
    musicalGenre: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false)


  const handleChange = (e, prop) => {
    setUser({ ...user, [prop]: e.target.value });
  };

  

  const validateUserName = (str) => {
    const withoutSpaces = str.trim();


    if (withoutSpaces.length > 3 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const nickNameIsValid = validateUserName(user.nickName)
    const passwordIsValid = user.password.length >= 6;

    if (!nickNameIsValid || !passwordIsValid) {
      
      setError(true);

      if (!nickNameIsValid && !passwordIsValid) {
        setErrorMessage("The nick name is incorrect and the password is incorrect");
      } else if (!nickNameIsValid) {
        setErrorMessage("The nick name is incorrect");
      } else {
        setErrorMessage("the password is incorrect");
      }
      return;
    }

    setIsLogged(true)
    
    console.log("data : ", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickName"
          onChange={(e) => handleChange(e, "nickName") }
          
        />
        {error && errorMessage.includes("The nick name is incorrect") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <input
          type="text"
          name="password"
          onChange={(e) => handleChange(e, "password")}
        />
        {error && errorMessage.includes("The password is incorrect")&& (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}
        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.9rem",
          }}
          onChange={(e) => handleChange(e, "musicalGenre")}
        >
          <option value="" default>
          Select preferred music genre
          </option>
          <option value="Rock">Rock</option>
          <option value="POP"> Pop</option>
          <option value="Bachata">Bachata</option>
          <option value="Salsa"> Salsa</option>
        </select>
        <button type="submit">Start</button>
      </form>


      {
      isLogged &&  <Card musicalGenre={user.musicalGenre} nickName={user.nickName} password={user.password}/>
        }
    </div>
  );
};
