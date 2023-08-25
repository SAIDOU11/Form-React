import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    okayToEmail: true,
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    if (formData.password === formData.confirmPassword) {
      console.log('Successfully signed up');
    } else {
      console.log('Password do not match');
      return;
    }
    if (formData.okayToEmail) {
      alert('Thanks for signing up for our newsletter!');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          placeholder="Email address"
          className="form--input"
        />
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
          placeholder="Password"
          className="form--input"
        />
        <input
          onChange={handleChange}
          value={formData.confirmPassword}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className="form--input"
        />
        <div className="form--marketing">
          <input
            onChange={handleChange}
            type="checkbox"
            id="okayToEmail"
            name="okayToEmail"
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  );
};
export default App;
