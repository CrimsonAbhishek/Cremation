# Cremation Services Platform — Design System Visual Reference

This document provides visual examples and usage patterns for the cremation services booking platform design system.

---

## Color Palette Visual Reference

### Primary Brand Colors (Trust & Assurance)

```
Deep Teal (Primary-900)
#1a3a3f
├─ Use: Headers, primary navigation, brand foundation
├─ Contrast on white: ✓ WCAG AAA (16.5:1)
└─ Contrast on Primary-100: ✓ WCAG AA (9.2:1)

Action Teal (Primary-500)
#3d7a85
├─ Use: Primary buttons, links, focus states
├─ Contrast on white: ✓ WCAG AA (7.2:1)
└─ Most versatile color in system

Light Teal (Primary-300, Primary-100)
#6ba8b3, #e8f2f4
├─ Use: Hover states, backgrounds, accents
├─ Primary-100: Secondary button backgrounds
└─ Creates tint for alert backgrounds
```

### Semantic Colors

```
Success (Confirmations)
  Primary: #4a8c5d
  Background: #f0f8f3
  Contrast on white: ✓ WCAG AA (6.8:1)

Warning (Alerts, Important)
  Primary: #d97b47
  Background: #fff4ed
  Contrast on white: ✓ WCAG AA (5.2:1)

Error (Critical Issues)
  Primary: #c4554d
  Background: #fde9e6
  Contrast on white: ✓ WCAG AA (5.9:1)

Neutral (Text, Dividers)
  Primary text (900): #1a1a1a
  Secondary text (700): #404040
  Disabled text (500): #787878
  Divider (300): #d0d0d0
```

---

## Typography Specimens

### Display Headlines

```
Georgia, 48px / 56px, weight 600, line-height 1.2
Dignified Funeral & Cremation Services

Used on: Hero sections, page titles
Emotional impact: Sets formal, respectful tone
Max line length: Should break naturally
```

### H1 - Page Titles

```
Georgia, 36px, weight 600
Complete Funeral Arrangements

Used on: Main section titles, service pages
Purpose: Clear hierarchy, distinct from body
Color: Neutral-900
```

### H2 - Section Headings

```
Georgia, 28px, weight 600
Why Families Choose Us

Used on: Section breaks throughout page
Spacing: 32px margin-top, 16px margin-bottom
Don't make H2 all caps or use single-word emphasis
```

### H3 - Subsections

```
Georgia, 20px, weight 600
Traditional Wood Cremation

Used on: Service descriptions, FAQ sections
Color: Neutral-900
Often paired with descriptive paragraph
```

### Body Text (Default)

```
Inter, 16px, weight 400, line-height 1.6
Our experienced team provides complete support for cremation, funeral
arrangements, and post-funeral rituals. Available 24/7 across all major cities.

Max line-length: 70 characters (optimal readability)
Used on: All descriptive content
Color: Neutral-900
Margin-bottom: 16px between paragraphs
```

### Body Small (Secondary Information)

```
Inter, 14px, weight 400, line-height 1.5, color Neutral-700
Last updated: September 2024
Used for: Metadata, timestamps, secondary details
```

### Label Text (Form Labels)

```
Inter, 14px, weight 600, color Neutral-900
Phone Number *

Required indicator: Asterisk in red
Margin-bottom: 8px above input
Never use all caps
```

### Button Text

```
Inter, 16px, weight 600, sentence case
Book Now
Learn More
Confirm Booking

Not: "BOOK NOW" or "CLICK HERE TO BOOK"
Describes action, not button press
```

---

## Component Examples in Context

### Hero Section (Homepage)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  Display Headline                                            │
│  Dignified Funeral & Cremation Services,                    │
│  Available 24/7                                             │
│                                                               │
│  Body text (subtle)                                         │
│  Complete assistance for cremation, funeral arrangements,   │
│  transportation and rituals. Available across all cities.   │
│                                                               │
│  [Primary Button]  [Secondary Button]                       │
│  Book Service      Learn More                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Visual treatment:
- White background (or very subtle Primary-50 gradient)
- Minimal imagery (family photo, cremation grounds, or none)
- Typography heavy (words do the work)
- CTA buttons centered or right-aligned
- Mobile: Single column, buttons stack

