# Cremation Services Platform — Design System v1.0

## Executive Overview

This design system establishes the visual language, components, and interaction patterns for a cremation services booking platform. The platform serves families during emotionally sensitive moments and must communicate dignity, clarity, trustworthiness, and accessibility above all else.

**Core Design Principle:** Trust through clarity. Every visual choice serves to reduce uncertainty, not to impress.

---

## 1. Design Tokens

### Color Palette

The color system uses semantic roles (not descriptive names) to maintain clarity and consistency. This palette balances warmth with professionalism, avoiding both sterility and sentimentality.

#### Core Brand Colors

```
Primary (Trust & Assurance):
  - Primary-900:  #1a3a3f  (Deep teal — header, primary actions)
  - Primary-700:  #2d5a63  (Actions, focus states)
  - Primary-500:  #3d7a85  (Primary buttons, links)
  - Primary-300:  #6ba8b3  (Light accents, backgrounds)
  - Primary-100:  #e8f2f4  (Subtle background tints)

Secondary (Warmth & Compassion):
  - Secondary-700: #c7a48f (Warm earth — accent, testimonials)
  - Secondary-500: #d9b8a0 (Softer accents)
  - Secondary-200: #f0e8e0 (Testimonial backgrounds)

Semantic Colors:
  - Success-600:   #4a8c5d (Confirmation, completion)
  - Warning-600:   #d97b47 (Alerts, important notices)
  - Error-600:     #c4554d (Errors, critical issues)
  - Neutral-900:   #1a1a1a (Text, headings)
  - Neutral-700:   #404040 (Secondary text)
  - Neutral-500:   #787878 (Tertiary text, disabled)
  - Neutral-300:   #d0d0d0 (Dividers, borders)
  - Neutral-100:   #f5f5f5 (Backgrounds)
  - Neutral-50:    #fafafa (Subtle backgrounds)
  - White:         #ffffff (Primary background)
```

**Rationale:** Teal conveys trust and stability without coldness. Earth tones add human warmth to an otherwise formal context. Neutrals ensure text legibility and reduce visual noise during emotionally charged moments.

#### Color Usage Rules

- **Primary buttons & CTAs:** Primary-500 on white or Primary-100 background
- **Links:** Primary-500, underlined on first encounter, recognizable on return
- **Headers & labels:** Neutral-900
- **Body text:** Neutral-900 (high contrast for accessibility)
- **Secondary text:** Neutral-700
- **Disabled states:** Neutral-500
- **Success messages:** Success-600 with Success-100 background
- **Warnings/Alerts:** Warning-600 with Warning-100 background
- **Errors:** Error-600 with Error-100 background
- **Dividers:** Neutral-200
- **Hover states:** Shift +10% lightness on primary, +5% on secondary
- **Focus rings:** Primary-500 (2px)
- **Backgrounds:** White primary, Neutral-50/100 for sections

No gradients unless they serve a specific purpose (e.g., subtle tint across a hero section, not decoration).

---

### Typography

#### Typeface Selection

**Primary Display & Headings:** Georgia (serif)
- Conveys dignity, tradition, and permanence
- Used for h1, h2, h3 — sets the tone
- Warm serifs avoid clinical coldness

**Body & UI:** Inter (sans-serif)
- Clear, neutral, highly legible at all sizes
- Used for body text, UI labels, buttons
- Excellent accessibility and screen-reader compatibility

**Monospace (Data/Technical):** IBM Plex Mono
- Used for dates, times, booking references, confirmation codes
- Clear distinction from narrative text

#### Type Scale

