import ServicePageLayout from '../../components/ServicePageLayout';

const IRDAICompliance = () => {
  return (
    <ServicePageLayout
      title="IRDAI Compliance Audit"
      subtitle="Comprehensive compliance assessment and audit services aligned with Insurance Regulatory and Development Authority of India (IRDAI) guidelines."
      sections={{
        whatItIs: (
          <>
            <p>
              IRDAI Compliance Audit is a specialized assessment service designed to help insurance companies and intermediaries meet regulatory requirements set by the Insurance Regulatory and Development Authority of India. Our audit covers information security, data protection, and operational controls.
            </p>
            <p>
              We provide detailed evaluation of your systems, processes, and controls to ensure alignment with IRDAI's cybersecurity and compliance framework.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>IRDAI compliance is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Regulatory requirement</li>
              <li>Data protection</li>
              <li>Risk management</li>
              <li>Customer trust</li>
              <li>Operational integrity</li>
              <li>Market credibility</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Audit Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Information security</li>
                  <li>Data protection</li>
                  <li>Operational controls</li>
                  <li>Risk assessment</li>
                  <li>Business continuity</li>
                  <li>Compliance monitoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Control assessment</li>
                  <li>Policy review</li>
                  <li>Process evaluation</li>
                  <li>Documentation review</li>
                  <li>Gap analysis</li>
                  <li>Compliance testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Audit report</li>
                  <li>Compliance status</li>
                  <li>Gap assessment</li>
                  <li>Risk analysis</li>
                  <li>Remediation plan</li>
                  <li>Implementation roadmap</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our IRDAI compliance services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Insurance companies</li>
              <li>Insurance brokers</li>
              <li>Reinsurance firms</li>
              <li>Insurance intermediaries</li>
              <li>InsurTech companies</li>
              <li>TPAs</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our audit aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>IRDAI Guidelines</li>
              <li>Information Security</li>
              <li>Data Protection</li>
              <li>ISO 27001</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start IRDAI Audit",
        }
      }}
    />
  );
};

export default IRDAICompliance; 