console.log(`>> CLEANING CACHE`);
await $`rm -rf .parcel-cache parcel-bundle-reports ./packages/application/dist`;
await sleep(1000);

process.env.FORCE_COLOR = '1';

cd('./packages/application');

await $`PORT=4000 yarn build`;
