import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: false,
    employment: '',
    favColor: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        onChange={handleChange}
        placeholder="Comments"
        value={formData.comments}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        onChange={handleChange}
        value={formData.isFriendly}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === 'unemployed'}
          value="unemployed"
        />
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="part-time"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === 'part-time'}
          value="part-time"
        />
        <label htmlFor="part-time">Part-time</label>

        <input
          type="radio"
          id="full-time"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === 'full-time'}
          value="full-time"
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />

      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      <button>Submit</button>
    </form>
  );
};
export default Form;
