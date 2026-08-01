const { chromium } = require('./node_modules/playwright-core');
const BASE='http://127.0.0.1:8899', OUT='/home/user/ahiru/store/screenshots';
async function scrollToText(page,needle,offset=-300){return await page.evaluate(({needle,offset})=>{
 const it=document.evaluate(`//*[contains(text(), ${JSON.stringify(needle)})]`,document,null,7,null);
 if(!it.snapshotLength)return false;const el=it.snapshotItem(0);
 const sc=Array.from(document.querySelectorAll('*')).filter(n=>{const s=getComputedStyle(n);return /auto|scroll/.test(s.overflowY)&&n.scrollHeight>n.clientHeight+20;}).sort((a,b)=>(b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0];
 if(!sc)return false;sc.scrollTop+=el.getBoundingClientRect().top-sc.getBoundingClientRect().top+offset;return true;},{needle,offset});}
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--font-render-hinting=none','--force-color-profile=srgb','--hide-scrollbars']});
const c=await b.newContext({viewport:{width:430,height:932},deviceScaleFactor:3,isMobile:true,hasTouch:true,locale:'ja-JP'});
const p=await c.newPage();p.setDefaultTimeout(40000);
const go=async(u,w=2800)=>{await p.goto(BASE+u,{waitUntil:'networkidle'});await p.waitForTimeout(w);};
await go('/takkei');await p.screenshot({path:OUT+'/T1-takkei-top.png'});console.log('T1');
await go('/takkei/text');await p.screenshot({path:OUT+'/T2-takkei-text-index.png'});console.log('T2');
await go('/takkei/text/kenri',3400);await p.screenshot({path:OUT+'/T3-takkei-text-body.png'});console.log('T3');
for(let i=0;i<24;i++){await go('/takkei/gyoho',2000);
 const o=await p.locator('div').filter({hasText:/^[ABCD]$/}).all();if(!o.length)continue;
 await o[i%4].click({force:true});await p.waitForTimeout(1100);
 const t=await p.evaluate(()=>document.body.innerText);
 if(/不正解/.test(t))continue; if(!/図解/.test(t))continue;
 await scrollToText(p,'図解',-300);await p.screenshot({path:OUT+'/T4-takkei-answer.png'});console.log('T4');break;}
await b.close();})();
