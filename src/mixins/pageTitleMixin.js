export default {
  mounted: function() {
    // const els = this.$refs.randomColor
    // for(let el in els) {
    //   els[el].style.color = `#${Math.random().toString().slice(2, 8)}`
    // }
    const texts = this.$refs.addColor
    for(let text in texts) {
      const r = Math.floor(Math.random() * (255 - 0) + 0)
      const g = Math.floor(Math.random() * (255 - 0) + 0)
      const b = Math.floor(Math.random() * (255 - 0) + 0)
      texts[text].style.color = `rgba(${ r }, ${ g }, ${ b }, 1)`
    }
  }
}
