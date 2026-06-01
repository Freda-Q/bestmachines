import { useState } from "react";
import Layout from "@/components/Layout";

const products = [
  {
    id: 1,
    model: "BST-1000A",
    category: "std",
    tag: "Packaging",
    app: "Closures, caps, thin-wall containers for high-mix consumer packaging lines.",
    specs: [
      { val: "100 kN", lbl: "clamping force" },
      { val: "8–15 s", lbl: "cycle time" },
      { val: "30–80 cc", lbl: "injection volume" },
    ],
    bgColor: "#1c2d3e",
    image: "/images/products/bst-1000a.jpg",
  },
  {
    id: 2,
    model: "BST-1320A",
    category: "std",
    tag: "Consumer Goods",
    app: "Household items, technical components, mid-format packaging at consistent output.",
    specs: [
      { val: "132 kN", lbl: "clamping force" },
      { val: "10–18 s", lbl: "cycle time" },
      { val: "50–150 cc", lbl: "injection volume" },
    ],
    bgColor: "#1e2f3c",
    image: "/images/products/bst-1320a.jpg",
  },
  {
    id: 3,
    model: "BST-1400A",
    category: "std",
    tag: "Storage",
    app: "Bowls, cups, food containers and wide-format industrial closures at sustained throughput.",
    specs: [
      { val: "140 kN", lbl: "clamping force" },
      { val: "12–20 s", lbl: "cycle time" },
      { val: "80–220 cc", lbl: "injection volume" },
    ],
    bgColor: "#1a2c3a",
    image: "/images/products/bst-1400a.jpg",
  },
  {
    id: 4,
    model: "BST-2300A",
    category: "hc",
    tag: "Industrial",
    app: "Paint buckets, chemical containers, drums and large-format industrial packaging.",
    specs: [
      { val: "230 kN", lbl: "clamping force" },
      { val: "15–28 s", lbl: "cycle time" },
      { val: "200–500 cc", lbl: "injection volume" },
    ],
    bgColor: "#162535",
    image: "/images/products/bst-2300a.jpg",
  },
  {
    id: 5,
    model: "BST-4800A",
    category: "hc",
    tag: "Logistics",
    app: "Turnover crates, stacking trays and storage boxes for logistics and warehousing.",
    specs: [
      { val: "480 kN", lbl: "clamping force" },
      { val: "18–35 s", lbl: "cycle time" },
      { val: "400–1,000 cc", lbl: "injection volume" },
    ],
    bgColor: "#142232",
    image: "/images/products/bst-4800a.jpg",
  },
  {
    id: 6,
    model: "BST-8500A",
    category: "hc",
    tag: "Furniture",
    app: "Chairs, table bases, large storage bins and structural construction components.",
    specs: [
      { val: "850 kN", lbl: "clamping force" },
      { val: "22–45 s", lbl: "cycle time" },
      { val: "800–2,000 cc", lbl: "injection volume" },
    ],
    bgColor: "#121f2e",
    image: "/images/products/bst-8500a.jpg",
  },
  {
    id: 7,
    model: "Syringe Series",
    category: "sp",
    tag: "Medical",
    app: "Syringes, IV components, sterile disposables — ISO 13485 compliant, cleanroom-ready.",
    specs: [
      { val: "80–160 kN", lbl: "clamping force" },
      { val: "±0.005 mm", lbl: "precision" },
      { val: "ISO 13485", lbl: "compliance" },
    ],
    bgColor: "#142838",
    image: "/images/products/syringe-series.webp",
  },
  {
    id: 8,
    model: "PET Preform",
    category: "sp",
    tag: "PET / Caps",
    app: "Beverage preforms and bottle caps — multi-cavity tooling, high-speed production.",
    specs: [
      { val: "500–800 kN", lbl: "clamping force" },
      { val: "8–12 s", lbl: "cycle time" },
      { val: "up to 96", lbl: "cavities" },
    ],
    bgColor: "#162636",
    image: "/images/products/pet-preform.webp",
  },
  {
    id: 9,
    model: "BST-22000A",
    category: "sp",
    tag: "Pallets",
    app: "Industrial pallets, platforms and heavy-duty logistics equipment at maximum scale.",
    specs: [
      { val: "2,200 kN", lbl: "clamping force" },
      { val: "30–60 s", lbl: "cycle time" },
      { val: "8,000+ cc", lbl: "injection volume" },
    ],
    bgColor: "#101c2c",
    image: "/images/products/bst-22000a.jpg",
  },
];

