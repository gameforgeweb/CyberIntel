import ServicePageLayout from '../../components/ServicePageLayout';

const ISO27017 = () => {
  return (
    <ServicePageLayout
      title="ISO 27017 Certification"
      subtitle="Cloud Security Controls and Implementation Guidelines"
      sections={{
        whatItIs: (
          <p>
            ISO 27017 provides security controls and implementation guidance specifically for cloud services. Our certification support helps organizations implement and validate these cloud-specific controls, ensuring robust security measures for both cloud service providers and cloud service customers.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Enhances cloud service security</li>
            <li>Demonstrates security commitment</li>
            <li>Builds customer confidence</li>
            <li>Ensures regulatory compliance</li>
            <li>Provides competitive advantage</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cloud-specific Controls</li>
                <li>Data Security Measures</li>
                <li>Access Management</li>
                <li>Virtualization Security</li>
                <li>Service Level Agreements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Gap Analysis & Planning</li>
                <li>Control Implementation</li>
                <li>Policy Development</li>
                <li>Security Architecture</li>
                <li>Staff Training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Assessment Report</li>
                <li>Implementation Roadmap</li>
                <li>Control Documentation</li>
                <li>Security Policies</li>
                <li>Certification Support</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud Service Providers</li>
            <li>Cloud Service Customers</li>
            <li>SaaS Companies</li>
            <li>Technology Organizations</li>
            <li>Enterprise Businesses</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>ISO/IEC 27001</li>
            <li>ISO/IEC 27018</li>
            <li>Cloud Security Standards</li>
            <li>Data Protection Regulations</li>
            <li>Industry Best Practices</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start ISO 27017 Certification"
        }
      }}
    />
  );
};

export default ISO27017; 