```
Display (Hero headlines):
  - Size: 48px / 56px (desktop)
  - Size: 32px / 40px (mobile)
  - Line-height: 1.2
  - Weight: 600 (Georgia)
  - Letter-spacing: -0.01em
  - Margin-bottom: 24px

H1 (Page title):
  - Size: 36px / 44px (desktop)
  - Size: 28px / 32px (mobile)
  - Line-height: 1.25
  - Weight: 600 (Georgia)
  - Margin-bottom: 20px

H2 (Section heading):
  - Size: 28px / 32px (desktop)
  - Size: 24px / 28px (mobile)
  - Line-height: 1.3
  - Weight: 600 (Georgia)
  - Margin-bottom: 16px
  - Margin-top: 32px (when not first on page)

H3 (Subsection):
  - Size: 20px / 24px (desktop)
  - Size: 18px / 20px (mobile)
  - Line-height: 1.35
  - Weight: 600 (Georgia)
  - Margin-bottom: 12px

Body (Paragraph text):
  - Size: 16px
  - Line-height: 1.6
  - Weight: 400 (Inter)
  - Letter-spacing: 0
  - Max line-length: 70 characters (ideal: 55–75)
  - Margin-bottom: 16px between paragraphs

Body Small (Secondary information):
  - Size: 14px
  - Line-height: 1.5
  - Weight: 400 (Inter)
  - Color: Neutral-700

Label (Form labels, UI text):
  - Size: 14px
  - Line-height: 1.4
  - Weight: 600 (Inter)
  - Color: Neutral-900
  - Margin-bottom: 8px

Caption (Timestamps, helper text):
  - Size: 12px
  - Line-height: 1.4
  - Weight: 400 (Inter)
  - Color: Neutral-600
  - Margin-top: 4px

Button text:
  - Size: 16px
  - Line-height: 1.5
  - Weight: 600 (Inter)
  - No transform (sentence case, not all caps)
```

**No typography defaults to avoid:**
- All caps labels (use sentence case)
- Single-word emphasis (avoid coloring just one word in a headline)
- Unnecessary eyebrow labels above headings

---

### Spacing Scale

```
Spacing unit: 4px base

xs:  4px   (tight padding within components)
sm:  8px   (component internal spacing)
md:  16px  (component external spacing, vertical rhythm)
lg:  24px  (section padding, card gaps)
xl:  32px  (large gaps, container padding)
2xl: 48px  (major section separation)
3xl: 64px  (hero to content separation, page-level spacing)

Application:
- Padding: md (16px) default for cards, lg (24px) for containers
- Gap between items: md (16px) for tight groups, lg (24px) for loose
- Margin-top between sections: 2xl (48px)
- Margin-bottom after headings: md (16px)
- Button padding: sm (8px) vertical, md (16px) horizontal
```

---

### Border & Radius

```
Border Radius:
  - xs:  2px  (buttons, badges)
  - sm:  4px  (inputs, small cards)
  - md:  8px  (default cards, modals)
  - lg:  12px (hero sections, large containers)
  - full: 9999px (pill buttons, avatars)

Border Width:
  - Subtle: 1px (dividers, input borders)
  - Focus: 2px (focus rings, active states)

Application:
- Input fields: sm (4px)
- Buttons: xs (2px)
- Cards: md (8px)
- Modals: md (8px)
- Divider lines: 1px Neutral-200
- Focus ring: 2px Primary-500 (outset)
```

---

### Shadows

Shadows are minimal and purposeful — avoid layered or excessive shadows that read as decorative.

```
Elevation Levels:

Level 1 (Subtle, resting state):
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)
  Use: Cards in relaxed layouts, hover states on secondary elements

Level 2 (Raised, interactive):
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08)
  Use: Buttons, modals, key cards on pages

Level 3 (Floating, modal/overlay):
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12)
  Use: Modals, dropdowns, floating action buttons

No decorative shadows on every element — use sparingly.
```

---

### Motion & Animation

**Philosophy:** Motion should clarify interactions and state changes, not decorate the interface.

```
Transition Speeds:
  - Fast (micro-interactions): 150ms
  - Standard (UI feedback): 200ms
  - Slow (modals, major transitions): 300ms

Easing Functions:
  - Default: cubic-bezier(0.4, 0, 0.2, 1) (ease-in-out)
  - Entrance: cubic-bezier(0.34, 1.56, 0.64, 1) (ease-out-back, subtle)
  - Exit: cubic-bezier(0.2, 0, 0.8, 0.1) (ease-in-cubic)

Appropriate Animations:
  ✓ Button press feedback (color shift, micro-scale)
  ✓ Hover state transitions (color, underline grow)
  ✓ Form input focus (border color, background tint)
  ✓ Modal entrance (fade + subtle scale-up)
  ✓ Page transitions (fade, not slide)
  ✓ Loading spinner (simple, clear)
  ✓ Confirmation checks (checkmark draw)

Avoid:
  ✗ Bounce on every element
  ✗ Auto-playing decorative animations
  ✗ Slide-and-fade-up on every card
  ✗ Multiple cascading animations on load
  ✗ Parallax effects

Reduced Motion Respect:
  prefers-reduced-motion: reduce
  - Remove all entrance animations
  - Keep interaction feedback (color, focus states)
  - No motion on page load
```