const svgs = [
  <svg key="1" viewBox="0 0 200 120" fill="none"><rect x="20" y="20" width="120" height="72" stroke="white" strokeWidth="2"/><rect x="140" y="34" width="44" height="42" stroke="white" strokeWidth="1.5"/><circle cx="80" cy="56" r="22" stroke="white" strokeWidth="2"/><rect x="28" y="86" width="18" height="8" stroke="white" strokeWidth="1.5"/><rect x="98" y="86" width="18" height="8" stroke="white" strokeWidth="1.5"/><rect x="38" y="10" width="42" height="12" stroke="white" strokeWidth="1.2"/></svg>,
  <svg key="2" viewBox="0 0 200 120" fill="none"><rect x="16" y="18" width="128" height="76" stroke="white" strokeWidth="2"/><rect x="144" y="32" width="42" height="46" stroke="white" strokeWidth="1.5"/><circle cx="80" cy="56" r="25" stroke="white" strokeWidth="2"/><rect x="22" y="88" width="20" height="8" stroke="white" strokeWidth="1.5"/><rect x="104" y="88" width="20" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="3" viewBox="0 0 200 120" fill="none"><rect x="14" y="16" width="132" height="78" stroke="white" strokeWidth="2"/><rect x="146" y="30" width="40" height="48" stroke="white" strokeWidth="1.5"/><circle cx="80" cy="55" r="27" stroke="white" strokeWidth="2"/><line x1="80" y1="28" x2="80" y2="82" stroke="white" strokeWidth="1" opacity=".4"/><rect x="20" y="88" width="22" height="8" stroke="white" strokeWidth="1.5"/><rect x="108" y="88" width="22" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="4" viewBox="0 0 200 120" fill="none"><rect x="10" y="14" width="148" height="84" stroke="white" strokeWidth="2"/><rect x="158" y="28" width="36" height="54" stroke="white" strokeWidth="1.5"/><circle cx="84" cy="56" r="30" stroke="white" strokeWidth="2"/><circle cx="84" cy="56" r="12" stroke="white" strokeWidth="1.5" opacity=".5"/><rect x="16" y="92" width="24" height="8" stroke="white" strokeWidth="1.5"/><rect x="116" y="92" width="24" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="5" viewBox="0 0 200 120" fill="none"><rect x="8" y="12" width="152" height="88" stroke="white" strokeWidth="2"/><rect x="160" y="26" width="34" height="58" stroke="white" strokeWidth="1.5"/><circle cx="84" cy="56" r="32" stroke="white" strokeWidth="2"/><line x1="70" y1="42" x2="98" y2="70" stroke="white" strokeWidth="1" opacity=".4"/><line x1="98" y1="42" x2="70" y2="70" stroke="white" strokeWidth="1" opacity=".4"/><rect x="14" y="94" width="26" height="8" stroke="white" strokeWidth="1.5"/><rect x="120" y="94" width="26" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="6" viewBox="0 0 200 120" fill="none"><rect x="6" y="10" width="156" height="92" stroke="white" strokeWidth="2"/><rect x="162" y="24" width="32" height="62" stroke="white" strokeWidth="1.5"/><circle cx="84" cy="56" r="34" stroke="white" strokeWidth="2"/><circle cx="84" cy="56" r="14" stroke="white" strokeWidth="1.5" opacity=".4"/><rect x="12" y="96" width="28" height="8" stroke="white" strokeWidth="1.5"/><rect x="124" y="96" width="28" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="7" viewBox="0 0 200 120" fill="none"><rect x="22" y="20" width="120" height="72" stroke="white" strokeWidth="2"/><rect x="142" y="34" width="40" height="42" stroke="white" strokeWidth="1.5"/><circle cx="82" cy="56" r="22" stroke="white" strokeWidth="2"/><line x1="82" y1="34" x2="82" y2="78" stroke="white" strokeWidth="1.2" opacity=".45"/><line x1="60" y1="56" x2="104" y2="56" stroke="white" strokeWidth="1.2" opacity=".45"/><rect x="28" y="86" width="18" height="8" stroke="white" strokeWidth="1.5"/><rect x="108" y="86" width="18" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="8" viewBox="0 0 200 120" fill="none"><rect x="20" y="18" width="122" height="76" stroke="white" strokeWidth="2"/><rect x="32" y="6" width="52" height="14" stroke="white" strokeWidth="1.5"/><rect x="142" y="32" width="42" height="46" stroke="white" strokeWidth="1.5"/><circle cx="81" cy="56" r="24" stroke="white" strokeWidth="2"/><rect x="26" y="88" width="20" height="8" stroke="white" strokeWidth="1.5"/><rect x="110" y="88" width="20" height="8" stroke="white" strokeWidth="1.5"/></svg>,
  <svg key="9" viewBox="0 0 200 120" fill="none"><rect x="4" y="8" width="162" height="96" stroke="white" strokeWidth="2"/><rect x="166" y="22" width="28" height="66" stroke="white" strokeWidth="1.5"/><circle cx="85" cy="56" r="36" stroke="white" strokeWidth="2"/><circle cx="85" cy="56" r="15" stroke="white" strokeWidth="1.5" opacity=".4"/><rect x="10" y="98" width="30" height="8" stroke="white" strokeWidth="1.5"/><rect x="128" y="98" width="30" height="8" stroke="white" strokeWidth="1.5"/></svg>,
];

