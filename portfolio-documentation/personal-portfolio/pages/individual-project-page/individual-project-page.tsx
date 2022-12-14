import React from 'react';
import { useParams } from 'react-router-dom';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.navigation.breadcrumb';
import { Chip } from '@showoff/design.elements.chip';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { useProject } from '@showoff/personal-portfolio.hooks.use-project';
import { Container, Grid, GridProps, Box, CardMedia, } from '@mui/material';
import { SocialLinks } from '@teambit/people.ui.social-links';

export type IndividualProjectPageProps = {
} & GridProps;

export function IndividualProjectPage(props: IndividualProjectPageProps) {
  const { id } = useParams();
  const { project } = useProject({ id: id as string });

  if (!project) {
    return (
      <Box sx={{ display: 'flex', my: 15, justifyContent: 'center' }}>
        <Heading
          value="Project not found"
        />
      </Box>
    );
  }

  return (
    <>
      <Grid container
        {...props}
      >
        <Grid item
          xs={4}
          md={4}
        >
          <LinkText
            linkText="Back to Projects"
            url="/projects"
            color="secondary"
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        >
          <Heading
            value={project.name}
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        />
      </Grid>
      <Container
        maxWidth="md"
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              image={project.image}
              sx={{
                height: '496px',
                borderRadius: '8px',
                width: '100%',
              }}
            />
          </Box>
        </Margin>
      </Container>
      <Container
        maxWidth="sm"
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Breadcrumb
            crumbs={[
              { crumb: 'Description' },
            ]}
            typographyProps={{
              color: 'text.primary',
              variant: 'body1',
              fontSize: 18,
            }}
          />
          <Typography>
            {project.description}
          </Typography>
        </Margin>
        {project.tags.length > 0 && (
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Breadcrumb
              crumbs={[
                { crumb: 'Attributes' },
              ]}
              typographyProps={{
                color: 'text.primary',
                variant: 'body1',
                fontSize: 18,
              }}
            />
            <Box sx={{
              display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap',
            }}>
              {project.tags.map((tag) => (
                <Chip
                  content={tag}
                />
              ))}
            </Box>
          </Margin>
        )}
        <Margin
          mt={MarginType.LARGE}
        >
          <SocialLinks
            links={[
              ...project.links.github ? [{
                name: 'github',
                url: project.links.github,
              }] : [],
              ...project.links.website ? [{
                name: 'website',
                url: project.links.website,
              }] : [],
            ] as []}
            style={{
              display: 'flex',
              gap: 15,
              justifyContent: 'flex-start',
            }}
          />
        </Margin>
      </Container>
    </ >
  );
}
