const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"; 

const request = require('request')
const cheerio = require('cheerio')

request(url , cb)


function cb(error , response , html){
       if(error){
              console.log(error)
       }
       else{
              extractLink(html)
       }
}


function extractLink(html){
   let $ = cheerio.load(html)

   let anchorElem = $('a[data-hover="View All Results"]')

   let link = anchorElem.attr('href')


   let fullLink = 'https://www.espncricinfo.com'+link

   console.log(fullLink)


   getAllMatchLink(fullLink)

}

function getAllMatchLink(uri){
       request(uri , function(error , response , html){
              if(error){
                     console.log(error)
              }
              else{
                     extractAllMatchLink(html)
              } 
       })

 
}


function extractAllMatchLink(html){
     let $ = cheerio.load(html)


     let scoreCardElemArr = $('a[data-hover="Scorecard"]')

     for(let i=0 ; i<scoreCardElemArr.length ; i++){
            let ScoreCardlink = $(scoreCardElemArr[i]).attr('href')

            let fullLink = 'https://www.espncricinfo.com'+ScoreCardlink

            console.log(fullLink)


     }


}





