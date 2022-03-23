// ABOUTリンク //#about_link 要素の取得
const abtBtn = document.getElementById('about_link')

// ABOUTリンク //#about_link のクリックイベントの登録
abtBtn.addEventListener('click', () => addProf())

// ABOUTページの生成
function addProf() {

  // div要素の生成
  const prof = document.createElement('div')

  // profクラスの追加
  prof.classList.add('prof')

  // div.profの中身
  prof.innerHTML = `
  <div id="container">

    <!-- ▼ABOUTロゴ //.logo -->
    <p class="logo">ABOUT</p>
    <!-- ▲ABOUTロゴ //.logo -->

    <!-- ▼ABOUTを閉じるボタン //.close -->
    <button class="close">
      <span class="material-icons-outlined">close</span>
    </button>
    <!-- ▲ABOUTを閉じるボタン //.close -->

    <!-- ▼ABOUTテキスト -->
    <table id="info">
      <tr>
        <td class="d_name">Name</td>
        <td>Kohei Kanazawa</td>
      </tr>
      <tr>
        <td class="d_name">From</td>
        <td>Osaka</td>
      </tr>
      <tr>
        <td class="d_name">GitHub</td>
        <td>kk-gs1943<a href="https://github.com/kk-gs1943">（https://github.com/kk-gs1943）</a></td>
      </tr>
    </table>
    <table id="skill">
      <h2 id="title">SKILL</h2>
      <tr>
        <th>技術</th>
        <th>経験期間</th>
      </tr>
      <tr>
        <td>HTML</td>
        <td>1年</td>
      </tr>
      <tr>
        <td>CSS</td>
        <td>1年</td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td>8ヶ月</td>
      </tr>
      <tr>
        <td>Ruby</td>
        <td>2ヶ月</td>
      </tr>
      <tr>
        <td>Ruby on Rails</td>
        <td>1ヶ月</td>
      </tr>
      <tr>
        <td>SQLite</td>
        <td>Railsアプリ開発時に使用</td>
      </tr>
      <tr>
        <td>Heroku</td>
        <td>ホスティング時に使用</td>
      </tr>
      <tr>
        <td>Firebase</td>
        <td>ホスティング時に使用</td>
      </tr>
    </table>
    <!-- ▲ABOUTテキスト -->

    <!-- ▼GitHubリンク -->
    <a href="https://github.com/kk-gs1943">
      <img id="github_icon_prof" src="https://github.com/kk-gs1943/NewPortfolio/blob/main/img/GitHub-Mark.png?raw=true" alt="">
      <p id="github_i_title_prof">GitHub</p>
    </a>
    <!-- ▲GitHubリンク -->

  </div>
  `
  // ABOUTを閉じるボタンの要素を取得
  const clsBtn = prof.querySelector('.close')

  // ABOUTを閉じるボタンのクリックイベントの登録
  clsBtn.addEventListener('click', () => {
    clsProf(prof)
  })

  // prof要素をbodyの子要素に追加
  document.body.appendChild(prof)
}

// ABOUTを閉じる
function clsProf(prof) {
  // .profを削除
  prof.remove()
}



// 制作物 //.work の要素を取得
const work = document.querySelectorAll('.work');

// 制作物内容 //.work_content の要素を取得
const workContent = document.querySelectorAll(".work_content");

// .workのクリックイベントの登録
for (let i = 0; i < work.length; i++) {
  work[i].addEventListener("click", workToggle);
}

// 閉じるボタン //.cls の要素を取得
const clsPage = document.querySelector('.cls');

// 閉じるボタン //.cls のクリックイベントの登録
clsPage.addEventListener('click', () => {
  closePage()
});

// 制作物内容 //.work_content を開く
function workToggle() {

  // workの.activeを削除する
  for (let i = 0; i < work.length; i++) {
    work[i].classList.remove("active");
  }

  // workContentの.activeを削除する
  for (let i = 0; i < workContent.length; i++) {
    workContent[i].classList.remove("active");
  }

  // クリックしたworkに.activeを追加
  this.classList.add("active");

  const aryWorks = Array.prototype.slice.call(work);

  const index = aryWorks.indexOf(this);

  // インデックスに対応したworkContentに.activeを追加
  workContent[index].classList.add("active");

  // clsPageに.cls _activeを追加
  clsPage.classList.add('cls_active');
}

// 制作物内容 //.work_content を閉じる
function closePage() {

  // workの.activeを削除する
  for (let i = 0; i < work.length; i++) {
    work[i].classList.remove("active");
  }

  // workContentの.activeを削除する
  for (let i = 0; i < workContent.length; i++) {
    workContent[i].classList.remove("active");
  }

  // clsPageの.cls_activeを削除する
  clsPage.classList.remove("cls_active");
}
