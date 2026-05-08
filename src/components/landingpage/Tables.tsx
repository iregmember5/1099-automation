import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Globe,
  Layers3,
  Lock,
  Mail,
  MessageSquareShare,
  PhoneCall,
  ShieldCheck,
  ShieldX,
  Sparkles,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";

type ProblemCard = {
  eyebrow: string;
  title: string;
  painPoints: string[];
  solution: string;
  accent: string;
};

type StepCard = {
  step: string;
  title: string;
  description: string;
  bullets: string[];
};

type FeatureGroup = {
  title: string;
  description: string;
  items: string[];
};

type AudienceCard = {
  title: string;
  copy: string;
  highlight: string;
  icon: typeof Users;
};

const heroPoints = [
  "Collect signed W-9s before vendors cross the $600 threshold.",
  "Automate follow-ups across email, SMS, WhatsApp, and VoIP.",
  "File directly through MyPowerly with no CSV exports or manual mapping.",
];

const heroStats = [
  {
    label: "IRS penalty risk",
    value: "$310",
    note: "per missing or incorrect form",
    icon: AlertTriangle,
  },
  {
    label: "Setup time",
    value: "< 2 min",
    note: "to connect WordPress to MyPowerly",
    icon: Workflow,
  },
  {
    label: "Native advantage",
    value: "Direct IRS",
    note: "via FIRE and IRIS through MyPowerly's TCC",
    icon: ShieldCheck,
  },
];

