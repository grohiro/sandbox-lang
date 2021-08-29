
di = {
  "foo": 'bar',
  "hoge": 'fuga',
}

print(di)

di["piyo"] = "piyopiyo"
print(di)

di.pop("foo")
print(di)

for k in di:
    print(k)
    #=> print key

print("---------")

for key in di:
    print(f"{key} => {di[key]}")

print("---------")
for val in di.values():
    print(val)

