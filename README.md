# デジタル庁デザインシステム

デジタル庁デザインシステムのReactサンプル実装。  
主にUIコンポーネントの実装テスト用。

---

Copyright Digital Agency, Government of Japan 2023. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0)

[Figma Community (@digitalagencyjp)](https://www.figma.com/@digitalagencyjp)

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Test

### Run Jest

`npm run test`

### Run Storybook Test

1. start
`npm run storybook`
or
`npm run storybook:serve`

2. test
`npm run test:storybook`

## Local VRT

### Before

- `npm run vrt:snapshot`

### After

- `npm run vrt:expected:win` or `npm run vrt:expected`
- `npm run vrt:snapshot`

### Reg

- `npm run vrt:local:reg`
