import ServicePageLayout from '../../components/ServicePageLayout';

const CICRA = () => {
  return (
    <ServicePageLayout
      title="CICRA"
      subtitle="Critical Information Infrastructure Risk Assessment and Compliance"
      sections={{
        whatItIs: (
          <p>
            CICRA (Critical Information Infrastructure Risk Assessment) is a comprehensive evaluation of security risks and compliance requirements for organizations operating critical infrastructure. Our assessment helps identify vulnerabilities, assess threats, and implement protective measures for critical systems and assets.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Protects critical infrastructure assets</li>
            <li>Ensures operational continuity</li>
            <li>Prevents cyber attacks</li>
            <li>Maintains regulatory compliance</li>
            <li>Safeguards national security interests</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Infrastructure Security Analysis</li>
                <li>Threat Landscape Assessment</li>
                <li>Vulnerability Evaluation</li>
                <li>Control System Security</li>
                <li>Resilience Testing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Risk Mitigation Planning</li>
                <li>Security Control Implementation</li>
                <li>Incident Response Development</li>
                <li>Business Continuity Planning</li>
                <li>Staff Training Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Risk Assessment Report</li>
                <li>Security Recommendations</li>
                <li>Implementation Roadmap</li>
                <li>Compliance Documentation</li>
                <li>Training Materials</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Power and Energy Sector</li>
            <li>Transportation Networks</li>
            <li>Healthcare Infrastructure</li>
            <li>Financial Systems</li>
            <li>Government Facilities</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>NCIIPC Guidelines</li>
            <li>IT Act Regulations</li>
            <li>Sector-specific Standards</li>
            <li>International Frameworks</li>
            <li>Industry Best Practices</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start CICRA Assessment"
        }
      }}
    />
  );
};

export default CICRA; 