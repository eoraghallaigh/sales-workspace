import './MainRecommendation.css';

export default function MainRecommendation() {
  return (
    <div className="main-recommendation" data-name="main-recommendation">
      <div className="main-recommendation-content">
        <div className="call-to-action" data-name="Call to action">
          <div className="recommendation-container">
            <h3 className="recommendation-heading">
              You need to source more
            </h3>
            <p className="recommendation-text">
              Your workrate is good, but you need to build a stronger capacity in order to hit your quota consistently. Use the sourcing tab to find more Tier 1 companies
            </p>
            <button className="source-button" data-name="Button [Transitional]">
              Source more companies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 