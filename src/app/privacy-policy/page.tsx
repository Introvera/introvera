import {
  ArrowRight,
  Cookie,
  Database,
  Globe2,
  Lock,
  Mail,
  RefreshCw,
  ShieldCheck,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

const LAST_UPDATED = "June 14, 2026";

export const metadata = {
  title: "Privacy Policy | Introvera Software Development",
  description:
    "Read the Introvera Privacy Policy. Learn how we collect, use, share, store, and protect your personal data, including data handled through Meta (Facebook & Instagram) platform APIs.",
  alternates: {
    canonical: "https://introvera.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Introvera",
    description:
      "How Introvera collects, uses, and protects your personal data, including data processed through Meta (Facebook & Instagram) APIs.",
    url: "https://introvera.com/privacy-policy",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Introvera Privacy Policy",
      },
    ],
  },
};

type Section = {
  id: string;
  icon: React.ReactNode;
  title: string;
};

const sections: Section[] = [
  { id: "information-we-collect", icon: <Database size={18} />, title: "Information We Collect" },
  { id: "how-we-use", icon: <RefreshCw size={18} />, title: "How We Use Your Information" },
  { id: "meta-platform", icon: <ShieldCheck size={18} />, title: "Meta Platform Data (Facebook & Instagram)" },
  { id: "legal-basis", icon: <Lock size={18} />, title: "Legal Basis for Processing" },
  { id: "data-sharing", icon: <Users size={18} />, title: "How We Share Information" },
  { id: "cookies", icon: <Cookie size={18} />, title: "Cookies & Tracking" },
  { id: "data-retention", icon: <Database size={18} />, title: "Data Retention" },
  { id: "your-rights", icon: <ShieldCheck size={18} />, title: "Your Privacy Rights" },
  { id: "data-deletion", icon: <Trash2 size={18} />, title: "Data Deletion Requests" },
  { id: "security", icon: <Lock size={18} />, title: "Data Security" },
  { id: "international", icon: <Globe2 size={18} />, title: "International Transfers" },
  { id: "children", icon: <Users size={18} />, title: "Children's Privacy" },
  { id: "changes", icon: <RefreshCw size={18} />, title: "Changes to This Policy" },
  { id: "contact", icon: <Mail size={18} />, title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Hero */}
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-foreground/70 text-base md:text-lg font-light leading-relaxed">
            Your privacy matters to us. This policy explains what data Introvera
            collects, why we collect it, how we use and protect it, and the
            rights you have over your personal information.
          </p>
          <p className="mt-6 text-foreground/50 text-sm">
            Last updated: <span className="text-foreground/70">{LAST_UPDATED}</span>
          </p>
        </div>
      </FadeInSection>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Table of contents */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 self-start">
            <div className="bg-foreground/[0.02] border border-foreground/5 rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">
                On This Page
              </h2>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all text-sm"
                  >
                    <span className="text-[var(--color-accent)] opacity-70 group-hover:opacity-100 transition-opacity">
                      {s.icon}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-8 xl:col-span-9 flex flex-col gap-12">
            <FadeInSection>
              <div className="bg-foreground/[0.02] border border-foreground/5 rounded-3xl p-8 lg:p-10 text-foreground/75 leading-[1.8] font-light">
                <p>
                  This Privacy Policy describes how{" "}
                  <span className="text-foreground">Introvera Pvt Ltd</span>{" "}
                  (&quot;Introvera&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;) collects, uses, discloses, and safeguards your
                  information when you visit{" "}
                  <span className="text-foreground">introvera.com</span>, contact us,
                  request a consultation, or use any product, application, or
                  service that links to this policy (collectively, the
                  &quot;Services&quot;). By using our Services, you agree to the
                  practices described here.
                </p>
              </div>
            </FadeInSection>

            <PolicySection
              id="information-we-collect"
              icon={<Database size={18} />}
              title="1. Information We Collect"
            >
              <p>We collect the following categories of information:</p>
              <ul>
                <li>
                  <span className="text-foreground">Information you provide.</span>{" "}
                  Name, email address, phone number, company name, project
                  details, and any message you send through our contact forms,
                  email, or scheduling tools.
                </li>
                <li>
                  <span className="text-foreground">Usage &amp; device data.</span>{" "}
                  IP address, browser type, operating system, referring pages,
                  pages viewed, and timestamps, collected automatically when you
                  browse our site.
                </li>
                <li>
                  <span className="text-foreground">Cookies &amp; analytics.</span>{" "}
                  Identifiers and preferences stored through cookies and similar
                  technologies (see Section&nbsp;6).
                </li>
                <li>
                  <span className="text-foreground">
                    Third-party platform data.
                  </span>{" "}
                  When you connect a social or business account (for example,
                  through Meta&apos;s Facebook or Instagram APIs), we receive
                  only the data you authorize (see Section&nbsp;3).
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              id="how-we-use"
              icon={<RefreshCw size={18} />}
              title="2. How We Use Your Information"
            >
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, maintain, and improve our Services.</li>
                <li>
                  Respond to enquiries, quotes, and consultation requests.
                </li>
                <li>
                  Deliver and manage software, integrations, and support we
                  build for clients.
                </li>
                <li>
                  Analyze usage to improve performance, security, and user
                  experience.
                </li>
                <li>
                  Send service-related communications and, where permitted,
                  marketing you can opt out of at any time.
                </li>
                <li>
                  Comply with legal obligations and enforce our terms.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </PolicySection>

            <PolicySection
              id="meta-platform"
              icon={<ShieldCheck size={18} />}
              title="3. Meta Platform Data (Facebook & Instagram)"
            >
              <p>
                Some of our Services integrate with Meta Platforms, including the
                Facebook Graph API and Instagram API. When you authorize such an
                integration, we access and process platform data strictly in
                accordance with the{" "}
                <Link
                  href="https://developers.facebook.com/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Meta Platform Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="https://developers.facebook.com/devpolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Developer Policies
                </Link>
                .
              </p>
              <ul>
                <li>
                  <span className="text-foreground">Scope.</span> We request only the
                  permissions needed for the feature you use (for example, page
                  details, public profile, messaging, or content you explicitly
                  authorize). You may revoke access at any time in your Meta
                  account settings.
                </li>
                <li>
                  <span className="text-foreground">Use.</span> Meta data is used only
                  to deliver the requested functionality. We do not use it for
                  advertising profiles, nor sell or transfer it to data brokers.
                </li>
                <li>
                  <span className="text-foreground">Storage.</span> Where data must be
                  cached to operate a feature, it is stored securely and kept no
                  longer than necessary, then deleted in line with Section&nbsp;7
                  and Meta&apos;s data-handling requirements.
                </li>
                <li>
                  <span className="text-foreground">Deletion.</span> You can request
                  removal of all Meta-derived data at any time (see
                  Section&nbsp;9). Revoking the app&apos;s permissions on Meta
                  also triggers deletion of the associated data.
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              id="legal-basis"
              icon={<Lock size={18} />}
              title="4. Legal Basis for Processing"
            >
              <p>
                Where the GDPR or similar laws apply, we process personal data on
                one or more of these bases: your consent; performance of a
                contract with you; compliance with a legal obligation; or our
                legitimate interests in operating and improving our Services in a
                way that does not override your rights.
              </p>
            </PolicySection>

            <PolicySection
              id="data-sharing"
              icon={<Users size={18} />}
              title="5. How We Share Information"
            >
              <p>We share information only in these limited situations:</p>
              <ul>
                <li>
                  <span className="text-foreground">Service providers.</span> Vetted
                  vendors (hosting, analytics, email, scheduling) that process
                  data on our behalf under confidentiality obligations.
                </li>
                <li>
                  <span className="text-foreground">Legal &amp; safety.</span> When
                  required by law, regulation, legal process, or to protect
                  rights, property, or safety.
                </li>
                <li>
                  <span className="text-foreground">Business transfers.</span> In
                  connection with a merger, acquisition, or sale of assets, with
                  notice where required.
                </li>
              </ul>
              <p>We never sell your personal data.</p>
            </PolicySection>

            <PolicySection
              id="cookies"
              icon={<Cookie size={18} />}
              title="6. Cookies & Tracking Technologies"
            >
              <p>
                We use cookies and similar technologies to keep the site
                functioning, remember your preferences, and understand
                aggregate usage. You can control or disable cookies through your
                browser settings; some features may not work correctly without
                them.
              </p>
            </PolicySection>

            <PolicySection
              id="data-retention"
              icon={<Database size={18} />}
              title="7. Data Retention"
            >
              <p>
                We retain personal data only as long as necessary for the
                purposes described in this policy, to comply with legal
                obligations, resolve disputes, and enforce agreements. When data
                is no longer needed, we securely delete or anonymize it.
              </p>
            </PolicySection>

            <PolicySection
              id="your-rights"
              icon={<ShieldCheck size={18} />}
              title="8. Your Privacy Rights"
            >
              <p>
                Depending on your location, you may have the right to access,
                correct, update, port, restrict, or delete your personal data,
                and to object to or withdraw consent for certain processing.
                These include rights under the GDPR (EU/UK) and the CCPA/CPRA
                (California). To exercise any right, contact us using
                Section&nbsp;14. We will respond within the timeframe required by
                applicable law.
              </p>
            </PolicySection>

            <PolicySection
              id="data-deletion"
              icon={<Trash2 size={18} />}
              title="9. Data Deletion Requests"
            >
              <p>
                You may request deletion of your personal data, including any
                data obtained through Meta (Facebook/Instagram) integrations, at
                any time:
              </p>
              <ul>
                <li>
                  Email{" "}
                  <Link
                    href="mailto:contact@introvera.com?subject=Data%20Deletion%20Request"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    contact@introvera.com
                  </Link>{" "}
                  with the subject &quot;Data Deletion Request&quot;.
                </li>
                <li>
                  Or remove our app&apos;s access from your Meta account settings,
                  which signals us to delete the associated data.
                </li>
              </ul>
              <p>
                We will verify the request, delete the relevant data, and confirm
                completion, except where retention is required by law.
              </p>
            </PolicySection>

            <PolicySection
              id="security"
              icon={<Lock size={18} />}
              title="10. Data Security"
            >
              <p>
                We apply administrative, technical, and physical safeguards,
                including encryption in transit, access controls, and regular
                reviews, to protect your data. No method of transmission or
                storage is completely secure, but we work continuously to reduce
                risk and respond promptly to incidents.
              </p>
            </PolicySection>

            <PolicySection
              id="international"
              icon={<Globe2 size={18} />}
              title="11. International Data Transfers"
            >
              <p>
                Introvera operates globally and serves clients across multiple
                regions. Your data may be processed in countries other than your
                own. Where required, we use appropriate safeguards, such as
                standard contractual clauses, to protect transferred data.
              </p>
            </PolicySection>

            <PolicySection
              id="children"
              icon={<Users size={18} />}
              title="12. Children's Privacy"
            >
              <p>
                Our Services are not directed to children under 16, and we do not
                knowingly collect their personal data. If you believe a child has
                provided us information, contact us and we will delete it.
              </p>
            </PolicySection>

            <PolicySection
              id="changes"
              icon={<RefreshCw size={18} />}
              title="13. Changes to This Policy"
            >
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be posted on this page with a revised &quot;Last
                updated&quot; date. Your continued use of the Services after
                changes take effect constitutes acceptance of the updated
                policy.
              </p>
            </PolicySection>

            <PolicySection
              id="contact"
              icon={<Mail size={18} />}
              title="14. Contact Us"
            >
              <p>
                If you have questions, requests, or concerns about this policy or
                your data, reach us at:
              </p>
              <div className="mt-4 not-prose text-foreground/80 text-sm leading-relaxed">
                <p className="text-foreground font-medium">Introvera Pvt Ltd</p>
                <p>275/3, New Kandy Road, Biyagama, Sri Lanka</p>
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:contact@introvera.com"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    contact@introvera.com
                  </Link>
                </p>
                <p>Phone: +94 78 364 0 894</p>
              </div>
            </PolicySection>

            {/* CTA */}
            <FadeInSection>
              <div className="bg-foreground/[0.02] border border-foreground/5 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
                    Have a question about your data?
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Our team is happy to help with any privacy enquiry.
                  </p>
                </div>
                <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                  >
                    Contact Us
                    <ArrowRight size={22} />
                  </Link>
                </span>
              </div>
            </FadeInSection>
          </main>
        </div>
      </div>
    </div>
  );
}

function PolicySection({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeInSection>
      <section id={id} className="scroll-mt-28">
        <div className="flex items-center gap-4 mb-5">
          <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            {icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground">
            {title}
          </h2>
        </div>
        <div className="policy-prose text-foreground/75 leading-[1.8] font-light text-base flex flex-col gap-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3 [&_ul]:pl-1 [&_li]:relative [&_li]:pl-6 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:rounded-full [&_li]:before:bg-[var(--color-accent)]/60">
          {children}
        </div>
      </section>
    </FadeInSection>
  );
}
