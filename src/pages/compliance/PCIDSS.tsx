import ServicePageLayout from '../../components/ServicePageLayout';

const PCIDSS = () => {
  return (
    <ServicePageLayout
      title="PCI DSS Compliance"
      subtitle="Payment Card Industry Data Security Standard Implementation and Assessment"
      sections={{
        whatItIs: (
          <p>
            PCI DSS (Payment Card Industry Data Security Standard) is a comprehensive security standard designed to ensure all companies that process, store, or transmit credit card information maintain a secure environment. Our compliance services help organizations implement, validate, and maintain PCI DSS requirements.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Protects cardholder data and prevents breaches</li>
            <li>Maintains customer trust and business reputation</li>
            <li>Avoids costly penalties and fines</li>
            <li>Ensures continuous transaction processing</li>
            <li>Reduces risk of financial fraud</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Network Security Architecture</li>
                <li>Cardholder Data Protection</li>
                <li>Vulnerability Management</li>
                <li>Access Control Measures</li>
                <li>Security Monitoring Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Analysis & Scoping</li>
                <li>Security Controls Implementation</li>
                <li>Policy & Procedure Development</li>
                <li>Staff Training Programs</li>
                <li>Compliance Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Compliance Assessment Report</li>
                <li>Remediation Roadmap</li>
                <li>Security Documentation</li>
                <li>ROC/SAQ Support</li>
                <li>Quarterly Scan Results</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>E-commerce Businesses</li>
            <li>Payment Processors</li>
            <li>Financial Institutions</li>
            <li>Retail Organizations</li>
            <li>Service Providers</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>PCI DSS v4.0</li>
            <li>PA-DSS Requirements</li>
            <li>ISO 27001 Controls</li>
            <li>NIST Cybersecurity Framework</li>
            <li>Industry Regulations</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start PCI DSS Compliance"
        }
      }}
    />
  );
};

export default PCIDSS; 