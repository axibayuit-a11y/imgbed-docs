# Cloudflare API Token の設定

ImgBed の一部機能では、Cloudflare API Token が必要です。たとえば R2、Workers、D1、KV などの Cloudflare リソースを操作するときに使います。

## 用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Cloudflare アカウント | API Token を作成します |
| 対象アカウント ID | R2 や Workers などの操作対象 |
| 必要な権限 | 使う機能に応じて最小限の権限を付与します |

## API Token を作成する

1. Cloudflare Dashboard にログインします。
2. 右上のプロフィールから `My Profile` を開きます。
3. `API Tokens` を開きます。
4. `Create Token` をクリックします。
5. 必要な権限を選びます。
6. 対象アカウントまたはゾーンを指定します。
7. 作成後に表示される Token をコピーします。

![Cloudflare API Token](../../image/Safety/cloudflare api token截图.png)

Token は作成直後しか表示されない場合があります。必ず安全な場所に控えてください。

## グローバル API キーとの違い

Cloudflare には Global API Key もありますが、通常は API Token の利用をおすすめします。

| 種類 | 特徴 |
| --- | --- |
| API Token | 権限と対象範囲を限定できます |
| Global API Key | アカウント全体に強い権限を持ちます |

必要最小限の権限だけを与えた API Token の方が、運用上安全です。

![グローバルキー確認](../../image/Safety/查看全局令牌.png)

## ImgBed へ入力する

ImgBed の設定画面で Cloudflare API Token を入力し、保存します。

保存後、関連機能で接続確認や容量確認を行い、Token が正しく動作するか確認してください。

## 運用の注意

- Token は公開リポジトリやフロントエンドコードへ直接書かないでください。
- 権限は必要な範囲に絞ります。
- 不要になった Token は Cloudflare 側で削除します。
- 漏えいした可能性がある場合は、すぐに失効させて作り直します。
