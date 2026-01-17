import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import downCarat from "@/assets/down-carat.png";
import { Task } from "@/components/TaskCard";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import externalLinkIcon from "@/assets/external-link-icon.png";
import ContactCard from "@/components/ContactCard";
export interface QLData {
  requestType: string;
  requestDate: string;
  deadline: string;
}

export interface RecommendedContact {
  id: string;
  name: string;
  initials: string;
  role: string;
  avatarColor: string;
  recentTouches: number;
  enrolledInSequence: boolean;
  recentConversions?: number;
  signals: Array<{
    variant: "green" | "blue" | "yellow" | "orange";
    text: string;
  }>;
  qlData?: QLData;
}
export interface Company {
  id: string;
  name: string;
  logo?: string;
  website: string;
  industry?: string;
  pvsScore?: "High" | "Medium" | "Low";
  conversionTrigger?: string;
  status: "Unworked QL" | "Unworked P1" | "In Progress" | "Worked" | "Snoozed" | "Dismissed";
  signals: Array<{
    variant: "green" | "blue" | "yellow" | "orange";
    text: string;
  }>;
  tasks: Task[];
  touches: {
    contactsReached: {
      current: number;
      total: number;
    };
    totalTouches: number;
    progress: number;
    touchStatuses: Array<"completed" | "scheduled" | "empty">;
    deadline: string;
  };
  recommendedContacts: RecommendedContact[];
}
interface CompanyCardProps {
  company: Company;
  onCompanyClick?: () => void;
  onContactClick?: (contactId: string) => void;
  onTaskClick?: (taskId: string) => void;
  onCallClick?: (contactId: string, taskId: string) => void;
  onEmailClick?: (contactId: string, taskId: string) => void;
  onPrepForCallClick?: (contactId: string) => void;
  completedTasks?: Set<string>;
}
const CompanyCard = ({
  company,
  onCompanyClick,
  onContactClick,
  onTaskClick,
  onCallClick,
  onEmailClick,
  onPrepForCallClick,
  completedTasks
}: CompanyCardProps) => {
  const [isDismissModalOpen, setIsDismissModalOpen] = useState(false);
  const getStatusBadge = () => {
    switch (company.status) {
      case "Unworked QL":
        return {
          label: "QL",
          style: { background: "var(--color-fill-accent-orange-default, #C93700)" },
          className: "text-white"
        };
      case "Unworked P1":
        return {
          label: "Unworked",
          style: { background: "#2563EB" },
          className: "text-white"
        };
      case "In Progress":
        return {
          label: "In Progress",
          style: { background: "var(--color-fill-caution-default, #FCCB57)" },
          className: "text-black"
        };
      case "Worked":
        return {
          label: "Worked",
          style: { background: "var(--color-fill-transitional-progress-success-gradient-color-1, #00823A)" },
          className: "text-white"
        };
      case "Snoozed":
        return {
          label: "Snoozed",
          style: { background: "#6B7280" },
          className: "text-white"
        };
      case "Dismissed":
        return {
          label: "Dismissed",
          style: { background: "#6B7280" },
          className: "text-white"
        };
    }
  };

  const statusBadge = getStatusBadge();

  // Ensure exactly 5 dots are always rendered
  const touchStatuses = [...(company.touches.touchStatuses || [])];
  while (touchStatuses.length < 5) {
    touchStatuses.push("empty");
  }
  const displayedTouchStatuses = touchStatuses.slice(0, 5);

  // Count remaining touches (non-completed)
  const remainingTouches = displayedTouchStatuses.filter(status => status !== "completed").length;
  return <Card className="p-8 mb-4 border border-border rounded shadow-100 flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src={company.logo || companyLogoPlaceholder} alt={`${company.name} logo`} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <h3 className="heading-300 text-text-interactive cursor-pointer hover:text-text-interactive-hover transition-colors mb-1" onClick={onCompanyClick}>
                {company.name}
              </h3>
              <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="heading-50 text-text-interactive hover:text-text-interactive-hover transition-colors flex items-center gap-1 mb-1">
                {company.website}
                <img src={externalLinkIcon} alt="External link" className="w-3 h-3" />
              </a>
              <p className="body-100 text-muted-foreground flex items-center gap-1">
                <span>{company.industry ?? "—"}</span>
                <span>•</span>
                <span>PVS {company.pvsScore ?? "—"}</span>
                <span>•</span>
                <span>{company.conversionTrigger ?? "—"}</span>
                <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Status Badge and Touch Indicators */}
        <div className="flex flex-col items-end gap-2">
          {/* Status Badge */}
          <div 
            className={`flex items-center justify-center px-3 py-1 rounded-full heading-50 ${statusBadge.className}`}
            style={statusBadge.style}
          >
            {statusBadge.label}
          </div>

          {/* Touch Indicators */}
          <div className="flex flex-col items-end gap-1">
            <span className="detail-200 text-muted-foreground">
              {remainingTouches} more {remainingTouches === 1 ? 'touch' : 'touches'} required before {company.touches.deadline}
            </span>
            <div className="flex items-center gap-1.5">
              {displayedTouchStatuses.map((status, index) => <div key={index} className={`h-4 w-4 rounded-full ${status === "completed" ? "" : status === "scheduled" ? "bg-trellis-orange-500" : ""}`} style={{
              background: status === "completed" ? "var(--color-fill-transitional-progress-success-gradient-color-1, #00823A)" : status === "empty" ? "var(--color-fill-surface-recessed, #F0F0F0)" : undefined
            }} />)}
            </div>
          </div>
        </div>
      </div>


      {/* Recommended Contacts */}
      <div>
        <div className="flex items-stretch gap-4 overflow-x-auto pb-2">
          {company.recommendedContacts.map(contact => (
            <div key={contact.id} className="flex-shrink-0 flex">
              <ContactCard
                contact={contact}
                companyLogo={company.logo}
                onContactClick={onContactClick}
                onCallClick={contactId => onCallClick?.(contactId, "")}
                onEmailClick={contactId => onEmailClick?.(contactId, "")}
                onPrepForCallClick={onPrepForCallClick}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button variant="link" className="body-100 text-muted-foreground h-auto p-0">
            Don't see the right contact? <span className="text-foreground ml-1">Explore all contacts in {company.name}.</span>
          </Button>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex min-h-[40px] px-3 justify-center items-center gap-2 rounded border border-transparent bg-transparent heading-50 text-foreground hover:bg-accent/10 transition-colors">
                  Snooze <img src={downCarat} alt="" className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>1 day</DropdownMenuItem>
                <DropdownMenuItem>3 days</DropdownMenuItem>
                <DropdownMenuItem>1 week</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="flex min-h-[40px] px-3 justify-center items-center gap-2 rounded border border-transparent bg-transparent heading-50 text-foreground hover:bg-accent/10 transition-colors" onClick={() => setIsDismissModalOpen(true)}>
              Dismiss
            </button>
          </div>
        </div>
      </div>

      {/* Dismiss Confirmation Modal */}
      <Dialog open={isDismissModalOpen} onOpenChange={setIsDismissModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dismiss {company.name}?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p className="body-100 text-foreground">
              This will remove {company.name} from your P1 list until someone at {company.name} shows high intent again.
            </p>
            <p className="body-100 text-foreground">
              You can view your dismissed companies using the "Worked Status" selector.
            </p>
          </div>
          <DialogFooter className="sm:justify-start gap-2">
            <Button variant="destructive" onClick={() => setIsDismissModalOpen(false)}>
              Dismiss {company.name}
            </Button>
            <Button variant="outline" onClick={() => setIsDismissModalOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>;
};
export default CompanyCard;