import { Story } from 'type.mjs'
import { LOCAL_HEIMDALL } from './default.mjs'
import RSS from 'rss'
import { parse } from 'marked'
import fs from 'fs'
import { createHnContent } from './newsletter.mjs'
import { LinguineList } from './linguine.mjs'

const writeStoryRss = async (storyHistory: { [key: string]: Story[] }, locale: string) => {
  const rss = new RSS({
    title: LOCAL_HEIMDALL[locale],
    feed_url: `https://hn.cho.sh/rss/story/${locale}.xml`,
    site_url: 'https://hn.cho.sh',
    image_url: 'https://hn.cho.sh/img/android-chrome-512x512.png',
    language: locale,
    pubDate: new Date().toISOString().split('T')[0],
    ttl: '60',
  })

  for (const day of Object.keys(storyHistory)) {
    const stories = storyHistory[day]
    for (const story of stories) {
      rss.item({
        title: story.title,
        guid: new Date(day.replace(/-/g, '/').replace(/T.+/, '')).toISOString() + story.title,
        description: parse(story.originSummary.join('\n ').replaceAll(/[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, '')),
        url: (story.originLink ?? story.commentLink).replaceAll('@TrackLink', ''),
        date: new Date(day.replace(/-/g, '/').replace(/T.+/, '')),
      })
    }
  }
  const path = `./static/rss/story/${locale}.xml`
  if (!fs.existsSync(path)) {
    fs.mkdirSync(`./static/rss`, { recursive: true })
  }
  fs.writeFileSync(path, rss.xml({ indent: true }))
}

export const writeNewsletterRss = async (storyHistory: { [key: string]: Story[] }, locale: string) => {
  const rss = new RSS({
    title: LOCAL_HEIMDALL[locale],
    feed_url: `https://hn.cho.sh/rss/newsletter/${locale}.xml`,
    site_url: 'https://hn.cho.sh',
    image_url: 'https://hn.cho.sh/img/android-chrome-512x512.png',
    copyright: '2023 Sunghyun Cho',
    language: locale,
    pubDate: new Date().toISOString().split('T')[0],
    ttl: '60',
  })

  for (const day of Object.keys(storyHistory)) {
    const stories = storyHistory[day]
    const link = `https://hn.cho.sh${locale !== 'en' ? '/' + locale : ''}/${day.replaceAll('-', '/')}`
    rss.item({
      title: new Date(day.replace(/-/g, '/').replace(/T.+/, '')).toISOString().split('T')[0],
      guid: new Date(day.replace(/-/g, '/').replace(/T.+/, '')).toISOString(),
      url: link.replaceAll('@TrackLink', '').replaceAll('-', '/'),
      description: parse(
        createHnContent(locale, stories, false, new Date(day.replace(/-/g, '/').replace(/T.+/, '')))
          .replaceAll(/[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, '')
          .replaceAll('@TrackLink', '')
      ),
      date: new Date(day.replace(/-/g, '/').replace(/T.+/, '')),
    })
  }

  const path = `./static/rss/newsletter/${locale}.xml`
  if (!fs.existsSync(path)) {
    fs.mkdirSync(`./static/rss/newsletter`, { recursive: true })
  }

  fs.writeFileSync(path, rss.xml({ indent: true }))
}

export const writeAllRss = async () => {
  const localeStoryHistory: { [key: string]: { [key: string]: Story[] } } = {}
  const DAY_TO_GO_BACK = 10

  const today = new Date()

  for (let i = 0; i < DAY_TO_GO_BACK; i++) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000)
    const dateString = date.toISOString().split('T')[0]
    LinguineList.forEach((locale) => {
      const path = `./records/${dateString}/${dateString}.${locale}.json`
      if (!fs.existsSync(path)) {
        return
      }
      const json = JSON.parse(fs.readFileSync(path, 'utf-8'))
      if (!localeStoryHistory[locale]) {
        localeStoryHistory[locale] = {}
      }
      localeStoryHistory[locale][dateString] = json
    })
  }

  for (const locale in localeStoryHistory) {
    await writeStoryRss(localeStoryHistory[locale], locale)
  }
  for (const locale in localeStoryHistory) {
    await writeNewsletterRss(localeStoryHistory[locale], locale)
  }
}
