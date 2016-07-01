# fake-file-loader

This works exactly like [file-loader](https://github.com/webpack/file-loader), except it doesn't actually emit any files.

## Deprecation Notice

[file-loader](https://github.com/webpack/file-loader) now supports not emitting files itself, use it with `emitFile=false`. Because of this, *fake-file-loader* has been deprecated.

To upgrade, use `file-loader?emitFile=false` instead.

See [webpack/file-loader#74](https://github.com/webpack/file-loader/pull/74).
