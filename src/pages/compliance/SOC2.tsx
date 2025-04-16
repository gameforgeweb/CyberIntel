import ServicePageLayout from '../../components/ServicePageLayout';

const SOC2 = () => {
  return (
    <ServicePageLayout
      title="SOC 2 Compliance"
      subtitle="Comprehensive guidance and support for achieving and maintaining SOC 2 compliance, demonstrating your commitment to security, availability, and privacy."
      sections={{
        whatItIs: (
          <>
            <p>
              SOC 2 compliance demonstrates your organization's ability to effectively secure customer data through comprehensive security controls. Our service provides end-to-end support for achieving and maintaining SOC 2 Type I and Type II attestations.
            </p>
            <p>
              We guide organizations through control implementation, documentation, and audit preparation, ensuring successful attestation across all applicable Trust Services Criteria.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>
              SOC 2 compliance is crucial because:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Customer trust requirements</li>
              <li>Enterprise sales enablement</li>
              <li>Competitive advantage</li>
              <li>Risk management</li>
              <li>Vendor assessment demands</li>
              <li>Industry standard expectation</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Readiness assessment</li>
                  <li>Control design</li>
                  <li>Policy development</li>
                  <li>Process implementation</li>
                  <li>Evidence collection</li>
                  <li>Audit preparation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Trust Services Criteria</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security (CC)</li>
                  <li>Availability (A)</li>
                  <li>Processing Integrity (PI)</li>
                  <li>Confidentiality (C)</li>
                  <li>Privacy (P)</li>
                  <li>Control monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gap assessment report</li>
                  <li>Control matrix</li>
                  <li>Policy documentation</li>
                  <li>Implementation roadmap</li>
                  <li>Evidence repository</li>
                  <li>Audit support</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our SOC 2 services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>SaaS providers</li>
              <li>Technology companies</li>
              <li>Data centers</li>
              <li>Cloud service providers</li>
              <li>Managed service providers</li>
              <li>Financial technology firms</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our services align with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>AICPA TSC</li>
              <li>SSAE 18</li>
              <li>ISO 27001</li>
              <li>NIST frameworks</li>
              <li>HIPAA Security Rule</li>
              <li>Industry standards</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start SOC 2 Journey",
        }
      }}
    />
  );
};

export default SOC2; 