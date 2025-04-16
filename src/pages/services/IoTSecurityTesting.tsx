import ServicePageLayout from '../../components/ServicePageLayout';

const IoTSecurityTesting = () => {
  return (
    <ServicePageLayout
      title="IoT Security Testing"
      subtitle="Comprehensive security assessment of Internet of Things (IoT) devices and ecosystems to identify vulnerabilities and ensure secure deployments."
      sections={{
        whatItIs: (
          <>
            <p>
              IoT Security Testing is a specialized assessment service focused on evaluating the security of IoT devices, their communication protocols, and supporting infrastructure. We identify vulnerabilities across the entire IoT ecosystem, from device firmware to cloud connectivity.
            </p>
            <p>
              Our testing methodology combines hardware security analysis, firmware testing, and communication protocol assessment to ensure your IoT deployments are protected against both physical and cyber threats.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>IoT security testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Device integrity</li>
              <li>Data protection</li>
              <li>Network security</li>
              <li>Privacy compliance</li>
              <li>Physical security</li>
              <li>Ecosystem safety</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Firmware security</li>
                  <li>Hardware analysis</li>
                  <li>Protocol testing</li>
                  <li>Cloud connectivity</li>
                  <li>Mobile applications</li>
                  <li>API security</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Binary analysis</li>
                  <li>Protocol analysis</li>
                  <li>Vulnerability scanning</li>
                  <li>Encryption testing</li>
                  <li>Authentication review</li>
                  <li>Update mechanism</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security findings</li>
                  <li>Risk assessment</li>
                  <li>Remediation guide</li>
                  <li>Best practices</li>
                  <li>Security roadmap</li>
                  <li>Technical report</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our IoT security testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>IoT manufacturers</li>
              <li>Smart home providers</li>
              <li>Industrial IoT</li>
              <li>Healthcare devices</li>
              <li>Automotive systems</li>
              <li>Smart cities</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>ETSI EN 303 645</li>
              <li>IoT Security Foundation</li>
              <li>NIST IR 8259</li>
              <li>PSA Certified</li>
              <li>Industry standards</li>
              <li>Regional regulations</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start IoT Testing",
        }
      }}
    />
  );
};

export default IoTSecurityTesting; 