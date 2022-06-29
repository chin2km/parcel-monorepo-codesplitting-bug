import React, { lazy } from 'react';

const RedLazy = lazy(() => import('./Red').then(mod => ({ default: mod.RedPage })));

export const RedPage = () => (
    <React.Suspense fallback={<h4>Loading Red  ⏳ ...</h4>}>
        <RedLazy />
    </React.Suspense>
);

