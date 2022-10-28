function get_shortest_word (text){
    
    text.split(' ').forEach((w)=>{
        console.log(w.length)
    })
    
};
    

const input='Litwo ojczyzno moja ty jesteś jak zdrowie, ile cię trzeba cenić ten tylko się dowie, kto cię stracił'

get_shortest_word(input)