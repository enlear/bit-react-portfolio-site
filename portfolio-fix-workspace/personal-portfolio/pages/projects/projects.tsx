import { Margin, MarginType } from '@showoff/design.layouts.margin'
import { Breadcrumb, BreadcrumbProps } from '@showoff/design.widgets.breadcrumb';
import { Grid, Link } from '@mui/material';
import React from 'react';
import { useProjects } from '@showoff/personal-portfolio.hooks.use-projects';
import { Card } from '@showoff/design.widgets.card';

export type ProjectsProps = {
} & BreadcrumbProps;

export function Projects({ crumbs = [{ crumb: 'projects.' }] }: ProjectsProps) {
  const { projects } = useProjects();

  return (
    <div>
      <Breadcrumb
        crumbs={crumbs}
      />
      <Margin
        mt={MarginType.LARGE}
      >
        <Grid
          container
          spacing={3}
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Link
                href={`/projects/${project.id}`}
                underline="none"
                sx={{ textDecoration: 'none' }}
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
      </Margin>
    </div>
  );
}
