import React, { useContext, useEffect } from 'react'
import SkillsComp from '../components/Skills'
import { TitleContext } from '../context/TitleProvider';

const Skills = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(`Skils - Amdadul Hoque's Portfolio`);
  }, [setTitle]);

  return (
    <SkillsComp></SkillsComp>
  )
}

export default Skills