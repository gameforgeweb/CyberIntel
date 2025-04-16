import ServicePageLayout from '../../components/ServicePageLayout';

const CloudPenetrationTesting = () => {
  return (
    <ServicePageLayout
      title="Cloud Penetration Testing"
      subtitle="Comprehensive security assessment of cloud infrastructure and services to identify vulnerabilities and ensure secure cloud operations."
      sections={{
        whatItIs: (
          <>
            <p>
              Cloud Penetration Testing is a specialized security assessment service focused on evaluating the security of cloud infrastructure, services, and deployments. We identify vulnerabilities in cloud configurations, access controls, and security mechanisms across major cloud platforms.
            </p>
            <p>
              Our testing methodology covers both cloud-native and hybrid environments, ensuring comprehensive security evaluation of your cloud assets while maintaining compliance with cloud service provider security policies.
            </p>
          </>
        ),
        whyItsImportant: (
          <>
            <p>Cloud penetration testing is crucial because:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Cloud security posture</li>
              <li>Data protection</li>
              <li>Service availability</li>
              <li>Resource security</li>
              <li>Compliance assurance</li>
              <li>Cost optimization</li>
            </ul>
          </>
        ),
        whatWeProvide: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>IAM configurations</li>
                  <li>Storage security</li>
                  <li>Network controls</li>
                  <li>Container security</li>
                  <li>Serverless functions</li>
                  <li>API security</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Configuration review</li>
                  <li>Access analysis</li>
                  <li>Service testing</li>
                  <li>Security scanning</li>
                  <li>Privilege assessment</li>
                  <li>Resource isolation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Security findings</li>
                  <li>Risk assessment</li>
                  <li>Configuration guide</li>
                  <li>Best practices</li>
                  <li>Remediation steps</li>
                  <li>Executive brief</li>
                </ul>
              </div>
            </div>
          </>
        ),
        whoItsFor: (
          <>
            <p>Our cloud penetration testing is essential for:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Cloud-native companies</li>
              <li>Enterprise organizations</li>
              <li>SaaS providers</li>
              <li>Financial services</li>
              <li>Healthcare providers</li>
              <li>Government agencies</li>
            </ul>
          </>
        ),
        complianceContext: (
          <>
            <p>Our testing aligns with:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>CSA STAR</li>
              <li>ISO 27017</li>
              <li>SOC 2</li>
              <li>NIST CSF</li>
              <li>CIS Benchmarks</li>
              <li>Cloud best practices</li>
            </ul>
          </>
        ),
        callToAction: {
          buttonText: "Start Cloud Testing",
        }
      }}
    />
  );
};

export default CloudPenetrationTesting; 