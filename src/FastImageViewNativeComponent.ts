import type { HostComponent, ViewProps, ColorValue } from 'react-native'
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent'
import type {
    DirectEventHandler,
    Double,
    Int32,
    UnsafeMixed,
    WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes'

type OnFastImageLoadStartEvent = Readonly<{}>

type OnFastImageProgressEvent = Readonly<{
    loaded: Int32
    total: Int32
}>

type OnFastImageLoadEvent = Readonly<{
    width: Double
    height: Double
}>

type OnFastImageErrorEvent = Readonly<{}>

type OnFastImageLoadEndEvent = Readonly<{}>

/**
 * Public-facing source type (used by consumers of FastImage).
 * This is the real type that users will see through the
 * `FastImageProps.source` API in `src/index.tsx`.
 *
 * Note: we can NOT use this type directly for the codegen `source` prop
 * below because React Native codegen does not support TypeScript index
 * signatures (the `headers: { [key: string]: string }` map). So we pass
 * `UnsafeMixed` to codegen and keep the strong type on the JS side.
 */
export type FastImageSource = Readonly<{
    uri?: string
    headers?: Readonly<{ [key: string]: string }>
    priority?: string
    cache?: string
}>

export interface NativeProps extends ViewProps {
    /**
     * The image source. Typed as `UnsafeMixed` for codegen purposes
     * because it contains a dynamic `headers` map that codegen cannot
     * parse. The actual runtime shape is {@link FastImageSource}, and
     * the full object (including headers) is forwarded to the native
     * ViewManager unchanged via the RN interop layer.
     */
    source?: UnsafeMixed<FastImageSource>
    defaultSource?: UnsafeMixed<string | Int32>
    resizeMode?: WithDefault<
        'contain' | 'cover' | 'stretch' | 'center',
        'cover'
    >
    tintColor?: ColorValue
    enableQLThumbnailGenerator?: boolean
    onFastImageLoadStart?: DirectEventHandler<OnFastImageLoadStartEvent>
    onFastImageProgress?: DirectEventHandler<OnFastImageProgressEvent>
    onFastImageLoad?: DirectEventHandler<OnFastImageLoadEvent>
    onFastImageError?: DirectEventHandler<OnFastImageErrorEvent>
    onFastImageLoadEnd?: DirectEventHandler<OnFastImageLoadEndEvent>
}

export default codegenNativeComponent<NativeProps>('FastImageView', {
    interfaceOnly: true,
    paperComponentName: 'FastImageView',
}) as HostComponent<NativeProps>
