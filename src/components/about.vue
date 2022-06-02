<template>

    <section class="about" id="about">

        <div class= "about-body">
        
            <div class="about-body-container">

                <div class="about-body-title-core">
                    <h1 class="about-body-content outer" id="about-title">{{this.part}}</h1>
                    <!-- v-bind:style="{fontFamily: this.font}" -->
                </div>
                <div class="about-body-text-core">
                    <p class="about-body-content" id="about-text">{{this.description}}</p>
                </div>
            </div>

        </div>
        
    </section>

</template>

<script>
export default 
{
    name: 'AboutComponent',
    props: ['position'],
    data() 
    {
        return {
            // aboutWords : ['test', '121455'],
            // glitchWords : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
            // i: 0,
            // offset: 0,
            // len: 0,
            // forwards : true,
            // skip_count : 0,
            // skip_delay : 15,
            // speed : 10,
            // activate: false,
            // font: 'Alien',
            chars : "!<>-_\\/[]{}—=+*^?#________",
            part: "",
            positionGlitch: 0,
            queue: [],
            counter : 0,
            phrases : ['tentative de transmission'],
            description: "",
            queue1: [],
            counter1 : 0,
            phrases1 : ['bonjour humain de la terre, nous venons en paix', 'nous avons besoin de votre aider', "vous devez sauver notre race !"],
        }
    },

    watch: 
    {
        position(newPosition) 
        {
            if(newPosition == "about")
            {
                // this.wordflick()

                const transmissionTitle = () => 
                {
                    this.setTitle(this.phrases[this.counter]).then(() => 
                    {
                        transmissionDescription()
                    })
                    this.counter = (this.counter + 1) % this.phrases.length
                }
                
                const transmissionDescription = () => 
                {
                    this.setDescription(this.phrases1[this.counter1]).then(() => 
                    {
                        setTimeout(transmissionDescription, 800)
                    })
                    this.counter1 = (this.counter1 + 1) % this.phrases1.length
                }

                transmissionTitle()
                
                
            }
        }
    },
    
    methods: 
    {

        //animation écriture text
        wordflick() 
        {
            this.activate = true
            this.len = this.aboutWords.length
            
            setInterval(() => 
            {
                if(this.forwards) 
                {
                    if (this.offset >= this.aboutWords[this.i].length) 
                    {
                        this.skip_count += 1;
                        if (this.skip_count == this.skip_delay) 
                        {
                            this.forwards = false;
                            this.skip_count = 0;
                        }
                    }
                }
                else 
                {
                    if (this.offset == 0) 
                    {
                        this.forwards = true;
                        this.i += 1;
                        this.offset = 0;
                        if (this.i >= this.len) this.i = 0;
                    }
                }
                

                if(this.positionGlitch == 0) this.part = this.aboutWords[this.i].substr(0, this.offset)
                else
                {
                    let part = this.part.split('')
                    if(this.positionGlitch == 1) 
                    {
                       part.push(this.glitchWords[this.positionGlitch])
                       this.part = part.join('')
                    }
                    else if(this.positionGlitch <= this.glitchWords.length)
                    {
                        this.part = part.splice(-1).join('')
                        part = part.splice(-1)
                        part.push(this.glitchWords[this.positionGlitch])
                        this.part = part.join('')
                    }else
                    {
                        this.part = this.part.split('').splice(-1).join('')
                        this.positionGlitch == 0
                    }
                }
                this.positionGlitch += 1

                if (this.skip_count == 0) 
                {
                    if (this.forwards) this.offset += 1;
                    else this.offset -= 1;
                }

            },this.speed);
        },




        setTitle(newText) 
        {
            const oldText = this.part
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
            this.part = output
            if (complete === this.queue.length) {
            this.resolve()
            } else {
            this.frameRequest = requestAnimationFrame(this.updateTitle)
            this.frame++
            }
        },




        setDescription(newText) 
        {
            const oldText = this.description
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue1 = []
            for (let i = 0; i < length; i++)
            {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue1.push({ from, to, start, end })
            }

            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.updateDescription()
            return promise
        },

        updateDescription() 
        {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue1.length; i < n; i++) 
            {
                let { from, to, start, end, char } = this.queue1[i]
                if (this.frame >= end) 
                {
                    complete++
                    output += to
                }else if (this.frame >= start) 
                {
                    if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue1[i].char = char
                    }
                    output += char
                } else 
                {
                    output += from
                }
            }
            this.description = output
            if (complete === this.queue1.length) {
            this.resolve()
            } else {
            this.frameRequest = requestAnimationFrame(this.updateDescription)
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
    @import '../assets/styles/global/web/about.css';
</style>
