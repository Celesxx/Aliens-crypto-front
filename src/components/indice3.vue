<template>

    <section class="indice3" id="indice3">

        <div class= "indice-body">
        
            <div class="indice-body-container">

                <div class="indice-body-title-core">
                    <h1 class="indice-body-content outer" id="indice-title">{{this.part}}</h1>
                </div>
                <div class="indice-body-text-core">
                    <p class="indice-body-content" id="indice-text">{{this.description}}</p>
                </div>
            </div>

        </div>
        
    </section>

</template>

<script>
export default 
{
    name: 'Indice3Component',
    props: ['position'],
    data() 
    {
        return {
            chars : "!<>-_\\/[]{}—=+*^?#________",
            part: "",
            positionGlitch: 0,
            queue: [],
            counter : 0,
            phrases : ['tentative de transmission'],
            description: "",
            queue1: [],
            counter1 : 0,
            phrases1 : ['nous avons du mal à communiquer avec vous', 'vous devez rétablir les transmissions', 'pour cela décrypter nos prochaines transmission via le réseau twitter', 'cependant faites attentions ils pourraient tenter de vous en empêcher'],
        }
    },

    watch: 
    {
        position(newPosition) 
        {
            if(newPosition == "indice3")
            {

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
                        setTimeout(transmissionDescription, 2000)
                    })
                    this.counter1 = (this.counter1 + 1) % this.phrases1.length
                }

                transmissionTitle()
                
                
            }
        }
    },
    
    methods: 
    {
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
    @import '../assets/styles/global/web/indice.css';
</style>
