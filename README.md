# Jay Westgate Author Site

Modern author platform built with Next.js and Tailwind CSS.

## Site sections

- Home page with upcoming book callout, latest blog excerpt, and newsletter signup
- Bibliography page (`/books`)
- Markdown-powered blog (`/blog` and `/blog/[slug]`) using static generation
- About page (`/about`)

## Local development

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Gatewatch email storage (AWS Amplify)

The Gatewatch signup posts to `POST /api/subscriptions`, which stores emails in DynamoDB.

Amplify datastore provisioning code is included in:

- `amplify/backend.ts`
- `amplify/data/resource.ts`

It creates a DynamoDB table named `GatewatchSubscriptions` with on-demand billing and point-in-time recovery, and exposes:

- `SUBSCRIPTIONS_TABLE_NAME`
- `SUBSCRIPTIONS_TABLE_ARN`

### Required environment variables

- `SUBSCRIPTIONS_TABLE_NAME` - DynamoDB table name for subscriptions
- `AWS_REGION` - AWS region (defaults to `ap-southeast-2` if omitted)

`SUBSCRIPTIONS_TABLE_NAME` can also be resolved from `amplify_outputs.json` at runtime when
available. If neither is present, the server falls back to `GatewatchSubscriptions`.

### DynamoDB table shape

- Partition key: `id` (String)
- Attributes stored:
  - `id` (UUID)
  - `email` (normalized lowercase email)
  - `createdAt` (ISO timestamp)

### Amplify setup notes

- Ensure Amplify uses the repository `amplify.yml` so backend deployment runs.
- The build now runs `npx @aws-amplify/backend-cli pipeline-deploy --branch $AWS_BRANCH --app-id $AMPLIFY_APP_ID`
  to create/update backend resources (including DynamoDB).
- Set `SUBSCRIPTIONS_TABLE_NAME` in Amplify environment variables using the created table name output.
- Grant the Amplify hosting runtime role permission for `dynamodb:PutItem` on the created table.
- In Amplify environment variables, set:
  - `AMPLIFY_APP_ID` to your Amplify app ID (optional if `AWS_APP_ID` is provided by Amplify build)

### Troubleshooting 500 errors on subscribe

- Verify `SUBSCRIPTIONS_TABLE_NAME` is set (or that `amplify_outputs.json` includes it).
- Verify Amplify runtime role has `dynamodb:PutItem` access to `GatewatchSubscriptions`.
- Check Amplify app logs for `Failed to save subscription email` details.
- Open `GET /api/subscriptions/health` to confirm runtime diagnostics:
  - `tableName`
  - `tableNameSource` (`env`, `amplify_outputs`, or `default`)
  - `region`

## Blog content format

Blog posts are stored in `blog/*.md` with frontmatter:

```md
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "One sentence teaser for homepage and listing."
---
```

Use `blog-post-template.md` as your starting point.

## New post checklist

- Copy `blog-post-template.md` into `blog/your-post-slug.md`
- Update frontmatter: `title`, `date` (`YYYY-MM-DD`), and `excerpt`
- Write the post content in markdown with headings and short sections
- Run `npm test`
- Run `npm run lint`
- Start dev server with `npm run dev` and preview:
  - Home excerpt block
  - Blog index card
  - Individual blog post page
