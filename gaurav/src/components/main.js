import './Mycss.css';
import img from './data/dl.beatsnoop 1 (1).jpg';
import gogle from './data/Icon-Google.png'

function main() {
 return (
   <div>
     <header>
       <div id='main'>
   <img id="img" src={img} alt='..'/>
   <div id='login'>
<span id='head'>
 Create an account
</span>
<br/>
<br/>
<span id='2'>
<b>Enter your details below</b>
</span>
<br/>
<input type='text' placeholder='Name'/><br/>
<input type='text' placeholder='Email or Phone Number'/><br/>
<input type='text' placeholder='Password'/>
<br/>
<button type='button' onClick=".." id='b1'><b>Create Account</b></button>
<br/><br/>
<button type='button' onClick=".." id='b2'><img src={gogle} alt='..'/><b id='t'>Sign up with Google</b></button>
<br/> <br/>
<span id='log'>
Already have account?
</span>
<span id='log2'>
Log in  
</span>
   </div>
   </div>
   </header>
   </div>
 );
}

export default main;