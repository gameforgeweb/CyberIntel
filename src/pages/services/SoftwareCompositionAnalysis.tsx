import ServicePageLayout from '../../components/ServicePageLayout';

const SoftwareCompositionAnalysis = () => {
  return (
    <ServicePageLayout
      title="Software Composition Analysis"
      subtitle="Comprehensive analysis of third-party and open-source components in your software to identify security vulnerabilities and license compliance issues."
      sections={{
        whatItIs: (
          <>
            <p>
              Software Composition Analysis (SCA) is a systematic process for identifying and analyzing third-party and open-source components in your software. We help you understand your software supply chain risks by examining dependencies, vulnerabilities, and licensing requirements.
            </p>
            <p>
              Our analysis combines automated scanning with expert review to provide detailed insights into your software dependencies and their potential security implications.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Software composition analysis is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Supply chain security</li>
              <li>License compliance</li>
              <li>Vulnerability management</li>
              <li>Risk mitigation</li>
              <li>Update planning</li>
              <li>Cost optimization</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Analysis Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dependency mapping</li>
                  <li>Version tracking</li>
                  <li>License analysis</li>
                  <li>Vulnerability scanning</li>
                  <li>Risk assessment</li>
                  <li>Update recommendations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automated scanning</li>
                  <li>Manual verification</li>
                  <li>Impact analysis</li>
                  <li>Policy validation</li>
                  <li>Risk scoring</li>
                  <li>Remediation planning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Component inventory</li>
                  <li>Vulnerability report</li>
                  <li>License compliance</li>
                  <li>Risk assessment</li>
                  <li>Update strategy</li>
                  <li>Best practices</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our software composition analysis is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Development teams</li>
              <li>Security teams</li>
              <li>Legal departments</li>
              <li>Risk managers</li>
              <li>Compliance officers</li>
              <li>Project managers</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our analysis aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>OWASP Dependencies</li>
              <li>CycloneDX</li>
              <li>SPDX</li>
              <li>ISO 27001</li>
              <li>Industry standards</li>
              <li>License requirements</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start SCA Analysis",
        }
      }}
    />
  );
};

export default SoftwareCompositionAnalysis; 