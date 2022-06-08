<template>

  <section class="home" id="home" ref="home">

    <div class= "home-content">

      <div class="home-content-aliens-words" id="words-content-1"><p class="p-aliens" id="words-1">{{this.part}}</p></div>
      <div class="home-content-aliens-words words-margin-right" id="words-content-2"><p class="p-aliens" id="words-2">{{this.part}}</p></div>
      
      <div class="home-content-circle" v-if="getCurrentAccount != ''">

        <video class="home-content-video" autoplay muted loop :key="reload">
          <source src="../assets/background/web/crystal1.mp4" type="video/mp4" v-if="getHintFound == 0">
          <source src="../assets/background/web/crystal2.mp4" type="video/mp4" v-else-if="getHintFound == 1">
          <source src="../assets/background/web/crystal3.mp4" type="video/mp4" v-else-if="getHintFound == 2">
          <source src="../assets/background/web/crystal4.mp4" type="video/mp4" v-else-if="getHintFound == 3">
          <source src="../assets/background/web/crystal5.mp4" type="video/mp4" v-else-if="getHintFound == 4">
          <source src="../assets/background/web/crystal6.mp4" type="video/mp4" v-else-if="getHintFound == 5">
          <source src="../assets/background/web/crystal7.mp4" type="video/mp4" v-else-if="getHintFound == 6">
        </video>
        
        <div class="home-content-form">
          <input type="text" class="home-content-input" v-model="hintInput" placeholder="insert hint here"/>
          <button value="Submit" class="home-content-validation" @click="submitHint">submit</button>
        </div>

      </div>
      
      <div class="home-content-aliens-words" id="words-content-1"><p class="p-aliens" id="words-3">{{this.part}}</p></div>
      <div class="home-content-aliens-words" id="words-content-2"><p class="p-aliens" id="words-4">{{this.part}}</p></div>
      
    </div>
  </section>

</template>

<script>
  import HintRequest from '/helpers/hintRequest.helper.js'

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
            myData: "",
            hintInput: "",
            reload: 0,
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

    computed: 
    {
      getHintFound() { return this.$store.state.currentHint.length},
      getCurrentAccount() { return this.$store.state.account }
    },

    methods: 
    {

      async submitHint() 
      {
        
        const hintRequest = new HintRequest()
        let requestResult = await hintRequest.getNextHint("aliens-piste", this.$store.state.token, this.hintInput, this.$store.state.currentHint)
        if(!requestResult.state && !requestResult.found) window.alert(requestResult.message)
        else if(!requestResult.found) window.alert(requestResult.message)
        else if(requestResult.found && requestResult.state)
        {
          let ref = ["indice1", "roadmap", "indice3", "indice4", "indice5"]
          this.$store.commit('setHintFound', this.hintInput)

          const length = this.$store.state.currentHint.length
          await this.reload++

          const sections = document.querySelectorAll("section");
          for(const section of sections)
          {
            if(section.classList.value == ref[length - 1]) 
            {
              window.scrollTo(0, section.offsetTop)
            }
          }

        }
      },

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
