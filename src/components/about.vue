<template>

    <section class="about" id="about">

        <div class= "about-body">
        
            <div class="about-body-container">

                <div class="about-body-title-core">
                    <h1 class="about-body-content" id="about-title" >{{this.position}}</h1>
                </div>
                <div class="about-body-text-core">
                    <p class="about-body-content" id="about-text">Les aliens arrivent sur terre pour hagar un mec qui les a anarqué, cet homme c'est dan le gros tchou tchou </p>
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
            aboutWords : ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
            i: 0,
            offset: 0,
            len: 0,
            forwards : true,
            skip_count : 0,
            skip_delay : 15,
            speed : 70,
            part: "",
        }
    },


    created () 
    {
        if(this.position == "about")
        {
            console.log("test")
        }
    },
    
    methods: 
    {
        wordflick() 
        {
            this.len = this.aboutWords.length
            setInterval(function() 
            {
                if (this.forwards) 
                {
                    if (this.offset >= this.words[i].length) 
                    {
                        ++this.skip_count;
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
                        this.i++;
                        this.offset = 0;
                        if (this.i >= this.len) i = 0;
                    }
                }

                this.part = this.words[i].substr(0, this.offset);

                if (this.skip_count == 0) 
                {
                if (this.forwards) {
                    this.offset++;
                }
                else {
                    this.offset--;
                }
                }

            },this.speed);
        }
    }
}
</script>

<style scoped>
    @import '../assets/styles/global/web/about.css';
</style>
