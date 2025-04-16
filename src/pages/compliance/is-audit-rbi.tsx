import ServicePageLayout from '../../components/ServicePageLayout';

const ISAudit = () => {
  return (
    <ServicePageLayout
      title="IS Audit (RBI)"
      subtitle="Comprehensive Information Systems Audit for RBI-Regulated Financial Institutions"
      sections={{
        whatItIs: (
          <p>
            The Information Systems (IS) Audit is a mandatory regulatory requirement by the Reserve Bank of India (RBI) for financial institutions. Our service provides a thorough evaluation of your organization's IT infrastructure, systems, and controls to ensure compliance with RBI guidelines while maintaining the security and integrity of financial operations.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures regulatory compliance</li>
            <li>Protects financial data integrity</li>
            <li>Maintains operational stability</li>
            <li>Reduces cyber risks</li>
            <li>Builds stakeholder trust</li>
            <li>Prevents regulatory penalties</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Core Banking Systems</li>
                <li>Asset Classification</li>
                <li>Patch Management</li>
                <li>Access Controls</li>
                <li>Network Security</li>
                <li>Data Protection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Methodology</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>System Documentation Review</li>
                <li>Control Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Compliance Verification</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Detailed Audit Report</li>
                <li>Compliance Status Matrix</li>
                <li>Risk Assessment Report</li>
                <li>Remediation Roadmap</li>
                <li>Executive Summary</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Commercial Banks</li>
            <li>Cooperative Banks</li>
            <li>NBFCs</li>
            <li>Payment System Operators</li>
            <li>Financial Technology Providers</li>
            <li>Credit Information Companies</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>RBI Cyber Security Framework</li>
            <li>IT Act Regulations</li>
            <li>CERT-In Guidelines</li>
            <li>Industry Best Practices</li>
            <li>International Standards</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Get a Free Assessment"
        }
      }}
    />
  );
};

export default ISAudit; 