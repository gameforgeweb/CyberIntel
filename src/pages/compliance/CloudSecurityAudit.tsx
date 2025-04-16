import ServicePageLayout from '../../components/ServicePageLayout';

const CloudSecurityAudit = () => {
  return (
    <ServicePageLayout
      title="Cloud Security Audit"
      subtitle="Comprehensive Cloud Infrastructure and Services Security Assessment"
      sections={{
        whatItIs: (
          <p>
            A Cloud Security Audit is a thorough evaluation of cloud infrastructure, services, and applications to identify security risks, compliance gaps, and areas for improvement. Our audit encompasses configuration reviews, security controls assessment, and compliance validation across multi-cloud environments.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Identifies cloud security vulnerabilities</li>
            <li>Ensures data protection in the cloud</li>
            <li>Validates compliance requirements</li>
            <li>Optimizes security controls</li>
            <li>Prevents cloud-based attacks</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cloud Configuration Review</li>
                <li>Access Control Assessment</li>
                <li>Data Protection Measures</li>
                <li>Network Security Analysis</li>
                <li>Incident Response Readiness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Audit Coverage</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Infrastructure Security</li>
                <li>Container Security</li>
                <li>Serverless Security</li>
                <li>Identity Management</li>
                <li>Compliance Controls</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Detailed Audit Report</li>
                <li>Security Recommendations</li>
                <li>Risk Assessment Matrix</li>
                <li>Remediation Roadmap</li>
                <li>Best Practices Guide</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud-Native Organizations</li>
            <li>Enterprise Businesses</li>
            <li>SaaS Providers</li>
            <li>Financial Institutions</li>
            <li>Healthcare Organizations</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>CSA STAR Framework</li>
            <li>ISO 27017/27018</li>
            <li>NIST Cloud Guidelines</li>
            <li>CIS Benchmarks</li>
            <li>Industry Regulations</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start Cloud Security Audit"
        }
      }}
    />
  );
};

export default CloudSecurityAudit; 