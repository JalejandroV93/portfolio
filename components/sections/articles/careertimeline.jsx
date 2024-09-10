import React from 'react';

import career from "../../../styles/sections/index/career.module.scss";
import Badges from "../../utils/badge.list.util";
import { formatDateRange } from '../../utils/date.util';

const PositionItem = ({ title, startDate, endDate, description, achievements, badges }) => (
  <div className={career.position}>
    <div className={career.positionContent}>
      <span className={career.positionHeader}>
        <h3>{title}</h3>
        <h4>{formatDateRange(startDate, endDate)}</h4>
      </span>
      <p>{description}</p>
      {achievements && achievements.length > 0 && (
        <>
          <p>Algunos proyectos clave completados durante este tiempo 👇</p>
          <ul className={career.list}>
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.title}
                {achievement.result && (
                  <span className={career.subList}>
                    <span className={career.bullet}></span>
                    {achievement.result}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      {badges && badges.length > 0 && (
        <Badges 
          list={badges} 
          block="stack" 
          fullContainer={true}
          color={true}
        />
      )}
    </div>
    <div className={career.positionAlt}></div>
  </div>
);

const CareerTimeline = ({ positions }) => (
  <article className={career.companyPositions}>
    {positions.map((position, index) => (
      <PositionItem key={index} {...position} />
    ))}
  </article>
);

export default CareerTimeline;