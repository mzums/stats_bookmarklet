/*
javascript:(function(){const text=window.getSelection().toString().trim();if(!text){alert("Select some text!");return;}const words=text.match(/\b\w+\b/g)||[];const sentences=text.match(/[^\.!\?]+[\.!\?]+/g)||[];const paragraphs=text.split(/\n+/).filter(p=>p.trim().length>0);const chars=text.replace(/\s/g,'').length;const avgWordLen=(chars/words.length).toFixed(2);const readingTime=Math.ceil(words.length/200);const freq={};const stopwords=new Set(["the","is","in","and","of","to","a","with","it","for","on"]);const uniqueWords=new Set();words.forEach(w=>{const lw=w.toLowerCase();uniqueWords.add(lw);if(!stopwords.has(lw))freq[lw]=(freq[lw]||0)+1;});const topWords=Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([w,c])=>`${w} (${c})`).join(', ');const lexicalRichness=((uniqueWords.size/words.length)*100).toFixed(1);const syllables=(text.match(/[aeiouy]{1,2}/gi)||[]).length;const flesch=(206.835-1.015*(words.length/sentences.length)-84.6*(syllables/words.length)).toFixed(1);const sentenceLengths=sentences.map(s=>s.trim().split(/\s+/).length);const maxSentence=Math.max(...sentenceLengths);const minSentence=Math.min(...sentenceLengths);difficultWords=[];const rareWords=["sycophant","pulchritude","obfuscate","sesquipedalian","quixotic","antediluvian"];words.forEach(w=>{if(w.length>12||rareWords.includes(w.toLowerCase()))difficultWords.push(w);});const highlighted=document.createElement("mark");const selection=window.getSelection();if(selection.rangeCount){const range=selection.getRangeAt(0);const span=document.createElement("span");span.innerHTML=text.replace(new RegExp('('+difficultWords.join('|')+')','gi'),'<mark style="background:yellow;">$1</mark>');range.deleteContents();range.insertNode(span);}const box=document.createElement("div");box.style="position:fixed;top:20px;right:20px;background:white;color:#000;border:2px solid #444;padding:15px;font:14px monospace;z-index:99999;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3);border-radius:8px;overflow:auto;max-height:90vh;";box.innerHTML=`<b>📊 Text Analysis</b><br><br>Words: <b>${words.length}</b><br>Characters (no spaces): <b>${chars}</b><br>Sentences: <b>${sentences.length}</b><br>Paragraphs: <b>${paragraphs.length}</b><br>Avg Word Length: <b>${avgWordLen}</b><br>Reading Time: <b>${readingTime} min</b><br>Longest Sentence: <b>${maxSentence} words</b><br>Shortest Sentence: <b>${minSentence} words</b><br>Lexical Richness: <b>${lexicalRichness}%</b><br>Flesch Reading Ease: <b>${flesch}</b><br>Top Words: <b>${topWords}</b><br><br><b>Difficult Words:</b> ${difficultWords.length>0?difficultWords.join(', '):"None 🎉"}<br><br><button onclick="this.parentElement.remove()">Close</button>`;document.body.appendChild(box);})();
*/

javascript: (function() {
    const text = window.getSelection().toString().trim();
    if (!text) {
        alert("Select some text!");
        return;
    }
    const words = text.match(/\b\w+\b/g) || [];
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
    const chars = text.replace(/\s/g, '').length;
    const avgWordLen = (chars / words.length).toFixed(2);
    const readingTime = Math.ceil(words.length / 200);
    const freq = {};
    const stopwords = new Set(["the", "is", "in", "and", "of", "to", "a", "with", "it", "for", "on"]);
    const uniqueWords = new Set();
    words.forEach(w => {
        const lw = w.toLowerCase();
        uniqueWords.add(lw);
        if (!stopwords.has(lw)) freq[lw] = (freq[lw] || 0) + 1;
    });
    const topWords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([w, c]) => `${w} (${c})`).join(', ');
    const lexicalRichness = ((uniqueWords.size / words.length) * 100).toFixed(1);
    const syllables = (text.match(/[aeiouy]{1,2}/gi) || []).length;
    const flesch = (206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length)).toFixed(1);
    const sentenceLengths = sentences.map(s => s.trim().split(/\s+/).length);
    const maxSentence = Math.max(...sentenceLengths);
    const minSentence = Math.min(...sentenceLengths);
    difficultWords = [];
    const rareWords = ["sycophant", "pulchritude", "obfuscate", "sesquipedalian", "quixotic", "antediluvian"];
    words.forEach(w => {
        if (w.length > 12 || rareWords.includes(w.toLowerCase())) difficultWords.push(w);
    });
    const highlighted = document.createElement("mark");
    const selection = window.getSelection();
    if (selection.rangeCount) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.innerHTML = text.replace(new RegExp('(' + difficultWords.join('|') + ')', 'gi'), '<mark style="background:yellow;">$1</mark>');
        range.deleteContents();
        range.insertNode(span);
    }
    const box = document.createElement("div");
    box.style = "position:fixed;top:20px;right:20px;background:white;color:#000;border:2px solid #444;padding:15px;font:14px monospace;z-index:99999;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3);border-radius:8px;overflow:auto;max-height:90vh;";
    box.innerHTML = `<b>📊 Text Analysis</b><br><br>Words: <b>${words.length}</b><br>Characters (no spaces): <b>${chars}</b><br>Sentences: <b>${sentences.length}</b><br>Paragraphs: <b>${paragraphs.length}</b><br>Avg Word Length: <b>${avgWordLen}</b><br>Reading Time: <b>${readingTime} min</b><br>Longest Sentence: <b>${maxSentence} words</b><br>Shortest Sentence: <b>${minSentence} words</b><br>Lexical Richness: <b>${lexicalRichness}%</b><br>Flesch Reading Ease: <b>${flesch}</b><br>Top Words: <b>${topWords}</b><br><br><b>Difficult Words:</b> ${difficultWords.length>0?difficultWords.join(', '):"None 🎉"}<br><br><button onclick="this.parentElement.remove()">Close</button>`;
    document.body.appendChild(box);
})();