---

## 2. Component Library

### Buttons

**Purpose:** Call-to-action element. Every button should have a clear, single action.

#### Variants

| Variant | Use Case | Color | Background |
|---------|----------|-------|------------|
| **Primary** | Main actions (Book, Confirm, Proceed) | White | Primary-500 |
| **Secondary** | Alternative actions (Learn More, Skip) | Primary-500 | Primary-100 |
| **Ghost** | Low-priority or destructive (Cancel, Delete) | Neutral-700 | Transparent |
| **Success** | Confirmations (Payment Done, Saved) | White | Success-600 |
| **Warning** | Careful actions (Confirm Cancellation) | White | Warning-600 |

#### Sizes

```
Large (lg):
  - Padding: 14px 32px
  - Font: 16px, weight 600
  - Min height: 48px
  - Use: Primary CTAs, booking flow, hero section

Medium (md):
  - Padding: 10px 24px
  - Font: 16px, weight 600
  - Min height: 40px
  - Use: Form submissions, secondary actions

Small (sm):
  - Padding: 8px 16px
  - Font: 14px, weight 600
  - Min height: 32px
  - Use: Tertiary actions, inline actions

Icon-only:
  - Size: 40px (square)
  - Icon: 20px center
  - Use: Close, expand, menu toggle
```

#### States

```
Default:
  - Background: Base color
  - Text: Appropriate contrast
  - Cursor: pointer

Hover:
  - Background: +10% darker
  - Transition: 150ms cubic-bezier(0.4, 0, 0.2, 1)

Active/Pressed:
  - Background: +15% darker
  - Transform: scale(0.98)
  - Transition: instant

Focus (Keyboard):
  - Outline: 2px solid Primary-500
  - Outline-offset: 2px
  - Visible always (no outline: none)

Disabled:
  - Background: Neutral-200
  - Text: Neutral-500
  - Cursor: not-allowed
  - Opacity: 0.6

Loading:
  - Display spinner (small, 16px)
  - Text: Hidden or "Loading..."
  - Disabled: true (not interactive)
```

#### Accessibility

- **Role:** `<button>` element (not `<a href="#">`)
- **Keyboard:** Tab-accessible, Enter/Space activates
- **Screen reader:** Announces button label clearly; "Book a service" not just "Button"
- **Touch target:** Minimum 48px × 48px
- **Focus:** Always visible, never outline: none
- **Aria-loading:** Use `aria-busy="true"` during loading states

#### Code Example

```jsx
<button
  className="btn btn-primary btn-lg"
  onClick={handleBooking}
  aria-label="Book a cremation service"
>
  Book Service
</button>

<button
  className="btn btn-secondary btn-md"
  disabled={isLoading}
  aria-busy={isLoading}
>
  {isLoading ? 'Saving...' : 'Save Details'}
</button>
```

---

### Form Inputs

**Purpose:** Capture user information during booking flow.

#### Input Field

```
Default state:
  - Background: White
  - Border: 1px Neutral-300
  - Padding: 12px 16px
  - Border-radius: 4px
  - Font: 16px Inter, weight 400
  - Line-height: 1.5
  - Min height: 40px

Hover:
  - Border: 1px Neutral-400

Focus:
  - Border: 2px Primary-500
  - Background: #fafafa
  - Outline: none (border handles focus)
  - Box-shadow: none (border is enough)

Filled/Valid:
  - Border: 1px Success-600
  - Icon (checkmark): Success-600, right-aligned

Error:
  - Border: 2px Error-600
  - Icon (alert): Error-600, right-aligned
  - Error message: 12px Error-600, margin-top 4px

Disabled:
  - Background: Neutral-100
  - Text: Neutral-500
  - Cursor: not-allowed
  - Opacity: 0.6
```

#### Label & Helper Text

```
Label:
  - Size: 14px, weight 600 (Inter)
  - Color: Neutral-900
  - Margin-bottom: 8px
  - Display: block
  - Required indicator: * (red, after label text)

Helper text (description):
  - Size: 12px, weight 400
  - Color: Neutral-600
  - Margin-top: 4px
  - Max width: input width

Error message:
  - Size: 12px, weight 600
  - Color: Error-600
  - Margin-top: 4px
  - Icon: Warning icon
  - Role: alert (screen reader announces)
```

