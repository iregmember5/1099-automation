export default function Tables() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1>W-9 1099 Chaser</h1>
        <h2>Vendor Tax Compliance for WordPress</h2>
        <h3>Complete WordPress.org Plugin Description</h3>
        <p>Compiled May 2026 • All sections ready to paste</p>
        
        <ul>
          <li><strong>Suggested Plugin Title:</strong> W-9 1099 Chaser — Vendor Tax Compliance for WordPress</li>
          <li><strong>Suggested Tags:</strong> w9, 1099, tax compliance, vendor management, affiliate tax</li>
          <li><strong>Vendor Portal:</strong> w9secure.com (W-9 submission + 1099 download)</li>
        </ul>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4">
          <p className="font-bold">⚠️ LINKS TO UPDATE AFTER MIGRATION:</p>
          <p>Replace all wp-1099.com links with 1099automation.com once migration is complete tonight. All placeholders are marked [MIGRATE].</p>
        </div>

        <h2>HERO — Version A (Lead with IRS Pain)</h2>
        <h3>== Description ==</h3>

        <p>Every WordPress store paying affiliates or vendors faces the same legal requirement: collect a signed W-9 before issuing a 1099 at year-end.</p>

        <p>Most store owners discover this in January — when vendors have already been paid, W-9s are missing, and IRS penalties of $310 per form are on the table.</p>

        <p>W-9 1099 Chaser automates the entire compliance workflow from inside WordPress — from the first W-9 request to direct IRS e-filing — with no CSV exports, no manual field mapping, and no third-party filing service standing between your data and the IRS.</p>

        <p>The only WordPress-native plugin with its own IRS-authorized Transmitter Control Code (TCC) and direct integration into both the IRS FIRE System and the IRS IRIS System.</p>

        <p>Free to install. Free W-9 tool included. Connect to MyPowerly to unlock full automation.</p>

        <h2>The Problems This Plugin Solves</h2>

        <h3>Problem 1: W-9 Collection Is Broken for WordPress Store Owners</h3>
        <p>The standard process for collecting W-9s from affiliates, contractors, and vendors is manual, slow, and error-prone — and it fails in ways that cost real money.</p>

        <p>Without this plugin, here is what collecting a W-9 actually looks like:</p>

        <ul>
          <li>You email a blank IRS PDF to your vendor and wait</li>
          <li>Your vendor prints it, fills it by hand, signs it, scans it, and emails back a blurry JPEG — if they respond at all</li>
          <li>Gig workers on mobile phones have no realistic way to complete a PDF form without a printer, PDF software, and a scanner</li>
          <li>You chase non-responders manually, one email at a time</li>
          <li>You receive forms that are incomplete, unsigned, or illegible</li>
          <li>You re-enter data by hand into your filing system — introducing transcription errors that trigger IRS B-Notices</li>
        </ul>

        <p>W-9 1099 Chaser eliminates every one of these steps. The moment a new affiliate or vendor joins your store, a webhook fires and MyPowerly sends a W-9 collection request automatically — via Email, SMS, WhatsApp, or outgoing VoIP call. Your vendor completes a mobile-friendly web form, signs with a legally binding e-signature backed by Multi-Factor Authentication, and receives a timestamped, IRS-compliant W-9 PDF. Your audit trail is created automatically. You touch nothing.</p>

        <p>For existing vendors with missing W-9s, a single sync sends your entire historical vendor list to MyPowerly, which immediately identifies compliance gaps and begins chasing them for you.</p>

        <h3>Problem 2: Google Forms, JotForms, and DocuSign Are Not a W-9 Solution</h3>
        <p>Many store owners believe they have solved the W-9 problem because they built a Google Form or JotForm to collect vendor information, or they send IRS PDFs via DocuSign or HelloSign. They have not solved it. They have postponed it.</p>

        <p>Here is what those tools cannot do:</p>

        <p><strong>Google Forms and JotForms</strong> collect data, but produce no IRS-compliant W-9 PDF, no legally binding e-signature, no timestamped audit trail, and no TIN validation. The data sits in a spreadsheet. When the IRS asks for documentation, a Google Sheet is not an acceptable W-9.</p>

        <p><strong>DocuSign and HelloSign</strong> can capture a signature on an IRS W-9 PDF — but the signed PDF lands in your inbox as an attachment. Someone still has to open it, read it, and manually re-enter the vendor's TIN, name, and address into your filing system. That manual step makes real-time TIN validation impossible and reintroduces exactly the transcription errors you were trying to avoid.</p>

        <p>W-9 1099 Chaser handles this differently. If a vendor sends back a W-9 PDF signed through DocuSign, HelloSign, or any other e-signature tool, MyPowerly automatically extracts all data fields from that PDF — no manual re-entry — and immediately runs TIN Matching against IRS records. If there is a mismatch, the automated chase sequence begins without you being involved.</p>

        <p>Your own built-in e-signature tool — with MFA and legally binding audit trails — is included. But if your vendors insist on using tools they already know, you are still covered.</p>

        <h3>Problem 3: WP1099 and CSV-Based Solutions Stop Halfway</h3>
        <p>WP1099 and similar WordPress plugins do one useful thing: they pull payment totals from your affiliate or vendor plugins and export a CSV. That is where they stop.</p>

        <p>What happens next is entirely your problem:</p>

        <ul>
          <li>Upload the CSV to a third-party 1099 filing service</li>
          <li>Manually map the CSV columns to that service's required fields — because they never match</li>
          <li>Pay that intermediary's per-form filing fees on top of what you already paid for the plugin</li>
          <li>Hope the field mapping was correct before the IRS receives it</li>
        </ul>

        <p>W-9 1099 Chaser eliminates the CSV entirely. Your WordPress vendor data flows directly into MyPowerly through an auto-configuration that takes under two minutes. MyPowerly prepares and files your 1099s directly with the IRS using its own authorized Transmitter Control Code (TCC) — with direct integration into both the IRS FIRE System and the IRS IRIS System.</p>

        <p className="font-bold">There is no CSV. There is no intermediary. There is no manual field mapping. There is no third-party filing service taking a cut. Your data goes from WordPress to the IRS — period.</p>

        <h3>Problem 4: Nobody Knows Which Vendors Are About to Cross the $600 Threshold — Until It Is Too Late</h3>
        <p>The IRS $600 reporting threshold is a moving target all year long. A vendor who has received $580 in cumulative payments is one transaction away from triggering a mandatory 1099 — and most store owners have no visibility into that until January, when it is already too late to collect a missing W-9.</p>

        <p>W-9 1099 Chaser solves this with two independent layers of real-time threshold monitoring:</p>

        <p><strong>Layer 1 — Inside WordPress:</strong> The plugin monitors payouts directly within your affiliate and vendor plugins. When a vendor approaches the warning threshold you set, their row is highlighted inside your affiliate plugin dashboard and a banner alert appears — before the payment is processed.</p>

        <p><strong>Layer 2 — Inside MyPowerly:</strong> MyPowerly tracks cumulative payments across every connected source. If a vendor has received $400 through AffiliateWP and $250 through Stripe, MyPowerly recognizes the combined $650 total and fires a webhook alert back to your WordPress plugin — triggering the in-dashboard warning even though no single platform saw the threshold being crossed.</p>

        <p>Both layers monitor in real time as transactions occur, and can also run on a schedule you configure. No other WordPress plugin or 1099 tool offers this two-layer, cross-platform threshold enforcement.</p>

        <h3>Problem 5: Your Affiliates May Be Creating Sales Tax Liability You Do Not Know About</h3>
        <p className="italic">[COMING SOON — Currently in Development]</p>

        <p>States like New York and California have click-through nexus laws: if your affiliates are located in certain states and driving sales to your store, you may already have sales tax obligations in those states — even if you have never set foot there.</p>

        <p>Most WordPress store owners have no idea this exposure exists until they receive a state tax authority notice.</p>

        <p>W-9 1099 Chaser is currently developing automatic nexus monitoring: when your affiliate or vendor data indicates relationships with affiliates in states with click-through nexus rules, your dashboard will display a warning — alerting you to review your sales tax obligations before the liability compounds.</p>

        <p>Store owners who connect to MyPowerly now will receive this feature automatically when it ships.</p>

        <h2>How It Works</h2>
        <p>W-9 1099 Chaser works in two modes: standalone and connected. You get immediate value from the moment of installation — and full automation the moment you connect.</p>

        <h3>Step 1: Install and Get Immediate Value (2 Minutes)</h3>
        <p>Install the plugin from WordPress.org and activate it. No configuration required to get started.</p>

        <p>The moment activation is complete:</p>

        <ul>
          <li>The W-9 webform is immediately available inside your WordPress admin dashboard — ready to use in Private Mode out of the box</li>
          <li>Full setup instructions are provided inside the dashboard for making the webform available in Public Mode or Protected Mode on pages of your choosing</li>
          <li>No account. No API key. No configuration required for the standalone tool to work.</li>
        </ul>

        <h3>Step 2: Connect to MyPowerly — Automated Setup in Under 2 Minutes</h3>
        <p>When you are ready for full automation, click the Connect button inside the plugin dashboard.</p>

        <h4>Secure OAuth 2.0 Authentication</h4>
        <p>You are redirected via OAuth 2.0 to MyPowerly's secure authorization endpoint. If you do not yet have a MyPowerly account, you create one here. Upon successful authorization, credentials are automatically written back to your WordPress installation via API call — no manual copy-pasting of API keys or secret tokens.</p>

        <h4>Granular Permission Control</h4>
        <p>During the OAuth flow you are presented with 6 to 7 specific data-sharing permissions — for example: installed plugins, affiliate and vendor records, payment and earnings data, site profile information. You choose exactly which data types to share. Nothing is transmitted without your explicit permission for each category.</p>

        <h4>Automatic Plugin Detection and Field Mapping</h4>
        <p>Once authorized, MyPowerly automatically detects which affiliate plugins, vendor plugins, and marketplace plugins are installed on your WordPress site. Data fields are mapped automatically. No manual field mapping. No CSV column matching. A custom mapping option is available for advanced setups and takes approximately 15 minutes.</p>

        <h3>Step 3: Your First Automation Triggers Immediately</h3>
        <p>The moment your data syncs to MyPowerly, the system goes to work without any further action from you.</p>

        <ul>
          <li><strong>Immediate Gap Detection</strong> — MyPowerly automatically scans your entire vendor and affiliate list and identifies every contractor with missing tax information. A compliance gap report appears in your MyPowerly dashboard.</li>
          <li><strong>First W-9 Requests Go Out Automatically</strong> — With a single permission grant, MyPowerly begins sending W-9 collection requests to every vendor with a compliance gap via email. SMS, WhatsApp, and VoIP require a brief one-time channel setup.</li>
          <li><strong>New Affiliates Handled Without You</strong> — Every new affiliate or vendor who joins your store through any supported plugin automatically triggers a webhook to MyPowerly. A W-9 request is sent immediately — before you are even aware they signed up.</li>
        </ul>

        <h3>The Full Automated Flow — From New Vendor to IRS Filing</h3>

        <ol>
          <li><strong>Vendor joins your store</strong> — Webhook fires instantly to MyPowerly</li>
          <li><strong>W-9 request sent automatically</strong> — Via email immediately; SMS, WhatsApp, and VoIP with one-time channel setup</li>
          <li><strong>Vendor completes W-9</strong> — Mobile-friendly webform, MFA-verified e-signature, official IRS W-9 PDF generated and delivered automatically. Or: vendor submits a PDF signed via DocuSign or HelloSign — MyPowerly extracts all fields automatically</li>
          <li><strong>TIN Matching runs automatically</strong> — [SHIPPING SOON] Tax ID validated against IRS records; mismatch triggers automated correction chase</li>
          <li><strong>Payments monitored in real time</strong> — Layer 1: plugin highlights threshold-approaching vendors inside WordPress. Layer 2: MyPowerly aggregates across all connected sources and fires webhook alert if combined total approaches threshold</li>
          <li><strong>Payment freeze if non-compliant</strong> — Payout blocked automatically until W-9 is on file</li>
          <li><strong>Year-end: 1099 prepared automatically</strong> — All payment sources aggregated into one accurate total per vendor; store owner reviews and approves totals</li>
          <li><strong>1099 filed directly with the IRS</strong> — MyPowerly e-files using its own authorized TCC via IRS FIRE System and IRS IRIS System. No CSV. No intermediary. No third-party filing service.</li>
        </ol>

        <h2>Key Features</h2>

        <h3>Free: Standalone W-9 Tool (No Account Needed)</h3>

        <h4>Three Access Modes — Deploy the W-9 Form Your Way</h4>
        <ul>
          <li><strong>Public Mode</strong> — The W-9 webform is freely available to any visitor. They can fill it out, sign it, and download their completed W-9 PDF instantly. No login required.</li>
          <li><strong>Protected Mode</strong> — Access is restricted to recipients who hold your PIN or secret key. Ideal if you only work with approved contractors or affiliates.</li>
          <li><strong>Private Mode</strong> — For internal use only. Only the store owner can access the form — perfect for generating your own W-9s without making anything public.</li>
        </ul>

        <h4>Free Tool Features</h4>
        <ul>
          <li>Electronic signature — built-in, legally binding, no third-party tool required</li>
          <li>Two PDF output options: Official IRS W-9 PDF (auto-filled from webform entries) + Print-to-PDF backup</li>
          <li>Gutenberg block — embed natively in the block editor</li>
          <li>Shortcode support — [w91099ch_w9_form] works in any page builder or classic editor</li>
          <li>Responsive design — mobile-friendly; works on any device with no printer or PDF software needed</li>
          <li>Frontend and backend display — accessible from admin panel and public-facing pages</li>
          <li>No data stored in WordPress — form processed entirely in the browser</li>
        </ul>

        <h3>Free: Embeddable W-9 Collection Widget (Works on Any Website)</h3>
        <p>A standalone floating widget (built in React.js) that works on any website — WordPress, Shopify, Google Sites, PHP, JSP, .NET, or any custom HTML site. Appears as a floating icon in the corner of your choosing.</p>

        <h4>How the Widget Flow Works</h4>
        <ol>
          <li>Visitor clicks the widget icon on your website</li>
          <li>Prompted to enter their email address or mobile number</li>
          <li>Magic link sent instantly via email or SMS</li>
          <li>Visitor clicks the link, completes W-9 webform, signs with MFA-verified e-signature</li>
          <li>Upon submission: completed official IRS W-9 PDF delivered automatically</li>
        </ol>

        <p>The same widget also enables AI-powered chat and live human chat — all controlled from your MyPowerly dashboard.</p>

        <h3>Connected: Full Vendor Compliance Automation</h3>

        <h4>Automatic W-9 Collection</h4>
        <ul>
          <li>New affiliate or vendor joins your store — webhook fires and W-9 request sent automatically</li>
          <li>Single sync identifies all existing vendors with missing W-9s and begins chasing immediately</li>
          <li>Multi-channel delivery: Email, SMS, WhatsApp, and outgoing VoIP calls — all automated</li>
          <li>Smart reminder sequences chase non-responsive vendors until they comply</li>
        </ul>

        <h4>Third-Party E-Signature PDF Extraction</h4>
        <p>If a vendor returns a W-9 signed via DocuSign, HelloSign, or any other e-signature platform, MyPowerly automatically extracts all data fields from that signed PDF — no manual re-entry. TIN Matching runs automatically on extracted data.</p>

        <h4>Built-In E-Signature with MFA</h4>
        <ul>
          <li>Legally binding, timestamped e-signatures</li>
          <li>Multi-Factor Authentication (MFA) on every signing event</li>
          <li>Full audit trail — compliant and court-admissible</li>
          <li>No dependency on DocuSign, HelloSign, or any paid third-party signature service</li>
        </ul>

        <h4>TIN Matching [Shipping Soon]</h4>
        <ul>
          <li>Automatic Tax ID validation against IRS records on every W-9 received</li>
          <li>Mismatches trigger automated correction chase sequence</li>
          <li>Eliminates the most common cause of IRS B-Notices</li>
        </ul>

        <h4>Two-Layer $600 Threshold Monitoring</h4>
        <ul>
          <li><strong>Layer 1 — Inside WordPress:</strong> Plugin monitors payouts within your affiliate/vendor plugins. Vendor row highlighted + banner alert fires before payment is processed.</li>
          <li><strong>Layer 2 — Inside MyPowerly:</strong> Tracks cumulative payments across all connected sources. Fires webhook alert back to WordPress plugin when combined total approaches threshold. Currently live for Stripe integration.</li>
          <li>Monitors in real time and on configurable schedule</li>
          <li>Both layers operate independently — if one misses it, the other catches it</li>
        </ul>

        <h4>Payment Source Aggregation</h4>
        <ul>
          <li>Combines vendor payments from multiple WordPress affiliate plugins, multiple WordPress sites, and Stripe into one accurate total per vendor</li>
          <li>Shopify and PayPal aggregation currently in development</li>
          <li>Store owner reviews and approves aggregated totals before any IRS submission</li>
        </ul>

        <h4>Direct IRS E-Filing — No Intermediary</h4>
        <ul>
          <li>Files all supported federal 1099 form types directly with the IRS using MyPowerly's own authorized TCC</li>
          <li>Direct integration with both IRS FIRE System and IRS IRIS System</li>
          <li>No CSV. No third-party filing service. No manual field mapping.</li>
          <li>State-level electronic filing in development — estimated 4 to 6 weeks</li>
        </ul>

        <h4>Compliance Dashboard</h4>
        <ul>
          <li>Real-time status: see every vendor's W-9 status — signed, pending, overdue, flagged</li>
          <li>Threshold alerts highlighted directly inside your affiliate plugin dashboard</li>
          <li>Payment freeze for non-compliant vendors — stops a payout before it goes through</li>
        </ul>

        <h4>Google Sheets Sync</h4>
        <ul>
          <li>Export full vendor list, W-9 status, and payment data to your own Google Drive in real time</li>
          <li>You own and control the data — revoke access at any time</li>
        </ul>

        <h4>White-Label Vendor Portal</h4>
        <ul>
          <li>Your logo, your brand colors, your domain</li>
          <li>Invite your accountant or bookkeeper to manage filings under their own login</li>
          <li>Full white-label capability for agencies managing multiple client sites</li>
          <li>Vendors and contractors always submit W-9s and download 1099s at w9secure.com — a secure, neutral compliance portal</li>
        </ul>

        <h4>Nexus / Sales Tax Liability Warnings [Coming Soon]</h4>
        <ul>
          <li>Automatic warnings when affiliate data indicates nexus exposure in states like New York and California</li>
          <li>State-by-state nexus matrix covering all US states and territories — in active development</li>
          <li>All connected users receive this feature automatically when it ships</li>
        </ul>

        <h2>Who This Is For</h2>
        <p>W-9 1099 Chaser was built for three types of WordPress users.</p>

        <h3>WooCommerce Store Owners Running Affiliate Programs</h3>
        <p>You have built an affiliate program using AffiliateWP, SliceWP, YITH, or a similar plugin. Everything runs smoothly — until Q4.</p>

        <p>Suddenly you realize you have paid dozens of affiliates over $600 and you have no W-9 on file for most of them. You start emailing blank IRS PDFs. Half go unanswered. The ones that come back are handwritten, scanned, and illegible. Your accountant charges extra for the chaos. You file late. You hope nothing triggers a penalty.</p>

        <p>W-9 1099 Chaser ends that cycle permanently. From the moment you connect, every new affiliate receives an automatic W-9 request before you even know they exist. Every existing affiliate with a missing W-9 gets chased automatically across email, SMS, WhatsApp, and VoIP. When year-end arrives, your 1099s are filed directly with the IRS from inside MyPowerly — without you re-entering a single data field.</p>

        <p className="font-bold">January is no longer a scramble. It is a confirmation.</p>

        <p>Also fully supported: multi-vendor marketplace owners (Dokan, WC Vendors, WCFM), stores paying independent contractors directly, and any WordPress site making payments over $600 to any individual or business.</p>

        <h3>WordPress Developers and Agency Tech Teams</h3>
        <p>You build and maintain WooCommerce stores for clients. You are the person your clients call when tax season reveals a compliance gap. You are also the person who gets blamed when a plugin recommendation creates more work than it saves.</p>

        <p>The OAuth 2.0 connection flow handles credential management automatically — no manual API key copy-pasting. Auto-detection identifies which affiliate and vendor plugins are installed and maps their data fields automatically. Standard setup takes under 2 minutes.</p>

        <p>For managing multiple clients, MyPowerly's workspace model gives you a dedicated workspace for each client site — all accessible from one dashboard. Each workspace is fully isolated. White-labeling is fully implemented — your logo, your brand, your domain.</p>

        <p className="font-bold">This plugin is the right recommendation when your client asks: "How do we handle 1099s for our affiliates?"</p>

        <h3>Bookkeepers, CPAs, and Tax Professionals</h3>
        <p>You manage tax compliance for multiple business clients. Every January you face the same problem across every client: missing W-9s, incorrect TINs, payment totals spread across multiple platforms, and vendors who stopped responding in October.</p>

        <p>MyPowerly's workspace model was built for exactly this workflow. Each client gets their own isolated workspace inside your MyPowerly account. You manage all of them from a single dashboard.</p>

        <p>When year-end arrives, you have two options: file per client independently from their individual workspace, or aggregate and merge data from multiple client workspaces into a single consolidated IRS submission — reducing filing overhead across your entire book of business.</p>

        <p className="font-bold">W-9 1099 Chaser does not replace you. It makes you the most efficient tax professional your clients have ever worked with.</p>

        <h3>Not Sure Which Category You Fall Into?</h3>
        <p>If your WordPress site pays anyone — affiliates, vendors, contractors, sellers, or freelancers — and those payments could exceed $600 in a calendar year, this plugin was built for your situation. Install the free standalone W-9 tool today and connect to MyPowerly when you are ready for full automation. No commitment required to get started.</p>

        <h2>Works With</h2>
        <p>W-9 1099 Chaser connects to the affiliate plugins, marketplace plugins, and payment platforms your WordPress store already uses — with no manual field mapping required for fully supported integrations.</p>

        <h3>Tier 1 — Full Direct Integration</h3>
        <p>Auto-detected on activation. Field mapping automatic. No manual configuration required.</p>

        <h4>Affiliate Marketing Plugins</h4>
        <ul>
          <li><strong>SliceWP</strong> — Auto-detected by plugin slug. Affiliate records mapped automatically: ID, name, email, status.</li>
          <li><strong>WP Affiliate Manager</strong> — Auto-detected by plugin slug. Maps affiliate ID, first name, last name, email, company name, status. Active, approved, and confirmed affiliates included.</li>
          <li><strong>YITH WooCommerce Affiliates</strong> — Auto-detected by plugin file and class. Both free and premium versions supported.</li>
          <li><strong>AffiliateWP</strong> — Direct integration in active development. Currently detected via heuristic engine. Dedicated integration shipping soon — the most installed affiliate plugin on WordPress deserves first-class support.</li>
        </ul>

        <h4>Multi-Vendor Marketplace Plugins</h4>
        <ul>
          <li><strong>WC Vendors</strong> — Auto-detected by plugin slug. Vendor records pulled from WordPress users with vendor role.</li>
          <li><strong>Dokan (Lite and Pro)</strong> — Auto-detected by plugin slug. Vendor records pulled via Dokan's own API.</li>
        </ul>

        <h3>Tier 2 — Heuristic Detection (Broad Compatibility)</h3>
        <p>An intelligent scanner detects affiliate and vendor plugins not in Tier 1 by keyword matching and database scanning. Field mapping is best-effort — standard configurations work automatically; non-standard schemas may require the 15-minute custom mapping option.</p>

        <p>Commonly recognized plugins include:</p>
        <ul>
          <li>Ultimate Affiliate Pro</li>
          <li>Easy Affiliate</li>
          <li>Tapfiliate</li>
          <li>WP Affiliate Platform</li>
          <li>itthinx Affiliates</li>
          <li>Affiliate for WooCommerce</li>
          <li>WCFM Marketplace</li>
          <li>WooCommerce Product Vendors</li>
          <li>Easy Digital Downloads Commissions</li>
          <li>WPMU DEV Affiliates</li>
        </ul>

        <h3>Tier 3 — Payment Platform Integrations</h3>

        <h4>Currently Live</h4>
        <ul>
          <li><strong>Stripe</strong> — Real-time payment data aggregation. Vendor payments through Stripe combined with WordPress plugin payouts automatically.</li>
          <li><strong>Google Drive / Google Sheets</strong> — Real-time sync of vendor records, W-9 status, and payment data to your own Google Drive.</li>
        </ul>

        <h4>Currently in Development</h4>
        <ul>
          <li><strong>Shopify</strong> — Cross-platform vendor payment aggregation. Coming soon.</li>
          <li><strong>PayPal</strong> — Payment aggregation for vendors paid via PayPal. Coming soon.</li>
        </ul>

        <h3>Free Embeddable Widget — Works on Any Platform</h3>
        <p>Built in React.js. Tested and confirmed on:</p>
        <ul>
          <li>WordPress (all versions)</li>
          <li>Shopify</li>
          <li>Google Sites</li>
          <li>PHP-based websites</li>
          <li>JSP applications</li>
          <li>.NET applications</li>
          <li>Any custom HTML website</li>
        </ul>

        <h3>Contact and Calendar Integrations</h3>
        <p>Google Contacts • Outlook / Microsoft 365 • Yahoo Contacts • Hotmail • Google Sheets • CSV import</p>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-bold">Plugin not listed?</p>
          <p>Install the plugin, connect to MyPowerly, and run the auto-detection scan. Contact support@mypowerly.com with your plugin name to request a direct integration.</p>
        </div>

        <h2>Security & Data Handling</h2>
        <p>Compliance software that handles Social Security Numbers, Employer Identification Numbers, and IRS filing data is only as trustworthy as its security posture. Here is exactly how MyPowerly protects your data — with no vague claims and no overclaiming.</p>

        <h3>What Data Never Touches WordPress</h3>
        <p>The following information is submitted directly to MyPowerly's secured backend and is never stored in, passed through, or visible to your WordPress installation or WordPress database:</p>

        <ul>
          <li>Social Security Numbers (SSN)</li>
          <li>Employer Identification Numbers (EIN)</li>
          <li>Taxpayer Identification Numbers (TIN)</li>
          <li>Completed W-9 and W-8 form data</li>
          <li>Bank account details (when collected)</li>
        </ul>

        <p className="font-bold">If your WordPress database were compromised, none of this data would be exposed — because none of it is there.</p>

        <h3>How MyPowerly Protects Your Data</h3>

        <h4>1. Tax ID Numbers Are Encrypted at Rest</h4>
        <p>Every SSN, EIN, and TIN stored in MyPowerly — across W-9 forms, W-8 forms, 1099 filing records, client records, user profiles, and IRS transmission records — is encrypted before it is saved to the database. Even if someone copied the database, they would see scrambled, unreadable characters — not actual tax ID numbers.</p>

        <p>Encryption standard: AES-256 — the same standard used by banks and the US federal government.</p>

        <h4>2. WordPress Connection Credentials Are Encrypted</h4>
        <p>When you connect your WordPress site to MyPowerly via OAuth 2.0, the connection credentials are stored encrypted, not as plain text. Even if someone gained read access to the MyPowerly database, those credentials could not be used to access your WordPress site.</p>

        <h4>3. Webhook Messages Are Verified Before Processing</h4>
        <p>When your WordPress site sends a message to MyPowerly, MyPowerly verifies that the message genuinely came from your WordPress site before acting on it. Each message is signed with a secret code known only to your WordPress site and MyPowerly. If the signature does not match exactly, the message is rejected immediately.</p>

        <p>Verification standard: HMAC-SHA256 — the same webhook verification standard used by Stripe, GitHub, and Shopify.</p>

        <h4>4. You Can Disconnect at Any Time and Request Data Deletion</h4>
        <p>Any store owner can disconnect their WordPress site from MyPowerly at any time. The disconnect process immediately revokes the connection credentials and timestamps the revocation event. When disconnecting, store owners can request permanent deletion of all synced data from MyPowerly's servers. You are not locked in, and you are not leaving credentials active after you stop using the service.</p>

        <h4>5. Data in Transit Is Encrypted</h4>
        <p>All data moving between your browser, your WordPress site, and MyPowerly's servers is encrypted in transit using TLS. MyPowerly is confirming the exact TLS version enforced on all servers with the hosting provider and will publish the confirmed specification when received.</p>

        <h4>6. Breach Notification Policy</h4>
        <p>MyPowerly has a written breach notification policy covering: what constitutes a data security incident, who is notified, and the timeframe for notification.</p>

        <p>Policy link: <a href="https://www.1099automation.com/breach-notification" className="text-blue-600 underline">https://www.1099automation.com/breach-notification</a> [MIGRATE — confirm this page is live before publishing]</p>

        <h3>What Is Still in Progress</h3>
        <ul>
          <li><strong>Automated encrypted daily backups</strong> — Being enabled on all servers as an operational priority. Expected completion within the current operational cycle.</li>
          <li><strong>TLS version confirmation</strong> — MyPowerly is obtaining written confirmation of the exact TLS version enforced at the server level from the hosting provider. Will be published when confirmed.</li>
        </ul>

        <h3>What We Do Not Yet Have</h3>
        <h4>SOC 2 Certification</h4>
        <p>MyPowerly is a bootstrapped company. SOC 2 Type I certification requires significant investment and is on our roadmap as revenue scales. We will not claim it until we have it.</p>

        <p>What we do have is the foundational security architecture that SOC 2 audits evaluate: encryption at rest and in transit, access controls, webhook verification, audit trails, and a breach notification policy.</p>

        <p>For store owners and agencies who require SOC 2 today, we would rather tell you honestly than oversell. For those comfortable with our current posture who want the competitive advantage of a WordPress-native compliance platform now — we would like to earn your trust and grow with you.</p>

        <h3>Right For You Today vs. Not Right For You Today</h3>

        <h4>Right for you today:</h4>
        <ul>
          <li>WooCommerce store owners with 10 to 500 vendors</li>
          <li>Affiliate program operators at any scale</li>
          <li>Bookkeepers and CPAs managing SMB clients</li>
          <li>WordPress agencies white-labeling compliance tools for their clients</li>
          <li>Early adopters who want the WordPress-native advantage now</li>
        </ul>

        <h4>May not be right for you today:</h4>
        <ul>
          <li>Enterprise procurement teams requiring SOC 2 Type II certification</li>
          <li>Organizations with contractual obligations to use only SOC 2 certified vendors</li>
          <li>Fortune 500 finance departments — this platform is built for WordPress operators, not enterprise ERP integrations</li>
        </ul>

        <h3>Privacy Policy and Terms</h3>
        <p className="italic">All links below use 1099automation.com. Confirm pages are live after tonight's migration before publishing. [MIGRATE]</p>

        <ul>
          <li>Privacy Policy: <a href="https://www.1099automation.com/privacy-policy" className="text-blue-600 underline">https://www.1099automation.com/privacy-policy</a></li>
          <li>Terms of Service: <a href="https://www.1099automation.com/terms" className="text-blue-600 underline">https://www.1099automation.com/terms</a></li>
          <li>Breach Notification Policy: <a href="https://www.1099automation.com/breach-notification" className="text-blue-600 underline">https://www.1099automation.com/breach-notification</a></li>
          <li>Partner Program: <a href="https://www.1099automation.com/partners" className="text-blue-600 underline">https://www.1099automation.com/partners</a></li>
        </ul>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4">
          <p className="font-bold">⚠️ Important Disclaimer</p>
          <p>This plugin does not file tax forms, submit 1099s to the IRS, or provide tax advice. All 1099 electronic filing is handled exclusively by the connected MyPowerly service using its own IRS-authorized Transmitter Control Code (TCC). Please consult your own legal and tax counsel for advice specific to your situation.</p>
        </div>

        <h2 className="text-red-600">Domain Architecture Reference (Internal — Do Not Publish)</h2>
        <p className="italic text-red-600">This page is for your team only. Remove before pasting to WordPress.org.</p>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Domain</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Audience</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1099automation.com</td>
                <td className="border border-gray-300 px-4 py-2">Buyer portal, pricing, dashboard, signup</td>
                <td className="border border-gray-300 px-4 py-2">Store owners, agencies, CPAs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">w9secure.com</td>
                <td className="border border-gray-300 px-4 py-2">Vendor portal — W-9 submission AND 1099 download</td>
                <td className="border border-gray-300 px-4 py-2">All vendors, affiliates, contractors</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">mypowerly.com</td>
                <td className="border border-gray-300 px-4 py-2">Master SaaS backbone — not buyer-facing</td>
                <td className="border border-gray-300 px-4 py-2">Technical / backend only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1099taxcomply.com</td>
                <td className="border border-gray-300 px-4 py-2">Traffic capture — redirect to 1099automation.com</td>
                <td className="border border-gray-300 px-4 py-2">SEO / organic search</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1099-partner.com</td>
                <td className="border border-gray-300 px-4 py-2">Partner / referral program</td>
                <td className="border border-gray-300 px-4 py-2">WordPress developers, agencies</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">wp-1099.com</td>
                <td className="border border-gray-300 px-4 py-2">Old domain — redirect to 1099automation.com</td>
                <td className="border border-gray-300 px-4 py-2">Preserve link equity</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">signsimba.com</td>
                <td className="border border-gray-300 px-4 py-2">Simba brand — e-signature product</td>
                <td className="border border-gray-300 px-4 py-2">MyPowerly sub-brand</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">plansimba.com</td>
                <td className="border border-gray-300 px-4 py-2">Simba brand — pricing / plans product</td>
                <td className="border border-gray-300 px-4 py-2">MyPowerly sub-brand</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">partnersimba.com</td>
                <td className="border border-gray-300 px-4 py-2">Simba brand — partner program</td>
                <td className="border border-gray-300 px-4 py-2">MyPowerly sub-brand</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">w9fire.com, w9hunter.com, followupcop.com, w9irs.com, 1099datamapper.com, w9datamapper.com</td>
                <td className="border border-gray-300 px-4 py-2">SEO blog content — backlinks to 1099automation.com</td>
                <td className="border border-gray-300 px-4 py-2">Organic search traffic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tax Professional White-Label Architecture</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">User</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Option A (Custom Domain)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Option B (Subdomain)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tax professional dashboard</td>
                <td className="border border-gray-300 px-4 py-2">smithtaxservices.com/dashboard</td>
                <td className="border border-gray-300 px-4 py-2">smithtax.1099automation.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">SMB client portal</td>
                <td className="border border-gray-300 px-4 py-2">smithtaxservices.com/clients</td>
                <td className="border border-gray-300 px-4 py-2">smithtax.1099automation.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Vendors / contractors</td>
                <td className="border border-gray-300 px-4 py-2">w9secure.com (always)</td>
                <td className="border border-gray-300 px-4 py-2">w9secure.com (always)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-bold">Key principle:</p>
        <p>Vendor W-9 submission and 1099 download always happen at w9secure.com — regardless of which option the tax professional chooses. This keeps sensitive data collection centralized, secure, and consistently branded.</p>

        <h2 className="text-red-600">Pre-Publication Checklist (Internal — Do Not Publish)</h2>
        <p className="italic text-red-600">Complete all items before pasting the description to WordPress.org.</p>

        <ul className="list-none">
          <li>☐ Migration complete: wp-1099.com → 1099automation.com redirects live</li>
          <li>☐ Privacy Policy live at: https://www.1099automation.com/privacy-policy</li>
          <li>☐ Terms of Service live at: https://www.1099automation.com/terms</li>
          <li>☐ Breach Notification Policy written and live at: https://www.1099automation.com/breach-notification</li>
          <li>☐ Pricing page live at: https://www.1099automation.com (confirm Growth/Business/Agency plans displayed correctly)</li>
          <li>☐ Partner program page live at: https://www.1099automation.com/partners</li>
          <li>☐ w9secure.com live and functional as vendor portal</li>
          <li>☐ HMAC-SHA256 webhook verification implemented and tested (replaces old inaccurate claim)</li>
          <li>☐ AES-256 encryption on SSN/EIN fields confirmed with technical lead</li>
          <li>☐ API token encryption in WordPress confirmed with technical lead</li>
          <li>☐ Disconnect / data deletion endpoint live and tested</li>
          <li>☐ Automated encrypted daily backups enabled on all four servers</li>
          <li>☐ TLS version confirmed in writing from hosting provider</li>
          <li>☐ Plugin title updated on WordPress.org to: W-9 1099 Chaser — Vendor Tax Compliance for WordPress</li>
          <li>☐ Plugin tags updated to: w9, 1099, tax compliance, vendor management, affiliate tax</li>
          <li>☐ Decide A/B test: launch with Hero Version A (pain-led) or Version B (outcome-led)</li>
          <li>☐ Remove Domain Architecture Reference and Pre-Publication Checklist pages before pasting</li>
          <li>☐ Request 3+ honest reviews from beta users, colleagues, or early testers after publishing</li>
        </ul>

      </div>
    </div>
  );
}
