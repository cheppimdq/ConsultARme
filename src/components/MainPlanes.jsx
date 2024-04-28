import React from "react";
import Slider from "react-slick";

const planContents = [
  {
    header: "Free",
    price: 0,
    features: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access"
    ],
    buttonLabel: "Sign up for free",
    outline: true
  },
  {
    header: "Pro",
    price: 15,
    features: [
      "20 users included",
      "10 GB of storage",
      "Priority email support",
      "Help center access"
    ],
    buttonLabel: "Get started",
    outline: false
  },
  {
    header: "Enterprise",
    price: 29,
    features: [
      "30 users included",
      "15 GB storage",
      "Phone and email support",
      "Help center access"
    ],
    buttonLabel: "Contact us",
    outline: false
  }
];

const Plan = ({ header, price, features, buttonLabel, outline }) => (
  <div className="col-sm-3">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{header}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{`$${price}`} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <button className={`btn btn-lg btn-block ${outline ? "btn-outline-primary" : "btn-primary"}`} type="button">{buttonLabel}</button>
      </div>
    </div>
  </div>
);

export const MainPlanes = () => {
  const plans = planContents.map((obj) => (
    <Plan
      key={obj.header}
      header={obj.header}
      price={obj.price}
      features={obj.features}
      buttonLabel={obj.buttonLabel}
      outline={obj.outline}
    />
  ));

  return (
    <>
      <main className="container mt-4">
        <div className="row link-negro">
          {plans}
        </div>
      </main>
    </>
  );
};
