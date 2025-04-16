import ServicePageLayout from '../../components/ServicePageLayout';

const SARCompliance = () => {
  return (
    <ServicePageLayout
      title="SAR Compliance Audit"
      subtitle="Suspicious Activity Report Compliance Assessment and Implementation"
      sections={{
        whatItIs: (
          <p>
            SAR Compliance Audit ensures organizations meet the regulatory requirements for Suspicious Activity Reporting (SAR) in financial institutions. Our comprehensive assessment helps establish robust monitoring systems, reporting procedures, and compliance frameworks to effectively identify and report suspicious transactions.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures regulatory compliance with SAR requirements</li>
            <li>Prevents financial crimes and money laundering</li>
            <li>Protects against regulatory penalties</li>
            <li>Maintains institutional reputation</li>
            <li>Strengthens transaction monitoring</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>SAR Filing Procedures</li>
                <li>Transaction Monitoring Systems</li>
                <li>Alert Management Process</li>
                <li>Documentation Controls</li>
                <li>Reporting Mechanisms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Policy Development</li>
                <li>Process Enhancement</li>
                <li>System Configuration</li>
                <li>Staff Training</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Compliance Assessment Report</li>
                <li>Gap Analysis Findings</li>
                <li>Process Improvement Plan</li>
                <li>Training Documentation</li>
                <li>Monitoring Guidelines</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Banks and Financial Institutions</li>
            <li>Money Services Businesses</li>
            <li>Credit Unions</li>
            <li>Securities Firms</li>
            <li>Insurance Companies</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>BSA/AML Requirements</li>
            <li>FinCEN Guidelines</li>
            <li>RBI Directives</li>
            <li>PMLA Regulations</li>
            <li>International Standards</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start SAR Compliance Audit"
        }
      }}
    />
  );
};

export default SARCompliance; 