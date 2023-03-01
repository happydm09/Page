//lang
var lang = 0;

function lan() {
  const toggle = document.querySelector("#ko");

  if (navigator.language == 'ko-KR') {
    lang = 1
    toggle.checked = true
  }
}
function inp() {
  const toggle = document.querySelector("#ko");
  
  if (toggle.checked) {
    lang = 1
  } else {
    lang = 0
  }
  abouts()
  GetSolvedacData();
  de();
  moreLang();
}

// introduce and about code
function AgeCalc(BY, BM, BD) {
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY)
  
  if (NT[1] >= BM && NT[2] >= BD) {
    return  age
  } else {
    return age - 1
  }
};
function KorAgeCalc(BY, BM, BD) { 
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY) + 1
  return  age
};

function abouts() {
  var age = AgeCalc(2009, 7, 17)
  var about_el = document.querySelector("#about")

const content = ['def ', ' My_Self', ' ( ): <br>⠀⠀name ', '= ' ,"'DM'", '<br>⠀⠀age ', '= ' ,age, '<br>⠀⠀email ', '= ', "'happydm09@naver.com'"]

var about = [`<br> 저는 프로그래머가 꿈인 ${KorAgeCalc(2009,7,17)}살(만${age}살) DM 입니다. 주로 파이썬을 다루며 취미로 웹 페이지도 만듭니다. `, `<br> I'm ${age} years old DM who dream programer. I mainly deal with Python and also create web pages as a hobby.`]

if (lang == 1) { // 한국어
  about_el.innerHTML = about[0]
} else {
  about_el.innerHTML = about[1]
}

const el = [document.querySelector("#def"),
           document.querySelector("#funn"),
           document.querySelector("#na"),
           document.querySelector("#ne"),
           document.querySelector("#name"),
           document.querySelector("#aa"),
           document.querySelector("#ae"),
           document.querySelector("#age"),
           document.querySelector("#ea"),
           document.querySelector("#en"),
           document.querySelector("#email")]
var i = 0;
setTimeout(function() {
var Typing = setInterval(function() {
          let txt = content[i++];
          el[i - 1].innerHTML = txt;
          if (i == content.length) {
              clearInterval(Typing)
          }
}, 200)
}, 300);
}

//BeakJoon code
let all_tier = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby']
let all_subtier = ['V', "IV", 'III', 'II', 'I']

async function SolvedacTier(idx) {
    let tier = 0
    let subtier = 0

    if (Number.isInteger(idx/5)) {
        tier = Math.floor(idx/5)-1
    } else {
        tier = Math.floor(idx/5)
    }

    if (idx%5 == 1) {
        subtier = 0
    }else if (idx%5 == 0) {
        subtier = 4
    } else {
        subtier = (idx%5)-1
    }

    return `${all_tier[tier]} ${all_subtier[subtier]}`
};
async function GetSolvedacData() {
  let Response = await fetch(`https://solved.ac/api/v3/user/show?handle=dongmin`);
  let data = await Response.json();
  let count = document.querySelector('#SolvedCount');
  let tier = document.querySelector('#solvedTier');
  let re = document.querySelector('#gitre');
  let st = document.querySelector('#solvedStreak');
  let streak = data.maxStreak
  let calculateTier = await SolvedacTier(data.tier);
  
  if (lang == 1) { // 한국어
    count.innerHTML = `푼 문제 수 <span class='txt-blue'>${data.solvedCount}개</span>`;
  tier.innerHTML = `티어 <span class='txt-blue'>${calculateTier}</span>`;
    st.innerHTML = `최대 스크릭 <span class='txt-blue'>${streak}일</span>`
    re.innerHTML = '깃허브 리포지토리▶';
  } 
  else {
    count.innerHTML = `Solved Problem <span class='txt-blue'>${data.solvedCount}</span>`;
  tier.innerHTML = `Tier <span class='txt-blue'>${calculateTier}</span>`;
    st.innerHTML = `Max Streak <span class='txt-blue'>${streak} Days</span>`
    re.innerHTML = 'Github Repository▶';
  }

  return data;
};

