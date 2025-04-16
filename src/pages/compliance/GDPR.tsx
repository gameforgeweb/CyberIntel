import ServicePageLayout from '../../components/ServicePageLayout';

const GDPR = () => {
  return (
    <ServicePageLayout
      title="GDPR Compliance"
      subtitle="Comprehensive guidance and support for achieving and maintaining compliance with the General Data Protection Regulation (GDPR)."
      sections={{
        whatItIs: (
          <>
            <p>
              GDPR compliance services provide expert guidance in implementing and maintaining data protection measures that meet European Union privacy requirements. We help organizations understand, implement, and maintain compliance with all aspects of the GDPR.
            </p>
            <p>
              Our approach ensures your data protection practices align with GDPR principles while being practical and sustainable for your organization's operations.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>GDPR compliance is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Legal requirement</li>
              <li>Heavy penalties</li>
              <li>Data protection</li>
              <li>Consumer trust</li>
              <li>Market access</li>
              <li>Brand reputation</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Data mapping</li>
                  <li>Privacy impact</li>
                  <li>Legal basis</li>
                  <li>Consent management</li>
                  <li>Data transfers</li>
                  <li>Security measures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gap analysis</li>
                  <li>Policy development</li>
                  <li>Process design</li>
                  <li>Training programs</li>
                  <li>Documentation</li>
                  <li>Compliance monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Compliance report</li>
                  <li>Privacy policies</li>
                  <li>Process documentation</li>
                  <li>Training materials</li>
                  <li>Audit framework</li>
                  <li>Response procedures</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our GDPR services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>EU organizations</li>
              <li>Global companies</li>
              <li>Data processors</li>
              <li>Online services</li>
              <li>Technology providers</li>
              <li>Service providers</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>GDPR requirements</li>
              <li>EDPB guidelines</li>
              <li>ePrivacy Directive</li>
              <li>National laws</li>
              <li>Industry standards</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start GDPR Compliance",
        }
      }}
    />
  );
};

export default GDPR; 