function count()
{
    let results=document.querySelector(".result")
    let para=document.getElementById("sentence")
    let words=para.value.split(" ")
    let num=words.length
    results.innerHTML=`${num} words`
}