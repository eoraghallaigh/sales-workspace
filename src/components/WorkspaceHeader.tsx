import { Link } from "react-router-dom";
interface WorkspaceHeaderProps {
  activeTab?: "summary" | "prospecting" | "demo" | "deals" | "tasks";
}
const WorkspaceHeader = ({
  activeTab = "summary"
}: WorkspaceHeaderProps) => {
  const tabs = [{
    id: "summary",
    label: "Summary",
    path: "/sales-workspace"
  }, {
    id: "prospecting",
    label: "Prospecting",
    path: "/prospecting"
  }, {
    id: "demo",
    label: "Demo",
    path: "#"
  }, {
    id: "deals",
    label: "Deals",
    path: "#"
  }, {
    id: "tasks",
    label: "Tasks",
    path: "#"
  }];
  return <div className="sticky top-0 z-30 bg-card border-b border-core-subtle" onWheel={(e) => e.stopPropagation()}>
      <div className="pl-12 pr-6 pt-6">
        <h1 className="heading-300 mb-6">Sales Workspace | Olivia Smith</h1>
        
        {/* Navigation Tabs */}
        <div className="border-b border-core-subtle">
          <nav className="flex space-x-8">
            {tabs.map(tab => tab.id === "summary" ? (
              <span 
                key={tab.id} 
                className={`pb-4 px-1 border-b-2 cursor-not-allowed opacity-60 ${activeTab === tab.id ? "border-primary text-foreground body-100 !font-bold" : "border-transparent body-100 text-muted-foreground"}`}
              >
                {tab.label}
              </span>
            ) : (
              <Link 
                key={tab.id} 
                to={tab.path} 
                className={`pb-4 px-1 border-b-2 transition-colors ${activeTab === tab.id ? "border-primary text-foreground body-100 !font-bold" : "border-transparent body-100 text-muted-foreground hover:text-foreground hover:border-core-subtle"}`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>;
};
export default WorkspaceHeader;