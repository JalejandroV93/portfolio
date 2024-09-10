import Image from 'next/image';
import React from 'react';

import career from "../../../styles/sections/index/career.module.scss";

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  
  return { years, months };
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('es-ES', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const formatDuration = (years, months) => {
  const parts = [];
  if (years > 0) {
    parts.push(`${years} año${years !== 1 ? 's' : ''}`);
  }
  if (months > 0) {
    parts.push(`${months} mes${months !== 1 ? 'es' : ''}`);
  }
  return parts.join(' ');
};

const CareerArticle = ({ company, position, startDate, endDate, location, description, logo }) => {
  const { years, months } = calculateDuration(startDate, endDate);
  
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : 'Presente';
  const durationString = formatDuration(years, months);

  return (
    <article className={career.company}>
      <div className={career.companyContent}>
        <span className={career.companyHeader}>
          <h3>{company}</h3>
          <h4>{position}</h4>
          <h4>
            {`${formattedStartDate} - ${formattedEndDate}`}
            {durationString && ` · ${durationString}`}
          </h4>
          <h5>{location}</h5>
        </span>
        <p>{description}</p>
      </div>
      <div className={career.companyAlt}></div>
      {logo ? (<div className={career.companyLogo}>
              <Image
                src={logo}
                alt="Company Logo"
                width={100}
                height={100}
              />
            </div>) : null}
    </article>
  );
};

export default CareerArticle;