import './WorkrateByTier.css';

const DataStatistic = ({ title, value, target }) => (
  <div className="data-statistic">
    <div className="data-statistic-content">
      <div className="data-statistic-title">
        {title}
      </div>
      <div className="data-statistic-stat">
        <div className="data-statistic-value">
          {value}
        </div>
        <div className="data-statistic-target">
          {target}
        </div>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, value }) => (
  <div className="progress-item">
    <div className="progress-header">
      <div className="progress-label">{label}</div>
      <div className="progress-value">{value}</div>
    </div>
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <div className="progress-text">{value}</div>
      </div>
    </div>
  </div>
);

const DropdownIcon = () => (
  <div className="dropdown-icon">
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
      <path
        d="M0.730625 0C0.529375 0 0.345625 0.0831249 0.214375 0.214375C0.0831249 0.35 0 0.53375 0 0.735C0 0.93625 0.0831249 1.12437 0.214375 1.25562L3.85875 4.9525C3.99 5.08812 4.17375 5.16687 4.375 5.16687C4.57625 5.16687 4.76 5.08375 4.89125 4.9525L8.53563 1.25562C8.66688 1.12 8.75 0.93625 8.75 0.735C8.75 0.53375 8.66688 0.345625 8.53563 0.214375C8.40438 0.0831249 8.225 0 8.02375 0H0.730625Z"
        fill="#0091AE"
      />
    </svg>
  </div>
);

export default function WorkrateByTier() {
  return (
    <div className="workrate-by-tier">
      <div className="workrate-container">
        {/* Main Title */}
        <div className="workrate-title">
          Your workrate
        </div>

        {/* Statistics Section */}
        <div className="statistics-section">
          <div className="statistics-row">
            <div className="spacer"></div>
            
            <DataStatistic 
              title="Last 30 days"
              value="38%"
              target="Target: 33%"
            />
            
            <DataStatistic 
              title="Last 60 days"
              value="59%"
              target="Target: 66%"
            />
            
            <DataStatistic 
              title="Last 90 days"
              value="93%"
              target="Target: 95%"
            />
            
            <DataStatistic 
              title="Unworked Companies"
              value="19"
              target="Target: 0"
            />

            <div className="spacer"></div>
          </div>
        </div>

        {/* Workrate by tier section */}
        <div className="tier-section">
          <div className="tier-controls">
            <div className="tier-header">
              <div className="tier-title">
                Workrate by tier
              </div>
              <div className="tier-dropdown">
                <div className="dropdown-button">
                  <div className="dropdown-content">
                    <div className="dropdown-text">All time</div>
                    <DropdownIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Chart */}
          <div className="progress-chart">
            <ProgressBar label="Tier 1" percentage={80} value="80%" />
            <ProgressBar label="Tier 2" percentage={60} value="60%" />
            <ProgressBar label="Tier 3" percentage={20} value="20%" />
          </div>
        </div>
      </div>
    </div>
  );
} 