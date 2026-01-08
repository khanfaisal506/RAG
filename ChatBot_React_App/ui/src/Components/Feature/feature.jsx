import "./feature.css";
import { useState } from "react";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("performance");

  const tabs = [
    { id: "performance", icon: "⚡", label: "Performance" },
    { id: "security", icon: "🔒", label: "Security" },
    { id: "network", icon: "🌐", label: "Network" },
    { id: "analytics", icon: "📊", label: "Analytics" },
    { id: "integration", icon: "🔧", label: "Integration" },
  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Core Features</h2>

      <div className="features-container">
        {/* LEFT TABS */}
        <div className="feature-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="feature-content">
          {activeTab === "performance" && (
            <div className="content-panel active">
              <h3>Lightning Fast Performance</h3>
              <p>
                Experience unprecedented speed with our quantum-powered
                infrastructure.
              </p>
              <ul className="feature-list">
                <li>Sub-millisecond response times</li>
                <li>99.99% uptime guarantee</li>
                <li>Automatic scaling based on demand</li>
                <li>Real-time data synchronization</li>
              </ul>
            </div>
          )}

          {activeTab === "security" && (
            <div className="content-panel active">
              <h3>Military-Grade Security</h3>
              <p>
                Multi-layered protection using the most advanced encryption
                protocols.
              </p>
              <ul className="feature-list">
                <li>256-bit AES encryption</li>
                <li>Biometric authentication</li>
                <li>Zero-knowledge architecture</li>
                <li>Real-time threat detection</li>
              </ul>
            </div>
          )}

          {activeTab === "network" && (
            <div className="content-panel active">
              <h3>Global Neural Network</h3>
              <p>
                Seamless global connectivity with intelligent routing and
                low-latency infrastructure.
              </p>
              <ul className="feature-list">
                <li>200+ global data centers</li>
                <li>5G & satellite connectivity</li>
                <li>Decentralized architecture</li>
              </ul>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="content-panel active">
              <h3>Advanced Analytics</h3>
              <p>
                AI-driven insights for real-time decision making.
              </p>
              <ul className="feature-list">
                <li>Predictive analytics</li>
                <li>Machine learning models</li>
                <li>Custom dashboards</li>
                <li>Automated reports</li>
              </ul>
            </div>
          )}

          {activeTab === "integration" && (
            <div className="content-panel active">
              <h3>Seamless Integration</h3>
              <p>
                Plug-and-play integrations with thousands of services.
              </p>
              <ul className="feature-list">
                <li>REST & WebSocket APIs</li>
                <li>SDKs for major platforms</li>
                <li>Custom webhooks</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
