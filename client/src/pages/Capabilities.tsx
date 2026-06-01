import { CheckCircle2, Zap, Ruler, ShieldCheck, Leaf, Cpu } from "lucide-react";
import Layout from "@/components/Layout";

const textureImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_technical_texture-hrHABS5rQbaTE6RzUeW6Hn.webp";

const capabilities = [
  {
    icon: Ruler,
    title: "Precision & Accuracy",
    description: "Industry-leading tolerances and repeatability",
    details: [
      "±0.01mm dimensional accuracy",
      "99.8% part consistency rate",
      "Advanced closed-loop control systems",
      "Real-time pressure and temperature monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Optimized cycle times and energy performance",
    details: [
      "Cycle times from 8–15 seconds",
      "30% energy savings vs. standard machines",
      "Rapid mold changeover capability",
      "Continuous production support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Flexibility & Customization",
    description: "Modular design for diverse applications",
    details: [
      "Multi-cavity mold support",
      "Quick-change mold systems",
      "Configurable shot sizes",
      "Adaptable to various materials",
    ],
  },
  {
    icon: Cpu,
    title: "Technology & Innovation",
    description: "Advanced automation and IoT integration",
    details: [
      "Industry 4.0 compatible",
      "Real-time data analytics",
      "Predictive maintenance alerts",
      "Remote monitoring capabilities",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmentally responsible manufacturing",
    details: [
      "Reduced material waste",
      "Lower carbon footprint",
      "Energy-efficient hydraulics",
      "Recyclable machine components",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Quality & Compliance",
    description: "Certified to international standards",
    details: [
      "ISO 9001:2015 certified",
      "CE marked for EU markets",
      "FDA compliant for medical applications",
      "RoHS and REACH compliant",
    ],
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "CE Marking", description: "European Conformity" },
  { name: "FDA Compliance", description: "Medical Device Standards" },
  { name: "RoHS", description: "Hazardous Substances Restriction" },
  { name: "REACH", description: "Chemical Safety Compliance" },
];

const benchmarks = [
  { metric: "Cycle Time", value: "8–15s", industry: "12–20s" },
  { metric: "Energy Efficiency", value: "+30%", industry: "Baseline" },
  { metric: "Part Accuracy", value: "±0.01mm", industry: "±0.05mm" },
  { metric: "Uptime Rate", value: "99.5%", industry: "95%" },
];

const innovations = [
  { year: "2015", milestone: "Launched first hybrid injection molding machine" },
  { year: "2017", milestone: "Introduced IoT-enabled monitoring system" },
  { year: "2019", milestone: "Achieved Industry 4.0 certification" },
  { year: "2021", milestone: "Developed advanced micro-injection technology" },
  { year: "2023", milestone: "Released next-generation electric series" },
];

export default function Capabilities() {
  return (
    <Layout currentPage="/capabilities">
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
              Why Choose Best Machines
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Advanced capabilities, proven performance, and unwavering commitment to excellence
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Core Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{cap.title}</h3>
                  <p className="text-gray-600 mb-6">{cap.description}</p>
                  <ul className="space-y-3">
                    {cap.details.map((detail, didx) => (
                      <li key={didx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Performance Benchmarks */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Performance Benchmarks</h2>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benchmarks.map((bench, idx) => (
                  <div key={idx} className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{bench.metric}</h4>
                    <div className="bg-blue-50 rounded-lg p-6 mb-4">
                      <p className="text-3xl font-bold text-blue-600">{bench.value}</p>
                    </div>
                    <p className="text-sm text-gray-600">Industry avg: {bench.industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Certifications & Standards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Compliance Commitment</h3>
            <p className="text-gray-700 mb-4">
              All Best Machines products are manufactured in compliance with international standards and regulations. We maintain rigorous quality control processes and regular third-party audits to ensure continuous compliance.
            </p>
            <p className="text-gray-700">
              Whether you require ISO certification, FDA approval for medical applications, or CE marking for European markets, our machines meet or exceed all applicable requirements.
            </p>
          </div>
        </section>

        {/* Innovation Timeline */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Innovation Timeline</h2>

            <div className="space-y-6">
              {innovations.map((innovation, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                      {innovation.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-lg text-gray-900 font-semibold">{innovation.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Highlights */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Advanced Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Industry 4.0 Integration</h3>
              <p className="text-gray-700 mb-4">
                Our machines are equipped with advanced sensors and IoT connectivity, enabling real-time monitoring, predictive maintenance, and seamless integration with your manufacturing execution systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Real-time production data analytics</li>
                <li>✓ Predictive maintenance alerts</li>
                <li>✓ Remote monitoring and diagnostics</li>
                <li>✓ Integration with MES and ERP systems</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sustainability Initiatives</h3>
              <p className="text-gray-700 mb-4">
                We are committed to reducing the environmental impact of injection molding through energy-efficient designs, waste reduction, and sustainable manufacturing practices.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 30% reduction in energy consumption</li>
                <li>✓ Minimized material waste</li>
                <li>✓ Recyclable components</li>
                <li>✓ Carbon-neutral manufacturing goal by 2030</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Advanced Capabilities</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our advanced technologies and proven capabilities can transform your production efficiency and product quality.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact#inquiry-form" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request a Technical Consultation
              </a>
              <a href="/contact#inquiry-form" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Technical Specs
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
