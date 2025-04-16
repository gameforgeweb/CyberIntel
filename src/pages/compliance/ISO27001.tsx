import ServicePageLayout from '../../components/ServicePageLayout';

const ISO27001 = () => {
  return (
    <ServicePageLayout
      title="ISO/IEC 27001 Compliance"
      subtitle="Information Security Management System (ISMS) Implementation and Certification Support"
      sections={{
        whatItIs: (
          <p>
            Our ISO/IEC 27001 compliance service provides comprehensive guidance and support for implementing, maintaining, and certifying an Information Security Management System (ISMS). We help organizations establish a systematic approach to managing sensitive company information, ensuring it remains secure through risk management and continuous improvement processes.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Demonstrates security commitment</li>
            <li>Enhances risk management</li>
            <li>Ensures legal compliance</li>
            <li>Improves stakeholder confidence</li>
            <li>Provides competitive advantage</li>
            <li>Reduces security incidents</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Analysis</li>
                <li>Risk Assessment</li>
                <li>Control Implementation</li>
                <li>Documentation Review</li>
                <li>Process Evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>ISMS Framework Development</li>
                <li>Policy Creation</li>
                <li>Control Implementation</li>
                <li>Staff Training</li>
                <li>Internal Audit Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Assessment Report</li>
                <li>Risk Treatment Plan</li>
                <li>ISMS Documentation</li>
                <li>Implementation Roadmap</li>
                <li>Audit Reports</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Technology Companies</li>
            <li>Financial Services</li>
            <li>Healthcare Organizations</li>
            <li>Government Agencies</li>
            <li>Service Providers</li>
            <li>Manufacturing Industries</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>ISO/IEC 27001:2022</li>
            <li>ISO/IEC 27002</li>
            <li>Industry Regulations</li>
            <li>Data Protection Laws</li>
            <li>Security Standards</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start ISO 27001 Journey"
        }
      }}
    />
  );
};

export default ISO27001; 