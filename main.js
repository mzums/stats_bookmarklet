/*
javascript:(function(){const t=window.getSelection().toString().trim();if(!t){alert("Select some text!");return}const w=t.match(/\b\w+\b/g)||[],s=t.match(/[^\.!\?]+[\.!\?]+/g)||[],p=t.split(/\n+/).filter(p=>p.trim().length>0),c=t.replace(/\s/g,'').length,a=(c/w.length).toFixed(2),r=Math.ceil(w.length/200),f={},u=new Set,o=new Set(["the","is","in","and","of","to","a","with","it","for","on"]);w.forEach(w=>{const e=w.toLowerCase();u.add(e);o.has(e)||(f[e]=(f[e]||0)+1)});const k=Object.entries(f).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`${t} (${((e/w.length)*100).toFixed(1)}%)`).join(', '),b=Object.entries(f).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`${t} (${e})`).join(', '),l=((u.size/w.length)*100).toFixed(1),y=(t.match(/[aeiouy]{1,2}/gi)||[]).length,d=(206.835-1.015*(w.length/s.length)-84.6*(y/w.length)).toFixed(1),v=s.map(t=>t.trim().split(/\s+/).length),m=Math.max(...v),g=Math.min(...v),h=[];const i=["sycophant","pulchritude","obfuscate","sesquipedalian","quixotic","antediluvian"];w.forEach(t=>{(t.length>12||i.includes(t.toLowerCase()))&&h.push(t)});const n=window.getSelection();if(n.rangeCount){const e=n.getRangeAt(0),o=document.createElement("span");o.innerHTML=t.replace(new RegExp("("+h.join("|")+")","gi"),'<mark style="background:yellow">$1</mark>'),e.deleteContents(),e.insertNode(o)}const x=document.createElement("div");x.style="position:fixed;top:20px;right:20px;background:#fff;color:#000;border:2px solid #444;padding:15px;font:14px monospace;z-index:99999;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3);border-radius:8px;overflow:auto;max-height:90vh;word-wrap:break-word",x.innerHTML=`<b>📊 Text Analysis</b><br><br>Words: <b>${w.length}</b><br>Characters (no spaces): <b>${c}</b><br>Sentences: <b>${s.length}</b><br>Paragraphs: <b>${p.length}</b><br>Avg Word Length: <b>${a}</b><br>Reading Time: <b>${r} min</b><br>Longest Sentence: <b>${m} words</b><br>Shortest Sentence: <b>${g} words</b><br>Lexical Richness: <b>${l}%</b><br>Flesch Reading Ease: <b>${d}</b><br>Top Words: <b>${b}</b><br>Keyword Density: <b>${k}</b><br><br><b>Difficult Words:</b> ${h.length>0?h.join(", "):"None 🎉"}<br><br><button onclick="this.parentElement.remove()">Close</button>`,document.body.appendChild(x)})();
*/
javascript: (function() {
    const t = window.getSelection().toString().trim();
    if (!t) {
        alert("Select some text!");
        return
    }
    const w = t.match(/\b\w+\b/g) || [],
        s = t.match(/[^\.!\?]+[\.!\?]+/g) || [],
        p = t.split(/\n+/).filter(p => p.trim().length > 0),
        c = t.replace(/\s/g, '').length,
        a = (c / w.length).toFixed(2),
        r = Math.ceil(w.length / 200),
        f = {},
        u = new Set,
        o = new Set(["the", "is", "in", "and", "of", "to", "a", "with", "it", "for", "on"]);
    w.forEach(w => {
        const e = w.toLowerCase();
        u.add(e);
        o.has(e) || (f[e] = (f[e] || 0) + 1)
    });
    const k = Object.entries(f).sort((t, e) => e[1] - t[1]).slice(0, 5).map(([t, e]) => `${t} (${((e/w.length)*100).toFixed(1)}%)`).join(', '),
        b = Object.entries(f).sort((t, e) => e[1] - t[1]).slice(0, 5).map(([t, e]) => `${t} (${e})`).join(', '),
        l = ((u.size / w.length) * 100).toFixed(1),
        y = (t.match(/[aeiouy]{1,2}/gi) || []).length,
        d = (206.835 - 1.015 * (w.length / s.length) - 84.6 * (y / w.length)).toFixed(1),
        v = s.map(t => t.trim().split(/\s+/).length),
        m = Math.max(...v),
        g = Math.min(...v),
        h = [];
    const i = ["sycophant", "pulchritude", "obfuscate", "sesquipedalian", "quixotic", "antediluvian"];
    w.forEach(t => {
        (t.length > 12 || i.includes(t.toLowerCase())) && h.push(t)
    });
    const n = window.getSelection();
    if (n.rangeCount) {
        const e = n.getRangeAt(0),
            o = document.createElement("span");
        o.innerHTML = t.replace(new RegExp("(" + h.join("|") + ")", "gi"), '<mark style="background:yellow">$1</mark>'), e.deleteContents(), e.insertNode(o)
    }
    const x = document.createElement("div");
    x.style = "position:fixed;top:20px;right:20px;background:#fff;color:#000;border:2px solid #444;padding:15px;font:14px monospace;z-index:99999;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3);border-radius:8px;overflow:auto;max-height:90vh;word-wrap:break-word", x.innerHTML = `<b>📊 Text Analysis</b><br><br>Words: <b>${w.length}</b><br>Characters (no spaces): <b>${c}</b><br>Sentences: <b>${s.length}</b><br>Paragraphs: <b>${p.length}</b><br>Avg Word Length: <b>${a}</b><br>Reading Time: <b>${r} min</b><br>Longest Sentence: <b>${m} words</b><br>Shortest Sentence: <b>${g} words</b><br>Lexical Richness: <b>${l}%</b><br>Flesch Reading Ease: <b>${d}</b><br>Top Words: <b>${b}</b><br>Keyword Density: <b>${k}</b><br><br><b>Difficult Words:</b> ${h.length>0?h.join(", "):"None 🎉"}<br><br><button onclick="this.parentElement.remove()">Close</button>`, document.body.appendChild(x)
})();