// Intellisense for Sass modules
// Generate types: npx typed-scss-modules src --watch --nameFormat none --exportType default
// npm run generate-types
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
