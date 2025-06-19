import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: <strong>2024-06-01</strong></p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance</h2>
      <p className="mb-4">By using ProLiink Connect, you agree to these Terms and our Privacy Policy.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Services Provided</h2>
      <p className="mb-4">We connect clients with verified service providers. We do not directly provide the listed services.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Payments</h2>
      <p className="mb-4">All payments are processed in ZAR through secure third-party gateways. We do not store card information.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. User Responsibilities</h2>
      <ul className="list-disc ml-6 space-y-1 mb-4">
        <li>Provide accurate information</li>
        <li>Use the platform lawfully</li>
        <li>Respect contractors and platform policies</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">We are not responsible for contractor performance or indirect losses. Maximum liability is limited.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact</h2>
      <p className="mb-4">
        Email: <a className="text-blue-600" href="mailto:support@proliinkconnect.co.za">support@proliinkconnect.co.za</a><br />
        Address: 49 Leeds Street, Cnr Leeds & Creister Street, Mthatha, Eastern Cape, 5099
      </p>
    </div>
  );
};

export default TermsOfService; 