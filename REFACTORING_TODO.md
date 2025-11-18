# リファクタリング Todo リスト

## 🔴 高優先度

### 1. 未使用コードの削除

#### バックエンド
- [ ] `backend/src/app.controller.ts` - 空のコントローラーを削除
- [ ] `backend/src/app.service.ts` - 未使用の`getHello()`と`getUser()`メソッドを削除
- [ ] `backend/src/app.module.ts` - `AppController`と`AppService`の参照を削除
- [ ] `backend/src/app.controller.spec.ts` - 未使用のテストファイルを削除
- [ ] `backend/src/app.controller.ts` - 未使用の`Param`インポートを削除

#### フロントエンド
- [ ] `frontend/src/Home.tsx:2` - コメントアウトされた`Footer`のインポートを削除
- [ ] `frontend/src/Header.tsx:19-21` - コメントアウトされたコードを削除
- [ ] `frontend/src/Post.tsx:27` - 不要な空行を削除
- [ ] `frontend/src/App.tsx:17-18` - 不要な空行を削除

### 2. 型定義の共通化

- [ ] `Post`型が`Home.tsx`、`Post.tsx`、`PostList.tsx`で重複定義されている
- [ ] 共通の型定義ファイル（例: `frontend/src/types/index.ts`）を作成
- [ ] 各コンポーネントで共通型定義をインポートするように変更

### 3. APIエンドポイントの一元管理

- [ ] `http://localhost:3000/post`が`Home.tsx:31`と`Post.tsx:30`にハードコードされている
- [ ] API設定ファイル（例: `frontend/src/config/api.ts`）を作成
- [ ] 環境変数または設定ファイルでAPIベースURLを管理

### 4. 重複するAPI呼び出しの共通化

- [ ] `Home.tsx`と`Post.tsx`で同じ`GET /post`エンドポイントを呼び出している
- [ ] カスタムフック（例: `usePosts`）を作成してAPI呼び出しを集約

### 5. JWT認証ガードの有効化

- [ ] `backend/src/post/post.controller.ts`でコメントアウトされている認証ガードを有効化
- [ ] JWTストラテジーの登録を確認・修正
- [ ] 認証エラーの原因を調査して解決

---

## 🟡 中優先度

### 6. localStorageアクセスの抽象化

- [ ] `localStorage`への直接アクセスが複数箇所にある
  - `Home.tsx:24`
  - `Post.tsx:23,24,56`
  - `Login.tsx:13,27,28,29`
  - `Header.tsx:7,8,9`
- [ ] カスタムフック（例: `useAuth`）を作成して認証情報の管理を抽象化

### 7. エラーハンドリングの共通化

- [ ] `Login.tsx:32-42`のエラーハンドリングが冗長
- [ ] 共通のエラーハンドリング関数を作成
- [ ] エラーメッセージの表示方法を統一

### 8. コードの簡略化

#### `frontend/src/Post.tsx`
- [ ] `fetchPosts`関数（29-32行目）をコンポーネント外またはカスタムフックに移動
- [ ] `userId`の取得（24-25行目）を早期returnで簡略化
- [ ] `Number(userIdStr)`の型安全性を向上（`null`チェック追加）

#### `frontend/src/Login.tsx`
- [ ] エラーメッセージの構築（34-42行目）を簡略化
- [ ] `useEffect`の依存配列から`navigate`を削除（12-16行目）

#### `backend/src/auth/auth.controller.ts`
- [ ] `login`メソッド（16行目）の`result.then()`を`async/await`に統一

#### `backend/src/post/post.controller.ts`
- [ ] コメントアウトされたコード（4-5行目、8-9行目）を削除または実装に反映

---

## 🟢 低優先度

### 9. 命名の改善

- [ ] `backend/src/auth/auth.service.ts:26` - `AuthUser`を`authenticateUser`または`login`にリネーム
- [ ] `backend/src/user/user.controller.ts:9` - `getUser`メソッド名を`getUserPosts`などに変更（実装と一致させる）

### 10. UI/UXの改善

- [ ] `Post.tsx:49` - `alert`をより適切なUIフィードバック（トースト通知など）に置き換え
- [ ] `PostList.tsx:38` - `createdAt`の日付フォーマットを整形（例: "2024年1月1日 12:00"）

### 11. バリデーションの強化

- [ ] `Post.tsx:34-37`のクライアント側バリデーションに加えて、バックエンドでも必須バリデーションを追加
- [ ] DTOのバリデーションルールを確認・強化

### 12. テストの改善

- [ ] `backend/src/user/user.controller.spec.ts` - 実装の存在確認だけでなく、実際の動作をテスト
- [ ] `backend/src/user/user.service.spec.ts` - 実装の存在確認だけでなく、実際の動作をテスト

---

## 📝 メモ

### 現在の問題点

1. **認証ガード未使用**
   - `backend/src/auth/jwt-auth.guard.ts`が存在するが使用されていない
   - `post.controller.ts`に「認証を挟みたかったけど挟むとエラーが出る」というコメントあり
   - JWTストラテジーが未登録の可能性

2. **型安全性の問題**
   - `Post.tsx:25`で`Number(userIdStr)`を使用しているが、`userIdStr`が`null`の場合に`NaN`になる可能性

3. **コードの重複**
   - 複数のコンポーネントで同じAPIエンドポイントを呼び出し
   - 同じ型定義が複数箇所で定義されている

---



