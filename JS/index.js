
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
    var difffof1;
    var difffof2;
    var scoreUnScratched
    
    $.getJSON("https://api.github.com/users/"+user1)
    .done(function(data){
        norepou1 = Object(data.public_repos);
        blog1 = Object(data.blog);
        followers1 = Object(data.followers);
        following1 = Object(data.following);
        difffof1 = followers1-following1;
        company1 = Object(data.company)
        
//        console.log(norepou1);
        
    });
    $.getJSON("https://api.github.com/users/"+user2)
    .done(function(data){
        norepou2 = Object(data.public_repos);
        blog2 = Object(data.blog);
        followers2 = Object(data.followers);
        following2 = Object(data.following);
        difffof2 = followers2-following2;
        company2 = Object(data.company)
        
        
        
        scoreUnScratched = scoreUnScratched(norepou1,norepou2,blog1,blog2,difffof1,difffof2,company1,company2);
//        console.log(norepou2);
        
        
        if(norepou1==norepou2){
            c1+=1
            c2+=1
//            console.log("diveshhh");
        }
        else if(norepou1>norepou2){
            c1+=1
//            console.log("divesh");
        }
        else if(norepou2>norepou1){
            c2+=1
//            console.log("diveshh");
        }


//        console.log(c2)
        
        
    });
    var scoreScratched = repoScratch(user1,user2,c1,c2);
    
    c1 = scoreScratched[0]+scoreUnScratched[0];
    c2 = scoreScratched[1]+scoreUnScratched[1];
    
    
    
    
    
}
function repoScratch(user1,user2,c1,c2){
    var stars1;
    var stars2;
    var watches1;
    var watches2;
    var forks1;
    var forks2;
    var repoforks1;
    var repoforks2;
    var license1;
    var license2;
    var languages1;
    var languages2;
    
    $.getJSON("https://api.github.com/users/"+user1+"/repos")
    .done(function(data){
        
        stars1 = stargazzers(data);
        watches1 = watches(data);
        forks1 = forks(data);
        repoforks1 = repoWithoutForks(data);
        languages1 = languages(data);
        license1 = licence(data);
        
    });
    $.getJSON("https://api.github.com/users/"+user2+"/repos")
    .done(function(data){
        
//        console.log(data);
        stars2 = stargazzers(data);
        watches2 = watches(data);
        forks2 = forks(data);
        repoforks2 = repoWithoutForks(data);
        languages2 = languages(data);
        license2 = licence(data);
//        console.log(watches1);
        var score = repoScratchScoreCalc(stars1,stars2,watches1,watches2,forks1,forks2,repoforks1,repoforks2,languages1,languages2,license1,license2);
    });
    
    return score;
    
    
}

function stargazzers(data){
    var i;
    var stars = 0;
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        if(!datastream[i].fork){
            stars+=(datastream[i].stargazers_count)
        }
        
    }
    return stars
}
function languages(data){
    var i;
    var languages = 0;
    var l = ["languages"];
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        var c=1
        var j;
        if(!datastream[i].fork){
            language = datastream[i].language;
            for(j=0;j<l.length;j++){
                if(l[j]==language || language==null){
                    c=0
                    break
                }
            }
            if(c==1){
                
                languages+=1;
                l.push(language)
            }
            
        }
        
    }
    return languages
    
}
function forks(data){
    var i;
    var fork = 0;
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        if(!datastream[i].fork){
            fork+=(datastream[i].forks_count)
        }
        
    }
    return fork
    
}
function repoWithoutForks(data){
    var i;
    var count = 0;
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        if(!datastream[i].fork){
            count+=1
        }
        
    }
//    console.log(count);
    return count
    
}
function licence(data){
    var i;
    var license = 0;
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        if(!datastream[i].fork){
            if(datastream[i].license!=null){
                license+=1
            }
            
        }
        
    }
//    console.log(license);
    return license
    
}
function watches(data){
    var i;
    var watch = 0;
    datastream = Object(data);
    for(i=0;i<datastream.length;i++){
        if(!datastream[i].fork){
            watch+=datastream[i].watchers_count;
            
        }
        
    }
//    console.log(watch);
    return watch
    
}
function main(user1,user2){
    ScoreCalc(user1,user2);
    
}
function getUser(){
    
    var user1=document.getElementById("user1").value;
    var user2=document.getElementById("user2").value;
    
    main(user1,user2);
    
    
    
    
}