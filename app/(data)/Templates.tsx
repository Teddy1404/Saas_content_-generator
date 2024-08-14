/* eslint-disable import/no-anonymous-default-export */
export default [
    {
        name:'Blog title',
        desc:"Blog title depends on your blog information",
        category:"Blog",
        icon:'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt:'Give me 5 blog topic idea in a bullet wise only based on given niche and its outlint basically outline about the topic  and give me result in Rich text editor format. ',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
                
            },
            {
                label:'Enter your blog outline',
                field:'textarea',
                name:'outline',
                required:true
            }

        ]
    }
]