import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Ruler,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Layout from "@/components/Layout";

/**
 * Design philosophy: Clean International Engineering.
 * This homepage is designed for an English-language injection molding machine website.
 * It follows the disciplined structure, white-space, technical blue palette, product photography,
 * and restrained motion language commonly seen in leading international plastics machinery brands.
 */

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_hero_injection_machine-hn9n5jCkLBtnYpwbgFNmc7.webp";
const factoryImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_factory_capability-JDFAPLbeQPuiWBCHPTUdYM.webp";
const textureImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387716019/V4ZdDXX97fYCoS4pbyWrL4/bestmachines_technical_texture-hrHABS5rQbaTE6RzUeW6Hn.webp";

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

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

const metrics = [
  { value: "19+", label: "Years in plastics machinery" },
  { value: "30M+", label: "RMB fixed assets" },
  { value: "20", label: "Professional designers" },
  { value: "100+", label: "Production team members" },
];

const productLines = [
  {
    title: "Horizontal Injection Molding Machines",
    range: "For multi-category plastic products",
    text: "Built for PET preforms, caps, household products, medical consumables, logistics parts and construction components, with a focus on stable cycles and continuous output.",
  },
  {
    title: "Mold & Process Coordination",
    range: "Machine selection, mold matching and trial support",
    text: "We coordinate equipment configuration with product structure, mold size and output targets to reduce project communication costs and accelerate commissioning.",
  },
  {
    title: "Turnkey Delivery & Service Support",
    range: "From inquiry to long-term maintenance",
    text: "Our service approach covers technical consultation, machine configuration, on-site commissioning, spare parts and after-sales response for export and domestic customers.",
  },
];

const applications = [
  {
    title: "Packaging & Closures",
    image: applicationImages.packaging,
    alt: "PET preforms, caps and transparent containers for injection molding applications",
    items: "PET preforms, bottle caps, transparent containers and closure components.",
    value: "High-speed, stable output for beverage, food and packaging supply chains.",
  },
  {
    title: "Daily Consumer Goods",
    image: applicationImages.dailyGoods,
    alt: "Injection molded baskets, basins, stools and daily-use plastic products",
    items: "Storage baskets, basins, stools, thin-wall containers and household parts.",
    value: "Flexible molding solutions for multiple shapes, colors and mold configurations.",
  },
  {
    title: "Industrial Logistics",
    image: applicationImages.logistics,
    alt: "Plastic pallets, logistics crates and thick-wall industrial molded parts",
    items: "Pallets, crates, tool boxes, drums and heavy-duty logistics components.",
    value: "Suitable for large-format, thick-wall and durable industrial products.",
  },
  {
    title: "Medical Consumables",
    image: applicationImages.medical,
    alt: "Transparent medical consumables and precision injection molded components",
    items: "Syringes, transparent precision parts, laboratory tubes and clean plastic components.",
    value: "Repeatable molding performance for transparent and precision applications.",
  },
  {
    title: "Construction Materials",
    image: applicationImages.construction,
    alt: "Plastic pipe fittings, profile connectors and engineering plastic parts",
    items: "Pipe fittings, profile connectors, brackets and engineering plastic components.",
    value: "Stable forming for structural strength, dimensional control and long service life.",
  },
];

