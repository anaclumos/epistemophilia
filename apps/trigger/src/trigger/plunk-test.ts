import { logger, task } from "@trigger.dev/sdk/v3"

export const plunkTest = task({
  id: "plunk-test",
  run: async () => {
    const exaRequestBody = {
      query: "hottest AI startups",
      type: "neural",
      useAutoprompt: true,
      numResults: 10,
      startPublishedDate: new Date(
        new Date().setDate(new Date().getDate() - 1),
      ).toISOString(),
      endPublishedDate: new Date().toISOString(),
      contents: {
        summary: true,
      },
    }

    const exaFetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "8c3e0df4-bbc3-4acc-a2f7-76d090d4c652",
      },
      body: JSON.stringify(exaRequestBody),
    }

    logger.info("Fetching from Exa", { exaFetchOptions })

    const exaRes = await fetch("https://api.exa.ai/search", exaFetchOptions)

    if (!exaRes.ok) {
      logger.error("Failed to fetch from exa", { exaRes })
    }

    const exaData = await exaRes.json()

    logger.info("Successfully fetched from Exa", { exaData })

    const plunkRequestBody = {
      to: "anaclumos@gmail.com",
      subject: "Hello world!",
      body: JSON.stringify(exaData),
      name: "SignalKite",
    }

    const plunkFetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer sk_68b95d763924cb03da070778a16195f47d67a590d72445c8",
      },
      body: JSON.stringify(plunkRequestBody),
    }

    logger.info("Sending email with Plunk", { plunkFetchOptions })

    const res = await fetch(
      "https://api.useplunk.com/v1/send",
      plunkFetchOptions,
    )

    if (!res.ok) {
      logger.error("Failed to send email", { res })
    }

    const data = await res.json()

    logger.info("Successfully sent email with Plunk", { data })

    return {
      data,
    }
  },
})