const heroSvg = (
  <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="80" width="300" height="180" rx="2" stroke="#4a6fd4" strokeWidth="1.5" opacity=".6"/>
    <rect x="330" y="110" width="130" height="90" rx="2" stroke="#4a6fd4" strokeWidth="1.2" opacity=".5"/>
    <path d="M370 80 L400 80 L390 110 L380 110 Z" stroke="#4a6fd4" strokeWidth="1.2" opacity=".4"/>
    <circle cx="165" cy="170" r="55" stroke="#4a6fd4" strokeWidth="1.5" opacity=".55"/>
    <circle cx="165" cy="170" r="22" stroke="#4a6fd4" strokeWidth="1" opacity=".35"/>
    <line x1="30" y1="130" x2="330" y2="130" stroke="#2a4fa0" strokeWidth="1" opacity=".4"/>
    <line x1="30" y1="210" x2="330" y2="210" stroke="#2a4fa0" strokeWidth="1" opacity=".4"/>
    <rect x="50" y="260" width="36" height="28" rx="1" stroke="#4a6fd4" strokeWidth="1.2" opacity=".4"/>
    <rect x="240" y="260" width="36" height="28" rx="1" stroke="#4a6fd4" strokeWidth="1.2" opacity=".4"/>
    <rect x="44" y="100" width="48" height="60" rx="1" stroke="#4a6fd4" strokeWidth="1" opacity=".4"/>
    <rect x="52" y="108" width="14" height="14" rx="1" stroke="#6a8fe4" strokeWidth=".8" opacity=".5"/>
    <rect x="52" y="128" width="14" height="8" rx="1" stroke="#6a8fe4" strokeWidth=".8" opacity=".4"/>
    <rect x="52" y="140" width="14" height="8" rx="1" stroke="#6a8fe4" strokeWidth=".8" opacity=".4"/>
    <line x1="340" y1="140" x2="450" y2="140" stroke="#2a4fa0" strokeWidth=".8" strokeDasharray="4,3" opacity=".4"/>
    <line x1="340" y1="160" x2="450" y2="160" stroke="#2a4fa0" strokeWidth=".8" strokeDasharray="4,3" opacity=".4"/>
    <rect x="268" y="120" width="66" height="100" rx="1" stroke="#6a8fe4" strokeWidth="1" opacity=".5"/>
    <line x1="165" y1="115" x2="165" y2="225" stroke="#4a6fd4" strokeWidth=".7" opacity=".3"/>
    <line x1="110" y1="170" x2="220" y2="170" stroke="#4a6fd4" strokeWidth=".7" opacity=".3"/>
    <line x1="30" y1="300" x2="330" y2="300" stroke="#4a6fd4" strokeWidth=".6" opacity=".25"/>
    <line x1="30" y1="295" x2="30" y2="305" stroke="#4a6fd4" strokeWidth=".6" opacity=".25"/>
    <line x1="330" y1="295" x2="330" y2="305" stroke="#4a6fd4" strokeWidth=".6" opacity=".25"/>
  </svg>
);