const capabilities = [
  { icon: <Zap className="h-5 w-5" />, title: "Stable Efficiency", text: "Optimized for continuous molding, energy consumption, cycle consistency and reliable operation." },
  { icon: <Ruler className="h-5 w-5" />, title: "Precise Matching", text: "Machine recommendations are aligned with product structure, mold dimensions and capacity targets." },
  { icon: <Factory className="h-5 w-5" />, title: "Manufacturing Foundation", text: "R&D, production, assembly and commissioning work together to support customized delivery." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Quality Credentials", text: "The company has built a quality foundation with CE, TUV and 3A enterprise credentials." },
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout currentPage="/">
      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="hero-eyebrow">One-stop plastics machinery and mold solutions</span>
              <h1>Horizontal Injection Molding Machines for Stable Production</h1>
              <p>
                BEST Machine develops and manufactures plastic machinery, molds and supporting services for packaging, daily goods, medical consumables, industrial logistics and construction material applications.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="mailto:best@best-machine-china.com?subject=Injection%20molding%20machine%20solution%20inquiry">Discuss Your Project <ArrowRight className="h-5 w-5" /></a>
                <a className="secondary-link" href="#product">View Machine Capability</a>
              </div>
            </div>
            <div className="hero-visual">
              <img src={heroImage} alt="BEST horizontal injection molding machine in an industrial production environment" />
              <div className="hero-badge">
                <Sparkles className="h-5 w-5" />
                <span>Stable molding · Mold coordination · Service support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-strip" aria-label="Company highlights">
          {metrics.map((metric) => (
            <div className="metric-item" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="product" className="product-section">
          <SectionIntro
            eyebrow="Machine Capability"
            title="Injection molding equipment connected with molds, processes and delivery support."
            text="The homepage now presents what international buyers need to evaluate first: production range, application fit, project support and long-term reliability."
          />
          <div className="product-grid">
            {productLines.map((item, index) => (
              <article className="product-card" key={item.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <strong>{item.range}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="applications" className="applications-section">
          <SectionIntro
            eyebrow="Applications"
            title="Clear visual application fields for injection molding production."
            text="Instead of a busy collage, each application is presented with a consistent image, concise product scope and practical production value, so buyers can quickly match their own products with the right machine configuration."
          />
          <div className="application-grid application-grid-images">
            {applications.map((app, index) => (
              <article className="application-card application-card-image" key={app.title}>
                <div className="application-photo">
                  <img src={app.image} alt={app.alt} />
                  <span>0{index + 1}</span>
                </div>
                <div className="application-body">
                  <h3>{app.title}</h3>
                  <p>{app.items}</p>
                  <strong>{app.value}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="capability" className="capability-section" style={{ backgroundImage: `linear-gradient(120deg, rgba(6, 25, 52, .94), rgba(8, 49, 92, .88)), url(${textureImage})` }}>
          <div className="capability-copy">
            <span>Manufacturing & Service</span>
            <h2>Engineering capability that supports stable machines and practical project delivery.</h2>
            <p>
              BEST Machine continues to invest in plastics packaging machinery fields, upgrade technical experience, and build a coordinated service base across R&D, design, manufacturing, assembly and after-sales support.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title}>
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="factory-section">
          <div className="factory-visual">
            <img src={factoryImage} alt="BEST Machine factory and manufacturing capability" />
          </div>
          <div className="factory-copy">
            <span>About BEST Machine</span>
            <h2>Focused on plastic machinery and molds for multi-industry plastic product manufacturing.</h2>
            <p>
              Zhangjiagang Best Machinery Co., Ltd. specializes in the R&D, production and manufacturing of plastic machinery and molds. With more than RMB 30 million in fixed assets and 19 years of continuous development, the company supports customers with practical machinery, mold and process solutions.
            </p>
            <div className="factory-list">
              <div><CheckCircle2 className="h-5 w-5" /> Coordinated engineering, design and production teams</div>
              <div><CheckCircle2 className="h-5 w-5" /> Support for machine, mold and process matching</div>
              <div><CheckCircle2 className="h-5 w-5" /> Export-oriented communication and service workflow</div>
            </div>
          </div>
        </section>

        <section id="video" className="video-section">
          <div className="video-panel">
            <div className="play-circle"><Play className="h-7 w-7" fill="currentColor" /></div>
            <div>
              <span>Machine Video</span>
              <h2>Use this section for real mold trials, factory walkthroughs and product sample videos.</h2>
              <p>This area is designed as a clear video entry. Replacing it with real machine footage will help overseas buyers evaluate operating stability before inquiry.</p>
            </div>
          </div>
          <a className="secondary-link" href="mailto:best@best-machine-china.com?subject=Request%20machine%20operation%20video">Request Video</a>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <span>Project Inquiry</span>
            <h2>Share your product, mold and output targets to receive a suitable machine proposal.</h2>
            <p>For a quotation, please provide product photos, product weight, mold size, expected capacity and target market. Our team will help evaluate machine specifications and supporting options.</p>
          </div>
          <div className="contact-card">
            <a href="tel:+8613915682130"><Phone className="h-5 w-5" /> +86 139 1568 2130</a>
            <a href="mailto:best@best-machine-china.com"><Mail className="h-5 w-5" /> best@best-machine-china.com</a>
            <p><MapPin className="h-5 w-5" /> Zhangjiagang, Jiangsu Province, China</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
