import ServicePageLayout from '../../components/ServicePageLayout';

const WebAppSecurityTesting = () => {
  return (
    <ServicePageLayout
      title="Web Application Security Testing"
      subtitle="Comprehensive security assessment of web applications to identify vulnerabilities and protect against modern cyber threats."
      sections={{
        whatItIs: (
          <>
            <p>
              Web Application Security Testing is a thorough evaluation of your web applications to identify security vulnerabilities and weaknesses. Our testing covers all aspects of web security, from authentication to data validation.
            </p>
            <p>
              We employ both automated and manual testing techniques to discover security flaws that could be exploited by malicious actors, ensuring your web applications are protected against modern cyber threats.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Web application security testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Data protection</li>
              <li>User privacy</li>
              <li>Business continuity</li>
              <li>Reputation management</li>
              <li>Compliance requirements</li>
              <li>Customer trust</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Authentication testing</li>
                  <li>Authorization checks</li>
                  <li>Input validation</li>
                  <li>Session management</li>
                  <li>Business logic</li>
                  <li>API security</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>OWASP alignment</li>
                  <li>Manual testing</li>
                  <li>Automated scanning</li>
                  <li>Vulnerability analysis</li>
                  <li>Exploitation testing</li>
                  <li>Security validation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Detailed findings</li>
                  <li>Risk assessment</li>
                  <li>Remediation guide</li>
                  <li>Security roadmap</li>
                  <li>Best practices</li>
                  <li>Technical report</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our web application security testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>E-commerce platforms</li>
              <li>SaaS providers</li>
              <li>Financial services</li>
              <li>Healthcare portals</li>
              <li>Enterprise applications</li>
              <li>Government websites</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>OWASP Top 10</li>
              <li>SANS Top 25</li>
              <li>PCI DSS</li>
              <li>ISO 27001</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Web Security Testing",
        }
      }}
    />
  );
};

export default WebAppSecurityTesting; 