import ServicePageLayout from '../../components/ServicePageLayout';

const ThreatModeling = () => {
  return (
    <ServicePageLayout
      title="Threat Modeling"
      subtitle="Systematic approach to identifying potential security threats, vulnerabilities, and risks in your systems and applications."
      sections={{
        whatItIs: (
          <>
            <p>
              Threat Modeling is a structured approach to identifying, quantifying, and addressing security risks in systems and applications. We analyze your system architecture, data flows, and trust boundaries to identify potential security threats and attack vectors.
            </p>
            <p>
              Our methodology combines industry-standard threat modeling frameworks with deep security expertise to provide actionable insights for securing your systems against potential threats.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Threat modeling is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Risk identification</li>
              <li>Proactive security</li>
              <li>Cost efficiency</li>
              <li>Design validation</li>
              <li>Security strategy</li>
              <li>Compliance planning</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Analysis Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>System architecture</li>
                  <li>Data flows</li>
                  <li>Trust boundaries</li>
                  <li>Attack surfaces</li>
                  <li>Security controls</li>
                  <li>Threat scenarios</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>STRIDE analysis</li>
                  <li>Attack trees</li>
                  <li>Risk assessment</li>
                  <li>Control mapping</li>
                  <li>Impact analysis</li>
                  <li>Mitigation planning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Threat model</li>
                  <li>Risk assessment</li>
                  <li>Security controls</li>
                  <li>Mitigation strategies</li>
                  <li>Architecture recommendations</li>
                  <li>Technical documentation</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our threat modeling is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>System architects</li>
              <li>Security teams</li>
              <li>Development teams</li>
              <li>Product managers</li>
              <li>Risk managers</li>
              <li>Compliance officers</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our modeling aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>OWASP Standards</li>
              <li>NIST Guidelines</li>
              <li>ISO 27001</li>
              <li>MITRE ATT&CK</li>
              <li>Industry practices</li>
              <li>Security frameworks</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Threat Modeling",
        }
      }}
    />
  );
};

export default ThreatModeling; 