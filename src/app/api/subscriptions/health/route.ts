import { NextResponse } from "next/server";
import { getSubscriptionsRuntimeConfig } from "@/lib/subscription-store";

export async function GET() {
  const config = getSubscriptionsRuntimeConfig();

  return NextResponse.json(
    {
      ok: true,
      diagnostics: {
        region: config.region,
        tableName: config.tableName,
        tableNameSource: config.tableNameSource,
        hasAmplifyOutputsFile: config.hasAmplifyOutputsFile,
      },
    },
    { status: 200 },
  );
}
