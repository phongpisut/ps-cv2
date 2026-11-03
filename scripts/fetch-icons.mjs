// Run on your machine: npm run icons
// Looks up each app in the public iTunes Search API and saves its icon to public/icons/<id>.png
import { writeFile } from 'node:fs/promises'
const apps = {
  innovestx: 'InnovestX',
  tidjai: 'Tidjai',
  tcrb: 'TCRB Alpha',
  fin: 'FIN Insurance',
}
for (const [id, term] of Object.entries(apps)) {
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&country=th&entity=software&limit=1`
    const hit = (await (await fetch(url)).json()).results?.[0]
    if (!hit) { console.log('no result', term); continue }
    const img = await fetch(hit.artworkUrl512)
    await writeFile(`public/icons/${id}.png`, Buffer.from(await img.arrayBuffer()))
    console.log('saved', id, '←', hit.trackName, '/', hit.sellerName, '(check this is the right app!)')
  } catch (e) { console.log('failed', term, e.message) }
}
