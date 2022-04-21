## steps to run the application

install the dependencies

```shell
# go to project folder
cd superhero

# install the dependencies
yarn install

# start the android application
yarn android

# or start the ios application (if you are on mac)
yarn ios


### Added unit tests for screen components

```

## Organization and structure of `src` folder

```shell
.
├── App.tsx
├── components
│   └── SuperHero
│       ├── SuperHeroList
│       │   ├── index.tsx
│       │   ├── styles.ts
│       │   └── tests.tsx
│       └── SuperHeroListItem
│           ├── index.tsx
│           ├── styles.ts
│           └── tests.tsx
├── pages
│   └── Home
│       ├── index.tsx
│       ├── styles.ts
│       └── tests.tsx
├── sharedInterfaces
│   └── Hero.ts
└── store
    ├── features
    │   └── heroes
    │       ├── heroesRequests.ts
    │       ├── heroesSaga.ts
    │       └── heroesSlice.ts
    ├── rootSaga.ts
    └── rootStore.ts
```

## Feedbacks

+55 64 98414-7972 or rodgomesc@gmail.com
