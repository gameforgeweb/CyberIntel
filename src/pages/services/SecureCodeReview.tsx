import ServicePageLayout from '../../components/ServicePageLayout';

const SecureCodeReview = () => {
  return (
    <ServicePageLayout
      title="Secure Code Review"
      subtitle="Language-specific security assessment of application source code to identify vulnerabilities and implement secure coding practices."
      sections={{
        whatItIs: (
          <>
            <p>
              Secure Code Review is a comprehensive analysis of application source code to identify security vulnerabilities, logic flaws, and implementation weaknesses. Our approach combines automated static analysis with expert manual review to ensure thorough security coverage.
            </p>
            <p>
              We evaluate code against industry-standard secure coding guidelines and best practices, providing actionable feedback that helps developers build more secure applications.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>
              Code-level vulnerabilities are often the root cause of security breaches. Common issues can lead to:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Remote code execution vulnerabilities</li>
              <li>Data leakage through logic flaws</li>
              <li>Authentication bypass opportunities</li>
              <li>Injection attack vulnerabilities</li>
              <li>Insecure cryptographic implementations</li>
              <li>Memory corruption issues</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Analysis Approach</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Static Application Security Testing (SAST)</li>
                  <li>Manual code review by security experts</li>
                  <li>Language-specific vulnerability patterns</li>
                  <li>Security anti-pattern detection</li>
                  <li>Third-party dependency analysis</li>
                  <li>Custom rule development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Focus Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Authentication and authorization logic</li>
                  <li>Input validation and sanitization</li>
                  <li>Cryptographic implementations</li>
                  <li>Session management</li>
                  <li>Error handling and logging</li>
                  <li>Security configuration review</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Detailed findings report with code snippets</li>
                  <li>Remediation guidance for developers</li>
                  <li>Secure coding guidelines</li>
                  <li>Best practices documentation</li>
                  <li>Security training recommendations</li>
                  <li>Follow-up validation review</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our secure code review service is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Software development teams</li>
              <li>Application security teams</li>
              <li>Financial technology companies</li>
              <li>Healthcare software providers</li>
              <li>Government contractors</li>
              <li>Organizations with custom applications</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our secure code review helps meet requirements for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>PCI DSS Requirement 6</li>
              <li>HIPAA Security Rule</li>
              <li>OWASP ASVS</li>
              <li>ISO 27001 Controls</li>
              <li>SOC 2 Type II</li>
              <li>NIST Secure Software Development Framework</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Your Code Review",
        }
      }}
    />
  );
};

export default SecureCodeReview; 