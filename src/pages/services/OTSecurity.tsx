import ServicePageLayout from '../../components/ServicePageLayout';

const OTSecurity = () => {
  return (
    <ServicePageLayout
      title="OT Security Testing"
      subtitle="Comprehensive security assessment of Operational Technology (OT) environments to protect industrial control systems and critical infrastructure."
      sections={{
        whatItIs: (
          <>
            <p>
              OT Security Testing is a specialized assessment service focused on evaluating the security of industrial control systems (ICS), SCADA systems, and other operational technology environments. Our testing methodology is designed to identify vulnerabilities while ensuring zero impact on critical operations.
            </p>
            <p>
              We combine deep industrial expertise with cybersecurity knowledge to protect the convergence of IT and OT systems, ensuring operational resilience and safety.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>OT security testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Operational continuity</li>
              <li>Safety requirements</li>
              <li>Regulatory compliance</li>
              <li>Critical infrastructure</li>
              <li>Supply chain security</li>
              <li>Cyber-physical risks</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Network segmentation</li>
                  <li>Protocol security</li>
                  <li>Device hardening</li>
                  <li>Access controls</li>
                  <li>Safety systems</li>
                  <li>Remote access</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Approach</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Architecture review</li>
                  <li>Passive monitoring</li>
                  <li>Configuration audit</li>
                  <li>Protocol analysis</li>
                  <li>Vulnerability scanning</li>
                  <li>Risk assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security assessment report</li>
                  <li>Risk mitigation plan</li>
                  <li>Security architecture recommendations</li>
                  <li>Compliance mapping</li>
                  <li>Remediation roadmap</li>
                  <li>Executive summary</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our OT security testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Manufacturing facilities</li>
              <li>Energy utilities</li>
              <li>Oil and gas industry</li>
              <li>Water treatment</li>
              <li>Smart buildings</li>
              <li>Transportation systems</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>IEC 62443</li>
              <li>NIST SP 800-82</li>
              <li>NERC CIP</li>
              <li>ISA/IEC 62443</li>
              <li>Industry standards</li>
              <li>Regional regulations</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start OT Security Assessment",
        }
      }}
    />
  );
};

export default OTSecurity; 