const I={};
const P=[["p1","ไฟล์ดูดหัว 50% แอนดรอยด์",50,"1"],["p2","ไฟล์ดูดหัว 60% แอนดรอยด์",100,46],["p3","ไฟล์ดูดหัว 70% แอนดรอยด์",150,45],["p4","ไฟล์ดูดหัว 80% แอนดรอยด์",200,42],["p5","ไฟล์ดูดหัว 90% แอนดรอยด์",250,43],["p6","ไฟล์ดูดหัว 99% แอนดรอยด์",300,35],["p7","ตั้งค่าดูดหัว จอไว ล็อคหัว โห…",59,32],["p8","ตั้งค่าดูดหัว Marshall Andr…",59,49],["p9","ตั้งค่ามือถือ Protex X9 And…",59,46],["p10","ตั้งค่ามือถือ K2G Android",59,45]];
const PH='<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/></svg>';
const CHK='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l1 12H4z"/><path d="M9 8V7a3 3 0 016 0v1"/><path d="M9 14l2 2 4-4"/></svg>';
const CART='<svg viewBox="0 0 24 24" width="15" height="15" style="vertical-align:-3px;margin-left:3px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h3l2.5 12h11L21 7H6"/><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/></svg>';
const box='<svg viewBox="0 0 24 24" width="14" height="14" style="vertical-align:-2px;margin-right:4px" fill="#9a918b"><path d="M3 5h14v4H3zM4 10h12v8H4z"/><circle cx="18" cy="18" r="4" fill="#7a7370"/></svg>';
const card=p=>`<div class="card pc"><div class="pi"><div class="ph">${PH}</div></div><div class="pr">0</div><button class="buy" data-v="order" data-m="${p[0]}">สั่งซื้อ ${CART}</button><div class="sk"><span>${CHK}ขายแล้ว <b>${p[4]??'–'}</b></span><span>${box}เหลือ <b>${p[3]}</b></span></div>${p[4]!=null?`<div class="bar"><i style="width:${Math.round(p[4]/(p[4]+ +p[3])*100)}%"></i></div>`:''}</div>`;
const cats=[["c1","Android",'0 หมวดหมู่ · 7 สินค้า',"50 - 300"],["c2","IPhone",'0 หมวดหมู่ · 3 สินค้า',"60 - 200"],["c3","MODSKIN",'0 หมวดหมู่ · 16 สินค้า',"25"],["c4","Setting FF","",""]];
const CATP={c1:["p1","p2","p3","p4","p5","p6","p7"],c2:[],c3:[],c4:[]}; // รหัสสินค้าในแต่ละหมวด — แก้ให้ตรงของร้านจริง
const cat=(c,i)=>`<a href="#" class="card cat" data-v="cat" data-m="${c[0]}" data-n="${c[1].toLowerCase()}" data-i="${i}"><div class="ph">${PH}</div><div class="ct"><h3>${c[1]}</h3><span class="cn">${c[2]}</span><span class="pr2">${c[3]}</span></div></a>`;
const orders=[["va****Ey","23:10 27/10/2026"],["Vz****56","17:04 28/10/2026"],["Rk****09","09:35 28/10/2026"]];
const bag='<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5zM9 8a3 3 0 016 0" fill="none" stroke="#fff" stroke-width="0"/></svg>';
const BI=[
'<path d="M3 8h7l6 26h28l5-19H13"/><path d="M16 18h34M18 26h30M24 15l2 19M33 15l1 19M42 15l-1 19"/><circle cx="22" cy="44" r="4"/><circle cx="42" cy="44" r="4"/>',
'<rect x="6" y="16" width="44" height="30" rx="6"/><path d="M12 16l32-9 4 9"/><circle cx="40" cy="31" r="4"/><circle cx="14" cy="46" r="9" fill="#2d231b"/><path d="M14 41v10M9 46h10"/>',
'<path d="M12 26l11-17M48 26L37 9M4 26h52l-5 26H9z"/><path d="M20 34v12M30 34v12M40 34v12"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><path d="M41 46l4 4 6-8"/>',
'<circle cx="26" cy="16" r="10"/><path d="M6 54c0-14 8-22 20-22s20 8 20 22"/><circle cx="46" cy="44" r="8" fill="#2d231b"/><circle cx="46" cy="44" r="3"/>'];
const BT=[["เลือกดูสินค้า","คลิก","list"],["เติมเงินเข้าเว็บ","คลิก","topup"],["ประวัติการซื้อ","สินค้า","hist"],["ติดต่อแอดมิน","คลิก","contact"]];
const btns=()=>BT.map((b,i)=>`<a href="#" class="bt"${b[2]?` data-v="${b[2]}"`:''}><svg viewBox="0 0 60 60">${BI[i]}</svg><span class="t"><span class="t1">${b[0]}</span><span class="t2">${b[1]}</span></span></a>`).join('');
const FI={u:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',e:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',p:'<rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 018 0v3"/>'};
const EYE='<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const fd=(n,ty,l,ic,ac,eye,v)=>`<div class="fd"><svg class="fi" viewBox="0 0 24 24">${FI[ic]}</svg><input name="${n}" type="${ty}" placeholder=" " autocomplete="${ac}" autocapitalize="off" autocorrect="off" spellcheck="false" value="${v||''}" required><span class="fl">${l}</span>${eye?`<button type="button" class="eye" aria-label="show">${EYE}</button>`:''}</div>`;
const fh=m=>{const rg=m==='register';return `${fd('u','text','ชื่อผู้ใช้','u','username',0,rg?'':(xlg('gx_user')||'').replace(/[^\w]/g,''))}${fd('p','password','รหัสผ่าน','p',rg?'new-password':'current-password',1)}${rg?fd('c','password','ยืนยันรหัสผ่าน','p','new-password',1):''}
${rg?'<div class="ar"><label class="ck"><input type="checkbox" name="t">ฉันยอมรับข้อกำหนดการใช้งาน</label></div>':`<div class="ar"><label class="ck"><input type="checkbox" name="r"${xlg('gx_rm')!=='0'?' checked':''}>จดจำฉันไว้</label><a href="#" class="lk" data-f="1">ลืมรหัสผ่าน?</a></div>`}
<div class="er" id="er" role="alert"></div><button class="sb" type="submit">${rg?'สมัครสมาชิก':'เข้าสู่ระบบ'}</button>
<div class="dv">หรือ</div><div class="sw">${rg?'มีบัญชีอยู่แล้ว?':'ยังไม่มีบัญชี?'}<a href="#" class="lk" data-a="${rg?'login':'register'}">${rg?'เข้าสู่ระบบ':'สมัครสมาชิก'}</a></div>`};
const views={
home:()=>`<div class="ph hero" role="img" aria-label="GXROZSHOP">${PH}</div>
<div class="stats"><div class="sc"><span class="fr"><span class="in"><span class="lb">ผู้ใช้งาน</span><span class="nm">0<i>คน</i></span><span class="tr"></span><span class="bd"><span><svg viewBox="0 0 60 60"><circle cx="30" cy="19" r="10"/><path d="M9 53c0-13 8-19 21-19s21 6 21 19"/></svg></span></span></span></span></div><div class="sc"><span class="fr"><span class="in"><span class="lb">สต็อก</span><span class="nm">0<i>ชิ้น</i></span><span class="tr"></span><span class="bd"><span><svg viewBox="0 0 60 60"><path d="M6 17L30 6l24 11v26L30 54 6 43z"/><path d="M6 17l24 11 24-11M30 28v26"/></svg></span></span></span></span></div><div class="sc w"><span class="fr"><span class="in"><span class="lb">ยอดขาย</span><span class="nm">0<i>ครั้ง</i></span><span class="tr"></span><span class="bd"><span><svg viewBox="0 0 60 60"><path d="M10 21h40l3 32H7z"/><path d="M20 21v-4a10 10 0 0120 0v4"/><path d="M20 36l7 7 14-12"/></svg></span></span></span></span></div></div>
<div class="btns">${btns()}</div>
<div class="sec"><h2>รายการสั่งซื้อล่าสุด</h2><p>รายการสินค้าที่เพิ่งถูกสั่งซื้อ</p></div>
<div class="row"><div class="trk">${[...orders,...orders].map(o=>`<div class="card od"><div class="ph">${PH}</div><div><b>${o[0]}</b><span>ไฟล์ดูดหัว 50% แอนดรอยด์</span><em>${o[1]}</em></div></div>`).join('')}</div></div>
<div class="sh"><svg viewBox="0 0 24 24"><path d="M4 5h16v16H4zM7 2h2v4H7zM15 2h2v4h-2z"/></svg><div><h2>ขายดีประจำสัปดาห์</h2><p>สินค้าขายดีที่ลูกค้าเลือกมากที่สุด</p></div><button class="pill" data-v="list">ดูทั้งหมด</button></div>
<div class="grid">${card(P[0])}${card(P[6])}</div>
<div class="sh"><svg viewBox="0 0 24 24"><path d="M3 10h18l-2 11H5zM8 9l3-6M16 9l-3-6" stroke="#2f5be0" stroke-width="2"/></svg><div><h2>รายการสินค้า</h2><p>สินค้าแนะนำสำหรับคุณ</p></div></div>
<div class="cats">${cats.map(cat).join('')}</div><div class="grid">${P.map(card).join('')}</div>`,
auth:(m)=>{m=m||'login';const rg=m==='register';return `<div class="au"><div class="ah"><div class="alg"><svg viewBox="0 0 24 24">${FI.u}</svg></div><h2>GXROZSHOP</h2><p id="ahp">${rg?'สร้างบัญชีใหม่':'ยินดีต้อนรับกลับมา'}</p></div>
<div class="tabs" data-m="${m}"><span class="ind"></span><button data-a="login" class="${rg?'':'on'}">เข้าสู่ระบบ</button><button data-a="register" class="${rg?'on':''}">สมัครสมาชิก</button></div>
<form class="af" id="af" data-m="${m}" novalidate>${fh(m)}</form></div>`},
list:()=>`<div class="bc">หน้าหลัก &nbsp;/&nbsp; รายการสินค้า</div><div class="sr"><label class="sr-w"><input class="sr-in" type="search" placeholder="ค้นหาหมวดหมู่..." autocomplete="off" enterkeyhint="search"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"/><path d="M15 15l6 6"/></svg></label><button class="sr-sort" type="button" aria-label="ตัวกรอง"><svg viewBox="0 0 24 24" style="margin:auto;display:block"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button></div><div class="cats" id="catl">${cats.slice(0,3).map(cat).join('')}</div><div class="hs-em sr-none" hidden>ไม่พบหมวดหมู่</div>`,
cat:(m)=>{const c=cats.find(x=>x[0]===m)||cats[0],ids=CATP[c[0]]||[],ps=ids.map(id=>P.find(x=>x[0]===id)).filter(Boolean);return `<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; <a href="#" data-v="list">รายการสินค้า</a> &nbsp;/&nbsp; ${c[1]}</div><h1 class="tp-h">${c[1]}</h1>${ps.length?`<div class="grid">${ps.map(card).join('')}</div>`:hsEmpty}`},
topup:()=>`${(tpA=0,'')}<h1 class="tp-h">เติมเงิน</h1>
<div class="tp-fr tp-cut"><div class="tp-in tp-cut"><div class="tp-lb">กรอกจำนวนเงินที่ต้องการเติม</div><div class="tp-amtw"><input class="tp-amt" type="text" inputmode="numeric" placeholder="0" autocomplete="off"><span>กีบ</span></div><div class="tp-hint">ขั้นต่ำ 10,000 กีบ</div></div></div>
<div class="tp-card"><h2>เลือกจำนวนเงิน</h2><div class="tp-chips">${TPV.map(v=>`<button class="tp-chip" data-tp="${v}">${tpf(v)} กีบ</button>`).join('')}</div></div>
<div class="tp-card"><h2>วิธีเติมเงินผ่านการโอน QR</h2><ol class="tp-steps"><li><span>กรอกหรือเลือกจำนวนเงิน แล้วกดปุ่ม <b>โอนเงิน</b></span></li><li><span>จะมี <b>QR Code ของร้าน</b> แสดงขึ้นมา กดบันทึกภาพหน้าจอ</span></li><li><span>เปิดแอปธนาคาร เลือก <b>สแกน QR</b> แล้วโอนตามยอดที่ระบุ</span></li><li><span><b>แนบสลิป</b>การโอน แล้วกดยืนยัน รอแอดมินตรวจสอบและเติมยอดให้</span></li></ol></div>
<button class="tp-cta" id="tpgo" disabled>โอนเงิน</button>`,
hist:()=>hsPage('','ประวัติ',`<div class="btns"><a href="#" class="bt" data-v="hist-topup"><svg viewBox="0 0 60 60"><rect x="6" y="14" width="46" height="34" rx="6"/><path d="M6 24h46M38 36h8"/></svg><span class="t"><span class="t1">ดูประวัติเติมเงิน</span><span class="t2">คลิก</span></span></a><a href="#" class="bt" data-v="hist-order"><svg viewBox="0 0 60 60"><path d="M10 20h40l3 32H7z"/><path d="M20 20v-4a10 10 0 0120 0v4"/></svg><span class="t"><span class="t1">ดูประวัติสั่งซื้อ</span><span class="t2">คลิก</span></span></a><a href="#" class="bt" data-v="hist-log"><svg viewBox="0 0 60 60"><path d="M16 6h28v48L30 42 16 54z"/></svg><span class="t"><span class="t1">ดูบันทึกสินค้า</span><span class="t2">คลิก</span></span></a><a href="#" class="bt" data-v="hist-fav"><svg viewBox="0 0 60 60"><path d="M30 8l7 15 16 2-12 11 3 16-14-8-14 8 3-16L7 25l16-2z"/></svg><span class="t"><span class="t1">สินค้าซื้อบ่อย</span><span class="t2">คลิก</span></span></a></div>`),
'hist-topup':()=>hsPage('ดูประวัติเติมเงิน','ดูประวัติเติมเงิน',TPH.map(x=>hsRow(HSI.w,'เติมเงินผ่าน QR',x.t,'+'+tpf(x.a)+' กีบ',x.s)).join('')||hsEmpty),
'hist-order':()=>hsPage('ดูประวัติสั่งซื้อ','ดูประวัติสั่งซื้อ',HSO.map(o=>hsRow(HSI.b,o[0],o[2],'-'+tpf(o[1])+' กีบ','ok')).join('')||hsEmpty),
'hist-log':()=>hsPage('ดูบันทึกสินค้า','ดูบันทึกสินค้า',HSL.length?`<div class="grid">${HSL.map(i=>card(P[i])).join('')}</div>`:hsEmpty),
'hist-fav':()=>hsPage('สินค้าซื้อบ่อย','สินค้าซื้อบ่อย',HSF.length?`<div class="grid">${HSF.map(([i,n])=>`<div class="hs-w"><span class="hs-b">ซื้อแล้ว ${n} ครั้ง</span>${card(P[i])}</div>`).join('')}</div>`:hsEmpty),
contact:()=>`<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; ติดต่อแอดมิน</div><h1 class="tp-h">ติดต่อแอดมิน</h1><div class="ct-on"><i></i><span>แอดมินตอบกลับเร็ว ทุกวัน 09:00 - 22:00</span></div>${CTS.map((c,i)=>`<a class="tp-card ct-c" style="animation-delay:${i*90}ms" href="#" data-v="contact-d" data-m="${i}"><span class="ct-ic" style="background:${c[4]}"><svg viewBox="0 0 24 24">${c[3]}</svg></span><span class="ct-m"><b>${c[0]}</b><small>${c[1]}</small></span><span class="ct-go"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></span></a>`).join('')}`,
'contact-d':(m)=>{const c=CTS[+m]||CTS[0];return `<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; <a href="#" data-v="contact">ติดต่อแอดมิน</a> &nbsp;/&nbsp; ${c[0]}</div>
<div class="ct-cv tp-cut" style="--cc:${c[4]}">${c[7]?`<img src="${c[7]}" alt="">`:`<svg viewBox="0 0 24 24">${c[3]}</svg>`}</div>
<div class="ct-hd"><span class="ct-ic" style="background:${c[4]}"><svg viewBox="0 0 24 24">${c[3]}</svg></span><span class="ct-m"><b>${c[0]}</b><small>${c[1]}</small></span><button class="ct-cp" data-cp="${c[1]}">คัดลอก</button></div>
<div class="tp-card"><h2>เกี่ยวกับช่องทางนี้</h2><p class="ct-p">${c[5]}</p></div>
<div class="tp-card"><h2>ใช้ช่องทางนี้เมื่อ</h2><ul class="ct-ul">${c[6].map(x=>`<li><span>${x}</span></li>`).join('')}</ul></div>
<a class="tp-cta ct-go2" href="${c[2]}" target="_blank" rel="noopener">${c[2].startsWith('tel:')?'โทรหาแอดมิน':'ติดต่อผ่าน '+c[0]}</a>`},
order:(m)=>{const p=P.find(x=>x[0]===m)||P[0];ORP=p;ORQ=1;ORO=0;ORX=POPT[p[0]]||OPT;return `<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; ยืนยันสั่งซื้อ</div><h1 class="tp-h">ยืนยันสั่งซื้อ</h1>
<div class="tp-card or-pd"><div class="ph or-img">${PIMG[p[0]]?`<img src="${PIMG[p[0]]}" alt="">`:PH}</div><div class="or-i"><b>${p[1]}</b><small>เหลือ ${p[3]} ชิ้น</small><strong class="or-pp"></strong></div></div>
<div class="tp-card"><h2>เลือกแพ็กเกจ</h2><div class="or-ops">${ORX.map((o,i)=>{const sv=Math.round((1-o.k/o.n)*100);return `<button class="or-op${i?'':' on'}" data-i="${i}">${sv>0?`<span class="sv">ประหยัด ${sv}%</span>`:''}<span class="ck"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4 8-9"/></svg></span><span class="n">${o.n}</span><span class="u">${o.u}</span><span class="p">${tpf(orPr(p,o))} กีบ</span></button>`}).join('')}</div></div>
<div class="tp-card or-qt"><h2>จำนวน</h2><div class="or-st"><button class="or-m" aria-label="-">−</button><span class="or-q">1</span><button class="or-p" aria-label="+">+</button></div></div>
<div class="tp-fr tp-cut"><div class="tp-in tp-cut"><div class="tp-lb">ยอดที่ต้องชำระ</div><div class="or-tot">0<small>กีบ</small></div>
<div class="or-sm"><div class="or-r"><span>แพ็กเกจ</span><b class="or-pk"></b></div><div class="or-r"><span>ราคาต่อชิ้น</span><b class="or-un"></b></div><div class="or-r"><span>จำนวน</span><b class="or-rq">1</b></div><div class="or-r"><span>ยอดเงินของคุณ</span><b class="or-bal"></b></div><div class="or-r"><span>คงเหลือหลังซื้อ</span><b class="or-aft"></b></div></div></div></div>
<div class="or-warn">ยอดเงินไม่พอ กรุณาเติมเงินก่อนสั่งซื้อ</div>
<p class="or-nt">ตรวจสอบรายการให้ถูกต้องก่อนกดยืนยัน</p>
<button class="tp-cta" id="ordgo">ยืนยันสั่งซื้อ</button>${(setTimeout(orUpd),'')}`}
};
const LO={"ห้องแอดมิน":"ຫ້ອງແອດມິນ","แอดมิน":"ແອດມິນ","สมาชิก":"ສະມາຊິກ","กรุณาเข้าสู่ระบบก่อน":"ກະລຸນາເຂົ້າສູ່ລະບົບກ່ອນ","ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง":"ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ","ชื่อผู้ใช้นี้ถูกใช้แล้ว":"ຊື່ຜູ້ໃຊ້ນີ້ຖືກໃຊ້ແລ້ວ","ชื่อผู้ใช้ 3-20 ตัว ใช้ a-z 0-9 _ เท่านั้น":"ຊື່ຜູ້ໃຊ້ 3-20 ຕົວ ໃຊ້ a-z 0-9 _ ເທົ່ານັ້ນ","กำลังดำเนินการ...":"ກຳລັງດຳເນີນການ...","เข้าสู่ระบบสำเร็จ":"ເຂົ້າສູ່ລະບົບສຳເລັດ","สมัครสมาชิกสำเร็จ":"ສະໝັກສະມາຊິກສຳເລັດ","ออกจากระบบแล้ว":"ອອກຈາກລະບົບແລ້ວ","ออกจากระบบ":"ອອກຈາກລະບົບ","บัญชีของฉัน":"ບັນຊີຂອງຂ້ອຍ","ยอดเงิน ":"ຍອດເງິນ ","แอดมิน · ":"ແອດມິນ · ","ลืมรหัสผ่าน? ติดต่อแอดมินเพื่อรีเซ็ต":"ລືມລະຫັດຜ່ານ? ຕິດຕໍ່ແອດມິນເພື່ອຣີເຊັດ","สมัครไม่สำเร็จ ลองชื่อผู้ใช้อื่น":"ສະໝັກບໍ່ສຳເລັດ ລອງຊື່ຜູ້ໃຊ້ອື່ນ","เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง":"ເຊື່ອມຕໍ່ບໍ່ໄດ້ ລອງໃໝ່ອີກຄັ້ງ","เกิดข้อผิดพลาด ลองใหม่อีกครั้ง":"ເກີດຂໍ້ຜິດພາດ ລອງໃໝ່ອີກຄັ້ງ","ไม่พบหมวดหมู่":"ບໍ່ພົບໝວດໝູ່","เรียงตามชื่อ A-Z":"ຮຽງຕາມຊື່ A-Z","เรียงตามชื่อ Z-A":"ຮຽງຕາມຊື່ Z-A","เรียงตามค่าเริ่มต้น":"ຮຽງຕາມຄ່າເລີ່ມຕົ້ນ","เลือกแพ็กเกจ":"ເລືອກແພັກເກັດ","แพ็กเกจ":"ແພັກເກັດ","ประหยัด":"ປະຫຍັດ","วัน":"ວັນ","ยืนยันสั่งซื้อ":"ຢືນຢັນສັ່ງຊື້","จำนวน":"ຈຳນວນ","ราคาต่อชิ้น":"ລາຄາຕໍ່ຊິ້ນ","ยอดที่ต้องชำระ":"ຍອດທີ່ຕ້ອງຊຳລະ","ยอดเงินของคุณ":"ຍອດເງິນຂອງທ່ານ","คงเหลือหลังซื้อ":"ຍັງເຫຼືອຫຼັງຊື້","ยอดเงินคงเหลือ":"ຍອດເງິນຄົງເຫຼືອ","ยอดเงินไม่พอ กรุณาเติมเงินก่อนสั่งซื้อ":"ຍອດເງິນບໍ່ພໍ ກະລຸນາເຕີມເງິນກ່ອນສັ່ງຊື້","เติมเงินก่อนสั่งซื้อ":"ເຕີມເງິນກ່ອນສັ່ງຊື້","ตรวจสอบรายการให้ถูกต้องก่อนกดยืนยัน":"ກວດສອບລາຍການໃຫ້ຖືກຕ້ອງກ່ອນກົດຢືນຢັນ","กำลังสั่งซื้อ...":"ກຳລັງສັ່ງຊື້...","สั่งซื้อสำเร็จ":"ສັ່ງຊື້ສຳເລັດ","เลขที่คำสั่งซื้อ":"ເລກທີ່ຄຳສັ່ງຊື້","ดูสินค้าที่ซื้อได้ในประวัติการสั่งซื้อ":"ເບິ່ງສິນຄ້າທີ່ຊື້ໄດ້ໃນປະຫວັດການສັ່ງຊື້","ยอดชำระ":"ຍອດຊຳລະ","กลับหน้าหลัก":"ກັບໜ້າຫຼັກ","สินค้าหมด":"ສິນຄ້າໝົດ","ชิ้น":"ຊິ້ນ","สินค้า":"ສິນຄ້າ","ช่องทางหลักของร้าน ใช้ติดตามข่าวสาร โปรโมชั่น และแจ้งปัญหาทั่วไป พร้อมแนบรูปหรือสลิปได้สะดวก":"ຊ່ອງທາງຫຼັກຂອງຮ້ານ ໃຊ້ຕິດຕາມຂ່າວສານ ໂປຣໂມຊັນ ແລະ ແຈ້ງບັນຫາທົ່ວໄປ ພ້ອມແນບຮູບ ຫຼື ສະລິບໄດ້ສະດວກ","เหมาะกับเรื่องด่วนที่ต้องการคำตอบเร็ว แอดมินตอบกลับไวที่สุดในช่องทางนี้":"ເໝາະກັບເລື່ອງດ່ວນທີ່ຕ້ອງການຄຳຕອບໄວ ແອດມິນຕອບກັບໄວທີ່ສຸດໃນຊ່ອງທາງນີ້","ใช้รับไฟล์และอัปเดตสินค้าใหม่ๆ รวมถึงแจ้งปัญหาเรื่องไฟล์ขนาดใหญ่":"ໃຊ້ຮັບໄຟລ໌ ແລະ ອັບເດດສິນຄ້າໃໝ່ໆ ລວມທັງແຈ້ງບັນຫາເລື່ອງໄຟລ໌ຂະໜາດໃຫຍ່","โทรคุยกับแอดมินโดยตรง เหมาะกับปัญหาที่อธิบายยาก หรือเรื่องบัญชีและการเงิน":"ໂທລົມກັບແອດມິນໂດຍກົງ ເໝາະກັບບັນຫາທີ່ອະທິບາຍຍາກ ຫຼື ເລື່ອງບັນຊີ ແລະ ການເງິນ","สอบถามสินค้าและราคา":"ສອບຖາມສິນຄ້າ ແລະ ລາຄາ","ติดตามโปรโมชั่นและข่าวสารร้าน":"ຕິດຕາມໂປຣໂມຊັນ ແລະ ຂ່າວສານຮ້ານ","ส่งรูปหรือวิดีโอปัญหาการใช้งาน":"ສົ່ງຮູບ ຫຼື ວິດີໂອບັນຫາການໃຊ້ງານ","เติมเงินแล้วยอดยังไม่เข้า (ส่งสลิปมาด้วย)":"ເຕີມເງິນແລ້ວຍອດຍັງບໍ່ເຂົ້າ (ສົ່ງສະລິບມາດ້ວຍ)","สินค้าที่ซื้อมีปัญหาหรือใช้งานไม่ได้":"ສິນຄ້າທີ່ຊື້ມີບັນຫາ ຫຼື ໃຊ້ງານບໍ່ໄດ້","ต้องการความช่วยเหลือเร่งด่วน":"ຕ້ອງການຄວາມຊ່ວຍເຫຼືອດ່ວນ","ขอรับไฟล์หรือสินค้าซ้ำ":"ຂໍຮັບໄຟລ໌ ຫຼື ສິນຄ້າຄືນໃໝ່","ติดตามอัปเดตสินค้าใหม่":"ຕິດຕາມອັບເດດສິນຄ້າໃໝ່","ส่งไฟล์ขนาดใหญ่ให้แอดมินตรวจสอบ":"ສົ່ງໄຟລ໌ຂະໜາດໃຫຍ່ໃຫ້ແອດມິນກວດສອບ","ปัญหาบัญชีหรือเข้าสู่ระบบไม่ได้":"ບັນຫາບັນຊີ ຫຼື ເຂົ້າສູ່ລະບົບບໍ່ໄດ້","ปัญหาการเงินที่ต้องยืนยันตัวตน":"ບັນຫາການເງິນທີ່ຕ້ອງຢືນຢັນຕົວຕົນ","ต้องการคุยกับแอดมินโดยตรง":"ຕ້ອງການລົມກັບແອດມິນໂດຍກົງ","ใช้ช่องทางนี้เมื่อ":"ໃຊ້ຊ່ອງທາງນີ້ເມື່ອ","เกี่ยวกับช่องทางนี้":"ກ່ຽວກັບຊ່ອງທາງນີ້","ติดต่อผ่าน":"ຕິດຕໍ່ຜ່ານ","โทรหาแอดมิน":"ໂທຫາແອດມິນ","คัดลอกแล้ว":"ຄັດລອກແລ້ວ","คัดลอก":"ຄັດລອກ","ติดต่อแอดมิน":"ຕິດຕໍ່ແອດມິນ","แอดมินตอบกลับเร็ว ทุกวัน":"ແອດມິນຕອບກັບໄວ ທຸກວັນ","โทรศัพท์":"ໂທລະສັບ","ประวัติการซื้อ":"ປະຫວັດການຊື້","ดูประวัติเติมเงิน":"ເບິ່ງປະຫວັດເຕີມເງິນ","ดูประวัติสั่งซื้อ":"ເບິ່ງປະຫວັດສັ່ງຊື້","ดูบันทึกสินค้า":"ເບິ່ງບັນທຶກສິນຄ້າ","สินค้าซื้อบ่อย":"ສິນຄ້າຊື້ເລື້ອຍໆ","ประวัติ":"ປະຫວັດ","เติมเงินผ่าน QR":"ເຕີມເງິນຜ່ານ QR","สำเร็จ":"ສຳເລັດ","รอตรวจสอบ":"ລໍກວດສອບ","ไม่สำเร็จ":"ບໍ່ສຳເລັດ","ยังไม่มีรายการ":"ຍັງບໍ່ມີລາຍການ","ซื้อแล้ว":"ຊື້ແລ້ວ","ครั้ง":"ຄັ້ງ","กีบ":"ກີບ","กรอกจำนวนเงินที่ต้องการเติม":"ຕື່ມຈຳນວນເງິນທີ່ຕ້ອງການເຕີມ","เลือกจำนวนเงิน":"ເລືອກຈຳນວນເງິນ","วิธีเติมเงินผ่านการโอน QR":"ວິທີເຕີມເງິນຜ່ານການໂອນ QR","กรอกหรือเลือกจำนวนเงิน แล้วกดปุ่ม ":"ຕື່ມ ຫຼື ເລືອກຈຳນວນເງິນ ແລ້ວກົດປຸ່ມ ","จะมี ":"ຈະມີ ","QR Code ของร้าน":"QR Code ຂອງຮ້ານ"," แสดงขึ้นมา กดบันทึกภาพหน้าจอ":" ສະແດງຂຶ້ນມາ ກົດບັນທຶກພາບໜ້າຈໍ","เปิดแอปธนาคาร เลือก ":"ເປີດແອັບທະນາຄານ ເລືອກ ","สแกนเพื่อโอนเงิน":"ສະແກນເພື່ອໂອນເງິນ","สแกน QR":"ສະແກນ QR"," แล้วโอนตามยอดที่ระบุ":" ແລ້ວໂອນຕາມຍອດທີ່ລະບຸ","แนบสลิป":"ແນບສະລິບ","การโอน แล้วกดยืนยัน รอแอดมินตรวจสอบและเติมยอดให้":"ການໂອນ ແລ້ວກົດຢືນຢັນ ລໍຖ້າແອດມິນກວດສອບ ແລະ ເຕີມຍອດໃຫ້","โอนตามยอดให้ตรง แล้วแนบสลิปด้านล่าง":"ໂອນຕາມຍອດໃຫ້ຖືກຕ້ອງ ແລ້ວແນບສະລິບດ້ານລຸ່ມ","แตะเพื่อแนบสลิปการโอน":"ແຕະເພື່ອແນບສະລິບການໂອນ","ยืนยันการเติมเงิน":"ຢືນຢັນການເຕີມເງິນ","เติมเงินเข้าเว็บ":"ເຕີມເງິນເຂົ້າເວັບ","เติมเงิน":"ເຕີມເງິນ","โอนเงิน":"ໂອນເງິນ","ขั้นต่ำ":"ຂັ້ນຕ່ຳ","บาท":"ບາດ","สูงสุด":"ສູງສຸດ","ต่อครั้ง":"ຕໍ່ຄັ້ງ","ยอดเติม":"ຍອດເຕີມ","ไฟล์ใหญ่เกิน":"ໄຟລ໌ໃຫຍ່ເກີນ","รอแอดมินตรวจสอบสลิป":"ລໍແອດມິນກວດສອບສະລິບ","กำลังส่ง...":"ກຳລັງສົ່ງ...","ส่งคำขอเรียบร้อย":"ສົ່ງຄຳຂໍຮຽບຮ້ອຍ","ตกลง":"ຕົກລົງ","ยินดีต้อนรับกลับมา":"ຍິນດີຕ້ອນຮັບກັບມາ","สร้างบัญชีใหม่":"ສ້າງບັນຊີໃໝ່","ชื่อผู้ใช้":"ຊື່ຜູ້ໃຊ້","อีเมลไม่ถูกต้อง":"ອີເມວບໍ່ຖືກຕ້ອງ","อีเมล":"ອີເມວ","ยืนยันรหัสผ่าน":"ຢືນຢັນລະຫັດຜ່ານ","ลืมรหัสผ่าน?":"ລືມລະຫັດຜ່ານ?","รหัสผ่านอย่างน้อย 6 ตัวอักษร":"ລະຫັດຜ່ານຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ","รหัสผ่านไม่ตรงกัน":"ລະຫັດຜ່ານບໍ່ກົງກັນ","รหัสผ่าน":"ລະຫັດຜ່ານ","จดจำฉันไว้":"ຈື່ຂ້ອຍໄວ້","ฉันยอมรับข้อกำหนดการใช้งาน":"ຂ້ອຍຍອມຮັບເງື່ອນໄຂການນຳໃຊ້","กรุณายอมรับข้อกำหนด":"ກະລຸນາຍອມຮັບເງື່ອນໄຂ","กรุณากรอกข้อมูลให้ครบ":"ກະລຸນາຕື່ມຂໍ້ມູນໃຫ້ຄົບ","ข้อมูลถูกต้อง (ยังไม่ได้เชื่อมต่อระบบหลังบ้าน)":"ຂໍ້ມູນຖືກຕ້ອງ (ຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່ລະບົບຫຼັງບ້ານ)","มีบัญชีอยู่แล้ว?":"ມີບັນຊີຢູ່ແລ້ວ?","ยังไม่มีบัญชี?":"ຍັງບໍ່ມີບັນຊີ?","หรือ":"ຫຼື","ขายแล้ว":"ຂາຍແລ້ວ","เหลือ":"ເຫຼືອ","เข้าสู่ระบบ / สมัครสมาชิก":"ເຂົ້າສູ່ລະບົບ / ສະໝັກສະມາຊິກ","เข้าสู่ระบบ":"ເຂົ້າສູ່ລະບົບ","สมัครสมาชิก":"ສະໝັກສະມາຊິກ","เมนู":"ເມນູ","หน้าหลัก":"ໜ້າຫຼັກ","รายการสินค้าที่เพิ่งถูกสั่งซื้อ":"ລາຍການສິນຄ້າທີ່ຖືກສັ່ງຊື້ເມື່ອບໍ່ດົນມານີ້","รายการสั่งซื้อล่าสุด":"ລາຍການສັ່ງຊື້ຫຼ້າສຸດ","รายการสินค้า":"ລາຍການສິນຄ້າ","เกี่ยวกับเรา":"ກ່ຽວກັບພວກເຮົາ","รีวิวร้าน":"ລີວິວຮ້ານ","ช่วยเหลือ":"ຊ່ວຍເຫຼືອ","ติดต่อเรา":"ຕິດຕໍ່ພວກເຮົາ","ผู้ใช้งาน":"ຜູ້ໃຊ້ງານ","คน":"ຄົນ","สต็อก":"ສະຕັອກ","ชิ้น":"ຊິ້ນ","ยอดขาย":"ຍອດຂາຍ","ครั้ง":"ຄັ້ງ","ขายดีประจำสัปดาห์":"ຂາຍດີປະຈຳອາທິດ","สินค้าขายดีที่ลูกค้าเลือกมากที่สุด":"ສິນຄ້າຂາຍດີທີ່ລູກຄ້າເລືອກຫຼາຍທີ່ສຸດ","ดูทั้งหมด":"ເບິ່ງທັງໝົດ","สินค้าแนะนำสำหรับคุณ":"ສິນຄ້າແນະນຳສຳລັບທ່ານ","หมวดหมู่":"ໝວດໝູ່","สินค้า":"ສິນຄ້າ","ค้นหาหมวดหมู่":"ຄົ້ນຫາໝວດໝູ່","สั่งซื้อ":"ສັ່ງຊື້","คงเหลือ":"ຄົງເຫຼືອ","ไฟล์ดูดหัว":"ໄຟລ໌ດູດຫົວ","แอนดรอยด์":"ແອນດຣອຍ","ตั้งค่าดูดหัว จอไว ล็อคหัว โห":"ຕັ້ງຄ່າດູດຫົວ ຈໍໄວ ລັອກຫົວ ໂຫ","ตั้งค่าดูดหัว":"ຕັ້ງຄ່າດູດຫົວ","ตั้งค่ามือถือ":"ຕັ້ງຄ່າມືຖື","ภาษา":"ພາສາ","ไทย":"ລາວ","ธีม":"ຮູບແບບ","เลือกดูสินค้า":"ເລືອກເບິ່ງສິນຄ້າ","เติมเงินเข้าเว็บ":"ເຕີມເງິນເຂົ້າເວັບ","ประวัติการซื้อ":"ປະຫວັດການຊື້","ติดต่อแอดมิน":"ຕິດຕໍ່ແອດມິນ","คลิก":"ຄລິກ"};
const K=Object.keys(LO).sort((a,b)=>b.length-a.length);
function trs(t){for(const k of K)t=t.split(k).join(LO[k]);return t}
function tr(r){const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){let t=n.nodeValue;if(!/[\u0E00-\u0E7F]/.test(t))continue;for(const k of K)t=t.split(k).join(LO[k]);n.nodeValue=t}}
let raf;function mq(){cancelAnimationFrame(raf);const r=document.querySelector('.row');if(!r||matchMedia('(prefers-reduced-motion:reduce)').matches)return;let hold=false,pos=0,tm;const half=()=>r.scrollWidth/2;const stop=()=>{hold=true;clearTimeout(tm)},go=()=>{clearTimeout(tm);tm=setTimeout(()=>{pos=r.scrollLeft;hold=false},1500)};
['touchstart','pointerdown','mouseenter'].forEach(e=>r.addEventListener(e,stop,{passive:true}));['touchend','pointerup','touchcancel','mouseleave'].forEach(e=>r.addEventListener(e,go));
(function t(){if(hold){if(r.scrollLeft>=half())r.scrollLeft-=half()}else{pos+=.6;if(pos>=half())pos-=half();r.scrollLeft=pos}raf=requestAnimationFrame(t)})()}
const $=s=>document.querySelector(s),app=$('#app');
function show(v,m){if(NEED.has(v)&&!USER){PEND=[v,m];v='auth';m='login';tpToast('กรุณาเข้าสู่ระบบก่อน')}else if(v==='auth'&&USER){v='home';m=undefined}else if((v==='admin'||v==='admin-prod'||v==='admin-topup')&&!isAdm()){v='home';m=undefined}if(v!=='auth')PEND=null;CUR=v;document.querySelectorAll('.pop').forEach(x=>x.classList.remove('on'));document.querySelectorAll('.tp-ov,.tp-sh').forEach(x=>x.remove());document.body.style.overflow='';app.innerHTML=views[v](m);tr(app);app.querySelectorAll('[placeholder]').forEach(i=>{i.placeholder=trs(i.placeholder)});document.querySelectorAll('.dr a[data-v]').forEach(a=>a.classList.toggle('on',a.dataset.v===v&&(!a.dataset.m||a.dataset.m===m)));document.body.classList.remove('open');scrollTo(0,0)}
document.addEventListener('click',e=>{const t=e.target.closest('[data-v]');if(t){e.preventDefault();show(t.dataset.v,t.dataset.m)}});

$('#mn').onclick=()=>document.body.classList.add('open');$('#ov').onclick=$('#cl').onclick=()=>document.body.classList.remove('open');
$('#gr').onclick=()=>{$('#apop').classList.remove('on');$('#pop').classList.toggle('on')};
$('#th').onclick=e=>{const b=e.target.closest('button');if(!b)return;[...$('#th').children].forEach(x=>x.classList.toggle('on',x===b));document.documentElement.dataset.theme=b.dataset.t};
$('#up').onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.addEventListener('click',e=>{const b=e.target.closest('.eye');if(b){const i=b.parentNode.querySelector('input');i.type=i.type==='password'?'text':'password'}});
function sw(m){const f=$('#af'),tb=$('.tabs');if(!f||f.dataset.m===m)return;const p=$('#ahp');f.dataset.m=m;tb.dataset.m=m;tb.classList.add('mv');setTimeout(()=>tb.classList.remove('mv'),480);tb.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.a===m));f.classList.add('bl');p.classList.add('bl');
setTimeout(()=>{f.innerHTML=fh(m);p.textContent=m==='register'?'สร้างบัญชีใหม่':'ยินดีต้อนรับกลับมา';tr(f);tr(p);f.classList.remove('bl');p.classList.remove('bl')},210)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(b){e.preventDefault();sw(b.dataset.a)}});


// ===== ค้นหา / เรียงหมวดหมู่ =====
let SRT=0;
function srApply(){const l=$("#catl");if(!l)return;const q=($('.sr-in').value||'').trim().toLowerCase(),cs=[...l.children];
cs.sort((a,b)=>SRT===0?a.dataset.i-b.dataset.i:(SRT===1?1:-1)*a.dataset.n.localeCompare(b.dataset.n)).forEach(x=>l.appendChild(x));
let n=0;cs.forEach(x=>{const ok=!q||x.dataset.n.includes(q);x.hidden=!ok;if(ok)n++});$('.sr-none').hidden=n>0}
document.addEventListener('input',e=>{if(e.target.classList.contains('sr-in'))srApply()});
document.addEventListener('click',e=>{if(!e.target.closest('.sr-sort'))return;SRT=(SRT+1)%3;srApply();tpToast(['เรียงตามค่าเริ่มต้น','เรียงตามชื่อ A-Z','เรียงตามชื่อ Z-A'][SRT])});

// ===== หน้าประวัติ =====
const HSI={w:'<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M15 15h3"/>',b:'<path d="M5 8h14l1 12H4zM9 8a3 3 0 016 0"/>'};
const HSB={ok:'สำเร็จ',wait:'รอตรวจสอบ',no:'ไม่สำเร็จ'};
// ข้อมูลตัวอย่าง: แทนที่ด้วยข้อมูลจริงจากหลังบ้าน
const TPH=[{a:100000,t:'14:22 30/10/2026',s:'ok'},{a:50000,t:'20:05 28/10/2026',s:'ok'},{a:20000,t:'09:41 25/10/2026',s:'no'}];
const HSO=[['ไฟล์ดูดหัว 90% แอนดรอยด์',50000,'16:30 30/10/2026'],['ไฟล์ดูดหัว 50% แอนดรอยด์',20000,'21:12 28/10/2026']];
const HSL=[1,3,5],HSF=[[0,5],[6,3],[2,2]];
const hsEmpty='<div class="hs-em">ยังไม่มีรายการ</div>';
const hsRow=(ic,ti,su,r,st)=>`<div class="tp-card hs-row"><span class="hs-ic"><svg viewBox="0 0 24 24">${ic}</svg></span><div class="hs-m"><b>${ti}</b><small>${su}</small></div><div class="hs-r"><strong>${r}</strong><span class="hs-bd ${st}">${HSB[st]}</span></div></div>`;
const hsPage=(cur,ti,body)=>`<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; ${cur?`<a href="#" data-v="hist">ประวัติ</a> &nbsp;/&nbsp; ${cur}`:'ประวัติ'}</div><h1 class="tp-h">${ti}</h1>${body}`;

// ===== ติดต่อแอดมิน =====
// [ชื่อ, ข้อความที่แสดง, ลิงก์, ไอคอน, สี, คำอธิบาย, เมื่อไหร่ควรใช้, URL รูปปก (เว้นว่าง = ใช้ไอคอนบนพื้นสี)] — แก้เป็นของร้านจริง
const CTS=[
['Facebook','GXROZSHOP','https://facebook.com/','<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>','#1877F2','ช่องทางหลักของร้าน ใช้ติดตามข่าวสาร โปรโมชั่น และแจ้งปัญหาทั่วไป พร้อมแนบรูปหรือสลิปได้สะดวก',['สอบถามสินค้าและราคา','ติดตามโปรโมชั่นและข่าวสารร้าน','ส่งรูปหรือวิดีโอปัญหาการใช้งาน'],''],
['WhatsApp','+856 20 0000 0000','https://wa.me/8562000000000','<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>','#25D366','เหมาะกับเรื่องด่วนที่ต้องการคำตอบเร็ว แอดมินตอบกลับไวที่สุดในช่องทางนี้',['เติมเงินแล้วยอดยังไม่เข้า (ส่งสลิปมาด้วย)','สินค้าที่ซื้อมีปัญหาหรือใช้งานไม่ได้','ต้องการความช่วยเหลือเร่งด่วน'],''],
['Telegram','@GXROZSHOP','https://t.me/','<path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/><path d="M9 13l12-9"/>','#29A9EB','ใช้รับไฟล์และอัปเดตสินค้าใหม่ๆ รวมถึงแจ้งปัญหาเรื่องไฟล์ขนาดใหญ่',['ขอรับไฟล์หรือสินค้าซ้ำ','ติดตามอัปเดตสินค้าใหม่','ส่งไฟล์ขนาดใหญ่ให้แอดมินตรวจสอบ'],''],
['โทรศัพท์','020 0000 0000','tel:02000000000','<rect x="7" y="2" width="10" height="20" rx="3"/><path d="M11 18h2"/>','#0053FF','โทรคุยกับแอดมินโดยตรง เหมาะกับปัญหาที่อธิบายยาก หรือเรื่องบัญชีและการเงิน',['ปัญหาบัญชีหรือเข้าสู่ระบบไม่ได้','ปัญหาการเงินที่ต้องยืนยันตัวตน','ต้องการคุยกับแอดมินโดยตรง'],'']];
document.addEventListener('click',e=>{const b=e.target.closest('.ct-cp');if(!b)return;try{navigator.clipboard.writeText(b.dataset.cp)}catch(_){}tpToast('คัดลอกแล้ว')});

// รูปสินค้า: ใส่ URL รูปตามรหัสสินค้า เช่น {p1:"https://.../a.jpg"}
const PIMG={};
// ===== ยืนยันสั่งซื้อ =====
// แพ็กเกจ: n=จำนวน u=หน่วย k=ตัวคูณราคา (ราคาเต็ม x k) — ตั้งเฉพาะสินค้าได้ที่ POPT เช่น {p1:[{n:1,u:"วัน",k:1}]}
const OPT=[{n:1,u:'วัน',k:1},{n:2,u:'วัน',k:1.8},{n:7,u:'วัน',k:5},{n:30,u:'วัน',k:15}],POPT={};
let ORP,ORQ=1,ORO=0,ORX=OPT,BAL=150000,orT;
const orPr=(p,o)=>Math.round(p[2]*o.k)*1000,orUnit=()=>orPr(ORP,ORX[ORO]); // BAL = ยอดเงินตัวอย่าง: แทนที่ด้วยยอดจริงของผู้ใช้
const orMax=()=>Math.max(0,Math.min(parseInt(ORP[3])||0,10));
const orNow=()=>{const d=new Date(),z=n=>String(n).padStart(2,'0');return z(d.getHours())+':'+z(d.getMinutes())+' '+z(d.getDate())+'/'+z(d.getMonth()+1)+'/'+d.getFullYear()};
function orUpd(){const g=$('#ordgo');if(!g||!ORP)return;const mx=orMax(),tot=orUnit()*ORQ,aft=BAL-tot,no=aft<0,out=mx<1;
const o=ORX[ORO];$('.or-pp').textContent=tpf(orUnit())+' กีบ';$('.or-un').textContent=tpf(orUnit())+' กีบ';$('.or-pk').textContent=o.n+' '+o.u;document.querySelectorAll('.or-op').forEach((b,i)=>b.classList.toggle('on',i===ORO));$('.or-q').textContent=ORQ;$('.or-tot').innerHTML=tpf(tot)+'<small>กีบ</small>';$('.or-rq').textContent=ORQ;$('.or-bal').textContent=tpf(BAL)+' กีบ';
const a=$('.or-aft');a.textContent=(no?'-':'')+tpf(Math.abs(aft))+' กีบ';a.classList.toggle('neg',no);
$('.or-m').disabled=ORQ<=1;$('.or-p').disabled=ORQ>=mx;$('.or-warn').classList.toggle('on',no&&!out);
g.disabled=out;if(no&&!out){g.dataset.v='topup';g.textContent='เติมเงินก่อนสั่งซื้อ'}else{delete g.dataset.v;g.textContent=out?'สินค้าหมด':'ยืนยันสั่งซื้อ'}
tr($('#app'))}
function orSet(q,o){clearTimeout(orT);const a=$('.or-q'),b=$('.or-tot');a.classList.add('or-bl');b.classList.add('or-bl');orT=setTimeout(()=>{ORQ=q;if(o!=null)ORO=o;orUpd();a.classList.remove('or-bl');b.classList.remove('or-bl')},170)}
function orDone(name,qty,tot){document.querySelectorAll('.tp-ov,.tp-sh').forEach(x=>x.remove());
document.body.insertAdjacentHTML('beforeend',`<div class="tp-ov"></div><section class="tp-sh"><div class="tp-gr"></div><div style="text-align:center;padding:14px 0 4px"><div class="tp-ck"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><h3>สั่งซื้อสำเร็จ</h3><p class="tp-sub" style="margin-bottom:6px">ดูสินค้าที่ซื้อได้ในประวัติการสั่งซื้อ</p><span class="or-no">เลขที่คำสั่งซื้อ #GX${Math.floor(100000+Math.random()*900000)}</span></div>
<div class="or-rc"><div class="or-r"><span>สินค้า</span><b>${name}</b></div><div class="or-r"><span>จำนวน</span><b>${qty}</b></div><div class="or-r"><span>ยอดชำระ</span><b>${tpf(tot)} กีบ</b></div><div class="or-r"><span>ยอดเงินคงเหลือ</span><b>${tpf(BAL)} กีบ</b></div></div>
<a href="#" class="tp-cta ct-go2" data-v="hist-order">ดูประวัติสั่งซื้อ</a><a href="#" class="or-gh" data-v="home">กลับหน้าหลัก</a></section>`);
const sh=$('.tp-sh');tr(sh);document.body.style.overflow='hidden';sh.offsetWidth;sh.classList.add('on');$('.tp-ov').classList.add('on')}
document.addEventListener('click',e=>{const t=e.target;
const op=t.closest('.or-op');if(op){const i=+op.dataset.i;if(i!==ORO)orSet(ORQ,i);return}
if(t.closest('.or-m')){if(ORQ>1)orSet(ORQ-1);return}
if(t.closest('.or-p')){if(ORQ<orMax())orSet(ORQ+1);return}
const g=t.closest('#ordgo');if(!g||g.dataset.v||g.disabled)return;if(!USER){show('order',ORP&&ORP[0]);return}
g.disabled=true;g.textContent='กำลังสั่งซื้อ...';tr(g);
/* TODO: ส่งคำสั่งซื้อ (ORP[0], ORQ) ไป backend ของร้านตรงนี้ */
setTimeout(()=>{const tot=orUnit()*ORQ,q=ORQ,nm=ORP[1]+' · '+ORX[ORO].n+' '+ORX[ORO].u;BAL-=tot;HSO.unshift([nm,tot,orNow()]);ORP[3]=orMax()?(parseInt(ORP[3])||0)-q:ORP[3];ORP[4]=(ORP[4]||0)+q;orDone(nm,q,tot)},900)});
// ===== หน้าเติมเงิน =====
const TPV=[10000,20000,50000,100000,200000,500000],TPQR="",TPMIN=10000,TPMAX=5000000;
const tpf=n=>n.toLocaleString('en-US');
let tpA=0,tpT;
function tpUpd(){const h=$('.tp-hint'),g=$('#tpgo');if(!h)return;const ok=tpA>=TPMIN&&tpA<=TPMAX;
document.querySelectorAll('.tp-chip').forEach(c=>c.classList.toggle('on',+c.dataset.tp===tpA));
h.className='tp-hint'+(tpA&&!ok?' err':'');h.textContent=!tpA?'ขั้นต่ำ '+tpf(TPMIN)+' กีบ':tpA<TPMIN?'ขั้นต่ำ '+tpf(TPMIN)+' กีบ':tpA>TPMAX?'สูงสุด '+tpf(TPMAX)+' กีบต่อครั้ง':'ยอดเติม '+tpf(tpA)+' กีบ';tr(h);g.disabled=!ok}
function tpSet(v){const i=$('.tp-amt');if(!i)return;clearTimeout(tpT);i.classList.add('tp-bl');tpT=setTimeout(()=>{tpA=v;i.value=v?tpf(v):'';tpUpd();i.classList.remove('tp-bl')},170)}
function tpToast(t){let p=$('.tp-toast');if(!p){p=document.createElement('div');p.className='tp-toast';document.body.appendChild(p)}p.textContent=t;tr(p);p.classList.add('on');setTimeout(()=>p.classList.remove('on'),2000)}
function tpQR(){const c=$('.tp-qr');if(!c)return;if(TPQR){const i=new Image();i.src=TPQR;i.className='tp-qr';i.style.imageRendering='auto';c.replaceWith(i);return}
const x=c.getContext('2d'),N=29;x.fillStyle='#fff';x.fillRect(0,0,N,N);x.fillStyle='#0a2a8a';let q=tpA*7919+13;const r=()=>(q=(q*16807)%2147483647)/2147483647;
for(let i=0;i<N;i++)for(let j=0;j<N;j++){const f=(i<8&&j<8)||(i>N-9&&j<8)||(i<8&&j>N-9);if(!f&&r()>.52)x.fillRect(i,j,1,1)}
x.fillStyle='#fff';[[0,0],[N-8,0],[0,N-8]].forEach(([a,b])=>x.fillRect(a,b,8,8));x.fillStyle='#0a2a8a';
[[0,0],[N-7,0],[0,N-7]].forEach(([a,b])=>{x.fillRect(a,b,7,7);x.fillStyle='#fff';x.fillRect(a+1,b+1,5,5);x.fillStyle='#0a2a8a';x.fillRect(a+2,b+2,3,3)})}
function tpOpen(){if(!USER)return;document.querySelectorAll('.tp-ov,.tp-sh').forEach(x=>x.remove());
document.body.insertAdjacentHTML('beforeend',`<div class="tp-ov"></div><section class="tp-sh"><div class="tp-gr"></div><div class="tp-f1"><h3>สแกนเพื่อโอนเงิน</h3><p class="tp-sub">โอนตามยอดให้ตรง แล้วแนบสลิปด้านล่าง</p>
<div class="tp-qrw"><div class="tp-fr tp-cut"><div class="tp-in tp-cut"><canvas class="tp-qr" width="29" height="29"></canvas><small>GXROZSHOP</small><b>${tpf(tpA)} กีบ</b></div></div></div>
<label class="tp-up"><input class="tp-fi" type="file" accept="image/*" hidden><img class="tp-pv" alt=""><button class="tp-rm" type="button" aria-label="x">✕</button><span class="tp-t"><svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></svg><span>แตะเพื่อแนบสลิปการโอน</span></span></label>
<button class="tp-cta tp-cf" disabled>ยืนยันการเติมเงิน</button></div>
<div class="tp-done"><div class="tp-ck"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><h3>ส่งคำขอเรียบร้อย</h3><p class="tp-sub tp-okt"></p><button class="tp-cta tp-cl">ตกลง</button></div></section>`);
const sh=$('.tp-sh');tr(sh);tpQR();document.body.style.overflow='hidden';sh.offsetWidth;sh.classList.add('on');$('.tp-ov').classList.add('on')}
function tpClose(){const sh=$('.tp-sh'),ov=$('.tp-ov');if(!sh)return;sh.classList.remove('on');ov.classList.remove('on');document.body.style.overflow='';setTimeout(()=>{sh.remove();ov.remove()},600)}
function tpClr(){const f=$('.tp-fi');if(!f)return;f.value='';$('.tp-pv').removeAttribute('src');$('.tp-up').classList.remove('has');$('.tp-cf').disabled=true}
document.addEventListener('click',e=>{const t=e.target;
const c=t.closest('.tp-chip');if(c){tpSet(+c.dataset.tp);return}
if(t.closest('#tpgo')){if(!USER){show('topup');return}tpOpen();return}
if(t.closest('.tp-ov')||t.closest('.tp-cl')){tpClose();return}
if(t.closest('.tp-rm')){e.preventDefault();e.stopPropagation();tpClr();return}
const cf=t.closest('.tp-cf');if(cf){cf.disabled=true;cf.textContent='กำลังส่ง...';tr(cf);
/* TODO: ส่ง tpA + ไฟล์สลิป (.tp-fi) ไป backend ของร้านตรงนี้ */
setTimeout(()=>{$('.tp-f1').style.display='none';$('.tp-okt').textContent='ยอด '+tpf(tpA)+' กีบ · รอแอดมินตรวจสอบสลิป';tr($('.tp-okt'));$('.tp-done').classList.add('on');const d=new Date(),z=n=>String(n).padStart(2,'0');TPH.unshift({a:tpA,t:z(d.getHours())+':'+z(d.getMinutes())+' '+z(d.getDate())+'/'+z(d.getMonth()+1)+'/'+d.getFullYear(),s:'wait'});tpA=0;const i=$('.tp-amt');if(i)i.value='';tpUpd()},900)}});
document.addEventListener('input',e=>{if(e.target.classList.contains('tp-amt')){clearTimeout(tpT);tpA=parseInt(e.target.value.replace(/\D/g,'').slice(0,7))||0;e.target.value=tpA?tpf(tpA):'';tpUpd()}});
document.addEventListener('change',e=>{if(!e.target.classList.contains('tp-fi'))return;const f=e.target.files[0];if(!f)return;if(f.size>8e6){tpToast('ไฟล์ใหญ่เกิน 8MB');tpClr();return}
const r=new FileReader();r.onload=()=>{$('.tp-pv').src=r.result;$('.tp-up').classList.add('has');$('.tp-cf').disabled=false};r.readAsDataURL(f)});


// ============================================================
// ⚠️ ADMIN ZONE — เฉพาะแอดมิน (เจ้าของร้าน: บัญชี BEERTJ, role='admin' ในตาราง public.profiles)
// ถึง AI / ผู้แก้โค้ดทุกคน: ห้ามแก้ส่วนที่มีป้าย ADMIN โดยไม่ขออนุญาตเจ้าของร้านก่อน
// หมายเหตุ: การซ่อนเมนู/หน้าด้านล่างเป็นแค่ฝั่งหน้าเว็บ ข้อมูลของแอดมินต้องป้องกันด้วย RLS ฝั่ง Supabase (เช็ก role='admin') เสมอ
// ============================================================
const isAdm=()=>!!(USER&&PROF&&PROF.role==='admin'); // ADMIN
// ADMIN: การ์ดเมนูห้องแอดมิน ใช้ดีไซน์เดียวกับปุ่มการ์ดหน้าหลัก (.bt) [บรรทัดบนเล็ก, ชื่อใหญ่, ขนาดตัวอักษร, ไอคอน 60x60] — หน้าปลายทางยังเป็นหน้าเปล่า รอทำทีละหน้า
const ADM=[
['ຈັດການ','ສິນຄ້າ',30,'<path d="M6 18l22-10 22 10v22L28 50 6 40z"/><path d="M6 18l22 10 22-10M28 28v22"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><path d="M41 46h10M46 41v10"/>'],
['ຈັດການ','ເຕີມເງິນ',25,'<ellipse cx="26" cy="14" rx="18" ry="7"/><path d="M8 14v11c0 4 8 7 18 7s18-3 18-7V14M8 25v11c0 4 8 7 18 7s18-3 18-7V25"/><circle cx="46" cy="44" r="9" fill="#2d231b"/><path d="M46 49V39M41 44l5-5 5 5"/>'],
['ຈັດການ','ຕົວແທນ',26,'<circle cx="22" cy="16" r="9"/><path d="M4 52c0-12 7-19 18-19s18 7 18 19"/><circle cx="44" cy="22" r="7"/><path d="M42 34c10-2 17 5 17 16"/>'],
['ຕັ້ງຄ່າ','ຮ້ານ',36,'<path d="M6 22l4-14h38l4 14z"/><path d="M6 22c0 5 4 7 7 7s7-2 7-7c0 5 4 7 7 7s7-2 7-7c0 5 4 7 7 7s7-2 7-7"/><path d="M10 29v21h22M20 50V38h10v12"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><circle cx="46" cy="46" r="3"/>'],
['ຈັດການ','ບັນຊີ',30,'<circle cx="26" cy="16" r="10"/><path d="M6 54c0-14 8-22 20-22s20 8 20 22"/><circle cx="46" cy="44" r="9" fill="#2d231b"/><rect x="41.500" y="44" width="9" height="7" rx="1.500"/><path d="M43.500 44v-2.500a2.500 2.500 0 015 0V44"/>'],
['ປະຫວັດ','ການຂາຍ',24,'<path d="M6 54h48M12 54V36h9v18M28 54V26h9v28M44 54V14h9v40"/><circle cx="14" cy="16" r="9" fill="#2d231b"/><path d="M14 11v5l4 3"/>']];
views.admin=()=>`<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; ห้องแอดมิน</div><h1 class="tp-h">ห้องแอดมิน</h1><div class="btns" id="adm">${ADM.map((c,i)=>`<a href="#" class="bt" data-adm="${i}"><svg viewBox="0 0 60 60">${c[3]}</svg><span class="t"><span class="t1">${c[0]}</span><span class="t2" style="font-size:${c[2]}px">${c[1]}</span></span></a>`).join('')}</div>`; // ADMIN
// ADMIN: หน้า "จัดการสินค้า" — ดีไซน์การ์ดเดียวกับห้องแอดมิน มี 2 เมนู (เพิ่มสินค้า / แก้ไขสินค้า) หน้าปลายทางยังว่าง
const ADMP=[
['ເພີ່ມ','ສິນຄ້າ',36,'<path d="M6 18l22-10 22 10v22L28 50 6 40z"/><path d="M6 18l22 10 22-10M28 28v22"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><path d="M41 46h10M46 41v10"/>'],
['ແກ້ໄຂ','ສິນຄ້າ',34,'<path d="M6 18l22-10 22 10v22L28 50 6 40z"/><path d="M6 18l22 10 22-10M28 28v22"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><path d="M42 50l1-4 6-6 3 3-6 6z"/>'],
['ເຕີມ','ສະຕັອກ',36,'<path d="M6 18l22-10 22 10v22L28 50 6 40z"/><path d="M6 18l22 10 22-10M28 28v22"/><circle cx="46" cy="46" r="9" fill="#2d231b"/><path d="M46 51V41M41 46l5-5 5 5"/>']];
views['admin-prod']=()=>`<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; <a href="#" data-v="admin">ห้องแอดมิน</a> &nbsp;/&nbsp; จัดการสินค้า</div><h1 class="tp-h">จัดการสินค้า</h1><div class="btns" id="admp">${ADMP.map((c,i)=>`<a href="#" class="bt" data-adm="p${i}"><svg viewBox="0 0 60 60">${c[3]}</svg><span class="t"><span class="t1">${c[0]}</span><span class="t2" style="font-size:${c[2]}px">${c[1]}</span></span></a>`).join('')}</div>`; // ADMIN
// ADMIN: หน้า "จัดการเติมเงิน" — การ์ดแบบเดียวกัน มี 1 เมนู (คำขอเติมเงิน) หน้าปลายทางยังว่าง
const ADMT=[
['ຄຳຂໍ','ເຕີມເງິນ',36,'<ellipse cx="26" cy="14" rx="18" ry="7"/><path d="M8 14v11c0 4 8 7 18 7s18-3 18-7V14M8 25v11c0 4 8 7 18 7s18-3 18-7V25"/><circle cx="46" cy="44" r="9" fill="#2d231b"/><path d="M46 39v5l3.500 2"/>']];
views['admin-topup']=()=>`<div class="bc"><a href="#" data-v="home">หน้าหลัก</a> &nbsp;/&nbsp; <a href="#" data-v="admin">ห้องแอดมิน</a> &nbsp;/&nbsp; จัดการเติมเงิน</div><h1 class="tp-h">จัดการเติมเงิน</h1><div class="btns" id="admp">${ADMT.map((c,i)=>`<a href="#" class="bt" data-adm="t${i}"><svg viewBox="0 0 60 60">${c[3]}</svg><span class="t"><span class="t1">${c[0]}</span><span class="t2" style="font-size:${c[2]}px">${c[1]}</span></span></a>`).join('')}</div>`; // ADMIN
document.addEventListener('click',e=>{const el=e.target.closest('[data-adm]');if(!el)return;e.preventDefault();if(!isAdm())return;if(el.dataset.adm==='0')show('admin-prod');else if(el.dataset.adm==='1')show('admin-topup');else tpToast('ຍັງບໍ່ເປີດໃຊ້ງານ') /* p0=เพิ่มสินค้า p1=แก้ไขสินค้า p2=เติมสต็อก: หน้าปลายทางยังว่าง */}); // ADMIN: ยังไม่มีหน้าปลายทางของเพิ่ม/แก้ไขสินค้า
// ===== ระบบสมาชิก (Supabase) =====
// ใส่ค่าจากโปรเจกต์ Supabase ใหม่: Project Settings > API (ใช้ anon / publishable key เท่านั้น ห้ามใส่ service_role)
const SB_URL='https://gojiyswscudhqmovfcwj.supabase.co',SB_KEY='sb_publishable_-4G10n0CQXgxiwoAWAOx7g_saAY3VR3';
const MAIL='@gxroz.app'; // ล็อกอินด้วยชื่อผู้ใช้อย่างเดียว: ระบบแปลงเป็นอีเมลภายในให้อัตโนมัติ (ไม่มีการส่งอีเมลจริง)
// หน้าที่ต้องเป็นสมาชิกเท่านั้น (ผู้เยี่ยมชมดูหน้าอื่นได้ปกติ)
const NEED=new Set(['order','topup','hist','hist-topup','hist-order','hist-log','hist-fav']);
let USER=null,PROF=null,PEND=null,CUR='home';
// --- จำบัญชี: ติ๊ก "จดจำฉันไว้" = เก็บใน localStorage (อยู่ยาว) / ไม่ติ๊ก = sessionStorage (หายเมื่อปิดเบราว์เซอร์)
function xlg(k){try{return localStorage.getItem(k)}catch(_){return null}}
function xls(k,v){try{localStorage.setItem(k,v)}catch(_){}}
function xlr(k){try{localStorage.removeItem(k)}catch(_){}}
function xsg(k){try{return sessionStorage.getItem(k)}catch(_){return null}}
function xss(k,v){try{sessionStorage.setItem(k,v)}catch(_){}}
function xsr(k){try{sessionStorage.removeItem(k)}catch(_){}}
const STO={getItem:k=>xlg(k)??xsg(k),setItem:(k,v)=>{if(xlg('gx_rm')!=='0'){xls(k,v);xsr(k)}else{xss(k,v);xlr(k)}},removeItem:k=>{xlr(k);xsr(k)}};
const sb=(window.supabase&&!SB_URL.includes('YOUR-'))?supabase.createClient(SB_URL,SB_KEY,{auth:{storage:STO,persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}}):null;
const um=u=>u.toLowerCase()+MAIL;
const aErr=e=>{const m=((e&&e.message)||'').toLowerCase();
if(m.includes('invalid login'))return'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
if(m.includes('already'))return'ชื่อผู้ใช้นี้ถูกใช้แล้ว';
if(m.includes('database error'))return'สมัครไม่สำเร็จ ลองชื่อผู้ใช้อื่น';
if(m.includes('fetch')||m.includes('network'))return'เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง';
return'เกิดข้อผิดพลาด ลองใหม่อีกครั้ง'+(e&&e.message?' ['+e.message+']':'')};
async function loadProf(){PROF=null;BAL=0;if(!sb||!USER)return;
try{const{data}=await sb.from('profiles').select('username,role,balance').eq('id',USER.id).maybeSingle();PROF=data;if(data&&data.balance!=null)BAL=Number(data.balance)}catch(_){}}
// เมนูข้างซ้าย: ผู้เยี่ยมชม = ปุ่มเข้าสู่ระบบ/สมัคร, สมาชิก = ชื่อ + ยอดเงิน + ออกจากระบบ
const GN=$('#an').innerHTML;
function anav(){const n=$('#an');if(!n)return;
if(USER){const nm=(PROF&&PROF.username)||(USER.user_metadata&&USER.user_metadata.username)||'';
n.innerHTML=`<div class="dt">บัญชีของฉัน</div><div class="acc"><b></b><small>${PROF&&PROF.role==='admin'?'แอดมิน · ':''}ยอดเงิน ${tpf(BAL)} กีบ</small></div><a href="#" id="lo"><svg viewBox="0 0 24 24"><path d="M14 17l-5-5 5-5v3h8v4h-8zM11 3H3v18h8v-2H5V5h6z"/></svg>ออกจากระบบ</a>${isAdm()?'<div class="dt">แอดมิน</div><a href="#" data-v="admin"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.500 9-8 11-4.500-2-8-6-8-11V5z"/></svg>ห้องแอดมิน</a>':''}`;
n.querySelector('.acc b').textContent=nm}else n.innerHTML=GN;
tr(n);avr()}
if(sb)sb.auth.onAuthStateChange((ev,s)=>{USER=s?s.user:null;if(ev==='TOKEN_REFRESHED')return;
setTimeout(async()=>{await loadProf();anav();if((!USER&&NEED.has(CUR))||((CUR==='admin'||CUR==='admin-prod'||CUR==='admin-topup')&&!isAdm()))show('home')},0)});
document.addEventListener('submit',async e=>{const f=e.target;if(f.id!=='af')return;e.preventDefault();
const er=$('#er'),rg=f.dataset.m==='register',btn=f.querySelector('.sb'),el=f.elements,say=(m,ok)=>{er.className=ok?'er ok':'er';er.textContent=m;tr(er)};
const u=el.u.value.trim(),p=el.p.value,c=rg?el.c.value:'';let m='';
if(!u||!p||(rg&&!c))m='กรุณากรอกข้อมูลให้ครบ';
else if(!/^[A-Za-z0-9_]{3,20}$/.test(u))m='ชื่อผู้ใช้ 3-20 ตัว ใช้ a-z 0-9 _ เท่านั้น';
else if(p.length<6)m='รหัสผ่านอย่างน้อย 6 ตัวอักษร';
else if(rg&&p!==c)m='รหัสผ่านไม่ตรงกัน';
else if(rg&&!el.t.checked)m='กรุณายอมรับข้อกำหนด';
if(m)return say(m);
if(!sb)return say('ยังไม่ได้ใส่ SB_URL / SB_KEY ใน app.js');
if(!rg){xls('gx_rm',el.r.checked?'1':'0');if(el.r.checked)xls('gx_user',u);else xlr('gx_user')}
btn.disabled=true;say('กำลังดำเนินการ...',1);
try{const r=rg?await sb.auth.signUp({email:um(u),password:p,options:{data:{username:u}}}):await sb.auth.signInWithPassword({email:um(u),password:p});
if(r.error)return say(aErr(r.error));
if(!r.data.session)return say('ต้องปิด Confirm email ใน Supabase (Authentication > Providers > Email) ก่อน');
USER=r.data.user;await loadProf();anav();say(rg?'สมัครสมาชิกสำเร็จ':'เข้าสู่ระบบสำเร็จ',1);
const pd=PEND;PEND=null;setTimeout(()=>pd?show(pd[0],pd[1]):show('home'),600)}
catch(x){say(aErr(x))}finally{btn.disabled=false}});
document.addEventListener('click',async e=>{
if(e.target.closest('[data-f]')){e.preventDefault();tpToast('ลืมรหัสผ่าน? ติดต่อแอดมินเพื่อรีเซ็ต');show('contact');return}
if(!e.target.closest('#lo,.lo'))return;e.preventDefault();document.body.classList.remove('open');$('#apop').classList.remove('on');
try{if(sb)await sb.auth.signOut({scope:'local'})}catch(_){}
USER=null;PROF=null;BAL=0;anav();show('home');tpToast('ออกจากระบบแล้ว')});

// ===== ไอคอนโปรไฟล์บนแถบหัว: ยังไม่ลงชื่อ = วงกลมเส้นประ + เครื่องหมาย + / ลงชื่อแล้ว = วงกลมสีฟ้าตัวอักษรแรกของชื่อ + จุดเขียว =====
const AVG='<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg><i class="avp">+</i>';
function avr(){const b=$('#av'),p=$('#apop');if(!b)return;
if(USER){const nm=(PROF&&PROF.username)||(USER.user_metadata&&USER.user_metadata.username)||'?',ad=PROF&&PROF.role==='admin';
b.className='av mem';b.innerHTML='<span class="avl"></span><i class="avd"></i>';b.firstChild.textContent=nm.charAt(0).toUpperCase();b.setAttribute('aria-label',nm);
p.innerHTML=`<div class="apn"><span class="apa"></span><div><b></b><small>${ad?'แอดมิน':'สมาชิก'}</small></div></div><div class="apb"><span>ยอดเงิน</span><b>${tpf(BAL)} กีบ</b></div><button class="apl" data-v="hist">ประวัติ</button><button class="apl lo apx">ออกจากระบบ</button>`;
p.querySelector('.apa').textContent=nm.charAt(0).toUpperCase();p.querySelector('.apn b').textContent=nm;tr(p)}
else{b.className='av';b.innerHTML=AVG;b.setAttribute('aria-label','เข้าสู่ระบบ');p.classList.remove('on');p.innerHTML=''}}
document.addEventListener('click',e=>{const a=e.target.closest('#av');
if(a){if(!USER){show('auth','login');return}$('#pop').classList.remove('on');$('#apop').classList.toggle('on');return}
if(!e.target.closest('#apop'))$('#apop').classList.remove('on')});
anav();
tr($('.dr'));tr($('#pop'));show('home');
