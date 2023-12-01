import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
      <div className="container mt-4">
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div
            className="bg-body-secondary 
                        text-primary 
                        border-info 
                        border 
                        rounded-1 
                        border-1  
                        mt-2"
          >
            <h3 className="m-2 me-3">Register form</h3>
          </div>
          <div className="col-md-12 mt-2">
            <div
              className="card
                            border 
                            rounded-1 
                            border-1"
            >
              <div class="card-header">
                <form>
                  <div className="form-group">
                    <label className="mt-1" for="username">
                      User Name
                    </label>
                    <div className="row d-flex justify-content-center ms-2 mt-1 me-2">
                      <input
                        type="text"
                        name="username"
                        className="mb-3 p-1"
                        placeholder="username..."
                        /*  onChange={handleChange} */
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="mt-1" for="email">
                      Email
                    </label>
                    <div className="row d-flex justify-content-center ms-2 mt-1 me-2">
                      <input
                        type="email"
                        name="email"
                        className="mb-3 p-1"
                        placeholder="email..."
                        /* onChange={handleChange} */
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="mt-1" for="pwd">
                      Password
                    </label>
                    <div className="row d-flex justify-content-center ms-2 mt-1 me-2">
                      <input
                        type="password"
                        name="password"
                        className="mb-3 p-1"
                        placeholder="password..."
                        /*  onChange={handleChange} */
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary  btn-sm mt-1 mb-2 me-3"
                      style={{ width: '100px' }}
                      /* onClick={handleSubmit} */
                    >
                      REGISTER
                    </button>
                    <Link
                      to="/"
                      className="btn btn-danger btn-sm mt-1 mb-2"
                      style={{ width: '100px' }}
                    >
                      Back
                    </Link>
                  </div>

                  {/* {error && <small className="text-danger mb-2">{error}</small>} */}
                  <p>
                    Do you have an account? <Link to="/pages/login">login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