#### Input Types

```
Text/Email/Phone:
  - As above

Select/Dropdown:
  - Same styling as text input
  - Icon: Chevron-down (right, Neutral-500)
  - Padding-right: 40px (space for icon)

Textarea:
  - Min height: 120px
  - Max height: 300px (scrollable after)
  - Resize: vertical only
  - Font: 16px (prevent zoom on mobile)

Checkbox:
  - Size: 20px × 20px
  - Border: 2px Neutral-400
  - Checked: Primary-500 background, checkmark icon
  - Label alignment: Label to right of checkbox
  - Spacing: 8px between checkbox and label

Radio Button:
  - Size: 20px × 20px (circle)
  - Border: 2px Neutral-400
  - Checked: Primary-500 circle (inner), 8px diameter
  - Group spacing: 12px between options
  - Label alignment: Label to right

Date Picker:
  - Display: Native on mobile (input type="date")
  - Display: Custom picker on desktop
  - Format: DD/MM/YYYY
  - Min/max dates: Based on availability
```

#### Accessibility

- **Labels:** Always associated with `<label for="field-id">`
- **Error announcements:** `role="alert"` on error message
- **Helper text:** `aria-describedby="field-id-help"`
- **Required fields:** `aria-required="true"` + visual indicator (*)
- **Placeholder:** Never rely on placeholder alone; use label
- **Touch targets:** Min 44px height for mobile

---

### Cards

**Purpose:** Group related information (service offerings, testimonials, FAQs).

```
Default Card:
  - Background: White
  - Border: 1px Neutral-200 (light divider, optional)
  - Border-radius: 8px
  - Padding: 24px
  - Box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)
  - Margin-bottom: 16px

Hover state (if interactive):
  - Box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08)
  - Transform: translateY(-2px)
  - Cursor: pointer
  - Transition: 150ms cubic-bezier(0.4, 0, 0.2, 1)

Service Card:
  - H3 title (service name)
  - Paragraph description
  - Icon or small image (top-left or full-width)
  - CTA button at bottom: "Learn More" or "Book Now"

Testimonial Card:
  - Background: Secondary-200 (#f0e8e0)
  - Quote text (16px, italic)
  - Attribution: Name, verified indicator
  - Rating: ★★★★★ (visual stars)
  - No border-radius needed (softer appearance)

FAQ Card:
  - Question (bold, 16px)
  - Answer (hidden, collapsed state)
  - Chevron icon (rotates on open)
  - Padding: 16px (less than default card)
  - On click: Expand, show answer, rotate chevron
```

#### Responsive Behavior

```
Desktop (≥1024px):
  - Grid: 3 columns (service cards), 2 columns (testimonials)
  - Padding: 24px

Tablet (768px - 1023px):
  - Grid: 2 columns

Mobile (<768px):
  - Grid: 1 column (stacked)
  - Padding: 16px
  - Cards full width with 12px margin
```

---

### Navigation

**Purpose:** Structural navigation and wayfinding.

#### Header Navigation

```
Desktop Layout:
  - Logo (left): Company name + small icon
  - Menu (center): Home | Services | How It Works | FAQ
  - CTA (right): Book Now button (Primary-500)
  - Background: White
  - Border-bottom: 1px Neutral-200
  - Sticky: No (users should scroll to see trust elements first)
  - Height: 72px (4xl spacing + logo)

Mobile Layout (<768px):
  - Logo (left): Company name
  - Hamburger menu (right): Icon-only button
  - Sticky: Yes
  - Height: 64px (responsive padding)
  - On menu open: Full-screen overlay, background: White

Navigation Menu:
  - Font: 16px Inter, weight 500
  - Color: Neutral-900
  - Hover: Underline, Primary-500
  - Active page: Bold, Primary-500 underline
  - Spacing: 32px between items (desktop)

Mobile Menu:
  - Full viewport
  - Touch targets: 48px minimum
  - Links stack vertically
  - Spacing: 20px between items
  - Close button (top right): X icon or back arrow
```

#### Breadcrumb Navigation

```
Display: [Home] > [Services] > [Cremation Types]
  - Separator: /
  - Current page (last): Neutral-500, not clickable
  - Previous items: Links, Primary-500
  - Font: 12px Inter

Use on:
  - Service detail pages
  - FAQ categories
  - City/location pages
```

