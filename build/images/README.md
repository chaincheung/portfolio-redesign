# Portfolio Images

Add your project images and assets here.

## Suggested Structure

You can organize your images by project:

```
images/
├── yellowheart-app/
│   ├── hero.jpg
│   ├── screenshot-1.jpg
│   └── screenshot-2.jpg
├── relationshipscience/
│   └── ...
├── relsci-radar/
│   └── ...
├── audiyo/
│   └── ...
├── payment-engine/
│   └── ...
└── best-design/
    └── featured-work.jpg
```

## How to Use Images in Components

In your React components, reference images like this:

```jsx
import yellowheartHero from '../images/yellowheart-app/hero.jpg';

// Then use it:
<img src={yellowheartHero} alt="Yellowheart App" />
```

Or if you prefer to use the public folder directly:

```jsx
<img src="/images/yellowheart-app/hero.jpg" alt="Yellowheart App" />
```

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: Optimize images for web (use tools like TinyPNG or ImageOptim)
- **Dimensions**: 
  - Hero images: 1920x1080px or larger
  - Project thumbnails: 800x600px
  - Screenshots: Match your design dimensions

