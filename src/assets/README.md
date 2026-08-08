# Image Guide - Forge By Myneni

Replace each placeholder with your own photo (same filename, same folder).
Use landscape orientation, minimum 1920px wide, JPG format.

## Folder Structure

```
src/assets/
│
├── hero/                        ← HOME PAGE SLIDER (3 rotating images)
│   ├── slide-1.jpg              ← Wide interior shot (living room / main space)
│   ├── slide-2.jpg              ← Kitchen, bedroom, or dining area
│   └── slide-3.jpg              ← Office, workspace, or another angle
│
├── pages/                       ← PAGE BANNER BACKGROUNDS
│   ├── about-hero.jpg           ← About Us page top banner
│   ├── services-hero.jpg        ← Services page top banner
│   ├── projects-hero.jpg        ← Projects page top banner
│   ├── contact-hero.jpg         ← Contact Us page top banner
│   ├── home-about.jpg           ← Home page "About" section (square-ish works)
│   └── home-statement.jpg       ← Home page quote/parallax section (wide)
│
├── services/                    ← ONE IMAGE PER SERVICE
│   ├── interior-design.jpg      ← Interior design & space planning
│   ├── residential.jpg          ← Residential & commercial interiors
│   ├── turnkey.jpg              ← Turnkey fit-out works
│   ├── joinery.jpg              ← Custom joinery & furniture
│   ├── landscaping.jpg          ← Landscaping & outdoor design
│   ├── kitchen.jpg              ← Modular kitchen design
│   ├── decor.jpg                ← Decor & styling
│   └── management.jpg           ← Project management
│
├── projects/                    ← ONE FOLDER PER PROJECT
│   ├── project-1/
│   │   ├── cover.jpg            ← Main thumbnail shown in grid
│   │   ├── 1.jpg                ← Detail photo 1
│   │   ├── 2.jpg                ← Detail photo 2
│   │   └── 3.jpg                ← Detail photo 3
│   ├── project-2/
│   │   └── (same structure)
│   └── project-3/
│       └── (same structure)
│
├── logo.jpeg                    ← Dark/black logo (used in footer)
├── profile_photo.jpeg           ← White background logo (used in navbar)
└── cover_photo.jpeg             ← Original photo (no longer used by site)
```

## Where to get photos

- Your own project photos (BEST option)
- https://unsplash.com/s/photos/interior-design (free, no attribution needed)
- https://pexels.com/search/interior-design/ (free, commercial use OK)
- https://pixabay.com (free, no attribution)

## Tips

- Hero slides: Use dramatic wide shots, dark enough that white text is readable
- Page banners: Wide shots work best, the overlay darkens them automatically
- Service images: Can be tighter/focused shots of that specific service
- Project photos: Use your actual project work — this builds client trust

## Adding a new project

1. Create folder: `src/assets/projects/project-4/`
2. Add photos: `cover.jpg`, `1.jpg`, `2.jpg`, etc.
3. Edit `src/app/config/projects.config.ts` — add a new entry to the array
4. Push to GitHub → Netlify auto-deploys
