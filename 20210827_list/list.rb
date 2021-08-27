def dump(a)
  if a.instance_of?(Array)
    a.each_with_index do |n, k|
      print "[#{k}] -> "
      p n
    end
  end
end

list = [];
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

dump list
p list.length

list.delete_at 0
dump list
p list.length

sub = list.slice(2, 2)
dump sub
p sub.length

