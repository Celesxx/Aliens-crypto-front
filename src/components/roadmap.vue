<template>

    <section class="roadmap" id="roadmap">

        <div class= "roadmap-body">
        
          <div class="roadmap-body-content">

            <h1>{{this.part[0]}}</h1>
            <div class="roadmap-body-core">
                <div class="roadmap-body-core-word road-p1"> 

                  <div class="roadmap-body-word border-left">
                    <h1 class="title-word-roadmap">{{this.part[1]}}</h1>
                    <p id="road-p1">{{this.part[2]}}</p> 
                  </div>

                </div>
                <div class="roadmap-body-core-word road-p2"> 

                  <div class="roadmap-body-word border-right">
                    <h1 class="title-word-roadmap">{{this.part[3]}}</h1>
                    <p id="road-p2">{{this.part[4]}}</p> </div>
                  </div>

                <div class="roadmap-body-core-word road-p3">
                  
                  <div class="roadmap-body-word border-left">
                    <h1 class="title-word-roadmap">{{this.part[5]}}</h1>
                    <p id="road-p3">{{this.part[6]}}</p> </div>
                  </div>

                <div class="roadmap-body-core-word road-p4">
                  
                  <div class="roadmap-body-word border-right">
                    <h1 class="title-word-roadmap">{{this.part[7]}}</h1>
                    <p id="road-p4">{{this.part[8]}}</p> </div>
                  </div>

                <div class="roadmap-body-core-word road-p5"> 
                  
                  <div class="roadmap-body-word border-left">
                    <h1 class="title-word-roadmap">{{this.part[9]}}</h1>
                    <p id="road-p5">{{this.part[10]}}</p> </div>
                  </div>

                <div class="roadmap-body-core-word road-p6">  

                  <div class="roadmap-body-word border-right">
                    <h1 class="title-word-roadmap">{{this.part[11]}}</h1>
                    <p id="road-p6">{{this.part[12]}}</p> </div>
                  </div>
                  
            </div>
            
            <!-- <div class="roadmap-body-svg">
              <svg class="roadmap-svg" width="270" height="542" viewBox="0 0 539 1085" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M214.88 2L406.401 193.592M406.401 193.592L214.88 385.183M406.401 193.592L511.09 298.319V104.626M214.88 385.183V680.451M214.88 385.183L128.047 298.319L2 424.412M214.88 680.451L390.995 856.631M214.88 680.451L367.187 528.089L481.329 642.273L537 586.582M390.995 856.631V1085M390.995 856.631L276.853 970.816L214.88 908.82" stroke="white" stroke-width="4"/>
              </svg>
            </div> -->

          </div>

        </div>
        
    </section>

</template>

<script>
  export default 
  {
    name: 'RoadmapComponent',
    props: ['position'],
    data() 
    {
      return {
        chars : "!<>_\\/[]{}—=+*^?#________",
        part: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
        positionGlitch: 0,
        queue: [],
        counter : 0,
        phrases : 
        [
          'Roadmap',
          'Q1 : 06-06-2022', 'tentative de transmission', 
          'Q2 : 08-06-2022', 'transmission établie', 
          'Q3 : 12-06-2022', 'transmission d\'un \n channel sécurisé', 
          'Q4 : 16-06-2022', 'première rencontre',
          'Q5 : 18-06-2022', 'vente fermé des \n technologies', 
          'Q6 : 20-06-2022', 'vente ouverte des \n technologies'
        ],
      }
    },

    watch: 
    {
        position(newPosition) 
        {
            if(newPosition == "roadmap")
            {
                const transmissionTitle = async () => 
                {
                  await this.setTitle(this.phrases[this.counter]).then(() => 
                  {
                    setTimeout(transmissionTitle, 800)
                  })
                  this.counter = (this.counter + 1) % this.phrases.length
                }

                transmissionTitle()
            }
        }
    },
    
    methods: 
    {
      setTitle(newText) 
      {
          const oldText = this.part[this.counter]
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
          this.updateTitle()
          return promise
      },

      updateTitle() 
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
          this.part[this.counter] = output
          if (complete === this.queue.length) this.resolve()
          else 
          {
            this.frameRequest = requestAnimationFrame(this.updateTitle)
            this.frame++
          }
      },

      randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)] },


    }
  }
</script>

<style scoped>
    @import '../assets/styles/global/web/roadmap.css';
</style>
