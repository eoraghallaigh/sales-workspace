import './Summary.css';

// Button component matching Figma design
function Button({ children, variant = "primary", size = "small", onClick }) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Tag component matching Figma design
function Tag({ children, variant = "default" }) {
  const variantClasses = {
    error: 'tag--error',
    success: 'tag--success', 
    warning: 'tag--warning'
  };
  
  return (
    <div className={`tag ${variantClasses[variant] || 'tag--default'}`}>
      <div className="tag__content">
        {children}
      </div>
    </div>
  );
}

// Data Statistic component matching Figma design
function DataStatistic({ title, value, subtitle, tagText, tagVariant }) {
  return (
    <div className="data-well">
      <div className="data-well__content">
        <div className="data-statistic">
          <div className="data-statistic__title">
            {title}
          </div>
          <div className="data-statistic__stat">
            <div className="data-statistic__value">
              {value}
            </div>
            <div className="data-statistic__subtitle">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="data-well__tag">
          <Tag variant={tagVariant}>
            {tagText}
          </Tag>
        </div>
      </div>
    </div>
  );
}

// Main Recommendation Alert component
function MainRecommendationAlert({ onNavigateToSourcing }) {
  return (
    <div className="main-recommendation">
      <div className="alert alert--primary">
        <div className="alert__content">
          <div className="alert__header">
            <h3 className="alert__title">You need to source more</h3>
          </div>
          <div className="alert__body">
            <p className="alert__text">
              Your workrate is good, but you need to build a stronger capacity in order to hit your quota consistently. Use the sourcing tab to find more High Fit companies
            </p>
            <Button variant="tertiary" size="small" onClick={onNavigateToSourcing}>
              Source more companies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Secondary Recommendation component
function SecondaryRecommendation({ text, actionText }) {
  return (
    <div className="secondary-recommendation">
      <div className="alert alert--secondary">
        <div className="alert__content">
          <div className="alert__body">
            <p className="alert__text">{text}</p>
            <button className="link-button">
              {actionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Summary({ onNavigateToSourcing }) {
  return (
    <div className="content-frame">
      <div className="content-frame__inner">
        <div className="summary-container">
          <h1 className="summary-heading">Summary</h1>
          
          <div className="summary-content">
            <div className="summary-content__row">
              {/* Left Column - Recommendations */}
              <div className="recommendations">
                <div className="recommendations__content">
                  {/* Main Recommendation */}
                  <MainRecommendationAlert onNavigateToSourcing={onNavigateToSourcing} />
                  
                  {/* Secondary Recommendations */}
                  <div className="secondary-recommendations">
                    <h4 className="secondary-recommendations__title">
                      More recommended actions
                    </h4>
                    
                    <SecondaryRecommendation 
                      text="You have too many Low Fit companies in your capacity."
                      actionText="Recycle some companies"
                    />
                    
                    <SecondaryRecommendation 
                      text="You have 18 unworked High Fit companies."
                      actionText="Work these companies"
                    />
                  </div>
                </div>
              </div>
              
              {/* Right Column - Statistics */}
              <div className="statistics">
                <div className="statistics__grid">
                  <DataStatistic 
                    title="Capacity expected value"
                    value="$21,273"
                    subtitle="MRR"
                    tagText="POOR"
                    tagVariant="error"
                  />
                  
                  <DataStatistic 
                    title="Low FIT COMPANIES"
                    value="40"
                    subtitle="Target: <60"
                    tagText="GOOD"
                    tagVariant="success"
                  />
                  
                  <DataStatistic 
                    title="workrate"
                    value="38%"
                    subtitle="Last 30 days"
                    tagText="GOOD"
                    tagVariant="success"
                  />
                  
                  <DataStatistic 
                    title="UNWORKED High Fit"
                    value="19"
                    subtitle="Target: 0"
                    tagText="FAIR"
                    tagVariant="warning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 