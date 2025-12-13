import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './dashboard-reports.css'

const DashboardReports = (props) => {
  return (
    <div className="dashboard-reports-container1">
      <Helmet>
        <title>Dashboard-Reports - Notable Vigorous Shark</title>
        <meta
          property="og:title"
          content="Dashboard-Reports - Notable Vigorous Shark"
        />
        <link
          rel="canonical"
          href="https://notable-vigorous-shark-pb0ob3.teleporthq.app/dashboard-reports"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="dashboard-reports-thq-accounts-balances-elm1 accounts-balances">
        <div className="accounts-balances-wrapper">
          <div className="accounts-balances-header">
            <h2 className="section-title">Account Balances</h2>
            <p className="section-subtitle">
              {' '}
              Detailed overview of all your accounts with quick actions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="accounts-balances-total">
            <div className="accounts-balances-total-card">
              <span className="accounts-balances-total-label">
                <span>Total balance</span>
                <br></br>
                Consolidated Total (USD Equivalent)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="accounts-balances-total-value">
                EGP 247,382.45
              </span>
              <span className="accounts-balances-total-detail">
                EGP currency • Last updated: 2 minutes ago
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="dashboard-reports-separator"></hr>
      <section className="dashboard-reports-thq-accounts-balances-elm2 accounts-balances">
        <h2 className="dashboard-reports-thq-section-title-elm2 section-title">
          Your last transactions
        </h2>
        <p className="dashboard-reports-thq-section-subtitle-elm2 section-subtitle">
          {' '}
          Check where all that money go!
        </p>
        <div className="dashboard-reports-thq-accounts-balances-wrapper-elm2 accounts-balances-wrapper">
          <div className="dashboard-reports-thq-ai-insights-item-elm10 ai-insights-item">
            <div className="dashboard-reports-thq-ai-insights-item-icon-elm10 ai-insights-item-icon"></div>
            <div className="ai-insights-item-content">
              <div className="ai-insights-item-header">
                <h3 className="ai-insights-item-title">To: Reciever</h3>
                <span className="ai-insights-item-impact"> EGP 186</span>
              </div>
              <p className="dashboard-reports-thq-ai-insights-item-description-elm10 ai-insights-item-description">
                Description
              </p>
            </div>
          </div>
          <div className="dashboard-reports-thq-ai-insights-item-elm11 ai-insights-item">
            <div className="dashboard-reports-thq-ai-insights-item-icon-elm11 ai-insights-item-icon"></div>
            <div className="ai-insights-item-content">
              <div className="ai-insights-item-header">
                <h3 className="ai-insights-item-title">To: Reciever</h3>
                <span className="ai-insights-item-impact"> EGP 186</span>
              </div>
              <p className="dashboard-reports-thq-ai-insights-item-description-elm11 ai-insights-item-description">
                Description
              </p>
            </div>
          </div>
          <div className="dashboard-reports-thq-ai-insights-item-elm12 ai-insights-item">
            <div className="dashboard-reports-thq-ai-insights-item-icon-elm12 ai-insights-item-icon"></div>
            <div className="ai-insights-item-content">
              <div className="ai-insights-item-header">
                <h3 className="ai-insights-item-title">To: Reciever</h3>
                <span className="ai-insights-item-impact"> EGP 186</span>
              </div>
              <p className="dashboard-reports-thq-ai-insights-item-description-elm12 ai-insights-item-description">
                Description
              </p>
            </div>
          </div>
          <div className="dashboard-reports-thq-ai-insights-item-elm13 ai-insights-item">
            <div className="dashboard-reports-thq-ai-insights-item-icon-elm13 ai-insights-item-icon"></div>
            <div className="ai-insights-item-content">
              <div className="ai-insights-item-header">
                <h3 className="ai-insights-item-title">To: Reciever</h3>
                <span className="ai-insights-item-impact"> EGP 186</span>
              </div>
              <p className="dashboard-reports-thq-ai-insights-item-description-elm13 ai-insights-item-description">
                Description
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-reports-thq-ai-insights-wrapper-elm1 ai-insights-wrapper">
          <div className="ai-insights-header">
            <div className="dashboard-reports-thq-ai-insights-header-content-elm1 ai-insights-header-content"></div>
          </div>
          <div className="dashboard-reports-container2">
            <div className="dashboard-reports-thq-ai-insights-list-elm1 ai-insights-list"></div>
          </div>
        </div>
        <Link
          to="/transaction"
          name="Create New Transaction"
          className="dashboard-reports-navlink button"
        >
          Add Transaction
        </Link>
      </section>
      <section className="visualizations-charts">
        <div className="dashboard-reports-thq-visualizations-charts-container-elm visualizations-charts-container">
          <div className="visualizations-charts-header">
            <h2 className="section-title">Financial Visualizations</h2>
            <p className="section-subtitle">
              {' '}
              Interactive charts and insights with advanced filtering
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="visualizations-charts-filters">
            <button className="btn-sm visualizations-charts-filter btn-outline btn">
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
                  <path d="M8 2v4m8-4v4"></path>
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </g>
              </svg>
              <span>Last 30 Days</span>
            </button>
            <button className="btn-sm visualizations-charts-filter btn-outline btn">
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
              <span>All Accounts</span>
            </button>
            <button className="btn-sm visualizations-charts-filter btn-outline btn">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle r="3" cx="12" cy="12"></circle>
              </svg>
              <span>All Tags</span>
            </button>
          </div>
          <div className="visualizations-charts-grid">
            <div className="visualizations-charts-card">
              <div className="visualizations-charts-card-header">
                <div className="visualizations-charts-card-icon">
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
                </div>
                <div className="visualizations-charts-card-title-group">
                  <h3 className="visualizations-charts-card-title">
                    Spending Trends
                  </h3>
                  <span className="visualizations-charts-card-subtitle">
                    {' '}
                    Daily breakdown with 7-day average
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="visualizations-charts-card-visual">
                <div className="visualizations-charts-placeholder">
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm10 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm11 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm12 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm13 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm14 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm15 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm16 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm17 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm18 visualizations-charts-bar"></div>
                  <div className="dashboard-reports-thq-visualizations-charts-bar-elm19 visualizations-charts-bar"></div>
                </div>
              </div>
              <div className="visualizations-charts-card-stats">
                <div className="visualizations-charts-stat">
                  <span className="visualizations-charts-stat-label">
                    Average Daily
                  </span>
                  <span className="visualizations-charts-stat-value">
                    EGP 283.45
                  </span>
                </div>
                <div className="visualizations-charts-stat">
                  <span className="visualizations-charts-stat-label">
                    Peak Day
                  </span>
                  <span className="visualizations-charts-stat-value">
                    EGP 624.80
                  </span>
                </div>
              </div>
            </div>
            <div className="visualizations-charts-card">
              <div className="visualizations-charts-card-header">
                <div className="visualizations-charts-icon-accent visualizations-charts-card-icon">
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
                      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </g>
                  </svg>
                </div>
                <div className="visualizations-charts-card-title-group">
                  <h3 className="visualizations-charts-card-title">
                    Category Breakdown
                  </h3>
                  <span className="visualizations-charts-card-subtitle">
                    {' '}
                    Spending distribution by category
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="visualizations-charts-card-visual">
                <div className="visualizations-charts-donut">
                  <svg
                    viewBox="0 0 100 100"
                    className="visualizations-charts-donut-svg"
                  >
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="var(--color-primary)"
                      transform="rotate(-90 50 50)"
                      strokeWidth="20"
                      strokeDasharray="75 251.2"
                    ></circle>
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="var(--color-secondary)"
                      transform="rotate(-90 50 50)"
                      strokeWidth="20"
                      strokeDasharray="50 251.2"
                      strokeDashoffset="-75"
                    ></circle>
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="var(--color-accent)"
                      transform="rotate(-90 50 50)"
                      strokeWidth="20"
                      strokeDasharray="40 251.2"
                      strokeDashoffset="-125"
                    ></circle>
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="var(--color-neutral)"
                      transform="rotate(-90 50 50)"
                      strokeWidth="20"
                      strokeDasharray="35 251.2"
                      strokeDashoffset="-165"
                    ></circle>
                  </svg>
                </div>
              </div>
              <div className="visualizations-charts-card-legend">
                <div className="visualizations-charts-legend-item">
                  <span className="visualizations-charts-legend-dot visualizations-charts-dot-primary"></span>
                  <span className="visualizations-charts-legend-label">
                    {' '}
                    Dining &amp; Food
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="visualizations-charts-legend-value">
                    $2,145
                  </span>
                </div>
                <div className="visualizations-charts-legend-item">
                  <span className="visualizations-charts-legend-dot visualizations-charts-dot-secondary"></span>
                  <span className="visualizations-charts-legend-label">
                    {' '}
                    Transportation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="visualizations-charts-legend-value">
                    $1,420
                  </span>
                </div>
                <div className="visualizations-charts-legend-item">
                  <span className="visualizations-charts-legend-dot visualizations-charts-dot-accent"></span>
                  <span className="visualizations-charts-legend-label">
                    Shopping
                  </span>
                  <span className="visualizations-charts-legend-value">
                    $1,150
                  </span>
                </div>
                <div className="visualizations-charts-legend-item">
                  <span className="visualizations-charts-legend-dot visualizations-charts-dot-neutral"></span>
                  <span className="visualizations-charts-legend-label">
                    Utilities
                  </span>
                  <span className="visualizations-charts-legend-value">
                    $980
                  </span>
                </div>
              </div>
            </div>
            <div className="visualizations-charts-card">
              <div className="visualizations-charts-card-header">
                <div className="visualizations-charts-card-icon visualizations-charts-icon-secondary">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="visualizations-charts-card-title-group">
                  <h3 className="visualizations-charts-card-title">
                    Cash Flow Analysis
                  </h3>
                  <span className="visualizations-charts-card-subtitle">
                    {' '}
                    Income vs expenses over time
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="visualizations-charts-card-visual">
                <div className="visualizations-charts-flow">
                  <div className="visualizations-charts-flow-income visualizations-charts-flow-line"></div>
                  <div className="visualizations-charts-flow-expense visualizations-charts-flow-line"></div>
                </div>
              </div>
              <div className="visualizations-charts-card-stats">
                <div className="visualizations-charts-stat">
                  <span className="visualizations-charts-stat-label">
                    Total Income
                  </span>
                  <span className="visualizations-charts-positive visualizations-charts-stat-value">
                    EGP  18,450
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="visualizations-charts-stat">
                  <span className="visualizations-charts-stat-label">
                    Total Expenses
                  </span>
                  <span className="visualizations-charts-stat-value visualizations-charts-negative">
                    EGP 12,385
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="visualizations-charts-stat">
                  <span className="visualizations-charts-stat-label">
                    Net Flow
                  </span>
                  <span className="visualizations-charts-positive visualizations-charts-stat-value">
                    {' '}
                    +EGP 6,065
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="monthly-comparison">
        <div className="monthly-comparison-wrapper">
          <div className="monthly-comparison-header">
            <h2 className="section-title">Month-over-Month Analysis</h2>
            <p className="section-subtitle">
              {' '}
              Compare current performance with previous periods
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="monthly-comparison-grid">
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">
                  Total Spending
                </span>
                <span className="monthly-comparison-badge-down monthly-comparison-card-badge">
                  {' '}
                  -8.2%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    EGP 8,540
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    EGP 9,305
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-indicator-positive monthly-comparison-card-indicator">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 5v14m7-7l-7 7l-7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>EGP 765 saved</span>
              </div>
            </div>
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">Income</span>
                <span className="monthly-comparison-badge-up monthly-comparison-card-badge">
                  {' '}
                  +12.5%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    EGP 18,450
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    EGP 16,400
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-indicator-positive monthly-comparison-card-indicator">
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
                    <path d="m5 12l7-7l7 7m-7 7V5"></path>
                  </g>
                </svg>
                <span>EGP 2,050 increase</span>
              </div>
            </div>
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">
                  Savings Rate
                </span>
                <span className="monthly-comparison-badge-up monthly-comparison-card-badge">
                  {' '}
                  +15.8%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    53.7%
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    43.3%
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-indicator-positive monthly-comparison-card-indicator">
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
                    <path d="m5 12l7-7l7 7m-7 7V5"></path>
                  </g>
                </svg>
                <span>10.4 points improved</span>
              </div>
            </div>
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">
                  Dining &amp; Food
                </span>
                <span className="monthly-comparison-badge-up monthly-comparison-card-badge">
                  {' '}
                  +23.1%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    EGP 2,145
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    EGP 1,742
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-card-indicator monthly-comparison-indicator-warning">
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
                    <path d="m5 12l7-7l7 7m-7 7V5"></path>
                  </g>
                </svg>
                <span>EGP 403 increase</span>
              </div>
            </div>
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">
                  Transportation
                </span>
                <span className="monthly-comparison-badge-down monthly-comparison-card-badge">
                  {' '}
                  -5.4%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    EGP 1,420
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    EGP 1,501
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-indicator-positive monthly-comparison-card-indicator">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 5v14m7-7l-7 7l-7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>EGP 81 reduced</span>
              </div>
            </div>
            <div className="monthly-comparison-card">
              <div className="monthly-comparison-card-header">
                <span className="monthly-comparison-card-label">
                  Entertainment
                </span>
                <span className="monthly-comparison-badge-up monthly-comparison-card-badge">
                  {' '}
                  +18.6%
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="monthly-comparison-card-values">
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    This Month
                  </span>
                  <span className="monthly-comparison-value-current">
                    EGP 845
                  </span>
                </div>
                <div className="monthly-comparison-value-group">
                  <span className="monthly-comparison-value-label">
                    Last Month
                  </span>
                  <span className="monthly-comparison-value-previous">
                    EGP 712
                  </span>
                </div>
              </div>
              <div className="monthly-comparison-card-indicator monthly-comparison-indicator-warning">
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
                    <path d="m5 12l7-7l7 7m-7 7V5"></path>
                  </g>
                </svg>
                <span>EGP 133 increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ai-insights">
        <div className="ai-insights-wrapper">
          <div className="ai-insights-header">
            <div className="ai-insights-header-content">
              <h2 className="section-title">AI-Powered Insights</h2>
              <p className="section-subtitle">
                {' '}
                Personalized recommendations to optimize your financial health
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <button className="btn-outline btn">View All Insights</button>
          </div>
          <div className="ai-insights-list">
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Reduce Dining Expenses
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 186/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  <span>
                    {' '}
                    Your dining expenses are 23% higher than last month.
                    Reducing
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    restaurant visits by 2 meals per week could save you
                    approximately
                  </span>
                  <br></br>
                  <span>
                    EGP 186 monthly while maintaining a healthy lifestyle.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Your dining expenses are 23% higher than last month. Reducing
                  restaurant visits by 2 meals per week could save you
                  approximately $186 monthly while maintaining a healthy
                  lifestyle.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    {' '}
                    Apply Budget Adjustment
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="btn-sm btn btn-link">Learn More</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon ai-insights-icon-secondary">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    {' '}
                    Optimize Subscription Services
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 47/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  {' '}
                  Analysis shows you have 3 streaming services with similar
                  content. Consolidating to 2 services could eliminate duplicate
                  features and reduce monthly expenses without sacrificing
                  entertainment value.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Review Subscriptions
                  </button>
                  <button className="btn-sm btn btn-link">See Details</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-icon-accent ai-insights-item-icon">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Increase Emergency Fund
                  </h3>
                  <span className="ai-insights-item-impact">
                    {' '}
                    Reach goal 4 months faster
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  <span>
                    {' '}
                    Your current savings rate is strong at 53.7%. By allocating
                    an
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    additional EGP 200/month to your emergency fund, you could
                    reach your
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    6-month expense goal by October instead of February.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Your current savings rate is strong at 53.7%. By allocating an
                  additional $200/month to your emergency fund, you could reach
                  your 6-month expense goal by October instead of February.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Adjust Savings Goal
                  </button>
                  <button className="btn-sm btn btn-link">View Plan</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon ai-insights-icon-primary">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Bundle Utility Services
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 28/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  {' '}
                  Based on your location and usage patterns, bundling internet
                  and mobile services with a single provider could reduce costs
                  by 15% while maintaining service quality and coverage.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Compare Providers
                  </button>
                  <button className="btn-sm btn btn-link">
                    Calculate Savings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ai-insights">
        <div className="ai-insights-wrapper">
          <div className="ai-insights-header">
            <div className="ai-insights-header-content">
              <h2 className="section-title">AI-Powered Insights</h2>
              <p className="section-subtitle">
                {' '}
                Personalized recommendations to optimize your financial health
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <button className="btn-outline btn">View All Insights</button>
          </div>
          <div className="ai-insights-list">
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Reduce Dining Expenses
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 186/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  <span>
                    {' '}
                    Your dining expenses are 23% higher than last month.
                    Reducing
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    restaurant visits by 2 meals per week could save you
                    approximately
                  </span>
                  <br></br>
                  <span>
                    EGP 186 monthly while maintaining a healthy lifestyle.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Your dining expenses are 23% higher than last month. Reducing
                  restaurant visits by 2 meals per week could save you
                  approximately $186 monthly while maintaining a healthy
                  lifestyle.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    {' '}
                    Apply Budget Adjustment
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="btn-sm btn btn-link">Learn More</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon ai-insights-icon-secondary">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    {' '}
                    Optimize Subscription Services
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 47/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  {' '}
                  Analysis shows you have 3 streaming services with similar
                  content. Consolidating to 2 services could eliminate duplicate
                  features and reduce monthly expenses without sacrificing
                  entertainment value.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Review Subscriptions
                  </button>
                  <button className="btn-sm btn btn-link">See Details</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-icon-accent ai-insights-item-icon">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Increase Emergency Fund
                  </h3>
                  <span className="ai-insights-item-impact">
                    {' '}
                    Reach goal 4 months faster
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  <span>
                    {' '}
                    Your current savings rate is strong at 53.7%. By allocating
                    an
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    additional EGP 200/month to your emergency fund, you could
                    reach your
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    6-month expense goal by October instead of February.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Your current savings rate is strong at 53.7%. By allocating an
                  additional $200/month to your emergency fund, you could reach
                  your 6-month expense goal by October instead of February.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Adjust Savings Goal
                  </button>
                  <button className="btn-sm btn btn-link">View Plan</button>
                </div>
              </div>
            </div>
            <div className="ai-insights-item">
              <div className="ai-insights-item-icon ai-insights-icon-primary">
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
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <div className="ai-insights-item-content">
                <div className="ai-insights-item-header">
                  <h3 className="ai-insights-item-title">
                    Bundle Utility Services
                  </h3>
                  <span className="ai-insights-item-impact">
                    Save EGP 28/month
                  </span>
                </div>
                <p className="ai-insights-item-description">
                  {' '}
                  Based on your location and usage patterns, bundling internet
                  and mobile services with a single provider could reduce costs
                  by 15% while maintaining service quality and coverage.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="ai-insights-item-actions">
                  <button className="btn-sm btn btn-primary">
                    Compare Providers
                  </button>
                  <button className="btn-sm btn btn-link">
                    Calculate Savings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="dashboard-reports-container3">
        <div className="dashboard-reports-container4">
          <Script
            html={`<script defer data-name="accounts-carousel">
(function(){
  const accountsTrack = document.getElementById("accountsTrack")
  const prevBtn = document.getElementById("accountsPrev")
  const nextBtn = document.getElementById("accountsNext")

  if (accountsTrack && prevBtn && nextBtn) {
    const cardWidth = 400 + 24

    prevBtn.addEventListener("click", () => {
      accountsTrack.scrollBy({ left: -cardWidth, behavior: "smooth" })
    })

    nextBtn.addEventListener("click", () => {
      accountsTrack.scrollBy({ left: cardWidth, behavior: "smooth" })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DashboardReports
