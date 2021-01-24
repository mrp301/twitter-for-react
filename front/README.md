# TypeScript について学ぼう

## 基本構文

### StringLiteralTypes

```ts
// みらい、えも、りんか以外代入不可能となる。
let idolName: "みらい" | "えも" | "りんか";
```

※当然だが、TypeScript の型推論では`string`と推論されてしまう。

### const/let の型推論

```ts
const name = "みらい"; // みらい
let name = "みらい"; // string
```

`const`で定義した場合は、`StringLiteralTypes`として推論される。

## 配列

### 型定義

```ts
const array: string[] = ["hoge", "fuga"];
```

複数のデータ型を許容する場合

```ts
const array: (string | number)[] = ["hoge", 100];
```

### const アサーション

```ts
// nameとage以外は代入不可能となる。
const hoge = ["name", "age"] as const;
```

## オブジェクト

### 読み取り専用プロパティ

```ts
type Obj {
  readonly id: number,
  name: string,
}

const obj: Obj {
  id: 1,
  name: 'みらい',
}

// 全てをreadonlyにしたい場合
const obj: Readonly<Obj> {
  id: 1,
  name: 'みらい',
}
```

### 動的に値を追加する。

```ts
type User = {
  name: string;
  [k: string]: any;
};

const Mirai: user = {
  name: "桃山みらい",
  age: 14,
  type: "ラブリー",
};
```

`[k: string]`を`インデックスシグネチャ`と呼ぶ。

### キー名に制約をかける

```ts
type Keys = "name" | "age";
const user = {
  [k in Keys]: string,
};

// 「?」を付与することで任意にできる
const user = {
  [k in Keys]: string,
};
```

### ダウンキャスト

```ts
const card = {
  color: "red", // string
  type: "text", // string
};
```

型推論された結果よりも詳細な型が明確な時にプログラマーがアサーションで型を詳細にしていくことを、`ダウンキャスト`と呼ぶ。

```ts
const card = {
  color: "red" as const,
  type: "text" as const,
};
```

逆に、型を緩くすることを`アップキャスト`と呼ぶ。
