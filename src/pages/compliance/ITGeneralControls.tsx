import ServicePageLayout from '../../components/ServicePageLayout';

const ITGeneralControls = () => {
  return (
    <ServicePageLayout
      title="IT General Controls"
      subtitle="Comprehensive assessment and implementation of IT controls to ensure effective governance, risk management, and compliance."
      sections={{
        whatItIs: (
          <>
            <p>
              IT General Controls (ITGC) services provide thorough evaluation and implementation of controls that govern your IT infrastructure, systems, and operations. We help organizations establish and maintain effective IT controls that support business objectives while ensuring security and compliance.
            </p>
            <p>
              Our approach ensures systematic assessment and implementation of controls across key IT domains while providing actionable recommendations for improvement and risk mitigation.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>IT General Controls are crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Operational efficiency</li>
              <li>Risk management</li>
              <li>Compliance requirements</li>
              <li>Data integrity</li>
              <li>System reliability</li>
              <li>Audit readiness</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Control Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Change management</li>
                  <li>Access controls</li>
                  <li>System development</li>
                  <li>Data backup</li>
                  <li>IT operations</li>
                  <li>Security management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Control assessment</li>
                  <li>Gap analysis</li>
                  <li>Policy development</li>
                  <li>Process design</li>
                  <li>Control testing</li>
                  <li>Documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Control framework</li>
                  <li>Assessment report</li>
                  <li>Policy documentation</li>
                  <li>Process maps</li>
                  <li>Test results</li>
                  <li>Remediation plan</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our IT General Controls services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Enterprise organizations</li>
              <li>Financial institutions</li>
              <li>Healthcare providers</li>
              <li>Technology companies</li>
              <li>Government agencies</li>
              <li>Regulated industries</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>COBIT framework</li>
              <li>ISO 27001</li>
              <li>SOX requirements</li>
              <li>NIST guidelines</li>
              <li>Industry standards</li>
              <li>Audit frameworks</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start ITGC Assessment",
        }
      }}
    />
  );
};

export default ITGeneralControls; 