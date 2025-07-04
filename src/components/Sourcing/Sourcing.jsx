import './Sourcing.css';
import SubNav from '../SubNav/SubNav';
import TableCell from '../TableCell/TableCell';
import UIHeader from '../UIHeader/UIHeader';
// import TableRow from '../TableRow/TableRow'; // TODO: Refactor to use TableCell component

export default function Sourcing() {
  const handleSort = (column, direction) => {
    console.log('Sorting by:', column, 'in', direction, 'order');
  };

  const navItems = [
    {
      label: "All Open Companies",
      active: true
    },
    {
      label: "Winbacks"
    },
    {
      label: "Lookalikes"
    },
    {
      label: "Product Intent"
    },
    {
      label: "Competitor Intent"
    },
    {
      label: "Challenge Intent"
    },
    {
      label: "Good fits for you"
    },
    {
      label: "Hidden companies"
    }
  ];

  return (
    <div className="sourcing-container">
      <div className="sourcing-layout">
        <div className="sourcing-sidebar">
          <SubNav 
            title="Sourcing Views"
            navItems={navItems}
            defaultActiveItem="All Open Companies"
          />
        </div>
        <div className="sourcing-main">
          <div className="sourcing-content">
            
            {/* UI Header */}
            <UIHeader />
            
            {/* Table Container */}
            <div className="sourcing-table-container">
              <div className="sourcing-table">
                {/* Table Header Row */}
                <div className="sourcing-table-row">
                <TableCell 
                  state="header"
                  content="Company Name"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('companyName')}
                />
                <TableCell 
                  state="header"
                  content="Recent Conversion Date"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('recentConversionDate')}
                />
                <TableCell 
                  state="header"
                  content="Recent Conversion"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('recentConversion')}
                />
                <TableCell 
                  state="header"
                  content="Industry (Source of Truth)"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('industry')}
                />
                <TableCell 
                  state="header"
                  content="Tech stack (Source of Truth)"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('techStack')}
                />
                <TableCell 
                  state="header"
                  content="ZI: Revenue Range"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('revenueRange')}
                />
                <TableCell 
                  state="header"
                  content="Create Date"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('createDate')}
                />
                <TableCell 
                  state="header"
                  content="Last Activity Date"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('lastActivityDate')}
                />
                <TableCell 
                  state="header"
                  content="Rating"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('rating')}
                />
                <TableCell 
                  state="header"
                  content="Annual Revenue"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('annualRevenue')}
                />
                <TableCell 
                  state="header"
                  content="Last Contacted"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('lastContacted')}
                />
                <TableCell 
                  state="header"
                  content="Enrichment Country"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('enrichmentCountry')}
                />
                <TableCell 
                  state="header"
                  content="Account Phone"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('accountPhone')}
                />
                <TableCell 
                  state="header"
                  content="Page Rank"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('pageRank')}
                />
                <TableCell 
                  state="header"
                  content="HubSpot Fit Score"
                  sortable={true}
                  sortOrder={null}
                  onSort={() => handleSort('hubspotFitScore')}
                />
              </div>
              
              {/* Data Row */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "Acme Industries",
                    initials: "AI",
                    color: "#2563eb"
                  }}
                />
                <TableCell 
                  state="default"
                  content="23 Jul 2024 18:24 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Contact Form Submission"
                />
                <TableCell 
                  state="default"
                  content="Software Development"
                />
                <TableCell 
                  state="default"
                  content="Digital Ocean, Go Squared, Google Analytics, Google Tag Manager, Gravity Forms, Microsoft Project, reCAPTCHA, WordPress"
                />
                <TableCell 
                  state="default"
                  content="$10M - $50M"
                />
                <TableCell 
                  state="default"
                  content="15 Jan 2024 10:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="28 Dec 2023 22:54 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$25,000,000"
                />
                <TableCell 
                  state="default"
                  content="12 Nov 2024 14:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="United States"
                />
                <TableCell 
                  state="default"
                  content="+1 (555) 123-4567"
                />
                <TableCell 
                  state="default"
                  content="12,394"
                />
                <TableCell 
                  state="default"
                  content="8"
                />
              </div>
              
              {/* Data Row 2 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "TechFlow Solutions",
                    initials: "TF",
                    color: "#dc2626"
                  }}
                />
                <TableCell 
                  state="default"
                  content="15 Aug 2024 09:30 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Demo Request"
                />
                <TableCell 
                  state="default"
                  content="Information Technology"
                />
                <TableCell 
                  state="default"
                  content="AWS, React, Node.js, MongoDB, Docker, Kubernetes"
                />
                <TableCell 
                  state="default"
                  content="$5M - $25M"
                />
                <TableCell 
                  state="default"
                  content="08 Mar 2024 14:22 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="12 Jan 2024 16:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Medium"
                />
                <TableCell 
                  state="default"
                  content="$15,750,000"
                />
                <TableCell 
                  state="default"
                  content="05 Dec 2024 11:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="United Kingdom"
                />
                <TableCell 
                  state="default"
                  content="+44 20 7123 4567"
                />
                <TableCell 
                  state="default"
                  content="8,127"
                />
                <TableCell 
                  state="default"
                  content="6"
                />
              </div>
              
              {/* Data Row 3 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "Green Energy Corp",
                    initials: "GE",
                    color: "#16a34a"
                  }}
                />
                <TableCell 
                  state="default"
                  content="02 Sep 2024 11:45 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Newsletter Signup"
                />
                <TableCell 
                  state="default"
                  content="Renewable Energy"
                />
                <TableCell 
                  state="default"
                  content="Salesforce, Tableau, Python, PostgreSQL"
                />
                <TableCell 
                  state="default"
                  content="$25M - $100M"
                />
                <TableCell 
                  state="default"
                  content="22 Feb 2024 08:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="28 Feb 2024 13:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$65,000,000"
                />
                <TableCell 
                  state="default"
                  content="18 Nov 2024 16:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Germany"
                />
                <TableCell 
                  state="default"
                  content="+49 30 1234 5678"
                />
                <TableCell 
                  state="default"
                  content="15,621"
                />
                <TableCell 
                  state="default"
                  content="9"
                />
              </div>
              
              {/* Data Row 4 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "DataFlow Analytics",
                    initials: "DA",
                    color: "#7c3aed"
                  }}
                />
                <TableCell 
                  state="default"
                  content="18 Oct 2024 08:15 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Whitepaper Download"
                />
                <TableCell 
                  state="default"
                  content="Data Analytics"
                />
                <TableCell 
                  state="default"
                  content="Snowflake, dbt, Looker, Python, Apache Airflow"
                />
                <TableCell 
                  state="default"
                  content="$1M - $10M"
                />
                <TableCell 
                  state="default"
                  content="12 Apr 2024 12:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="05 Mar 2024 10:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Medium"
                />
                <TableCell 
                  state="default"
                  content="$7,500,000"
                />
                <TableCell 
                  state="default"
                  content="25 Oct 2024 09:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Canada"
                />
                <TableCell 
                  state="default"
                  content="+1 416 555 0123"
                />
                <TableCell 
                  state="default"
                  content="4,892"
                />
                <TableCell 
                  state="default"
                  content="5"
                />
              </div>
              
              {/* Data Row 5 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "FinTech Innovations",
                    initials: "FI",
                    color: "#f59e0b"
                  }}
                />
                <TableCell 
                  state="default"
                  content="05 Nov 2024 14:20 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Product Trial"
                />
                <TableCell 
                  state="default"
                  content="Financial Services"
                />
                <TableCell 
                  state="default"
                  content="Stripe, Plaid, React Native, Node.js, Redis"
                />
                <TableCell 
                  state="default"
                  content="$50M - $200M"
                />
                <TableCell 
                  state="default"
                  content="30 Jan 2024 15:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="18 Apr 2024 17:25 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$125,000,000"
                />
                <TableCell 
                  state="default"
                  content="02 Dec 2024 13:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Australia"
                />
                <TableCell 
                  state="default"
                  content="+61 2 9876 5432"
                />
                <TableCell 
                  state="default"
                  content="22,458"
                />
                <TableCell 
                  state="default"
                  content="7"
                />
              </div>
              
              {/* Data Row 6 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "CloudSync Systems",
                    initials: "CS",
                    color: "#06b6d4"
                  }}
                />
                <TableCell 
                  state="default"
                  content="12 Dec 2024 16:30 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Webinar Registration"
                />
                <TableCell 
                  state="default"
                  content="Cloud Computing"
                />
                <TableCell 
                  state="default"
                  content="Azure, Terraform, Kubernetes, Go, Prometheus"
                />
                <TableCell 
                  state="default"
                  content="$10M - $50M"
                />
                <TableCell 
                  state="default"
                  content="18 May 2024 11:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="22 May 2024 14:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Medium"
                />
                <TableCell 
                  state="default"
                  content="$35,000,000"
                />
                <TableCell 
                  state="default"
                  content="08 Nov 2024 10:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="France"
                />
                <TableCell 
                  state="default"
                  content="+33 1 23 45 67 89"
                />
                <TableCell 
                  state="default"
                  content="9,876"
                />
                <TableCell 
                  state="default"
                  content="6"
                />
              </div>
              
              {/* Data Row 7 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "MedTech Solutions",
                    initials: "MT",
                    color: "#ef4444"
                  }}
                />
                <TableCell 
                  state="default"
                  content="28 Jan 2024 07:45 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Consultation Request"
                />
                <TableCell 
                  state="default"
                  content="Healthcare Technology"
                />
                <TableCell 
                  state="default"
                  content="Epic, Cerner, HL7, FHIR, .NET, SQL Server"
                />
                <TableCell 
                  state="default"
                  content="$100M - $500M"
                />
                <TableCell 
                  state="default"
                  content="05 Jun 2024 09:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="15 Jun 2024 16:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$275,000,000"
                />
                <TableCell 
                  state="default"
                  content="20 Nov 2024 08:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Netherlands"
                />
                <TableCell 
                  state="default"
                  content="+31 20 123 4567"
                />
                <TableCell 
                  state="default"
                  content="18,742"
                />
                <TableCell 
                  state="default"
                  content="9"
                />
              </div>
              
              {/* Data Row 8 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "RetailTech Pro",
                    initials: "RT",
                    color: "#8b5cf6"
                  }}
                />
                <TableCell 
                  state="default"
                  content="14 Feb 2024 10:15 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Quote Request"
                />
                <TableCell 
                  state="default"
                  content="E-commerce"
                />
                <TableCell 
                  state="default"
                  content="Shopify, Magento, Vue.js, Laravel, Redis"
                />
                <TableCell 
                  state="default"
                  content="$5M - $25M"
                />
                <TableCell 
                  state="default"
                  content="28 Jul 2024 13:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="30 Jul 2024 11:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Low"
                />
                <TableCell 
                  state="default"
                  content="$12,500,000"
                />
                <TableCell 
                  state="default"
                  content="15 Oct 2024 14:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Spain"
                />
                <TableCell 
                  state="default"
                  content="+34 91 234 5678"
                />
                <TableCell 
                  state="default"
                  content="6,543"
                />
                <TableCell 
                  state="default"
                  content="4"
                />
              </div>
              
              {/* Data Row 9 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "EduTech Global",
                    initials: "EG",
                    color: "#10b981"
                  }}
                />
                <TableCell 
                  state="default"
                  content="20 Mar 2024 12:00 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Platform Demo"
                />
                <TableCell 
                  state="default"
                  content="Educational Technology"
                />
                <TableCell 
                  state="default"
                  content="Canvas, Moodle, Angular, Spring Boot, MySQL"
                />
                <TableCell 
                  state="default"
                  content="$25M - $100M"
                />
                <TableCell 
                  state="default"
                  content="10 Aug 2024 10:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="08 Aug 2024 15:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Medium"
                />
                <TableCell 
                  state="default"
                  content="$45,000,000"
                />
                <TableCell 
                  state="default"
                  content="30 Nov 2024 12:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Brazil"
                />
                <TableCell 
                  state="default"
                  content="+55 11 1234 5678"
                />
                <TableCell 
                  state="default"
                  content="11,234"
                />
                <TableCell 
                  state="default"
                  content="7"
                />
              </div>
              
              {/* Data Row 10 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "AutoTech Industries",
                    initials: "AT",
                    color: "#f97316"
                  }}
                />
                <TableCell 
                  state="default"
                  content="06 Apr 2024 15:30 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Partnership Inquiry"
                />
                <TableCell 
                  state="default"
                  content="Automotive Technology"
                />
                <TableCell 
                  state="default"
                  content="ROS, MATLAB, C++, Python, TensorFlow"
                />
                <TableCell 
                  state="default"
                  content="$200M - $1B"
                />
                <TableCell 
                  state="default"
                  content="15 Sep 2024 16:20 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="25 Sep 2024 09:40 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$450,000,000"
                />
                <TableCell 
                  state="default"
                  content="12 Dec 2024 17:15 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Japan"
                />
                <TableCell 
                  state="default"
                  content="+81 3 1234 5678"
                />
                <TableCell 
                  state="default"
                  content="28,651"
                />
                <TableCell 
                  state="default"
                  content="8"
                />
              </div>
              
              {/* Data Row 11 */}
              <div className="sourcing-table-row">
                <TableCell 
                  state="title"
                  content={{
                    name: "CyberShield Security",
                    initials: "CS",
                    color: "#1e40af"
                  }}
                />
                <TableCell 
                  state="default"
                  content="19 May 2024 13:45 GMT+2"
                />
                <TableCell 
                  state="default"
                  content="Security Assessment"
                />
                <TableCell 
                  state="default"
                  content="Cybersecurity"
                />
                <TableCell 
                  state="default"
                  content="Splunk, CrowdStrike, Okta, Palo Alto, Fortinet"
                />
                <TableCell 
                  state="default"
                  content="$10M - $50M"
                />
                <TableCell 
                  state="default"
                  content="03 Oct 2024 11:30 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="12 Oct 2024 14:25 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="High"
                />
                <TableCell 
                  state="default"
                  content="$28,000,000"
                />
                <TableCell 
                  state="default"
                  content="07 Dec 2024 15:45 GMT+1"
                />
                <TableCell 
                  state="default"
                  content="Sweden"
                />
                <TableCell 
                  state="default"
                  content="+46 8 123 456 78"
                />
                <TableCell 
                  state="default"
                  content="7,892"
                />
                <TableCell 
                  state="default"
                  content="6"
                />
              </div>
              
              {/* 
              <TableRow 
                companyName="Acme Industries"
                description="The Social Media Content Calendar"
                startDate="23 Jul 2024 18:24 GMT+2"
                metric1="12,927"
                category="Automotive"
                metric2="2"
                endDate="28 Dec 2023 22:54 GMT+1"
              />
              
              <TableRow 
                companyName="Tech Solutions Ltd"
                description="Mobile App Development Project"
                startDate="15 Aug 2024 09:30 GMT+2"
                metric1="8,453"
                category="Technology"
                metric2="5"
                endDate="12 Jan 2024 14:22 GMT+1"
              />
              
              <TableRow 
                companyName="Green Energy Corp"
                description="Renewable Energy Campaign"
                startDate="02 Sep 2024 11:45 GMT+2"
                metric1="15,621"
                category="Energy"
                metric2="3"
                endDate="28 Feb 2024 16:18 GMT+1"
              />
              
              <TableRow 
                companyName="Healthcare Plus"
                description="Patient Management System"
                startDate="18 Oct 2024 08:15 GMT+2"
                metric1="22,107"
                category="Healthcare"
                metric2="7"
                endDate="05 Mar 2024 10:33 GMT+1"
              />
              
              <TableRow 
                companyName="Financial Services Inc"
                description="Banking Platform Redesign"
                startDate="05 Nov 2024 14:20 GMT+2"
                metric1="19,832"
                category="Finance"
                metric2="4"
                endDate="18 Apr 2024 11:45 GMT+1"
              />
              
              <TableRow 
                companyName="E-commerce Solutions"
                description="Online Store Optimization"
                startDate="12 Dec 2024 16:30 GMT+2"
                metric1="7,298"
                category="E-commerce"
                metric2="6"
                endDate="22 May 2024 09:12 GMT+1"
              />
              
              <TableRow 
                companyName="Manufacturing Co"
                description="Supply Chain Management"
                startDate="28 Jan 2024 07:45 GMT+2"
                metric1="31,456"
                category="Manufacturing"
                metric2="8"
                endDate="15 Jun 2024 13:28 GMT+1"
              />
              
              <TableRow 
                companyName="Media & Entertainment"
                description="Content Distribution Network"
                startDate="14 Feb 2024 10:15 GMT+2"
                metric1="25,674"
                category="Media"
                metric2="9"
                endDate="30 Jul 2024 15:40 GMT+1"
              />
              
              <TableRow 
                companyName="Education Tech"
                description="Learning Management System"
                startDate="20 Mar 2024 12:00 GMT+2"
                metric1="14,789"
                category="Education"
                metric2="3"
                endDate="08 Aug 2024 17:55 GMT+1"
              />
              
              <TableRow 
                companyName="Real Estate Group"
                description="Property Management Portal"
                startDate="06 Apr 2024 15:30 GMT+2"
                metric1="18,345"
                category="Real Estate"
                metric2="5"
                endDate="25 Sep 2024 12:20 GMT+1"
              />
              */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 