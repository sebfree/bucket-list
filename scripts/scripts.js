
// 1- it takes input from a form an appends it to the dom
// 2- there are 3 sections where the information can go on the page, it has to go to the correct one. So the example is, you’re going camping and everyone brings an item. 
// 3- we create an object inside of an array that prepoluates the buckets as well
// 4- proper error handling, so if Jeff is already bringing a knife, we tell him to bring something else 
// 5 - style everything. So form, 3 sections.


const bucketList = {};
let array = [{   
        name : "Blob",
        item : "knife",
        group : 1,
    },
    {
        name : "tony",
        item : "gun",
        group : 1,
    },
    {

        name : "jason",
        item : "lamp",
        group : 3,
    },
    {

        name : "batman",
        item : "shady stuff",
        group : 3,
    },
    {
        name : "harold",
        item : "watch",
        group : 2
    
    }]

    bucketList.loaded = function (){
        for (let i = 0; i < array.length; i++) {
            if (array[i].group === 1) {
                $(".bucket-1").append(`<p>${array[i].name} is bringing a ${array[i].item}</p>`);
            } else if (array[i].group === 2)   {
                $(".bucket-2").append(`<p>${array[i].name} is bringing a ${array[i].item}</p>`);
            } else {
                $(".bucket-3").append(`<p>${array[i].name} is bringing a ${array[i].item}</p>`);
            }

        }

       

    }

    // let groupOne = 1;
    // let groupTwo = 2;
    // let groupThree = 3;


    
    bucketList.loadInput = function () {
        $("form").on("submit", function (event) {
            event.preventDefault();
            const userName = $(`input[name=name]:checked`).val();
            const userItem = $(`input[name=item]:checked`).val();
            const userGroup = $(`input[name=group]:checked`).val();
            
            if (userGroup === "one") {
                $(".bucket-1").append(`<p>${userName} is bringing a ${userItem}</p>`);
            } else if (userGroup === "two") {
                $(".bucket-2").append(`<p>${userName} is bringing a ${userItem}</p>`);
            } else {
                $(".bucket-3").append(`<p>${userName} is bringing a ${userItem}</p>`);
            }
            console.log(userName)
        })

       

    }


    $(function(){
        bucketList.loaded();
        bucketList.loadInput();
    });
         
    