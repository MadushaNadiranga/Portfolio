// TechStack.jsx
import React from "react";
import TechIcon from "../componants/Models/TechLogos/TechIcon";
import TitleHeader from "../componants/TitleHeader";
import { techStackIcons } from "../constants";


const AUTO_CATEGORY_MAP = [
  { match: /react|next|vue|angular|svelte|three/i, category: "Frontend Development" },
  { match: /node|express|fastapi|django|flask|python|java|spring|go|golang/i, category: "Backend Development" },
  { match: /mongo|postgres|mysql|sqlite|redis|cassandra|dynamo/i, category: "Databases" },
  { match: /git|github|gitlab|bitbucket|docker|k8s|kubernetes|aws|azure|gcp|netlify|vercel/i, category: "Version Control & Cloud" },
];

function autoCategorize(name = "") {
  for (const rule of AUTO_CATEGORY_MAP) {
    if (rule.match.test(name)) return rule.category;
  }
  return "Other";
}

const TechStack = () => {
  
  // Group icons by category; use item's category if present else autoCategorize
  const groupedIcons = techStackIcons.reduce((acc, item) => {
    const category = (item.category && item.category.trim()) || autoCategorize(item.name);
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Desired order for categories (others will follow)
  const desiredOrder = [
    "Backend Development",
    "Frontend Development",
    "Databases",
    "Version Control & Cloud",
  ];

  const orderedCategories = [
    ...desiredOrder.filter((c) => groupedIcons[c]),
    ...Object.keys(groupedIcons).filter((c) => !desiredOrder.includes(c)),
  ];

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"

          
        />
<br/><br/>
        <div className="tech-sections">
          {orderedCategories.map((category) => (
            <section key={category}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                {category}
              </h2>

              <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {groupedIcons[category].map((icon) => (
                  <div
                    key={icon.name}
                    className="overflow-hidden group xl:rounded-full rounded-lg"
                  >
                   
                    <div className="tech-card-content flex items-center gap-4 p-4">
                      <div className="tech-icon-wrapper w-50 h-50 flex-shrink-0">
                        <TechIcon model={icon} />
                      </div>

                      <div className="padding-x w-full">
                        <p className="text-sm md:text-base font-medium">{icon.name}</p>
                        {icon.subtitle && <p className="text-xs opacity-70">{icon.subtitle}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
