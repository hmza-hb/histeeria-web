import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Legal terms for using the Histeeria website, application, API, and related services.",
  alternates: {
    canonical: "https://histeeria.com/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These Terms of Service (“Terms”) govern your access to and use of Histeeria’s website, application, API, and related services."
      lastUpdated="June 27, 2026"
    >
      <p>
        By accessing or using Histeeria, you agree to these Terms. If you are using Histeeria on
        behalf of an organization, you represent that you have authority to bind that organization,
        and “you” refers to that organization.
      </p>

      <h2>1. The Service</h2>
      <p>
        Histeeria provides tools to monitor, evaluate, alert on, and improve AI agent behavior,
        including dashboards, evaluation workflows, reporting, alerts, API access, and optional
        public agent profiles. Features may change over time, and some features may be labeled beta
        or preview.
      </p>

      <h2>2. Eligibility and Accounts</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) and able to
        form a binding contract to use the service. You are responsible for:
      </p>
      <ul>
        <li>Providing accurate account information</li>
        <li>Maintaining the confidentiality of your credentials and API keys</li>
        <li>All activity that occurs under your account or workspace</li>
        <li>Promptly notifying us of unauthorized access</li>
      </ul>

      <h2>3. Customer Data and Responsibilities</h2>
      <p>
        You retain ownership of the data, prompts, outputs, agent configurations, and other content
        you submit to Histeeria (“Customer Data”). You grant Histeeria a limited license to host,
        process, transmit, display, and use Customer Data solely to provide and improve the
        service, secure the platform, comply with law, and as otherwise permitted by these Terms or
        a separate written agreement.
      </p>
      <p>You represent and warrant that:</p>
      <ul>
        <li>You have all rights necessary to submit Customer Data to Histeeria</li>
        <li>Your use of the service complies with applicable laws and third-party rights</li>
        <li>
          You will not submit unlawful, infringing, or highly sensitive personal data unless you
          have a lawful basis and appropriate safeguards to do so
        </li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for unlawful, harmful, deceptive, or abusive purposes</li>
        <li>Attempt to gain unauthorized access to systems, accounts, or data</li>
        <li>Interfere with or disrupt the integrity or performance of the service</li>
        <li>Reverse engineer or attempt to extract source code except where permitted by law</li>
        <li>Resell or sublicense the service except as expressly authorized</li>
        <li>Use the service to develop competing evaluation datasets in violation of law or contract</li>
      </ul>
      <p>
        We may investigate and suspend or terminate access for conduct that violates these Terms or
        creates risk for Histeeria, other users, or third parties.
      </p>

      <h2>5. API and Developer Use</h2>
      <p>
        If you use our API, SDK, or integrations, you must comply with documentation, rate limits,
        and security requirements. API keys must be kept confidential. You are responsible for all
        requests made with your keys unless you promptly report compromise.
      </p>

      <h2>6. Public Profiles and Shared Content</h2>
      <p>
        If you enable public agent profiles or share dashboards externally, you are responsible for
        what you choose to publish. Public content may be visible to anyone with the link or on
        public index pages, depending on your settings.
      </p>

      <h2>7. Subscriptions, Billing, and Free Access</h2>
      <p>
        Paid plans, if offered, are billed according to the pricing and checkout terms presented at
        the time of purchase. Fees are non-refundable except where required by law or expressly
        stated otherwise. We may modify pricing or plan features with reasonable notice where
        required.
      </p>
      <p>
        Free or trial access may be limited, modified, or discontinued at any time.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        Histeeria and its licensors own the service, software, branding, documentation, and all
        related intellectual property, except for Customer Data and third-party materials. These
        Terms do not grant you any rights to our trademarks or branding except as needed to use the
        service as intended.
      </p>

      <h2>9. AI, Evaluations, and No Guarantee</h2>
      <p>
        Histeeria uses automated and model-assisted processes to analyze agent behavior. Outputs,
        scores, alerts, and recommendations are provided for operational insight and do not
        constitute legal, compliance, safety, or professional advice.
      </p>
      <p>
        You acknowledge that:
      </p>
      <ul>
        <li>Evaluations and alerts may be incomplete, delayed, or incorrect</li>
        <li>No monitoring system can detect every failure or guarantee agent safety</li>
        <li>You remain responsible for deployment decisions and outcomes in your environment</li>
      </ul>

      <h2>10. Confidentiality</h2>
      <p>
        Each party may receive confidential information from the other. The receiving party will
        use reasonable care to protect it and will not disclose it except as needed to perform
        under these Terms, with service providers under confidentiality obligations, or as required
        by law.
      </p>

      <h2>11. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW,
        HISTEERIA DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
        COMPLETELY SECURE.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, HISTEERIA WILL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
        PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, EVEN IF ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, HISTEERIA’S TOTAL LIABILITY FOR ANY CLAIM ARISING
        OUT OF OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE
        AMOUNT YOU PAID HISTEERIA FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING
        RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (US $100).
      </p>
      <p>
        Some jurisdictions do not allow certain limitations, so some of the above may not apply to
        you.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You will defend, indemnify, and hold harmless Histeeria and its officers, directors,
        employees, and agents from claims, damages, losses, and expenses (including reasonable
        legal fees) arising out of your Customer Data, your use of the service, or your violation
        of these Terms or applicable law.
      </p>

      <h2>14. Suspension and Termination</h2>
      <p>
        You may stop using the service at any time. We may suspend or terminate access if you
        violate these Terms, create security or legal risk, or if we discontinue the service.
        Upon termination, your right to access the service ends, but sections that by nature should
        survive will survive (including ownership, disclaimers, limitations of liability, and
        indemnification).
      </p>

      <h2>15. Changes to the Service or Terms</h2>
      <p>
        We may modify the service or these Terms from time to time. If we make material changes to
        the Terms, we will provide notice by posting the updated Terms and revising the “Last
        updated” date. Continued use after changes become effective constitutes acceptance, except
        where applicable law requires otherwise.
      </p>

      <h2>16. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws of the United States and the State of Delaware,
        excluding conflict-of-law rules. Except where prohibited, disputes will be resolved in the
        state or federal courts located in Delaware, and you consent to their jurisdiction.
      </p>

      <h2>17. Contact</h2>
      <p>
        Questions about these Terms may be sent to:
      </p>
      <p>
        <strong>Histeeria Inc.</strong>
        <br />
        Email: <a href="mailto:legal@histeeria.com">legal@histeeria.com</a>
        <br />
        Website: <a href="https://histeeria.com">https://histeeria.com</a>
      </p>
    </LegalPageLayout>
  );
}
