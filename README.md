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

## the expected result

<p float="center">
<img src="https://user-images.githubusercontent.com/4893591/164488412-100c0cfd-1c6b-4f4d-8ba9-d7065a16457b.png" width="45%"/>
&nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://user-images.githubusercontent.com/4893591/164489634-f496bce1-b4d3-4993-976a-55e9c7b27e45.png" width="45%" />
</p>

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
