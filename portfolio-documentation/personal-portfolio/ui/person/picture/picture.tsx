import React from 'react';
import { Artwork } from '@showoff/personal-portfolio.ui.person.artwork';
import {
  Box, BoxProps, Theme, useMediaQuery,
} from '@mui/material';

export type PictureProps = {
  /**
   * the picture URL to show
   */
  pictureUrl: string
} & BoxProps;

export function Picture({ pictureUrl, sx, ...rest }: PictureProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', width: '100%', ...sx }}
      {...rest}
    >
      <Box sx={{
        position: 'relative',
        top: 30,
        left: smDown ? '13%' : '20%',
      }}>
        <img
          src={pictureUrl}
          style={{
            width: smDown ? 275 : 375,
            height: smDown ? 275 : 400,
          }}
        />
      </Box>
      <Box sx={{
        position: 'relative',
        top: 0,
        bottom: 0,
        right: 0,
        left: smDown ? -275 : -340,
      }}>
        <Artwork
          height={smDown ? 375 : 500}
          width={smDown ? 350 : 500}
        />
      </Box>
    </Box>
  );
}
