
function ScoreCalc(user1, user2){
    var c1=0;
    var c2=0;
    var x="https://api.github.com/users/"+user1;
    var y="https://api.github.com/users/"+user2;
    var names = document.getElementById("names");
    var norepou2;
    var norepou1;
    var blog1;
    var blog2;
    var followers1;
    var followers2;
    var following1;
    var following2;
    var company1;
    var company2;
    
    $.getJSON("https://api.github.com/users/"+user1)
    .done(function(data){
        norepou1 = Object(data.public_repos);
        blog1 = Object(data.blog);
        followers1 = Object(data.followers);
        following1 = Object(data.following);
        var difffof = followers1-following1;
        company1 = Object(data.company)
        
        console.log(norepou1);
        
    });
    $.getJSON("https://api.github.com/users/"+user2)
    .done(function(data){
        norepou2 = Object(data.public_repos);
        blog2 = Object(data.blog);
        followers2 = Object(data.followers);
        following2 = Object(data.following);
        var difffof = followers2-following2;
        company2 = Object(data.company)
        console.log(norepou2);
        
        
        if(norepou1==norepou2){
            c1+=1
            c2+=1
            console.log("diveshhh");
        }
        else if(norepou1>norepou2){
            c1+=1
            console.log("divesh");
        }
        else if(norepou2>norepou1){
            c2+=1
            console.log("diveshh");
        }


        console.log(c2)
        
        
    });
    
    
    
//    console.log(norepou1);
    
//    blog(user1,user2,c1,c2);
//    if(c1>c2){
//        var data = user1 + "Won by" + c1-c2 + "Points";
//        return data
//    }
//    if(c1>c2){
//        var data = user1 + "Won by" + c1-c2 + "Points";
//        return data
//    }
//    if(c1>c2){
//        var data = user1 + "Won by" + c1-c2 + "Points";
//        return data
//    }
    
    
    
}
function blog(user1,user2,c1,c2){
    
    $.getJSON("https://api.github.com/users/"+user1)
    .done(function(data){
        
        console.log(blog1);
    });
    $.getJSON("https://api.github.com/users/"+user2)
    .done(function(data){
        
        console.log(blog2);
    });
    
}
function followers(){
    
}
function stargazzers(){
    
}
function languages(){
    
}
function forks(){
    
}
function repoWithoutForks(){
    
}
function company(){
    
}
function licence(){
    
}
function main(user1,user2){
    ScoreCalc(user1,user2);
    
}
function getUser(){
    
    var user1=document.getElementById("user1").value;
    var user2=document.getElementById("user2").value;
    
    main(user1,user2);
    
    
    
    
}