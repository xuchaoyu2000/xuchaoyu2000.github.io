(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{118:function(t,i,e){"use strict";e.r(i);var r=e(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),e("h3",{attrs:{id:"writen-by-blackchaos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writen-by-blackchaos","aria-hidden":"true"}},[t._v("#")]),t._v(" Writen By Blackchaos")]),e("h2",{attrs:{id:"安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装git")]),e("p",[t._v("不同系统下安装git有所不同：")]),e("h4",{attrs:{id:"linux上安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux上安装","aria-hidden":"true"}},[t._v("#")]),t._v(" LINUX上安装")]),e("p",[t._v("Ubuntu或Debian系统：")]),e("pre",[e("code",[t._v("sudo apt-get install git\n")])]),e("p",[t._v("其他Linux系统可以是用源码安装。")]),e("h4",{attrs:{id:"mac-os-x上安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-x上安装","aria-hidden":"true"}},[t._v("#")]),t._v(" MAC OS X上安装")]),e("ul",[e("li",[t._v("方法1：homebrew，然后通过homebrew安装git，参考"),e("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://brew.sh/")]),t._v("\t。")]),e("li",[t._v("方法2：是用xcode。")])]),e("h4",{attrs:{id:"windows上安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows上安装","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows上安装")]),e("p",[t._v("windows上安装是采用模拟Linux环境下进行的，所以需要先安装模拟环境。目前有个非常好的模拟环境工具，其集成了Linux环境和git，这个工具就是msysgit，从官网下载下来后直接安装即可。下载网址"),e("a",{attrs:{href:"https://git-for-windows.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-for-windows.github.io/")])]),e("p",[t._v("安装完成后可执行文件有3个：")]),e("ol",[e("li",[t._v("git bash\n"),e("ul",[e("li",[t._v("仿Linux命令行")])])]),e("li",[t._v("git cmd\n"),e("ul",[e("li",[t._v("windows命令行")])])]),e("li",[t._v("git gui\n"),e("ul",[e("li",[t._v("可视化窗口")])])])]),e("p",[t._v("最常用的应该是git bash，毕竟git最适合的环境就是Linux。可视化窗口工具只是个辅助工具，是用命令操作才是最灵活和快捷的选择。因此接下来主要学习git的各种命令。")]),e("p",[t._v("虽然git的命令比较多，但是常用的就是那10多种。")]),e("p",[t._v("安装完成后，需要进一步设置用户名和email。因为git是分布式版本控制工具，因此需要每台开发机自报家门。")]),e("pre",[e("code",[t._v('$ git config --global user.name "Your Name"\n$ git config --global user.email "email@example.com"\n')])]),e("p",[t._v("其中--global表示将设置内容配置到全局，这样整个系统的用户都应用这个设置。后面我们还将介绍直接在配置文件中设置的方法。")]),e("h2",{attrs:{id:"git的各种命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的各种命令","aria-hidden":"true"}},[t._v("#")]),t._v(" git的各种命令")]),e("ul",[e("li",[e("a",{attrs:{href:"#init"}},[t._v("git init")]),t._v(" - 初始化版本库")]),e("li",[e("a",{attrs:{href:"#add"}},[t._v("git add")]),t._v(" - 将增加或修改内容放到暂存库")]),e("li",[e("a",{attrs:{href:"#commit"}},[t._v("git commit")]),t._v(" - 提交暂存库的内容")]),e("li",[e("a",{attrs:{href:"#status"}},[t._v("git status")]),t._v(" - 查看状态")]),e("li",[e("a",{attrs:{href:"#diff"}},[t._v("git diff")]),t._v(" - 比较两次版本的不同")]),e("li",[e("a",{attrs:{href:"#log"}},[t._v("git log")]),t._v(" - 查看版本日志")]),e("li",[e("a",{attrs:{href:"#reflog"}},[t._v("git reflog")]),t._v(" - 查看执行的命令日志")]),e("li",[e("a",{attrs:{href:"#reset"}},[t._v("git reset")]),t._v(" - 回退历史版本")]),e("li",[e("a",{attrs:{href:"#rm"}},[t._v("git rm")]),t._v(" - 从版本库中删除")]),e("li",[e("a",{attrs:{href:"#checkout"}},[t._v("git checkout")]),t._v(" - 切换分支")]),e("li",[e("a",{attrs:{href:"#branch"}},[t._v("git branch")]),t._v(" - 创建或查看分支")]),e("li",[e("a",{attrs:{href:"#merge"}},[t._v("git merge")]),t._v(" - 合并分支")]),e("li",[e("a",{attrs:{href:"#stash"}},[t._v("git stash")]),t._v(" - 存储工作区")]),e("li",[e("a",{attrs:{href:"#tag"}},[t._v("git tag")]),t._v(" - 创建或查看标签")]),e("li",[e("a",{attrs:{href:"#remote"}},[t._v("git remote")]),t._v(" - 查看远程版本库的名称")]),e("li",[e("a",{attrs:{href:"#push"}},[t._v("git push")]),t._v(" - 推送本地库版本到远程库")]),e("li",[e("a",{attrs:{href:"#pull"}},[t._v("git pull")]),t._v(" - 从远程库拉取到本地库")]),e("li",[e("a",{attrs:{href:"#clone"}},[t._v("git clone")]),t._v(" - 从远程或本地克隆版本库到指定位置")])]),e("h4",{attrs:{id:"init"}},[t._v("git init")]),e("p",[t._v("将空目录或者有内容的目录加入到git版本控制器中，由git来跟踪并管理。")]),e("pre",[e("code",[t._v("git init\n")])]),e("p",[t._v("命令执行完后，会在当前目录下生成一个.git的目录，该目录是隐藏的。这个目录不能轻易改动，里面保存着所有的git配置。")]),e("h4",{attrs:{id:"add"}},[t._v("git add")]),e("p",[t._v("将增加或修改的文件保存到暂存库中。")]),e("pre",[e("code",[t._v("git add [文件]\n")])]),e("p",[t._v("将所有改动的文件都存放到暂存库。")]),e("pre",[e("code",[t._v("git add -A\n")])]),e("h4",{attrs:{id:"commit"}},[t._v("git commit")]),e("p",[t._v("将暂存区的内容提交到版本库。每次提交都必须将提交的注释加上。")]),e("pre",[e("code",[t._v('git commit -m "注释"\t\n')])]),e("p",[t._v("如果文件的修改或删除没有通过add或rm放入暂存区，也可以通过加入-a的参数直接提交。(增加必须通过add加入暂存区)")]),e("pre",[e("code",[t._v('git commit -a -m "注释"\n')])]),e("h4",{attrs:{id:"status"}},[t._v("git status")]),e("p",[t._v("查看文件有没有被修改的状态，无论文件是否放入暂存区，只要git监控到文件增加、修改、删除，都可以使用该命令来查看。")]),e("pre",[e("code",[t._v("git status\n")])]),e("h4",{attrs:{id:"diff"}},[t._v("git diff")]),e("p",[t._v("比较未提交到暂存区的修改和上个版本的差别。")]),e("pre",[e("code",[t._v("git diff [文件]\n")])]),e("p",[t._v("比较所有提交到暂存区的文件。")]),e("pre",[e("code",[t._v("git diff\n")])]),e("h4",{attrs:{id:"log"}},[t._v("git log")]),e("p",[t._v("查看操作日志，记录所有提交后的版本信息。可以根据日志信息回退到指定的版本。")]),e("pre",[e("code",[t._v("git log\n")])]),e("p",[t._v("查看分支合并图")]),e("pre",[e("code",[t._v("git log --graph\n格式化显示效果\n$ git log --graph --pretty=oneline --abbrev-commit\n")])]),e("h4",{attrs:{id:"reflog"}},[t._v("git reflog")]),e("p",[t._v("查看所有执行的命令历史。")]),e("pre",[e("code",[t._v("git reflog\n")])]),e("h4",{attrs:{id:"reset"}},[t._v("git reset")]),e("p",[t._v("回退历史版本。如果执行提交后又反悔了，可以通过该命令进行回退。")]),e("p",[t._v("回退到当前版本，比如放弃当前未提交的修改。")]),e("pre",[e("code",[t._v("git reset --hard head\n")])]),e("p",[t._v("如果要回退上一个版本，则改成")]),e("pre",[e("code",[t._v("git reset --hard head~1\n")])]),e("p",[t._v("head~后面跟数字，表示回退到从当前版本往回数第几个版本。")]),e("p",[t._v("也可以指定回退到某一个版本。首先通过git log，查看版本的id号，再根据id号来回退。id号可只写前四位。")]),e("pre",[e("code",[t._v("git reset --hard [id]\n")])]),e("h4",{attrs:{id:"rm"}},[t._v("git rm")]),e("p",[t._v("删除文件有两种方式")]),e("ol",[e("li",[e("p",[t._v("直接从文件夹中删除，但是版本库中并没有被删，如果需要提交版本库就要用到git rm，再使用git commit提交。")])]),e("li",[e("p",[t._v("使用git rm删除，文件会从版本库和工作区都删除，然后使用git commit提交。")])])]),e("p",[t._v("用法：")]),e("pre",[e("code",[t._v("git rm [文件]\n")])]),e("h4",{attrs:{id:"checkout"}},[t._v("git checkout")]),e("p",[t._v("切换分支。")]),e("pre",[e("code",[t._v("git checkout [分支名称]\n")])]),e("p",[t._v("创建并切换到该分支。")]),e("pre",[e("code",[t._v("git checkout -b [分支名称]\n")])]),e("h4",{attrs:{id:"branch"}},[t._v("git branch")]),e("p",[t._v("查看分支。")]),e("pre",[e("code",[t._v("git branch\n")])]),e("p",[t._v("创建分支。")]),e("pre",[e("code",[t._v("git branch [分支名称]\n")])]),e("p",[t._v("删除分支。")]),e("pre",[e("code",[t._v("git branch -d [分支名称]\n")])]),e("p",[t._v("如果删除的分支没有被合并，需要进行强制删除。")]),e("pre",[e("code",[t._v("git branch -D [分支名称]\n")])]),e("h4",{attrs:{id:"merge"}},[t._v("git merge")]),e("p",[t._v("快速合并，直接改变合并分支的指针。如果合并的分支间有冲突，则需要手动解决冲突后再提交。")]),e("pre",[e("code",[t._v("git merge [合并的分支名称]\n")])]),e("p",[t._v("快速合并分支后，如果删除分支则日志记录中不会记录分支合并的操作。如果希望能记录分支合并的操作，则需要禁用快速合并。")]),e("pre",[e("code",[t._v("git merge --no-ff\n")])]),e("h4",{attrs:{id:"stash"}},[t._v("git stash")]),e("p",[t._v("存储当前工作区。如果任务进行到一半，需要解决其他版本的问题，比如修复BUG。当前进行的操作可暂时保存下来，解决问题再恢复。")]),e("pre",[e("code",[t._v("git stash\n")])]),e("p",[t._v("查看所有保存的工作现场。")]),e("pre",[e("code",[t._v("git stash list\n")])]),e("p",[t._v("恢复保存的工作现场。")]),e("pre",[e("code",[t._v("git stash apply [工作现场名称]\n恢复后删除工作现场\ngit stash drop [工作现场名称]\n")])]),e("p",[t._v("恢复最后保存的工作现场并同时删除")]),e("pre",[e("code",[t._v("git stash pop\n")])]),e("h4",{attrs:{id:"tag"}},[t._v("git tag")]),e("p",[t._v("给最新的版本加上标签。")]),e("pre",[e("code",[t._v("git tag [标签号]\n")])]),e("p",[t._v("给历史版本加上标签。版本id可以通过git log查看。")]),e("pre",[e("code",[t._v("git tag [标签号] [版本id]\n")])]),e("p",[t._v("创建带有说明的标签。")]),e("pre",[e("code",[t._v('git tag -a [标签号] -m "标签说明" [版本id]\n')])]),e("p",[t._v("删除标签。")]),e("pre",[e("code",[t._v("git tag -d [标签号]\n")])]),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 远程仓库")]),e("p",[t._v("如果不想搭建自己的git服务器，可以选择使用Github。这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库")]),e("p",[t._v("第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：")]),e("pre",[e("code",[t._v("$ ssh-keygen -t rsa -C [你的email]\n")])]),e("p",[t._v("如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的密匙对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。")]),e("p",[t._v("第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：")]),e("p",[t._v("然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容。")]),e("p",[t._v("当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。")]),e("h4",{attrs:{id:"添加远程库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程库","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加远程库")]),e("p",[t._v("现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。")]),e("p",[t._v("首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库。")]),e("p",[t._v("在Repository name填入learngit，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库。")]),e("p",[t._v("目前，在GitHub上的这个learngit仓库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。")]),e("h4",{attrs:{id:"remote"}},[t._v("git remote")]),e("p",[t._v("通过git remote命令关联远程库。")]),e("pre",[e("code",[t._v("git remote add origin [你的github地址]\n")])]),e("p",[t._v("查看远程库信息")]),e("pre",[e("code",[t._v("git remote -v\n")])]),e("h4",{attrs:{id:"push"}},[t._v("git push")]),e("p",[t._v("将本地库提交到远程库")]),e("pre",[e("code",[t._v("git push origin [分支名称]\n或\ngit push origin -u [分支名称]\n")])]),e("p",[t._v("由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),e("h4",{attrs:{id:"pull"}},[t._v("git pull")]),e("p",[t._v("如果向远程库推送失败，有可能远程库已有新版本导致冲突，那么需要使用git pull从远程库将新版本拉取到本地，手动解决后再推送。")]),e("pre",[e("code",[t._v("git pull\t\n")])]),e("p",[t._v("如果pull也失败，有可能没有与远程库关联，下面是关联方法：")]),e("pre",[e("code",[t._v("git branch --set-upstream [分支名称] origin/[分支名称]\n")])]),e("h2",{attrs:{id:"远程克隆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程克隆","aria-hidden":"true"}},[t._v("#")]),t._v(" 远程克隆")]),e("h4",{attrs:{id:"clone"}},[t._v("git clone")]),e("p",[t._v("如果远程已有库，可以通过git clone将远程库的内容克隆到本地。")]),e("pre",[e("code",[t._v("git clone [你的git地址]\n")])]),e("p",[t._v("从远程克隆下来的项目只能看到master分支，如果要抓取其他分支可以使用git checkout。")]),e("pre",[e("code",[t._v("git checkout -b dev1 origin/dev1\n")])]),e("h2",{attrs:{id:"忽略特殊文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#忽略特殊文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 忽略特殊文件")]),e("p",[t._v("在项目中往往有些文件不需要受git控制，比如中间的编译文件、系统生成的配置文件等等，那么可以在项目的根目录下建立一个后缀名为.gitignore的文件，将需要忽略的文件或文件夹写在里面即可。.gitignore文件需要提交到git版本控制中。")]),e("p",[t._v("比如该文件可有如下配置：")]),e("pre",[e("code",[t._v("# Windows:\nThumbs.db\nehthumbs.db\nDesktop.ini\n\n# My configurations:\ndb.ini\ndeploy_key_rsa\ndist\nbuild\n")])]),e("h2",{attrs:{id:"配置别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置别名")]),e("p",[t._v("上面很多命令都很长，而每次都去敲相同的命令显得比较繁琐。git还提供了配置别名的方法，可以将很长的命令进行简化。配置的方法有两种：")]),e("ol",[e("li",[e("p",[t._v("命令行配置")]),e("pre",[e("code",[t._v(' #给git status设置别名st:\n git config --global alias.st "status"\n #以后就可以调用git st来获取文件的状态。\n')])])]),e("li",[e("p",[t._v("在配置文件中设置")]),e("p",[t._v("如果嫌命令行操作太过于麻烦，也可以到用户的根目录下找到.gitconfig文件，直接修改该文件内容也可以到达设置的效果。")]),e("pre",[e("code",[t._v(" #下面是.gitconfig文件的设置：\n [user]\n name = bdk\n email = 423748313@qq.com\n [alias]\n last = log -1\n #美化日志输出的效果\n lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\n st = status\n ck = checkout\n ckb = checkout -b\n cm = commit -a -m\n ...\n")])])])])])}],!1,null,null,null);i.default=a.exports}}]);