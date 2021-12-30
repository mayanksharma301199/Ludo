{
    document.getElementById("red1").style.marginLeft="50px"
    document.getElementById("red1").style.marginTop="-577px"
    document.getElementById("red2").style.marginLeft="50px"
    document.getElementById("red2").style.marginTop="-451px"
    document.getElementById("red3").style.marginLeft="170px"
    document.getElementById("red3").style.marginTop="-577px"
    document.getElementById("red4").style.marginLeft="170px"
    document.getElementById("red4").style.marginTop="-451px"

    document.getElementById("blue1").style.marginLeft="50px"
    document.getElementById("blue1").style.marginTop="-199px"
    document.getElementById("blue2").style.marginLeft="50px"
    document.getElementById("blue2").style.marginTop="-73px"
    document.getElementById("blue3").style.marginLeft="170px"
    document.getElementById("blue3").style.marginTop="-199px"
    document.getElementById("blue4").style.marginLeft="170px"
    document.getElementById("blue4").style.marginTop="-73px"

    document.getElementById("green1").style.marginLeft="410px"
    document.getElementById("green1").style.marginTop="-577px"
    document.getElementById("green2").style.marginLeft="410px"
    document.getElementById("green2").style.marginTop="-451px"
    document.getElementById("green3").style.marginLeft="530px"
    document.getElementById("green3").style.marginTop="-577px"
    document.getElementById("green4").style.marginLeft="530px"
    document.getElementById("green4").style.marginTop="-451px"

    document.getElementById("yellow1").style.marginLeft="410px"
    document.getElementById("yellow1").style.marginTop="-199px"
    document.getElementById("yellow2").style.marginLeft="410px"
    document.getElementById("yellow2").style.marginTop="-73px"
    document.getElementById("yellow3").style.marginLeft="530px"
    document.getElementById("yellow3").style.marginTop="-199px"
    document.getElementById("yellow4").style.marginLeft="530px"
    document.getElementById("yellow4").style.marginTop="-73px"
    var turn=0
    var count //lp=493 tp=-369 green
    var n //lp=253  tp=-535 red
    var ids//lp=331 tp=-117 yellow
    var rcount=0//lp=91 tp=-283 blue
    var deg=60
    var i
    var j
    var dices
    var obj=[[{l:50,lp:50,t:-367,tp:-367},{l:50,lp:50,t:-367,tp:-367},{l:50,lp:50,t:-367,tp:-367},{l:50,lp:50,t:-367,tp:-367}],
            [{l:250,lp:251,t:-76,tp:-75},{l:250,lp:251,t:-76,tp:-75},{l:250,lp:251,t:-76,tp:-75},{l:250,lp:251,t:-76,tp:-75}],
            [{l:334,lp:333,t:-576,tp:-577},{l:334,lp:333,t:-576,tp:-577},{l:334,lp:333,t:-576,tp:-577},{l:334,lp:333,t:-576,tp:-577}],
            [{l:532,lp:533,t:-284,tp:-285},{l:532,lp:533,t:-284,tp:-285},{l:532,lp:533,t:-284,tp:-285},{l:532,lp:533,t:-284,tp:-285}]]

    var lptppnt=[{lps:10,lpe:170,tps:-367,tpe:-367},{lps:253,lpe:253,tps:-409,tpe:-577},{lps:253,lpe:293,tps:-619,tpe:-619},{lps:11,lpe:11,tps:-283,tpe:-325},
                {lps:373,lpe:533,tps:-369,tpe:-369},{lps:373,lpe:373,tps:-285,tpe:-285},{lps:251,lpe:251,tps:-33,tpe:-201},{lps:251,lpe:251,tps:-243,tpe:-243}]

    var lptppnt1=[{lps:333,lpe:333,tps:-619,tpe:-451},{lps:573,lpe:573,tps:-369,tpe:-327},{lps:573,lpe:413,tps:-285,tpe:-285},{lps:331,lpe:331,tps:-243,tpe:-75},
                 {lps:331,lpe:291,tps:-33,tpe:-33},{lps:211,lpe:51,tps:-283,tpe:-283},{lps:333,lpe:333,tps:-409,tpe:-409},{lps:210,lpe:210,tps:-367,tpe:-367}]
    var fu=[redhr,redvr,topline,leftline,greenhr,ycrs,bluevr,bcrs]
    var fu1 =[greenvr,rightline,yellowhr,yellowvr,bottomline,bluehr,gcrs,rcrs]
    var my
    //blue l=250 lp=251 t=-76 tp=-75
    //green l=334 lp=333 t=-576 tp=-577
    //yellow l=532 lp=533 t=-284 tp=-285
    function dice(did){
        if(count==n && did=="diceR" && turn==0){
            turn=1
            dices="diceR"
            my=setInterval(rtc,50)
        }
        else if(count==n && did=="diceB" && turn==1){
            turn=2
            dices="diceB"
            my=setInterval(rtc,50)
        }
        else if(count==n && did=="diceG" && turn==2){
            turn=3
            dices="diceG"
            my=setInterval(rtc,50)
        }
        else if(count==n && did=="diceY" && turn==3){
            turn=0
            dices="diceY"
            my=setInterval(rtc,50)
        }
    }
    function rtc(){
        var rnd=Math.floor(Math.random() * (6)) + 1
        document.getElementById(dices).style.backgroundImage="url(Alea_"+rnd+".png)"
        document.getElementById(dices).style.transform = "rotate3d(1,0,0," + deg + "deg)"
        deg = deg + 60
        rcount=rcount+1
        if(rcount==6){
            deg=60
            rcount=0
            count=0
            n=rnd
            var r1=document.getElementById("red1")
            var r2=document.getElementById("red2")
            var r3=document.getElementById("red3")
            var r4=document.getElementById("red4")

            var b1=document.getElementById("blue1")
            var b2=document.getElementById("blue2")
            var b3=document.getElementById("blue3")
            var b4=document.getElementById("blue4")

            var g1=document.getElementById("green1")
            var g2=document.getElementById("green2")
            var g3=document.getElementById("green3")
            var g4=document.getElementById("green4")

            var y1=document.getElementById("yellow1")
            var y2=document.getElementById("yellow2")
            var y3=document.getElementById("yellow3")
            var y4=document.getElementById("yellow4")
            if(dices=="diceR"){
            if(n!=6 && ((r1.style.marginLeft=="50px" && r1.style.marginTop=="-577px") && (r2.style.marginLeft=="50px" && r2.style.marginTop=="-451px") && (r3.style.marginLeft=="170px" && r3.style.marginTop=="-577px") && (r4.style.marginLeft=="170px" && r4.style.marginTop=="-451px"))){
                count=n
            }
            }
            else if(dices=="diceB"){
            if(n!=6 && ((b1.style.marginLeft=="50px" && b1.style.marginTop=="-199px") && (b2.style.marginLeft=="50px" && b2.style.marginTop=="-73px") && (b3.style.marginLeft=="170px" && b3.style.marginTop=="-199px") && (b4.style.marginLeft=="170px" && b4.style.marginTop=="-73px"))){
                count=n
            }
            }
            else if(dices=="diceG"){
            if(n!=6 && ((g1.style.marginLeft=="410px" && g1.style.marginTop=="-577px") && (g2.style.marginLeft=="410px" && g2.style.marginTop=="-451px") && (g3.style.marginLeft=="530px" && g3.style.marginTop=="-577px") && (g4.style.marginLeft=="530px" && g4.style.marginTop=="-451px"))){
                count=n
            }
            }
            else if(dices=="diceY"){
            if(n!=6 && ((y1.style.marginLeft=="410px" && y1.style.marginTop=="-199px") && (y2.style.marginLeft=="410px" && y2.style.marginTop=="-73px") && (y3.style.marginLeft=="530px" && y3.style.marginTop=="-199px") && (y4.style.marginLeft=="530px" && y4.style.marginTop=="-73px"))){
                count=n
            }
            }
            if(n==6){
                if(turn!=0){
                turn=turn-1
                }
                else{
                    turn=3
                }
            }
            // if(dices=="diceR"){
            //     ids="red2"
            //     i=0
            //     j=1
                
            //     document.getElementById(ids).style.backgroundColor="green"
                clearInterval(my)
            // }

        }    
    }
    function rtt(gid,gn,gc){
        if(count==0){
            var cs=false
            if(dices=="diceR" && gc=="red"){
                i=0
                j=gn-1
                ids=gid
                var gm=document.getElementById(ids)
                cs=true
                if(n!=6 && ((gm.style.marginLeft=="50px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="50px" && gm.style.marginTop=="-451px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-451px"))){
                    count=0
                    cs=false
                }
                else if(n==6 && ((gm.style.marginLeft=="50px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="50px" && gm.style.marginTop=="-451px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-451px"))){
                    document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
                    document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
                    count=n
                    cs=false
                }
            }
            else if(dices=="diceB" && gc=="blue"){
                i=1
                j=gn-1
                ids=gid
                var gm=document.getElementById(ids)
                cs=true
                if(n!=6 && ((gm.style.marginLeft=="50px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="50px" && gm.style.marginTop=="-73px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-73px"))){
                    count=0
                    cs=false
                }
                else if(n==6 && ((gm.style.marginLeft=="50px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="50px" && gm.style.marginTop=="-73px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="170px" && gm.style.marginTop=="-73px"))){
                    document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
                    document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
                    count=n
                    cs=false
                }
            }
            else if(dices=="diceG" && gc=="green"){
                i=2
                j=gn-1
                ids=gid
                var gm=document.getElementById(ids)
                cs=true
                if(n!=6 && ((gm.style.marginLeft=="410px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="410px" && gm.style.marginTop=="-451px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-451px"))){
                    count=0
                    cs=false
                }
                else if(n==6 && ((gm.style.marginLeft=="410px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="410px" && gm.style.marginTop=="-451px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-577px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-451px"))){
                    document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
                    document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
                    count=n
                    cs=false
                }
            }
            else if(dices=="diceY" && gc=="yellow"){
                i=3
                j=gn-1
                ids=gid
                var gm=document.getElementById(ids)
                cs=true
                if(n!=6 && ((gm.style.marginLeft=="410px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="410px" && gm.style.marginTop=="-73px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-73px"))){
                    count=0
                    cs=false
                }
                else if(n==6 && ((gm.style.marginLeft=="410px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="410px" && gm.style.marginTop=="-73px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-199px") || (gm.style.marginLeft=="530px" && gm.style.marginTop=="-73px"))){
                    document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
                    document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
                    count=n
                    cs=false
                }
            }
            if(cs==true){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
            for(var k=0; k<lptppnt.length;k++){
                if((lptppnt[k].lps<=obj[i][j].lp && obj[i][j].lp<=lptppnt[k].lpe) && (lptppnt[k].tpe<=obj[i][j].tp && obj[i][j].tp<=lptppnt[k].tps)){
                    // clearInterval(my)
                    my=setInterval(fu[k],10)
                    break
                }
                else if((lptppnt1[k].lps>=obj[i][j].lp && obj[i][j].lp>=lptppnt1[k].lpe) && (lptppnt1[k].tps<=obj[i][j].tp && obj[i][j].tp<=lptppnt1[k].tpe)){
                    // clearInterval(my)
                    my=setInterval(fu1[k],10)
                    break
                }
            }
        }
        }    
    }
    function redhr(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp+40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp+40
            if(count==n){
                kill()
            clearInterval(my)
            }
            else if(obj[i][j].lp==210){
                clearInterval(my)
                my=setInterval(rcrs,10)
            }//l=211
        }
        obj[i][j].l=obj[i][j].l+1
    }
    function rcrs(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp-42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp-42
            obj[i][j].lp=obj[i][j].lp+43
            if(count==n){
                kill()
            clearInterval(my)
        }
        else{
            clearInterval(my)
            my=setInterval(redvr,10)
            }
        }
        obj[i][j].l=obj[i][j].l+1
        obj[i][j].t=obj[i][j].t-1
    }
    function redvr(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp-42){
            obj[i][j].tp=obj[i][j].tp-42
            count=count+1
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-619){
                clearInterval(my)
                my=setInterval(topline,10)
            }//t=-620 tp=-619 l=254 lp=253
        }
        obj[i][j].t=obj[i][j].t-1
    }
    function topline(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp+40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp+40
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].lp==333){
                clearInterval(my)
                my=setInterval(greenvr,10)
            }//t=-620 tp=-619 l=334 lp=333
        }
        obj[i][j].l=obj[i][j].l+1
    }
    function greenvr(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp+42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp+42
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-409){
                clearInterval(my)
                my=setInterval(gcrs,10)
            }//t=-408 tp=-409 l=334 lp=333
        }
        obj[i][j].t=obj[i][j].t+1
    }
    function gcrs(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp+40 && obj[i][j].l==obj[i][j].lp+40){
            count=count+1
            obj[i][j].tp=obj[i][j].tp+40
            obj[i][j].lp=obj[i][j].lp+40
            if(count==n){
                kill()
            clearInterval(my)
        }
        else{
            clearInterval(my)
            my=setInterval(greenhr,10)
            }//t=-368 tp=-369 l=374 lp=373
        }
        obj[i][j].l=obj[i][j].l+1
        obj[i][j].t=obj[i][j].t+1
    }
    function greenhr(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp+40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp+40
            if(count==n){
                kill()
            clearInterval(my)
            }
            else if(obj[i][j].lp==573){
                clearInterval(my)
                my=setInterval(rightline,10)
            }//t=-368 tp=-369 l=574 lp=573
        }
        obj[i][j].l=obj[i][j].l+1
    }
    function rightline(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp+42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp+42
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-285){
                clearInterval(my)
                my=setInterval(yellowhr,10)
            }//t=-284 tp=-285 l=574 lp=573
        }
        obj[i][j].t=obj[i][j].t+1
    }
    function yellowhr(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp-40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp-40
            if(count==n){
                kill()
            clearInterval(my)
            }
            else if(obj[i][j].lp==373){
                clearInterval(my)
                my=setInterval(ycrs,10)
            }//t=-284 tp=-285 l=372 lp=373
        }
        obj[i][j].l=obj[i][j].l-1
    }
    function ycrs(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp+42 && obj[i][j].l==obj[i][j].lp-42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp+42
            obj[i][j].lp=obj[i][j].lp-42
            if(count==n){
                kill()
            clearInterval(my)
        }
        else{
            clearInterval(my)
            my=setInterval(yellowvr,10)
            }//t=-242 tp=-243 l=330 lp=331
        }
        obj[i][j].l=obj[i][j].l-1
        obj[i][j].t=obj[i][j].t+1
    }
    function yellowvr(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp+42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp+42
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-33){
                clearInterval(my)
                my=setInterval(bottomline,10)
            }//t=-32 tp=-33 l=330 lp=331
        }
        obj[i][j].t=obj[i][j].t+1
    }
    function bottomline(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp-40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp-40
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].lp==251){
                clearInterval(my)
                my=setInterval(bluevr,10)
            }//t=-32 tp=-33 l=250 lp=251
        }
        obj[i][j].l=obj[i][j].l-1
    }
    function bluevr(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp-42){
            obj[i][j].tp=obj[i][j].tp-42
            count=count+1
            if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-243){
                clearInterval(my)
                my=setInterval(bcrs,10)
            }//t=-244 tp=-243 l=250 lp=251
        }
        obj[i][j].t=obj[i][j].t-1
    }
    function bcrs(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp-40 && obj[i][j].l==obj[i][j].lp-40){
            count=count+1
            obj[i][j].tp=obj[i][j].tp-40
            obj[i][j].lp=obj[i][j].lp-40
            if(count==n){
                kill()
            clearInterval(my)
        }
        else{
            clearInterval(my)
            my=setInterval(bluehr,10)
            }//t=-284 tp=-283 l=210 lp=211
        }
        obj[i][j].l=obj[i][j].l-1
        obj[i][j].t=obj[i][j].t-1
    }
    function bluehr(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp-40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp-40
            if(count==n){
                kill()
            clearInterval(my)
            }
            else if(obj[i][j].lp==11){
                clearInterval(my)
                my=setInterval(leftline,10)
            }//t=-284 tp=-283 l=10 lp=11
        }
        obj[i][j].l=obj[i][j].l-1
    }
    function leftline(){
        document.getElementById(ids).style.marginTop=obj[i][j].t+"px"
        if(obj[i][j].t==obj[i][j].tp-42){
            count=count+1
            obj[i][j].tp=obj[i][j].tp-42
            // if(tp==-325 && lp==11){
            //     if(ids=="red2"){
            //         clearInterval(my)
            //         my=setInterval(redinner,10)
            //     }
            // }
            if(count==n && obj[i][j].tp==-367){
                obj[i][j].lp=10
                obj[i][j].l=8
                obj[i][j].t=-367
                obj[i][j].tp=-367
                kill()
                // document.getElementById(ids).style.marginTop=t+"px"
                // document.getElementById(ids).style.marginLeft=l+"px"
                clearInterval(my)
            }
            else if(count==n){
                kill()
                clearInterval(my)
            }
            else if(obj[i][j].tp==-367){
                obj[i][j].lp=10
                obj[i][j].l=8
                obj[i][j].t=-367
                obj[i][j].tp=-367
                clearInterval(my)
                my=setInterval(redhr,10)
            }//t=-368 tp=-367 l=10 lp=11
        }
        obj[i][j].t=obj[i][j].t-1
    }
    function redinner(){
        document.getElementById(ids).style.marginLeft=obj[i][j].l+"px"
        if(obj[i][j].l==obj[i][j].lp+40){
            count=count+1
            obj[i][j].lp=obj[i][j].lp+40
            if(count==n){
            clearInterval(my)
            }
            // else if(lp==210){
            //     clearInterval(my)
            //     my=setInterval(rcrs,10)
            // }//l=211
        }
        obj[i][j].l=obj[i][j].l+1
    }
    function killset(k,a){
        if(k==0){
            obj[k][a].l=50
            obj[k][a].lp=50
            obj[k][a].t=-367
            obj[k][a].tp=-367
        }
        else if(k==1){
            obj[k][a].l=250
            obj[k][a].lp=251
            obj[k][a].t=-76
            obj[k][a].tp=-75
        }
        else if(k==2){
            obj[k][a].l=334
            obj[k][a].lp=333
            obj[k][a].t=-576
            obj[k][a].tp=-577
        }
        else{
            obj[k][a].l=532
            obj[k][a].lp=533
            obj[k][a].t=-284
            obj[k][a].tp=-285
        }
    }
    function kill(){
        var again=false
        for(var k=0; k<obj.length;k++){
            if(k==i){
                continue
            }
            for(var a=0;a<=3;a++){
                if(obj[k][a].lp==obj[i][j].lp && obj[k][a].tp==obj[i][j].tp){
                    again=true
                    if(k==0){
                        if(a==0){
                            document.getElementById("red1").style.marginLeft="50px"
                            document.getElementById("red1").style.marginTop="-577px"
                            killset(k,a)
                        }
                        else if(a==1){
                            document.getElementById("red2").style.marginLeft="50px"
                            document.getElementById("red2").style.marginTop="-451px"
                            killset(k,a)
                        }
                        else if(a==2){
                            document.getElementById("red3").style.marginLeft="170px"
                            document.getElementById("red3").style.marginTop="-577px"
                            killset(k,a)
                        }
                        else{
                            document.getElementById("red4").style.marginLeft="170px"
                            document.getElementById("red4").style.marginTop="-451px"
                            killset(k,a)
                        }
                    }
                    else if(k==1){
                        if(a==0){
                            document.getElementById("blue1").style.marginLeft="50px"
                            document.getElementById("blue1").style.marginTop="-199px"
                            killset(k,a)
                        }
                        else if(a==1){
                            document.getElementById("blue2").style.marginLeft="50px"
                            document.getElementById("blue2").style.marginTop="-73px"
                            killset(k,a)
                        }
                        else if(a==2){
                            document.getElementById("blue3").style.marginLeft="170px"
                            document.getElementById("blue3").style.marginTop="-199px"
                            killset(k,a)
                        }
                        else{
                            document.getElementById("blue4").style.marginLeft="170px"
                            document.getElementById("blue4").style.marginTop="-73px"
                            killset(k,a)
                        }
                    }
                    else if(k==2){
                        if(a==0){
                            document.getElementById("green1").style.marginLeft="410px"
                            document.getElementById("green1").style.marginTop="-577px"
                            killset(k,a)
                        }
                        else if(a==1){
                            document.getElementById("green2").style.marginLeft="410px"
                            document.getElementById("green2").style.marginTop="-451px"
                            killset(k,a)
                        }
                        else if(a==2){
                            document.getElementById("green3").style.marginLeft="530px"
                            document.getElementById("green3").style.marginTop="-577px"
                            killset(k,a)
                        }
                        else{
                            document.getElementById("green4").style.marginLeft="530px"
                            document.getElementById("green4").style.marginTop="-451px"
                            killset(k,a)
                        }
                    }
                    else{
                        if(a==0){
                            document.getElementById("yellow1").style.marginLeft="410px"
                            document.getElementById("yellow1").style.marginTop="-199px"
                            killset(k,a)
                        }
                        else if(a==1){
                            document.getElementById("yellow2").style.marginLeft="410px"
                            document.getElementById("yellow2").style.marginTop="-73px"
                            killset(k,a)
                        }
                        else if(a==2){
                            document.getElementById("yellow3").style.marginLeft="530px"
                            document.getElementById("yellow3").style.marginTop="-199px"
                            killset(k,a)
                        }
                        else{
                            document.getElementById("yellow4").style.marginLeft="530px"
                            document.getElementById("yellow4").style.marginTop="-73px"
                            killset(k,a)
                        }
                    }
                }
            }
            
        }
        if(again==true && n!=6){
            if(turn!=0){
                turn=turn-1
                }
                else{
                    turn=3
                }
        }
    }
}