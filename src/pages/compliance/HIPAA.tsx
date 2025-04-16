import ServicePageLayout from '../../components/ServicePageLayout';

const HIPAA = () => {
  return (
    <ServicePageLayout
      title="HIPAA Compliance"
      subtitle="Comprehensive guidance and support for achieving and maintaining compliance with the Health Insurance Portability and Accountability Act (HIPAA)."
      sections={{
        whatItIs: (
          <>
            <p>
              HIPAA compliance services provide expert guidance in implementing and maintaining healthcare data protection measures that meet U.S. federal requirements. We help organizations understand, implement, and maintain compliance with all aspects of HIPAA Privacy, Security, and Breach Notification Rules.
            </p>
            <p>
              Our approach ensures your healthcare data protection practices align with HIPAA requirements while being practical and efficient for your organization's operations.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>HIPAA compliance is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Legal requirement</li>
              <li>Patient privacy</li>
              <li>Data security</li>
              <li>Breach prevention</li>
              <li>Trust maintenance</li>
              <li>Penalty avoidance</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Privacy Rule</li>
                  <li>Security Rule</li>
                  <li>Breach Notification</li>
                  <li>Risk analysis</li>
                  <li>PHI handling</li>
                  <li>Access controls</li>
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
                  <li>Security procedures</li>
                  <li>Training materials</li>
                  <li>Audit framework</li>
                  <li>Incident procedures</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our HIPAA services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Healthcare providers</li>
              <li>Health plans</li>
              <li>Business associates</li>
              <li>Medical practices</li>
              <li>Healthcare vendors</li>
              <li>Research institutions</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our implementation aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>HIPAA Rules</li>
              <li>HITECH Act</li>
              <li>Omnibus Rule</li>
              <li>State regulations</li>
              <li>OCR guidance</li>
              <li>Industry standards</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start HIPAA Compliance",
        }
      }}
    />
  );
};

export default HIPAA; 