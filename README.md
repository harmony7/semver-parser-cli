# CLI for semver-parser

Incredibly simple CLI wrapper around `semver-parser`.

## Usage

```
$ npx semver-parser-cli 4.5.3
{"version":"4.5.3","matches":true,"major":4,"minor":5,"patch":3}

$ npx semver-parser-cli 4.5.3-beta.1
{"version":"4.5.3-beta.1","matches":true,"major":4,"minor":5,"patch":3,"pre":["beta",1]}
```

Get at individual fields

```
$ npx semver-parser-cli 4.5.3 --field major
4

$ npx semver-parser-cli 4.5.3 --field minor
5
```

Use the special --preid field to get at the prerelease id

```
$ npx semver-parser-cli 4.5.3-beta.1 --field preid
beta
```

## License

[MIT](./LICENSE.md)