---

### Forms & Form Flows

#### Form Sections

```
Step indicator (multi-step forms):
  - Display: Numbered steps (1. Contact | 2. Service | 3. Confirm)
  - Font: 12px, weight 600
  - Active step: Primary-500, bold
  - Completed step: Success-600 with checkmark
  - Upcoming steps: Neutral-300
  - Layout: Horizontal line connecting steps
  - Mobile: Compact, show current + next only

Form group (related fields):
  - Margin-bottom: 24px
  - Light background (Neutral-50) optional, for grouping

Error summary (top of form):
  - Background: Error-100 (#fde9e6)
  - Border-left: 4px Error-600
  - Padding: 16px
  - List errors with links to fields
  - Role: alert
  - Display: Only when form submitted with errors
```

#### Booking Flow Structure

```
1. Emergency Contact
   - Primary question: "How soon do you need assistance?"
   - Radio options: Emergency (hrs) | Today | Later
   - Phone input (required)

2. Service Selection
   - "What service do you need?"
   - Checkboxes for multiple selections
   - Common: Cremation, Funeral, Hearse, Freezer

3. Location & Timing
   - Location of deceased
   - Preferred cremation location
   - Preferred date/time

4. Deceased Information
   - Name, age, relation
   - Any special requirements

5. Review & Confirm
   - Summary of selections
   - Price estimate (if available)
   - CTA: "Confirm Booking" or "Get Quote"

6. Confirmation
   - Booking reference (monospace font)
   - Next steps
   - Contact info for support
```

---

### Modals & Overlays

```
Modal (Dialog Box):
  - Background overlay: rgba(0, 0, 0, 0.5)
  - Container: White, centered
  - Border-radius: 8px
  - Max-width: 500px (desktop), 90vw (mobile)
  - Padding: 32px
  - Box-shadow: Level 3

Modal Header:
  - H2 title (28px, Georgia)
  - Close button (X) top-right
  - Margin-bottom: 16px

Modal Body:
  - Copy: 16px Inter, line-height 1.6
  - Margin-bottom: 24px

Modal Footer:
  - 2 buttons (Primary + Secondary) or single CTA
  - Flex layout, gap 12px
  - Button full-width on mobile

Animation:
  - Entrance: Fade + subtle scale-up (300ms)
  - Exit: Fade out (200ms)
  - Respect prefers-reduced-motion

Accessibility:
  - Focus trap: Tab loops within modal
  - Close on Escape key
  - aria-modal="true"
  - aria-labelledby on heading
```

---

### Status Messages

#### Toast Notifications

```
Success:
  - Background: Success-100
  - Border-left: 4px Success-600
  - Icon: Checkmark (green)
  - Text: "Booking confirmed" (14px)
  - Duration: 5 seconds auto-dismiss
  - Position: Bottom-right (desktop), Top (mobile)

Error:
  - Background: Error-100
  - Border-left: 4px Error-600
  - Icon: Alert (red)
  - Text: Clear, actionable message
  - Duration: Persist (user closes or auto-dismiss at 8s)

Warning:
  - Background: Warning-100
  - Border-left: 4px Warning-600
  - Icon: Caution (orange)
  - Text: Informational

Info:
  - Background: Primary-100
  - Border-left: 4px Primary-500
  - Icon: Info (teal)
  - Text: Informational only

Animation:
  - Slide up from bottom: 200ms
  - Exit slide down: 150ms
```

#### Inline Messages

```
Success (inline):
  - Icon: Checkmark
  - Text: 14px Success-600
  - Background: Success-50 (subtle)
  - Padding: 12px 16px
  - Border-radius: 4px

Error (inline):
  - Icon: Alert
  - Text: 14px Error-600
  - Background: Error-50
  - Padding: 12px 16px
  - Role: alert

Warning (inline):
  - Same as error but Warning colors
  - Use for cautionary information

Info (inline):
  - Icon: Info circle
  - Text: 14px Primary-700
  - Background: Primary-50
  - Use for explanatory notes
```

---

### Loading States

```
Spinner:
  - Size: 24px (standard), 16px (small)
  - Color: Primary-500
  - Animation: Rotation, 1s loop, ease-in-out
  - Centered with text: "Loading..."

Skeleton Screen:
  - Use for content previews (e.g., service cards)
  - Background: Neutral-200
  - Pulse animation: 1.5s fade in/out
  - Match final layout exactly

Button Loading:
  - Hide text or show "Loading..."
  - Display spinner (16px) to left of text
  - Disabled state: true
  - aria-busy="true"
```

