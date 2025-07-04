import './DataWell.css';

function Tag({ children = "Tag", variant = "default" }) {
  return (
    <div className={`tag tag--${variant}`}>
      <div className="tag__content">
        {children}
      </div>
    </div>
  );
}

export default function DataWell({ 
  title = "Capacity expected value", 
  value = "$21,273", 
  subtitle = "MRR", 
  tagText = "", 
  tagVariant = "error",
  showTag = false 
}) {
  // Show tag if showTag is true OR if tagText is provided
  const shouldShowTag = showTag || (tagText && tagText.trim() !== "");

  return (
    <div className="data-well">
      <div className="data-well__content">
        <div className="data-statistic">
          <div className="data-statistic__header">
            <div className="data-statistic__title">
              {title}
            </div>
            <div className="data-statistic__stat">
              <div className="data-statistic__value">
                {value}
              </div>
              {subtitle && (
                <div className="data-statistic__subtitle">
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        </div>
        {shouldShowTag && (
          <div className="data-well__tag">
            <Tag variant={tagVariant}>
              {tagText}
            </Tag>
          </div>
        )}
      </div>
    </div>
  );
} 