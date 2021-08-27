

def dump(a):
    for k in range(len(a)):
        print(f"[{k}] -> ", end = "")
        print(f"{a[k]}")

list = [];
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

dump(list)
print(len(list))

del list[0]

dump(list)
print(len(list))

sub = list[2:4]
dump(sub)
print(len(sub))
