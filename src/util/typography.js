import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

let latoIndex = noriegaTheme.googleFonts.findIndex(
  font => font.name === 'Lato'
);
let lato = noriegaTheme.googleFonts[latoIndex];

noriegaTheme.googleFonts[latoIndex] = lato;
noriegaTheme.headerWeight = 700;

export default new Typography(noriegaTheme);
