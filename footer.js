import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-upper">
          <div className="footer-container">
            <div className="footer-brand-column">
              <div className="footer-logo">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
                <span className="footer-logo-text">Felousy</span>
              </div>
              <p className="footer-tagline">
                {' '}
                Your trusted partner for comprehensive financial tracking and
                intelligent money management.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-security-badges">
                <div className="footer-badge">
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
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                  <span>Bank-Level Security</span>
                </div>
                <div className="footer-badge">
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
                  <span>256-bit Encryption</span>
                </div>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Product</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#features">
                    <div className="footer-link">
                      <span>Features</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#dashboard">
                    <div className="footer-link">
                      <span>Dashboard &amp; Reports</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#budgeting">
                    <div className="footer-link">
                      <span>Budget Management</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#transactions">
                    <div className="footer-link">
                      <span>Transaction Tracking</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#accounts">
                    <div className="footer-link">
                      <span>Multi-Account Support</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#security">
                    <div className="footer-link">
                      <span>Security &amp; 2FA</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#about">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#careers">
                    <div className="footer-link">
                      <span>Careers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#press">
                    <div className="footer-link">
                      <span>Press Kit</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#partners">
                    <div className="footer-link">
                      <span>Partners</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <div className="footer-link">
                      <span>Blog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <div className="footer-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Get in Touch</h3>
              <div className="footer-contact-list">
                <a href="mailto:support@mintory.com?subject=">
                  <div className="footer-contact-item">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <span>jmekheimar@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+18005551234">
                  <div className="footer-contact-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1 2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>+20 122 0385 548</span>
                  </div>
                </a>
              </div>
              <div className="footer-social">
                <h4 className="footer-social-title">Follow Us</h4>
                <div className="footer-social-links">
                  <a href="#twitter">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#linkedin">
                    <div aria-label="LinkedIn" className="footer-social-link">
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#facebook">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#instagram">
                    <div aria-label="Instagram" className="footer-social-link">
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
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-container">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                All copyrights to Felousy. All rights reserved 2025.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-legal-links">
                <a href="#privacy">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-divider"></span>
                <a href="#terms">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <span className="footer-divider"></span>
                <a href="#cookies">
                  <div className="footer-legal-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
