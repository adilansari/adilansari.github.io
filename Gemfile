source "https://rubygems.org"

gem "jekyll", "~> 4.4"

# Ruby 3.4 removed csv/base64 and 3.5 will remove logger from the default gems.
# Declare them explicitly so bundle install stays green on current and future Ruby.
# Refs: https://github.com/jekyll/jekyll/issues/9534, https://github.com/jekyll/jekyll/issues/9915
gem "csv"
gem "base64"
gem "logger"

gem "nokogiri", "~> 1.18"
gem "webrick", "~> 1.8"

# 3.1.0 added `silence_deprecations`; we need it for the so-simple-theme SCSS.
gem "jekyll-sass-converter", "~> 3.1"

group :jekyll_plugins do
  gem "jekyll-feed",          "~> 0.17"
  gem "jekyll-seo-tag",       "~> 2.8"
  gem "jekyll-sitemap",       "~> 1.4"
  gem "jekyll-paginate",      "~> 1.1"
  gem "jekyll-gist",          "~> 1.5"
  gem "jekyll-remote-theme",  "~> 0.4"
  gem "jekyll-include-cache", "~> 0.2"
  gem "jemoji",               "~> 0.13"
  gem "jekyll-compose",       "~> 0.12"
end
