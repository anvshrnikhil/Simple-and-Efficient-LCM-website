
function noofelements()
{
  num=document.URL.indexOf('?');
  if(num>-1)
  {
    var pairs=document.URL.substring(num+1,document.URL.length).split('&');
    nameVal=pairs[0].split('=');
    return nameVal[1]-0;
  }
  return 0;
}

function createElements()
{
  num=noofelements();
    for(itr=0;itr<num;itr++)
    {
      var inp=document.createElement("input");
      var att=document.createAttribute("id");
      att.value="input_style"+itr.toString();
      inp.setAttributeNode(att);
      inp.style.margin="5px";
      inp.size="10";
      inp.style.textAlign="center";
      inp.type="number";
      ele=document.getElementById("div1");
      ele.appendChild(inp);
    }
}

function getNumbers()
{

  var noofele=noofelements();
  var arr = new Array(noofele);
  for(itr=0;itr<noofele;itr++)
  {
    arr[itr]=document.getElementById("input_style"+itr.toString()).value-0;
  }
  return arr;
}


function calculateLCM()
{
  arr=getNumbers();
  while(true)
  {
    if(arr.length!=0){
      a=arr[arr.length-1];
      arr.pop();
    }else{
      a=0;
      break;
    }
    if(arr.length!=0)
    {
      b=arr[arr.length-1];
      arr.pop();
    }else{
      break;
    }
    lcm=a*b/GCD_OfTwoNumbers(a,b);
    arr.push(lcm);
  }
  return a;
}

function GCD_OfTwoNumbers(a , b)
{
  while(a%b!=0)
  {
    rem=a%b;
    a=b;
    b=rem;
  }
  return b;
}


function getResult()
{
  var res=calculateLCM();
  document.getElementById('output').innerHTML="LCM : "+res.toString();
}
