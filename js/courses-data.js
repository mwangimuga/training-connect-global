/* Training Connect Global — course catalogue
   Course titles, categories and durations are drawn from Trainingcred's
   published catalogue (trainingcred.com), the training provider this
   platform refers enquiries to. Summaries, descriptions and curriculum
   points below are written independently for this site. */

const TCG_CATEGORIES = {
  "leadership-management-strategy":       { label: "Leadership, Management & Strategy",            color: "#1E9636" },
  "governance-legal-contracts":           { label: "Governance, Legal & Contracts",                 color: "#4B3F72" },
  "facilities-assets-property":           { label: "Facilities, Assets & Property",                 color: "#8A4B00" },
  "data-analytics-business-intelligence": { label: "Data, Analytics & Business Intelligence",       color: "#1D5FD6" },
  "technology-ai-cybersecurity":          { label: "Technology, AI & Cybersecurity",                color: "#1141A6" },
  "finance-accounting-treasury":          { label: "Finance, Accounting & Treasury",                color: "#0B3C97" },
  "banking-credit-financial-regulation":  { label: "Banking, Credit & Financial Regulation",        color: "#1B5FAE" },
  "audit-risk-compliance":                { label: "Audit, Risk, Compliance & Financial Crime",     color: "#7A1F2B" },
  "procurement-supply-chain-logistics":   { label: "Procurement, Supply Chain & Logistics",         color: "#146B27" },
  "humanitarian-social-protection":       { label: "Humanitarian, Social Protection & Development", color: "#146B8A" },
  "health-safety-security-environment":   { label: "Health, Safety, Security & Environment (HSSE)", color: "#B3261E" },
  "health-systems-management":            { label: "Health Systems & Health Programme Management",  color: "#C2185B" },
  "communication-marketing-sales":        { label: "Communication, Marketing, Customer & Sales",    color: "#C2410C" },
  "professional-skills-effectiveness":    { label: "Professional Skills & Personal Effectiveness",  color: "#6A3FB5" },
  "project-programme-management":         { label: "Project, Programme & Portfolio Management",     color: "#7B4FCF" },
  "monitoring-evaluation-learning":       { label: "Monitoring, Evaluation & Learning (MEAL)",      color: "#0E8C7F" },
  "people-hr-talent":                     { label: "People, HR & Talent",                           color: "#B5651D" },
  "economics-policy-public-sector":       { label: "Economics, Policy & Public Sector Management",  color: "#3B7D2E" },
  "records-information-knowledge":        { label: "Records, Information & Knowledge Management",   color: "#5B6B85" },
  "energy-water-climate-environment":     { label: "Energy, Water, Climate & Environment",          color: "#0F7A6B" },
  "custom":                               { label: "Custom / In-house",                             color: "#146B27" }
};

