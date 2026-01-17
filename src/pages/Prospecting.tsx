import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import WorkspaceHeader from "@/components/WorkspaceHeader";
import ProspectingSubNav from "@/components/ProspectingSubNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Info, ChevronDown, ListFilter, X, ExternalLink, FileEdit, Mail, Phone, ListTodo, Calendar, MoreHorizontal, Copy, Search, ArrowUpDown, ChevronRight, Check } from "lucide-react";
import CompanyCard from "@/components/CompanyCard";
import SignalBadge from "@/components/SignalBadge";
import CollapsibleSection from "@/components/CollapsibleSection";
import QLSummary from "@/components/QLSummary";
import EmailCommunicator from "@/components/EmailCommunicator";
import DiallerCommunicator from "@/components/DiallerCommunicator";
import CallPrepPanel from "@/components/CallPrepPanel";
import { prospectingCompanies as initialProspectingCompanies } from "@/data/prospectingCompanies";
import { companyDetails } from "@/data/companyDetails";
import { contactDetails, ContactDetail } from "@/data/contactDetails";
import downCarat from "@/assets/down-carat.png";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { Company } from "@/components/CompanyCard";
import { calculateCompanyStatus } from "@/utils/companyStatusUtils";
const Prospecting = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [isTaskPanelOpen, setIsTaskPanelOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [isCallPopoverOpen, setIsCallPopoverOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [emailRecipient, setEmailRecipient] = useState<{
    name?: string;
    email?: string;
  }>({});
  const [isDiallerOpen, setIsDiallerOpen] = useState(false);
  const [diallerContact, setDiallerContact] = useState<{
    name?: string;
    phone?: string;
    taskNotes?: string;
  }>({});
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [callingTaskId, setCallingTaskId] = useState<string | null>(null);
  const [emailingTaskId, setEmailingTaskId] = useState<string | null>(null);
  const [selectedWorkedStatuses, setSelectedWorkedStatuses] = useState<Set<string>>(new Set());
  const [isCallPrepPanelOpen, setIsCallPrepPanelOpen] = useState(false);
  const [callPrepContactId, setCallPrepContactId] = useState<string | null>(null);
  const toggleWorkedStatus = (status: string) => {
    setSelectedWorkedStatuses(prev => {
      const next = new Set(prev);
      if (next.has(status)) {
        next.delete(status);
      } else {
        next.add(status);
      }
      return next;
    });
  };
  const clearWorkedStatuses = () => {
    setSelectedWorkedStatuses(new Set());
  };
  // Fallback details for temp-* contacts
  const [selectedContactFallback, setSelectedContactFallback] = useState<{
    name?: string;
    role?: string;
    company?: string;
    initials?: string;
    avatarColor?: string;
    email?: string;
    phone?: string;
  }>({});
  const [prospectingCompanies, setProspectingCompanies] = useState<Company[]>(initialProspectingCompanies);

  // Helper to check if a company has a QL contact
  const hasQLContact = (company: Company) => 
    company.recommendedContacts.some(c => c.qlData !== undefined);

  // Capture initial sort order once on mount (frozen until page refresh)
  const [initialSortOrder] = useState<string[]>(() => {
    const statusPriority: Record<string, number> = {
      "Unworked QL": 1,
      "Unworked P1": 2,
      "In Progress": 3,
      "Worked": 4,
      "Snoozed": 5,
      "Dismissed": 6
    };
    return initialProspectingCompanies.map(company => ({
      id: company.id,
      status: calculateCompanyStatus(company, new Set())
    })).sort((a, b) => {
      // Sort by status priority
      return statusPriority[a.status] - statusPriority[b.status];
    }).map(c => c.id);
  });

  // Calculate dynamic company statuses but maintain frozen sort order
  // Filter to only show Unworked QL and Unworked P1 companies
  const companiesWithCalculatedStatus = useMemo(() => {
    // Calculate current status for each company (for display purposes)
    const companiesWithStatus = prospectingCompanies.map(company => ({
      ...company,
      status: calculateCompanyStatus(company, completedTasks)
    }));

    // Sort by frozen initial order, not current status
    const sortedCompanies = initialSortOrder
      .map(id => companiesWithStatus.find(c => c.id === id))
      .filter((c): c is Company => c !== undefined);

    // Filter to only show Unworked QL and Unworked P1 companies
    return sortedCompanies.filter(c => c.status === "Unworked QL" || c.status === "Unworked P1");
  }, [prospectingCompanies, completedTasks, initialSortOrder]);
  const incrementCompanyTouch = (taskId: string) => {
    setProspectingCompanies(prevCompanies => prevCompanies.map(company => {
      const hasTask = company.tasks.some(task => task.id === taskId);
      if (hasTask) {
        const updatedTouchStatuses = [...company.touches.touchStatuses];
        const firstNonCompletedIndex = updatedTouchStatuses.findIndex(status => status !== "completed");
        if (firstNonCompletedIndex !== -1) {
          updatedTouchStatuses[firstNonCompletedIndex] = "completed";
        }
        return {
          ...company,
          touches: {
            ...company.touches,
            touchStatuses: updatedTouchStatuses
          }
        };
      }
      return company;
    }));
  };
  const handleCompanyClick = (companyId: string) => {
    setSelectedCompanyId(companyId);
    setIsPanelOpen(true);
    setIsContactPanelOpen(false);
  };
  const handleContactClick = (contactId: string) => {
    setSelectedContactId(contactId);
    setIsContactPanelOpen(true);
    setIsPanelOpen(false);
    setIsTaskPanelOpen(false);
  };
  const handleTaskClick = (taskId: string) => {
    setSelectedTaskId(taskId);
    setIsTaskPanelOpen(true);
    setIsPanelOpen(false);
    setIsContactPanelOpen(false);
  };
  const handleCallClick = (contactId: string, taskId?: string) => {
    setSelectedContactId(contactId);
    setIsContactPanelOpen(true);
    setIsPanelOpen(false);
    setIsTaskPanelOpen(false);
    setIsCallPopoverOpen(true);
    if (taskId) {
      setCallingTaskId(taskId);
    }
  };
  const handleEmailClick = (name?: string, email?: string, taskId?: string, contactId?: string) => {
    setEmailRecipient({
      name,
      email
    });
    setIsEmailOpen(true);
    if (taskId) {
      setEmailingTaskId(taskId);
    }
    if (contactId) {
      setSelectedContactId(contactId);
      setIsContactPanelOpen(true);
      setIsPanelOpen(false);
      setIsTaskPanelOpen(false);
    }
  };

  const handlePrepForCallClick = (contactId: string) => {
    setCallPrepContactId(contactId);
    setIsCallPrepPanelOpen(true);
    // Close other panels
    setIsPanelOpen(false);
    setIsContactPanelOpen(false);
    setIsTaskPanelOpen(false);
  };

  // Helper: resolve contact ID by name
  const resolveContactIdByName = (name?: string) => {
    if (!name) return undefined;
    // 1) From contactDetails
    const cdMatch = Object.entries(contactDetails).find(([, c]) => c.name === name);
    if (cdMatch) return cdMatch[0];
    // 2) From recommendedContacts
    const fromRC = companiesWithCalculatedStatus.find(c => c.recommendedContacts.some(rc => rc.name === name));
    return fromRC?.recommendedContacts.find(rc => rc.name === name)?.id;
  };

  // Helper: resolve contact by ID (with fallback to recommendedContacts)
  const resolveContactById = (id?: string): ContactDetail | null => {
    if (!id) return null;
    // Temp IDs: build from last fallback context
    if (id.startsWith('temp-')) {
      const f = selectedContactFallback;
      const raw = id.replace(/^temp-/, '');
      const displayName = f.name || raw.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      const initials = f.initials || displayName.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
      return {
        id,
        name: displayName,
        initials,
        role: f.role || '',
        company: f.company || '',
        email: f.email || '',
        phone: f.phone || '',
        avatarColor: f.avatarColor || 'bg-trellis-purple-600',
        linkedInInfo: {
          role: f.role || '',
          location: '',
          yearsInRole: '',
          previousCompanies: ''
        },
        leadQualification: {
          engagementScore: 0,
          responseRate: 0,
          meetingAcceptance: 0,
          lastEngagement: '',
          associatedQLs: [],
          compellingReasons: [],
          interests: ''
        },
        deals: [],
        recentActivity: [],
        qlSummary: {
          hasRecentQL: false,
          hasPastQLs: false
        },
        notes: []
      };
    }
    const full = contactDetails[id];
    if (full) return full;
    // Fallback: construct from recommendedContacts
    const company = companiesWithCalculatedStatus.find(c => c.recommendedContacts.some(rc => rc.id === id));
    const rc = company?.recommendedContacts.find(rc => rc.id === id);
    if (!rc || !company) return {
      id,
      name: 'Unknown contact',
      initials: '',
      role: '',
      company: '',
      email: '',
      phone: '',
      avatarColor: 'bg-trellis-purple-600',
      linkedInInfo: {
        role: '',
        location: '',
        yearsInRole: '',
        previousCompanies: ''
      },
      leadQualification: {
        engagementScore: 0,
        responseRate: 0,
        meetingAcceptance: 0,
        lastEngagement: '',
        associatedQLs: [],
        compellingReasons: [],
        interests: ''
      },
      deals: [],
      recentActivity: [],
      qlSummary: {
        hasRecentQL: false,
        hasPastQLs: false
      },
      notes: []
    };
    return {
      id: rc.id,
      name: rc.name,
      initials: rc.initials,
      role: rc.role,
      company: company.name,
      email: '',
      phone: '',
      avatarColor: rc.avatarColor,
      linkedInInfo: {
        role: rc.role,
        location: '',
        yearsInRole: '',
        previousCompanies: ''
      },
      leadQualification: {
        engagementScore: 0,
        responseRate: 0,
        meetingAcceptance: 0,
        lastEngagement: '',
        associatedQLs: [],
        compellingReasons: [],
        interests: ''
      },
      deals: [],
      recentActivity: [],
      qlSummary: {
        hasRecentQL: false,
        hasPastQLs: false
      },
      notes: []
    };
  };

  // Get the selected company's details
  const selectedCompany = selectedCompanyId ? companiesWithCalculatedStatus.find(c => c.id === selectedCompanyId) : null;
  const selectedDetails = selectedCompanyId && companyDetails[selectedCompanyId] ? companyDetails[selectedCompanyId] : null;

  // Get the selected contact's details
  const selectedContact = useMemo(() => {
    if (!selectedContactId) return null;
    return resolveContactById(selectedContactId);
  }, [selectedContactId, companiesWithCalculatedStatus]);

  // Get the selected task's details
  const selectedTask = selectedTaskId ? companiesWithCalculatedStatus.flatMap(c => c.tasks).find(t => t.id === selectedTaskId) : null;

  // Get the call prep contact's details
  const callPrepContact = useMemo(() => {
    if (!callPrepContactId) return null;
    // Find contact in recommendedContacts
    for (const company of companiesWithCalculatedStatus) {
      const contact = company.recommendedContacts.find(c => c.id === callPrepContactId);
      if (contact) {
        return {
          id: contact.id,
          name: contact.name,
          initials: contact.initials,
          role: contact.role,
          company: company.name,
          email: contactDetails[contact.id]?.email,
          avatarColor: contact.avatarColor
        };
      }
    }
    // Fallback to contactDetails
    const cd = contactDetails[callPrepContactId];
    if (cd) {
      return {
        id: cd.id,
        name: cd.name,
        initials: cd.initials,
        role: cd.role,
        company: cd.company,
        email: cd.email,
        avatarColor: cd.avatarColor
      };
    }
    return null;
  }, [callPrepContactId, companiesWithCalculatedStatus]);
  return <Layout>
      <div className="flex flex-col h-[calc(100vh-48px)] bg-fill-surface-recessed overflow-hidden">
        <WorkspaceHeader activeTab="prospecting" />
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Left Sidebar - No margin, right against left nav */}
          <ProspectingSubNav isCollapsed={isPanelOpen || isContactPanelOpen || isTaskPanelOpen} />

          {/* Main Content Area - Only scrolling element */}
          <div className={`flex-1 overflow-y-auto overscroll-contain transition-all duration-300 ${isPanelOpen || isContactPanelOpen || isTaskPanelOpen ? 'mr-[569px]' : 'mr-0'}`}>
            {/* Top Metrics */}
            <div className="max-w-[1440px] mx-auto px-6 py-6">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <Card className="flex flex-col items-center px-6 py-4 bg-card border border-border rounded shadow-100 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="heading-25 text-foreground">TOTAL BOOK SIZE</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Total book size</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="text-heading-500 font-normal text-foreground">497</div>
                </Card>
                
                <Card className="flex flex-col items-center px-6 py-4 bg-card border border-border rounded shadow-100 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="heading-25 text-foreground">BOOK WORKED</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Percentage of book worked</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="heading-500 text-foreground">52%</div>
                    <div className="detail-100 text-muted-foreground">Target: 33%</div>
                  </div>
                </Card>
                
                <Card className="flex flex-col items-center px-6 py-4 bg-card border border-border rounded shadow-100 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="heading-25 text-foreground">P1 WORKED WITHIN SLA</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>P1 priority worked</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="heading-500 text-foreground">84%</div>
                    <div className="detail-100 text-muted-foreground">Target: 100%</div>
                  </div>
                </Card>
                
                <Card className="flex flex-col items-center px-6 py-4 bg-card border border-border rounded shadow-100 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="heading-25 text-foreground">P2 WORKED WITHIN SLA</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>P2 priority worked</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="heading-500 text-foreground">40%</div>
                    <div className="detail-100 text-muted-foreground">Target: 100%</div>
                  </div>
                </Card>
              </div>

              {/* Company Cards Section */}
              <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="heading-300">P1 Prospects</h2>
                  <p className="body-100 text-muted-foreground">{companiesWithCalculatedStatus.length} leads</p>
                </div>
                
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex min-h-[40px] px-3 justify-center items-center gap-2 rounded border border-transparent bg-transparent heading-50 text-foreground hover:bg-accent/10 transition-colors">
                        Worked Status{selectedWorkedStatuses.size > 0 && ` (${selectedWorkedStatuses.size})`} <img src={downCarat} alt="" className="h-3 w-3" />
                        {selectedWorkedStatuses.size > 0 && <button onClick={e => {
                          e.stopPropagation();
                          clearWorkedStatuses();
                        }} className="ml-1 hover:bg-accent/20 rounded p-0.5">
                            <X className="h-3 w-3" />
                          </button>}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-card border border-border shadow-lg">
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("UNWORKED_QL");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("UNWORKED_QL") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("UNWORKED_QL") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">UNWORKED QL</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("UNWORKED_P1");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("UNWORKED_P1") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("UNWORKED_P1") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">UNWORKED P1</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("IN PROGRESS");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("IN PROGRESS") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("IN PROGRESS") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">IN PROGRESS</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("WORKED");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("WORKED") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("WORKED") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">WORKED</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("SNOOZED");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("SNOOZED") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("SNOOZED") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">SNOOZED</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer" onSelect={e => {
                        e.preventDefault();
                        toggleWorkedStatus("DISMISSED");
                      }}>
                        <div className={`w-4 h-4 border border-foreground rounded-sm flex items-center justify-center ${selectedWorkedStatuses.has("DISMISSED") ? "bg-foreground" : ""}`}>
                          {selectedWorkedStatuses.has("DISMISSED") && <Check className="h-3 w-3 text-background" />}
                        </div>
                        <span className="body-100">DISMISSED</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex min-h-[40px] px-3 justify-center items-center gap-2 rounded border border-transparent bg-transparent heading-50 text-foreground hover:bg-accent/10 transition-colors">
                        All industries <img src={downCarat} alt="" className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>All industries</DropdownMenuItem>
                      <DropdownMenuItem>Technology</DropdownMenuItem>
                      <DropdownMenuItem>Healthcare</DropdownMenuItem>
                      <DropdownMenuItem>Finance</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <button className="flex min-h-[40px] px-3 justify-center items-center gap-2 rounded border border-transparent bg-transparent heading-50 text-foreground hover:bg-accent/10 transition-colors">
                    <ListFilter className="h-4 w-4" />
                    Advanced Filters
                  </button>
                </div>
              </div>

              {/* Company Cards */}
              {companiesWithCalculatedStatus.map(company => <CompanyCard key={company.id} company={company} onCompanyClick={() => handleCompanyClick(company.id)} onContactClick={handleContactClick} onTaskClick={handleTaskClick} onCallClick={handleCallClick} onPrepForCallClick={handlePrepForCallClick} completedTasks={completedTasks} onEmailClick={(contactId, taskId) => {
                let resolvedContactId = contactId;
                let name: string | undefined;
                let email: string | undefined;

                // Fallback: resolve by taskId and contact name if contactId not provided
                if ((!resolvedContactId || resolvedContactId.length === 0) && taskId) {
                  const task = companiesWithCalculatedStatus.flatMap(c => c.tasks).find(t => t.id === taskId);
                  const candidateName = task?.contact?.name;
                  if (candidateName) {
                    const idFromName = resolveContactIdByName(candidateName);
                    if (idFromName) {
                      resolvedContactId = idFromName;
                    }
                    name = candidateName;
                  }
                }

                // Pull from details if still missing
                if (!name || !email) {
                  const c = resolvedContactId ? resolveContactById(resolvedContactId) : undefined;
                  name = name ?? c?.name;
                  email = email ?? c?.email;
                }

                // Build fallback details for temp contact (from task/company context)
                const taskForEmail = taskId ? companiesWithCalculatedStatus.flatMap(c => c.tasks).find(t => t.id === taskId) : undefined;
                setSelectedContactFallback({
                  name,
                  role: taskForEmail?.contact?.role,
                  company: company.name,
                  initials: taskForEmail?.contact?.initials ?? (name ? name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() : undefined),
                  avatarColor: taskForEmail?.contact?.avatarColor,
                  email,
                  phone: undefined
                });

                // Always open contact panel with a usable id (fallback if needed)
                const sanitizedId = resolvedContactId && resolvedContactId.trim().length > 0 ? resolvedContactId : undefined;
                const fallbackId = sanitizedId ?? `temp-${(name || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                setSelectedContactId(fallbackId);
                setIsContactPanelOpen(true);
                setIsPanelOpen(false);
                setIsTaskPanelOpen(false);
                console.log('[EmailClick]', {
                  contactId,
                  taskId,
                  resolvedContactId,
                  fallbackId,
                  name,
                  email
                });
                handleEmailClick(name, email, taskId, resolvedContactId || undefined);
              }} />)}
             </div>
            </div>
           </div>

           {/* Side Panel */}
           {selectedCompanyId && <div className={`fixed top-12 right-0 h-[calc(100vh-3rem)] bg-white z-40 transition-transform duration-300 overflow-y-auto shadow-300 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
          width: '569px'
        }}>
               {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                  <h2 className="heading-400 text-foreground">
                    {companiesWithCalculatedStatus.find(c => c.id === selectedCompanyId)?.name}
                  </h2>
                  <button onClick={() => setIsPanelOpen(false)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <X className="h-6 w-6 text-foreground" />
                  </button>
                </div>

               {/* Company Highlight Section */}
                <div className="px-6 py-6 border-border">
                  {(() => {
              const company = companiesWithCalculatedStatus.find(c => c.id === selectedCompanyId);
              if (!company) return null;
              return <>
                     {/* Company Info */}
                     <div className="flex items-start justify-between mb-8">
                       <div className="flex items-start gap-4">
                         {/* Company Avatar */}
                         <div className="h-20 w-20 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                           <div className="text-blue-400 text-2xl">⚡</div>
                         </div>
                         
                         {/* Company Details */}
                         <div>
                           <h3 className="heading-400 text-foreground mb-2">{company.name}</h3>
                           <div className="body-100 text-foreground mb-1">acmecorp.com</div>
                           <div className="body-100 text-foreground">+351 21 269 8440</div>
                         </div>
                       </div>
                       
                       {/* View Record Link */}
                       <Button variant="link" className="body-100 text-foreground p-0 h-auto">
                         View record <ExternalLink className="h-4 w-4 ml-1" />
                       </Button>
                     </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-6 gap-4">
                        {[{
                    icon: FileEdit,
                    label: "Note"
                  }, {
                    icon: Mail,
                    label: "Email"
                  }, {
                    icon: Phone,
                    label: "Call"
                  }, {
                    icon: ListTodo,
                    label: "Task"
                  }, {
                    icon: Calendar,
                    label: "Meeting"
                  }, {
                    icon: MoreHorizontal,
                    label: "More"
                  }].map(action => <button key={action.label} className="flex flex-col items-center gap-2 group" onClick={() => {
                    if (action.label === "Email" && selectedCompany?.recommendedContacts?.[0]) {
                      const firstContact = selectedCompany.recommendedContacts[0];
                      const contact = contactDetails[firstContact.id];
                      handleEmailClick(contact?.name, contact?.email, undefined, firstContact.id);
                    }
                  }}>
                            <div className="h-14 w-14 rounded-full border-2 border-border flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                              <action.icon className="h-5 w-5 text-foreground" />
                            </div>
                            <span className="body-100 text-foreground">{action.label}</span>
                          </button>)}
                      </div>
                   </>;
            })()}
             </div>

                {/* Company Overview Section */}
                <CollapsibleSection title="Company Overview">
                  {/* Signal Badge */}
                  <div className="mb-4">
                    <SignalBadge variant="green">
                      Domain Loads
                    </SignalBadge>
                  </div>

                  {/* Description */}
                  <p className="body-100 text-foreground mb-4 leading-relaxed">
                    {selectedDetails?.description || "No description available for this company."}
                  </p>

                  {/* LinkedIn Link */}
                  <Button variant="link" className="body-100 text-[#8B1538] p-0 h-auto mb-6 hover:no-underline">
                    View in LinkedIn Sales Navigator <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>

                  {/* Company Details Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <div className="detail-200 text-muted-foreground mb-1">Industry</div>
                      <div className="body-100 text-foreground">{selectedDetails?.industry || "N/A"}</div>
                    </div>
                    <div>
                      <div className="detail-200 text-muted-foreground mb-1">Country</div>
                      <div className="body-100 text-foreground">{selectedDetails?.country || "N/A"}</div>
                    </div>
                    <div>
                      <div className="detail-200 text-muted-foreground mb-1">Employee Size</div>
                      <div className="body-100 text-foreground">{selectedDetails?.employeeSize || "N/A"}</div>
                    </div>
                    <div>
                      <div className="detail-200 text-muted-foreground mb-1">Annual Revenue</div>
                      <div className="body-100 text-foreground">{selectedDetails?.annualRevenue || "N/A"}</div>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="detail-200 text-muted-foreground">
                    Last updated on {selectedDetails?.lastUpdated || "N/A"}.{" "}
                    <Button variant="link" className="detail-200 text-[#8B1538] p-0 h-auto hover:no-underline">
                      View full update history <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CollapsibleSection>

               {/* LinkedIn Sales Navigator Section */}
                <CollapsibleSection title="LinkedIn Sales Navigator">
                  {/* Sales Navigator Header */}
                  <div className="mb-6 border border-[#0A66C2] rounded">
                    <div className="bg-[#EDF3F8] px-3 py-2 border-b border-[#0A66C2] flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-xs font-semibold text-[#0A66C2] tracking-wider">SALES NAVIGATOR</span>
                    </div>
                    
                    <div className="p-4">
                      {/* Company Icon */}
                      <div className="mb-3">
                        <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>

                      {/* Company Name */}
                      <a href="#" className="text-[#0A66C2] hover:underline text-base font-normal mb-1 block">
                        {selectedDetails?.companyName || "Company Name"}
                      </a>

                      {/* Industry */}
                      <p className="text-muted-foreground text-sm mb-2">{selectedDetails?.linkedInInfo.industry || "Industry"}</p>

                      {/* Location & Size */}
                      <p className="text-muted-foreground text-sm mb-3">
                        {selectedDetails?.linkedInInfo.employeeCount || "N/A"} Employees - {selectedDetails?.linkedInInfo.location || "Location"}
                      </p>

                      {/* Employees Link */}
                      <a href="#" className="text-[#0A66C2] hover:underline text-sm font-normal mb-4 block">
                        See all {selectedDetails?.linkedInInfo.employeesOnLinkedIn || "0"} employees on LinkedIn
                      </a>

                      {/* View in Sales Navigator Button */}
                      <Button variant="outline" className="mb-4 border-[#0A66C2] text-[#0A66C2] hover:bg-[#EDF3F8] w-auto px-4" size="small">
                        View in Sales Navigator
                      </Button>

                      {/* Not the right company */}
                      <p className="text-muted-foreground text-sm mb-4">Not the right company?</p>

                      {/* Footer Links */}
                      <div className="flex gap-4 pt-3 border-t border-border">
                        <a href="#" className="text-muted-foreground text-sm hover:underline">Help</a>
                        <a href="#" className="text-muted-foreground text-sm hover:underline">Privacy and Terms</a>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* Lead Qualification Section */}
                <CollapsibleSection title="Lead qualification">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-4 gap-6 mb-8">
                    <div>
                      <div className="body-100 text-foreground mb-2">Fit Score</div>
                      <div className="heading-400 text-foreground">{selectedDetails?.leadQualification.fitScore || "N/A"}</div>
                    </div>
                    <div>
                      <div className="body-100 text-foreground mb-2">Sales Intent</div>
                      <div className="heading-400 text-foreground">{selectedDetails?.leadQualification.salesIntent || "N/A"}</div>
                    </div>
                    <div>
                      <div className="body-100 text-foreground mb-2">Marketing Intent</div>
                      <div className="heading-400 text-foreground">{selectedDetails?.leadQualification.marketingIntent || "N/A"}</div>
                    </div>
                    <div>
                      <div className="body-100 text-foreground mb-2">DMs</div>
                      <div className="heading-400 text-[#8B1538]">{selectedDetails?.leadQualification.dms || "0"}</div>
                    </div>
                  </div>

                  {/* AssociatedQLs */}
                  {selectedDetails?.leadQualification.associatedQLs && selectedDetails.leadQualification.associatedQLs.length > 0 && <div className="mb-6">
                      <h4 className="heading-100 text-foreground mb-3">AssociatedQLs</h4>
                      <ul className="list-none space-y-2">
                        {selectedDetails.leadQualification.associatedQLs.map((ql, idx) => <li key={idx} className="flex items-start">
                            <span className="text-[#8B1538] mr-2">•</span>
                            <span className="body-100 text-[#8B1538] font-semibold">{ql}</span>
                          </li>)}
                      </ul>
                    </div>}

                  {/* Compelling Reasons */}
                  {selectedDetails?.leadQualification.compellingReasons && selectedDetails.leadQualification.compellingReasons.length > 0 && <div className="mb-6">
                      <h4 className="heading-100 text-foreground mb-3">Compelling reasons to reach out</h4>
                      <ul className="list-none space-y-2">
                        {selectedDetails.leadQualification.compellingReasons.map((reason, idx) => <li key={idx} className="flex items-start">
                            <span className="text-foreground mr-2">•</span>
                            <span className="body-100 text-foreground">{reason}</span>
                          </li>)}
                      </ul>
                    </div>}

                  {/* Competitor Products */}
                  {selectedDetails?.leadQualification.competitorProducts && <div className="mb-6">
                      <h4 className="heading-100 text-foreground mb-2">Competitor Products Installed</h4>
                      <p className="body-100 text-foreground">{selectedDetails.leadQualification.competitorProducts}</p>
                    </div>}

                  {/* Footer */}
                  <div className="body-100 text-foreground">
                    To understand what signals we use and how we prioritise them, <span className="font-bold">visit the wiki.</span>
                  </div>
                </CollapsibleSection>

                {/* Deals Section */}
                <CollapsibleSection title="Deals">
                  {/* Deal Cards */}
                  {selectedDetails?.deals && selectedDetails.deals.length > 0 ? selectedDetails.deals.map(deal => <div key={deal.id} className="border border-border rounded-lg p-4 mb-4">
                        {/* Deal Title */}
                        <h4 className="heading-200 text-[#8B1538] mb-3">{deal.title}</h4>
                        
                        {/* Amount */}
                        <div className="mb-2">
                          <span className="body-100 text-muted-foreground">Amount: </span>
                          <span className="body-100 text-foreground">${deal.amount.toLocaleString()}</span>
                        </div>
                        
                        {/* Close Date */}
                        <div className="mb-3">
                          <span className="body-100 text-muted-foreground">Close date: </span>
                          <span className="body-100 text-foreground">{deal.closeDate}</span>
                        </div>
                        
                        {/* Stage Selector */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="body-100 text-muted-foreground">Stage:</span>
                          <Select defaultValue={deal.stage}>
                            <SelectTrigger className="w-[180px] h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="prospecting">Prospecting</SelectItem>
                              <SelectItem value="qualification">Qualification</SelectItem>
                              <SelectItem value="proposal">Proposal</SelectItem>
                              <SelectItem value="negotiation">Negotiation</SelectItem>
                              <SelectItem value="closed-won">Closed Won</SelectItem>
                              <SelectItem value="closed-lost">Closed Lost</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((step, idx) => <div key={idx} className={`h-2 flex-1 rounded-sm ${idx < deal.progress ? 'bg-foreground' : 'bg-gray-200'}`} />)}
                        </div>
                        
                        {/* Footer */}
                        <p className="body-100 text-foreground">Deal with Primary Company</p>
                      </div>) : <p className="body-100 text-muted-foreground mb-4">No deals available for this company.</p>}
                  
                  {/* Bottom Actions */}
                  {selectedDetails?.deals && selectedDetails.deals.length > 0 && <div className="flex items-center justify-between mt-4">
                      <Button variant="outline" size="small">
                        Show More
                      </Button>
                      <Button variant="link" className="body-100 text-[#8B1538] p-0 h-auto hover:no-underline">
                        View associated deals
                      </Button>
                    </div>}
                </CollapsibleSection>

                {/* Contacts Section */}
                <CollapsibleSection title="Contacts">
                  {/* Contact Cards */}
                  {selectedDetails?.contacts && selectedDetails.contacts.length > 0 ? selectedDetails.contacts.map(contact => <div key={contact.id} className="border border-border rounded-lg p-4 mb-4 relative">
                        {/* lasipipe Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex flex-col items-center">
                            <div className="flex items-center gap-0.5">
                              <div className="w-3 h-3 rounded-full bg-[#E11D48] flex items-center justify-center">
                                <span className="text-[8px] font-bold text-white">P</span>
                              </div>
                              <div className="w-3 h-3 rounded-full bg-[#3B82F6] flex items-center justify-center">
                                <span className="text-[8px] font-bold text-white">P</span>
                              </div>
                            </div>
                            <span className="text-[8px] text-muted-foreground mt-0.5">lasipipe</span>
                          </div>
                        </div>
                        
                        {/* Contact Name */}
                        <h4 className="heading-200 text-[#8B1538] mb-2">{contact.name}</h4>
                        
                        {/* Company */}
                        <p className="body-100 text-muted-foreground mb-3">{contact.company}</p>
                        
                        {/* Email */}
                        <div className="flex items-center gap-2 mb-2">
                          <a href={`mailto:${contact.email}`} className="body-100 text-[#8B1538] hover:underline">
                            {contact.email}
                          </a>
                          <ExternalLink className="h-3.5 w-3.5 text-[#8B1538]" />
                        </div>
                        
                        {/* Phone */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="body-100 text-muted-foreground">{contact.phone}</span>
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        </div>
                        
                        {/* Footer */}
                        <p className="body-100 text-foreground">Contact with Primary Company</p>
                      </div>) : <p className="body-100 text-muted-foreground mb-4">No contacts available for this company.</p>}
                  
                  {/* Bottom Actions */}
                  {selectedDetails?.contacts && selectedDetails.contacts.length > 0 && <div className="flex items-center justify-between mt-4">
                      <Button variant="outline" size="small">
                        Show More
                      </Button>
                      <Button variant="link" className="body-100 text-[#8B1538] p-0 h-auto hover:no-underline">
                        View associated contacts
                      </Button>
                    </div>}
                </CollapsibleSection>

               {/* Recent Conversions Section */}
               <CollapsibleSection title="Recent Conversions">
                 {/* Search Box */}
                 <div className="relative mb-4">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                   <input type="text" placeholder="Search" className="w-full h-[44px] pl-12 pr-4 border border-border rounded-full bg-background text-foreground body-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                 </div>

                 {/* Filters */}
                 <div className="flex items-center gap-6 mb-4">
                   <div className="flex items-center gap-2">
                     <span className="body-100 text-foreground">Conversions:</span>
                     <Select defaultValue="3">
                       <SelectTrigger className="w-[140px] h-[36px]">
                         <SelectValue />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="3">3 selected</SelectItem>
                         <SelectItem value="all">All</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>

                   <div className="flex items-center gap-2">
                     <span className="body-100 text-foreground">Date Range:</span>
                     <Select defaultValue="30">
                       <SelectTrigger className="w-[160px] h-[36px]">
                         <SelectValue />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="30">Last 30 days</SelectItem>
                         <SelectItem value="7">Last 7 days</SelectItem>
                         <SelectItem value="90">Last 90 days</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>

                 {/* Table */}
                 <div className="border border-border rounded-lg overflow-hidden mb-4">
                   <table className="w-full">
                     <thead className="bg-fill-surface-recessed">
                       <tr>
                         <th className="text-left p-3 border-b border-border">
                           <button className="flex items-center gap-2 body-100 font-medium text-foreground hover:text-muted-foreground transition-colors">
                             Contact
                             <ArrowUpDown className="h-3 w-3" />
                           </button>
                         </th>
                         <th className="text-left p-3 border-b border-border">
                           <button className="flex items-center gap-2 body-100 font-medium text-foreground hover:text-muted-foreground transition-colors">
                             Recent Conversion
                             <ArrowUpDown className="h-3 w-3" />
                           </button>
                         </th>
                       </tr>
                     </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-3">
                            <button onClick={() => handleContactClick('c1')} className="body-100 text-[#8B1538] hover:underline cursor-pointer">
                              Jennifer Park
                            </button>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col gap-1">
                              <span className="body-100 text-foreground">Invited User Accepted Invitation</span>
                              <span className="body-50 text-muted-foreground">(Additional Info) | API</span>
                              <span className="body-50 text-muted-foreground">2 days ago</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">
                            <button onClick={() => handleContactClick('c2')} className="body-100 text-[#8B1538] hover:underline cursor-pointer">
                              Priya Sharma
                            </button>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col gap-1">
                              <span className="body-100 text-foreground">Viewed Pricing Page</span>
                              <span className="body-50 text-muted-foreground">5 days ago</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3">
                            <button onClick={() => handleContactClick('c1')} className="body-100 text-[#8B1538] hover:underline cursor-pointer">
                              Jennifer Park
                            </button>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col gap-1">
                              <span className="body-100 text-foreground">Invited User Accepted Invitation</span>
                              <span className="body-50 text-muted-foreground">(Additional Info) | API</span>
                              <span className="body-50 text-muted-foreground">7 days ago</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                   </table>
                 </div>
               </CollapsibleSection>

               {/* Recent Activity Section */}
               <CollapsibleSection title="Recent Activity">
                 {/* Search and Create Activities */}
                 <div className="flex items-center gap-3 mb-4">
                   <div className="relative flex-1">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                     <input type="text" placeholder="Search activities" className="w-full h-[44px] pl-12 pr-4 border border-border rounded-full bg-background text-foreground body-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                   </div>
                   <Select defaultValue="create">
                     <SelectTrigger className="w-[180px] h-[44px]">
                       <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="create">Create activities</SelectItem>
                       <SelectItem value="email">Create email</SelectItem>
                       <SelectItem value="call">Create call</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>

                 {/* Filters */}
                 <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-4">
                      <Select defaultValue="all-time">
                        <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-time">All time so far</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="week">This week</SelectItem>
                          <SelectItem value="month">This month</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select defaultValue="all-activity">
                        <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-activity">Activity</SelectItem>
                          <SelectItem value="emails">Emails</SelectItem>
                          <SelectItem value="calls">Calls</SelectItem>
                          <SelectItem value="meetings">Meetings</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>

                    <Select defaultValue="expand">
                      <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                        <SelectValue />
                      </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="expand">Collapse all</SelectItem>
                       <SelectItem value="collapse">Expand all</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>

                  {/* Activity Timeline */}
                  <div className="space-y-3">
                    {selectedDetails?.recentActivity && selectedDetails.recentActivity.length > 0 ? selectedDetails.recentActivity.map((activity, index) => {
                const activityIcon = activity.type === 'email' ? Mail : activity.type === 'call' ? Phone : Calendar;
                const ActivityIcon = activityIcon;
                return <div key={activity.id} className="flex gap-3 items-start">
                            {/* Timeline Icon */}
                            <div className="flex flex-col items-center h-full">
                              <div className="w-8 h-8 rounded-full border border-border bg-trellis-white flex items-center justify-center flex-shrink-0">
                                <ActivityIcon className="h-4 w-4 text-foreground" />
                              </div>
                              {index < selectedDetails.recentActivity.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                            </div>

                            {/* Activity Card */}
                            <div className="flex-1 border border-border rounded-lg p-4 bg-trellis-white">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <ChevronRight className="h-4 w-4 text-foreground" />
                                  <span className="link-100 text-foreground">{activity.title}</span>
                                </div>
                                <span className="detail-100 text-muted-foreground whitespace-nowrap ml-2">
                                  {activity.date} at {activity.time}
                                </span>
                              </div>
                              <div className="body-100 text-muted-foreground ml-6">
                                {activity.participant}
                              </div>
                              {activity.preview && <div className="body-100 text-muted-foreground ml-6 mt-2 italic">
                                  {activity.preview}
                                </div>}
                            </div>
                          </div>;
              }) : <p className="body-100 text-muted-foreground">No recent activity for this company.</p>}
                  </div>
                </CollapsibleSection>

                {/* Notes Section */}
                <CollapsibleSection title="Notes">
                  <Textarea placeholder="Add notes about this company..." className="min-h-[120px] resize-none" />
                </CollapsibleSection>
            </div>}

          {/* Contact Panel */}
          {selectedContactId && <div className={`fixed top-12 right-0 h-[calc(100vh-3rem)] bg-white z-40 transition-transform duration-300 overflow-y-auto shadow-300 ${isContactPanelOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
          width: '569px'
        }}>
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="heading-400 text-foreground">
                  {selectedContact.name}
                </h2>
                <button onClick={() => setIsContactPanelOpen(false)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Contact Highlight Section */}
              <div className="px-6 py-6 border-border">
                {/* Contact Info */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-start gap-4">
                    {/* Contact Avatar */}
                    <img src={(() => {
                  const company = companiesWithCalculatedStatus.find(c => c.name === selectedContact.company);
                  return company?.logo || companyLogoPlaceholder;
                })()} alt={`${selectedContact.company} logo`} className="h-20 w-20 rounded-full object-cover flex-shrink-0" />
                    
                    {/* Contact Details */}
                    <div>
                      <h3 className="heading-400 text-foreground mb-2">{selectedContact.name}</h3>
                      <div className="body-100 text-foreground mb-1">{selectedContact.role}</div>
                      <div className="body-100 text-muted-foreground mb-1">{selectedContact.company}</div>
                      <div className="body-100 text-foreground">{selectedContact.phone}</div>
                    </div>
                  </div>
                  
                  {/* View Record Link */}
                  <Button variant="link" className="body-100 text-[#8B1538] p-0 h-auto hover:no-underline flex items-center gap-1">
                    View record <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-6 gap-0">
                  {[{
                icon: FileEdit,
                label: "Note"
              }, {
                icon: Mail,
                label: "Email"
              }, {
                icon: Phone,
                label: "Call"
              }, {
                icon: ListTodo,
                label: "Task"
              }, {
                icon: Calendar,
                label: "Meeting"
              }, {
                icon: MoreHorizontal,
                label: "More"
              }].map(action => {
                if (action.label === "Call") {
                  return <Popover key={action.label} open={isCallPopoverOpen} onOpenChange={setIsCallPopoverOpen}>
                          <PopoverTrigger asChild>
                            <button className="flex flex-col items-center gap-2 group">
                              <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                                <action.icon className="h-5 w-5 text-foreground" />
                              </div>
                              <span className="body-100 text-foreground">{action.label}</span>
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[500px] p-0 bg-white shadow-400" align="end" side="bottom" sideOffset={8} alignOffset={-40}>
                            <div className="border border-border rounded-lg">
                              {/* Header */}
                              <div className="px-4 py-3 border-b border-border">
                                <h3 className="heading-200 text-foreground">
                                  {selectedContact?.name || "Contact Name"}
                                </h3>
                              </div>

                              {/* Content */}
                              <div className="p-4">
                                {/* Call phone number */}
                                <button className="flex items-center gap-2 mb-4 w-full text-left hover:bg-gray-50 p-2 rounded transition-colors" onClick={() => {
                            // Find the task notes from the callingTaskId
                            const taskWithNotes = callingTaskId ? companiesWithCalculatedStatus.flatMap(c => c.tasks).find(t => t.id === callingTaskId) : undefined;
                            setDiallerContact({
                              name: selectedContact?.name,
                              phone: selectedContact?.phone,
                              taskNotes: taskWithNotes?.notes
                            });
                            setIsDiallerOpen(true);
                            setIsCallPopoverOpen(false);
                          }}>
                                  <Phone className="h-5 w-5 text-foreground" />
                                  <span className="body-100 text-foreground">
                                    Call {selectedContact?.phone || "+31 64 7642770"} (Mobile Phone Number)
                                  </span>
                                </button>

                                {/* Add phone number link */}
                                <button className="body-100 text-foreground underline hover:no-underline mb-6">
                                  + Add phone number
                                </button>

                                {/* Call from */}
                                <div className="flex items-center justify-between px-4 py-3 border-t border-border hover:bg-gray-50 cursor-pointer">
                                  <span className="heading-100 text-foreground">Call from: +31647352106</span>
                                  <ChevronRight className="h-5 w-5 text-foreground" />
                                </div>

                                {/* Device */}
                                <div className="flex items-center justify-between px-4 py-3 border-t border-border hover:bg-gray-50 cursor-pointer">
                                  <span className="heading-100 text-foreground">Device: Browser</span>
                                  <ChevronRight className="h-5 w-5 text-foreground" />
                                </div>

                                {/* Open call options */}
                                <div className="px-4 py-3 border-t border-border">
                                  <button className="body-100 text-foreground underline hover:no-underline">
                                    Open call options
                                  </button>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>;
                }
                if (action.label === "Email") {
                  return <button key={action.label} className="flex flex-col items-center gap-2 group" onClick={() => handleEmailClick(selectedContact?.name, selectedContact?.email, undefined, selectedContactId || undefined)}>
                          <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                            <action.icon className="h-5 w-5 text-foreground" />
                          </div>
                          <span className="body-100 text-foreground">{action.label}</span>
                        </button>;
                }
                return <button key={action.label} className="flex flex-col items-center gap-2 group">
                        <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                          <action.icon className="h-5 w-5 text-foreground" />
                        </div>
                        <span className="body-100 text-foreground">{action.label}</span>
                      </button>;
              })}
                </div>
              </div>

              {/* LinkedIn Sales Navigator Section */}
              <CollapsibleSection title="LinkedIn Sales Navigator">
                <div className="mb-6 border border-[#0A66C2] rounded">
                  <div className="bg-[#EDF3F8] px-3 py-2 border-b border-[#0A66C2] flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs font-semibold text-[#0A66C2] tracking-wider">SALES NAVIGATOR</span>
                  </div>
                  
                  <div className="p-4">
                    {/* Contact Avatar */}
                    <div className="mb-3">
                      <img src={(() => {
                    const company = companiesWithCalculatedStatus.find(c => c.name === selectedContact.company);
                    return company?.logo || companyLogoPlaceholder;
                  })()} alt={`${selectedContact.company} logo`} className="w-12 h-12 rounded-full object-cover" />
                    </div>

                    {/* Contact Name */}
                    <a href="#" className="text-[#0A66C2] hover:underline text-base font-normal mb-1 block">
                      {selectedContact.name}
                    </a>

                    {/* Role */}
                    <p className="text-muted-foreground text-sm mb-2">{selectedContact.linkedInInfo.role}</p>

                    {/* Location & Experience */}
                    <p className="text-muted-foreground text-sm mb-3">
                      {selectedContact.linkedInInfo.location}
                    </p>

                    <p className="text-muted-foreground text-sm mb-3">
                      {selectedContact.linkedInInfo.yearsInRole} in current role
                    </p>

                    {/* Previous Companies */}
                    <p className="text-muted-foreground text-sm mb-4">
                      Previously: {selectedContact.linkedInInfo.previousCompanies}
                    </p>

                    {/* View in Sales Navigator Button */}
                    <Button variant="outline" className="mb-4 border-[#0A66C2] text-[#0A66C2] hover:bg-[#EDF3F8] w-auto px-4" size="small">
                      View in Sales Navigator
                    </Button>

                    {/* Footer Links */}
                    <div className="flex gap-4 pt-3 border-t border-border">
                      <a href="#" className="text-muted-foreground text-sm hover:underline">Help</a>
                      <a href="#" className="text-muted-foreground text-sm hover:underline">Privacy and Terms</a>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Recent Conversions Section - Contact Specific */}
              <CollapsibleSection title="Recent Conversions">
                {/* Search Box */}
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="text" placeholder="Search" className="w-full h-[44px] pl-12 pr-4 border border-border rounded-full bg-background text-foreground body-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="body-100 text-foreground">Conversions:</span>
                    <Select defaultValue="3">
                      <SelectTrigger className="w-[140px] h-[36px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 selected</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="body-100 text-foreground">Date Range:</span>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-[160px] h-[36px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="7">Last 7 days</SelectItem>
                        <SelectItem value="90">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Table */}
                <div className="border border-border rounded-lg overflow-hidden mb-4">
                  <table className="w-full">
                    <thead className="bg-fill-surface-recessed">
                      <tr>
                        <th className="text-left p-3 border-b border-border">
                          <button className="flex items-center gap-2 body-100 font-medium text-foreground hover:text-muted-foreground transition-colors">
                            Contact
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                        <th className="text-left p-3 border-b border-border">
                          <button className="flex items-center gap-2 body-100 font-medium text-foreground hover:text-muted-foreground transition-colors">
                            Recent Conversion
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedContact.name === "Jennifer Park" ? (
                        <>
                          <tr className="border-b border-border">
                            <td className="p-3">
                              <span className="body-100 text-[#8B1538]">{selectedContact.name}</span>
                            </td>
                            <td className="p-3">
                              <div className="flex flex-col gap-1">
                                <span className="body-100 text-foreground">Invited User Accepted Invitation</span>
                                <span className="body-50 text-muted-foreground">(Additional Info) | API</span>
                                <span className="body-50 text-muted-foreground">2 days ago</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3">
                              <span className="body-100 text-[#8B1538]">{selectedContact.name}</span>
                            </td>
                            <td className="p-3">
                              <div className="flex flex-col gap-1">
                                <span className="body-100 text-foreground">Invited User Accepted Invitation</span>
                                <span className="body-50 text-muted-foreground">(Additional Info) | API</span>
                                <span className="body-50 text-muted-foreground">7 days ago</span>
                              </div>
                            </td>
                          </tr>
                        </>
                      ) : selectedContact.name === "Priya Sharma" ? (
                        <tr>
                          <td className="p-3">
                            <span className="body-100 text-[#8B1538]">{selectedContact.name}</span>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col gap-1">
                              <span className="body-100 text-foreground">Viewed Pricing Page</span>
                              <span className="body-50 text-muted-foreground">5 days ago</span>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td className="p-3" colSpan={2}>
                            <span className="body-100 text-muted-foreground">No recent conversions for this contact.</span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CollapsibleSection>

              {/* Recent Activity Section */}
              <CollapsibleSection title="Recent Activity">
                {/* Search and Action Bar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input type="text" placeholder="Search activities" className="w-full h-[44px] pl-12 pr-4 border border-border rounded-full bg-background text-foreground body-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <Select defaultValue="create">
                    <SelectTrigger className="w-[180px] h-[44px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="create">Create activities</SelectItem>
                      <SelectItem value="email">Create email</SelectItem>
                      <SelectItem value="call">Create call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Filters */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Select defaultValue="all-time">
                      <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-time">All time so far</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This week</SelectItem>
                        <SelectItem value="month">This month</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all-activity">
                      <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-activity">Activity</SelectItem>
                        <SelectItem value="emails">Emails</SelectItem>
                        <SelectItem value="calls">Calls</SelectItem>
                        <SelectItem value="meetings">Meetings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Select defaultValue="expand">
                    <SelectTrigger className="w-auto min-h-[40px] px-3 gap-2 bg-transparent border-transparent rounded trellis-text-heading-50 hover:bg-accent/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="expand">Collapse all</SelectItem>
                      <SelectItem value="collapse">Expand all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Activity Timeline */}
                <div className="space-y-3">
                  {selectedContact.recentActivity && selectedContact.recentActivity.length > 0 ? selectedContact.recentActivity.map((activity, index) => {
                const activityIcon = activity.type === 'email' ? Mail : activity.type === 'call' ? Phone : Calendar;
                const ActivityIcon = activityIcon;
                return <div key={activity.id} className="flex gap-3 items-start">
                          <div className="flex flex-col items-center h-full">
                            <div className="w-8 h-8 rounded-full border border-border bg-trellis-white flex items-center justify-center flex-shrink-0">
                              <ActivityIcon className="h-4 w-4 text-foreground" />
                            </div>
                            {index < selectedContact.recentActivity.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                          </div>

                          <div className="flex-1 border border-border rounded-lg p-4 bg-trellis-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-foreground" />
                                <span className="link-100 text-foreground">{activity.title}</span>
                              </div>
                              <span className="detail-100 text-muted-foreground whitespace-nowrap ml-2">
                                {activity.date} at {activity.time}
                              </span>
                            </div>
                            {activity.preview && <div className="body-100 text-muted-foreground ml-6 mt-2 italic">
                                {activity.preview}
                              </div>}
                          </div>
                        </div>;
              }) : <p className="body-100 text-muted-foreground">No recent activity for this contact.</p>}
                </div>
              </CollapsibleSection>

              {/* QL Summary Section */}
              <CollapsibleSection title="QL Summary">
                <div className="pt-5">
                  <QLSummary hasRecentQL={selectedContact.qlSummary.hasRecentQL} recentQLMessage={selectedContact.qlSummary.recentQLMessage} hasPastQLs={selectedContact.qlSummary.hasPastQLs} pastQLsMessage={selectedContact.qlSummary.pastQLsMessage} />
                </div>
              </CollapsibleSection>

              {/* Deals Section */}
              <CollapsibleSection title="Deals">
                {selectedContact.deals && selectedContact.deals.length > 0 ? selectedContact.deals.map(deal => <div key={deal.id} className="border border-border rounded-lg p-4 mb-4">
                      <h4 className="heading-200 text-[#8B1538] mb-3">{deal.title}</h4>
                      
                      <div className="mb-2">
                        <span className="body-100 text-muted-foreground">Amount: </span>
                        <span className="body-100 text-foreground">${deal.amount.toLocaleString()}</span>
                      </div>
                      
                      <div className="mb-3">
                        <span className="body-100 text-muted-foreground">Close date: </span>
                        <span className="body-100 text-foreground">{deal.closeDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="body-100 text-muted-foreground">Stage:</span>
                        <Select defaultValue={deal.stage}>
                          <SelectTrigger className="w-[180px] h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prospecting">Prospecting</SelectItem>
                            <SelectItem value="qualification">Qualification</SelectItem>
                            <SelectItem value="proposal">Proposal</SelectItem>
                            <SelectItem value="negotiation">Negotiation</SelectItem>
                            <SelectItem value="closed-won">Closed Won</SelectItem>
                            <SelectItem value="closed-lost">Closed Lost</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((step, idx) => <div key={idx} className={`h-2 flex-1 rounded-sm ${idx < deal.progress ? 'bg-foreground' : 'bg-gray-200'}`} />)}
                      </div>
                      
                      <p className="body-100 text-foreground">Deal with {selectedContact.company}</p>
                    </div>) : <p className="body-100 text-muted-foreground mb-4">No deals associated with this contact.</p>}
              </CollapsibleSection>

              {/* Notes Section */}
              <CollapsibleSection title="Notes">
                <div className="space-y-3">
                  {selectedContact.notes && selectedContact.notes.length > 0 ? selectedContact.notes.map(note => <div key={note.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <p className="body-100 text-foreground mb-1">{note.content}</p>
                        <p className="caption text-muted-foreground">{note.date} at {note.time}</p>
                      </div>) : <p className="body-100 text-muted-foreground">No notes for this contact yet.</p>}
                  <Textarea placeholder="Add a new note..." className="min-h-[80px] resize-none" />
                </div>
              </CollapsibleSection>

            </div>}

          {/* Task Panel */}
          {selectedTask && <div className={`fixed top-12 right-0 h-[calc(100vh-3rem)] bg-white z-40 transition-transform duration-300 overflow-y-auto shadow-300 ${isTaskPanelOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
          width: '569px'
        }}>
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="heading-400 text-foreground">Task</h2>
                <button onClick={() => setIsTaskPanelOpen(false)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                {/* Task Title */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 block">
                    Task Title <span className="text-trellis-red-600">*</span>
                  </label>
                  <input type="text" defaultValue={selectedTask.title} className="w-full px-3 py-2 border border-border rounded body-100 text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                {/* Task Type & Priority */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="heading-100 text-foreground mb-2 block">
                      Task Type <span className="text-trellis-red-600">*</span>
                    </label>
                    <Select defaultValue={selectedTask.action}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="call">Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="linkedin">LinkedIn Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="heading-100 text-foreground mb-2 block">
                      Priority <span className="text-trellis-red-600">*</span>
                    </label>
                    <Select defaultValue={selectedTask.priority}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="P1">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-trellis-red-600" />
                            <span>High</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="P2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-trellis-orange-500" />
                            <span>Medium</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="P3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-trellis-blue-600" />
                            <span>Low</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Associate with records */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 flex items-center gap-2">
                    Associate with records
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </label>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Associated with 1 record</SelectItem>
                      <SelectItem value="2">Associated with 2 records</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-trellis-blue-100 border border-trellis-blue-600 rounded-full">
                      <div className="h-6 w-6 rounded-full bg-trellis-blue-600 flex items-center justify-center">
                        <span className="text-trellis-white text-xs font-medium">BO</span>
                      </div>
                      <button className="body-100 text-foreground underline hover:no-underline" onClick={() => selectedTask.contactId && handleContactClick(selectedTask.contactId)}>
                        B Olivia
                      </button>
                      <button className="ml-1 text-foreground hover:bg-trellis-blue-200 rounded-full p-0.5">
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Assigned to */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 block">Assigned to</label>
                  <Select defaultValue="eoin">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eoin">Eoin Ó Raghallaigh</SelectItem>
                      <SelectItem value="other">Other User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Queue */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 block">Queue</label>
                  <Select defaultValue="p1-now">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1-now">P1 - Now</SelectItem>
                      <SelectItem value="p2-soon">P2 - Soon</SelectItem>
                      <SelectItem value="p3-later">P3 - Later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Due date */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 block">Due date</label>
                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <Select defaultValue="today">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2 px-3 py-2 border border-border rounded">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="body-100 text-foreground">6:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Set to repeat */}
                <div className="mb-5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 border border-border rounded" />
                    <span className="body-100 text-foreground">Set to repeat</span>
                  </label>
                </div>

                {/* Reminder */}
                <div className="mb-5">
                  <label className="heading-100 text-foreground mb-2 block">Reminder</label>
                  <Select defaultValue="none">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No reminder</SelectItem>
                      <SelectItem value="15min">15 minutes before</SelectItem>
                      <SelectItem value="1hour">1 hour before</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="body-100 text-muted-foreground mt-2">
                    You can customize your default settings.{" "}
                    <Button variant="link" className="body-100 text-[#8B1538] p-0 h-auto hover:no-underline inline">
                      Go to settings <ExternalLink className="h-3 w-3 ml-1 inline" />
                    </Button>
                  </p>
                </div>

                {/* Context - Pre-populated notes from task data */}
                {selectedTask.notes && <div className="mb-8">
                    <label className="heading-100 text-foreground mb-2 block">Notes</label>
                    <div className="p-4 bg-fill-surface-recessed rounded border border-border max-h-[300px] overflow-y-auto">
                      <p className="body-100 text-muted-foreground whitespace-pre-wrap text-sm">{selectedTask.notes}</p>
                    </div>
                  </div>}

                {/* Notes */}
                <div className="mb-8">
                  
                  
                  <div className="mt-2 flex items-center gap-3 text-foreground">
                    <button className="hover:bg-gray-100 p-1 rounded">
                      <span className="font-bold">B</span>
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded">
                      <span className="italic">I</span>
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded">
                      <span className="underline">U</span>
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded flex items-center gap-1">
                      <span>Tt</span>
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded">More ▼</button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-border">
                  <Button variant="default" size="default" className="flex-1">Save</Button>
                  <Button variant="secondary-alt" size="default">Cancel</Button>
                  <Button variant="secondary-alt" size="default">Delete</Button>
                  <Button variant="secondary-alt" size="default">History</Button>
                </div>
              </div>
            </div>}
         </div>
        </div>

        {/* Email Communicator */}
        <EmailCommunicator isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} recipientName={emailRecipient.name} recipientEmail={emailRecipient.email} onSendEmail={() => {
      if (emailingTaskId) {
        setCompletedTasks(prev => new Set(prev).add(emailingTaskId));
        incrementCompanyTouch(emailingTaskId);
      }
      setIsEmailOpen(false);
      setEmailingTaskId(null);
    }} />
        
        {/* Dialler Communicator */}
        <DiallerCommunicator isOpen={isDiallerOpen} onClose={() => {
          setIsDiallerOpen(false);
          setIsContactPanelOpen(false);
          setIsCallPopoverOpen(false);
          setCallingTaskId(null);
        }} contactName={diallerContact.name} contactPhone={diallerContact.phone} taskNotes={diallerContact.taskNotes} onEndCall={() => {
          if (callingTaskId) {
            setCompletedTasks(prev => new Set(prev).add(callingTaskId));
            incrementCompanyTouch(callingTaskId);
          }
          // Don't close the dialler - let it stay in "hung up" state
        }} />

        {/* Call Prep Panel */}
        <CallPrepPanel
          isOpen={isCallPrepPanelOpen}
          onClose={() => {
            setIsCallPrepPanelOpen(false);
            setIsDiallerOpen(false);
          }}
          contact={callPrepContact}
          onCallClick={(contactId) => {
            // Open dialler alongside the call prep panel
            const contact = callPrepContact;
            if (contact) {
              setDiallerContact({
                name: contact.name,
                phone: contactDetails[contactId]?.phone || '+31 64 7642770'
              });
              setIsDiallerOpen(true);
            }
          }}
        />
      </Layout>;
};
export default Prospecting;