---

### Footer

```
Layout:
  - Background: Neutral-100 or White with top border
  - Padding: 2xl (48px) top/bottom, xl (32px) sides
  - Max-width: 1200px centered

Columns (4-5):
  1. Services (links to main services)
  2. Locations (city pages)
  3. Resources (FAQ, Blog, Guides)
  4. Company (About, Contact, Careers)
  5. Legal (Privacy, Terms)

Content:
  - Column headers: 14px, weight 600, Neutral-900
  - Links: 14px, Primary-500, hover underline
  - Spacing: 12px between links

Bottom Section:
  - Copyright: 12px, Neutral-600
  - Social icons (optional): Small, Primary-500
  - Contact: Phone, WhatsApp, Email (links)

Mobile:
  - Stack to 1 column
  - Expandable sections (accordion style)
  - Show only key links above fold
```

---

## 3. Responsive Design Strategy

### Breakpoints

```
Mobile-first approach:

xs: 0px+         (mobile default)
sm: 640px        (large phones, small tablets)
md: 768px        (tablets)
lg: 1024px       (desktop)
xl: 1280px       (large desktop)
2xl: 1536px      (ultra-wide, not essential)
```

### Layout Grid

```
Mobile (xs-sm):
  - Single column
  - 12px horizontal margin
  - Full width content

Tablet (md):
  - 2-column grid where appropriate
  - 24px horizontal padding
  - Max-width: 728px

Desktop (lg+):
  - 3-column grid for cards
  - Max-width: 1200px
  - 40px horizontal padding
  - Centered container
```

### Typography Scaling

```
Headlines:
  - Mobile: Smaller sizes (28-32px)
  - Desktop: Larger sizes (36-56px)
  - Always readable without scrolling

Body text:
  - Desktop: 16px ideal
  - Mobile: 16px minimum (prevent zoom on focus)
  - Line-length: Constrain to ~70 chars max

Buttons:
  - Mobile: 48px min height (touch target)
  - Desktop: 40px acceptable
  - Same font size (16px) across
```

### Image Handling

```
Hero images:
  - Desktop: Full-width, 600px height
  - Mobile: 80vw, constrained to 300px height
  - aspect-ratio: Maintain (e.g., 16/9)
  - Object-fit: cover

Service card images:
  - Desktop: 200px × 200px
  - Mobile: 150px × 150px
  - Aspect-ratio: 1/1
  - Lazy load: Yes

Background images:
  - Use only on hero, consider performance
  - Mobile: Smaller file, 50% quality
  - Alt text or aria-label on container
```

### Touch Interactions (Mobile)

```
Button / Link targets:
  - Minimum: 44px × 44px (WCAG)
  - Preferred: 48px × 48px
  - Spacing: 8px minimum between

Form inputs:
  - Min height: 44px
  - Font: 16px (prevents iOS zoom)
  - Padding: 12px vertical minimum

Hover states:
  - Mobile: No hover (touch-friendly alternatives)
  - Use active/focus states instead
  - Background color change on tap
```

---

## 4. Accessibility Standards (WCAG 2.1 AA)

### Color Contrast

```
Normal text:
  - Minimum 4.5:1 (AA standard)
  - Primary-500 (#3d7a85) on White: ✓ 7.2:1
  - Neutral-900 (#1a1a1a) on White: ✓ 16.5:1

Large text (18px+ or 14px bold):
  - Minimum 3:1
  - Primary-500 on Neutral-50: ✓ 5.1:1

Disabled states:
  - Neutral-500 (#787878) on White: ✓ 4.5:1 (barely)

Never rely on color alone to convey information.
Add icons, patterns, or text.
```

### Keyboard Navigation

```
Tab order:
  - Logical, top-to-bottom, left-to-right
  - Skip to main content link (first focusable)
  - Modal: Focus trap, Escape closes

Focus styles:
  - Always visible
  - Minimum 2px outline
  - Color: Primary-500
  - High contrast
  - Never outline: none

Interactive elements:
  - Buttons: Tab, Enter/Space activates
  - Links: Tab, Enter follows
  - Modals: Trap focus, Escape closes
  - Forms: Tab through fields, Submit on Enter
  - Dropdowns: Arrow keys navigate, Enter selects
```

