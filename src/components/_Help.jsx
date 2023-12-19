export default function _Help() {
  return (
    <main className="scrollbarStyle p-2 flex flex-col justify-between gap-3">
      <header className="flex flex-col gap-3">
        <h1 className="font-Inter font-bold text-5xl">Help & Support</h1>
        <hr className="w-3/4 border-1 border-gray-500" />
      </header>
      <div className="w-3/4 text-xl flex flex-col gap-3">
        <p>
        Welcome to the Help and Support section of Caresphere | Connect – your dedicated healthcare portal system designed to seamlessly connect patients, healthcare providers, and administrators. At Caresphere | Connect, we understand the importance of providing a comprehensive support system to ensure a smooth and efficient experience for all users.
        </p>
        <p>
        Whether you are a patient seeking assistance with navigating the portal, a healthcare provider looking for guidance on leveraging advanced features, or an administrator needing technical support, you've come to the right place. Our Help and Support resources are tailored to address your needs and empower you to make the most of Caresphere | Connect's capabilities.
        </p>
        <p>
        In this section, you'll find a wealth of information, tutorials, and guides to help you:
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-bold">Get Started</span>
            <li>New to Caresphere | Connect? Explore our step-by-step guides to create your account, set up your profile, and familiarize yourself with the portal's interface.</li>
          </li>
          <li>
            <span className="font-bold">User Guides</span>
            <li>Dive deep into our user guides that cover a range of topics, from scheduling appointments and accessing medical records to communicating securely with your healthcare team.</li>
          </li>
          <li>
            <span className="font-bold">Healthcare Providers</span>
            <li>For healthcare professionals, discover resources tailored to optimize your workflow. Learn how to manage patient data, streamline communication, and leverage Caresphere | Connect's advanced features to enhance patient care.</li>
          </li>
          <li>
            <span className="font-bold">Administrators</span>
            <li>Administering Caresphere | Connect for your healthcare facility? Find comprehensive guides on system configuration, user management, and troubleshooting common issues.</li>
          </li>
          <li>
            <span className="font-bold">Frequently Asked Questions (FAQs)</span>
            <li>Browse through our FAQs to find quick answers to common queries. If you can't find what you're looking for, our support team is ready to assist you.</li>
          </li>
          <li>
            <span className="font-bold">Contact Support</span>
            <li>Need personalized assistance? Our dedicated support team is available to address your specific concerns. Reach out through our contact channels, and we'll ensure a prompt and helpful response.</li>
          </li>
        </ul>
      </div>
    </main>
  );
}
