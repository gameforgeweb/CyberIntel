import ServicePageLayout from '../../components/ServicePageLayout';

const CyberCrisisManagement = () => {
  return (
    <ServicePageLayout
      title="Cyber Crisis Management Plan"
      subtitle="Comprehensive crisis management planning and implementation to ensure effective response and recovery from cyber incidents."
      sections={{
        whatItIs: (
          <>
            <p>
              Cyber Crisis Management Plan development provides organizations with structured approaches to handle cybersecurity incidents and crises. Our service delivers complete support for creating, implementing, and maintaining effective crisis management capabilities.
            </p>
            <p>
              We guide organizations through comprehensive planning, response strategies, and recovery procedures to minimize impact and ensure business continuity during cyber incidents.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>
              Cyber crisis management is crucial because:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Incident readiness</li>
              <li>Business continuity</li>
              <li>Stakeholder confidence</li>
              <li>Regulatory compliance</li>
              <li>Reputation protection</li>
              <li>Financial impact mitigation</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Plan Components</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Incident classification</li>
                  <li>Response procedures</li>
                  <li>Communication plans</li>
                  <li>Recovery strategies</li>
                  <li>Team responsibilities</li>
                  <li>Escalation protocols</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Focus Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Crisis assessment</li>
                  <li>Response coordination</li>
                  <li>Stakeholder management</li>
                  <li>Business recovery</li>
                  <li>Documentation</li>
                  <li>Training exercises</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Crisis management plan</li>
                  <li>Response playbooks</li>
                  <li>Communication templates</li>
                  <li>Training materials</li>
                  <li>Exercise scenarios</li>
                  <li>Review reports</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our crisis management services are essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Enterprise organizations</li>
              <li>Financial institutions</li>
              <li>Healthcare providers</li>
              <li>Government agencies</li>
              <li>Critical infrastructure</li>
              <li>Technology companies</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our services align with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>ISO 27001</li>
              <li>NIST CSF</li>
              <li>Industry regulations</li>
              <li>Business continuity standards</li>
              <li>Risk frameworks</li>
              <li>Best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Crisis Planning",
        }
      }}
    />
  );
};

export default CyberCrisisManagement; 