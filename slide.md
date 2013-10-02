title: HackGen Workshop - 歡迎來到 GitHub 新手村
output: index.html

--

<h1 style="font-size: 72px">
  歡迎來到 GitHub 新手村
</h1>
<br />

## Denny Huang
## 2013/10/02

--

### Who am I ?

<br />
<h2 style="font-size: 60px">
  <b>Denny Huang</b>
</h2>

* SITCON 2013, 2014 總召

* <a href="http://about.me/denny0223" target="_blank">About me</a>

--

<div align="center">
  <img src="./img/hackgenlogo.jpg" />
</div>
## [http://hackgen.sitcon.org/](http://hackgen.sitcon.org/)

--

# 歡迎來到新手村

--

# 是否寫過程式？

--

<h1>
小專題/中大型<br />
專案開發經驗
<h1>

--

# 版本控制經驗

--

# Shell 熟悉程度

--

### 整裝待發

* 成為 [GitHub](http://github.com) 帝國一員
* 已持有主要武器 Git
	* 在 Terminal 輸入 `git` 確認
	* `sudo apt-get install git`
	* `sudo yum install git`
* 選擇輔助武器 - 編輯器 (vim, emacs, gedit)

--

### 環境設定

`git config --global user.email "you@example.com"`

`git config --global user.name "Your Name"`

`git config --global color.ui true`

`git config --global core.editor vim`

--

### 環境設定

`git config --global alias.co commit`

`git config --global alias.lg "log --color --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"`

--

# .gitconfig
## Why `--global`?

--

### Show branch names in $PS1

<a href="http://xta.github.io/HalloweenBash/" target="_blank">Halloween Bash Profile Generator</a>

<code>
function parse\_git\_branch {<br />
&nbsp;&nbsp; git branch --no-color 2&gt; /dev/null | sed -e '/^[^\*]/d' -e 's/* \(.*\)/(\1)/' <br />
}<br />
</code>

`export PS1="\h:\W \u\$(parse_git_branch)$ "`

--

<div align="center">
  <img height="500" src="./img/code_smart_release-37.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-38.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-39.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-40.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-41.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-42.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-43.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-44.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-45.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-46.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-47.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-48.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-49.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-50.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-51.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-52.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-53.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-54.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-55.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-56.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-57.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-58.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-59.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-60.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-61.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-62.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-63.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-64.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-65.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-66.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-67.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-68.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-69.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-70.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

<div align="center">
  <img height="500" src="./img/code_smart_release-71.jpg" />
</div>
<div align="right">
  <font size="3">
    Source:&nbsp;
	<a href="https://speakerdeck.com/crboy/code-smart-dont-code-hard" target="_blank">Code Smart, Don&apos;t Code hard</a>&nbsp;
	by 畢玉泉(CrBoy)&lt;crboy@crboy.net&gt;
  </font>
</div>

--

### 攻城屍的救星
# 版本控制

--

# 版本控制類型

--

### 本地端版本控制

<div align="center">
  <br />
  <img src="./img/18333fig0101-tn.png" />
</div>

--

### 集中式版本控制系統

<div align="center">
  <br />
  <img src="./img/18333fig0102-tn.png" />
</div>

--

### 分散式版本控制系統

<div align="center">
  <img height="500" src="./img/18333fig0103-tn.png" />
</div>

--

# Git / GitHub
## It&apos;s different

--

# 開始冒險

--

<div align="right">
	Lv.1 <progress value="0" max="100"></progress>
</div>
# Mission 1
## Create a new repo

<br />
## Reward: 10 exp

--

# Public / Private
<div align="center">
  <a href="http://github.com/edu" target="_blank">http://github.com/edu</a>
</div>

--

# README.md
<div align="center">
  <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a>
</div>

--

# .gitignore

--

# License

--

<div align="right">
	Lv.1 <progress value="10" max="100"></progress>
</div>
# Mission Complete!

--

<div align="right">
	Lv.1 <progress value="10" max="100"></progress>
</div>
# Mission 2
## Delete the repository

<br />
## Reward: 10 exp

--

<div align="right">
	Lv.1 <progress value="20" max="100"></progress>
</div>
# Mission Complete!

--

<div align="right">
	Lv.1 <progress value="20" max="100"></progress>
</div>
# Mission 3
## Create an new repo without initialization

<br />
## Reward: 10 exp

--

<div align="right">
	Lv.1 <progress value="30" max="100"></progress>
</div>
# Mission Complete!

--

# About protocol
## https / ssh

--

<div align="right">
	Lv.1 <progress value="30" max="100"></progress>
</div>
# Mission 4
## Create a new local repository
## and push to github via https

<br />
## Reward: 470 exp

--

<h1 style="font-size: 72px">
  <code>git help &lt;command&gt;</code>
</command>

--

# `git init`

--

# `touch README.md`

--

# `git status`

--

<div align="center">
  <img src="./img/index1@2x.png" />
</div>
<div align="right">
  <font size="4">
	<a href="http://git-scm.com/about/staging-area" target="_blank">圖片來源</a>
  </font>
</div>

--

<div align="center">
  <img src="./img/index2@2x.png" />
</div>
<div align="right">
  <font size="4">
	<a href="http://git-scm.com/about/staging-area" target="_blank">圖片來源</a>
  </font>
</div>

--

### Add file to staging area

* `git add README.md`

* `git add .`

--

### Untrack file

* `git rm --cached <file>`

### Unstage file

* `git reset <file>`

--

### Before commit

* `git status`

* `git diff`

--

### Commit

* `git commit`

* `git commit -m "first commit"`

* `git commit --amend`

--

# 何時該 commit？

--

<h1 style="font-size: 72px">
  commit log 怎麼寫？
</h1>

--

### Show commit log

* `git log`

* `git show <revisions>`

--

<h1 style="font-size: 60px">
  SPECIFYING REVISIONS
</h1>
<div align="center">
  <a href="https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html" target="_blank">gitrevisions(7) Manual Page</a>
</div>

--

### Remove file

* `git rm <file>`

### Rename file

* `git mv <file>`

--

### Checkout to previous version

* `git checkout <reversion>`

### Checkout file from previous version

* `git checkout <reversion> <file>`

--

### Stash files

* `git stash`

* `git stash list`

* `git stash pop`

--

### Reset to previous version

* `git reset <reversion>`

* `git reset --hard <reversion>`

--

### Add remote repo

* `git remote add origin https://github.com/denny0223/workshop.git`

* `git remote`

* `git remote show origin`

--

### Push to remote repo

* `git push -u origin master`

* `git push origin master`

* `git push`

* <a href="http://stackoverflow.com/a/13148313" target="_blank">push.default</a>

--

### List branches

* `git branch`

* `git branch -a`

* `git branch -v`

* `git branch -vv`

--

<div align="right">
	Lv.6 <progress value="0" max="100"></progress>
</div>
# Mission Complete!

--

<div align="right">
	Lv.6 <progress value="0" max="100"></progress>
</div>
# Mission 5
## Clone your repo via ssh
## try to commit and push

<br />
## Reward: 40 exp

--

# `git clone`

--

<br /><br /><br />
## Please make sure you have the correct access rights
## and the repository exists.

--

<h1 style="font-size: 75px">
  <a href="https://help.github.com/articles/generating-ssh-keys" target="_blank">Generating SSH keys</a>
</h1>
--

<div align="right">
	Lv.6 <progress value="40" max="100"></progress>
</div>
# Mission Complete!

--

<div align="right">
	Lv.6 <progress value="40" max="100"></progress>
</div>
# Mission 6
## Pull from remote repo
## Resolving conflict

<br />
## Reward: 160 exp

--

<h1 style="font-size: 36px">
  Add a new commit at remote via https repo.
</h1>

--

# `git pull`
## `git fetch` + `git merge`

--

<h1 style="font-size: 72px">
  <code>git pull --rebase</code>
</h1>

--

# Merge conflict

--

<div align="right">
	Lv.8 <progress value="0" max="100"></progress>
</div>
# Mission Complete!

--

<h1 style="font-size: 68px">
  攻城屍們！繼續冒險吧！
</h1>

--

# Git Branch
<h2>
  <a href="http://nvie.com/posts/a-successful-git-branching-model/" target="_blank">A successful Git branching model</a>
</h2>

--

### Something useful

* <a href="http://pages.github.com/" target="_blank">GitHub Pages</a>

* <a href="https://github.com/k4rthik/git-cal" target="_blank">git-cal</a>

### Just for fun

* <a href="https://github.com/gelstudios/gitfiti" target="_blank">gitfiti</a>

--

### Resources

* <a href="http://git-scm.com/book" target="_blank">Pro Git</a>

* <a href="http://git-scm.com/book/zh-tw" target="_blank">Pro Git (zh-tw)</a>

* <a href="http://ihower.tw/git/" target="_blank">版本控制系統 Git 精要</a>

* <a href="http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/zh_tw/" target="_blank">Git Magic</a>

--

<h1 style="font-size: 72px">
  Thanks for listening!
</h1>

<br /><br /><br />
<div align="center">
  <img width="100" src="./img/by-sa.png" />
</div>
<h2 style="font-size: 18px">
本投影片採用<a href="http://creativecommons.org/licenses/by-sa/3.0/tw/" target="_blank">創用 CC「姓名標示—相同方式分享 3.0 台灣」授權條款</a>
</h2>
