<template>

  <section class="home" id="home">

    <div class= "home-content">

      <div class="home-content-aliens-words" id="words-content-1"><p class="p-aliens" id="words-1">{{this.part}}</p></div>
      <div class="home-content-aliens-words words-margin-right" id="words-content-2"><p class="p-aliens" id="words-2">{{this.part}}</p></div>
      
      <div class="home-content-circle">
        <video class="home-content-video" autoplay muted loop>
          <source src="../assets/background/web/crystal7.mp4" type="video/mp4">
        </video>

      </div>
      
      <div class="home-content-aliens-words" id="words-content-1"><p class="p-aliens" id="words-3">{{this.part}}</p></div>
      <div class="home-content-aliens-words" id="words-content-2"><p class="p-aliens" id="words-4">{{this.part}}</p></div>
      
    </div>
  </section>

</template>

<script>
  export default 
  {
    name: 'HomeComponent',
    props: ['position'],
    data() 
    {
        return {
            part: "",
            queue: [],
            chars : "!<>-_\\/[]{}—=+*^?#________",
            counter : 0,
            phrases : ['tentative,','connexion','echec critique', 'technologie', 'primitive'],
        }
    },
    
    created () 
    {
      const next = () => 
      {
          this.setText(this.phrases[this.counter], this.part).then(() => 
          {
              setTimeout(next, 800)
          })
          this.counter = (this.counter + 1) % this.phrases.length
      }
      next()
    },

    methods: 
    {
        setText(newText, oldText) 
        {
            // const oldText = oldText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++)
            {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue.push({ from, to, start, end })
            }

            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        },

        update() 
        {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) 
            {
                let { from, to, start, end, char } = this.queue[i]
                if (this.frame >= end) 
                {
                    complete++
                    output += to
                }else if (this.frame >= start) 
                {
                    if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                    }
                    output += char
                } else 
                {
                    output += from
                }
            }
            this.part = output
            if (complete === this.queue.length) {
            this.resolve()
            } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
            }
        },

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        },



        
    }
  }
</script>

<style scoped>
    @import '../assets/styles/global/web/home.css';
    @import '../assets/styles/global/mobile/home.css';
</style>
