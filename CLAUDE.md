@AGENTS.md

# Entrance Exam — AI Assistant Guide

Japanese middle-school entrance exam prep app (中学受験対策). React Native / Expo app targeting iOS, Android, and web.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Expo ~56 (SDK 56), React Native 0.85, React 19 |
| Language | TypeScript (strict mode) |
| Navigation | expo-router v4 (file-based, Expo Router v4 API) |
| Animations | react-native-reanimated v4 + react-native-worklets |
| In-app purchase | RevenueCat (`react-native-purchases`) — lazy-loaded, native-only |
| Persistence | `@react-native-async-storage/async-storage` |
| UI extras | `expo-linear-gradient`, `expo-speech`, `expo-font` |
| Web deploy | Vercel (SPA via `npx expo export --platform web`, output `dist/`) |
| Image gen | Google Gemini API (Gemini Flash/Pro image models — `scripts/generate-history-images.mjs`) |

## Directory Layout

```
app/                    # expo-router file-based routes
  _layout.tsx           # root Stack — inits RevenueCat, hides header
  (tabs)/
    _layout.tsx         # bottom-tab navigator (ホーム / 地理 / 進捗)
    index.tsx           # Home screen — subject selector + listen mode entry
    geography.tsx       # Geography explorer tab
    progress.tsx        # Progress / stats tab
  quiz/
    [subject].tsx       # Dynamic quiz screen (?difficulty= param)

components/             # Reusable UI
  AnimatedMascot.tsx    # Floating/bouncing/pulsing mascot image wrapper
  AnimeImage.tsx        # Plain image component
  GeographyExplorer.tsx # Interactive Japan map with layer switching
  ListenMode.tsx        # Text-to-speech listen mode sheet
  Paywall.tsx           # Modal paywall (RevenueCat offerings → purchase)
  QuizCard.tsx          # Tap-to-reveal flash card (question → answer + hint)
  SchoolSlideshow.tsx   # Target school names slideshow
  SubjectCard.tsx       # Home screen subject selection card

constants/
  proAccess.ts          # FREE_GEO_LAYERS, PRO_GEO_LAYERS, PRO_FEATURES list

data/
  questions.ts          # All Q&A data + SubjectKey type + questionsBySubject map
  geographyRegions.ts   # Japan prefecture/region data for each geo layer
  images.ts             # Image asset references (mascots, illustrations)
  schools.ts            # Target school list with metadata

hooks/
  useSubscription.ts    # RevenueCat tier polling + listener → { tier, isPro, isMax, loading }
  useProGate.ts         # Wraps useSubscription; exposes requirePro() + paywall state

services/
  subscription.ts       # RevenueCat init, purchase, restore, tier resolution

store/
  progress.ts           # AsyncStorage CRUD for per-subject quiz scores

types/
  images.d.ts           # Module declarations for image asset imports

utils/
  speech.ts             # Unified TTS: expo-speech (native) + Web Speech API (web); toSpeechText() normalizes math/kanji for TTS

assets/                 # Static images (icon, splash, mascots, history illustrations)
scripts/
  generate-history-images.mjs   # Node script to generate history illustration assets
```

## Navigation

File-based routing via expo-router. Three tabs live under `(tabs)/`:

- **ホーム** (`index.tsx`) — pick subject + difficulty, start quiz or listen mode
- **地理** (`geography.tsx`) — Japan geography map explorer
- **進捗** (`progress.tsx`) — cumulative score stats

Quiz runs as a modal-style card stack: `router.push('/quiz/sansu?difficulty=basic')`.

Route param `subject` must be a `SubjectKey`; `difficulty` is optional (`basic | standard | advanced`). Both are validated with type-guard functions inside the screen.

## Data Model

### Questions

```ts
type Question = {
  id: string;             // e.g. 'sansu_01'
  subject: SubjectKey;    // 'sansu' | 'kokugo' | 'rika' | 'shakai' | 'eigo'
  question: string;
  answer: string;
  hint?: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  questionReading?: string;
  answerReading?: string;
};
```

All questions live in `data/questions.ts` (250 total, 50 per subject). `questionsBySubject` is a pre-built `Record<SubjectKey, Question[]>` exported from the same file. `subjectInfo` maps each key to `{ name, emoji, color }`.

