import React from 'react';

export const MainPlanes = () => {
  return (
    <>
      <main className="container mt-4">
        <div className="row link-negro">
          <section className="bsb-pricing-2 bg-light py-5 py-xl-8">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                  <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Pricing</h3>
                  <h2 className="display-5 mb-4 mb-md-5 text-center">We offer great pricing plans for everyone.</h2>
                  <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row gy-5 gy-lg-0 gx-xl-5">
                {/* Pricing Cards */}
                <div className="col-12 col-lg-4">
                  <div className="card border-0 border-bottom border-primary shadow-sm">
                    <div className="card-body p-4 p-xxl-5">
                      {/* Pricing details */}
                      <h2 className="h4 mb-2">Bronze</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$45</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        {/* Pricing features */}
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>5</strong> Bootstrap Install</span>
                        </li>
                        {/* Add more features here */}
                      </ul>
                      {/* Button */}
                      <a href="#!" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card border-0 border-bottom border-primary shadow-sm">
                    <div className="card-body p-4 p-xxl-5">
                      {/* Pricing details */}
                      <h2 className="h4 mb-2">Silver</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$75</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        {/* Pricing features */}
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>20</strong> Bootstrap Install</span>
                        </li>
                        {/* Add more features here */}
                      </ul>
                      {/* Button */}
                      <a href="#!" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card border-0 border-bottom border-primary shadow-sm">
                    <div className="card-body p-4 p-xxl-5">
                      {/* Pricing details */}
                      <h2 className="h4 mb-2">Gold</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$125</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        {/* Pricing features */}
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>50</strong> Bootstrap Install</span>
                        </li>
                        {/* Add more features here */}
                      </ul>
                      {/* Button */}
                      <a href="#!" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            {/* Additional Pricing Card */}
            <div className="col-12 order-lg-last">
                  <div className="card border-0 border-bottom border-primary shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular">
                    <div className="card-body p-4 p-xxl-5">
                      <h2 className="h4 mb-2">Enterprise</h2>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="display-3 fw-bold text-primary mb-0">$200</h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span><strong>Unlimited</strong> Features</span>
                          </li>
                          {/* Add more features here */}
                        </ul>
                      </div>
                      {/* Button */}
                      <a href="#!" className="btn bsb-btn-xl btn-primary rounded-pill float-end">Choose Plan</a>
                    </div>
                  </div>
                </div>
          </section>
        </div>
      </main>
    </>
  );
};
