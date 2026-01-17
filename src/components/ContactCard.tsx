import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SignalBadge from "@/components/SignalBadge";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import emailIcon from "@/assets/email-icon.png";
import callIcon from "@/assets/call-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";

interface QLData {
  requestType: string;
  requestDate: string;
  deadline: string;
}

interface ContactCardProps {
  contact: {
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
  };
  companyLogo?: string;
  onContactClick?: (contactId: string) => void;
  onCallClick?: (contactId: string) => void;
  onEmailClick?: (contactId: string) => void;
  onPrepForCallClick?: (contactId: string) => void;
  onWorkQLClick?: (contactId: string) => void;
}

const ContactCard = ({
  contact,
  companyLogo,
  onContactClick,
  onCallClick,
  onEmailClick,
  onPrepForCallClick,
  onWorkQLClick,
}: ContactCardProps) => {
  const recentConversions = contact.recentConversions ?? 0;
  const isQL = !!contact.qlData;

  // QL Card variant
  if (isQL) {
    return (
      <div className="flex h-full flex-col border border-border rounded-lg bg-white min-w-[280px] max-w-[320px] overflow-hidden">
        {/* QL Header - Yellow/cream background */}
        <div className="flex items-center justify-between p-4 rounded-t-lg" style={{ background: 'var(--trellis-color-yellow-200)' }}>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarImage
                src={companyLogo || companyLogoPlaceholder}
                alt={`${contact.name} avatar`}
              />
              <AvatarFallback className={contact.avatarColor}>
                {contact.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div
                className="link-200 cursor-pointer hover:text-text-interactive transition-colors"
                onClick={() => onContactClick?.(contact.id)}
              >
                {contact.name}
              </div>
              <div className="detail-200 text-muted-foreground">
                {contact.role}
              </div>
            </div>
          </div>
          {/* QL Badge */}
          <div 
            className="flex items-center justify-center text-white text-sm font-semibold"
            style={{ 
              padding: '1px 8px',
              borderRadius: '999999px',
              background: 'var(--color-fill-accent-orange-default, #C93700)'
            }}
          >
            QL
          </div>
        </div>

        {/* QL Card Body */}
        <div className="flex flex-1 flex-col px-4 py-5">
          {/* QL Request Info */}
          <div className="flex flex-col gap-1 mb-6">
            <div className="body-125 font-semibold text-foreground">
              {contact.qlData!.requestType}
            </div>
            <div className="detail-200 text-muted-foreground">
              {contact.qlData!.requestDate}
            </div>
            <div className="detail-200 text-trellis-red-900 font-medium">
              Work or reject before {contact.qlData!.deadline}
            </div>
          </div>

          {/* Work QL CTA */}
          <Button
            variant="default"
            className="w-fit mt-auto"
            onClick={() => onWorkQLClick?.(contact.id)}
          >
            Work QL
          </Button>
        </div>
      </div>
    );
  }

  // Standard Contact Card
  return (
    <div className="flex h-full flex-col border border-border rounded-lg bg-white min-w-[280px] max-w-[320px] overflow-hidden">
      {/* Contact Header */}
      <div className="flex items-center justify-between p-4 rounded-t-lg" style={{ background: 'var(--color-fill-secondary-hover)' }}>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage
              src={companyLogo || companyLogoPlaceholder}
              alt={`${contact.name} avatar`}
            />
            <AvatarFallback className={contact.avatarColor}>
              {contact.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div
              className="link-200 cursor-pointer hover:text-text-interactive transition-colors"
              onClick={() => onContactClick?.(contact.id)}
            >
              {contact.name}
            </div>
            <div className="detail-200 text-muted-foreground">
              {contact.role}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-4 h-4 flex items-center justify-center"
            onClick={() => onEmailClick?.(contact.id)}
          >
            <img src={emailIcon} alt="Email" className="w-4 h-4" />
          </button>
          <button
            className="w-4 h-4 flex items-center justify-center"
            onClick={() => onCallClick?.(contact.id)}
          >
            <img src={callIcon} alt="Call" className="w-4 h-4" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center">
            <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col px-4 py-5">
        {/* Activity Points */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 detail-200 text-muted-foreground">
            <div
              className={`h-2 w-2 rounded-full ${
                recentConversions > 0
                  ? "bg-trellis-green-600"
                  : "bg-muted-foreground"
              }`}
            />
            {recentConversions > 0
              ? `${recentConversions} recent conversion${recentConversions !== 1 ? "s" : ""}`
              : "No recent conversions"}
          </div>
          <div className="flex items-center gap-2 detail-200 text-muted-foreground">
            <div
              className={`h-2 w-2 rounded-full ${
                contact.recentTouches > 0
                  ? "bg-trellis-green-600"
                  : "bg-muted-foreground"
              }`}
            />
            {contact.recentTouches > 0
              ? `${contact.recentTouches} recent touch${contact.recentTouches !== 1 ? "es" : ""}`
              : "No recent touches"}
          </div>
          <div className="flex items-center gap-2 detail-200 text-muted-foreground">
            <div
              className={`h-2 w-2 rounded-full ${
                contact.enrolledInSequence
                  ? "bg-trellis-purple-600"
                  : "bg-muted-foreground"
              }`}
            />
            {contact.enrolledInSequence
              ? "Enrolled in a sequence"
              : "Not enrolled in a sequence"}
          </div>
        </div>

        {/* Signals */}
        <div className="flex flex-col items-start gap-2 mb-6">
          {contact.signals.length > 0 ? (
            contact.signals.map((signal, idx) => (
              <SignalBadge key={idx} variant={signal.variant}>
                {signal.text}
              </SignalBadge>
            ))
          ) : (
            <span className="detail-200 text-muted-foreground">No signals found</span>
          )}
        </div>

        {/* Prep for Call CTA */}
        <Button
          variant="secondary"
          className="w-fit mt-auto"
          onClick={() => onPrepForCallClick?.(contact.id)}
        >
          Prep for call
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
