import ServicePageLayout from '../../components/ServicePageLayout';

const NISTFramework = () => {
  return (
    <ServicePageLayout
      title="NIST CSF 2.0"
      subtitle="Comprehensive Cybersecurity Framework Implementation and Assessment"
      sections={{
        whatItIs: (
          <p>
            The NIST Cybersecurity Framework (CSF) 2.0 is a comprehensive approach to managing and reducing cybersecurity risks. Our service helps organizations implement, assess, and maintain alignment with NIST CSF 2.0, enhancing their cybersecurity posture through a structured and proven framework focused on five core functions: Identify, Protect, Detect, Respond, and Recover.
          </p>
        ),
        whyItsImportant: (
          <ul className="list-disc list-inside space-y-2">
            <li>Strengthens cybersecurity posture</li>
            <li>Provides structured risk management</li>
            <li>Enables continuous improvement</li>
            <li>Facilitates regulatory compliance</li>
            <li>Enhances incident response</li>
            <li>Improves stakeholder confidence</li>
          </ul>
        ),
        whatWeProvide: (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Framework Core Analysis</li>
                <li>Implementation Tiers Review</li>
                <li>Profile Development</li>
                <li>Gap Assessment</li>
                <li>Risk Management Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Framework Customization</li>
                <li>Control Implementation</li>
                <li>Process Development</li>
                <li>Staff Training</li>
                <li>Continuous Monitoring Setup</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Current State Assessment</li>
                <li>Target Profile Definition</li>
                <li>Implementation Roadmap</li>
                <li>Security Controls Matrix</li>
                <li>Progress Tracking Dashboard</li>
              </ul>
            </div>
          </div>
        ),
        whoItsFor: (
          <ul className="list-disc list-inside space-y-2">
            <li>Federal Agencies</li>
            <li>Critical Infrastructure</li>
            <li>Financial Services</li>
            <li>Healthcare Organizations</li>
            <li>Technology Companies</li>
            <li>Manufacturing Industries</li>
          </ul>
        ),
        complianceContext: (
          <ul className="list-disc list-inside space-y-2">
            <li>NIST CSF 2.0</li>
            <li>NIST SP 800-53</li>
            <li>NIST SP 800-171</li>
            <li>Industry Standards</li>
            <li>Federal Regulations</li>
          </ul>
        ),
        callToAction: {
          buttonText: "Start NIST CSF Implementation"
        }
      }}
    />
  );
};

export default NISTFramework; 