import './YourRatings.css';

export default function YourRatings() {
  return (
    <div className="your-ratings" data-name="Your_Ratings">
      <div className="your-ratings-inner">
        <div className="your-ratings-content">
          {/* Header with title and legend */}
          <div className="your-ratings-header">
            <div className="your-ratings-header-content">
              <div className="your-ratings-title">
                Your Ratings
              </div>
              <div className="your-ratings-legend">
                <div className="your-ratings-legend-content">
                  <div className="your-ratings-legend-item">
                    <div className="your-ratings-legend-indicator">
                      <svg className="your-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#F8A9AD" r="4" />
                      </svg>
                    </div>
                    <div className="your-ratings-legend-text">Unrated</div>
                  </div>
                  <div className="your-ratings-legend-item">
                    <div className="your-ratings-legend-indicator">
                      <svg className="your-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#00BDA5" r="4" />
                      </svg>
                    </div>
                    <div className="your-ratings-legend-text">Low</div>
                  </div>
                  <div className="your-ratings-legend-item">
                    <div className="your-ratings-legend-indicator">
                      <svg className="your-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#FF8F59" r="4" />
                      </svg>
                    </div>
                    <div className="your-ratings-legend-text">Medium</div>
                  </div>
                  <div className="your-ratings-legend-item">
                    <div className="your-ratings-legend-indicator">
                      <svg className="your-ratings-legend-circle" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" fill="#6A78D1" r="4" />
                      </svg>
                    </div>
                    <div className="your-ratings-legend-text">High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart section */}
          <div className="chart-section">
            <div className="chart-container">
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

                  {/* Chart plot area with bar */}
                  <div className="chart-plot">
                    <div className="plot-container">
                      <div className="bar-container">
                        <div className="bar">
                          <div className="bar-segment unrated" style={{width: '20.35%'}}></div>
                          <div className="bar-segment low" style={{width: '19.037%'}}></div>
                          <div className="bar-segment medium" style={{width: '47.921%'}}></div>
                          <div className="bar-segment high" style={{width: '12.692%'}}></div>
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