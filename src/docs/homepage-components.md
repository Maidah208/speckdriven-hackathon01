# Homepage Components

This document describes the new homepage components that were created to improve the user experience and visual consistency with module pages.

## Components

### HomepageHero

The `HomepageHero` component provides the main call-to-action section on the homepage. It includes:

- A title with gradient styling
- A subtitle with descriptive text
- Two primary buttons for user engagement:
  - "Get Started with Modules" - General entry point
  - "Start Learning" - Direct access to core concepts

### HomepageFeatures

The `HomepageFeatures` component displays key educational modules in a card-based layout. It includes:

- Three feature cards with educational module categories:
  - Core Concepts
  - Practical Modules
  - Advanced Topics
- Each card has an icon, title, description, and "Learn More" button
- Responsive grid layout that adapts to different screen sizes

### HomepageNavigation

The `HomepageNavigation` component provides breadcrumb-style navigation to help users understand their location and navigate to key sections.

## Design Patterns

### Typography

- Uses CSS custom properties for consistent typography:
  - `--ifm-h1-font-size` for main titles
  - `--ifm-h3-font-size` for section titles
  - `--ifm-p-font-size` for body text
  - `--ifm-heading-font-weight` for heading weight
  - `--ifm-line-height-base` for consistent line height

### Spacing

- Uses CSS custom properties for consistent spacing:
  - `--ifm-spacing-horizontal` and `--ifm-spacing-vertical` for padding/margin
  - `--ifm-global-spacing` for gap values
  - Calculations using `calc()` for proportional spacing

### Color Scheme

- Uses Docusaurus CSS custom properties for consistent theming
- Proper contrast ratios maintained for accessibility
- Dark mode support through `html[data-theme='dark']` selectors