### Screen Reader Support

```
Semantic HTML:
  - <button> for buttons, not <a href="#">
  - <form> for forms, <label> for inputs
  - <header>, <nav>, <main>, <footer>
  - <h1>-<h6> for headings (proper nesting)

ARIA attributes:
  - aria-label: When text isn't visible ("Close")
  - aria-labelledby: Connect label to heading
  - aria-describedby: Connect input to helper text
  - aria-busy: Loading states
  - aria-expanded: Accordion/menu state
  - aria-hidden: Decorative icons/spacers
  - role="alert": Error messages
  - role="region" + aria-label: Content sections

Alt text (images):
  - Descriptive: "Man in hospital bed, serious expression"
  - Functional: "Logo"
  - Decorative: alt="" (empty string)

Links:
  - Text must make sense alone: "Learn more about our services"
  - Not: "Click here"
```

### Motion & Vestibular

```
Respect prefers-reduced-motion:

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

Keep interaction feedback (focus, active) but remove:
  - Entrance animations
  - Decorative movement
  - Parallax effects
  - Auto-playing content

Test with actual users who have motion sensitivity.
```

---

## 5. Component Composition Examples

### Service Card (Reusable)

```jsx
<Card className="service-card">
  <img 
    src="/services/cremation.jpg" 
    alt="Traditional wood cremation setup"
    className="card-image"
  />
  <h3>Traditional Cremation</h3>
  <p>Respectful wood-based cremation following Hindu traditions and rituals.</p>
  <Button variant="primary" onClick={handleSelect}>
    Learn More
  </Button>
</Card>

CSS (scoped):
.service-card {
  padding: 24px;
  border: 1px solid var(--color-neutral-200);
  border-radius: 8px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
}
```

### Booking Form Section (Multi-step)

```jsx
<form className="booking-form" onSubmit={handleSubmit}>
  {/* Step indicator */}
  <div className="step-indicator" role="progressbar" aria-valuenow={currentStep}>
    <div className="step step-completed">1. Contact</div>
    <div className="step step-active">2. Service</div>
    <div className="step step-pending">3. Confirm</div>
  </div>

  {/* Error summary */}
  {errors.length > 0 && (
    <div className="error-summary" role="alert">
      <h3>Please fix the following errors:</h3>
      <ul>
        {errors.map(err => (
          <li key={err.field}>
            <a href={`#${err.field}`}>{err.message}</a>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Form fields */}
  <fieldset>
    <legend>How soon do you need assistance?</legend>
    <RadioGroup name="urgency">
      <Radio value="emergency">Emergency (within hours)</Radio>
      <Radio value="today">Today</Radio>
      <Radio value="later">Schedule for later</Radio>
    </RadioGroup>
  </fieldset>

  {/* Phone input */}
  <FormField>
    <label htmlFor="phone">Phone Number *</label>
    <input
      id="phone"
      type="tel"
      required
      aria-required="true"
      placeholder="Your 10-digit number"
    />
    <span className="helper-text" id="phone-help">
      We'll use this to confirm your booking
    </span>
  </FormField>

  <Button variant="primary" size="lg">
    Continue to Service Selection
  </Button>
</form>
```

---

## 6. Design System Documentation for Developers

### CSS Custom Properties (Variables)

```css
:root {
  /* Colors */
  --color-primary-900: #1a3a3f;
  --color-primary-700: #2d5a63;
  --color-primary-500: #3d7a85;
  --color-primary-300: #6ba8b3;
  --color-primary-100: #e8f2f4;
  
  --color-secondary-700: #c7a48f;
  --color-secondary-500: #d9b8a0;
  --color-secondary-200: #f0e8e0;
  
  --color-success-600: #4a8c5d;
  --color-warning-600: #d97b47;
  --color-error-600: #c4554d;
  
  --color-neutral-900: #1a1a1a;
  --color-neutral-700: #404040;
  --color-neutral-500: #787878;
  --color-neutral-300: #d0d0d0;
  --color-neutral-100: #f5f5f5;
  --color-neutral-50: #fafafa;
  --color-white: #ffffff;

  /* Typography */
  --font-display: 'Georgia', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  --text-display: 3rem; /* 48px */
  --text-h1: 2.25rem; /* 36px */
  --text-h2: 1.75rem; /* 28px */
  --text-h3: 1.25rem; /* 20px */
  --text-body: 1rem; /* 16px */
  --text-body-sm: 0.875rem; /* 14px */
  --text-label: 0.875rem; /* 14px */
  --text-caption: 0.75rem; /* 12px */

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Borders */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --border-width: 1px;
  --border-width-focus: 2px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12);

  /* Motion */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-standard: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-fast: 0ms;
    --transition-standard: 0ms;
    --transition-slow: 0ms;
  }
}
```

### Reusable Utility Classes

```css
/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}

