import ServicePageLayout from '../../components/ServicePageLayout';

const CyberResilience = () => {
  return (
    <ServicePageLayout
      title="Cyber Resilience & BCP Audit"
      subtitle="Comprehensive Assessment of Business Continuity and Cyber Resilience Capabilities"
      sections={{
        whatItIs: (
          <p>
            Our Cyber Resilience and Business Continuity Planning (BCP) Audit provides a thorough evaluation of your organization's ability to maintain critical operations and recover from cyber incidents. We assess your preparedness, response capabilities, and recovery strategies to ensure business continuity in the face of evolving cyber threats and operational disruptions.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures operational continuity</li>
            <li>Minimizes financial impact</li>
            <li>Protects reputation</li>
            <li>Maintains customer trust</li>
            <li>Reduces recovery time</li>
            <li>Strengthens stakeholder confidence</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Business Impact Analysis</li>
                <li>Recovery Strategy Review</li>
                <li>Incident Response Plans</li>
                <li>Crisis Management</li>
                <li>Communication Protocols</li>
                <li>Technology Recovery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>BCP Development</li>
                <li>DR Plan Creation</li>
                <li>Staff Training</li>
                <li>Exercise Facilitation</li>
                <li>Plan Testing</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Resilience Assessment Report</li>
                <li>BCP Documentation</li>
                <li>Gap Analysis</li>
                <li>Recovery Time Objectives</li>
                <li>Test Results & Recommendations</li>
                <li>Implementation Roadmap</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Financial Institutions</li>
            <li>Healthcare Organizations</li>
            <li>Critical Infrastructure</li>
            <li>Government Agencies</li>
            <li>Technology Companies</li>
            <li>Manufacturing Industries</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>ISO 22301:2019</li>
            <li>ISO 27031:2011</li>
            <li>NIST SP 800-34</li>
            <li>Industry Regulations</li>
            <li>Regional Requirements</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start Resilience Assessment"
        }
      }}
    />
  );
};

export default CyberResilience; 