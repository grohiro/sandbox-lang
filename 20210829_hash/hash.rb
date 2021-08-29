
def dump (a)
  a.each do |key, val|
    p "#{key} => #{val}"
  end
  p "-----"
end

hash = {
  foo: 'bar',
  hoge: 'fuga'
}

p hash
#=> keys are symbol
#
hash[:piyo] = 'piyopiyo'
p hash

hash["piyo"] = 'PIYOPIYO'
dump hash 
#=> "piyo" != :piyo

hash.delete 'piyo'
dump hash

hash.delete :foo
dump hash

hash.each do |a|
  p a
end
