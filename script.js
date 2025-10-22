const css = `
  :root{
    --bg1: #f6a8ff;
    --bg2: #ff86d1;
    --card-bg: #ffffff;
    --accent: #5926d6;
    --shadow: rgba(0,0,0,0.18);
    --gap: 28px;
    --card-w: 220px;
    --card-h: 120px;
    --page-pad: 28px;
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html,body{
    height:100%;
    margin:0;
    font-family: var(--font-main);
    direction: rtl;
  }

  body{
    display:flex;
    align-items:flex-start;
    justify-content:center;
    background: linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 100%);
    padding: 36px var(--page-pad);
    box-sizing:border-box;
  }

  .wrap{
    width:100%;
    max-width:1300px;
    text-align:center;
  }

  h1.title{
    margin:6px 0 26px;
    color: #2b4aa6;
    font-size:34px;
    font-weight:700;
    letter-spacing:1px;
    text-transform: lowercase;
  }

  .grid{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--card-w), 1fr));
    gap: var(--gap);
    justify-items:center;
    align-items:center;
  }

  .card{
    width: var(--card-w);
    height: var(--card-h);
    background: var(--card-bg);
    border-radius:10px;
    box-shadow: 0 8px 14px var(--shadow);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:12px;
    box-sizing:border-box;
    transition: transform .18s ease, box-shadow .18s ease;
    cursor: default;
  }

  .card:hover{
    transform: translateY(-8px);
    box-shadow: 0 18px 30px rgba(0,0,0,0.25);
  }

  .project-name{
    color: var(--accent);
    font-size:20px;
    font-weight:700;
    margin:0 0 8px;
  }

  .author{
    color:#6b3eb2;
    font-size:13px;
    margin:0;
    text-transform:lowercase;
  }

  @media (max-width:720px){
    :root{ --card-w: 45vw; --card-h: 110px; --gap:16px; }
    .title{ font-size:26px; }
  }
`;

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

const wrap = document.createElement('div');
wrap.className = 'wrap';

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'projects';
wrap.appendChild(title);

const grid = document.createElement('div');
grid.className = 'grid';
wrap.appendChild(grid);

const numProjects = 20;
for (let i = 1; i <= numProjects; i++){
  const card = document.createElement('article');
  card.className = 'card';

  const pname = document.createElement('h2');
  pname.className = 'project-name';
  pname.textContent = `project ${i}`;

  const author = document.createElement('p');
  author.className = 'author';
  author.textContent = 'Malak';

  card.appendChild(pname);
  card.appendChild(author);

  card.addEventListener('click', () => {
    alert(`فتح project ${i}`);
  });

  grid.appendChild(card);
}

document.body.prepend(wrap);
