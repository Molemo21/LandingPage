import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: <strong>2024-06-01</strong>
      </p>
      <p className="mb-4">
        At <strong>ProLiink Connect</strong>, your privacy is important to us. This policy explains how we collect, use, and protect your personal data in accordance with South Africa's Protection of Personal Information Act (POPIA).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. What Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-1 mb-4">
        <li>Full name, contact number, email address, address</li>
        <li>Identification documents (if applicable)</li>
        <li>Usage data like IP address and browser info</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Why We Collect It</h2>
      <p className="mb-4">We use your data to provide services, ensure security, and comply with the law.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Your Rights Under POPIA</h2>
      <ul className="list-disc ml-6 space-y-1 mb-4">
        <li>Access and correct your data</li>
        <li>Request deletion or object to processing</li>
        <li>Lodge a complaint with the Information Regulator</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact Us</h2>
      <p className="mb-4">
        Email: <a className="text-blue-600" href="mailto:support@proliinkconnect.co.za">support@proliinkconnect.co.za</a><br />
        Address: 49 Leeds Street, Cnr Leeds & Creister Street, Mthatha, Eastern Cape, 5099
      </p>
    </div>
  );
};

export default PrivacyPolicy; 