import React from 'react';
import { Header } from '../components/Header';
import { NeonBillboard } from '../components/NeonBillboard';
import { WhoAmI } from '../components/WhoAmI';
import { Projects } from '../components/Projects';
import { MyProjects } from '../components/MyProjects';

export const Home = () => {
  return (
    <div className="Home">
      <NeonBillboard />
      <WhoAmI />
      <Projects />
    </div>
  );
};