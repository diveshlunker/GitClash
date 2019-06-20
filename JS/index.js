function scoreUnScratched(norepou1,norepou2,blog1,blog2,difffof1,difffof2,company1,company2)
{
    var c1=0;
    var c2=0;
    var l=["values"] ;
    
    if(norepou1==norepou2){
            c1+=0.5;
            c2+=0.5;
//        console.log(c1);
    }
    else if(norepou1>norepou2){
            c1+=1;
        console.log("norepo");
    }
    else if(norepou2>norepou1){
            c2+=1;
    }
//    console.log(blog1);
    if(blog1!="" && blog2!=""){
        c1+=0.5;
        c2+=0.5;
//        console.log(c1);
    }
    else if(blog2!=""){
        c2+=1;
    }
    else if(blog1!=""){
        c1+=1;
    }
    
    if(difffof1>difffof2){
        c1+=1;
        console.log("diffof");
    }
    else if(difffof1<difffof2){
        c2+=1;
    }
    else if(difffof1==difffof2){
        c1+=0.5;
        c2+=0.5;
    }
    if(company1.length>1){
        c1+=1
    }
    if(company2.length>1){
        c2+=1
    }
    if(company1.length>1 && company2.length>1){
        c1-=0.5;
        c2-=0.5
    }
    
    
    
    l.push(c1);
    l.push(c2);
    
    return l;
}

function repoScratchScoreCalc(stars1,stars2,watches1,watches2,forks1,forks2,repoforks1,repoforks2,languages1,languages2,license1,license2)
{
    
    var l = ["valuesss"];
    var c1=0;
    var c2=0;
    console.log(stars1);
    console.log(stars2);
    if(stars1>stars2){
        c1+=1;
    }
    else if(stars1<stars2){
        c2+=1;
    }
    else if(stars1==stars2){
        c1+=0.5;
        c2+=0.5;
    }
    
    if(watches1>watches2){
        c1+=1;
    }
    else if(watches1<watches2){
        c2+=1;
    }
    else if(watches1==watches2){
        c1+=0.5;
        c2+=0.5;
    }
    
    if(forks1>forks2){
        c1+=1;
    }
    else if(forks1<forks2){
        c2+=1;
    }
    else if(forks1==forks2){
        c1+=0.5;
        c2+=0.5;
    }
    
    if(repoforks1>repoforks2){
        c1+=1;
    }
    else if(repoforks1<repoforks2){
        c2+=1;
    }
    else if(repoforks1==repoforks2){
        c1+=0.5;
        c2+=0.5;
    }
    
    if(languages1>languages2){
        c1+=1;
    }
    else if(languages1<languages2){
        c2+=1;
    }
    else if(languages1==languages2){
        c1+=0.5;
        c2+=0.5;
    }
    
    if(license1>license2){
        c1+=1;
    }
    else if(license1<license2){
        c2+=1;
    }
    else if(license1==license2){
        c1+=0.5;
        c2+=0.5;
    }
    l.push(c1);
    l.push(c2);
    
//    console.log(l);
    return l;
    
}


