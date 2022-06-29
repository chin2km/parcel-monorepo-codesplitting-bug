import React from 'react';

const BlueLazy = React.lazy(() => import('./Blue').then(mod => ({ default: mod.BluePage })));

export const BluePage = () => (
    <React.Suspense fallback={<h4>Loading Blue  ⏳ ...</h4>}>
        <BlueLazy />
    </React.Suspense>
);
