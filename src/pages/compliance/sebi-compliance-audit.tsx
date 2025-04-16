import ServicePageLayout from '../../components/ServicePageLayout';

const SEBIAudit = () => {
  return (
    <ServicePageLayout
      title="SEBI Compliance Audit"
      subtitle="Comprehensive compliance audit services aligned with Securities and Exchange Board of India (SEBI) cyber security and regulatory requirements."
      sections={{
        whatItIs: (
          <>
            <p>
              SEBI Compliance Audit services provide thorough evaluation of information systems and processes in accordance with SEBI guidelines. We help organizations in the securities market assess their IT infrastructure, controls, and operations to ensure compliance with regulatory requirements.
            </p>
            <p>
              Our approach ensures systematic assessment of all critical systems while providing actionable recommendations for compliance enhancement and risk mitigation in the securities market context.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>SEBI Compliance Audit is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Regulatory compliance</li>
              <li>Market integrity</li>
              <li>Investor protection</li>
              <li>Risk management</li>
              <li>System security</li>
              <li>Data protection</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cyber security</li>
                  <li>Trading systems</li>
                  <li>Data protection</li>
                  <li>Access controls</li>
                  <li>Risk management</li>
                  <li>Business continuity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Control assessment</li>
                  <li>System review</li>
                  <li>Process evaluation</li>
                  <li>Compliance checking</li>
                  <li>Risk analysis</li>
                  <li>Security testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Audit report</li>
                  <li>Compliance status</li>
                  <li>Risk assessment</li>
                  <li>Control evaluation</li>
                  <li>Recommendations</li>
                  <li>Action plan</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our SEBI Compliance Audit is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Stock exchanges</li>
              <li>Trading members</li>
              <li>Clearing corporations</li>
              <li>Depositories</li>
              <li>Asset management</li>
              <li>Market intermediaries</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>SEBI guidelines</li>
              <li>Cyber security</li>
              <li>Risk framework</li>
              <li>Trading regulations</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start SEBI Audit",
        }
      }}
    />
  );
};

export default SEBIAudit; 