require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name          = "RNFastImage"
  s.version       = package['version']
  s.summary       = package['description']
  s.authors       = { "Dylan Vann" => "dylan@dylanvann.com" }
  s.homepage      = "https://github.com/DylanVann/react-native-fast-image#readme"
  s.license       = "MIT"
  s.platforms     = { :ios => "15.1", :tvos => "15.1" }
  s.framework     = 'UIKit'
  s.requires_arc  = true
  s.source        = { :git => "https://github.com/DylanVann/react-native-fast-image.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m,mm,cpp}"

  s.dependency 'SDWebImage', '~> 5.19.0'
  s.dependency 'SDWebImageWebPCoder', '~> 0.14.0'

  install_modules_dependencies(s)
end
