import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
    preload(sources: Array<Object>): void
    clearMemoryCache(): Promise<void>
    clearDiskCache(): Promise<void>
}

export default TurboModuleRegistry.getEnforcing<Spec>('FastImageView')
