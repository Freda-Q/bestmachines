import { ArrowRight, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_factory_capability-JDFAPLbeQPuiWBCHPTUdYM.webp";

const applicationImages = {
  packaging:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_application_packaging-nEYPHTN94jyBN4mFYmoWh8.webp",
  dailyGoods:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_application_daily_goods-EBqne7hLEHvXQQH8AfYKwo.webp",
  logistics:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_application_logistics-jtAxFBQx9mUyUSTbiUv9nj.webp",
  medical:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_application_medical-54grcozjDHqGKqCMzqtMfM.webp",
  construction:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_application_construction-7YJuXec5QMnpXJLjqQBEYn.webp",
};

const applications = [
  {
    title: "Packaging & Closures",
    image: applicationImages.packaging,
    description: "High-speed molding for beverage and food packaging supply chains",
    products: "PET preforms, bottle caps, transparent containers, closure components",
    benefits: "Stable output, consistent quality, optimized cycle times",
    challenge: "Requires precision and speed for high-volume production",
    solution: "Our high-speed machines deliver 8–15 second cycles with excellent repeatability",
  },
  {
    title: "Daily Consumer Goods",
    image: applicationImages.dailyGoods,
    description: "Flexible solutions for household and personal care products",
    products: "Storage baskets, basins, stools, thin-wall containers, household parts",
    benefits: "Multiple mold configurations, color flexibility, rapid changeover",
    challenge: "Diverse product shapes and frequent design changes",
    solution: "Modular machine design enables quick mold changes and color switching",
  },
  {
    title: "Industrial Logistics",
    image: applicationImages.logistics,
    description: "Durable components for supply chain and material handling",
    products: "Pallets, crates, tool boxes, drums, heavy-duty logistics components",
    benefits: "Thick-wall capability, large shot capacity, robust construction",
    challenge: "Large parts with tight dimensional tolerance",
    solution: "Hydraulic machines with high clamping force ensure consistent part quality",
  },
  {
    title: "Medical Consumables",
    image: applicationImages.medical,
    description: "Precision molding for healthcare and pharmaceutical applications",
    products: "Syringes, vials, transparent components, sterile packaging",
    benefits: "Ultra-precision, cleanroom compatibility, regulatory compliance",
    challenge: "Strict quality standards and regulatory requirements",
    solution: "Advanced control systems and precision injection ensure medical-grade quality",
  },
  {
    title: "Construction Materials",
    image: applicationImages.construction,
    description: "Durable plastic components for building and infrastructure",
    products: "Pipe fittings, junction boxes, protective covers, structural components",
    benefits: "Weather resistance, dimensional stability, long service life",
    challenge: "Outdoor durability and environmental stress resistance",
    solution: "Material science expertise and process optimization for superior durability",
  },
];

const caseStudies = [
  {
    company: "Global Beverage Packaging Co.",
    challenge: "Increase PET preform production by 40% without additional capital investment",
    solution: "Upgraded to our high-speed hydraulic series with optimized mold design",
    result: "Achieved 35% production increase, reduced cycle time from 18s to 12s",
    roi: "18-month payback period",
  },
  {
    company: "European Medical Device Manufacturer",
    challenge: "Maintain pharmaceutical-grade quality while scaling production",
    solution: "Implemented precision electric series with advanced process monitoring",
    result: "Zero defect rate improvement, 99.8% part acceptance rate",
    roi: "Reduced scrap costs by 60%",
  },
  {
    company: "Asian Logistics Equipment Producer",
    challenge: "Produce large, thick-wall pallets with consistent dimensional accuracy",
    solution: "Deployed our hydraulic series with enhanced clamping force and mold support",
    result: "Improved dimensional consistency, reduced rework by 75%",
    roi: "Increased throughput by 25%",
  },
];

export default function Applications() {
  return (
    <Layout currentPage="/applications">
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Proven solutions across diverse manufacturing sectors
            </p>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Application Categories</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our injection molding machines are engineered to excel across diverse industries, from high-speed packaging to precision medical devices.
          </p>

          <div className="space-y-16">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">{app.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{app.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Typical Products:</h4>
                      <p className="text-gray-700">{app.products}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <p className="text-gray-700">{app.benefits}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge & Solution:</h4>
                      <p className="text-gray-700 mb-2">
                        <strong>Challenge:</strong> {app.challenge}
                      </p>
                      <p className="text-gray-700">
                        <strong>Solution:</strong> {app.solution}
                      </p>
                    </div>
                  </div>

                  <a href="/contact#inquiry-form" className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Customer Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{study.company}</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                      <p className="text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Result</h4>
                      <p className="text-sm">{study.result}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <div className="flex items-center gap-2 text-green-700 font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span>{study.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Find Your Industry Solution</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our application specialists can help you identify the perfect machine configuration for your specific industry and production requirements.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact#inquiry-form" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Industry-Specific Recommendations
              </a>
              <a href="/contact#inquiry-form" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View More Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