//Description
function de() {
  var beakjoon = document.querySelector('#beab');
  var github = document.querySelector('#gitab');
  var txt = document.querySelector('#de_label');
  var s = document.querySelector('#Skill');
  var tools = document.querySelector('#tools_de');
  var Py = document.querySelector('#Py_de');
  
  if (lang == 0) {
    beakjoon.innerHTML = 'Programming is from Algorithm'
    github.innerHTML = "The code that put 'me'"
    tools.innerHTML = 'My Useful Web Tools'
    Py.innerHTML = 'Things made with Python'
  } else {
    beakjoon.innerHTML = '프로그래밍은 알고리즘으로 부터'
    github.innerHTML = '나를 넣은 코드'
    tools.innerHTML = '유용한 웹 도구'
    Py.innerHTML = '파이썬으로 만든 것들'
  }
  s.innerHTML = ''
  txt.innerHTML = ''
}
function Skill(name) {
  var txt = document.querySelector('#de_label');
  var s = document.querySelector('#Skill');
  
  if (name == 'Python') {
    if (lang == 1) {
      txt.innerHTML = '주로 쓰는 언어입니다. 웬만한건 다 구현 가능합니다.'
    } else {
      txt.innerHTML = 'The language is mainly. Almost anything can be implemented.'
    }
    s.innerHTML = '  Python:'
  }
  
  else if (name == 'Lua') {
     if (lang == 1) {
      txt.innerHTML = "기초는 알며, 일부 플랫폼에서 간단한 게임을 만들기도 하였습니다."
    } else {
      txt.innerHTML = "I know the basics, and I also made several simple games with some plateform"
    }
     s.innerHTML = '  Lua: '
  }
  
  else if (name == 'Web') {
     if (lang == 1) {
      txt.innerHTML = "간단한 반응형 웹 정도는 만들 수 있습니다."
    } else {
      txt.innerHTML = "I can create a simple responsive web."
    }
     s.innerHTML = '  Web(HTML, CSS, JS): '
  }
}

// Account
function MoreAc() {
  let fire = document.querySelector('#ff');
  let dis = document.querySelector('#dc');
  let btn = document.querySelector('#moreAc');

  btn.setAttribute('style', 'display: none');
  dis.setAttribute('style', '');
  fire.setAttribute('style', '');
}
function CopyDiscordID() {
  const $textarea = document.createElement("textarea");
  document.body.appendChild($textarea);
  $textarea.value = 'DM#9596';
  $textarea.select();

  document.execCommand('copy');
  document.body.removeChild($textarea);
  
  if (lang == 1) {
    alert('디스코드 아이디 복사됨!')
  } else {
    alert('Copied Discord ID!')
  }
}
function moreLang() {
   const btn = document.querySelector("#moreAc");
   const github = document.querySelector("#ga");
   const email = document.querySelector("#mail");
   const fire = document.querySelector("#fire");
   const dis = document.querySelector("#dc");
  
   var la = ['<더보기>', '깃허브', '이메일', '파이어폭스', '디스코드']
  
   if (lang == 0) {
     la[0] = '<More>'
     la[1] = 'Github'
     la[2] = 'Email'
     la[3] = 'FireFox'
     la[4] = 'Discord'
   }
   
    btn.src = `https://img.shields.io/badge/${la[0]}-gray?style=flat`
    github.src = `https://img.shields.io/badge/${la[1]}-gray?style=flat&logo=Github&logoColor=white`
    email.src = `https://img.shields.io/badge/${la[2]}-gray?style=flat&logo=Gmail&logoColor=white`
    fire.src = `https://img.shields.io/badge/${la[3]}-gray?style=flat&logo=Firefox+Browser&logoColor=white`
    dis.src = `https://img.shields.io/badge/${la[4]}-gray?style=flat&logo=Discord&logoColor=white`
}

function View() {
  var filter = "win16|win32|win64|mac|macintel";
  var file = document.createElement('link');
  
  file.setAttribute('rel', 'stylesheet')
  file.setAttribute('type', 'text/css')
  
  if ( navigator.platform ) {
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
      file.setAttribute('href', 'mobile.css')
    } else {
      file.setAttribute('href', 'PC.css')
    }
  }
  document.body.appendChild(file);
}  

//onload
window.onload = function(){
   lan()	
   GetSolvedacData();
   abouts();
   de();
   moreLang();
   View();
   //alert(document.location.href)
}
