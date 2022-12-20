import { Theme, useMediaQuery } from '@mui/material';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { WorkItemProps, WorkItem } from '@showoff/design.widgets.work-item';

import React from 'react';

const workItems: WorkItemProps[] = [
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '5 Years',
    size: 5,
  },
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '4 Years',
    size: 4,
  },
  {
    company: 'Cubic Telecom',
    designation: 'UX Engineer',
    period: '3 Years',
    size: 3,
  },
];

export type HistoryProps = {
};

export function History(props: HistoryProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return (
    <>
      {workItems.map((workItem, index) => (
        <Margin
          key={index}
          mb={MarginType.SMALL}
        >
          <WorkItem {...workItem}
            {...smDown && {
              size: 10,
            }}
          />
        </Margin>
      ))}
    </>
  );
}
