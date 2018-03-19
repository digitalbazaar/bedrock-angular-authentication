# bedrock-angular-authn ChangeLog

### Changed
- **BREAKING**: Switch to material design.

## 3.0.4 - 2017-05-30

### Fixed
- Add `browserDependencies` to package.json file.

## 3.0.3 - 2017-05-26

### Fixed
- Update deps.

## 3.0.2 - 2017-05-26

### Fixed
- Update deps.

## 3.0.1 - 2017-05-26

### Fixed
- Published using incorrect branch.

## 3.0.0 - 2017-05-26

### Changed
- **BREAKING**: Switch package manager from bower to npm.
- **BREAKING**: Replace requirejs/amd with ES6 import.
- Angular 1.6.x is required.

## 2.1.1 - 2017-05-10

### Fixed
- Initialize component via `$onInit`.

## 2.1.0 - 2016-06-20

### Added
- Handle session authentication requirements on routes. When changing routes,
  a resolve method is added to ensure specified required session data is
  present -- otherwise redirect to "/" or a specified `redirectUrl`.

## 2.0.0 - 2016-05-24

### Changed
- Use Angular 1.5 component syntax.
- Change attribute names on components to match current conventions.

## 1.0.0 - 2016-04-29

- See git history for changes.
