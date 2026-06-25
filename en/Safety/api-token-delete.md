# API Token File Deletion

API Token file deletion is intended for scripts, automation jobs, and third-party programs. You do not need to open the admin page. As long as you provide the site URL, token, and explicit file IDs, you can delete one or more files from ImgBed.

Deletion is a write operation and really deletes data after the command runs. Use `imgbed-token-list.mjs` first to confirm the `fileId` values you want to delete, then pass those IDs to the deletion script.

![Edit API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Before You Start

Open the admin panel, then go to:

```text
System Settings -> Security Settings -> API Token
```

When creating or editing the API Token, make sure the token allows deletion. This script only needs the `delete` permission.

You can also place the token in an environment variable:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Download The Script

| Script | Purpose |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>file deletion script</a> | Delete one or more explicitly specified file IDs. |

Node.js 18 or later is required.

## Delete API Behavior

The deletion script calls the backend deletion API:

```text
POST /api/manage/delete/batch
```

The request must include the API Token:

```text
Authorization: Bearer <token>
```

Request body example:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

If `fileIds` contains one file, it is a single-file deletion. If it contains multiple files, it is a batch deletion. The backend processes at most 15 files in one request, and the script automatically splits work into multiple requests according to `--batch-size`.

The API returns an NDJSON progress stream. Common events include `batch_start`, `file_step`, `file_done`, `batch_complete`, and `batch_error`. The script parses these events and summarizes them as readable output or JSON output.

After successful deletion, the backend automatically handles file indexes, directory statistics, capacity statistics, and cache cleanup.

## Deletion Script Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `--base-url <url>` | Yes | ImgBed site URL, for example `https://image.ai6.me`. |
| `--token <token>` | Yes | API Token. You can also use the `IMGBED_API_TOKEN` environment variable. |
| `--file-id <id>` | Yes | File ID to delete. You can pass it multiple times. |
| `--strictness <strict\|soft>` | No | Deletion strictness. Defaults to `strict`. |
| `--batch-size <n>` | No | Number of files per request. Defaults to `15`, maximum `15`. |
| `--retries <n>` | No | Temporary failure retry count. Defaults to `3`. |
| `--timeout-ms <n>` | No | Request timeout for each request. Defaults to `180000`. |
| `--output <pretty\|json>` | No | Output format. Defaults to `pretty`. |
| `--save-response <path>` | No | Save the final result as a JSON file. |
| `-h` / `--help` | No | Show script help. |

This script only deletes the explicit `--file-id` values you pass. It does not perform fuzzy matching, empty a directory in bulk, or read deletion IDs from comma-separated lists or local files.

## Strict Deletion And Soft Deletion

| Mode | Description |
| --- | --- |
| `strict` | Default mode. If remote storage deletion fails, the ImgBed record is kept so you can retry or investigate. |
| `soft` | If remote storage deletion fails, the ImgBed record is still cleaned up, and the result returns a warning. |

If the remote file must be deleted for the command to count as successful, use the default `strict` mode. If a remote platform can no longer delete the object and you only want to clean up the ImgBed record, use `soft`.

## Examples

Delete one file:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Use the token from the environment variable:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Delete multiple files:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Clean up the ImgBed record even when remote deletion fails:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Output JSON and save the result:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Limit each request to 5 files:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Check `fileId` Before Deleting

The deletion script needs ImgBed file IDs. You can first use the listing script to inspect files in a directory:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

The `name` field in the returned result is usually the `fileId` you can pass to the deletion script.

## FAQ

### Why did deletion fail but the file is still in the list?

When using the default `strict` mode, the ImgBed record is kept if remote storage deletion fails. This avoids deleting only the local index while the remote file still exists. After confirming that you only want to clean up the ImgBed record, retry the same `fileId` with `soft`.

### Why are there warnings in the result?

Warnings usually mean there was a non-fatal problem during remote deletion, cache cleanup, or statistics finalization. The script summarizes warnings so you can decide whether to retry.

### Can I delete an entire directory at once?

This script does not provide a directory-emptying operation. Use the listing script first to filter explicit `fileId` values, then pass the files you want to delete one by one.

