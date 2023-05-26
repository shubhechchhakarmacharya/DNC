import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import language from "../language";

function Form() {
  const [forms, setForms] = useState([{ salutation: "", additionalSalutation: "", fullName: "", mobileNumber: "", email: "" }]);
  const [price, setPrice] = useState(2000);

  const addForm = () => {
    setPrice(price + price);
  };

  const handleRemoveForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedForms = [...forms];
    updatedForms[index][name] = value;
    setForms(updatedForms);
  };

  const handleAddForm = () => {
    setForms([...forms, {}]);
  };

  return (
    <>
      <Navbar ticket="active" />
      <div className="button button-form d-flex">
        <button className="form px-4 rounded-3 ">
          <Link to="/scan">{language.en.scan}</Link>
          <i className="fa-solid fa-angle-up fa-rotate-90 text-white"></i>
        </button>
      </div>
      <div className="Form container mt-5" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
        {forms.map((form, index) => (
          <div key={index}>
            <div className="serial-number">
              <p  key={index} className="number p-2">{index + 1}</p>
            </div>
            <div className="cross">
              {forms.length > 1 && (
                <i className="fa-solid fa-xmark" onClick={() => handleRemoveForm(index)}></i>
              )}
            </div>
            <form>
              <label htmlFor="" className="form-label mt-4">
                Salutation
              </label>
              <select
                className="form-select form-label"
                aria-label="Default select example"
                name="salutation"
                value={form.salutation || ''}
                onChange={(event) => handleChange(event, index)}
              >
                <option>Select salute</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
              </select>
              <label htmlFor="" className="form-label">
                Additional Salutation
              </label>
              <select
                className="form-select form-label"
                aria-label="Default select example"
                name="additionalSalutation"
                value={form.additionalSalutation || ''}
                onChange={(event) => handleChange(event, index)}
              >
                <option>Select additional salute</option>
                <option value="mr">Dr</option>
                <option value="mrs">Prof</option>
                <option value="miss">Er</option>
              </select>
              <label className="form-label">Full name</label>
              <input
                type="text"
                className="form-control name"
                name="fullName"
                value={form.fullName || ''}
                onChange={(event) => handleChange(event, index)}
              />
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control mobile"
                name="mobileNumber"
                value={form.mobileNumber || ''}
                onChange={(event) => handleChange(event, index)}
              />
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control email"
                name="email"
                value={form.email || ''}
                onChange={(event) => handleChange(event, index)}
              />
            </form>
          </div>
        ))}
      </div>
      <div className="button form-button mt-4">
        <button className="px-4 rounded-3" onClick={handleAddForm}>
          {language.en.add}
        </button>
      </div>
      <footer className="mt-3">
        <div className="footer container d-flex">
          <div className="total">
            <p>Total Amount: <span>Rs{price}</span></p>
          </div>
          <div className="count d-flex">
            {forms.map((_, index) => (
              <p key={index} className={index === 0 ? "active-count" : "{index + 1}"}>{index + 1}</p>
            ))}
          </div>
          <div className="proceed">
            <button className="rounded-3 px-4 py-2">
              {language.en.proceed}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Form;