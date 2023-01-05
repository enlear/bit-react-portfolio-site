import React from 'react';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { Breadcrumb, BreadcrumbProps } from '@showoff/design.navigation.breadcrumb';
import { ProjectsList } from '@showoff/personal-portfolio.ui.projects.projects-list';

export type ProjectsPageProps = {
} & Partial<BreadcrumbProps>;

export function ProjectsPage({ crumbs = [{ crumb: 'projects.' }] }: ProjectsPageProps) {
  return (
    <>
      <Breadcrumb
        crumbs={crumbs}
      />
      <Margin
        mt={MarginType.LARGE}
      >
        <ProjectsList />
      </Margin>
    </>
  );
}
