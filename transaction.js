import React from 'react'

import { Helmet } from 'react-helmet'

import './transaction.css'

const Transaction = (props) => {
  return (
    <div className="transaction-container10">
      <Helmet>
        <title>Notable Vigorous Shark</title>
        <meta property="og:title" content="Notable Vigorous Shark" />
        <link
          rel="canonical"
          href="https://notable-vigorous-shark-pb0ob3.teleporthq.app/"
        />
      </Helmet>
      <div className="transaction-thq-navigation-container-elm navigation-container">
        <a href="/">
          <div aria-label="Mintory Home" className="navigation-logo">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 32 32"
              className="navigation-logo-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M25.333 17.333c0 6.667-4.667 10-10.22 11.933a1.333 1.333 0 0 1-.893-.013C9.333 27.333 5.333 24 5.333 17.333V8a1.333 1.333 0 0 1 1.334-1.333c2.666 0 6-1.6 8.32-3.627a1.56 1.56 0 0 1 2.026 0c2.32 2.027 5.654 3.627 8.32 3.627A1.333 1.333 0 0 1 26.667 8z"></path>
                <path d="M12 16l3 3l5-6"></path>
              </g>
            </svg>
            <span className="section-title navigation-brand">Felousy</span>
          </div>
        </a>
        <button
          id="navigationToggle"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          className="navigation-toggle"
        >
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 5h16M4 12h16M4 19h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="transaction-thq-navigation-menu-elm navigation-menu">
          <a href="#features">
            <div className="navigation-link">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </g>
              </svg>
              <span>Features</span>
            </div>
          </a>
          <a href="#dashboard-reports">
            <div className="navigation-link">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9l-5 5l-4-4l-3 3"></path>
                </g>
              </svg>
              <span>Dashboard &amp; Reports</span>
            </div>
          </a>
          <a href="#security">
            <div className="navigation-link">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Security</span>
            </div>
          </a>
          <a href="#pricing">
            <div className="navigation-link">
              <span>Pricing</span>
            </div>
          </a>
        </div>
        <a href="#signup">
          <div className="btn btn-primary navigation-btn">
            <span>Admin</span>
          </div>
        </a>
        <div className="transaction-thq-navigation-actions-elm navigation-actions"></div>
      </div>
      <div className="transaction-container11">
        <div className="transaction-container12">
          <h1 className="transaction-text15">Send Money To:</h1>
          <input
            type="text"
            placeholder="receiver account"
            className="transaction-textinput1 input"
          />
        </div>
      </div>
      <div className="transaction-container13">
        <div className="transaction-container14">
          <h1 className="transaction-text16">Amount: </h1>
        </div>
        <div className="transaction-container15">
          <input
            type="text"
            placeholder="Amount in EGP"
            className="transaction-textinput2 input"
          />
        </div>
      </div>
      <div className="transaction-container16">
        <h1 className="transaction-text17">Select Category</h1>
        <div className="transaction-container17">
          <select className="transaction-select">
            <option value="Food" selected>
              Food
            </option>
            <option value="Entertainment">Entertainment</option>
            <option value="Educational">Educational</option>
            <option value="Gifts">Gifts</option>
            <option value="Shopping">Shopping</option>
            <option value="Transportation">Transportation</option>
            <option value="Rent">Rent</option>
            <option value="Utilities &amp; Bills">Utilities &amp; Bills</option>
          </select>
        </div>
      </div>
      <div className="transaction-container18">
        <h1 className="transaction-text18">Description </h1>
        <div className="transaction-container19">
          <input
            type="text"
            placeholder="Add Description to your Transaction"
            className="transaction-textinput3 input"
          />
        </div>
      </div>
      <div className="transaction-container20">
        <div className="transaction-container21">
          <div className="transaction-container22"></div>
          <button type="button" className="transaction-button button">
            Submit 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transaction
