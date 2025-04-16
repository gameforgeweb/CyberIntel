import ServicePageLayout from '../../components/ServicePageLayout';

const MedicalDeviceSecurity = () => {
  return (
    <ServicePageLayout
      title="Medical Device Security Testing"
      subtitle="Comprehensive security assessment of medical devices and healthcare IoT systems to ensure patient safety and regulatory compliance."
      sections={{
        whatItIs: (
          <>
            <p>
              Medical Device Security Testing is a specialized assessment service focused on evaluating the security of medical devices, healthcare IoT systems, and their supporting infrastructure. We identify vulnerabilities while ensuring compliance with healthcare regulations and patient safety requirements.
            </p>
            <p>
              Our testing methodology combines hardware analysis, firmware testing, and communication protocol assessment with specific focus on healthcare use cases and patient safety implications.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Medical device security testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Patient safety</li>
              <li>Data protection</li>
              <li>Regulatory compliance</li>
              <li>Device integrity</li>
              <li>Clinical trust</li>
              <li>Risk management</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Device firmware</li>
                  <li>Communication protocols</li>
                  <li>Authentication mechanisms</li>
                  <li>Data encryption</li>
                  <li>Software security</li>
                  <li>Network integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Risk analysis</li>
                  <li>Vulnerability assessment</li>
                  <li>Protocol testing</li>
                  <li>Compliance validation</li>
                  <li>Security controls</li>
                  <li>Safety verification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security findings</li>
                  <li>Risk assessment</li>
                  <li>Compliance report</li>
                  <li>Remediation guide</li>
                  <li>Safety analysis</li>
                  <li>Technical documentation</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our medical device security testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Device manufacturers</li>
              <li>Healthcare providers</li>
              <li>Medical IoT developers</li>
              <li>Clinical facilities</li>
              <li>Research institutions</li>
              <li>Regulatory teams</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>FDA Guidelines</li>
              <li>HIPAA Security</li>
              <li>IEC 62304</li>
              <li>ISO 14971</li>
              <li>MDR/IVDR</li>
              <li>UL 2900-1</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Medical Device Testing",
        }
      }}
    />
  );
};

export default MedicalDeviceSecurity; 