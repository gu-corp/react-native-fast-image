// Type shims for React Native codegen modules.
//
// The library's dev dependency is pinned to an older React Native version
// (0.64.2) which does NOT ship the codegen modules used by the New Architecture
// spec files. These modules ARE present at runtime in any consumer project
// using RN >= 0.68 (where New Architecture is supported), so the import is
// safe — only the build-time type-check needs to be satisfied.
//
// Codegen itself only inspects the *names* of the type aliases when parsing
// the spec file; it does not care where they come from. So providing weak
// shims here keeps the spec compilable across all React Native versions.

declare module 'react-native/Libraries/Utilities/codegenNativeComponent' {
    import type { HostComponent } from 'react-native'

    export interface CodegenNativeComponentOptions {
        interfaceOnly?: boolean
        paperComponentName?: string
        paperComponentNameDeprecated?: string
        excludedPlatforms?: ReadonlyArray<'iOS' | 'android'>
    }

    export default function codegenNativeComponent<Props extends object>(
        componentName: string,
        options?: CodegenNativeComponentOptions,
    ): HostComponent<Props>
}

declare module 'react-native/Libraries/Types/CodegenTypes' {
    export type Int32 = number
    export type Double = number
    export type Float = number

    export type WithDefault<
        Type,
        _Default extends Type | null | undefined,
    > = Type | null | undefined

    export type DirectEventHandler<Event, _PaperName extends string | null = null> =
        | ((event: Event) => void)
        | null
        | undefined

    export type BubblingEventHandler<Event, _PaperName extends string | null = null> =
        | ((event: Event) => void)
        | null
        | undefined

    // `UnsafeMixed<T>` is a codegen escape hatch: codegen treats the prop as
    // an opaque object (NSDictionary / ReadableMap / folly::dynamic) but on
    // the TS side we keep the original type `T` for IDE / type-checking.
    export type UnsafeMixed<T = unknown> = T

    export type UnsafeObject = object
}
