import './RecommendedActions.css';

const WarningIcon = () => (
  <div className="warning-icon">
    <svg
      className="warning-svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 15"
    >
      <path
        d="M1.98301 14.3848H14.0227C15.1153 14.382 16 13.4961 16 12.4029C16 12.0391 15.9018 11.6987 15.731 11.4057L15.7361 11.4149L9.71628 0.985793C9.36674 0.391804 8.73049 0 8.00286 0C7.27522 0 6.63897 0.392375 6.29457 0.976655L6.28943 0.985793L0.263868 11.4149C0.0982366 11.6987 0 12.0391 0 12.4029C0 13.4961 0.8847 14.382 1.9773 14.3848H1.98301ZM8.00286 10.0727C8.63397 10.0727 9.14514 10.5839 9.14514 11.215C9.14514 11.8461 8.63397 12.3573 8.00286 12.3573C7.37174 12.3573 6.86057 11.8461 6.86057 11.215C6.86057 10.5839 7.37174 10.0727 8.00286 10.0727ZM6.86057 4.40694C6.85657 4.38124 6.85429 4.35154 6.85429 4.32127C6.85429 4.006 7.11016 3.75013 7.42543 3.75013H8.58028C8.89555 3.75013 9.15142 4.006 9.15142 4.32127C9.15142 4.35154 9.14914 4.38124 9.14457 4.41037L9.14514 4.40694L8.574 8.40494C8.574 8.72021 8.31813 8.97608 8.00286 8.97608C7.68758 8.97608 7.43171 8.72021 7.43171 8.40494L6.86057 4.40694Z"
        fill="#F5C26B"
      />
    </svg>
  </div>
);

export default function RecommendedActions() {
  return (
    <div className="recommended-actions" data-name="recommended-actions">
      <div className="recommended-actions-content">
        <div className="actions-header">
          <div className="actions-title">
            More recommended actions
          </div>
        </div>
        
        <div className="action-item">
          <div className="action-content">
            <WarningIcon />
            <div className="action-text">
              <span className="action-description">You have too many Tier 3 companies in your capacity. </span>
              <span className="action-link">Recycle some.</span>
            </div>
          </div>
        </div>
        
        <div className="action-item">
          <div className="action-content">
            <WarningIcon />
            <div className="action-text">
              <span className="action-description">You have 18 unworked Tier 1 companies in your capacity. </span>
              <span className="action-link">Work these companies.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 