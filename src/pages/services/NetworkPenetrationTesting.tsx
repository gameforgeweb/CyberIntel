import ServicePageLayout from '../../components/ServicePageLayout';

const NetworkPenetrationTesting = () => {
  return (
    <ServicePageLayout
      title="Network Penetration Testing"
      subtitle="Comprehensive security assessment of network infrastructure to identify vulnerabilities and protect against cyber threats."
      sections={{
        whatItIs: (
          <>
            <p>
              Network Penetration Testing is a systematic evaluation of your network infrastructure security through controlled cyber attacks. We simulate real-world attack scenarios to identify vulnerabilities in your network architecture, configurations, and security controls.
            </p>
            <p>
              Our testing methodology combines automated scanning with manual testing techniques to discover security weaknesses that could be exploited by malicious actors, ensuring your network infrastructure remains resilient against modern threats.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Network penetration testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Infrastructure protection</li>
              <li>Data security</li>
              <li>Business continuity</li>
              <li>Compliance requirements</li>
              <li>Attack surface reduction</li>
              <li>Security validation</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Network architecture</li>
                  <li>Security controls</li>
                  <li>Access controls</li>
                  <li>Firewall configurations</li>
                  <li>Network segmentation</li>
                  <li>Remote access systems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reconnaissance</li>
                  <li>Vulnerability scanning</li>
                  <li>Exploitation testing</li>
                  <li>Post-exploitation</li>
                  <li>Privilege escalation</li>
                  <li>Lateral movement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Executive summary</li>
                  <li>Technical findings</li>
                  <li>Risk assessment</li>
                  <li>Remediation guide</li>
                  <li>Security roadmap</li>
                  <li>Best practices</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our network penetration testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Enterprise organizations</li>
              <li>Financial institutions</li>
              <li>Healthcare providers</li>
              <li>Government agencies</li>
              <li>Technology companies</li>
              <li>Critical infrastructure</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>NIST Framework</li>
              <li>ISO 27001</li>
              <li>PCI DSS</li>
              <li>HIPAA</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Network Testing",
        }
      }}
    />
  );
};

export default NetworkPenetrationTesting; 