import './HubspotRatings.css';

export default function HubspotRatings() {
  return (
    <div className="hubspot-ratings" data-name="HubSpot_Ratings">
      <div className="hubspot-ratings-inner">
        <div className="hubspot-ratings-content">
          {/* Header with title and legend */}
          <div className="hubspot-ratings-header">
            <div className="hubspot-ratings-header-content">
              <div className="hubspot-ratings-title">
                HubSpot Ratings
              </div>
              <div className="hubspot-ratings-legend">
                <div className="hubspot-ratings-legend-content">
                  <div className="hubspot-ratings-legend-item">
                    <div className="hubspot-ratings-legend-indicator">
                      <svg className="hubspot-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#FF7A59" r="4" />
                      </svg>
                    </div>
                    <div className="hubspot-ratings-legend-text">Tier 3</div>
                  </div>
                  <div className="hubspot-ratings-legend-item">
                    <div className="hubspot-ratings-legend-indicator">
                      <svg className="hubspot-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#00A4BD" r="4" />
                      </svg>
                    </div>
                    <div className="hubspot-ratings-legend-text">Tier 2</div>
                  </div>
                  <div className="hubspot-ratings-legend-item">
                    <div className="hubspot-ratings-legend-indicator">
                      <svg className="hubspot-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#F5C26B" r="4" />
                      </svg>
                    </div>
                    <div className="hubspot-ratings-legend-text">Tier 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart section */}
          <div className="chart-section">
            <div className="chart-container">
              {/* Y-axis labels */}
              <div className="y-labels">
                <div className="y-labels-container">
                  <div className="y-label-item">
                    <div className="y-label-content">
                      <div className="y-label-text">Target</div>
                    </div>
                  </div>
                  <div className="y-label-item">
                    <div className="y-label-content">
                      <div className="y-label-text">Actual</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart data area */}
              <div className="chart-data">
                <div className="chart-data-container">
                  {/* X-axis with grid lines and labels */}
                  <div className="x-axis">
                    <div className="x-axis-container">
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">0</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">50</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">100</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">150</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">200</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">250</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">300</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">350</div>
                      </div>
                      <div className="axis-label">
                        <div className="axis-line"></div>
                        <div className="axis-text">400</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart plot area with bars */}
                  <div className="chart-plot">
                    <div className="plot-container">
                      {/* Target bar */}
                      <div className="bar-container">
                        <div className="bar target-bar">
                          <div className="bar-segment tier-2" style={{width: '62.058%'}}></div>
                          <div className="bar-segment tier-1" style={{width: '37.942%'}}></div>
                        </div>
                      </div>
                      
                      {/* Actual bar */}
                      <div className="bar-container">
                        <div className="bar actual-bar">
                          <div className="bar-segment tier-3" style={{width: '23.918%'}}></div>
                          <div className="bar-segment tier-2" style={{width: '60.137%'}}></div>
                          <div className="bar-segment tier-1" style={{width: '15.945%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom axis label */}
                  <div className="bottom-label">
                    <div className="bottom-label-text">
                      Companies in your capacity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 