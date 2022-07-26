import React from 'react';

import { Container } from './styles';

interface ITooltipProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip = ({ title, children, className = '' }: ITooltipProps) => {
  return (
    <Container className={className} >
      {children}
      <span>{title}</span>
    </Container>
  )
}

export { Tooltip };
