# د Hugging Face Channel اضافه کول

## د پیل مخکې اړتیاوې

یوازې درې شیانو ته اړتیا لرئ:

| اړتیا | موخه |
| --- | --- |
| Hugging Face account | د access token جوړولو او repository مالکیت لپاره. |
| Hugging Face User Access Token | د ImgBed لپاره Hugging Face API access، repositories جوړول او files upload کول. |
| Repository name | یوازې repository name لیکلی شئ، لکه `image`. |

## Setup Steps

### Step 1: Hugging Face ته Sign in او Access Token جوړول

1. Hugging Face ته sign in شئ.
2. په پورته ښي لوري کې avatar کلیک او `Settings` پرانیزئ.
3. له left sidebar څخه `Access Tokens` پرانیزئ.
4. نوی token جوړ کړئ.
5. token ته پېژندل کېدونکی نوم ورکړئ.
6. `write` permission وټاکئ.
7. token چې جوړ شي، سملاسي یې copy او خوندي کړئ.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: په ImgBed کې Hugging Face Channel ډک کړئ

په Upload Settings کې د `Hugging Face` له ټاکلو وروسته:

| UI Field | What to Enter |
| --- | --- |
| Channel name | ستاسې ټاکلی نوم، لکه `hf-primary`. |
| Repository name | short repo name لکه `image`، یا full path لکه `username/image`. |
| Access Token | همدا Hugging Face User Access Token چې جوړ مو کړی. |
| Private repository | د اړتیا له مخې on یا off کړئ. |
| Remark | اختیاري، لکه `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel Save کړئ

له fields ډکولو وروسته Save کلیک کړئ.

system دا کارونه خپله ترسره کوي:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account پېژني او value full repository path ته expand کوي. |
| Full repository path | ImgBed د `username/repository` path هماغسې کاروي لکه داخل شوی. |
| Repository check | که current personal account path وي، ImgBed هڅه کوي repository جوړ کړي که موجود نه وي. که full path manual ورکړئ، هماغه path کاروي. |
| Repository type | دا channel د `dataset` repository کاروي. |
| Public/private state | repository visibility د current switch له مخې synchronized کېږي. |

## Quick Checklist

```text
Hugging Face ته sign in شئ
-> Access Token جوړ کړئ
-> write permission وټاکئ
-> ImgBed ته بېرته ولاړ شئ او token او repository name ولیکئ
-> Save
-> که یوازې repo name ورکړئ، ImgBed current username اتومات اضافه کوي
-> که username/repo ورکړئ، هماغه کاروي
-> ImgBed dataset repository check یا create کوي
-> test image upload کړئ
```
