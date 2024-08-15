import React from 'react';
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa";

export const Breadcrump = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" style={{ marginTop: '-10px' }}>
        <ol className="breadcrumb">
          <HiOutlineBuildingLibrary className='text-2xl'/>
          <li className="breadcrumb-item active" aria-current="page">Minimal Dashboard</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb" style={{ marginTop: '-10px' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><FaBuilding className='text-xl'/></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          <li className="breadcrumb-item active" aria-current="page">Minimal Dashboard Example</li>
        </ol>
      </nav>
    </div>
  );
};
