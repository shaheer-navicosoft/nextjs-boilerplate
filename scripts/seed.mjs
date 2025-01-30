import seedAdmin from '../lib/seeders/adminSeeder.mjs';

async function runSeeders() {
  console.log('Starting seeding...');
  await seedAdmin();
  console.log('Seeding completed!');
  process.exit(0);
}

runSeeders().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
}); 