import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://eyesthatsee.local/'
    }
  ],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
};
