import "./App.css"
import { useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    let emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(firstName ||
       !emailPattern.test(email) ||
       password.length < 8 ||
       role == "role"){
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit()}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
              onChange = {e => setFirstName(e.target.value)}
              placeholder="First name" 
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              onChange = {e => setLastName(e.target.value)}
              placeholder="Last name" 
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              onChange = {e => setEmail(e.target.value)}
              type = "email"
              placeholder="Email address" 
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              onChange = {e => setPassword(e.target.value)}
              type = "password"
              placeholder="Password" 
            />
            {password.value.length < 8 ? <PasswordErrorMessage />: null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange = {e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
