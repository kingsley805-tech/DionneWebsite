# Color Codes Reference

This document lists all color codes used throughout the project.

## HEX Color Codes

### Primary Brand Colors
- `#9B2430` / `#992430` - Burgundy/Red (Primary brand color)
- `#FFDC00` / `#ffdd00` - Gold/Yellow (Secondary brand color)
- `#FFD700` - Gold (Alternative gold shade)
- `#7a1d26` - Dark Burgundy (Hover states)
- `#7b1e23` - Dark Red (Card backgrounds)

### Background Colors
- `#000000` - Pure Black
- `#0a0a0a` - Near Black (Footer background)
- `#1a1a1a` - Dark Gray (Loader background gradient)
- `#333333` - Medium Dark Gray (Section backgrounds)

### Accent Colors
- `#b74d01` - Orange/Brown (Book section heading)
- `#9e846b` - Tan/Brown (Life roles section)
- `#F3BA00` - Yellow/Gold (Button accent)
- `#646cffaa` - Blue with transparency (App.css logo hover)
- `#61dafbaa` - Cyan with transparency (App.css logo hover)
- `#888` - Gray (App.css read-the-docs)

### Text Colors
- `#000` - Black (Text on light backgrounds)

---

## HSL Color Codes (from CSS Variables)

### Light Mode (from `src/index.css`)

#### Base Colors
- `--background: 0 0% 100%` - White
- `--foreground: 0 0% 8%` - Near Black
- `--card: 0 0% 100%` - White
- `--card-foreground: 0 0% 8%` - Near Black
- `--popover: 0 0% 100%` - White
- `--popover-foreground: 0 0% 8%` - Near Black

#### Primary Colors
- `--primary: 354 62% 37%` - Burgundy (Main brand color)
- `--primary-foreground: 0 0% 100%` - White

#### Secondary Colors
- `--secondary: 35 40% 65%` - Light Tan
- `--secondary-foreground: 0 0% 8%` - Near Black

#### Muted Colors
- `--muted: 30 20% 96%` - Very Light Beige
- `--muted-foreground: 0 0% 40%` - Medium Gray

#### Accent Colors
- `--accent: 35 45% 70%` - Light Gold/Tan
- `--accent-foreground: 0 0% 8%` - Near Black

#### Destructive Colors
- `--destructive: 0 84.2% 60.2%` - Red
- `--destructive-foreground: 0 0% 100%` - White

#### Border & Input
- `--border: 30 15% 90%` - Light Beige
- `--input: 30 15% 90%` - Light Beige
- `--ring: 345 75% 28%` - Dark Burgundy

#### Brand Colors
- `--cream: 40 30% 97%` - Cream
- `--gold: 45 100% 50%` - Gold
- `--burgundy: 354 62% 37%` - Burgundy
- `--burgundy-light: 345 60% 35%` - Light Burgundy
- `--dark: 0 0% 8%` - Near Black

#### Sidebar Colors
- `--sidebar-background: 0 0% 98%` - Off White
- `--sidebar-foreground: 240 5.3% 26.1%` - Dark Gray
- `--sidebar-primary: 240 5.9% 10%` - Very Dark Gray
- `--sidebar-primary-foreground: 0 0% 98%` - Off White
- `--sidebar-accent: 240 4.8% 95.9%` - Very Light Gray
- `--sidebar-accent-foreground: 240 5.9% 10%` - Very Dark Gray
- `--sidebar-border: 220 13% 91%` - Light Gray
- `--sidebar-ring: 217.2 91.2% 59.8%` - Blue

### Dark Mode (from `src/index.css`)

#### Base Colors
- `--background: 0 0% 6%` - Very Dark Gray
- `--foreground: 0 0% 95%` - Near White
- `--card: 0 0% 8%` - Dark Gray
- `--card-foreground: 0 0% 95%` - Near White
- `--popover: 0 0% 8%` - Dark Gray
- `--popover-foreground: 0 0% 95%` - Near White

#### Primary Colors
- `--primary: 345 70% 45%` - Burgundy (Lighter in dark mode)
- `--primary-foreground: 0 0% 100%` - White

#### Secondary Colors
- `--secondary: 35 30% 25%` - Dark Tan
- `--secondary-foreground: 0 0% 95%` - Near White

#### Muted Colors
- `--muted: 0 0% 15%` - Dark Gray
- `--muted-foreground: 0 0% 65%` - Medium Gray

#### Accent Colors
- `--accent: 35 40% 40%` - Medium Tan
- `--accent-foreground: 0 0% 95%` - Near White

