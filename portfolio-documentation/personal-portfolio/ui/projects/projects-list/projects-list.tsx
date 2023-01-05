import React from 'react';
import { Grid, GridProps } from '@mui/material';
import { Link } from '@showoff/design.navigation.link';
import { useProjects } from '@showoff/personal-portfolio.hooks.use-projects';
import { Card } from '@showoff/design.elements.card';

export type ProjectsListProps = {
  /**
   * the maximum number of projects to render
   * @default undefined
   */
  max?: number | undefined;
} & GridProps;

export function ProjectsList({ max, ...rest }: ProjectsListProps) {
  const { projects } = useProjects(max);
  return (
    <Grid
      container
      spacing={3}
      {...rest}
    >
      {projects.map((project, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
        >
          <Link
            to={`/projects/${project.id}`}
          >
            <Card
              title={project.name}
              bannerImage={project.image}
              subtitle={project.description}
              tags={project.tags}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
