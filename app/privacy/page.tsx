import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/landing/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Histeeria",
  description:
    "How Histeeria collects, uses, stores, and protects information when you use histeeria.com and the Histeeria platform.",
  alternates: {
    canonical: "https://histeeria.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This policy explains how Histeeria Inc. (“Histeeria”, “we”, “us”) handles information when you visit histeeria.com, use app.histeeria.com, or interact with our services."
      lastUpdated="June 27, 2026"
    >
      <p>
        Histeeria provides a platform for monitoring, evaluating, alerting on, and improving AI
        agent behavior. We take privacy seriously, especially because our customers may send agent
        traces, prompts, outputs, and related operational data into the platform.
      </p>

      <h2>1. Scope</h2>
      <p>This Privacy Policy applies to:</p>
      <ul>
        <li>Our marketing website at <strong>histeeria.com</strong></li>
        <li>Our web application at <strong>app.histeeria.com</strong></li>
        <li>Our API and related services at <strong>api.histeeria.com</strong></li>
        <li>Documentation, support, and communications related to the above</li>
      </ul>
      <p>
        If you use Histeeria on behalf of an organization, your organization may have its own
        policies governing how it uses the platform and the data it submits.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Account and profile information</h3>
      <p>When you create or use an account, we may collect:</p>
      <ul>
        <li>Name and email address</li>
        <li>Profile photo (if you choose to upload one)</li>
        <li>Authentication information from sign-in providers such as Google or GitHub</li>
        <li>Workspace and organization details you provide during onboarding</li>
      </ul>

      <h3>2.2 Agent and platform data</h3>
      <p>
        When you connect agents or send data to Histeeria, we may process information you or your
        systems submit, including:
      </p>
      <ul>
        <li>Agent identifiers, session metadata, and configuration details</li>
        <li>Inputs, outputs, reasoning traces, tool calls, and evaluation results</li>
        <li>Alerts, incidents, scores, reports, and audit-related records</li>
        <li>API keys, usage timestamps, and operational logs necessary to run the service</li>
      </ul>
      <p>
        By default, Histeeria is designed to <strong>redact system prompts</strong> before storage
        in monitoring flows unless you explicitly enable full system prompt storage in your
        workspace settings. You are responsible for reviewing what data you choose to send to the
        platform.
      </p>

      <h3>2.3 Information collected automatically</h3>
      <p>We may automatically collect limited technical information, such as:</p>
      <ul>
        <li>IP address, browser type, device type, and operating system</li>
        <li>Pages viewed, referring URLs, and approximate request timestamps</li>
        <li>Standard server, security, and error logs</li>
      </ul>
      <p>
        Our marketing site is designed to avoid unnecessary client-side tracking. We do not use
        advertising pixels or sell personal information.
      </p>

      <h3>2.4 Communications</h3>
      <p>
        If you contact us or receive service emails (such as one-time passcodes for authentication),
        we process the information needed to deliver and support those communications.
      </p>

      <h2>3. How We Use Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide, operate, maintain, and improve the Histeeria platform</li>
        <li>Authenticate users and secure accounts</li>
        <li>Monitor agent behavior, run evaluations, generate alerts, and produce reports</li>
        <li>Respond to support requests and service-related communications</li>
        <li>Detect, prevent, and address abuse, fraud, or security issues</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>
      <p>
        We do not use customer agent data to train public foundation models. We process customer
        content only to provide the service and as otherwise described in this policy or in an
        applicable agreement with you.
      </p>

      <h2>4. Legal Bases (where applicable)</h2>
      <p>
        Where required by law (for example, in the EEA or UK), we process personal data based on
        one or more of the following: performance of a contract, legitimate interests in operating
        and securing our services, compliance with legal obligations, and consent where required.
      </p>

      <h2>5. How We Share Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> that help us operate the platform, such as cloud
          hosting, database, email delivery, authentication, and media storage providers
        </li>
        <li>
          <strong>Your organization</strong>, if you access Histeeria through a team or workspace
        </li>
        <li>
          <strong>Public profile viewers</strong>, if you choose to publish an agent profile or
          dashboard publicly
        </li>
        <li>
          <strong>Legal and safety recipients</strong>, when required by law or to protect rights,
          safety, and security
        </li>
        <li>
          <strong>Business transfers</strong>, in connection with a merger, acquisition, financing,
          or sale of assets, subject to appropriate safeguards
        </li>
      </ul>
      <p>We do not sell personal information.</p>

      <h2>6. International Transfers</h2>
      <p>
        Histeeria may process and store information in the United States and other countries where
        we or our service providers operate. Where required, we use appropriate safeguards for
        cross-border transfers.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain information for as long as needed to provide the service, comply with legal
        obligations, resolve disputes, and enforce agreements. Retention periods may vary based
        on the type of data and your account settings. You may request deletion subject to legal
        and operational requirements.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement administrative, technical, and organizational measures designed to protect
        information, including access controls, encryption in transit, and monitoring. No method
        of transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>9. Your Choices and Rights</h2>
      <p>Depending on your location, you may have rights to:</p>
      <ul>
        <li>Access, correct, or delete personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent where processing is consent-based</li>
        <li>Request portability of certain information</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        You can update certain account information in the app. To make a privacy request, contact
        us at <a href="mailto:legal@histeeria.com">legal@histeeria.com</a>.
      </p>

      <h2>10. Children</h2>
      <p>
        Histeeria is not directed to children under 13 (or the minimum age required in your
        jurisdiction), and we do not knowingly collect personal information from children.
      </p>

      <h2>11. Third-Party Links and Services</h2>
      <p>
        Our sites may link to third-party websites or services (for example, documentation or
        social profiles). Their privacy practices are governed by their own policies, not this one.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we will
        post the updated policy on this page and update the “Last updated” date above.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        Questions about this Privacy Policy or our privacy practices can be sent to:
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
