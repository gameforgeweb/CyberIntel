import ServicePageLayout from '../../components/ServicePageLayout';

const RootCauseAnalysis = () => {
  return (
    <ServicePageLayout
      title="Root Cause Analysis"
      subtitle="Systematic investigation of security incidents to identify underlying causes and prevent future occurrences."
      sections={{
        whatItIs: (
          <>
            <p>
              Root Cause Analysis is a systematic approach to investigating security incidents and vulnerabilities to identify their fundamental causes. We analyze incidents from multiple angles to understand not just what happened, but why it happened and how to prevent recurrence.
            </p>
            <p>
              Our methodology combines forensic analysis, system examination, and process review to provide a comprehensive understanding of security incidents and their underlying factors.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Root cause analysis is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Incident prevention</li>
              <li>Process improvement</li>
              <li>Risk reduction</li>
              <li>Cost savings</li>
              <li>Security maturity</li>
              <li>Compliance assurance</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Analysis Areas</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Incident timeline</li>
                  <li>System logs</li>
                  <li>Process flows</li>
                  <li>Control effectiveness</li>
                  <li>Human factors</li>
                  <li>Environmental context</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Data collection</li>
                  <li>Causal analysis</li>
                  <li>Pattern identification</li>
                  <li>Impact assessment</li>
                  <li>Control analysis</li>
                  <li>Recommendation development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Incident analysis</li>
                  <li>Root causes</li>
                  <li>Contributing factors</li>
                  <li>Corrective actions</li>
                  <li>Prevention measures</li>
                  <li>Lessons learned</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our root cause analysis is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Security teams</li>
              <li>IT operations</li>
              <li>Risk managers</li>
              <li>Compliance teams</li>
              <li>System owners</li>
              <li>Executive leadership</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our analysis aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>ISO 27035</li>
              <li>NIST SP 800-61</li>
              <li>SANS Institute</li>
              <li>ITIL Framework</li>
              <li>Industry practices</li>
              <li>Regulatory requirements</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Root Cause Analysis",
        }
      }}
    />
  );
};

export default RootCauseAnalysis; 