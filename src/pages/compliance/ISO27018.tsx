import ServicePageLayout from '../../components/ServicePageLayout';

const ISO27018 = () => {
  return (
    <ServicePageLayout
      title="ISO 27018 Certification"
      subtitle="Cloud Privacy and Data Protection Controls for Personal Information"
      sections={{
        whatItIs: (
          <p>
            ISO 27018 is a privacy-focused standard that establishes controls and guidelines for protecting personal information (PII) in public cloud computing environments. Our certification support helps organizations implement and validate these privacy-specific controls.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Demonstrates commitment to cloud data privacy</li>
            <li>Builds trust with customers and stakeholders</li>
            <li>Ensures compliance with privacy regulations</li>
            <li>Provides structured approach to PII protection</li>
            <li>Enhances cloud service provider credibility</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>PII Processing Controls</li>
                <li>Privacy Policy Framework</li>
                <li>Data Handling Procedures</li>
                <li>Transparency Mechanisms</li>
                <li>Cross-border Data Transfer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Analysis & Roadmap</li>
                <li>Policy Development</li>
                <li>Control Implementation</li>
                <li>Staff Training</li>
                <li>Documentation Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Detailed Assessment Report</li>
                <li>Implementation Guidelines</li>
                <li>Control Documentation</li>
                <li>Certification Support</li>
                <li>Continuous Monitoring Plan</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud Service Providers</li>
            <li>SaaS Companies</li>
            <li>Data Processors</li>
            <li>Technology Companies</li>
            <li>Enterprise Organizations</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>ISO/IEC 27001</li>
            <li>ISO/IEC 27017</li>
            <li>GDPR Requirements</li>
            <li>Cloud Security Standards</li>
            <li>Privacy Regulations</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start ISO 27018 Certification"
        }
      }}
    />
  );
};

export default ISO27018; 