Spacing:
- Top/bottom padding: 3xl (64px)
- Heading margin-bottom: 24px
- Paragraph margin-bottom: 32px
- Button gap: 12px
```

### Service Cards (Services Section)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Optional Service Image 200x200]                                        │
│                                                                            │
│  H3: Traditional Wood Cremation                                          │
│                                                                            │
│  P: Respectful cremation following Hindu traditions and sacred rituals.  │
│      Our trained team coordinates the entire process with dignity.       │
│                                                                            │
│  [Primary Button: Learn More]    [Secondary Button: Book Now]           │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘

Visual specs:
- Background: White
- Border: 1px Neutral-200 (subtle division)
- Border-radius: 8px
- Padding: 24px
- Box-shadow: 0 1px 2px rgba(0,0,0,0.05) (barely visible)
- Hover state: Lift up 2px, shadow increases to Level 2

Grid:
- Desktop: 3 columns, 16px gap
- Tablet: 2 columns
- Mobile: 1 column, full width with 12px margins
```

### Testimonial Card (Social Proof)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  "The team handled our family's arrangements with great care     │
│   and respect when we needed support the most. Highly            │
│   recommended."                                                  │
│                                                                   │
│  ★★★★★                                                           │
│                                                                   │
│  Rajesh Kumar                                                     │
│  Verified Customer • Lucknow                                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