**Subjects**: `sansu` 算数 | `kokugo` 国語 | `rika` 理科 | `shakai` 社会 | `eigo` 英語

### Progress

Per-subject: `{ correct: number; total: number; lastStudied?: string }` stored under `@entrance_exam_progress` in AsyncStorage via `store/progress.ts`.

## Subscription / IAP

- **Tiers**: `free | pro | max`
- **Entitlements**: `'pro'` and `'max'` (checked via RevenueCat `customerInfo.entitlements.active`)
- RevenueCat is **native-only** — always guard with `Platform.OS !== 'web'` and lazy-import: `const Purchases = (await import('react-native-purchases')).default`
- `isRevenueCatConfigured()` returns `false` if env keys are missing — treat as free tier, no purchases
- Env vars: `EXPO_PUBLIC_RC_API_KEY_IOS`, `EXPO_PUBLIC_RC_API_KEY_ANDROID`

**Pro-gating pattern**:
```tsx
const { requirePro, paywallVisible, setPaywallVisible } = useProGate();

function handleProFeature() {
  requirePro(() => {
    // runs only if isPro
    doProThing();
  });
}

// Render paywall:
<Paywall visible={paywallVisible} onClose={() => setPaywallVisible(false)} onPurchased={...} />
```

**Geography layers**: free layers defined in `constants/proAccess.ts` as `FREE_GEO_LAYERS`. Check `isProGeoLayer(layer)` before enabling.

## Styling Conventions

- All styles use `StyleSheet.create()` — no inline objects in JSX
- Colors: primary blue `#1E5FBE`, success green `#00A651` / `#27AE60`, warning `#F39C12`, danger `#E74C3C`
- Border radius: cards = `20`, chips = `12`, small buttons = `8`
- Shadows: `shadowColor: '#000'`, `shadowOffset: { width: 0, height: 4 }`, `shadowOpacity: 0.12`, `elevation: 6`
- Emoji icons are used throughout the UI instead of icon libraries

## Language / Locale

The app is entirely in Japanese. All user-facing strings, labels, and question content are in Japanese. Do not add English user-facing text.

## Development Workflow

**Env vars** (copy `.env.example`):
- `EXPO_PUBLIC_RC_API_KEY_IOS` — RevenueCat iOS key
- `EXPO_PUBLIC_RC_API_KEY_ANDROID` — RevenueCat Android key
- `GEMINI_API_KEY` — for image generation script only

**Note**: `.npmrc` sets `legacy-peer-deps=true` — required for the current dependency tree.

```bash
npm install
npm run ios       # Start on iOS simulator
npm run android   # Start on Android emulator
npm run web       # Start Expo web dev server
```

### Web / Vercel build

```bash
npx expo export --platform web   # outputs to dist/
```

`vercel.json` rewrites all paths to `/index.html` for SPA routing.

### Adding questions

Append to the `questions` array in `data/questions.ts`. Follow the existing id convention: `{subject}_{nn}` (zero-padded two digits, then continuing). Include `difficulty`, `hint` where appropriate.

### Generating history illustration assets

```bash
npm run generate:history-images        # Uses gemini-flash (cheaper)
npm run generate:history-images:pro    # Uses gemini-pro (higher quality)
```

Requires `GEMINI_API_KEY`. Outputs PNGs to `assets/history/`.

### Adding a new subject

1. Add the key to the `SubjectKey` union in `data/questions.ts`
2. Add an entry to `subjectInfo` in the same file
3. Add a mascot entry in `data/images.ts`
4. Add the subject key to the `SUBJECTS` array in `app/(tabs)/index.tsx`

## Platform Considerations

- RevenueCat and `expo-speech` are native-only — always lazy-import and guard with `Platform.OS !== 'web'`
- `react-native-purchases` must be dynamically imported: `await import('react-native-purchases')`
- The web build uses Metro bundler (configured in `app.json` under `web.bundler`)
- `predictiveBackGestureEnabled: false` on Android (set in `app.json`)

## No Testing Setup

There is currently no test framework configured. Manual testing on simulators / devices is the only verification path.
