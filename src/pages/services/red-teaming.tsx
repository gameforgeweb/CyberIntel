import ServicePageLayout from '../../components/ServicePageLayout';

const RedTeaming = () => {
  return (
    <ServicePageLayout
      title="Red Teaming"
      subtitle="Advanced Adversary Simulation and Security Assessment"
      sections={{
        whatItIs: (
          <p>
            Red Teaming is an advanced security assessment that simulates real-world cyber attacks to test your organization's detection and response capabilities. Our team employs sophisticated tactics, techniques, and procedures (TTPs) to identify security gaps and validate defense mechanisms.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Validates security controls</li>
            <li>Tests incident response</li>
            <li>Identifies attack paths</li>
            <li>Evaluates defense effectiveness</li>
            <li>Improves security posture</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Physical Security</li>
                <li>Social Engineering</li>
                <li>Network Infrastructure</li>
                <li>Application Security</li>
                <li>Employee Awareness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Methodology</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Reconnaissance</li>
                <li>Initial Access</li>
                <li>Privilege Escalation</li>
                <li>Lateral Movement</li>
                <li>Objective Achievement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Attack Narrative</li>
                <li>Technical Findings</li>
                <li>Strategic Recommendations</li>
                <li>Defense Improvements</li>
                <li>Executive Summary</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Enterprise Organizations</li>
            <li>Financial Institutions</li>
            <li>Government Agencies</li>
            <li>Critical Infrastructure</li>
            <li>Technology Companies</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>MITRE ATT&CK</li>
            <li>NIST Framework</li>
            <li>ISO 27001</li>
            <li>Industry Standards</li>
            <li>Regulatory Requirements</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start Red Team Assessment"
        }
      }}
    />
  );
};

export default RedTeaming; 