import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const textureImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_technical_texture-hrHABS5rQbaTE6RzUeW6Hn.webp";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "sales@bestmachines.cn",
    description: "Send us your inquiry anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+86 21 XXXX XXXX",
    description: "Available during business hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Industrial Park Road, Pudong District, Shanghai",
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon–Fri: 9:00 AM – 6:00 PM (CST)",
    description: "We respond within 24 hours",
  },
];

const offices = [
  {
    region: "Asia Pacific",
    city: "Shanghai",
    country: "China",
    address: "123 Industrial Park Road, Pudong District",
    phone: "+86 21 XXXX XXXX",
    email: "sales@bestmachines.cn",
  },
  {
    region: "Europe",
    city: "Frankfurt",
    country: "Germany",
    address: "456 Manufacturing Boulevard, Hesse",
    phone: "+49 69 XXXX XXXX",
    email: "sales@bestmachines.de",
  },
  {
    region: "Americas",
    city: "Chicago",
    country: "USA",
    address: "789 Industrial Drive, Illinois",
    phone: "+1 312 XXXX XXXX",
    email: "sales@bestmachines.us",
  },
];

const faqs = [
  {
    question: "What is the typical delivery time for a machine?",
    answer: "Standard machines are typically delivered within 8–12 weeks. Custom configurations may require 12–16 weeks. We provide detailed timelines during the quotation process.",
  },
  {
    question: "Do you offer installation and training services?",
    answer: "Yes, we provide comprehensive on-site installation, commissioning, and operator training. Our technical team ensures your team is fully prepared to operate the machine.",
  },
  {
    question: "What after-sales support is available?",
    answer: "We offer 24/7 technical support, spare parts availability, preventive maintenance programs, and remote diagnostics through our IoT platform.",
  },
  {
    question: "Can machines be customized for specific applications?",
    answer: "Absolutely. Our engineering team works closely with customers to customize machines for unique requirements, including special mold interfaces and material handling systems.",
  },
  {
    question: "What financing options are available?",
    answer: "We partner with leading financial institutions to offer flexible leasing, financing, and equipment rental options tailored to your business needs.",
  },
  {
    question: "How do I get a quote?",
    answer: "Simply fill out our inquiry form or contact our sales team directly. Provide details about your production requirements, and we will prepare a customized quote within 48 hours.",
  },
];

export default function Contact() {
  return (
    <Layout currentPage="/contact">
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${textureImage})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Our team is ready to help you find the perfect solution
            </p>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                  <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form & Office Locations */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="inquiry-form" className="bg-white rounded-lg p-8 border border-gray-200 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                <iframe
                  title="Embedded Wufoo Form"
                  height="499"
                  allowTransparency
                  frameBorder="0"
                  scrolling="no"
                  sandbox="allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"
                  style={{ width: "100%", border: "none" }}
                  src="https://hongdao.wufoo.com/embed/m1po2ga500hnzwf/"
                >
                  <a href="https://hongdao.wufoo.com/forms/m1po2ga500hnzwf/">
                    Fill out my Wufoo form!
                  </a>
                </iframe>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Offices</h2>

                <div className="space-y-6">
                  {offices.map((office, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{office.region}</h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {office.city}, {office.country}
                      </p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>
                          <strong>Address:</strong> {office.address}
                        </p>
                        <p>
                          <strong>Phone:</strong> {office.phone}
                        </p>
                        <p>
                          <strong>Email:</strong> {office.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team today to discuss your injection molding requirements and receive a personalized recommendation.
            </p>
            <a href="#inquiry-form" className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Consultation
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
