import React from 'react';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { Picture } from '@showoff/personal-portfolio.ui.person.picture';
import { Icons } from '@showoff/personal-portfolio.ui.social.icons';
import { Box, Theme, useMediaQuery, Grid, } from '@mui/material';
import { ProjectsList } from '@showoff/personal-portfolio.ui.projects.projects-list';

export type LandingPageProps = {
};

type PersonReachSectionProps = {} & React.HTMLAttributes<HTMLElement>;

const PersonReachSection = (props: PersonReachSectionProps) => (
  <section
    {...props}
  >
    <Margin
      mt={MarginType.MEDIUM}
    >
      <LinkText
        linkText="Check my projects"
        url="/projects"
        color="primary"
        fontWeight={400}
        fontSize={22}
        iconSize="small"
      />
    </Margin>
    <Margin
      mt={MarginType.LARGE}
    >
      <Heading
        sx={{ lineHeight: 1.5, display: 'inline', color: (theme) => theme.palette.primary.main }}
        value={'Don\'t be a stranger!'}
        fontSize={22}
        fontWeight={400}
      />
      <Typography
        fontSize={14}
      >
        Connect with me online
      </Typography>
      <Icons />
    </Margin>
  </section>
);

export function LandingPage(props: LandingPageProps) {
  const AVATAR_URL = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80';
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
      >
        <Box sx={{ width: '100%' }}>
          <Typography
            fontWeight={700}
            fontSize={28}
            {...mdDown && {
              textAlign: 'center',
            }}
          >
            Tobias Sundberg
          </Typography>
          <Margin
            mt={MarginType.SMALL}
            {...mdDown && {
              style: {
                textAlign: 'center',
              },
            }}
          >
            <Heading
              sx={{ color: (theme) => theme.palette.primary.main, display: 'inline', lineHeight: '104px' }}
              fontSize={80}
              fontWeight={900}
              value={'CREATIVE DEVELOPER WEB DESIGNER'}
            />
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Typography
              {...mdDown && {
                textAlign: 'center',
              }}
              sx={{
                fontSize: '22px',
                fontWeight: '400',
                lineHeight: '32px'
              }}
            >
              Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.
            </Typography>
            {!mdDown && <PersonReachSection />}
          </Margin>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Picture
          pictureUrl={AVATAR_URL}
        />
      </Grid>
      {mdDown && (
        <Grid item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PersonReachSection />
        </Grid>
      )}
      <Grid item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProjectsList
          max={6}
        />
      </Grid>
    </Grid >
  );
}
