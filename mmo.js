


var loadScript = (src) => {
	return new Promise(resolve => {
		let script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', src);
		document.getElementsByTagName('head')[0].appendChild(script);
		script.onload = () => {
			resolve();
		}
	})
}
let uid = '1';

class MyExtension {
	getInfo() {
		return {
			id: 'mmo',
			name: 'mmo多人联机',
			blocks: [
				{
					opcode: 'about',
					blockType: Scratch.BlockType.COMMAND,
					text: '扩展说明',
				},
				{
					opcode: 'init',
					blockType: Scratch.BlockType.COMMAND,
					text: '加入房间[room]',
					arguments: {
						room: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: '1134'
						},
					}
				},
				{
					opcode: 'error',
					blockType: Scratch.BlockType.REPORTER,
					text: '加入房间的错误信息',
					arguments: {}
				},
				{
                    opcode: 'whenJoin',
                    blockType: Scratch.BlockType.HAT,
					text: '当成功加入房间',
					isEdgeActivated: false
				},
				{
					opcode: 'exit',
					blockType: Scratch.BlockType.COMMAND,
					text: '退出房间(断开连接)',
					arguments: {
					}
				},
				{
                    opcode: 'onlineID',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '在线用户id',
				},
				{
                    opcode: 'whenLeave',
                    blockType: Scratch.BlockType.HAT,
					text: '当有用户离开时',
					isEdgeActivated: false
				},
				{
                    opcode: 'whenAdd',
                    blockType: Scratch.BlockType.HAT,
					text: '当有用户进入时',
					isEdgeActivated: false
				},
				{
                    opcode: 'whenChat',
                    blockType: Scratch.BlockType.HAT,
					text: '当有用户发送广播时',
					isEdgeActivated: false
				},
				{
                    opcode: 'sendChatAll',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '发送广播给所有人，广播内容[text]',
                    arguments: {
						text: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: 'hello',
                        },
                    }
				},
				{
                    opcode: 'sendChat',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '发送广播给id为[uid]的人，广播内容[text]',
                    arguments: {
						uid: {
                            type: Scratch.ArgumentType.NUMBER,
							defaultValue: '1',
                        },
						text: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: 'hello',
                        },
                    }
				},
				{
                    opcode: 'additional',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '房间附加信息',
                    arguments: {
						s: {
                            type: Scratch.ArgumentType.NUMBER,
							defaultValue: '0',
							menu: 's',
                        },
                    }
				},
				{
                    opcode: 'setAdditional',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '设置房间附加信息为[text]',
                    arguments: {
						text: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: '{}',
                        },
                    }
				},
				{
                    opcode: 'whenAdditional',
                    blockType: Scratch.BlockType.HAT,
					text: '当房间附加信息发生改变时',
					isEdgeActivated: false
				},
				{
                    opcode: 'setmyInfo',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '设置我的[a]为[text]',
                    arguments: {
						a: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: 'x',
						},
						text: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: '0',
                        },
                    }
				},
				{
                    opcode: 'getUserInfo2',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取id为[id]的用户的[a]',
                    arguments: {
						id: {
                            type: Scratch.ArgumentType.NUMBER,
							defaultValue: '1',
						},
						a: {
                            type: Scratch.ArgumentType.STRING,
							defaultValue: 'x',
						},
                    }
				},
				{
                    opcode: 'getUserInfo3',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取id为[id]的用户的所有',
                    arguments: {
						id: {
                            type: Scratch.ArgumentType.NUMBER,
							defaultValue: '1',
						},
                    }
				},
				{
                    opcode: 'chat',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '最新[s]',
                    arguments: {
						s: {
                            type: Scratch.ArgumentType.NUMBER,
							defaultValue: '0',
							menu: 's',
                        },
                    }
				},
				{
                    opcode: 'allChat',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '所有广播',
                    arguments: {
                    }
                },
				{
                    opcode: 'getUserInfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'id为[id]的用户的[USER_ATTR]',
                    arguments: {
						id: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        USER_ATTR: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'USER_ATTR',
                            defaultValue: 'id'
                        }
                    }
                },
			],
			menus: {
				isWait: [
					{ text: '等待', value: '1' },
					{ text: '不等待', value: '0' },
				],
				USER_ATTR:[
					{ text: 'id', value: 'id' },
					{ text: '昵称', value: 'nickname' },
					{ text: '头像', value: 'head' },
					{ text: '注册时间', value: 'signtime' },
				],
				s:[
					{ text: '广播', value: '0' },
					{ text: '广播内容', value: '1' },
					{ text: '广播发送者id', value: '2' },
					{ text: '加入用户', value: '3' },
					{ text: '离开用户', value: '4' },
				]
			}
		};
	}
	about(){
		window.open('https://f.40code.com/d/27-mmokuo-zhan-shuo-ming')
	}
	setmyInfo({a,text}){
		var route = "chat.chatHandler.setInfo";
		pomelo.request(route, {
			rid: top.mmoData.rid,
			set:a,
			content: text,
			from: this.token,
			timestamp:new Date()/1
		}, function(data) {
			console.log(data,new Date()/1)
		});
	}
	getUserInfo2({id,a}){
		let i=top.mmoData.info
		return i && i[id] && i[id].info && JSON.parse(i[id].info) && JSON.parse(i[id].info)[a];
	}
	getUserInfo3({id}){
		let i=top.mmoData.info
		return i && i[id] && i[id].info
	}
	getToken(){
		return new Promise(resolve=>{
			top.get({url:'work/wst'},(data)=>{resolve(data.token)})
		})
	}
	additional(){
		return top.mmoData && top.mmoData.additional?(top.mmoData.additional):'';
	}
	setAdditional({text}){
		var route = "chat.chatHandler.setAdditional";
		pomelo.request(route, {
			rid: top.mmoData.rid,
			content: text,
			from: this.token,
			timestamp:new Date()/1
		}, function(data) {
			console.log(data,new Date()/1)
		});
	}
	chat({s}){
		let c=top.mmoData.chat[top.mmoData.chat.length-1]
		if(s=='0') return c?JSON.stringify(c):''
		if(s=='1') return c && c.msg ?c.msg:''
		if(s=='2') return c && c.from ?c.from:''
		if(s=='3') return top.mmoData.users[top.mmoData.users.length-1]
		if(s=='4') return top.mmoData.leaveUser?top.mmoData.leaveUser:''
	}
	allChat({s}){
		return JSON.stringify(top.mmoData.chat);
	}
	error(){
		return this.loadError;
	}
	init({ room, isWait },util,times) {
		let s = (async (resolve) => {
			this.loadError=""
			if(!this.token)
			this.token = await this.getToken();
			let token=this.token
			console.log(token)
			if (this.loaded) {
				top.mdui.snackbar('一次只能加入一个房间');
				resolve();
				return;
			}
			if (typeof io == 'undefined') {
				top.mmoData={users:[]}
				top.mmoData.rid=top.workinfo.id + "_" + room
				// await loadScript('https://cdn.staticfile.org/socket.io/4.6.1/socket.io.min.js')
				// await loadScript('https://40code-cdn.zq990.com/web/pomeloclient.min.js')
				await loadScript('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/1.8.3/jquery.min.js')
				await loadScript('https://newsccode-1302921490.cos.ap-shanghai.myqcloud.com/web/socket.io.js?v=6')
				await loadScript('https://newsccode-1302921490.cos.ap-shanghai.myqcloud.com/web/pomeloclient.js?v=7')
				top.pomelo = pomelo;
				top.io = io;
				pomelo.on('onChat', function(data) {
					console.log(data,new Date()/1)
					top.mmoData.chat.push(data)
					Scratch.vm.runtime.startHats('mmo_whenChat');
				});
				//update user list
				pomelo.on('onAdd', function(data) {
					console.log(data,new Date()/1)
					top.mmoData.users.push(data.user);
					top.mmoData.info[data.user]=data.info;
					Scratch.vm.runtime.startHats('mmo_whenAdd');
				});
				//update user list
				pomelo.on('onLeave', function(data) {
					console.log(data,new Date()/1)
					top.mmoData.leaveUser=data.user;
					top.mmoData.users=top.mmoData.users.filter(item=>item!=data.user);
					Scratch.vm.runtime.startHats('mmo_whenLeave');
				});
				pomelo.on('onAdditional', function(data) {
					console.log(data,new Date()/1)
					top.mmoData.additional=data.msg;
					Scratch.vm.runtime.startHats('mmo_whenAdditional');
				});
				pomelo.on('onInfo', function(data) {
					console.log(data,new Date()/1)
					let j=JSON.parse(top.mmoData.info[data.from].info) || {};
					j[data.set]=data.msg;
					top.mmoData.info=JSON.stringify(j)
				});
			}
			this.loaded = 1;
			queryEntry(token, function (host, port) {
				pomelo.init({
					host: host,
					port: port,
					log: true,
				}, function () {
					var route = "connector.entryHandler.enter";
					pomelo.request(route, {
						username: token,
						rid: top.workinfo.id + "_" + room,
						timestamp:new Date()/1
					}, function (data) {
						Scratch.vm.runtime.startHats('mmo_whenJoin');
						console.log(top.mmoData = data); 
						top.mmoData.rid=top.workinfo.id + "_" + room
						top.mmoData.chat=[];
					});
				});
			});
			function queryEntry(uid, callback) {
				var route = 'gate.gateHandler.queryEntry';
				pomelo.init({
					host: '40code-api-cdn.zq990.com',
					port: 443,
					log: true,
				}, function () {
					pomelo.request(route, {
						uid: uid
					}, function (data) {
						pomelo.disconnect();
						if (data.code === 500) {
							this.loaded=0;
							if(times){
								this.loadError=data
								mdui.snackbar('加载失败，请重新连接')
								return;
							}
							setTimeout(()=>{
								this.init({ room },util,1)
							},100)
						}
						callback(data.host, data.port);
					});
				});
			};
		})
		// if (isWait) return s;
		// else {
			(async () => await s())
		// }
	}
	sendChat({text,uid}){
		var route = "chat.chatHandler.send";
		pomelo.request(route, {
			rid: top.mmoData.rid,
			content: text,
			from: this.token,
			target: uid,
			timestamp:new Date()/1,
		}, function(data) {
			console.log(data,new Date()/1)
		});
	}
	sendChatAll({text}){
		this.sendChat({text,uid:'*'})
	}
	exit() {
		var route = "chat.entryHandler.quit";
		let that=this;
		pomelo.request(route, {
			rid: top.mmoData.rid,
			from: this.token,
		}, function(data) {
			pomelo.disconnect();
			that.loaded = 0;
		});
	}
	getUserInfo({id,USER_ATTR}) {
		return new Promise(resolve=>{
			top.get({url:'user/info?id='+id},(data)=>resolve(data.data[0][USER_ATTR]))
		})
	}
	onlineID({}){
		let u=top.mmoData && top.mmoData.users
		return u?JSON.stringify(u):''
	}
}
Scratch.extensions.register(new MyExtension());
