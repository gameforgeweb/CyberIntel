import ServicePageLayout from '../../components/ServicePageLayout';

const VendorRiskAssessment = () => {
  return (
    <ServicePageLayout
      title="Vendor Risk Assessment"
      subtitle="Comprehensive evaluation and management of third-party vendor security risks to protect your organization's assets and data."
      sections={{
        whatItIs: (
          <>
            <p>
              Vendor Risk Assessment services provide thorough evaluation of your third-party vendors' security posture and potential risks to your organization. We help identify, assess, and manage risks associated with vendor relationships and supply chain dependencies.
            </p>
            <p>
              Our approach ensures systematic evaluation of vendor security practices while providing actionable insights for risk mitigation and vendor management.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Vendor Risk Assessment is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Supply chain security</li>
              <li>Data protection</li>
              <li>Compliance requirements</li>
              <li>Business continuity</li>
              <li>Risk management</li>
              <li>Reputation protection</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security controls</li>
                  <li>Data handling</li>
                  <li>Privacy practices</li>
                  <li>Compliance status</li>
                  <li>Business resilience</li>
                  <li>Incident response</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Risk profiling</li>
                  <li>Security assessment</li>
                  <li>Documentation review</li>
                  <li>Control validation</li>
                  <li>Gap analysis</li>
                  <li>Continuous monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Risk report</li>
                  <li>Assessment findings</li>
                  <li>Remediation plan</li>
                  <li>Vendor scorecard</li>
                  <li>Security metrics</li>
                  <li>Executive summary</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our Vendor Risk Assessment is essential for:</p>
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
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>ISO 27001</li>
              <li>NIST CSF</li>
              <li>SOC 2</li>
              <li>Industry regulations</li>
              <li>Risk frameworks</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Vendor Assessment",
        }
      }}
    />
  );
};

export default VendorRiskAssessment; 