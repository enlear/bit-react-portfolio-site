import { useEffect, useState } from 'react';
import { Project } from '@showoff/personal-portfolio.entities.project';
import { sampleProjects } from '@showoff/personal-portfolio.mocks.sample-projects';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      setProjects(sampleProjects());
    };
    loadProjects();
  }, []);

  return { projects, loading };
}
