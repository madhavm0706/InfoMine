
 $(document).ready(function() { 
   
    $("#articles1").hide(); 
    $("#parent").hide(); 
});

const articledata = [
  
{
  id:0,
  name: "Madhav Maheshwari",
  published_by: "Madhav Maheshwari",
  Published_0n: "15 May,2020",
  photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
  pdf: "./pdfdata/Untitled 1.pdf"
},

{
    id:1,
    name: "Amendment to the Indian Constitution",
    published_by: "Rishabh Mittal",
    Published_0n: "05 May,2020",
    photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
    pdf: "./pdfdata/7.Amending_the_Constitution.pdf"
  },
  {
    id:2,
    name: "Re-availing the Input Tax Credit under GST",
    published_by: "Shikar Garg",
    Published_0n: "04 May,2020",
    photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
    pdf: "./pdfdata/reportforE-bike.pdf"
  },
  {
    id:3,
    name: "Re-availing the Input Tax Credit under GST",
    published_by: "Shikar Garg",
    Published_0n: "04 May,2020",
    photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
    pdf: "./pdfdata/7.Amending_the_Constitution.pdf"
  },
  {
    id:4,
    name: "Re-availing the Input Tax Credit under GST",
    published_by: "Shikar Garg",
    Published_0n: "04 May,2020",
    photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
    pdf: "./pdfdata/7.Amending_the_Constitution.pdf"
  },
  {
    id:5,
    name: "Re-availing the Input Tax Credit under GST",
    published_by: "Shikar Garg",
    Published_0n: "04 May,2020",
    photo: "./images/WhatsApp Image 2020-05-11 at 12.41.04 AM.jpeg",
    pdf: "./pdfdata/7.Amending_the_Constitution.pdf"
  }
  
];



for(i=0; i<articledata.length; i++){
     var row= $('<div class="latest_style_1">  <div class="latest_style_1_item"> <span class="item-count vertical-align">'+articledata[i].id+'</span><div class="alith_post_title_small"><a style="color:black;" class="button1" data-id="'+ articledata[i].id+'" >'+articledata[i].name+'</a> <p class="meta"><span>'+articledata[i].Published_0n+'</span> <span>268 views</span></p></div>                                                  <figure class="alith_news_img"><a ><img src="assets/images/thumb-square-1.png" alt=""/></a></figure></div>');
     $("#articles").append(row);
};















      




// pdf display.....

$(".button1").click(function() {


// Get data id
var id = $(this).data("id");
// show text for json id

console.log(id);

$("section").hide();
$("#articles1").show();
document.getElementById("articles1").innerHTML = `



  



<div>
<object data="${articledata[id].pdf}" type="application/pdf" width="100%" height="600px">
<p>Refresh the Website to get PDF or PDF has been deleted from the Website</p>
</object>
<div style="width:100%;height:40px;background-color:rgb(0,0,0);" class="container">
<p style="color:white; font-weight:bold;">Click on the button to see pdf on full screen mode &nbsp;<a href="${articledata[id].pdf}"><i style="color:white" class="fa fa-arrows-alt" aria-hidden="true"></i></a></p>     
</div>
<div>
<hr color="black">
<h3>${articledata[id].name}</h3> 
<p>By-${articledata[id].published_by} </p>
<p>Date: ${articledata[id].Published_0n}</p><hr color="black"></div>
</div>



`;

});




// pdf display end.............



















  
      
  
  
  








