process.env.FORCE_COLOR = '1';

cd('./packages/application');

await $`PORT=4000 yarn dev`;
