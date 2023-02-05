const buttonClick=document.getElementById("buttonid").addEventListener("click",()=>{
    console.log("click");
    const textValue=document.getElementById("text").value;
    const mainCointainer=document.getElementById("maincontainer");

    const paragragh=document.createElement("p");
    const h1=document.createElement("h2");
    const section=document.createElement("section");
    section.innerHTML=`
    <h2>Comment</h2>
    <p>Rahul Rudra</p>
    `
mainCointainer.appendChild(section);

})