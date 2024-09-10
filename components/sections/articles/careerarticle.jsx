import Image from 'next/image';
import React from 'react';

import career from "../../../styles/sections/index/career.module.scss";
import { formatDateRange } from '../../utils/date.util';

const CareerArticle = ({ company, position, startDate, endDate, location, description, logo }) => (
  <article className={career.company}>
    <div className={career.companyContent}>
      <span className={career.companyHeader}>
        <h3>{company}</h3>
        <h4>{position}</h4>
        <h4>{formatDateRange(startDate, endDate)}</h4>
        <h5>{location}</h5>
      </span>
      <p>{description}</p>
    </div>
    <div className={career.companyAlt}></div>
    {logo && (
      <div className={career.companyLogo}>
        <Image src={logo} alt={`${company} Logo`} width={100} height={100} />
      </div>
    )}
  </article>
);

export default CareerArticle;