# TypeScript について学ぼう

## 基本構文

### 型キャプチャ

```ts
type Keys = keyof typeof spacing;
```

`typeof`でオブジェクト全体の肩を取得。
`keyof`でキーを`StringLiteralTypes`として取得できる。

### オブジェクトのキーを制限する

```ts
[k in Type]: {}
```

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

## React

### `ReactNode`、`ReactElement`の違い

`ReactNode`の中に、`ReactElement`がある関係性。
JSX 全てをまとめた type として`ReactNode`があり、そこから`string`や`null`を除いた純粋な React コンポーネントを意味するのが`ReactElement`。

### `useEffect`

- コンポーネントがマウントされた時
- コンポーネントがアンマウントされた時
- コンポーネントの中身が更新された時

実行される。

```js
const [email, setEmail] = useState("");

useEffect(() => {
  document.title = "ログイン";
  console.log("ほげ");
}, [email]); // emailのstateが更新されたと時にuseStateが再び実行される。
```

第二引数の配列の中に state を入れることで、監視する値を指定できる。
指定しなかった場合、全て実行。`[]`を指定した場合、どの値が更新されても再描写されない。

第２引数を`[]`にすることで、ページロードジの初期化処理として使うことができる。
→ タイムラインの初期化処理としてつかえそう。

```js
useEffect(() => {
  return () => {
    console.log("コンポーネントが消える前に実行される。");
  };
}, []);
```

マウント時に実行していた処理を解除する時に使う。

`userEffect`は Class コンポーネントの、

- componentDidMount
- componentDidUpdate
- componentWillUnmount

これらをお手軽に実現できるようにしている。ありたがや。
参考:https://reffect.co.jp/react/react-useeffect-understanding
