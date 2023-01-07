import { darkPortfolioTheme } from './dark-portfolio-theme';

it('should return display correct primary color with modification', () => {
  expect(darkPortfolioTheme({ palette: { primary: { main: '#FFFF' } } }).palette.primary).toBe('#FFFF');
});

it('should return display correct primary color with no modification', () => {
  expect(darkPortfolioTheme().palette.primary).toBe('#CBF382');
});
