var page = 0;
var pageorder = ['basicinfo', 'freetext', 'onset', 'painlocation', 'duration', 'coexch', 'associated', 'factor', 'medicheck', 'socialhis', 'female', 'lastcomment', 'beforesubmit'];
var description = ['기초 인적사항을 입력해주세요', '들어가기에 앞서서', '증상의 시작', '증상의 위치', '증상의 지속시간', '증상의 정도', '동반증상', '증상의 유발인자', '과거력', '사회력', '여성 & 산부인과력', '거의 다 끝났습니다!', '제출 전에 다음의 내용이 정확한지 확인해주세요'];
var checkboxlist = ['asswholebody','asscirres','assdig','assuri','assobgy','environment','trumahis']

function showhide(p1,p2) {
    if(p1 !== "no"){
document.getElementById(p1).style.display = 'block';
        }
    if(p2 !== "no"){
document.getElementById(p2).style.display = 'none';
        }
}

function vishid(p1,p2) {
    if(p1 !== "no"){
document.getElementById(p1).style.visibility="visible";
        }
    if(p2 !== "no"){
document.getElementById(p2).style.visibility="hidden";
        }
}

function showhide2(p1,p2) {
    if(p1.length !== 0){
            for (var i = 0; i < p1.length; i++) {
                document.getElementById(p1[i]).style.display = 'block';
        }}
    if(p2.length !==0 ){
            for (var i = 0; i < p2.length; i++) {
                document.getElementById(p2[i]).style.display = 'none';
        }}
}

function funcchecked(p1,p2) {
  var checkBox = document.getElementById(p1);
  // Get the output text
  // If the checkbox is checked, display the output text
  if (checkBox.checked === true){
    document.getElementById(p2).style.display = 'block';
  } else {
    document.getElementById(p2).style.display = 'none';
  }
}

function getcheckbox(p1,p2) {
var checkbox = document.getElementsByName(p1);
checkboxtotal=""
    console.log(checkbox)
for (var i = 0, length = checkbox.length; i < length; i++)
{
 if (checkbox[i].checked)
 {
     console.log(checkbox[i])
  // do whatever you want with the checked radio
  var checkboxtotal = checkboxtotal+checkbox[i].value+","

  // only one radio can be logically checked, don't check the rest
 }
}
   
    document.getElementById(p2).value = checkboxtotal;
}

function getcheckboxdata(p1) {
var checkbox = document.getElementsByName(p1);
checkboxtotal=""
    console.log(checkbox)
for (var i = 0, length = checkbox.length; i < length; i++)
{
 if (checkbox[i].checked)
 {
     console.log(checkbox[i])
  // do whatever you want with the checked radio
  var checkboxtotal = checkboxtotal+checkbox[i].value+","

  // only one radio can be logically checked, don't check the rest
 }
}
    return checkboxtotal;
}

