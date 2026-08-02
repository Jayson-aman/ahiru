require('ts-node').register({ transpileOnly: true, skipProject: true, compilerOptions: { module:'commonjs', target:'es2020', esModuleInterop:true, moduleResolution:'node', ignoreDeprecations:'6.0' } });
const m = require('/home/user/ahiru/data/takkei_questions');
const arr = Object.values(m).find(v => Array.isArray(v) && v.length && v[0] && v[0].choices);
const NEG=/^(誤り|誤っ|不適当|不適切|不正確|適当でない|適切でない|妥当でない|正しくない)/, POS=/^(正しい|適当|適切|妥当)/;
const mk=e=>{const t=String(e||'').trim(); return NEG.test(t)?'x':POS.test(t)?'o':null;};
for (const id of ['tk-zei-207','tk-zei-211','tk-zei-224']) {
  const q = arr.find(x => x.id === id);
  const want = /誤っ|誤りな|不適当|不適切|適当でない|適切でない|妥当でない|正しくない/.test(q.question)?'x':'o';
  console.log('══', id, `(want=${want})`, '|', q.question.slice(0,70));
  for (const c of q.choices) if (mk(c.explanation)===want) console.log(`  ${c.key}${c.key===q.correctKey?'★正解':'  重複'} ${c.text.slice(0,62)}\n      → ${String(c.explanation).slice(0,90)}`);
}
