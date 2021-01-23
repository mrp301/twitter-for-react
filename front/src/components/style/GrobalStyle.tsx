/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, jsx, css } from '@emotion/react';

import resetStyle from './ResetStyle';
import marginStyle from './MarginStyle';
import defaultStyle from './DefaultStyle';

export default () => <Global styles=
  {[
    resetStyle,
    defaultStyle,
    marginStyle
  ]}
/>