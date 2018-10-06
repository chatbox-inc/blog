const defaultMeta = {
  description: "Laravel や Vue.js / Nuxt.js など PHP/フロントエンドを中心にWeb開発や、技術顧問を行う株式会社chatboxのWeb制作レポート。",
  title: "トップ" ,
  host: "https://note.chatbox-inc.com",
  image: "/img/brand_image.jpg"
}

export default (args) => {
  const {title,description,host,image} = {...defaultMeta,...args}
  return [
    { hid: 'DESC', name: 'description', content: description },
    { hid: 'OG:TITLE', property: 'og:title', content: title },
    { hid: 'OG:IMAGE', property: 'og:image', content: `${host}${image}` },
    { hid: 'OG:DESC', property: 'og:description', content: description},
    { hid: 'TW:CARD', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'TW:SITE', name: 'twitter:site', content: '@chatbox_inc' },
    { hid: 'TW:CREATOR', name: 'twitter:creator', content: '@chatbox_inc' },
    { hid: 'TW:TITLE', name: 'twitter:title', content: title },
    { hid: 'TW:DESC', name: 'twitter:description', content: description },
    { hid: 'TW:IMAGE', name: 'twitter:image', content: `${host}${image}` },
  ]

}