/* Text */
.text-primary {
  color: var(--color-primary-500);
}

.text-error {
  color: var(--color-error-600);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Spacing */
.mt-lg { margin-top: var(--space-lg); }
.mb-lg { margin-bottom: var(--space-lg); }
.p-lg { padding: var(--space-lg); }
```

---

## 7. Quality Checklist for Implementations

Before launching any page/component:

- [ ] Colors meet WCAG AA contrast (4.5:1 for normal text)
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader announces labels, roles, states
- [ ] Alt text on all meaningful images
- [ ] Buttons are 48px × 48px minimum (mobile)
- [ ] Forms have proper labels and error handling
- [ ] Mobile layout tested at 375px width
- [ ] Animations respect prefers-reduced-motion
- [ ] All copy uses approved terminology (no jargon)
- [ ] Phone/WhatsApp links functional (`tel:`, `https://wa.me/`)
- [ ] Loading states clear and accessible
- [ ] Confirmation messages appear for critical actions
- [ ] SEO: Meta tags, headings, schema structured data
- [ ] Performance: Images optimized, <3s load time
- [ ] Security: Forms submitted over HTTPS, no sensitive data in logs

---

## 8. Implementation Notes for Developers

### Tech Stack Recommendations

- **Frontend framework:** React or Vue (both support component systems)
- **Styling:** CSS-in-JS (Emotion, Styled-components) or CSS modules for scoped styles
- **Forms:** React Hook Form or Formik (validation, error handling)
- **UI state:** Context API or Redux (booking flow state)
- **Routing:** Next.js App Router or React Router v6+
- **Testing:** Jest + React Testing Library (accessibility testing)
- **Accessibility:** Axe-core for automated testing, manual WCAG audits

### File Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   ├── Button.test.jsx
│   │   └── index.js
│   ├── Input/
│   ├── Card/
│   ├── Modal/
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Booking.jsx
│   └── ...
├── styles/
│   ├── tokens.css (design tokens)
│   ├── reset.css
│   └── globals.css
├── hooks/
│   ├── useBooking.js
│   └── ...
├── utils/
│   ├── validation.js
│   └── ...
└── App.jsx
```

### Design Token Export for Figma

If using Figma for design, export tokens as JSON and import into code:

```json
{
  "color": {
    "primary": {
      "500": "#3d7a85"
    }
  },
  "spacing": {
    "md": "16px"
  }
}
```

---

## 9. Version History & Maintenance

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Date] | Initial design system for cremation services platform |

## Future Enhancements

- [ ] Animation library (micro-interactions)
- [ ] Icon library (funeral-related, 24px grid)
- [ ] Photography guidelines (dignity, diversity, authenticity)
- [ ] Email template system (confirmations, receipts)
- [ ] Accessibility audit (AAA compliance, advanced testing)
- [ ] Localization support (Hindi, regional languages)
- [ ] Internationalization (phone formats, currencies)

---

## Questions for Client

Before implementation, clarify:

1. **Company branding:** Logo, existing color usage, brand guidelines?
2. **Locations served:** Cities, regions, international scope?
3. **Languages:** Hindi, English, other regional languages?
4. **Payment integration:** Razorpay, Stripe, COD?
5. **CRM integration:** Salesforce, Zoho, custom backend?
6. **Existing website:** API endpoints, authentication, data structure?
7. **Content:** Do you have service descriptions, pricing, testimonials ready?
8. **Timeline:** Launch date, phased rollout, milestones?
9. **Support channels:** WhatsApp integration, chatbot, support team?
10. **Analytics:** Specific KPIs to track (bookings, form abandonment, conversion)?

---

**Design System Owner:** [Name/Team]  
**Last Updated:** [Date]  
**Next Review:** [Date + 3 months]