const problemCards: ProblemCard[] = [
  {
    eyebrow: "Problem 1",
    title: "W-9 collection is manual, slow, and breaks on mobile",
    painPoints: [
      "Store owners email blank IRS PDFs and wait.",
      "Vendors print, sign, scan, and send back blurry attachments.",
      "Missing, unsigned, or illegible forms create audit and filing risk.",
      "Someone still retypes data by hand, causing transcription errors.",
    ],
    solution:
      "MyPowerly sends the request automatically, vendors complete a mobile-friendly web form, sign with MFA-backed e-signature, and get an IRS-compliant PDF plus audit trail without you touching the process.",
    accent: "from-rose-500/15 via-orange-500/10 to-transparent",
  },
  {
    eyebrow: "Problem 2",
    title: "Google Forms, JotForm, and DocuSign stop short of compliance",
    painPoints: [
      "Forms collect data but do not create a proper W-9 record with audit trail.",
      "Signature tools return a PDF attachment that still needs manual re-entry.",
      "Manual re-entry blocks real-time TIN validation and reintroduces errors.",
    ],
    solution:
      "MyPowerly includes its own legally binding signing flow and can also extract fields from third-party signed PDFs, then run automated TIN-matching workflows without manual typing.",
    accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
  {
    eyebrow: "Problem 3",
    title: "CSV-based 1099 tools stop halfway through the job",
    painPoints: [
      "You export a CSV, upload it somewhere else, and map fields manually.",
      "Per-form intermediary fees stack on top of the plugin cost.",
      "A mapping mistake is only discovered after the IRS receives bad data.",
    ],
    solution:
      "W-9 1099 Chaser removes CSV exports entirely. Vendor and payment data sync directly to MyPowerly for preparation and IRS e-filing through its own authorized TCC.",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    eyebrow: "Problem 4",
    title: "Most stores do not know who is about to cross $600 until January",
    painPoints: [
      "A vendor at $580 is one payout away from mandatory reporting.",
      "Single systems miss the full picture when payments are split across tools.",
      "Missing W-9s are discovered only after the reporting obligation already exists.",
    ],
    solution:
      "The plugin monitors thresholds inside WordPress while MyPowerly aggregates totals across connected sources and sends webhook alerts back when the combined amount crosses your warning line.",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    eyebrow: "Problem 5",
    title: "Affiliate relationships can create hidden state tax exposure",
    painPoints: [
      "Click-through nexus rules can create sales tax obligations in states like New York and California.",
      "Most store owners have no visibility into this until a notice arrives.",
    ],
    solution:
      "Automatic nexus warnings are in development. Connected users will receive dashboard alerts when affiliate geography suggests sales tax exposure that deserves review.",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
];

const steps: StepCard[] = [
  {
    step: "01",
    title: "Install the plugin and use the free W-9 tool immediately",
    description:
      "The standalone mode works without an account, API key, or setup ceremony.",
    bullets: [
      "Private Mode is ready inside WordPress admin on activation.",
      "Public Mode and Protected Mode can be published on pages you choose.",
      "The web form is responsive, browser-based, and requires no printer or PDF software.",
    ],
  },
  {
    step: "02",
    title: "Connect to MyPowerly through OAuth 2.0",
    description:
      "Credentials are written back automatically, so there is no key copy-pasting.",
    bullets: [
      "You approve specific data-sharing permissions during the flow.",
      "Installed plugins and source fields are auto-detected.",
      "Standard setup is under two minutes, with optional custom mapping for edge cases.",
    ],
  },
  {
    step: "03",
    title: "Let the automation run from first request to year-end filing",
    description:
      "As soon as data sync completes, compliance gaps are identified and chase sequences begin.",
    bullets: [
      "Existing vendors with missing W-9s are detected immediately.",
      "New vendors trigger an instant webhook and receive a request automatically.",
      "Payments, thresholds, compliance blocks, and filing readiness are tracked continuously.",
    ],
  },
];

const flowBullets = [
  "Vendor joins your store and a webhook fires to MyPowerly.",
  "W-9 request is sent by email immediately, with SMS, WhatsApp, and VoIP available after channel setup.",
  "Vendor completes the form, signs with MFA-backed e-signature, and receives the finished W-9 PDF automatically.",
  "TIN Matching is being rolled out; mismatches trigger an automated correction chase.",
  "Payments are monitored inside WordPress and across connected sources in MyPowerly.",
  "Non-compliant vendors can be blocked before payout.",
  "At year-end, totals are prepared for review and filed directly with the IRS through MyPowerly.",
];

const featureGroups: FeatureGroup[] = [
  {
    title: "Free standalone W-9 tool",
    description:
      "Immediate value for WordPress users who need a clean, mobile-friendly W-9 workflow today.",
    items: [
      "Public, Protected, and Private access modes.",
      "Built-in electronic signature with no third-party signing tool required.",
      "Official IRS W-9 PDF autofill plus a print-to-PDF fallback.",
      "Gutenberg block and shortcode support.",
      "Browser-only processing for the free form with no data stored in WordPress.",
    ],
  },
  {
    title: "Embeddable floating widget",
    description:
      "A React-based widget for WordPress, Shopify, Google Sites, PHP, JSP, .NET, and custom HTML sites.",
    items: [
      "Users enter email or mobile number to receive a magic link.",
      "W-9 completion, MFA-backed signing, and PDF delivery happen in the same flow.",
      "The widget also supports AI chat and live human chat controlled from MyPowerly.",
    ],
  },
  {
    title: "Connected compliance automation",
    description:
      "The paid connected mode removes manual chasing, threshold monitoring, and filing prep work.",
    items: [
      "Automatic W-9 requests for new and existing vendors with gaps.",
      "Third-party e-signature PDF extraction with no retyping.",
      "Legally binding audit trails and MFA on every signing event.",
      "Two-layer threshold enforcement across WordPress and connected platforms.",
      "Payment aggregation across plugins, sites, and Stripe.",
      "Direct IRS e-filing through MyPowerly's own TCC with no CSV intermediary.",
    ],
  },
];

const audienceCards: AudienceCard[] = [
  {
    title: "WooCommerce stores running affiliate programs",
    copy:
      "This is built for stores that realize too late they have paid affiliates over $600 without a W-9 on file. The automation starts before January becomes a scramble.",
    highlight: "Every new affiliate can be chased before you even know they signed up.",
    icon: CircleDollarSign,
  },
  {
    title: "Marketplace owners and contractor-heavy stores",
    copy:
      "Dokan, WC Vendors, WCFM, and any store paying sellers, contractors, or service providers can centralize tax onboarding before payout risk compounds.",
    highlight: "Missing tax data becomes visible in the same operational flow as vendor management.",
    icon: Building2,
  },
  {
    title: "WordPress developers and agencies",
    copy:
      "Agencies need a recommendation that reduces client support burden instead of creating it. Auto-detection, OAuth, and workspace isolation make this easier to deploy across multiple clients.",
    highlight: "White-label support is already part of the connected model.",
    icon: Layers3,
  },
  {
    title: "Bookkeepers, CPAs, and tax professionals",
    copy:
      "Multi-client compliance work benefits from isolated workspaces, centralized oversight, and the option to manage filing site by site or in larger consolidated workflows.",
    highlight: "The software does not replace the tax pro. It removes the repetitive cleanup work.",
    icon: WalletCards,
  },
];

const integrations = {
  tier1: [
    "SliceWP",
    "WP Affiliate Manager",
    "YITH WooCommerce Affiliates",
    "WC Vendors",
    "Dokan Lite / Pro",
  ],
  tier2: [
    "Ultimate Affiliate Pro",
    "Easy Affiliate",
    "Tapfiliate",
    "WP Affiliate Platform",
    "itthinx Affiliates",
    "Affiliate for WooCommerce",
    "WCFM Marketplace",
    "WooCommerce Product Vendors",
    "Easy Digital Downloads Commissions",
    "WPMU DEV Affiliates",
  ],
  tier3Live: ["Stripe", "Google Drive / Google Sheets"],
  tier3Soon: ["Shopify", "PayPal"],
  contacts: [
    "Google Contacts",
    "Outlook / Microsoft 365",
    "Yahoo Contacts",
    "Hotmail",
    "Google Sheets",
    "CSV import",
  ],
};

const securityCards = [
  {
    title: "What never touches WordPress",
    items: [
      "SSNs, EINs, and TINs",
      "Completed W-9 and W-8 data",
      "Bank account details when collected",
    ],
    icon: ShieldX,
  },
  {
    title: "Core protections",
    items: [
      "AES-256 encryption at rest for tax ID numbers",
      "Encrypted WordPress connection credentials",
      "HMAC-SHA256 webhook verification",
      "TLS-encrypted data in transit",
      "Disconnect and delete-request flow",
      "Written breach notification policy",
    ],
    icon: Lock,
  },
  {
    title: "Current status",
    items: [
      "Encrypted daily backups are being enabled across servers.",
      "Exact enforced TLS version is being confirmed with the hosting provider.",
      "SOC 2 certification is not claimed today.",
    ],
    icon: FileCheck2,
  },
];

const iconWrap =
  "flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm";

const sectionTitle =
  "text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl";

const sectionBody =
  "mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-lg";

export default function Tables() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_32%),radial-gradient(circle_at_85%_15%,_rgba(16,185,129,0.14),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_52%,_#f8fafc_100%)]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                The WordPress-native W-9 to 1099 workflow
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Collect W-9s before the penalty risk shows up at year-end.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Every WordPress store paying affiliates, vendors, or contractors
                faces the same legal requirement: get a signed W-9 before you
                issue a 1099. W-9 1099 Chaser automates that workflow from
                inside WordPress, then hands off direct IRS filing through
                MyPowerly with no CSV exports, no manual field mapping, and no
                filing intermediary sitting between your data and the IRS.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-slate-200 bg-white/85 p-4 text-sm leading-6 text-slate-700 shadow-sm backdrop-blur"
                  >
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  See how it works
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore features
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Free to install. Free W-9 tool included. Connect to MyPowerly
                to unlock full automation.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="grid gap-4">
                  {heroStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-500">
                              {stat.label}
                            </p>
                            <p className="mt-2 text-3xl font-semibold text-slate-950">
                              {stat.value}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {stat.note}
                            </p>
                          </div>
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Why this matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-emerald-950">
                    Most store owners discover the W-9 problem in January, after
                    vendors have already been paid and missing forms have become
                    an IRS liability. This page is designed around fixing that
                    exact failure mode.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Problem / Solution
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>
            The specific failures this plugin is designed to remove
          </h2>
          <p className={`mt-5 ${sectionBody} mx-0 max-w-3xl`}>
            This is not generic tax software marketing. These are the exact
            breakdowns WordPress stores run into when they try to manage W-9
            collection, threshold tracking, and 1099 filing with disconnected
            tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {problemCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-80`} />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <div className="mt-6 space-y-3">
                  {card.painPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <AlertTriangle className="mt-1 h-4 w-4 flex-none text-rose-500" />
                      <p className="text-sm leading-7 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    How W-9 1099 Chaser fixes it
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-950">
                    {card.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-slate-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Standalone first, full automation when you connect
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The product is intentionally split into two modes. You get a
              useful W-9 collection tool on day one, then unlock direct sync,
              chasing, monitoring, and filing once MyPowerly is connected.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.step}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="text-sm font-semibold tracking-[0.24em] text-sky-300">
                  {step.step}
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
                <div className="mt-6 space-y-3">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <BadgeCheck className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                      <p className="text-sm leading-7 text-slate-300">{bullet}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  The full automated flow
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  From vendor signup to IRS filing
                </h3>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-slate-300 lg:max-w-3xl">
                {flowBullets.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 flex-none rounded-full bg-sky-300" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Key Features
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>
            Built as a complete compliance workflow, not a form gimmick
          </h2>
          <p className={`mt-5 ${sectionBody}`}>
            The free layer solves collection. The connected layer handles
            chasing, validation, aggregation, and filing operations that
            usually get split across several tools and several teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureGroups.map((group, index) => (
            <article
              key={group.title}
              className={`rounded-[2rem] border p-7 shadow-sm ${
                index === 2
                  ? "border-slate-900 bg-slate-950 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                  index === 2
                    ? "bg-white/10 text-white"
                    : "bg-slate-950 text-white"
                }`}
              >
                {index === 0 && <FileText className="h-5 w-5" />}
                {index === 1 && <MessageSquareShare className="h-5 w-5" />}
                {index === 2 && <ShieldCheck className="h-5 w-5" />}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {group.title}
              </h3>
              <p
                className={`mt-4 text-sm leading-7 ${
                  index === 2 ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {group.description}
              </p>
              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className={`mt-1 h-4 w-4 flex-none ${
                        index === 2 ? "text-emerald-300" : "text-emerald-600"
                      }`}
                    />
                    <p
                      className={`text-sm leading-7 ${
                        index === 2 ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Who This Is For
            </p>
            <h2 className={`mt-4 ${sectionTitle}`}>
              Built for WordPress operators with real payout risk
            </h2>
            <p className={`mt-5 ${sectionBody} mx-0 max-w-3xl`}>
              If your WordPress site pays affiliates, vendors, contractors,
              sellers, or freelancers who may cross $600 in a calendar year,
              this page is about your workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className={iconWrap}>
                    <Icon className="h-5 w-5 text-slate-950" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {card.copy}
                  </p>
                  <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-950">
                    {card.highlight}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="integrations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Integrations
          </p>
          <h2 className={`mt-4 ${sectionTitle}`}>
            Works with the plugins and payment platforms your store already uses
          </h2>
          <p className={`mt-5 ${sectionBody}`}>
            Fully supported integrations are auto-detected and mapped
            automatically. Heuristic detection expands compatibility beyond the
            first-party list, and live payment integrations make threshold
            visibility more useful.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className={iconWrap}>
              <Globe className="h-5 w-5 text-slate-950" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              Tier 1: Direct integration
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Auto-detected on activation with direct field mapping.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {integrations.tier1.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className={iconWrap}>
              <FileSpreadsheet className="h-5 w-5 text-slate-950" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              Tier 2: Heuristic detection
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Broad plugin compatibility through keyword and schema scanning,
              with custom mapping available for non-standard setups.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {integrations.tier2.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-900 bg-slate-950 p-7 text-white shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-sm">
              <Banknote className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              Tier 3: Payment and contact rails
            </h3>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Currently live
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {integrations.tier3Live.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                In development
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {integrations.tier3Soon.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                Contact and spreadsheet sources
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {integrations.contacts.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Security & Data Handling
            </p>
            <h2 className={`mt-4 ${sectionTitle}`}>
              Sensitive tax data is kept away from WordPress itself
            </h2>
            <p className={`mt-5 ${sectionBody} mx-0 max-w-3xl`}>
              This product only earns trust if its security posture is described
              directly. The important claim here is not vague enterprise
              language. It is that the most sensitive tax data does not live in
              your WordPress database in the first place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {securityCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className={iconWrap}>
                    <Icon className="h-5 w-5 text-slate-950" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <div className="mt-6 space-y-3">
                    {card.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />
                        <p className="text-sm leading-7 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              Honest boundary
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-amber-950">
              This plugin itself does not file tax forms or provide tax advice.
              IRS e-filing is handled by the connected MyPowerly service using
              its own authorized TCC. Organizations that require SOC 2 Type II
              today should treat that as an active limitation rather than an
              implied promise.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                Final Call
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Install the free tool now. Connect when you want the full
                compliance engine.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                The immediate win is simple: stop collecting W-9s through
                printer-era workflows. The larger win is operational: get ahead
                of threshold exposure, eliminate manual chase sequences, and
                remove CSV-based filing handoffs from the year-end process.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#problems"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Review the workflow
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#integrations"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See supported platforms
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <Mail className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Automated outreach</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Email is immediate, and SMS, WhatsApp, and VoIP can join
                      the chase sequence after one-time channel setup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <PhoneCall className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Payout protection</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Threshold monitoring and payment freeze logic are designed
                      to catch the risk before a non-compliant payout goes out.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <Users className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Built for operators</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Store owners, agencies, and tax professionals can all work
                      from the same compliance spine instead of stitching
                      together disconnected tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