#### Destructive Colors
- `--destructive: 0 62.8% 30.6%` - Dark Red
- `--destructive-foreground: 0 0% 95%` - Near White

#### Border & Input
- `--border: 0 0% 20%` - Dark Gray
- `--input: 0 0% 20%` - Dark Gray
- `--ring: 345 70% 45%` - Burgundy

### Inline HSL Colors (from component files)

#### Books.tsx
- `hsl(45,100%,50%)` - Gold (Button background)
- `hsl(45,100%,45%)` - Darker Gold (Button hover)
- `hsl(0,0%,90%)` - Light Gray (Card background)
- `hsl(30,100%,25%)` - Dark Orange (Amazon text)
- `hsl(45,100%,40%)` - Medium Gold (Kindle text)
- `hsl(180,100%,20%)` - Dark Cyan (Barnes & Noble text)
- `hsl(30,80%,45%)` - Orange (Ampersand text)
- `hsl(0,0%,95%)` - Very Light Gray (Section background)
- `hsl(0,0%,30%)` - Medium Dark Gray (Section background)
- `hsl(0,0%,85%)` - Light Gray (Card background)

---

## RGBA Color Codes

### Loader.tsx
- `rgba(0,0,0,0.5)` - Black 50% opacity (Text shadow)
- `rgba(0,0,0,0.4)` - Black 40% opacity (Text shadow)
- `rgba(0,0,0,0.3)` - Black 30% opacity (Text shadow)
- `rgba(155, 36, 48, 0.6)` - Burgundy 60% opacity (Box shadow)
- `rgba(255, 220, 0, 0.3)` - Gold 30% opacity (Box shadow)
- `rgba(255, 220, 0, 0.9)` - Gold 90% opacity (Pulse glow)
- `rgba(155, 36, 48, 0.6)` - Burgundy 60% opacity (Pulse glow)

### index.css
- `rgba(0, 0, 0, 0.1)` - Black 10% opacity (Brush highlight texture)
- `rgba(0, 0, 0, 0.15)` - Black 15% opacity (Drop shadow)

### App.css
- `#646cffaa` - Blue with alpha (Logo hover effect)
- `#61dafbaa` - Cyan with alpha (Logo hover effect)

---

## Color Usage by Component

### Loader Component (`src/components/Loader.tsx`)
- Background: `#000000`, `#1a1a1a` (Gradient)
- Primary: `#9B2430` (Burgundy)
- Secondary: `#FFDC00` (Gold)
- Text: `#FFDC00` (Gold), `#9B2430` (Burgundy), White

### Index Page (`src/pages/Index.tsx`)
- Section background: `#992430` (Burgundy)
- Heading: `#b74d01` (Orange)
- Life roles: `#9e846b` (Tan)

### Books Page (`src/pages/Books.tsx`)
- Section background: `#333333` (Dark Gray)
- Text: `#FFD700` (Gold)
- Button: `#992430`, `#7a1d26` (Burgundy variants)
- Borders: `#FFD700/30` (Gold with transparency)

### About Page (`src/pages/About.tsx`)
- Text: `#992430` (Burgundy)
- Divider: `#ffdd00` (Gold)
- Card background: `#7b1e23` (Dark Red)

### Speaking Page (`src/pages/Speaking.tsx`)
- Button: `#F3BA00` (Yellow/Gold)
- Button hover: `#7a1d26` (Dark Burgundy)

### Footer Component (`src/components/Footer.tsx`)
- Background: `#0a0a0a` (Near Black)

### Newsletter Component (`src/components/Newsletter.tsx`)
- Heading: `#992430` (Burgundy)
- Button: `#992430`, `#7a1d26` (Burgundy variants)

### Button Component (`src/components/ui/button.tsx`)
- Default: `#992430` (Burgundy)

---

## Summary

**Primary Brand Colors:**
- Burgundy: `#9B2430` / `#992430` / `hsl(354, 62%, 37%)`
- Gold: `#FFDC00` / `#ffdd00` / `hsl(45, 100%, 50%)`

**Most Used Colors:**
1. `#992430` / `#9B2430` - Burgundy (Primary brand)
2. `#FFDC00` / `#ffdd00` - Gold (Secondary brand)
3. `#7a1d26` / `#7b1e23` - Dark Burgundy (Hover states)
4. `#000000` / `#0a0a0a` - Black variants (Backgrounds)
5. `#333333` - Dark Gray (Section backgrounds)

