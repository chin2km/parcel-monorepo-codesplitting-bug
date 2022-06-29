import React from 'react';

const GreenLazy = React.lazy(() => import('./Green').then(mod => ({ default: mod.GreenPage })));

export const GreenPage = () => (
    <React.Suspense fallback={<h4>Loading Green  ⏳ ...</h4>}>
        <GreenLazy />
    </React.Suspense>
);
