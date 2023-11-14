import 'styled-components';

import type { BaseTheme } from './styles/theme/theme.type';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {}
}
