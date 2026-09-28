import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const highlights = [
    {
      number: "13",
      title: "Years of",
      subtitle: "Experience",
      icon: "✦",
    },
    {
      number: "2000+",
      title: "Happy",
      subtitle: "Clients",
      icon: "◉",
    },
    {
      number: "",
      title: "Quality",
      subtitle: "& Trust",
      icon: "◇",
    },
    {
      number: "",
      title: "Complete Home",
      subtitle: "Furnishing Solutions",
      icon: "✧",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        {highlights.map((item, index) => (
          <React.Fragment key={index}>
            <div className="why-item">
              <div className="why-icon">{item.icon}</div>

              <div className="why-content">
                {item.number && (
                  <div className="why-number">{item.number}</div>
                )}

                <div className="why-title">{item.title}</div>
                <div className="why-subtitle">{item.subtitle}</div>
              </div>
            </div>

            {index < highlights.length - 1 && (
              <div className="why-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;