export default function Products() {
  const [filter, setFilter] = useState("all");

  const labels: Record<string, string> = {
    all: "All products",
    std: "Standard series",
    hc: "High capacity",
    sp: "Specialty machines",
  };

  const counts = {
    all: 9,
    std: 3,
    hc: 3,
    sp: 3,
  };

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <Layout currentPage="/products">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #0d0d0d; -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; color: inherit; }
        img { display: block; max-width: 100%; }

        /* HERO */
        .hero {
          background: #0a0f1e;
          background-image: url("/images/products/products-hero.png");
          background-position: center;
          background-size: cover;
          min-height: 560px;
          display: grid;
          grid-template-columns: 1fr;
          overflow: hidden;
          position: relative;
        }
        .hero-left {
          padding: 80px 52px 72px;
          display: flex; flex-direction: column; justify-content: space-between;
          position: relative; z-index: 2;
          background: linear-gradient(90deg, rgba(10,15,30,.98) 0%, rgba(10,15,30,.88) 72%, rgba(10,15,30,.08) 100%);
        }
        .hero-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase;
          color: #4a6fd4; display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
        }
        .hero-eyebrow::before {
          content: ''; width: 24px; height: 1px; background: #4a6fd4; flex-shrink: 0;
        }
        .hero-h1 {
          font-size: 58px; font-weight: 300; line-height: 1.0;
          color: #fff; letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .hero-h1 strong { font-weight: 600; display: block; }
        .hero-h1 .dim { color: rgba(255,255,255,.22); font-weight: 300; }
        .hero-desc {
          font-size: 14px; font-weight: 300; color: rgba(255,255,255,.45);
          line-height: 1.75; max-width: 400px; margin-bottom: 40px;
        }
        .hero-actions { display: flex; gap: 12px; }
        .btn-hero-primary {
          font-size: 12px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
          background: #1438a0; color: #fff; border: none; padding: 13px 28px; cursor: pointer; transition: background .15s;
        }
        .btn-hero-primary:hover { background: #0f2d8a; }
        .btn-hero-ghost {
          font-size: 12px; font-weight: 500; letter-spacing: .05em; text-transform: uppercase;
          background: transparent; color: rgba(255,255,255,.55);
          border: 1px solid rgba(255,255,255,.2); padding: 13px 28px; cursor: pointer; transition: all .15s;
        }
        .btn-hero-ghost:hover { color: #fff; border-color: rgba(255,255,255,.55); }

        .hero-stats {
          display: flex; gap: 0;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 32px; margin-top: 40px;
        }
        .hero-stat {
          flex: 1; padding-right: 24px; border-right: 1px solid rgba(255,255,255,.07);
          margin-right: 24px;
        }
        .hero-stat:last-child { border-right: none; margin-right: 0; }
        .hero-stat-num {
          font-family: 'DM Mono', monospace;
          font-size: 28px; font-weight: 500; color: #fff; line-height: 1; margin-bottom: 5px;
        }
        .hero-stat-label { font-size: 11px; color: rgba(255,255,255,.3); letter-spacing: .05em; }

        .hero-right {
          display: none;
        }
        .hero-right::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(20,56,160,.15) 0%, rgba(10,15,30,.3) 100%);
          z-index: 0;
        }
        .hero-right-inner {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
        .hero-grid-lines {
          position: absolute; inset: 0; opacity: .06;
          background-image:
            linear-gradient(#4a6fd4 1px, transparent 1px),
            linear-gradient(90deg, #4a6fd4 1px, transparent 1px);
          background-size: 48px 48px;
          z-index: 1;
        }
        .hero-machine-svg {
          width: 85%; height: auto; opacity: .75;
          position: relative; z-index: 1;
        }
        .hero-badge {
          position: absolute; bottom: 32px; right: 32px; z-index: 3;
          background: rgba(20,56,160,.9); backdrop-filter: blur(8px);
          border: 1px solid rgba(74,111,212,.3);
          padding: 14px 18px; text-align: right;
        }
        .hero-badge-label { font-size: 9px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,.45); margin-bottom: 4px; }
        .hero-badge-val { font-family: 'DM Mono', monospace; font-size: 18px; font-weight: 500; color: #fff; }

        /* BREADCRUMB */
        .breadcrumb {
          background: #fafaf8; border-bottom: 1px solid #e8e6df;
          padding: 11px 52px; font-size: 12px; color: #bbb;
          display: flex; align-items: center; gap: 7px;
        }
        .breadcrumb a { color: #bbb; transition: color .15s; }
        .breadcrumb a:hover { color: #0d0d0d; }
        .breadcrumb .cur { color: #555; font-weight: 500; }

        /* FILTER BAR */
        .filter-bar {
          background: #fff; border-bottom: 1px solid #e8e6df;
          padding: 0 52px;
          display: flex; align-items: center;
          position: sticky; top: 62px; z-index: 90;
        }
        .ftab {
          font-size: 12px; font-weight: 500; letter-spacing: .04em;
          color: #aaa; background: transparent; border: none;
          border-bottom: 2px solid transparent;
          padding: 17px 18px; margin-bottom: -1px;
          cursor: pointer; transition: all .15s; white-space: nowrap;
        }
        .ftab:hover { color: #0d0d0d; }
        .ftab.on { color: #1438a0; border-bottom-color: #1438a0; font-weight: 600; }
        .ftab-count {
          display: inline-block; font-size: 10px; font-weight: 500;
          background: #f0f0ee; color: #999;
          padding: 2px 6px; border-radius: 20px; margin-left: 5px; transition: all .15s;
        }
        .ftab.on .ftab-count { background: #e5eaf8; color: #1438a0; }

        /* GRID SECTION */
        .grid-section { background: #f2f1ed; padding: 0 52px 52px; }
        .grid-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 0 16px;
        }
        .grid-header-label {
          font-size: 11px; font-weight: 600; letter-spacing: .15em;
          text-transform: uppercase; color: #bbb;
        }
        .grid-header-sub { font-size: 11px; color: #ccc; }

        .pgrid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: #dedad3;
        }

        /* CARD */
        .card {
          background: #fff; display: flex; flex-direction: column;
          overflow: hidden; transition: background .18s;
        }
        .card:hover { background: #fafaf8; }

        .card-img {
          aspect-ratio: 4/3; background: var(--bg,#1c2d3e);
          position: relative; overflow: hidden; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .card-img img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .3s;
          z-index: 1;
        }
        .card:hover .card-img img { transform: scale(1.05); }
        .card-img svg {
          position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.3; transition: opacity .3s;
        }
        .card:hover .card-img svg { opacity: 0.45; }
        .card-tag {
          position: absolute; bottom: 12px; left: 12px; z-index: 1;
          font-size: 9px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase;
          background: rgba(0,0,0,.7); color: #fff; padding: 4px 9px; backdrop-filter: blur(4px);
        }

        .card-body { padding: 14px 14px 16px; display: flex; flex-direction: column; flex: 1; }

        .card-model {
          font-size: 17px; font-weight: 600; color: #0d0d0d;
          letter-spacing: -0.02em; line-height: 1; margin-bottom: 12px;
        }
        .card-app {
          display: none;
        }
        .card-specs { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; flex: 1; }
        .spec-row { display: flex; flex-direction: column; gap: 2px; }
        .spec-val { font-family: 'DM Mono', monospace; font-weight: 500; color: #0d0d0d; font-size: 13px; line-height: 1.2; }
        .spec-lbl { font-weight: 300; color: #bbb; font-size: 10px; line-height: 1.2; }

        .card-foot {
          display: flex; flex-direction: column; gap: 10px;
          padding-top: 14px; border-top: 1px solid #f0eeea;
        }
        .d-link {
          display: none;
        }
        .arr {
          display: none;
        }
        .btn-q {
          display: none;
        }
        .btn-quote-full {
          display: block; width: 100%; background: #1438a0; color: #fff; border: none;
          padding: 11px 0; font-size: 11px; font-weight: 600;
          letter-spacing: 0.07em; text-align: center; text-transform: uppercase;
          cursor: pointer; transition: background 0.15s;
        }
        .btn-quote-full:hover { background: #0f2d8a; }
        .details-text {
          display: block; text-align: center; font-size: 11px; font-weight: 400;
          color: #bbb; letter-spacing: 0.04em; transition: color 0.15s, border-color 0.15s;
          padding-bottom: 2px; border-bottom: 1px solid transparent; text-decoration: none;
        }
        .details-text:hover {
          color: #0d0d0d; border-bottom-color: #ddd;
        }

        /* COMPARISON TABLE */
        .compare-section {
          background: #fff; padding: 72px 52px;
          border-top: 1px solid #e8e6df;
        }
        .compare-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
          color: #1438a0; display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .compare-eyebrow::before { content: ''; width: 24px; height: 1px; background: #1438a0; flex-shrink: 0; }
        .compare-title {
          font-size: 34px; font-weight: 300; letter-spacing: -0.02em; color: #0d0d0d;
          line-height: 1.1; margin-bottom: 8px;
        }
        .compare-title strong { font-weight: 600; }
        .compare-sub {
          font-size: 13px; font-weight: 300; color: #999; margin-bottom: 40px;
        }

        .ctable-wrap { overflow-x: auto; }
        .ctable {
          width: 100%; border-collapse: collapse;
          font-size: 13px;
        }
        .ctable thead tr {
          border-bottom: 2px solid #0d0d0d;
        }
        .ctable thead th {
          font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
          color: #888; padding: 0 16px 14px; text-align: left; white-space: nowrap;
        }
        .ctable thead th:first-child { padding-left: 0; min-width: 160px; }
        .ctable tbody tr {
          border-bottom: 1px solid #f0eeea; transition: background .12s;
        }
        .ctable tbody tr:hover { background: #fafaf8; }
        .ctable tbody tr:last-child { border-bottom: none; }
        .ctable tbody td {
          padding: 15px 16px; vertical-align: middle;
        }
        .ctable tbody td:first-child { padding-left: 0; }
        .td-model { font-weight: 600; color: #0d0d0d; font-size: 14px; letter-spacing: -.01em; }
        .td-tag {
          display: inline-block; font-size: 9px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; background: #f0f0ee; color: #888;
          padding: 3px 7px; margin-top: 3px;
        }
        .td-num {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500; color: #0d0d0d;
        }
        .td-dim { font-size: 11px; color: #bbb; margin-top: 1px; }
        .td-app {
          font-size: 11px; font-weight: 300; color: #999; margin-top: 2px;
        }
        .ctable tfoot td {
          padding: 20px 16px 0;
          font-size: 11px; color: #bbb;
        }
        .ctable tfoot td:first-child { padding-left: 0; }
        .group-label {
          font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: #1438a0; padding: 20px 0 6px !important;
          border-bottom: none !important;
        }

        /* BOTTOM CTA */
        .cta-block {
          background: #1438a0; padding: 52px 52px;
          display: flex; align-items: center; justify-content: space-between; gap: 48px;
        }
        .cta-eyebrow {
          font-size: 10px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(255,255,255,.4); margin-bottom: 10px;
        }
        .cta-h {
          font-size: 28px; font-weight: 300; color: #fff; line-height: 1.3; letter-spacing: -.01em;
        }
        .cta-h strong { font-weight: 600; }
        .cta-btns { display: flex; gap: 10px; flex-shrink: 0; }
        .btn-cw {
          font-size: 11px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
          background: #fff; color: #1438a0; border: none; padding: 13px 26px; cursor: pointer; transition: background .15s;
        }
        .btn-cw:hover { background: #eaeefc; }
        .btn-co {
          font-size: 11px; font-weight: 500; letter-spacing: .07em; text-transform: uppercase;
          background: transparent; color: rgba(255,255,255,.55);
          border: 1px solid rgba(255,255,255,.25); padding: 13px 26px; cursor: pointer; transition: all .15s;
        }
        .btn-co:hover { color: #fff; border-color: rgba(255,255,255,.6); }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div>
            <div className="hero-eyebrow">Injection Molding Solutions</div>
            <h1 className="hero-h1">
              <span className="dim">Precision</span>
              <strong>Injection</strong>
              <strong>Molding</strong>
              <span className="dim">Machines</span>
            </h1>
            <p className="hero-desc">
              From 100 kN to 22,000 kN clamping force — engineered for caps, containers, household goods, medical components and industrial equipment. Built for global manufacturers.
            </p>
            <div className="hero-actions">
              <a className="btn-hero-primary" href="#products">Browse Products</a>
              <a className="btn-hero-ghost" href="/contact#inquiry-form">Download Catalog</a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">19+</div>
              <div className="hero-stat-label">Machine series</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">30M+</div>
              <div className="hero-stat-label">Parts / year</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">100+</div>
              <div className="hero-stat-label">Production lines</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">20yr</div>
              <div className="hero-stat-label">Experience</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-grid-lines"></div>
          <div className="hero-right-inner">
            <div className="hero-machine-svg">{heroSvg}</div>
          </div>
          <div className="hero-badge">
            <div className="hero-badge-label">Max clamping force</div>
            <div className="hero-badge-val">22,000 kN</div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <a href="#">Home</a> <span style={{ color: "#ddd" }}>›</span>
        <span className="cur">Horizontal Injection Molding Machine</span>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {(["all", "std", "hc", "sp"] as const).map((cat) => (
          <button
            key={cat}
            className={`ftab ${filter === cat ? "on" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat === "all"
              ? "All"
              : cat === "std"
                ? "Standard"
                : cat === "hc"
                  ? "High Capacity"
                  : "Specialty"}
            <span className="ftab-count">{counts[cat]}</span>
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid-section" id="products">
        <div className="grid-header">
          <span className="grid-header-label" id="glabel">
            {labels[filter]}
          </span>
          <span className="grid-header-sub">
            Zhangjiagang Best Machinery Co., Ltd.
          </span>
        </div>

        <div className="pgrid" id="pgrid">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className="card" data-cat={product.category}>
              <div className="card-img" style={{ "--bg": product.bgColor } as any}>
                <img
                  src={product.image}
                  alt={product.model}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                {svgs[idx]}
                <div className="card-tag">{product.tag}</div>
              </div>
              <div className="card-body">
                <div className="card-model">{product.model}</div>
                <div className="card-app">{product.app}</div>
                <div className="card-specs">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="spec-row">
                      <span className="spec-val">{spec.val}</span>
                      <span className="spec-lbl">{spec.lbl}</span>
                    </div>
                  ))}
                </div>
                <div className="card-foot">
                  <a className="btn-quote-full" href="/contact#inquiry-form">Get Quote</a>
                  <a className="details-text" href="/contact#inquiry-form">Request details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <section className="compare-section">
        <div className="compare-eyebrow">Technical Comparison</div>
        <h2 className="compare-title">
          Select the right machine
          <br />
          <strong>for your production.</strong>
        </h2>
        <p className="compare-sub">
          Compare key specifications across all series to find the optimal match for your mold and output requirements.
        </p>

        <div className="ctable-wrap">
          <table className="ctable">
            <thead>
              <tr>
                <th>Model</th>
                <th>Clamping force</th>
                <th>Injection volume</th>
                <th>Cycle time</th>
                <th>Platen size</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="group-label">
                  Standard Series
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-1000A</div>
                  <div className="td-tag">Packaging</div>
                </td>
                <td>
                  <div className="td-num">100 kN</div>
                </td>
                <td>
                  <div className="td-num">30–80 cc</div>
                </td>
                <td>
                  <div className="td-num">8–15 s</div>
                </td>
                <td>
                  <div className="td-num">320×320 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Caps, closures, small containers
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-1320A</div>
                  <div className="td-tag">Consumer Goods</div>
                </td>
                <td>
                  <div className="td-num">132 kN</div>
                </td>
                <td>
                  <div className="td-num">50–150 cc</div>
                </td>
                <td>
                  <div className="td-num">10–18 s</div>
                </td>
                <td>
                  <div className="td-num">370×370 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Household, technical parts
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-1400A</div>
                  <div className="td-tag">Storage</div>
                </td>
                <td>
                  <div className="td-num">140 kN</div>
                </td>
                <td>
                  <div className="td-num">80–220 cc</div>
                </td>
                <td>
                  <div className="td-num">12–20 s</div>
                </td>
                <td>
                  <div className="td-num">400×400 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Bowls, cups, food containers
                </td>
              </tr>

              <tr>
                <td colSpan={6} className="group-label">
                  High Capacity
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-2300A</div>
                  <div className="td-tag">Industrial</div>
                </td>
                <td>
                  <div className="td-num">230 kN</div>
                </td>
                <td>
                  <div className="td-num">200–500 cc</div>
                </td>
                <td>
                  <div className="td-num">15–28 s</div>
                </td>
                <td>
                  <div className="td-num">520×520 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Paint buckets, chemical drums
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-4800A</div>
                  <div className="td-tag">Logistics</div>
                </td>
                <td>
                  <div className="td-num">480 kN</div>
                </td>
                <td>
                  <div className="td-num">400–1,000 cc</div>
                </td>
                <td>
                  <div className="td-num">18–35 s</div>
                </td>
                <td>
                  <div className="td-num">700×700 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Turnover crates, trays
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-8500A</div>
                  <div className="td-tag">Furniture</div>
                </td>
                <td>
                  <div className="td-num">850 kN</div>
                </td>
                <td>
                  <div className="td-num">800–2,000 cc</div>
                </td>
                <td>
                  <div className="td-num">22–45 s</div>
                </td>
                <td>
                  <div className="td-num">1,050×1,050 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Chairs, bins, construction parts
                </td>
              </tr>

              <tr>
                <td colSpan={6} className="group-label">
                  Specialty
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">Syringe Series</div>
                  <div className="td-tag">Medical</div>
                </td>
                <td>
                  <div className="td-num">80–160 kN</div>
                </td>
                <td>
                  <div className="td-num">—</div>
                </td>
                <td>
                  <div className="td-num">—</div>
                </td>
                <td>
                  <div className="td-num">±0.005 mm precision</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Syringes, sterile disposables
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">PET Preform</div>
                  <div className="td-tag">PET / Caps</div>
                </td>
                <td>
                  <div className="td-num">500–800 kN</div>
                </td>
                <td>
                  <div className="td-num">up to 96 cavities</div>
                </td>
                <td>
                  <div className="td-num">8–12 s</div>
                </td>
                <td>
                  <div className="td-num">—</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Beverage preforms, bottle caps
                </td>
              </tr>
              <tr>
                <td>
                  <div className="td-model">BST-22000A</div>
                  <div className="td-tag">Pallets</div>
                </td>
                <td>
                  <div className="td-num">2,200 kN</div>
                </td>
                <td>
                  <div className="td-num">8,000+ cc</div>
                </td>
                <td>
                  <div className="td-num">30–60 s</div>
                </td>
                <td>
                  <div className="td-num">1,800×1,800 mm</div>
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>
                  Industrial pallets, platforms
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  All specifications are indicative. Final configuration depends on mold design, material, and production requirements. Contact our engineering team for a custom recommendation.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="cta-block">
        <div>
          <div className="cta-eyebrow">Engineering Support</div>
          <div className="cta-h">
            Share your product targets —
            <br />
            <strong>we'll find the right machine.</strong>
          </div>
        </div>
        <div className="cta-btns">
          <a className="btn-co" href="/contact#inquiry-form">Download Catalog</a>
          <a className="btn-cw" href="/contact#inquiry-form">Request a Quote</a>
        </div>
      </div>
    </Layout>
  );
}
