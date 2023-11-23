
function Zap(){
    let i = document.getElementById('text').textContent;
    return i;
}


// function Screen(){
//     let ScreenWidht=window.innerWidth;
//     let ScreenHeight=window.innerHeight;
//     return ScreenWidht;
// }

function nul(){
    let s = Zap();
    if(s == 0){
        s = 0;
    }
    else{
        s = Zap() + 0;
    }
    document.getElementById('text').textContent = s;
}

function one(){
    let s = Zap();
    if(s == 0){
        s = 1;
    }
    else{
        s = Zap() + 1;
    }
    document.getElementById('text').textContent = s;
}

function two(){
    let s = Zap();
    if(s == 0){
        s = 2;
    }
    else{
        s = Zap() + 2;
    }
    document.getElementById('text').textContent = s;
}

function three(){
    let s = Zap();
    if(s == 0){
        s = 3;
    }
    else{
        s = Zap() + 3;
    }
    document.getElementById('text').textContent = s;
}

function four(){
    let s = Zap();
    if(s == 0){
        s = 4;
    }
    else{
        s = Zap() + 4;
    }
    document.getElementById('text').textContent = s;
}

function five(){
    let s = Zap();
    if(s == 0){
        s = 5;
    }
    else{
        s = Zap() + 5;
    }
    document.getElementById('text').textContent = s;

}

function six(){
    let s = Zap();
    if(s == 0){
        s = 6;
    }
    else{
        s = Zap() + 6;
    }
    document.getElementById('text').textContent = s;
}

function seven(){
    let s = Zap();
    if(s == 0){
        s = 7;
    }
    else{
        s = Zap() + 7;
    }
    document.getElementById('text').textContent = s;
}

function eight(){
     let s = Zap();
    if(s == 0){
        s = 8;
    }
    else{
        s = Zap() + 8;
    }
    document.getElementById('text').textContent = s;
}

function nine(){
    let s = Zap();
    if(s == 0){
        s = 9;
    }
    else{
        s = Zap() + 9;
    }
    document.getElementById('text').textContent = s;
}

function point(){
    let s = Zap();
    if(s == 0){
        return ;
    }
    else{
        s = Zap() + ".";
    }
    document.getElementById('text').textContent = s;
}


function rez(){
    document.getElementById('text').innerHTML=eval(Zap());
}

function cl(){
    document.getElementById('text').innerHTML=0;
} 

function minus(){
    let s = Zap();
    if((s == 0) | (s == "-") | (s == "+") | (s == "*") | (s == "/")){
        s = "-";
    }
    if((s[s.length-1] == "-") | (s[s.length-1] == "+") | (s[s.length-1] == "*") | (s[s.length-1] == "/") & (s.length-1 > 1)){
    }
    else{
        s = Zap() + "-";
    }
    document.getElementById('text').textContent = s;
}

function plus(){
    let s = Zap();
    if((s == 0) | (s == "-") | (s == "+") | (s == "*") | (s == "/")){
        s = "+";
    }
    if((s[s.length-1] == "-") | (s[s.length-1] == "+") | (s[s.length-1] == "*") | (s[s.length-1] == "/") & (s.length-1 > 1)){
    }
    else{
        s = Zap() + "+";
    }
    document.getElementById('text').textContent = s;
}

function dvs(){
    let s = Zap();
    if(s==0 & s.length==1){
        return;
    }
    if(s=="-"|s=="+"|s=="*"|s == "/"){
        s = "/";
    }
    if(s[s.length-1]=="-"|s[s.length-1]=="+"|s[s.length-1]=="*"|s[s.length-1]=="/"){
    }
    else{
        s = Zap() + "/";
    }
    document.getElementById('text').textContent = s;
}

function times(){
    let s = Zap();

    if(s==0 & s.length==1){
        return;
    }

    if((s == 0) | (s == "-") | (s == "+") | (s == "*") | (s == "/")){
        s = "*";
    }
    if((s[s.length-1] == "-") | (s[s.length-1] == "+") | (s[s.length-1] == "*") | (s[s.length-1] == "/") & (s.length-1 > 1)){
    }
    else{
        s = Zap() + "*";
    }
    document.getElementById('text').textContent = s;
}


function bac(){
    let rew = document.getElementById('text').textContent;
    let ws = rew.substr(0,rew.length-1);
    if(rew.length-1==""){
        document.getElementById('text').textContent = 0;
        return;        
    }
    document.getElementById('text').textContent = ws ;
}