import ServicePageLayout from '../../components/ServicePageLayout';

const MobileAppSecurityTesting = () => {
  return (
    <ServicePageLayout
      title="Mobile Application Security Testing"
      subtitle="Comprehensive security assessment of mobile applications to identify vulnerabilities and ensure secure data handling across iOS and Android platforms."
      sections={{
        whatItIs: (
          <>
            <p>
              Mobile Application Security Testing is a specialized assessment service focused on identifying security vulnerabilities in mobile applications. Our testing covers both iOS and Android platforms, examining client-side security, data storage, and API communications.
            </p>
            <p>
              We employ advanced mobile app testing methodologies to evaluate security controls, data protection mechanisms, and potential attack vectors specific to mobile environments.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Mobile app security testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Data protection</li>
              <li>Privacy compliance</li>
              <li>Platform security</li>
              <li>User trust</li>
              <li>Brand protection</li>
              <li>Market requirements</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Code security</li>
                  <li>Data storage</li>
                  <li>Network communication</li>
                  <li>Authentication</li>
                  <li>Platform integration</li>
                  <li>Runtime analysis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Static analysis</li>
                  <li>Dynamic testing</li>
                  <li>API security</li>
                  <li>Penetration testing</li>
                  <li>Threat modeling</li>
                  <li>Risk assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security report</li>
                  <li>Risk analysis</li>
                  <li>Remediation guide</li>
                  <li>Best practices</li>
                  <li>Security roadmap</li>
                  <li>Technical documentation</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our mobile app security testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Mobile app developers</li>
              <li>Financial services</li>
              <li>Healthcare providers</li>
              <li>E-commerce apps</li>
              <li>Enterprise mobility</li>
              <li>Government apps</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>OWASP MASVS</li>
              <li>NIST Guidelines</li>
              <li>PCI DSS</li>
              <li>HIPAA</li>
              <li>Industry standards</li>
              <li>Platform guidelines</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Mobile App Testing",
        }
      }}
    />
  );
};

export default MobileAppSecurityTesting; 