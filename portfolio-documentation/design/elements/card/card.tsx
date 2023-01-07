import React, { useMemo } from 'react';
import { Card as MUICard } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Chip } from '@showoff/design.elements.chip';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { Box } from '@mui/material';
import { Typography } from '@showoff/design.typography.typography';
import { Heading } from '@showoff/design.typography.heading';

export type CardProps = {
  /**
   * The title of the card
   */
  title: string

  /**
   * The subtitle of the card
   */
  subtitle?: string

  /**
   * the tags of the card
   */
  tags?: string[]

  /**
   * banner image of the card
   */
  bannerImage?: string

  /**
   * the card view to use
   * @default 'compact'
   */
  view?: 'compact' | 'detailed';
};

export function Card({ subtitle, tags = [], title, bannerImage, view = 'compact' }: CardProps) {

  const CardBanner = useMemo(() => <CardMedia
    component="img"
    image={bannerImage}
    sx={{
      ...view === 'compact' && {
        height: 180,
        transition: 'transform 0.2s',
        // zoom in and out when hovered
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
      ...view === 'detailed' && { borderRadius: '8px', width: '600px', height: '340px' }
    }}
  />, [bannerImage, view]);

  const CardTags = useMemo(() => {
    return (
      <>
        {tags.length > 0 && (
          <Margin
            mt={MarginType.SMALL}
          >
            <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', }}>
              {tags.map((tag, index) => (
                <Chip
                  content={tag}
                  key={`${tag}#${index}`}
                />
              ))}
            </Box>
          </Margin>
        )}
      </>
    )
  }, []);

  if (!bannerImage) {
    throw new Error('bannerImage is required');
  }

  if (view === 'compact') {
    return (
      <MUICard
        variant='outlined'
        sx={{
          background: (theme) => theme.palette.background.paper
        }}
      >
        {CardBanner}
        <CardContent>
          <Typography variant="body1"
            fontWeight={700}
            fontSize={18}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2"
              fontWeight={400}
              lineHeight={1.5}
              color="textSecondary"
            >
              {subtitle}
            </Typography>
          )}
          {CardTags}
        </CardContent>
      </MUICard>
    )
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      {CardBanner}
      <Box>
        <Heading
          value={title}
        />
        <Margin
          mt={MarginType.SMALL}
        />
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {subtitle}
        </Typography>
        {CardTags}
      </Box>
    </Box>
  );
}
