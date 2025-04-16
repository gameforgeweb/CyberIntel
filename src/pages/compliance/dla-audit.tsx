import ServicePageLayout from '../../components/ServicePageLayout';

const DLAAudit = () => {
  return (
    <ServicePageLayout
      title="DLA Audit"
      subtitle="Digital Lending Applications Security and Compliance Assessment"
      sections={{
        whatItIs: (
          <p>
            Digital Lending Applications (DLA) Audit is a comprehensive assessment of digital lending platforms to ensure compliance with regulatory requirements and security standards. Our audit evaluates lending applications, processes, and controls to maintain integrity, security, and regulatory alignment in digital lending operations.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures regulatory compliance</li>
            <li>Protects customer data</li>
            <li>Maintains lending integrity</li>
            <li>Prevents fraud and misuse</li>
            <li>Builds customer trust</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Application Security Review</li>
                <li>Data Protection Controls</li>
                <li>Process Validation</li>
                <li>Regulatory Compliance</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Policy Development</li>
                <li>Control Implementation</li>
                <li>Process Enhancement</li>
                <li>Documentation Support</li>
                <li>Staff Training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Audit Report</li>
                <li>Compliance Assessment</li>
                <li>Risk Analysis</li>
                <li>Remediation Plan</li>
                <li>Best Practices Guide</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Digital Lending Platforms</li>
            <li>FinTech Companies</li>
            <li>NBFCs</li>
            <li>Banking Institutions</li>
            <li>P2P Lending Platforms</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>RBI Guidelines</li>
            <li>Digital Lending Guidelines</li>
            <li>Data Protection Laws</li>
            <li>Fair Practices Code</li>
            <li>Industry Standards</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start DLA Audit"
        }
      }}
    />
  );
};

export default DLAAudit; 