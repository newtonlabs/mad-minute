guard :coffeescript, :output => 'spec/unit',     :input => 'src/coffee/unit'
guard :coffeescript, :output => 'spec/e2e',      :input => 'src/coffee/e2e'
guard :coffeescript, :output => 'www/assets/js', :input => 'src/coffee/app'

guard 'haml', :output => 'www', :input => 'src/haml' do
   watch(/(.*).haml/)
end

# For Ruby Parsers

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }

#guard 'shell' do
#  watch(/(.*).csv/) {|m| `ruby scripts/csv2json.rb` }
#end
