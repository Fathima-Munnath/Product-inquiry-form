import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    address: '',
    productEnquiry: '',
    additionalComments: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.productEnquiry.trim()) newErrors.productEnquiry = 'Product enquiry is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData(formData);
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      address: '',
      productEnquiry: '',
      additionalComments: '',
    });
  };

  return (
    <div className="container">
      {submittedData ? (
        <div>
          <h1>Thank You for Your Inquiry!</h1>
          <p>Here are the details you submitted:</p>
          <ul>
            <li><strong>Full Name:</strong> {submittedData.firstName} {submittedData.lastName}</li>
            <li><strong>Company Name:</strong> {submittedData.companyName}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Phone Number:</strong> {submittedData.phoneNumber}</li>
            <li><strong>Address:</strong> {submittedData.address}</li>
            <li><strong>Product Enquiry:</strong> {submittedData.productEnquiry}</li>
            <li><strong>Additional Comments:</strong> {submittedData.additionalComments}</li>
          </ul>
          <button onClick={() => setSubmittedData(null)}>Submit Another Inquiry</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Product Enquiry Form</h1>
          <h5>Please fill in the form below to submit your product enquiry.</h5>
          <br />
          <table>
            <tbody>
              <tr>
                <td> Full Name</td>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                   <br />
                   <label htmlFor="firstName">First Name</label>
                  {errors.firstName && <small className="error">{errors.firstName}</small>}
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                   <br />
                   <label htmlFor="firstName">Last Name</label>
                  {errors.lastName && <small className="error">{errors.lastName}</small>}
                </td>
              </tr>
              <tr>
                <td>Company Name</td>
                <td>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="error">{errors.email}</small>}
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <small className="error">{errors.phoneNumber}</small>}
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    type="text/css"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </td>
                
              </tr>
              <tr>
                <td>Product Enquiry</td>
                <td>
                  <input
                    type="text"
                    name="productEnquiry"
                    value={formData.productEnquiry}
                    onChange={handleChange}
                  />
                  {errors.productEnquiry && <small className="error">{errors.productEnquiry}</small>}
                </td>
              </tr>
              <tr>
                <td>Additional Comments</td>
                <td>
                  <input
                    type="text/css"
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default App;