function ScoreCalc(user1, user2){
    var c1=0;
    var c2=0;
    var x="https://api.github.com/users/"+user1;
    var y="https://api.github.com/users/"+user2;
    
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
    var scoreun;
    var diff1;
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
    var score;
    
    
    
    $.getJSON("https://api.github.com/users/"+user1)
    .done(function(data){
        
        document.getElementById("card1").style.display = "grid";
        
        var names = document.getElementById("names");
        var winners = document.getElementById("winner");
        var name1 = document.getElementById("name1");
        var score1 = document.getElementById("score1");
        var img1 = document.getElementById("user1image");
        var git1 = document.getElementById("git1");
        var git2 = document.getElementById("git2");
        img1.src = Object(data.avatar_url);
        
        norepou1 = Object(data.public_repos);
        blog1 = Object(data.blog);
        followers1 = Object(data.followers);
        following1 = Object(data.following);
        difffof1 = followers1-following1;
        company1 = Object(data.company);
        
        $.getJSON("https://api.github.com/users/"+user2)
        .done(function(data){
            
            var name2 = document.getElementById("name2");
            var score2 = document.getElementById("score2");
            
            document.getElementById("card2").style.display = "grid";

            var img2 = document.getElementById("user2image");
            img2.src = Object(data.avatar_url);
            
        
        
        
            norepou2 = Object(data.public_repos);
            blog2 = Object(data.blog);
            followers2 = Object(data.followers);
            following2 = Object(data.following);
            difffof2 = followers2-following2;
            company2 = Object(data.company);
            
            
            $.getJSON("https://api.github.com/users/"+user1+"/repos")
            .done(function(data){
        
                stars1 = stargazzers(data);
                watches1 = watches(data);
                forks1 = forks(data);
                repoforks1 = repoWithoutForks(data);
                languages1 = languages(data);
                license1 = licence(data);
                
                $.getJSON("https://api.github.com/users/"+user2+"/repos")
                .done(function(data){
            
        

                    stars2 = stargazzers(data);
                    watches2 = watches(data);
                    forks2 = forks(data);
                    repoforks2 = repoWithoutForks(data);
                    languages2 = languages(data);
                    license2 = licence(data);
                    
                    
                    scoreun = scoreUnScratched(norepou1,norepou2,blog1,blog2,difffof1,difffof2,company1,company2);
                    score = repoScratchScoreCalc(stars1,stars2,watches1,watches2,forks1,forks2,repoforks1,repoforks2,languages1,languages2,license1,license2);

                    console.log(scoreun);

                    console.log(score);


                    c1 = score[1]+scoreun[1];
                    c2 = score[2]+scoreun[2];
            //        console.log(c1+c2);
            //        console.log(scoreun);

//                    names.innerHTML = user1+" scores "+c1+" points"+ " against "+user2+" who scores "+c2+" points";
                    name1.innerHTML = user1;
                    name2.innerHTML = user2;
                    score1.innerHTML = "Points scored: "+c1;
                    score2.innerHTML = "Points scored: "+c2;
                    
                    git1.href = "https://github.com/"+user1;
                    git2.href = "https://github.com/"+user2;


                    if(c1>c2){
                        
                        if ( document.getElementById("git1").classList.contains('btn-primary')){
                            document.getElementById("git1").classList.remove('btn-primary');
                        }if ( document.getElementById("git1").classList.contains('btn-success')){
                            document.getElementById("git1").classList.remove('btn-success');
                        }if ( document.getElementById("git1").classList.contains('btn-danger')){
                            document.getElementById("git1").classList.remove('btn-danger');
                        }
                        
                        if ( document.getElementById("git2").classList.contains('btn-primary')){
                            document.getElementById("git2").classList.remove('btn-primary');
                        }if ( document.getElementById("git2").classList.contains('btn-success')){
                            document.getElementById("git2").classList.remove('btn-success');
                        }if ( document.getElementById("git2").classList.contains('btn-danger')){
                            document.getElementById("git2").classList.remove('btn-danger');
                        }
                        
                        document.getElementById("git2").classList.remove('btn-primary');
                        
                        document.getElementById("git1").classList.add('btn-success');
                        document.getElementById("git2").classList.add('btn-danger');
                        
                        diff1 = c1-c2;
                        winners.innerHTML = user1+" wins against "+user2+" by "+diff1+" points.";
                    }

                    else if(c2>c1){
                        
                        
                        if ( document.getElementById("git1").classList.contains('btn-primary')){
                            document.getElementById("git1").classList.remove('btn-primary');
                        }if ( document.getElementById("git1").classList.contains('btn-success')){
                            document.getElementById("git1").classList.remove('btn-success');
                        }if ( document.getElementById("git1").classList.contains('btn-danger')){
                            document.getElementById("git1").classList.remove('btn-danger');
                        }
                        
                        if ( document.getElementById("git2").classList.contains('btn-primary')){
                            document.getElementById("git2").classList.remove('btn-primary');
                        }if ( document.getElementById("git2").classList.contains('btn-success')){
                            document.getElementById("git2").classList.remove('btn-success');
                        }if ( document.getElementById("git2").classList.contains('btn-danger')){
                            document.getElementById("git2").classList.remove('btn-danger');
                        }
                        
                        document.getElementById("git1").classList.remove('btn-primary');
                        document.getElementById("git2").classList.remove('btn-primary');
                        
                        document.getElementById("git2").classList.add('btn-success');
                        document.getElementById("git1").classList.add('btn-danger');
                        
                        diff1=c2-c1;
                        winners.innerHTML = user2+" wins against "+user1+" by "+diff1+" points.";
                    }

                    else if(c2==c1){
                        
                        if ( document.getElementById("git1").classList.contains('btn-primary')){
                            document.getElementById("git1").classList.remove('btn-primary');
                        }if ( document.getElementById("git1").classList.contains('btn-success')){
                            document.getElementById("git1").classList.remove('btn-success');
                        }if ( document.getElementById("git1").classList.contains('btn-danger')){
                            document.getElementById("git1").classList.remove('btn-danger');
                        }
                        
                        if ( document.getElementById("git2").classList.contains('btn-primary')){
                            document.getElementById("git2").classList.remove('btn-primary');
                        }if ( document.getElementById("git2").classList.contains('btn-success')){
                            document.getElementById("git2").classList.remove('btn-success');
                        }if ( document.getElementById("git2").classList.contains('btn-danger')){
                            document.getElementById("git2").classList.remove('btn-danger');
                        }
                        
                        document.getElementById("git1").classList.remove('btn-primary');
                        document.getElementById("git2").classList.remove('btn-primary');
                        
                        document.getElementById("git1").classList.add('btn-success');
                        document.getElementById("git2").classList.add('btn-success');
                
                        winners.innerHTML = user1+" equals "+user2;
                    }
                    
                    
                })
                .fail(function(){
                    alert("Wrong Username");
                });
            })
            .fail(function(){
                    alert("Wrong Username");
            });
        })
        .fail(function(){
                    alert("Wrong Username");
        });
    })
    .fail(function(){
                    alert("Wrong Username");
    });       
    
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

    return watch
    
}
function main(user1,user2){
    ScoreCalc(user1,user2);
    
}
function getUser(){
    
    var user1=document.getElementById("user1").value;
    var user2=document.getElementById("user2").value;
    
    if(user1==user2){
        alert("Enter two different usernames");
    }
    else{
        main(user1,user2);
    } 
    
}