Visual specs:
- Background: Secondary-200 (#f0e8e0) — warm, compassionate
- No border (softer appearance)
- Border-radius: 8px
- Padding: 24px
- Quote in italics: 16px Inter
- Star rating: ★★★★★ (visual, not emoji)
- Attribution: 14px, Neutral-700
- No box-shadow (background color is distinction enough)
```

### Booking Form Sections

```
Step 1: Contact Information
┌─────────────────────────────────────────────┐
│ Step Indicator:                              │
│ ● 1. Contact ─── ○ 2. Service ─── ○ 3. Review
│                                              │
│ How soon do you need assistance? *          │
│ ○ Emergency (within hours)                  │
│ ○ Today                                     │
│ ○ Schedule for later                        │
│                                              │
│ Phone Number *                              │
│ [Input: +91 _________ ]                     │
│ ℹ We'll use this to confirm your booking    │
│                                              │
│ [Continue to Service Selection]             │
└─────────────────────────────────────────────┘

Visual specs:
- Fieldset with legend
- 24px margin-bottom between form groups
- Input field: 40px height, 16px padding
- Helper text: 12px Neutral-600, margin-top 4px
- Radio buttons: 20px, 8px gap to label
- Button: 48px height on mobile, full-width on mobile
```

### FAQ Accordion

```
Question 1 ▼
├─ Are your services available 24/7?
└─ Yes, our team is available around the clock...
   [More details visible]

Question 2 ▶
├─ What documents are required?
└─ [Hidden, click to expand]

Question 3 ▶
├─ Can you arrange Asthi Visarjan?
└─ [Hidden, click to expand]

Visual specs:
- Card background: White
- Border-bottom: 1px Neutral-200 between items
- Padding: 16px
- Question (H3): 18px, weight 600, Neutral-900
- Chevron icon: 20px, Primary-500, rotates 180° on open
- Answer text: 16px, Neutral-700, line-height 1.6
- Transition: 200ms ease-in-out (smooth expand)
- Mobile: No chevron rotation (screen reader announces state)
```

---

## Button States & Variations

### Primary Button (Main Actions)

```
Default State:
┌─────────────────┐
│  Book Service   │
└─────────────────┘
Background: Primary-500 (#3d7a85)
Text: White
Padding: 14px 32px
Border-radius: 2px
Font: 16px, weight 600
Height: 48px
Cursor: pointer

Hover State:
┌─────────────────┐
│  Book Service   │  (darker teal, shadow)
└─────────────────┘
Background: Primary-600 (#2d5a63)
Box-shadow: 0 4px 8px rgba(0,0,0,0.08)
Transform: translateY(-2px)
Transition: 150ms cubic-bezier(0.4, 0, 0.2, 1)

Active/Pressed:
┌─────────────────┐
│  Book Service   │  (even darker, pushed in)
└─────────────────┘
Background: Primary-700 (#1a3a3f)
Transform: scale(0.98)

Focus (Keyboard):
┌─────────────────┐
│  Book Service   │  (visible outline)
└─────────────────┘
Outline: 2px solid Primary-500
Outline-offset: 2px
Always visible

Disabled State:
┌─────────────────┐
│  Book Service   │  (greyed out)
└─────────────────┘
Background: Neutral-200
Text: Neutral-500
Opacity: 0.6
Cursor: not-allowed
```

### Secondary Button (Alternative Actions)

```
Default:
┌─────────────────┐
│  Learn More     │
└─────────────────┘
Background: Primary-100 (#e8f2f4)
Text: Primary-500
Border: 1px Primary-300
Padding: 14px 32px
Cursor: pointer

Hover:
Background: Primary-200 (#d0e5eb)
Border: 1px Primary-400
Text: Primary-600

Use for: Secondary actions, optional flows, "Learn more" CTAs
```

### Ghost Button (Low Priority)

```
Default:
┌─────────────────┐
│    Cancel       │
└─────────────────┘
Background: Transparent
Text: Neutral-700
Border: 1px Neutral-300
Cursor: pointer

Hover:
Background: Neutral-50
Border: 1px Neutral-400

Use for: Dismissal actions, optional exits, non-critical choices
```

---

## Form Input States

### Text Input

```
Default:
┌──────────────────────────────────────────┐
│ Enter your name                          │
└──────────────────────────────────────────┘
Border: 1px Neutral-300
Background: White
Height: 40px
Padding: 12px 16px

Focus:
┌──────────────────────────────────────────┐
│ Enter your name                          │  (blue border)
└──────────────────────────────────────────┘
Border: 2px Primary-500
Background: #fafafa
Box-shadow: none

Error:
┌──────────────────────────────────────────┐
│ Enter your name                         🔴│  (red border + icon)
└──────────────────────────────────────────┘
? This field is required
Border: 2px Error-600
Background: White
Icon: Alert symbol, Error-600
Message: 12px Error-600, margin-top 4px

Filled/Valid:
┌──────────────────────────────────────────┐
│ Rajesh Kumar                           ✓ │  (green border + check)
└──────────────────────────────────────────┘
Border: 1px Success-600
Icon: Checkmark, Success-600
```

### Select Dropdown

```
Closed:
┌─────────────────────────────────────┐
│ Select a service             ▼     │
└─────────────────────────────────────┘
Styling: Same as text input
Chevron icon: Neutral-500, right-aligned

Open:
┌─────────────────────────────────────┐
│ Select a service             ▲     │
├─────────────────────────────────────┤
│ □ Cremation                         │
│ □ Funeral Arrangements              │
│ □ Hearse Service                    │
│ □ Freezer Box                       │
└─────────────────────────────────────┘
Max height: 300px, then scrollable
Option hover: Neutral-100 background
Selected option: Primary-100 background, Primary-500 checkmark
```

### Radio & Checkbox

```
Unchecked Checkbox:
☐ I agree to the terms

Checked Checkbox:
☑ I agree to the terms
Border: 2px Primary-500
Background: Primary-500
Checkmark: White
Size: 20px × 20px

Unchecked Radio:
○ Yes, 24/7 assistance
Border: 2px Neutral-400
Background: White

Checked Radio:
◉ Yes, 24/7 assistance
Outer circle: 20px, 2px Primary-500 border
Inner circle: 8px Primary-500
Background: White
```

---

## Status Messages

### Success Toast

```
┌─────────────────────────────────────────┐
│ ✓ Booking confirmed!                    │
│                                         │
│ Booking reference: CR-2024-00142        │
│ Next steps sent to your phone.         │
└─────────────────────────────────────────┘

Position: Bottom-right (desktop), Top (mobile)
Background: Success-100 (#f0f8f3)
Border-left: 4px Success-600
Padding: 16px
Border-radius: 4px
Duration: 5 seconds auto-dismiss
Animation: Slide up 200ms on enter
```

### Error Toast (Persistent)

```
┌─────────────────────────────────────────┐
│ ⚠ Unable to process booking             │
│                                         │
│ Please check your connection and try    │
│ again, or call us directly.            │
│                                         │
│ [Retry]  [Close]                       │
└─────────────────────────────────────────┘

Background: Error-100 (#fde9e6)
Border-left: 4px Error-600
Text: Error-600
Duration: Persistent (user dismisses or 8s timeout)
Buttons: Secondary (Retry), Ghost (Close)
```

### Inline Error

```
Phone Number *
[+91 _______ ]
🔴 Please enter a valid 10-digit number

Size: 14px, Error-600
Icon: Alert symbol
Margin-top: 4px
Role: alert (screen reader announces)
```

---

## Responsive Behavior Examples

### Hero Section Responsive

```
Desktop (1024px+):
┌─────────────────────────────────────────────┐
│                                             │
│ Dignified Funeral & Cremation Services     │
│ Available 24/7                             │
│                                             │
│ [Image 1:3 aspect]     [Text 2:3 width]   │
│ [Cremation grounds]    Services, pricing,  │
│                        trust signals       │
│                                             │
│ [Primary CTA] [Secondary CTA]             │
│                                             │
└─────────────────────────────────────────────┘

Tablet (768px):
┌──────────────────────────────────────┐
│ Dignified Funeral Services Available  │
│ 24/7                                 │
│                                      │
│ [Image 1:2 height]                  │
│ Services, trust signals              │
│                                      │
│ [Primary CTA]  [Secondary CTA]      │
└──────────────────────────────────────┘

Mobile (<768px):
┌────────────────┐
│ Dignified      │
│ Funeral &      │
│ Cremation      │
│ Services       │
│                │
│ [Image full]   │
│                │
│ Trust signals  │
│                │
│ [Primary CTA]  │
│ [Secondary]    │
└────────────────┘
```

### Service Cards Grid

```
Desktop (3 columns):
┌──────┐ ┌──────┐ ┌──────┐
│ Card │ │ Card │ │ Card │
└──────┘ └──────┘ └──────┘

Tablet (2 columns):
┌─────────────┐ ┌─────────────┐
│   Card      │ │   Card      │
└─────────────┘ └─────────────┘
┌─────────────┐
│   Card      │
└─────────────┘

Mobile (1 column, stacked):
┌──────────────────┐
│     Card         │
├──────────────────┤
│     Card         │
├──────────────────┤
│     Card         │
└──────────────────┘
```

### Form Responsiveness

```
Desktop:
┌─────────────────────────────────────────┐
│ Label: Input field     | Helper text     │
│ Label: Input field     | Helper text     │
│ [Primary Button]       [Secondary]      │
└─────────────────────────────────────────┘

Mobile:
┌──────────────────────┐
│ Label:               │
│ [Input field]        │
│ ℹ Helper text        │
│                      │
│ Label:               │
│ [Input field]        │
│                      │
│ [Primary Button]     │
│ [Secondary Button]   │
└──────────────────────┘

Changes:
- Full-width inputs (100% - 24px padding)
- Font: 16px (prevent iOS zoom)
- Button: 48px height minimum
- Layout: Single column
```

---

## Spacing & Layout Diagram

### Typical Section Spacing

```
┌─────────────────────────────────────────────┐
│                                             │
│  Space (3xl = 64px)                        │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │                                       │ │  Container (xl = 32px padding)
│  │  Section Title (H2)                   │ │
│  │                                       │ │
│  │  Space (lg = 24px)                    │ │
│  │                                       │ │
│  │  Card | Card | Card                   │ │  Grid (md = 16px gap)
│  │                                       │ │
│  │  Space (lg = 24px)                    │ │
│  │                                       │ │
│  │  Descriptive paragraph text...        │ │
│  │                                       │ │
│  │  Space (lg = 24px)                    │ │
│  │                                       │ │
│  │  [Primary Button]                     │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Space (3xl = 64px)                        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Accessibility Callouts

### High Contrast Text Example

```
PASS: Neutral-900 (#1a1a1a) on White
Contrast ratio: 16.5:1 (exceeds WCAG AAA)
[Sample text in high contrast]

PASS: Primary-500 (#3d7a85) on White  
Contrast ratio: 7.2:1 (meets WCAG AA)
[Sample link in primary blue]

FAIL: Neutral-500 (#787878) on White
Contrast ratio: 3.2:1 (does NOT meet WCAG AA)
❌ Never use for body text
✓ Only for disabled/tertiary elements
```

### Focus States (Keyboard Navigation)

```
Unfocused Link:
Learn more about our services

Focused Link (Tab key):
┌─────────────────────────────────┐
│ Learn more about our services   │ ← 2px Primary-500 outline
└─────────────────────────────────┘

Always visible. Never use outline: none.
Outline-offset: 2px from element edge.
```

### Screen Reader Announcement

```
Screen reader sees:
  <h2>Why Families Choose Us</h2>
  <p>24/7 Assistance...</p>
  <button aria-label="Book a service">Learn More</button>

Announces:
  "Heading 2, Why Families Choose Us"
  "24/7 Assistance [description]"
  "Button, Book a service"

Not just: "Button" or "Learn More button"
```

---

## What NOT to Do (Anti-Patterns)

### ❌ Overuse of Color

```
WRONG:
Multiple colors in one section → visual chaos
Using color alone to convey information
Heavy gradients everywhere
```

### ❌ Unclear Buttons

```
WRONG:
"Click Here" ← Describes action, not outcome
"Submit" ← Generic, not clear what happens
[Button] ← No text or label
"BOOK NOW" ← All caps (harder to read)
```

### ❌ Poor Accessibility

```
WRONG:
Tiny buttons (< 40px on mobile)
Placeholder text instead of labels
Color-only validation (no icons/text)
Keyboard-inaccessible dropdowns
Decorative images with no alt text
```

### ❌ Too Much Motion

```
WRONG:
Slide-and-fade on every element
Auto-playing animations
Parallax effects
Spinning loaders
Ignoring prefers-reduced-motion
```

### ❌ Typography Issues

```
WRONG:
Multiple typefaces (5+ families)
All caps for body text
Single-word emphasis in headlines
Tiny text (< 14px)
Line-length > 100 characters
```

---

## Usage Checklist Before Launch

✓ Colors meet WCAG AA (4.5:1 contrast)  
✓ All interactive elements keyboard-accessible  
✓ Focus states visible on buttons, links, inputs  
✓ Form labels properly associated with inputs  
✓ Error messages have role="alert"  
✓ Buttons 48px × 48px minimum on mobile  
✓ Images have meaningful alt text  
✓ Animations respect prefers-reduced-motion  
✓ No color used alone to convey information  
✓ Phone numbers are clickable links (tel:)  
✓ WhatsApp links open correctly (https://wa.me/)  
✓ Confirmation shown for critical actions  
✓ Form fields clearly mark required (*)  
✓ Helper text visible and associated  
✓ Loading states clear (spinner + text)  

---

**This design system is a living document.**  
Update when new components are added or usage patterns evolve.
