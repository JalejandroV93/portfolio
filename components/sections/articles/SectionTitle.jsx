import React from 'react';
import career from "../../../styles/sections/index/career.module.scss";

const SectionTitle = ({ title, preTitle, subTitle }) => (
  <div className={career.sectionTitle}>
    {preTitle && <h3 className={career.preTitle}>{preTitle}</h3>}
    <h2 className={career.title}>{title}</h2>
    {subTitle && <p className={career.subTitle}>{subTitle}</p>}
  </div>
);

export default SectionTitle;