import ServicePageLayout from '../../components/ServicePageLayout';

const SDLCGapAnalysis = () => {
  return (
    <ServicePageLayout
      title="SDLC Gap Analysis"
      subtitle="Comprehensive assessment of your software development lifecycle to identify security gaps and enhance development practices."
      sections={{
        whatItIs: (
          <>
            <p>
              SDLC Gap Analysis services provide thorough evaluation of your software development lifecycle processes against security best practices and industry standards. We help organizations identify gaps in their development practices and implement secure development methodologies.
            </p>
            <p>
              Our approach ensures systematic assessment of all SDLC phases while providing actionable recommendations for security enhancement and process improvement.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>SDLC Gap Analysis is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Security integration</li>
              <li>Risk reduction</li>
              <li>Process improvement</li>
              <li>Cost efficiency</li>
              <li>Quality assurance</li>
              <li>Compliance alignment</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Requirements analysis</li>
                  <li>Design review</li>
                  <li>Development practices</li>
                  <li>Testing processes</li>
                  <li>Deployment security</li>
                  <li>Maintenance procedures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process review</li>
                  <li>Control assessment</li>
                  <li>Tool evaluation</li>
                  <li>Practice analysis</li>
                  <li>Documentation review</li>
                  <li>Team interviews</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gap report</li>
                  <li>Risk assessment</li>
                  <li>Recommendations</li>
                  <li>Implementation plan</li>
                  <li>Best practices</li>
                  <li>Metrics framework</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our SDLC Gap Analysis is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Development teams</li>
              <li>Technology companies</li>
              <li>Enterprise organizations</li>
              <li>Software providers</li>
              <li>Financial institutions</li>
              <li>Healthcare organizations</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>OWASP SAMM</li>
              <li>ISO 27001</li>
              <li>NIST SSDF</li>
              <li>DevSecOps</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start SDLC Analysis",
        }
      }}
    />
  );
};

export default SDLCGapAnalysis; 