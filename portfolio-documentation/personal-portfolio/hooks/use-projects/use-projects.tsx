import { useEffect, useState } from 'react';
import { Project, ProjectKind } from '@showoff/personal-portfolio.entities.project';
import { sampleProjects } from '@showoff/personal-portfolio.mocks.sample-projects';

export function useProjects(max?: number | undefined, type?: ProjectKind | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const projectList = sampleProjects();
      const filteredProjects = type ? projectList.filter((project) => project.type === type) : projectList;
      if (max) {
        setProjects(filteredProjects.slice(0, max));
      } else {
        setProjects(filteredProjects);
      }
      setLoading(false);
    };
    loadProjects();
  }, [type]);

  return { projects, loading };
}
