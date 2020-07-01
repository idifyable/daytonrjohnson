import React from 'react';
import { NeonBillboard } from '../components/NeonBillboard';
import { WhoAmI } from '../components/WhoAmI';
import { Projects } from '../components/Projects';

export const Home = (props: any) => {
  return (
    <div className="Home">
      <NeonBillboard />
      <WhoAmI />
      <Projects />
    </div>
  );
};