import { Globe, Award, Users, Leaf, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const factoryImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_factory_capability-JDFAPLbeQPuiWBCHPTUdYM.webp";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality products and services",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our success; we listen and adapt to your needs",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Responsible manufacturing practices for a better future",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Serving customers worldwide with local expertise and support",
  },
];

const milestones = [
  { year: "2005", event: "Company founded with focus on injection molding innovation" },
  { year: "2008", event: "Expanded production capacity to 50,000+ units annually" },
  { year: "2012", event: "Opened first international office in Europe" },
  { year: "2015", event: "Launched revolutionary hybrid injection molding technology" },
  { year: "2018", event: "Achieved ISO 9001:2015 certification" },
  { year: "2020", event: "Established R&D center for Industry 4.0 solutions" },
  { year: "2023", event: "Reached 100+ million machines in operation globally" },
];

const offices = [
  {
    region: "Asia Pacific",
    location: "Shanghai, China",
    address: "123 Industrial Park Road, Pudong District",
    phone: "+86 21 XXXX XXXX",
    email: "sales@bestmachines.cn",
  },
  {
    region: "Europe",
    location: "Frankfurt, Germany",
    address: "456 Manufacturing Boulevard, Hesse",
    phone: "+49 69 XXXX XXXX",
    email: "sales@bestmachines.de",
  },
  {
    region: "Americas",
    location: "Chicago, USA",
    address: "789 Industrial Drive, Illinois",
    phone: "+1 312 XXXX XXXX",
    email: "sales@bestmachines.us",
  },
];

const teamMembers = [
  {
    name: "Dr. Chen Wei",
    title: "Founder & CEO",
    bio: "25+ years in injection molding technology and manufacturing innovation",
  },
  {
    name: "Maria Rodriguez",
    title: "Chief Technology Officer",
    bio: "Leading R&D initiatives in Industry 4.0 and advanced automation",
  },
  {
    name: "James Thompson",
    title: "VP Sales & Business Development",
    bio: "Driving global expansion and customer success across all markets",
  },
  {
    name: "Dr. Yuki Tanaka",
    title: "Head of Quality & Compliance",
    bio: "Ensuring world-class quality standards and regulatory compliance",
  },
];

export default function Company() {
  return (
    <Layout currentPage="/company">
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${factoryImage})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About Best Machines
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Leading the global injection molding industry for nearly two decades
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2005, Best Machines emerged from a vision to revolutionize injection molding technology. What began as a small manufacturing facility has evolved into a global leader, serving customers across six continents.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over nearly two decades, we have built a reputation for engineering excellence, customer-centric innovation, and unwavering commitment to quality. Today, more than 100 million parts are produced daily on Best Machines equipment worldwide.
              </p>
              <p className="text-lg text-gray-700">
                Our success is built on three pillars: advanced technology, exceptional people, and a genuine partnership approach with every customer.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">By the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                  <span className="text-gray-700">Years in Business</span>
                  <span className="text-3xl font-bold text-blue-600">19+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                  <span className="text-gray-700">Global Customers</span>
                  <span className="text-3xl font-bold text-blue-600">5,000+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                  <span className="text-gray-700">Machines Installed</span>
                  <span className="text-3xl font-bold text-blue-600">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Daily Production</span>
                  <span className="text-3xl font-bold text-blue-600">100M+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Company Milestones</h2>

          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-lg text-gray-900 font-semibold">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Global Presence</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{office.region}</h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-4">{office.location}</p>
                  <div className="space-y-3 text-gray-700">
                    <p>{office.address}</p>
                    <p>Phone: {office.phone}</p>
                    <p>Email: {office.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability & CSR */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Sustainability & Social Responsibility</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Environmental Commitment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Carbon-neutral manufacturing by 2030</li>
                  <li>✓ 50% reduction in waste by 2025</li>
                  <li>✓ 100% renewable energy in all facilities</li>
                  <li>✓ Sustainable supply chain practices</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Engagement</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ STEM education scholarships</li>
                  <li>✓ Local community development programs</li>
                  <li>✓ Employee volunteer initiatives</li>
                  <li>✓ Industry mentorship programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are always looking for talented individuals passionate about innovation, quality, and customer success.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact#inquiry-form" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Open Positions
              </a>
              <a href="/contact#inquiry-form" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Learn More About Careers
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
