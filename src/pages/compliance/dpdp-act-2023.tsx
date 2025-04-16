import ServicePageLayout from '../../components/ServicePageLayout';

const DPDPAct = () => {
  return (
    <ServicePageLayout
      title="DPDP Act 2023"
      subtitle="Digital Personal Data Protection Act Compliance and Implementation"
      sections={{
        whatItIs: (
          <p>
            The Digital Personal Data Protection (DPDP) Act 2023 is India's comprehensive data protection law that establishes guidelines for processing personal digital data. Our compliance services help organizations understand, implement, and maintain compliance with the DPDP Act's requirements for data protection and privacy.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures compliance with Indian data protection law</li>
            <li>Protects individual privacy rights</li>
            <li>Prevents regulatory penalties</li>
            <li>Builds stakeholder trust</li>
            <li>Establishes data governance framework</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Data Processing Activities</li>
                <li>Consent Management</li>
                <li>Privacy Notices</li>
                <li>Data Subject Rights</li>
                <li>Cross-border Data Transfers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Analysis & Assessment</li>
                <li>Policy Development</li>
                <li>Process Implementation</li>
                <li>Documentation Support</li>
                <li>Training Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Compliance Assessment Report</li>
                <li>Implementation Roadmap</li>
                <li>Policy Documentation</li>
                <li>Process Guidelines</li>
                <li>Training Materials</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Data Fiduciaries</li>
            <li>Data Processors</li>
            <li>Technology Companies</li>
            <li>Financial Institutions</li>
            <li>Healthcare Organizations</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>DPDP Act 2023</li>
            <li>Data Protection Rules</li>
            <li>Sectoral Guidelines</li>
            <li>International Standards</li>
            <li>Industry Best Practices</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start DPDP Act Compliance"
        }
      }}
    />
  );
};

export default DPDPAct; 