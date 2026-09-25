/* Training Connect Global — course catalogue
   Single source of truth for every page that lists or displays courses.
   Categories map to an accent color used across cards and badges. */

const TCG_CATEGORIES = {
  "data":     { label: "Data & Statistics",        color: "#0B3C97" },
  "ict":      { label: "ICT & Digital Skills",      color: "#1D5FD6" },
  "leadership": { label: "Leadership & Management", color: "#146B27" },
  "finance":  { label: "Finance & Accounting",      color: "#B3261E" },
  "hr":       { label: "HR & People",               color: "#8A4B00" },
  "projects": { label: "Project Management & M&E",  color: "#6A3FB5" },
  "procurement": { label: "Procurement & Operations", color: "#0F7A6B" },
  "custom":   { label: "Custom / In-house",          color: "#1E9636" }
};

const TCG_COURSES = [
  {
    slug: "applied-statistics-data-science",
    title: "Applied Statistics for Data Science",
    category: "data",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Practical statistical methods for data analysis, interpretation and decision-making.",
    audience: "Analysts, researchers and officers who work with data and need sound statistical grounding.",
    description: "This programme builds a working command of statistics as it is actually used on the job — from descriptive summaries and probability through to hypothesis testing and regression. Rather than dwelling on theory, sessions are built around datasets participants recognise from their own sector, so every technique is tied to a decision it can inform.\n\nBy the end of the course, participants leave with a personal toolkit of methods, a set of worked templates, and the confidence to choose the right statistical approach for a given question.",
    curriculum: [
      "Descriptive statistics and data visualisation",
      "Probability distributions and sampling",
      "Hypothesis testing and confidence intervals",
      "Correlation and regression modelling",
      "Communicating statistical findings to non-technical audiences"
    ]
  },
  {
    slug: "advanced-excel-statistical-analysis",
    title: "Advanced Statistical Data Analysis Using Excel",
    category: "data",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Advanced Excel techniques for statistical analysis, reporting and dashboards.",
    audience: "M&E officers, finance staff and analysts who rely on Excel as their primary data tool.",
    description: "Excel remains the most widely used analysis tool in most organisations, yet most users only touch a fraction of what it can do. This course moves participants from basic formulas into pivot tables, statistical functions, what-if analysis and dashboard design.\n\nParticipants work through realistic reporting scenarios, building live dashboards and automated summaries they can take directly back to their own workplace data.",
    curriculum: [
      "Advanced formulas, lookups and array functions",
      "PivotTables and PivotCharts for large datasets",
      "Statistical and forecasting functions",
      "Building interactive dashboards",
      "Data validation and clean reporting templates"
    ]
  },
  {
    slug: "data-analysis-spss",
    title: "Data Analysis with SPSS",
    category: "data",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Data preparation, coding, statistical tests, interpretation and reporting using SPSS.",
    audience: "Researchers, M&E staff and graduate students analysing survey or programme data.",
    description: "A hands-on introduction to SPSS for anyone who needs to move from raw survey data to a credible, well-interpreted report. The course covers the full workflow: importing and cleaning data, coding variables, running the common statistical tests, and presenting results clearly.\n\nParticipants work with sample datasets throughout, and are encouraged to bring an anonymised dataset of their own to apply what they learn directly.",
    curriculum: [
      "Data entry, coding and cleaning in SPSS",
      "Descriptive statistics and cross-tabulation",
      "T-tests, ANOVA and chi-square tests",
      "Correlation and linear regression",
      "Presenting output in a clear analysis report"
    ]
  },
  {
    slug: "digital-skills-workplace",
    title: "Digital Skills for the Workplace",
    category: "ict",
    duration: "3 Days",
    mode: "Physical / Online",
    summary: "Essential digital productivity, communication, collaboration and information skills.",
    audience: "Any professional who wants a confident, current grasp of everyday workplace technology.",
    description: "A practical refresher for the tools that make up a modern working day — cloud documents, shared calendars, video meetings, and safe information handling. The course is designed for mixed-experience groups and moves at a pace that builds confidence rather than assuming prior knowledge.\n\nParticipants leave able to collaborate on shared documents, organise digital files sensibly and communicate professionally across common workplace platforms.",
    curriculum: [
      "Cloud documents and shared drives",
      "Email and calendar best practice",
      "Video meeting etiquette and tools",
      "Organising and securing digital files",
      "Spotting phishing and basic online safety"
    ]
  },
  {
    slug: "cybersecurity-awareness-risk",
    title: "Cybersecurity Awareness & Risk Management",
    category: "ict",
    duration: "4 Days",
    mode: "Physical / Online",
    summary: "Practical cyber hygiene, risk awareness and incident response basics for non-specialists.",
    audience: "Staff and managers who handle sensitive information but are not IT specialists.",
    description: "Most security incidents start with a person, not a system. This course gives non-technical staff a working understanding of common threats — phishing, social engineering, weak credentials — and the habits that close those gaps.\n\nManagers also cover the basics of risk assessment and incident response, so a suspected breach is met with a calm, structured reaction rather than guesswork.",
    curriculum: [
      "Common attack methods explained in plain language",
      "Password, device and account hygiene",
      "Recognising phishing and social engineering",
      "Basic risk assessment for information assets",
      "What to do in the first hour of a suspected incident"
    ]
  },
  {
    slug: "professional-leadership-management",
    title: "Professional Leadership & Management",
    category: "leadership",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Practical leadership, supervision, team coordination and workplace performance.",
    audience: "New and current supervisors, team leads and managers.",
    description: "A grounded, practice-first leadership course for people who manage others day to day. Rather than abstract theory, sessions work through real supervisory situations — giving feedback, delegating, handling underperformance, and keeping a team motivated under pressure.\n\nParticipants leave with a set of tools they can use the following week: structured one-to-ones, a delegation checklist, and a simple framework for difficult conversations.",
    curriculum: [
      "Moving from peer to supervisor",
      "Delegation and accountability",
      "Giving feedback and handling underperformance",
      "Running effective one-to-ones and team meetings",
      "Motivating a team through change"
    ]
  },
  {
    slug: "monitoring-evaluation-learning",
    title: "Monitoring, Evaluation & Learning (MEL) for Projects",
    category: "projects",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Building practical MEL systems that track results and inform decisions, not just reports.",
    audience: "Project officers, MEL staff and programme managers in development or corporate projects.",
    description: "This course builds the core MEL skillset needed to run a credible results-tracking system: theories of change, indicator design, data collection tools, and reporting that decision-makers actually use.\n\nParticipants work through a live project example from design to reporting, leaving with templates for an indicator tracking table, a data collection plan and a learning review.",
    curriculum: [
      "Theory of change and results frameworks",
      "Designing SMART indicators",
      "Data collection tools and quality checks",
      "Analysing and reporting results",
      "Building a learning and adaptation cycle"
    ]
  },
  {
    slug: "financial-management-budgeting",
    title: "Financial Management & Budgeting for Non-Finance Managers",
    category: "finance",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Reading financial statements, building budgets and managing costs with confidence.",
    audience: "Managers and project leads who own a budget but do not have a finance background.",
    description: "Designed for managers who are responsible for a budget without being trained accountants. The course demystifies financial statements, walks through building and defending a budget, and covers the cost-control habits that keep a project or department financially healthy.\n\nParticipants practise on realistic budget scenarios and leave able to read a monthly finance report with confidence rather than deferring entirely to the finance team.",
    curriculum: [
      "Reading income statements, balance sheets and cash flow",
      "Building and justifying an annual budget",
      "Variance analysis and cost control",
      "Procurement and expenditure basics",
      "Talking finance with your finance team"
    ]
  },
  {
    slug: "strategic-human-resource-management",
    title: "Strategic Human Resource Management",
    category: "hr",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Aligning people practices — recruitment, performance and retention — with organisational strategy.",
    audience: "HR officers, HR managers and department heads involved in people decisions.",
    description: "This course moves HR practice beyond administration into a strategic function that shapes organisational performance. It covers workforce planning, modern recruitment practice, performance management systems and the retention factors that keep good staff.\n\nCase discussions are drawn from regional employment practice, so approaches are grounded in what is workable locally, not only textbook theory.",
    curriculum: [
      "Workforce planning and job design",
      "Modern recruitment and selection practice",
      "Performance management systems",
      "Compensation, benefits and retention",
      "Employee relations and workplace policy"
    ]
  },
  {
    slug: "procurement-supply-chain-management",
    title: "Procurement & Supply Chain Management",
    category: "procurement",
    duration: "5 Days",
    mode: "Physical / Online",
    summary: "Sound procurement practice, supplier management and supply chain efficiency.",
    audience: "Procurement officers, logistics staff and managers responsible for purchasing decisions.",
    description: "A practical course in running a procurement function that is efficient, transparent and defensible. Topics span the full cycle — needs assessment, tendering, supplier evaluation and contract management — with attention to the compliance standards common across Kenyan public and donor-funded projects.\n\nParticipants work through a mock tender process from specification to award, leaving with a set of templates for their own procurement files.",
    curriculum: [
      "Procurement planning and needs assessment",
      "Tendering and supplier evaluation",
      "Contract management and compliance",
      "Inventory and logistics coordination",
      "Ethics and transparency in procurement"
    ]
  },
  {
    slug: "special-in-house-training",
    title: "Special / In-house Training",
    category: "custom",
    duration: "Flexible",
    mode: "On request, at your premises or online",
    summary: "A customised programme designed around your organisation's specific training need.",
    audience: "Organisations and teams with a training need that doesn't fit a standard course.",
    description: "Not every training need fits a fixed course. Tell us what your team is trying to get better at, and we will work with you to scope a customised programme — drawing on the same pool of facilitators and subject areas above, adapted to your content, timeline and format.\n\nSubmit an enquiry with a short outline of your requirement, and a member of the team will follow up to discuss scope, timing and facilitators.",
    curriculum: [
      "Scoping call to understand your objective",
      "Tailored curriculum and materials",
      "Delivery on your premises, online, or hybrid",
      "Optional post-training follow-up"
    ]
  }
];

function tcgFindCourse(slug){
  return TCG_COURSES.find(c => c.slug === slug);
}
