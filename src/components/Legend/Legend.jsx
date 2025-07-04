import './Legend.css';

const KeyIndicator = ({ color, children }) => (
  <div className="key-indicator">
    <svg
      className="indicator-svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 8 8"
    >
      <circle
        cx="4"
        cy="4"
        fill={color}
        r="4"
      />
    </svg>
  </div>
);

const KeyLabel = ({ color, label }) => (
  <div className="key-label">
    <div className="key-label-container">
      <KeyIndicator color={color} />
      <div className="key-text">
        {label}
      </div>
    </div>
  </div>
);

export default function Legend() {
  return (
    <div className="legend" data-name="Key">
      <div className="legend-container">
        <KeyLabel color="#F8A9AD" label="Unrated" />
        <KeyLabel color="#00BDA5" label="Low" />
        <KeyLabel color="#FF8F59" label="Medium" />
        <KeyLabel color="#6A78D1" label="High" />
      </div>
    </div>
  );
} 