const TCG_COURSES = [

/* ---------- Leadership, Management & Strategy ---------- */
{ slug:"professional-leadership-and-management", title:"Professional Leadership and Management Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical supervision, delegation and team performance for current and new managers.",
  description:"A grounded, practice-first course for anyone who manages people day to day. Sessions work through real supervisory situations — delegating, giving feedback and keeping a team motivated under pressure — rather than abstract theory.",
  curriculum:["Moving from peer to supervisor","Delegation and accountability","Feedback and difficult conversations","Motivating a team through change"] },

{ slug:"middle-managers-leadership-and-management", title:"Middle Managers Leadership and Management Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Leadership skills for managers who sit between senior leadership and front-line teams.",
  description:"Middle managers carry pressure from both directions — this course builds the specific skills that role demands: translating strategy downward, representing the team upward, and holding both together under competing demands.",
  curriculum:["The middle-manager balancing act","Translating strategy into team goals","Managing upward and sideways","Sustaining morale under pressure"] },

{ slug:"leadership-coaching-for-management", title:"Leadership Coaching for Management Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"A coaching approach to management, for leaders who want to develop people, not just direct them.",
  description:"Moves managers from telling to asking. Participants practise core coaching techniques — active listening, powerful questions, and structured feedback — and learn when a coaching approach outperforms direct instruction.",
  curriculum:["Coaching vs. directing","Active listening and questioning","The GROW coaching model","Coaching for underperformance"] },

{ slug:"leadership-communications-interpersonal-skills", title:"Leadership, Communications and Interpersonal Skills Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Clearer, more persuasive communication for leaders managing teams and stakeholders.",
  description:"Strong leadership stands or falls on communication. This course sharpens how participants brief, persuade, listen and manage difficult conversations across a range of workplace relationships.",
  curriculum:["Communication styles under pressure","Persuasion and influence","Active listening in leadership","Managing difficult conversations"] },

{ slug:"strategic-leadership-for-senior-managers", title:"Strategic Leadership for Senior Managers Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Strategic thinking, planning and execution for senior managers shaping organisational direction.",
  description:"Built for leaders who set direction rather than just follow it. Covers strategic analysis, translating strategy into an executable plan, and leading an organisation through the trade-offs that come with it.",
  curriculum:["Strategic analysis and choice","Translating strategy into execution","Leading organisational change","Measuring strategic progress"] },

{ slug:"building-high-trust-teams", title:"Building High-Trust Teams Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical methods for building trust, psychological safety and accountability within a team.",
  description:"Trust is the difference between a team that performs and one that just coexists. This course gives leaders concrete ways to build psychological safety while still holding people accountable.",
  curriculum:["The trust-performance link","Psychological safety in practice","Accountability without fear","Repairing broken trust"] },

{ slug:"team-building-and-collaboration", title:"Team Building and Collaboration Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Structured approaches to building cohesive, well-coordinated teams.",
  description:"Moves team building beyond one-off exercises into an ongoing practice — covering team roles, communication norms, and the habits that keep a group collaborating well once the workshop ends.",
  curriculum:["Team roles and dynamics","Communication norms that stick","Resolving team friction","Sustaining collaboration long-term"] },

{ slug:"managing-diversity-and-inclusion", title:"Managing Diversity and Inclusion Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical management approaches for building an inclusive, high-performing workplace.",
  description:"Equips managers to lead diverse teams deliberately — recognising bias, adapting management style, and building an inclusive culture that improves rather than complicates team performance.",
  curriculum:["Recognising unconscious bias","Inclusive management practice","Handling exclusionary behaviour","Measuring inclusion progress"] },

{ slug:"managing-and-leading-in-a-matrix-organization", title:"Managing and Leading in a Matrix Organization Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Leading effectively when reporting lines and priorities cross departments.",
  description:"Matrix structures create real leadership challenges — competing priorities, dual reporting lines, and shared resources. This course gives managers tools to lead influence without relying on formal authority alone.",
  curriculum:["Matrix structures explained","Leading without direct authority","Managing competing priorities","Resolving cross-team conflict"] },

{ slug:"generative-ai-for-business-leaders", title:"Generative AI for Business Leaders Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"A practical, non-technical grounding in generative AI for business decision-makers.",
  description:"Cuts through the hype for leaders who need to make real decisions about AI adoption. Covers what generative AI can and can't do, where it creates value, and how to govern its use responsibly.",
  curriculum:["Generative AI in plain terms","Spotting real use cases","Risk and governance basics","Building an adoption roadmap"] },

{ slug:"owner-manager-and-sme-growth-programme", title:"Owner-Manager and SME Growth Programme", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"A growth-focused programme for owners and managers of small and mid-sized businesses.",
  description:"Built around the specific pressures of running a growing SME — cash flow, delegation, and moving from doing everything yourself to building a business that can run without you in every room.",
  curriculum:["Growth-stage business planning","Delegating as you scale","Cash flow for growing firms","Building a leadership bench"] },

{ slug:"organizational-behavior-development-management", title:"Organizational Behavior Development & Management Training", category:"leadership-management-strategy", duration:"5 days", mode:"Physical / Online", level:"Intermediate",
  summary:"Understanding and shaping how people behave, decide and collaborate inside organisations.",
  description:"Applies organisational behaviour research to everyday management — motivation, group dynamics, and organisational culture — so participants can diagnose and improve how their own organisation actually functions.",
  curriculum:["Individual and group behaviour","Motivation theory in practice","Diagnosing culture problems","Designing behaviour change"] },

{ slug:"leading-with-empathy-and-compassion", title:"Leading with Empathy and Compassion Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building empathetic leadership habits without losing accountability or performance standards.",
  description:"Explores how empathy strengthens rather than softens leadership — helping managers read their teams better, respond to personal circumstances fairly, and still hold clear performance standards.",
  curriculum:["Empathy as a leadership skill","Reading team wellbeing signals","Compassionate accountability","Avoiding empathy burnout"] },

{ slug:"leading-with-a-growth-mindset", title:"Leading with a Growth Mindset Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building a growth-oriented leadership style that treats setbacks as data, not verdicts.",
  description:"Applies growth-mindset thinking to leadership practice — how leaders respond to failure, give feedback, and model learning in ways that shape how their whole team handles setbacks.",
  curriculum:["Fixed vs. growth mindset","Modelling learning as a leader","Feedback that builds growth","Handling setbacks constructively"] },

{ slug:"leading-with-integrity-and-ethics", title:"Leading with Integrity and Ethics Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical ethical decision-making for leaders facing real workplace grey areas.",
  description:"Moves ethics from a values statement into a practical decision-making skill — giving leaders a framework for navigating conflicts of interest, pressure from above, and difficult calls with no clean answer.",
  curriculum:["Ethical decision frameworks","Conflicts of interest","Leading under pressure to cut corners","Building an ethical team culture"] },

{ slug:"leading-with-agility-and-resilience", title:"Leading with Agility and Resilience Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Leading teams through disruption, ambiguity and constant change.",
  description:"Built for leaders operating in genuinely unpredictable conditions — practical approaches to decision-making with incomplete information, and to keeping a team steady when plans keep changing.",
  curriculum:["Decision-making under uncertainty","Adaptive planning methods","Keeping teams steady through change","Personal resilience for leaders"] },

{ slug:"labour-leadership-and-dispute-resolution", title:"Labour Leadership and Dispute Resolution Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Handling workplace disputes and labour relations with confidence and fairness.",
  description:"Gives managers and HR leads a structured approach to workplace disputes — from early-stage disagreements to formal grievances — grounded in fair process and practical de-escalation.",
  curriculum:["Sources of workplace disputes","Grievance handling procedure","Negotiation and mediation basics","Documentation and fair process"] },

{ slug:"building-resilience-and-stress-management", title:"Building Resilience and Stress Management Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical resilience and stress-management techniques for high-pressure professional roles.",
  description:"Gives professionals a toolkit for sustaining performance under sustained pressure — recognising early signs of burnout, structuring workload realistically, and building habits that hold up over the long run.",
  curriculum:["Recognising burnout early","Workload and priority management","Stress-response techniques","Building long-term resilience"] },

{ slug:"it-career-development-and-leadership-skills", title:"IT Career Development and Leadership Skills Training", category:"leadership-management-strategy", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Leadership and career-growth skills for technical professionals moving into management.",
  description:"Built for IT specialists stepping into leadership — bridging the gap between technical expertise and the people-management, communication and stakeholder skills a technical lead role demands.",
  curriculum:["From technical expert to leader","Communicating with non-technical stakeholders","Leading technical teams","Career pathways in IT leadership"] },

/* ---------- Governance, Legal & Contracts ---------- */
{ slug:"governance-risk-management-and-compliance-grc", title:"Governance, Risk Management and Compliance (GRC) Training", category:"governance-legal-contracts", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"An integrated approach to governance, enterprise risk and regulatory compliance.",
  description:"Brings governance, risk and compliance together as one connected discipline rather than three separate functions, giving participants a practical framework for building GRC processes that actually get used.",
  curriculum:["GRC as an integrated framework","Governance structures and oversight","Enterprise risk assessment","Compliance monitoring and reporting"] },

{ slug:"citizen-engagement-and-participatory-governance", title:"Citizen Engagement and Participatory Governance Training", category:"governance-legal-contracts", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Designing genuine citizen participation into public governance and decision-making.",
  description:"For public officials and civil society practitioners building real participatory processes — moving beyond box-ticking consultation toward engagement that meaningfully shapes public decisions.",
  curriculum:["Participatory governance models","Designing consultation processes","Managing stakeholder expectations","Reporting back to citizens"] },

{ slug:"international-relations-and-diplomacy-for-public-officials", title:"International Relations and Diplomacy for Public Officials Training", category:"governance-legal-contracts", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Diplomatic practice and international relations fundamentals for public sector officials.",
  description:"Gives public officials a working grounding in diplomatic protocol, negotiation, and international relations — the practical skills behind representing an institution or government in cross-border settings.",
  curriculum:["Diplomatic protocol basics","International negotiation skills","Bilateral and multilateral relations","Representing institutions abroad"] },

{ slug:"cybersecurity-information-governance-legal-risk", title:"Cybersecurity, Information Governance, Legal Risk Training", category:"governance-legal-contracts", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Where cybersecurity, information governance and legal risk intersect for today's leaders.",
  description:"Addresses cybersecurity as a governance and legal issue, not only a technical one — helping leaders understand their exposure, obligations and the frameworks that manage information-related legal risk.",
  curriculum:["Cyber risk as a governance issue","Information governance frameworks","Legal exposure and liability","Building an incident response plan"] },

{ slug:"fidic-contract-management-and-administration", title:"FIDIC Contract Management and Administration Training", category:"governance-legal-contracts", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Administering construction and engineering contracts under FIDIC frameworks.",
  description:"A practical course in FIDIC contract administration for engineers, project managers and contract officers working on construction and infrastructure projects governed by FIDIC forms.",
  curriculum:["FIDIC contract structures","Roles and obligations under FIDIC","Variations and claims","Dispute avoidance and resolution"] },

/* ---------- Facilities, Assets & Property ---------- */
{ slug:"property-management-training", title:"Property Management Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Operational control for residential, commercial and multi-occupancy property portfolios.",
  description:"Covers the full property management workflow — inspections, maintenance, budgets, vendor management and tenant communication — so participants leave with traceable, auditable records rather than scattered notes.",
  curriculum:["Lease administration basics","Preventive maintenance planning","Property budgeting and variance","Vendor performance management"] },

{ slug:"understanding-property-valuation-and-appraisal", title:"Understanding Property Valuation and Appraisal Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Core property valuation methods for finance, banking and real estate professionals.",
  description:"Builds practical valuation and appraisal skills for teams that rely on accurate property values — covering the standard approaches to valuation and how they hold up under real market conditions.",
  curriculum:["Valuation approaches compared","Market data and comparables","Appraisal reporting standards","Common valuation pitfalls"] },

{ slug:"the-role-of-real-estate-in-wealth-building", title:"The Role of Real Estate in Wealth Building Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Real estate as a wealth-building asset class, from underwriting to portfolio strategy.",
  description:"Looks at property investment as a disciplined financial strategy — underwriting deals properly, understanding income approach valuation, and building a portfolio that compounds rather than one that just accumulates.",
  curriculum:["Real estate as an asset class","Income approach and underwriting","Portfolio diversification","Long-term wealth strategy"] },

{ slug:"real-estate-portfolio-decarbonisation-and-climate-resilience", title:"Real Estate Portfolio Decarbonisation and Climate Resilience Strategy Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building a decarbonisation and climate-resilience strategy across a property portfolio.",
  description:"Addresses the growing pressure on property owners to measure and reduce portfolio emissions, covering measurement standards and the transition risks a climate-exposed property portfolio needs to plan for.",
  curriculum:["Portfolio emissions measurement","Transition-risk assessment","Retrofit and resilience planning","Reporting to stakeholders"] },

{ slug:"risk-management-in-property-management", title:"Risk Management in Property Management Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Identifying and controlling the operational risks unique to property portfolios.",
  description:"Gives property teams a structured way to identify, assess and control the risks specific to buildings and tenants — from safety incidents to compliance failures — before they become costly problems.",
  curriculum:["Property risk registers","Building safety risk controls","Incident response planning","Risk reporting to owners"] },

{ slug:"property-leasing-and-rent-collection-strategies", title:"Property Leasing and Rent Collection Strategies Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Tightening lease administration and rent collection to protect property income.",
  description:"Focused on the operational side of leasing income — lease data accuracy, rent roll controls, and structured follow-up on arrears — so income leakage gets caught early rather than at year-end.",
  curriculum:["Lease data and rent roll controls","Billing and cash application","Arrears follow-up process","Renewal and vacancy planning"] },

{ slug:"legal-aspects-of-property-management", title:"Legal Aspects of Property Management Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"The legal framework property managers need to operate compliantly and confidently.",
  description:"Covers the legal side of property operations — lease law, due diligence, and contract lifecycle management — so property teams can operate with fewer legal blind spots.",
  curriculum:["Property law fundamentals","Due diligence checklists","Contract lifecycle management","Lease administration compliance"] },

{ slug:"budgeting-and-financial-reporting-for-property-managers", title:"Budgeting and Financial Reporting for Property Managers Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building defensible property budgets and clear owner financial reporting.",
  description:"Gives property managers the financial skills owners expect — building an operating budget, tracking variance, and producing reports that give owners real visibility into portfolio performance.",
  curriculum:["Property budget construction","Financial baselines and data","Variance reporting","Owner reporting formats"] },

{ slug:"fixed-asset-management-training", title:"Fixed Asset Management Training", category:"facilities-assets-property", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Tracking, valuing and safeguarding an organisation's fixed asset base.",
  description:"Covers the full fixed-asset lifecycle — registration, depreciation, physical verification and disposal — so organisations can maintain an asset register that actually matches what's on the ground.",
  curriculum:["Asset registers and tagging","Depreciation methods","Physical verification cycles","Disposal and write-off controls"] },

/* ---------- Data, Analytics & Business Intelligence ---------- */
{ slug:"data-analytics-for-education-and-learning-analytics", title:"Data Analytics for Education and Learning Analytics Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Turning student and learner interaction data into evidence-based decisions.",
  description:"Helps education and L&D professionals build dashboards and models around learner data — tracking engagement, spotting at-risk learners early, and reporting outcomes clearly to non-technical stakeholders.",
  curriculum:["Learning data architecture basics","Engagement dashboards","Identifying at-risk learners","Reporting to stakeholders"] },

{ slug:"advanced-statistical-analysis-using-ibm-spss-statistics", title:"Advanced Statistical Analysis Using IBM SPSS Statistics Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Advanced statistical testing and analysis in SPSS for researchers and analysts.",
  description:"Moves beyond descriptive statistics into the tests analysts actually need — hypothesis testing, ANOVA and regression in SPSS — with a strong focus on interpreting and reporting results correctly.",
  curriculum:["SPSS data preparation","Hypothesis testing and ANOVA","Regression analysis in SPSS","Reporting statistical findings"] },

{ slug:"mobile-data-collection-using-the-epicollect", title:"Mobile Data Collection using the EpiCollect Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building and running mobile data collection forms with EpiCollect5.",
  description:"A hands-on course in mobile data collection for field teams — designing forms, managing project structure, and building in data-quality controls before data ever reaches the office.",
  curriculum:["EpiCollect5 form design","Project structure and roles","Field data quality controls","Exporting and cleaning data"] },

{ slug:"data-warehousing-and-dimensional-modeling", title:"Data Warehousing and Dimensional Modeling Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Designing data warehouses and dimensional models that support reliable reporting.",
  description:"Covers the architecture behind trustworthy reporting — dimensional modelling, keys and relationships, and tracking historical change — the foundation any serious BI function needs.",
  curriculum:["Data warehousing architecture","Dimensional modelling basics","Keys and relationships","Tracking historical change"] },

{ slug:"natural-language-processing-for-analysts", title:"Natural Language Processing for Analysts Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Practical NLP techniques for analysts working with text data.",
  description:"Introduces text analytics for analysts without a programming background — preparing text data, feature engineering, and applying NLP techniques to extract real signal from unstructured text.",
  curriculum:["Text data preparation","Feature engineering for text","TF-IDF and basic models","Applying NLP to business data"] },

{ slug:"computer-vision-fundamentals", title:"Computer Vision Fundamentals Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"An applied introduction to computer vision workflows and image data.",
  description:"Covers the fundamentals of working with image data — processing, quality control and augmentation — for analysts and engineers exploring computer vision applications for the first time.",
  curriculum:["Computer vision workflows","Image processing basics","Datasets and augmentation","Evaluating model quality"] },

{ slug:"blockchain-and-emerging-technologies", title:"Blockchain and Emerging Technologies Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"A grounded look at blockchain and the emerging technologies built on it.",
  description:"Cuts through blockchain hype with a practical grounding in distributed ledgers, smart contracts and enterprise applications — enough to evaluate real proposals rather than buzzwords.",
  curriculum:["Distributed ledger foundations","Smart contract applications","Enterprise blockchain networks","Evaluating blockchain use cases"] },

{ slug:"data-analytics-for-government-policy-and-decision-making", title:"Data Analytics for Government Policy and Decision Making Training", category:"data-analytics-business-intelligence", duration:"10 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Applying data analytics to public policy design and government decision-making.",
  description:"An extended programme for public sector analysts building the case for evidence-based policy — from data manipulation and visualisation through to communicating findings in a policy context.",
  curriculum:["Public sector data sources","Policy-relevant data analysis","Visualisation for policymakers","Ethics in public data use"] },

{ slug:"hadoop-administration-training", title:"Hadoop Administration Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Core administration skills for managing a Hadoop big-data cluster.",
  description:"A hands-on course for IT teams responsible for big-data infrastructure — covering cluster setup, monitoring and the day-to-day administration tasks that keep a Hadoop environment reliable.",
  curriculum:["Hadoop cluster architecture","Installation and configuration","Cluster monitoring","Troubleshooting common issues"] },

{ slug:"data-analytics-for-financial-fraud-prevention", title:"Data Analytics for Financial Fraud Prevention Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Using data analytics to detect and prevent financial fraud.",
  description:"Gives finance and risk teams practical analytical techniques for spotting fraud patterns in transaction data — moving fraud detection from reactive investigation to proactive monitoring.",
  curriculum:["Fraud pattern recognition","Transaction data analysis","Anomaly detection basics","Building fraud dashboards"] },

{ slug:"data-analytics-for-energy-management", title:"Data Analytics for Energy Management Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Applying data analytics to energy consumption, efficiency and market data.",
  description:"Built for energy sector analysts working with consumption and market data — turning raw energy data into insights that inform efficiency decisions and downstream market analysis.",
  curriculum:["Energy data sources","Consumption pattern analysis","Efficiency opportunity identification","Reporting for decision-makers"] },

{ slug:"gis-data-collection-analysis-visualization-and-mapping", title:"GIS Data Collection, Analysis, Visualization and Mapping Training", category:"data-analytics-business-intelligence", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"End-to-end GIS workflow — from field data collection through to mapped analysis.",
  description:"Covers the full GIS workflow for fieldwork-heavy sectors like agriculture and research — collecting spatial data, analysing it, and producing maps that communicate findings clearly.",
  curriculum:["GIS data collection methods","Spatial data analysis","Mapping and visualisation","Common GIS software tools"] },

/* ---------- Technology, AI & Cybersecurity ---------- */
{ slug:"responsible-ai-ethics-and-human-oversight", title:"Responsible AI, Ethics and Human Oversight Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building responsible AI practices with proper human oversight and governance.",
  description:"For organisations deploying AI systems who need a practical governance approach — covering ethical risk, bias, and the human-oversight structures that keep AI deployment accountable.",
  curriculum:["AI ethics frameworks","Bias identification and mitigation","Human-in-the-loop design","AI governance structures"] },

{ slug:"data-breach-management-and-regulatory-notification", title:"Data Breach Management and Regulatory Notification Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Responding to data breaches and meeting regulatory notification obligations.",
  description:"A practical course for teams responsible for data protection compliance — covering breach response procedures and the regulatory notification timelines organisations are legally required to meet.",
  curriculum:["Breach detection and response","Regulatory notification requirements","Stakeholder communication","Post-breach remediation"] },

{ slug:"microsoft-azure-fundamentals", title:"Microsoft Azure Fundamentals Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"A hands-on introduction to core Microsoft Azure cloud services.",
  description:"Breaks Azure's cloud services down into manageable, practical modules — with hands-on labs so participants gain real working experience rather than theory alone.",
  curriculum:["Core Azure services","Cloud deployment models","Azure security basics","Hands-on Azure labs"] },

{ slug:"ai-risk-management-and-mitigation", title:"AI Risk Management & Mitigation Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Identifying and managing the organisational risks that come with AI adoption.",
  description:"Addresses AI risk as a management discipline — including shadow AI, governance gaps, and the practical steps organisations take to bring AI use under proper oversight.",
  curriculum:["Mapping organisational AI risk","Shadow AI and unmanaged use","AI governance frameworks","Building an AI risk register"] },

{ slug:"odoo-erp-customization-and-module-development", title:"Odoo ERP: Customization and Module Development Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Customising and extending Odoo ERP for organisation-specific workflows.",
  description:"A technical, hands-on course for teams implementing Odoo ERP — covering customisation and module development so the system fits the organisation's workflow rather than the other way round.",
  curriculum:["Odoo architecture overview","Customising existing modules","Building new modules","Testing and deployment"] },

{ slug:"fundamentals-of-cloud-computing-for-project-managers", title:"Fundamentals of Cloud Computing for Project Managers Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Cloud computing concepts project managers need to lead technical projects confidently.",
  description:"Gives project managers enough cloud literacy to lead technical projects credibly — not to configure infrastructure themselves, but to ask the right questions and plan realistically.",
  curriculum:["Cloud service models explained","Planning cloud migration projects","Cloud cost considerations","Working with technical teams"] },

{ slug:"complete-data-protection-and-privacy", title:"Complete Data Protection and Privacy Training", category:"technology-ai-cybersecurity", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"A full grounding in data protection principles and privacy compliance.",
  description:"Covers data protection from first principles — what personal data is, how it must be handled, and the compliance obligations organisations carry when they collect and process it.",
  curriculum:["Data protection principles","Lawful basis for processing","Data subject rights","Building a compliance programme"] },

{ slug:"blockchain-technology-and-cryptocurrencies", title:"Blockchain Technology and Cryptocurrencies Training", category:"technology-ai-cybersecurity", duration:"7 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"How blockchain and cryptocurrencies work, and what they mean for business.",
  description:"An extended course covering blockchain architecture and the cryptocurrency ecosystem built on it — aimed at professionals who need to evaluate blockchain proposals with real understanding.",
  curriculum:["Blockchain architecture basics","How cryptocurrencies work","Smart contracts explained","Evaluating blockchain proposals"] },

{ slug:"digital-skills-for-the-workplace", title:"Digital Skills for the Workplace Training", category:"technology-ai-cybersecurity", duration:"3 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Essential digital productivity, collaboration and information-handling skills.",
  description:"A practical refresher for the tools that make up a modern working day — cloud documents, shared calendars, video meetings and safe information handling — for mixed-experience groups.",
  curriculum:["Cloud documents and shared drives","Video meeting best practice","Organising digital files","Spotting phishing and scams"] },

/* ---------- Finance, Accounting & Treasury ---------- */
{ slug:"financial-management-fundamentals", title:"Financial Management Fundamentals Training", category:"finance-accounting-treasury", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Reading financial statements and managing budgets with confidence.",
  description:"Designed for managers who own a budget without a finance background — demystifying financial statements and building the cost-control habits that keep a department financially healthy.",
  curriculum:["Reading financial statements","Building and defending a budget","Variance analysis","Cost control basics"] },

{ slug:"advanced-financial-modelling-and-valuation", title:"Advanced Financial Modelling and Valuation Training", category:"finance-accounting-treasury", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building robust financial models and defensible company valuations.",
  description:"A hands-on modelling course for finance professionals — building three-statement models, sensitivity analysis, and valuation methods that hold up to scrutiny from investors or leadership.",
  curriculum:["Three-statement modelling","Sensitivity and scenario analysis","Valuation methods compared","Presenting models to stakeholders"] },

{ slug:"business-law-and-ethics-in-finance", title:"Business Law and Ethics in Finance Training", category:"finance-accounting-treasury", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"The legal and ethical framework finance professionals operate within.",
  description:"Covers the legal and ethical boundaries finance professionals need to know — from contract basics to conflicts of interest — grounded in real situations rather than abstract law.",
  curriculum:["Business law fundamentals","Contracts in a finance context","Conflicts of interest","Ethical decision-making in finance"] },

{ slug:"financial-analysis-modeling-and-forecasting", title:"Financial Analysis, Modeling and Forecasting Training", category:"finance-accounting-treasury", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Practical financial analysis and forecasting for informed business decisions.",
  description:"Builds the analytical skills behind reliable forecasts — ratio analysis, trend analysis and forecasting techniques that give decision-makers a realistic view of what's coming.",
  curriculum:["Financial ratio analysis","Trend and variance analysis","Forecasting techniques","Communicating forecasts to leadership"] },

{ slug:"financial-management-for-ngos-and-donor-funded-projects", title:"Financial Management for NGOs and Donor-Funded Projects Training", category:"finance-accounting-treasury", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Donor-compliant financial management for NGOs and development projects.",
  description:"Addresses the specific financial management demands of donor-funded work — grant budgeting, donor compliance and reporting that satisfies both the organisation and the funder.",
  curriculum:["Donor budgeting requirements","Grant financial compliance","Multi-donor project accounting","Donor financial reporting"] },

/* ---------- Banking, Credit & Financial Regulation ---------- */
{ slug:"credit-risk-assessment-and-pricing", title:"Credit Risk Assessment and Pricing Training", category:"banking-credit-financial-regulation", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Assessing borrower risk and pricing credit products accurately.",
  description:"Builds practical credit assessment skills for lending teams — evaluating borrower risk properly and pricing credit products in a way that reflects that risk rather than guesswork.",
  curriculum:["Credit risk assessment methods","Borrower financial analysis","Risk-based pricing","Portfolio credit risk monitoring"] },

{ slug:"debt-collection-and-credit-management", title:"Debt Collection and Credit Management Training", category:"banking-credit-financial-regulation", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Structured, compliant approaches to debt collection and credit control.",
  description:"Gives credit control teams a structured collections process — from early arrears follow-up through to formal recovery — balancing recovery rates with fair, compliant practice.",
  curriculum:["Credit control fundamentals","Early arrears follow-up","Negotiating repayment plans","Formal recovery procedures"] },

{ slug:"digital-financial-services-payments-and-fintech-risk", title:"Digital Financial Services, Payments and Fintech Risk Training", category:"banking-credit-financial-regulation", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Managing risk across digital payments and fintech products.",
  description:"Covers the risk landscape unique to digital financial services — payment fraud, platform risk and regulatory expectations for fintech products operating at speed and scale.",
  curriculum:["Digital payments landscape","Fintech-specific risk types","Payment fraud controls","Regulatory expectations for fintech"] },

/* ---------- Audit, Risk, Compliance & Financial Crime ---------- */
{ slug:"enterprise-risk-management-erm", title:"Enterprise Risk Management (ERM) Training", category:"audit-risk-compliance", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building an integrated, organisation-wide approach to enterprise risk.",
  description:"Moves risk management from siloed departmental exercises into a coordinated enterprise-wide practice — identifying, prioritising and reporting risk in a way leadership can actually act on.",
  curriculum:["Enterprise risk frameworks","Risk identification and rating","Risk appetite and tolerance","Board-level risk reporting"] },

{ slug:"risk-based-internal-auditing-techniques", title:"Risk-Based Internal Auditing Techniques Training", category:"audit-risk-compliance", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Focusing internal audit effort where organisational risk is highest.",
  description:"Trains internal auditors in risk-based audit planning — prioritising audit effort against the areas of highest organisational risk rather than working through a fixed checklist.",
  curriculum:["Risk-based audit planning","Control testing techniques","Audit evidence and documentation","Reporting audit findings"] },

{ slug:"isoiec-17025-lead-assessor", title:"ISO/IEC 17025 Lead Assessor Training", category:"audit-risk-compliance", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Lead assessor skills for ISO/IEC 17025 testing and calibration laboratories.",
  description:"Prepares participants to lead assessments of laboratory management systems against ISO/IEC 17025, covering the standard's requirements and the practical conduct of an assessment.",
  curriculum:["ISO/IEC 17025 requirements","Laboratory management systems","Conducting an assessment","Non-conformance reporting"] },

{ slug:"isoiec-38500-foundation", title:"ISO/IEC 38500 Foundation Training", category:"audit-risk-compliance", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Foundational grounding in IT governance under the ISO/IEC 38500 framework.",
  description:"Introduces the ISO/IEC 38500 IT governance framework — giving leaders and IT professionals a shared model for how technology decisions should be governed at board level.",
  curriculum:["ISO/IEC 38500 principles","IT governance vs. IT management","Board-level technology oversight","Applying the framework in practice"] },

{ slug:"iso-37301-lead-implementer", title:"ISO 37301 Lead Implementer Training", category:"audit-risk-compliance", duration:"5 Days", mode:"Physical / Online", level:"Advanced",
  summary:"Leading the implementation of a compliance management system under ISO 37301.",
  description:"An advanced course for compliance leads implementing ISO 37301 compliance management systems — covering the standard's requirements end to end, from design through to ongoing monitoring.",
  curriculum:["ISO 37301 requirements","Designing a compliance system","Implementation roadmap","Monitoring and continual improvement"] },

/* ---------- Procurement, Supply Chain & Logistics ---------- */
{ slug:"public-procurement-and-contract-management", title:"Public Procurement and Contract Management Training", category:"procurement-supply-chain-logistics", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Transparent, compliant public procurement from tender to contract close-out.",
  description:"Covers the full public procurement cycle with a strong compliance focus — tendering, evaluation and contract management practices that hold up to audit and public scrutiny.",
  curriculum:["Procurement planning","Tendering and evaluation","Contract management","Transparency and compliance"] },

{ slug:"operations-management-essentials", title:"Operations Management Essentials Training", category:"procurement-supply-chain-logistics", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Core operations management principles for improving process efficiency.",
  description:"A practical grounding in operations management — process mapping, efficiency improvement and the day-to-day decisions that keep operations running smoothly under real-world constraints.",
  curriculum:["Process mapping basics","Efficiency improvement methods","Capacity and resource planning","Operational performance metrics"] },

/* ---------- Humanitarian, Social Protection & Development ---------- */
{ slug:"social-protection-for-the-elderly-and-pwds", title:"Social Protection for the Elderly and PWDs (Persons with Disabilities) Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Designing social protection programmes for elderly people and persons with disabilities.",
  description:"Focused on the specific design considerations for social protection programmes serving elderly people and persons with disabilities — from eligibility design to accessible delivery.",
  curriculum:["Social protection programme design","Eligibility and targeting","Accessible service delivery","Monitoring programme reach"] },

{ slug:"gender-mainstreaming-analysis-and-planning", title:"Gender Mainstreaming Analysis and Planning Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Integrating gender analysis into programme design and planning.",
  description:"Builds practical skills in gender analysis and mainstreaming — giving development practitioners a repeatable process for integrating gender considerations into programme design from the outset.",
  curriculum:["Gender analysis frameworks","Mainstreaming in programme design","Gender-responsive indicators","Reporting on gender outcomes"] },

{ slug:"advocacy-and-lobbying-skills", title:"Advocacy and Lobbying Skills Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Effective advocacy and lobbying skills for policy and social change.",
  description:"Covers the practical craft of advocacy — framing an issue, building coalitions, and engaging policymakers — for practitioners working to influence policy and public opinion.",
  curriculum:["Advocacy strategy and framing","Coalition building","Engaging policymakers","Public speaking for advocacy"] },

{ slug:"gender-and-protection-in-humanitarian-settings", title:"Gender and Protection in Humanitarian Settings Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Integrating gender and protection principles into humanitarian response.",
  description:"For humanitarian practitioners integrating protection principles into response work — covering gender-sensitive programming and the practical safeguards protection work requires in the field.",
  curriculum:["Protection mainstreaming","Gender-sensitive programming","Safeguarding in the field","Referral pathways"] },

{ slug:"social-protection-data-systems-and-performance-monitoring", title:"Social Protection Data Systems and Performance Monitoring Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building data systems that track social protection programme performance.",
  description:"Covers the data infrastructure behind well-run social protection programmes — registries, performance indicators, and the monitoring systems that keep large programmes accountable.",
  curriculum:["Social registry design","Performance indicator selection","Data quality monitoring","Programme performance reporting"] },

{ slug:"resource-mobilization-and-fundraising", title:"Resource Mobilization and Fundraising Training", category:"humanitarian-social-protection", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical resource mobilisation and fundraising skills for NGOs and development teams.",
  description:"Builds fundraising capability for development organisations — donor mapping, proposal writing and relationship management that goes beyond a single successful grant.",
  curriculum:["Donor mapping and research","Proposal and pitch writing","Donor relationship management","Diversifying funding sources"] },

/* ---------- Health, Safety, Security & Environment (HSSE) ---------- */
{ slug:"emergency-preparedness-and-response-planning", title:"Emergency Preparedness and Response Planning Training", category:"health-safety-security-environment", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building organisational readiness for emergency response.",
  description:"Gives organisations a structured approach to emergency preparedness — risk assessment, response planning and the coordination needed when an emergency actually happens.",
  curriculum:["Emergency risk assessment","Response plan development","Roles and coordination","Post-incident review"] },

{ slug:"disaster-and-crisis-management", title:"Disaster and Crisis Management Training", category:"health-safety-security-environment", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Anticipating, managing and recovering from organisational and community crises.",
  description:"Covers the full crisis lifecycle — anticipating risk, managing the response, and maintaining continuity — for professionals responsible for organisational or community resilience.",
  curriculum:["Crisis risk anticipation","Crisis response leadership","Business continuity planning","Recovery and lessons learned"] },

{ slug:"construction-health-and-safety-nebosh-construction", title:"Construction Health and Safety (NEBOSH Construction) Training", category:"health-safety-security-environment", duration:"5 Days", mode:"Physical / Online", level:"Advanced",
  summary:"Advanced construction-sector health and safety practice aligned to NEBOSH.",
  description:"An advanced health and safety course for construction-sector professionals, covering site-specific hazards and the safety management systems construction projects need to operate safely.",
  curriculum:["Construction hazard identification","Safety management systems","Site risk assessment","Incident investigation"] },

{ slug:"occupational-health-safety-and-environmental-management", title:"Occupational Health, Safety, and Environmental Management Training", category:"health-safety-security-environment", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Core occupational health, safety and environmental management practice.",
  description:"A broad foundation in workplace health, safety and environmental management — covering hazard identification, compliance and the management systems that keep incidents from repeating.",
  curriculum:["Hazard identification and control","OHS legal compliance","Environmental management basics","Incident reporting systems"] },

/* ---------- Health Systems & Health Programme Management ---------- */
{ slug:"telemedicine-implementation", title:"Telemedicine Implementation Training", category:"health-systems-management", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Planning and implementing telemedicine services within a health system.",
  description:"Covers the practical steps behind implementing telemedicine — technology selection, clinical workflow redesign and the change management needed to get clinicians and patients on board.",
  curriculum:["Telemedicine service design","Technology and platform selection","Clinical workflow redesign","Patient adoption and access"] },

/* ---------- Communication, Marketing, Customer & Sales ---------- */
{ slug:"marketing-technology-martech-stack-management", title:"Marketing Technology (MarTech) Stack Management Training", category:"communication-marketing-sales", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Selecting and managing the marketing technology stack behind modern campaigns.",
  description:"Helps marketing teams make sense of their technology stack — what each tool is for, how they should connect, and how to avoid the tool sprawl that quietly wastes budget.",
  curriculum:["MarTech stack components","Tool selection criteria","Integration and data flow","Measuring MarTech ROI"] },

{ slug:"subscription-models-and-customer-retention", title:"Subscription Models and Customer Retention Training", category:"communication-marketing-sales", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building subscription revenue models that keep customers coming back.",
  description:"Covers the mechanics of subscription business models — pricing, churn analysis and the retention tactics that matter more than acquisition once a subscription base exists.",
  curriculum:["Subscription pricing models","Churn analysis","Retention and loyalty tactics","Customer lifetime value"] },

{ slug:"fundamentals-of-marketing", title:"Fundamentals of Marketing Training", category:"communication-marketing-sales", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"A solid grounding in core marketing principles and campaign planning.",
  description:"Builds a practical marketing foundation — market analysis, positioning and campaign planning — for professionals moving into a marketing role or supporting one for the first time.",
  curriculum:["Market analysis basics","Positioning and messaging","Campaign planning","Measuring marketing performance"] },

/* ---------- Professional Skills & Personal Effectiveness ---------- */
{ slug:"time-management-and-personal-productivity", title:"Time Management and Personal Productivity Training", category:"professional-skills-effectiveness", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical systems for managing time, priorities and focus at work.",
  description:"Moves beyond generic productivity tips into a repeatable personal system — prioritisation, focus management and the habits that hold up once the course ends and the inbox refills.",
  curriculum:["Prioritisation frameworks","Managing interruptions and focus","Realistic scheduling","Sustaining new habits"] },

{ slug:"advanced-emotional-intelligence", title:"Advanced Emotional Intelligence Training", category:"professional-skills-effectiveness", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Deepening emotional intelligence for stronger professional relationships.",
  description:"Builds advanced self-awareness and interpersonal skill — recognising emotional patterns in yourself and others, and using that awareness to navigate workplace relationships more effectively.",
  curriculum:["Self-awareness in practice","Reading emotional cues","Managing difficult emotions","Applying EQ in relationships"] },

{ slug:"conflict-resolution-and-mediation", title:"Conflict Resolution and Mediation Training", category:"professional-skills-effectiveness", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Practical conflict resolution and mediation skills for workplace disputes.",
  description:"Gives participants a structured process for resolving workplace conflict — de-escalation, neutral facilitation and mediation techniques that help disputes reach a genuine resolution.",
  curriculum:["Sources of workplace conflict","De-escalation techniques","Neutral facilitation skills","Structured mediation process"] },

/* ---------- Project, Programme & Portfolio Management ---------- */
{ slug:"six-sigma-for-project-managers", title:"Six Sigma for Project Managers Training", category:"project-programme-management", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Applying Six Sigma process-improvement tools within project management.",
  description:"Brings Six Sigma's process-improvement discipline into project delivery — using data to identify defects, reduce variation and keep project processes under control.",
  curriculum:["DMAIC methodology","Process variation and control","Root-cause analysis tools","Applying Six Sigma to projects"] },

{ slug:"six-sigma-green-belt", title:"Six Sigma Green Belt Training", category:"project-programme-management", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Green Belt-level process improvement skills using Six Sigma methodology.",
  description:"A structured introduction to Six Sigma at Green Belt level — statistical process tools and the DMAIC framework applied to real process-improvement projects.",
  curriculum:["Six Sigma fundamentals","Statistical process tools","Running a DMAIC project","Presenting improvement results"] },

{ slug:"benefits-realization-in-program-management", title:"Benefits Realization in Program Management Training", category:"project-programme-management", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Making sure programmes deliver the benefits they were funded to achieve.",
  description:"Addresses the gap between project completion and actual benefit delivery — tracking, measuring and reporting on whether a programme's intended outcomes were genuinely realised.",
  curriculum:["Benefits mapping and ownership","Tracking realisation over time","Benefits reporting","Course-correcting underperforming benefits"] },

/* ---------- Monitoring, Evaluation & Learning (MEAL) ---------- */
{ slug:"result-based-management-rbm", title:"Result-Based Management (RBM) Training", category:"monitoring-evaluation-learning", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Managing programmes around measurable results rather than activities alone.",
  description:"Builds the core RBM skillset — results frameworks, indicator design and reporting — so programme teams manage toward outcomes, not just a list of completed activities.",
  curriculum:["Results frameworks and theory of change","Designing SMART indicators","Results-based reporting","Using results data for decisions"] },

/* ---------- People, HR & Talent ---------- */
{ slug:"measuring-and-reporting-dei-progress", title:"Measuring and Reporting DEI Progress Training", category:"people-hr-talent", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building credible metrics and reporting for diversity, equity and inclusion.",
  description:"Moves DEI from stated commitment to measured progress — covering the metrics, data sources and reporting structures that make DEI outcomes visible rather than assumed.",
  curriculum:["DEI metrics that matter","Data collection for DEI","Reporting progress credibly","Turning data into action"] },

{ slug:"labour-market-regulations-and-their-impact-on-hr", title:"Labour Market Regulations and their Impact on HR Training", category:"people-hr-talent", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"How labour market regulation shapes day-to-day HR decisions.",
  description:"Keeps HR practitioners current on labour regulation and its practical impact — translating legal requirements into HR policies and decisions that hold up to scrutiny.",
  curriculum:["Labour law fundamentals","Regulatory compliance in HR","Policy design under regulation","Handling regulatory change"] },

{ slug:"talent-acquisition-and-retention-strategies", title:"Talent Acquisition and Retention Strategies Training", category:"people-hr-talent", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building a talent pipeline that both attracts and keeps good people.",
  description:"Covers recruitment and retention as one connected strategy — sourcing and hiring well, then keeping people engaged long enough to justify the investment in hiring them.",
  curriculum:["Sourcing and hiring strategy","Candidate experience design","Onboarding for retention","Engagement and retention tactics"] },

{ slug:"talent-management-and-retention", title:"Talent Management and Retention Training", category:"people-hr-talent", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Connecting workforce planning, development and retention into one talent strategy.",
  description:"Covers the full talent management cycle — workforce planning, development and succession — so retention becomes the outcome of a coherent strategy rather than a standalone initiative.",
  curriculum:["Workforce planning basics","Learning and development pathways","Succession planning","Retention risk indicators"] },

/* ---------- Economics, Policy & Public Sector Management ---------- */
{ slug:"stakeholder-engagement-and-public-participation", title:"Stakeholder Engagement and Public Participation Training", category:"economics-policy-public-sector", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Designing genuine stakeholder engagement into public sector decision-making.",
  description:"Gives public officials a structured approach to stakeholder engagement — mapping stakeholders, designing participation processes, and managing the expectations that come with public consultation.",
  curriculum:["Stakeholder mapping","Designing participation processes","Managing public expectations","Reporting engagement outcomes"] },

{ slug:"transformative-donor-engagement-for-public-sector-leaders", title:"Transformative Donor Engagement for Public Sector Leaders Training", category:"economics-policy-public-sector", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building more effective, strategic relationships between public institutions and donors.",
  description:"Helps public sector leaders manage donor relationships strategically — aligning donor priorities with institutional goals, rather than chasing funding opportunistically.",
  curriculum:["Donor landscape mapping","Aligning priorities with donors","Negotiating donor partnerships","Sustaining long-term relationships"] },

{ slug:"quantitative-analysis-in-economic-policy", title:"Quantitative Analysis in Economic Policy Training", category:"economics-policy-public-sector", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Applying quantitative analysis methods to real economic policy questions.",
  description:"Builds practical quantitative skills for policy analysts — applying statistical and economic analysis methods to real policy questions rather than textbook exercises.",
  curriculum:["Quantitative methods for policy","Economic data interpretation","Policy impact analysis","Communicating findings to policymakers"] },

/* ---------- Records, Information & Knowledge Management ---------- */
{ slug:"electronic-document-and-record-management", title:"Electronic Document and Record Management Training", category:"records-information-knowledge", duration:"5 Days", mode:"Physical / Online", level:"Foundation",
  summary:"Building a reliable, compliant electronic document and records system.",
  description:"Covers the practical side of electronic records management — classification, retention schedules and retrieval systems that keep an organisation's records usable, not just stored.",
  curriculum:["Document classification systems","Retention scheduling","Digital records compliance","Search and retrieval design"] },

/* ---------- Energy, Water, Climate & Environment ---------- */
{ slug:"environment-sustainability-and-governance-esg", title:"Environment, Sustainability, and Governance (ESG) Training", category:"energy-water-climate-environment", duration:"5 Days", mode:"Physical / Online", level:"Intermediate",
  summary:"Building ESG reporting and governance practice that stands up to scrutiny.",
  description:"Covers ESG as a governance and reporting discipline — compliance expectations, climate risk, and the stakeholder trust that credible ESG reporting is meant to build.",
  curriculum:["ESG reporting frameworks","Climate risk basics","Governance for ESG oversight","Building stakeholder trust"] },

/* ---------- Custom ---------- */
{ slug:"special-in-house-training", title:"Special / In-house Training", category:"custom", duration:"Flexible", mode:"On request, at your premises or online", level:"Custom",
  summary:"A customised programme designed around your organisation's specific training need.",
  description:"Not every training need fits a fixed course. Tell us what your team is trying to get better at, and we'll work with you to scope a customised programme — drawing on the same pool of facilitators and subject areas above, adapted to your content, timeline and format.",
  curriculum:["Scoping call to understand your objective","Tailored curriculum and materials","Delivery on your premises, online, or hybrid","Optional post-training follow-up"] }

];

function tcgFindCourse(slug){
  return TCG_COURSES.find(c => c.slug === slug);
}
