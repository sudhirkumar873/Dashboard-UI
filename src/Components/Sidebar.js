import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { SlSocialDropbox } from "react-icons/sl";
import { TfiRocket } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { IoDiamondOutline, IoCarOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";

export const Sidebar = () => {
  const headings = [
    "MENU",
    "UI COMPONENTS",
    "DASHBOARD WIDGETS",
    "FORMS",
    "CHARTS",
  ];

  const subheading1 = [
    { name: "Dashboards", icon: <TfiRocket /> },
    { name: "Pages", icon: <SlSocialDropbox /> },
    { name: "Applications", icon: <CiCalendar /> }
  ];

  const subheadings2 = [
    [
      { name: "Elements", icon: <IoDiamondOutline /> },
      { name: "Components", icon: <IoCarOutline /> },
      { name: "Tables", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Minimal", icon: <IoDiamondOutline /> },
      { name: "CRM", icon: <IoCarOutline /> },
      { name: "Charts", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Analytics", icon: <IoDiamondOutline /> },
      { name: "Commerce", icon: <IoCarOutline /> },
      { name: "Sales", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Minimal", icon: <IoDiamondOutline /> },
      { name: "CRM", icon: <IoCarOutline /> },
      { name: "Charts", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Analytics", icon: <IoDiamondOutline /> },
      { name: "Commerce", icon: <IoCarOutline /> },
      { name: "Sales", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Overview", icon: <IoDiamondOutline /> },
      { name: "Reports", icon: <IoCarOutline /> },
      { name: "Statistics", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Profile", icon: <IoDiamondOutline /> },
      { name: "Settings", icon: <IoCarOutline /> },
      { name: "Help", icon: <FaRegAddressCard /> }
    ],
    [
      { name: "Projects", icon: <IoDiamondOutline /> },
      { name: "Tasks", icon: <IoCarOutline /> },
      { name: "Calendar", icon: <FaRegAddressCard /> }
    ]
  ];

  const variations = [
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"],
    ["Variation 1", "Variation 2"]
  ];

  const [expandedSubheading, setExpandedSubheading] = useState(
    Array(subheadings2.flat().length).fill(false)
  );

  const toggleSubheadingExpand = (headingIndex, subheadingIndex) => {
    const flatIndex = headingIndex * 3 + subheadingIndex;
    setExpandedSubheading((prev) => {
      const newExpanded = [...prev];
      newExpanded[flatIndex] = !newExpanded[flatIndex];
      return newExpanded;
    });
  };

  return (
    <div className="bg-white h-100vh w-64 p-2 overflow-y-auto p-2">
      {headings.map((heading, headingIndex) => (
        <div key={headingIndex} className="mb-4">
          <h6 className="text-blue-600 font-bold flex items-center">{heading}</h6>
          {headingIndex === 0 && subheading1.map((subheading, subIndex) => (
            <div key={subIndex} className="mb-2">
              <div
                className="flex items-center cursor-pointer justify-between"
                onClick={() => toggleSubheadingExpand(headingIndex, subIndex)}
              >
                <div className="flex items-center">
                  <span className="mr-1">{subheading.icon}</span>
                  <span className="font-bold">{subheading.name}</span>
                </div>
                {expandedSubheading[subIndex] ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {expandedSubheading[subIndex] && (
                <ul className="pl-5">
                  {subheadings2[headingIndex].map((nestedSubheading, subIndex2) => (
                    <li key={subIndex2} className="font-light flex items-center">
                      <span className="mr-2">
                        {nestedSubheading.icon}
                      </span>
                      {nestedSubheading.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {headingIndex !== 0 && subheadings2[headingIndex - 1]?.map((subheading, subIndex) => (
            <div key={subIndex} className="mb-2">
              <div
                className="flex items-center cursor-pointer justify-between"
                onClick={() => toggleSubheadingExpand(headingIndex, subIndex)}
              >
                <div className="flex items-center">
                  <span className="mr-2">{subheading.icon}</span>
                  <span className="font-bold">{subheading.name}</span>
                </div>
                {expandedSubheading[headingIndex * 3 + subIndex] ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {expandedSubheading[headingIndex * 3 + subIndex] && (
                <ul className="pl-5">
                  {variations[headingIndex - 1].map((variation, varIndex) => (
                    <li key={varIndex} className="font-bold flex items-center">
                      <span className="mr-2">
                        {subheading.icon}
                      </span>
                      {variation}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
