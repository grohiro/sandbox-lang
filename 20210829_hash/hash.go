package main

// https://ashitani.jp/golangtips/tips_map.html

import "fmt"

func main() {

	hash := map[string]string{"foo": "bar", "hoge": "fuga"}
	fmt.Println(hash)

	hash["piyo"] = "piyopiyo"
	fmt.Println(hash)

	_, ok := hash["foo"]
	fmt.Println(ok)

	_, ok = hash["unknown"]
	fmt.Println(ok)

	delete(hash, "piyo")
	fmt.Println(hash)

	for k, v := range hash {
		fmt.Print(k)
		fmt.Print(" => ")
		fmt.Println(v)
	}

}
