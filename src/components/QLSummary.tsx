import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QLSummaryProps {
  hasRecentQL: boolean;
  recentQLMessage?: string;
  hasPastQLs: boolean;
  pastQLsMessage?: string;
}

const QLSummary = ({ 
  hasRecentQL, 
  recentQLMessage = "There isn't a recent QL associated with this contact.",
  hasPastQLs,
  pastQLsMessage = "There aren't past QLs or HINQLs associated with this contact."
}: QLSummaryProps) => {
  return (
    <div className="space-y-4">
      {/* Recent Qualified Lead */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h4 className="heading-40 text-foreground mb-4">Recent Qualified Lead (QL)</h4>
        <p className="body-80 text-muted-foreground">{recentQLMessage}</p>
      </div>

      {/* QL and HINQL History */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="heading-40 text-foreground">QL and HINQL History</h4>
          <Select defaultValue="90">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="60">Last 60 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="180">Last 180 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="body-80 text-muted-foreground">{pastQLsMessage}</p>
      </div>
    </div>
  );
};

export default QLSummary;
