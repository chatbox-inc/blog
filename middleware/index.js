export default function (ctx) {
  console.log(Object.keys(ctx))
  ctx.store.dispatch("posts/nuxtServerInit",{})
  console.log("hgoehogehogehohgeoeghogehoheogheohgeo")
}
