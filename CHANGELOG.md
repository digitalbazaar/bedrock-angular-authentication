# bedrock-angular-authn ChangeLog

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
