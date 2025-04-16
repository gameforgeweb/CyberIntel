import ServicePageLayout from '../../components/ServicePageLayout';

const ISO27701 = () => {
  return (
    <ServicePageLayout
      title="ISO/IEC 27701 Certification"
      subtitle="Privacy Information Management System (PIMS) Implementation and Certification Support"
      sections={{
        whatItIs: (
          <p>
            ISO/IEC 27701 is an extension to ISO 27001 that provides a framework for Privacy Information Management System (PIMS). Our service helps organizations implement and certify their PIMS to enhance privacy controls and demonstrate compliance with global privacy regulations.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Enhances privacy protection</li>
            <li>Demonstrates GDPR readiness</li>
            <li>Builds stakeholder trust</li>
            <li>Reduces privacy risks</li>
            <li>Ensures regulatory compliance</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Privacy Framework Review</li>
                <li>Data Processing Assessment</li>
                <li>Control Implementation</li>
                <li>Documentation Review</li>
                <li>Gap Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Privacy Policy Development</li>
                <li>Process Enhancement</li>
                <li>Staff Training</li>
                <li>Internal Audit Support</li>
                <li>Certification Preparation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Privacy Impact Assessment</li>
                <li>PIMS Documentation</li>
                <li>Risk Treatment Plan</li>
                <li>Implementation Roadmap</li>
                <li>Audit Reports</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Data Controllers</li>
            <li>Data Processors</li>
            <li>Cloud Service Providers</li>
            <li>Financial Institutions</li>
            <li>Healthcare Organizations</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>ISO/IEC 27701:2019</li>
            <li>ISO/IEC 27001</li>
            <li>GDPR Requirements</li>
            <li>Privacy Laws</li>
            <li>Industry Standards</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start ISO 27701 Journey"
        }
      }}
    />
  );
};

export default ISO27701; 