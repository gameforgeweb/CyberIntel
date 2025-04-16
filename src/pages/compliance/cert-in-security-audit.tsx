import ServicePageLayout from '../../components/ServicePageLayout';

const CERTInAudit = () => {
  return (
    <ServicePageLayout
      title="CERT-In Security Audit"
      subtitle="Indian Computer Emergency Response Team Security Assessment and Compliance"
      sections={{
        whatItIs: (
          <p>
            CERT-In Security Audit is a comprehensive security assessment aligned with the Indian Computer Emergency Response Team (CERT-In) guidelines. Our audit ensures organizations meet the mandatory security requirements and best practices established by CERT-In for protecting information systems and digital assets.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures compliance with Indian cybersecurity regulations</li>
            <li>Validates security controls and measures</li>
            <li>Identifies and mitigates security risks</li>
            <li>Maintains regulatory reporting readiness</li>
            <li>Strengthens incident response capabilities</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Information System Security</li>
                <li>Network Infrastructure Security</li>
                <li>Application Security Controls</li>
                <li>Data Protection Measures</li>
                <li>Incident Management Procedures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Audit Process</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Security Controls Assessment</li>
                <li>Vulnerability Analysis</li>
                <li>Configuration Review</li>
                <li>Policy Evaluation</li>
                <li>Compliance Verification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Detailed Audit Report</li>
                <li>Compliance Status Assessment</li>
                <li>Risk Mitigation Plan</li>
                <li>Security Recommendations</li>
                <li>CERT-In Reporting Templates</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Government Organizations</li>
            <li>Financial Institutions</li>
            <li>IT Service Providers</li>
            <li>Critical Infrastructure</li>
            <li>Corporate Enterprises</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>CERT-In Guidelines</li>
            <li>IT Act 2000</li>
            <li>CERT-In Reporting Requirements</li>
            <li>Indian Cybersecurity Framework</li>
            <li>Industry-specific Regulations</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start CERT-In Audit"
        }
      }}
    />
  );
};

export default CERTInAudit; 