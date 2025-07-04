import './YourWorkrate.css';

export default function YourWorkrate() {
  return (
    <div className="your-workrate">
      <div className="workrate-content">
        {/* Header */}
        <div className="workrate-header">
          <h2 className="workrate-title">Your workrate</h2>
        </div>

        {/* Statistics Section */}
        <div className="workrate-stats">
          <div className="stats-container">
            <div className="spacer"></div>
            
            <div className="stat-item">
              <div className="stat-label">Last 30 days</div>
              <div className="stat-value">38%</div>
              <div className="stat-target">Target: 33%</div>
            </div>

            <div className="stat-item">
              <div className="stat-label">Last 60 days</div>
              <div className="stat-value">59%</div>
              <div className="stat-target">Target: 66%</div>
            </div>

            <div className="stat-item">
              <div className="stat-label">Last 90 days</div>
              <div className="stat-value">93%</div>
              <div className="stat-target">Target: 95%</div>
            </div>

            <div className="stat-item">
              <div className="stat-label">Unworked Companies</div>
              <div className="stat-value">19</div>
              <div className="stat-target">Target: 0</div>
            </div>

            <div className="spacer"></div>
          </div>
        </div>

        {/* Workrate by Tier Section */}
        <div className="workrate-tier-section">
          <div className="tier-header">
            <h3 className="tier-title">Workrate by tier</h3>
            <div className="tier-dropdown">
              <button className="dropdown-button">
                <span className="dropdown-text">All time</span>
                <svg className="dropdown-icon" viewBox="0 0 9 6" fill="none">
                  <path d="M0.730625 0C0.529375 0 0.345625 0.0831249 0.214375 0.214375C0.0831249 0.35 0 0.53375 0 0.735C0 0.93625 0.0831249 1.12437 0.214375 1.25562L3.85875 4.9525C3.99 5.08812 4.17375 5.16687 4.375 5.16687C4.57625 5.16687 4.76 5.08375 4.89125 4.9525L8.53563 1.25562C8.66688 1.12 8.75 0.93625 8.75 0.735C8.75 0.53375 8.66688 0.345625 8.53563 0.214375C8.40438 0.0831249 8.225 0 8.02375 0H0.730625Z" fill="#0091AE"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="tier-progress-section">
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Tier 1</span>
                <span className="progress-percentage">80%</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '80%'}}>
                  <span className="progress-text">80%</span>
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Tier 2</span>
                <span className="progress-percentage">60%</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '60%'}}>
                  <span className="progress-text">60%</span>
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Tier 3</span>
                <span className="progress-percentage">20%</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '20%'}}>
                  <span className="progress-text">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 