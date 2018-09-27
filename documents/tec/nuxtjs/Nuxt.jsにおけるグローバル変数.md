

## 

```
window.onNuxtReady(()=>{

})
```

Nuxt のセットアップが完了したタイミングでコールされる

各種 page は mounted まで完了したタイミング


```
window.$nuxt
```

各種 Nuxt コンポーネントの変数が取得できるが、Nuxt 初期化前には、変数自体が存在しないので注意

## mounted のタイミング

page -> layout の順でコールされる


