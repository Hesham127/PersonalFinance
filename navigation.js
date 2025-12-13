import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="navigation" className="navigation">
        <div className="navigation-thq-navigation-container-elm navigation-container">
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
          <div className="navigation-thq-navigation-menu-elm navigation-menu">
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
          <div className="navigation-thq-navigation-actions-elm navigation-actions"></div>
        </div>
        <div id="navigationOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
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
                <span className="section-title navigation-brand">Mintory</span>
              </div>
            </a>
            <button
              id="navigationClose"
              aria-label="Close navigation menu"
              className="navigation-close"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <nav className="navigation-mobile-menu">
              <a href="#features">
                <div className="navigation-mobile-link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                <div className="navigation-mobile-link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                <div className="navigation-mobile-link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                <div className="navigation-mobile-link">
                  <span>Pricing</span>
                </div>
              </a>
            </nav>
            <div className="navigation-mobile-actions">
              <a href="#login">
                <div className="btn-outline btn btn-lg">
                  <span>Log In</span>
                </div>
              </a>
              <a href="#signup">
                <div className="btn btn-primary btn-lg">
                  <span>Get Started</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes slideInLeft {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-toggle">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationClose = document.getElementById("navigationClose")
  const navigationOverlay = document.getElementById("navigationOverlay")
  const navigationMobileLinks = navigationOverlay.querySelectorAll(
    ".navigation-mobile-link, .navigation-mobile-actions a"
  )

  function openMobileMenu() {
    navigationOverlay.classList.add("is-open")
    navigationToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileMenu() {
    navigationOverlay.classList.remove("is-open")
    navigationToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", openMobileMenu)
  navigationClose.addEventListener("click", closeMobileMenu)

  navigationMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  navigationOverlay.addEventListener("click", (e) => {
    if (e.target === navigationOverlay) {
      closeMobileMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationOverlay.classList.contains("is-open")) {
      closeMobileMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