function getradio(p1){
    try{
        var temp = 'input[name="'+p1+'"]:checked'
        var tt = document.querySelector(temp).value;
        return tt;
        }
        catch(e){
         return "";
         }
    
}
function nextbutten() {
    if(page === 0){
        display="";
        if(document.getElementsByName("entry.465911165")[0].value ===""){
            display=display+" 이름";
        }
        if(document.getElementsByName("emailAddress")[0].value ===""){
            display=display+" 이메일";
        }
        if(document.getElementsByName("entry.753132646")[0].value ===""){
            display=display+" 생년월일";
        }
        else if(document.getElementsByName("entry.753132646")[0].value <15000000){
            display=display+" 생년월일";
        } 
        if(getradio("entry.1741463684")===""){
         display=display+" 성별";
         }
        if(display !== ""){
            alert(display+" 항목을 정확히 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            vishid('previousbutten','no');
            document.getElementById('pagecount').innerText = "1/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }
    }
    else if(page === 1){
        display="";
        if(document.getElementsByName("entry.409440300")[0].value ===""){
            display=display+" 주증상";
        }
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "2/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }
    }
    else if(page === 2){
        display="";
        try{
            document.querySelector('input[name="month"]:checked').value;
        }
        catch(e){
         display=display+" 발생시기";
         }
        try{
            document.querySelector('input[name="entry.327436423"]:checked').value;
        }
        catch(e){
         display=display+" 통증이 급격히 생겼나요";
         }
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "3/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }
    }
    else if(page === 3){
        display="";
        try{
            document.querySelector('input[name="entry.287601308"]:checked').value;
        }
        catch(e){
         display=display+" 증상 부위";
         }
        try{
            document.querySelector('input[name="entry.509920969"]:checked').value;
        }
        catch(e){
         display=display+" 아픈 부위가 이동했나요";
         }
        try{
            document.querySelector('input[name="entry.1563760848"]:checked').value;
        }
        catch(e){
         display=display+" 통증이 퍼저나가나요";
         }
        
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "4/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }
         
    }
    else if(page === 4){
        display="";
        if(document.getElementsByName("entry.1694058947")[0].value ==="0"){
            display=display+" 지속시간";
        }
        try{
            document.querySelector('input[name="entry.2010498740"]:checked').value;
        }
        catch(e){
         display=display+" 통증이 반복되나요";
         }
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "5/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }  
    }
    else if(page === 5){
        display="";
        
        try{
            document.querySelector('input[name="entry.631859862"]:checked').value;
        }
        catch(e){
         display=display+" 통증양상";
         }
        if(document.getElementsByName("entry.575310621")[0].value ==="20"){
            display=display+" 통증점수";
        }
        try{
            document.querySelector('input[name="entry.1979269959"]:checked').value;
        }
        catch(e){
         display=display+" 통증이 심해지나요";
         }
        try{
            document.querySelector('input[name="entry.418700771"]:checked').value;
        }
        catch(e){
         display=display+" 이전에도 비슷한 통증 있었나요";
         }
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "6/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }   
    }
    else if(page === 6){
       
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "7/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
    }
    else if(page === 7){
        showhide(pageorder[page+1],pageorder[page]);
        document.getElementById('pagecount').innerText = "8/10 진행중";
        ++page;
        document.getElementById('description').innerText = description[page];
    }
    else if(page === 8){
        display="";
        
        try{
            document.querySelector('input[name="entry.1691934801"]:checked').value;
        }
        catch(e){
         display=display+" 건강검진여부";
         }
        try{
            document.querySelector('input[name="entry.910305218"]:checked').value;
        }
        catch(e){
         display=display+" 약 복용여부";
         }
        
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "9/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }  
    }
    else if(page === 9){
        display="";
        
        try{
            document.querySelector('input[name="entry.1455146436"]:checked').value;
        }
        catch(e){
         display=display+" 음주여부";
         }
        try{
            document.querySelector('input[name="entry.1893606421"]:checked').value;
        }
        catch(e){
         display=display+" 흡연여부";
         }
        if(document.getElementsByName("entry.938842466")[0].value ==="0"){
            display=display+" 직업";
        }
        
        if(display !== ""){
            alert(display+" 항목을 채워주세요");
        }
        else{
           if(document.querySelector('input[name="entry.1741463684"]:checked').value==="남성"){
                showhide(pageorder[page+2],pageorder[page]);
                document.getElementById('pagecount').innerText = "거의 다 완료했습니다";
                page=page+2;
                document.getElementById('description').innerText = description[page];
            }
            else{
            showhide(pageorder[page+1],pageorder[page]);
            document.getElementById('pagecount').innerText = "10/10 진행중";
            ++page;
            document.getElementById('description').innerText = description[page];
        }  
    }
    }
    else if(page === 10){
        showhide(pageorder[page+1],pageorder[page]);
        document.getElementById('pagecount').innerText = "오랜시간 고생하셨습니다";
        ++page;
        document.getElementById('description').innerText = description[page];
    }
    else if(page === 11){
        
        getcheckbox("asswholebody","asswholebody");
        getcheckbox("asscirres","asscirres");
        getcheckbox("assdig","assdig");
        getcheckbox("assuri","assuri");
        getcheckbox("assobgy","assobgy");
        getcheckbox("diaghis","dizhistext");
        getcheckbox("fmdiaghis","fmdizhistext");
        getcheckbox("environment","environment");
        getcheckbox("trumahis","trumahis");
        
        
        summary();
        showhide(pageorder[page+1],pageorder[page]);
        document.getElementById('pagecount').innerText = "이상이 있으면 이전으로 돌아가 수정해주세요";
        ++page;
        document.getElementById('description').innerText = description[page];
        vishid('no','nextbutten');
    }

}

function previousbutten() {
     if(page === 1){
            vishid('no','previousbutten');
        }
    if(page === 12){
         vishid('nextbutten','no');
    }
    if(page < 11){
         document.getElementById('pagecount').innerText = page-1+"/10 진행중";
    }
    showhide(pageorder[page-1],pageorder[page]);
    --page;
    document.getElementById('description').innerText = description[page];
}
    
function summary(){
     document.getElementById("summary").innerHTML = ""; //초기화
    var username = document.getElementsByName("entry.465911165")[0].value
    var useremail = document.getElementsByName("emailAddress")[0].value
    var userbirth = document.getElementsByName("entry.753132646")[0].value
    var usergender = getradio("entry.1741463684")
    var userpregnenct = getradio("entry.239242121")
    var userheight = document.getElementsByName("entry.333937564")[0].value
    var userweight = document.getElementsByName("entry.1625905592")[0].value
    var usermainsymptom = document.getElementsByName("entry.409440300")[0].value
    var userpainstartday = document.getElementsByName("entry.1147543040")[0].value
    var userpainstarthour = document.getElementsByName("entry.1099483423")[0].value
    var userfastslow = getradio("entry.327436423")
    var userinisitu = document.getElementsByName("entry.1392732980")[0].value
    var userpainloc = getradio("entry.287601308")
    var userpainlocmove = getradio("entry.509920969")
    var userpainlocmoveself = document.getElementsByName("entry.1966127009")[0].value
    var userpainspread = getradio("entry.1563760848")
    var userpainspreadself = document.getElementsByName("entry.779714556")[0].value
    var userduration = document.getElementsByName("entry.1694058947")[0].value
    var userfreqency = getradio("entry.2010498740")
    var userfreqencyself1 = document.getElementsByName("entry.866233067")[0].value
    var userfreqencyself2 = document.getElementsByName("entry.1758300946")[0].value
    var usercharacter = getradio("entry.631859862")
    var usercharacterself = document.getElementsByName("entry.2022504559")[0].value
    var userpainscore = document.getElementsByName("entry.575310621")[0].value
    var usergetworse = document.getElementsByName("entry.1979269959")[0].value
    var userpainbefore = document.getElementsByName("entry.418700771")[0].value
    var userasswhole = document.getElementsByName("entry.2017146699")[0].value
    var userasscirris = document.getElementsByName("entry.1997056220")[0].value
    var userassdig = document.getElementsByName("entry.208322784")[0].value
    var userassuri = document.getElementsByName("entry.1638638905")[0].value
    var userassobgy = document.getElementsByName("entry.117740436")[0].value
    var userassetc = document.getElementsByName("entry.2095920813")[0].value
    var userfactor = getcheckboxdata("prefer")
    var userfactorself = document.getElementsByName("entry.1540440343")[0].value
    var usermedicheck = getradio("entry.1691934801")
    var usermedicheckyear = getradio("entry.1088812478")
    var userdizhis = document.getElementsByName("entry.477882893")[0].value
    var userdizhisself = document.getElementsByName("entry.182705321")[0].value
    var userpill = getradio("entry.910305218")
    var userpillself = document.getElementsByName("entry.1818366806")[0].value
    var userfmdizhis = document.getElementsByName("entry.757349464")[0].value
    var userfmdizhisself = document.getElementsByName("entry.294947621")[0].value
    var useralcohol = getradio("entry.1455146436")
    var useralcoholbottle = document.getElementsByName("entry.160728473")[0].value
    var usersmoke = getradio("entry.1893606421")
    var usersmokeyear = document.getElementsByName("entry.47894038")[0].value
    var usersmokepack = document.getElementsByName("entry.567435615")[0].value
    var userjob = document.getElementsByName("entry.938842466")[0].value
    var userenviron = getcheckboxdata("environment")
    var usertruma = getcheckboxdata("trumahis")
    var userlastcomment = document.getElementsByName("entry.1606971460")[0].value
    
  
    
    block1=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= " 이름: "+username+"  -  생년월일: "+userbirth+"  -  성별: "+usergender;
    if(usergender=="여성"){
        para1.innerHTML += "  -  임신가능성: "+userpregnenct;
    }
    if(userheight !==""&&userweight !==""){
        para1.innerHTML+= "  -  키: "+userheight+"cm, 체중: "+userweight+"kg";

    }
    block1.appendChild(para1);
    document.getElementById("summary").appendChild(block1);      //
    //---------------------------------------------
    block2=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "주증상: "+usermainsymptom;
    
    block2.appendChild(para1);
    document.getElementById("summary").appendChild(block2);     // 
    //---------------------------------------------
    block3=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "복통이 생긴지: "+userpainstartday+" "+userpainstarthour+", 통증은 "+userfastslow;
    if(userinisitu !==""){
        para1.innerHTML+= ", 통증이 발생할 당시 상황은: "+userinisitu;
    }
    
    block3.appendChild(para1);
    document.getElementById("summary").appendChild(block3);     // 
    //---------------------------------------------
    block4=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "증상 부위는 "+userpainloc;
    if(userpainlocmove ==="1"){
        para1.innerHTML+= ",  통증부위는 이동하였음("+userpainlocmoveself+")";
    }
    else{
        para1.innerHTML+= ",  통증부위는 이동하지않았음";
    }
    if(userpainspread ==="1"){
        para1.innerHTML+= ",  통증은 퍼지는 양상이었음("+userpainspreadself+")";
    }
    else{
        para1.innerHTML+= ",  통증은 퍼지지 않았음";
    }
    
    block4.appendChild(para1);
    document.getElementById("summary").appendChild(block4);     // 
    //---------------------------------------------
    block5=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "통증은 "+userduration+" 동안 지속되었음. ";
    if(userfreqency ==="1"){
        para1.innerHTML+= " 통증의 빈도는"+userfreqencyself1+" "+userfreqencyself2+"임.";
    }
    else{
        para1.innerHTML+= " 통증은 단발성임."
    }
    block5.appendChild(para1);
    document.getElementById("summary").appendChild(block5);     // 
    //---------------------------------------------
    block6=document.createElement('div');
    para1=document.createElement('P');
    if(usercharacter ==="0"){
        para1.innerHTML= "통증의 양상은"+usercharacterself;
    }
    else{
        para1.innerHTML= usercharacter+" 통증 양상.";
    }
    para1.innerHTML+= " 통증점수: "+userpainscore+"점";
    if(usergetworse ==="0"){
        para1.innerHTML+= ", 통증이 심해지지는 않음";
    }else{
        para1.innerHTML+= ", 통증이 점점 심해짐";
    }
    if(userpainbefore ==="0"){
        para1.innerHTML+= ", 이런 증상은 처음임.";
    }else{
        para1.innerHTML+= ", 이전에도 이런 증상이 있던적이 있었음.";
    }
    block6.appendChild(para1);
    document.getElementById("summary").appendChild(block6);     // 
    //---------------------------------------------
    block7=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "동반증상: "+userasswhole+userasscirris+userassdig+userassuri+userassobgy+userassetc;
    block7.appendChild(para1);
    document.getElementById("summary").appendChild(block7);     // 
    //---------------------------------------------
    block8=document.createElement('div');
    para1=document.createElement('P');
    para1.innerHTML= "악화 및 완화요인: "+userfactor+" "+userfactorself;
    block8.appendChild(para1);
    document.getElementById("summary").appendChild(block8);     // 
    //---------------------------------------------
    block9=document.createElement('div');
    para1=document.createElement('P');
    if(usermedicheck ==="0"){
        para1.innerHTML= "이전에 건강검진 받은 적 없음";
    }
    else{
        para1.innerHTML= "제일 최근에 받은 건강검진은 "+usermedicheckyear+".  ";
    }
    para1.innerHTML+= "이전에 진단 받은 병: "+userdizhis+" "+userdizhisself+".  ";
    if(userpill ==="0"){
        para1.innerHTML+= "복용중인 약 없음.";
    }
    else{
        para1.innerHTML+= "현재 "+userpillself+"복용중.  ";
    }
    para1.innerHTML+= "가족이 갖고 있는 병: "+userfmdizhis+" "+userfmdizhisself;
    
    block9.appendChild(para1);
    document.getElementById("summary").appendChild(block9);     // 
    //---------------------------------------------
    block10=document.createElement('div');
    para1=document.createElement('P');
    if(useralcohol ==="0"){
        para1.innerHTML= "술 마시지 않음, ";
    }
    else{
        para1.innerHTML= "음주량은 매주 "+useralcoholbottle+"병.  ";
    }
    if(usersmoke ==="0"){
        para1.innerHTML+= "담배 피지 않음.  ";
    }
    else if(usersmoke ==="1"){
        para1.innerHTML+= "흡연중이며 "+usersmokeyear+"년간 매일 "+usersmokepack+"갑 흡연.  ";
    }
    else{
        para1.innerHTML+= "담배를 끊었으며 "+usersmokeyear+"년간 매일 "+usersmokepack+"갑 피웠음.  ";
    }
    para1.innerHTML+= "직업은 "+userjob+"임.  ";
    if(userenviron !==""){
        para1.innerHTML+= "그외 환경적 요인으로는 "+userenviron+"등 이 있음. ";
    }
    if(usertruma !==""){
        para1.innerHTML+= "외상 특이사항으로는 "+usertruma+"등 이 있음. ";
    }
    
    block10.appendChild(para1);
    document.getElementById("summary").appendChild(block10);     // 
}