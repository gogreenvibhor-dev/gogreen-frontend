"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Privacy Policy" 
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-header.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", active: true }
        ]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
            <p>
              Vidhi Enterprises operates an irrigation and agricultural solutions business.<br />
              Our website address is <a href="https://www.vidhienterprises.com" className="text-primary hover:underline">www.vidhienterprises.com</a>
            </p>
            <p>
              At Vidhi Enterprises, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information that are collected and recorded by Vidhi Enterprises and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <a href="mailto:info@vidhienterprises.com" className="text-primary hover:underline">info@vidhienterprises.com</a>
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">What Personal Data We Collect and Why We Collect It</h2>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Contact / Enquiry Forms</h3>
            <p>
              When visitors fill out enquiry or contact forms on our website, we collect the data shown in the form such as name, mobile number, email address, location, and message, along with the browser user agent string to help with spam detection and communication purposes.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">Subscribe / Newsletter Forms</h3>
            <p>
              When visitors subscribe to our newsletter, we collect the information provided in the subscription form to send updates, promotional content, and product-related information.
            </p>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">Media</h3>
            <p>
              We do not allow users to upload any media (images, audio, or video) on our website.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies</h2>
            <p>
              If you submit a form on our website, you may opt-in to saving your name, mobile number, email address, and other details in cookies. These cookies are for your convenience so that you do not have to fill in your details again when submitting future forms.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Embedded Content from Other Websites</h2>
            <p>
              Articles or pages on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed third-party tracking, and monitor your interaction with that embedded content.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Who We Share Your Data With</h2>
            <p>
              Vidhi Enterprises does not sell, trade, or rent users’ personal identification information to others.
            </p>
            <p>
              We may share information only where required for administrative, legal, or security purposes.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">What Rights You Have Over Your Data</h2>
            <p>
              If you have submitted personal data on this site, you can request to receive an exported file of the personal data we hold about you. You can also request that we erase any personal data we hold about you by contacting us at <a href="mailto:info@vidhienterprises.com" className="text-primary hover:underline">info@vidhienterprises.com</a>.
            </p>
            <p>
              This does not include any data we are obliged to keep for administrative, legal, or security purposes. You may also unsubscribe from promotional emails using the link provided in those emails.
            </p>
            
            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Where We Send Your Data</h2>
            <p>
              We do not sell or distribute your personal data to any third party, except where legally required.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">How We Protect Your Data</h2>
            <p>
              Our website is SSL secured to protect user information.
            </p>
            <p>
              We may use trusted third-party email marketing services (such as Mailchimp or similar platforms) to manage communications, and their respective data protection policies apply.
            </p>

            <hr className="my-8 border-blue-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">What Data Breach Procedures We Have in Place</h2>
            <p>
              We follow standard industry security practices. In case of any data breach, necessary steps will be taken as per applicable laws and regulations.
            </p>

            <hr className="my-8 border-blue-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">What Third Parties We Receive Data From</h2>
            <p>
              We do not receive any personal data from third parties.
            </p>

            <hr className="my-8 border-blue-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">General Data Protection Regulation (GDPR)</h2>
            <p>
              Vidhi Enterprises acts as a Data Controller of your information.
            </p>
            <p>
              Our legal basis for collecting and using personal information depends on the specific context in which we collect it:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To perform a contract with you</li>
              <li>With your consent</li>
              <li>For legitimate business interests</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-2">Your GDPR Rights (EEA Residents)</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access, update, or delete your personal data</li>
              <li>Rectify incorrect data</li>
              <li>Object to processing</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:info@vidhienterprises.com" className="text-primary hover:underline">info@vidhienterprises.com</a>.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Log Files</h2>
            <p>
              Vidhi Enterprises follows a standard procedure of using log files. These files log visitors when they visit websites. Information collected includes IP addresses, browser type, ISP, date and time stamps, referring pages, and click data. This information is not linked to personally identifiable information and is used for analytics and site improvement.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Third-Party Privacy Policies</h2>
            <p>
              Vidhi Enterprises’s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of third-party services for detailed information.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Children’s Information</h2>
            <p>
              Vidhi Enterprises does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child has provided such information, please contact us immediately and we will remove it promptly.
            </p>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website. It does not apply to information collected offline or via other channels.
            </p>
            
            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-4">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
