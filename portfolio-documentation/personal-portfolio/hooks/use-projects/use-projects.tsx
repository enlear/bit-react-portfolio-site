import { useEffect, useState } from 'react';
import { Project } from '@showoff/personal-portfolio.entities.project';
import { sampleProjects } from '@showoff/personal-portfolio.mocks.sample-projects';

export function useProjects(max?: number | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const projectList = sampleProjects();
      if (max) {
        setProjects(projectList.slice(0, max));
      } else {
        setProjects(projectList);
      }
      setLoading(false);
    };
    loadProjects();
  }, []);

  return { projects, loading };
}
