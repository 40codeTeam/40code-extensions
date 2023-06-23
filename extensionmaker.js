(function (Scratch) {
    'use strict';
    const vm = Scratch.vm;
    let 扩展代码列表 = [];
    class Advancedextensionmaker {
      getInfo () {
        return {
          id: 'extensionmaker',
          name: '扩展开发器',
          color1: '#E76F51',
          color2: '#E76F51',
          color3: '#E76F51',
          blocks: [
            {
              opcode: '扩展代码',
              blockType: Scratch.BlockType.REPORTER,
              text: '扩展代码',
              arguments: {},
            },
            {
              opcode: '初始化',
              blockType: Scratch.BlockType.COMMAND,
              text: '初始化',
              arguments: {},
            },
            {
              opcode: '启用非沙盒',
              blockType: Scratch.BlockType.COMMAND,
              text: '启用非沙盒',
              arguments: {},
            },
            {
              opcode: '声明扩展',
              blockType: Scratch.BlockType.COMMAND,
              text: '声明扩展>名[扩展名]ID[ID] ',
              arguments: {
                扩展名: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '我的扩展',
                },
                ID: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'myextension',
                },
              },
            },
            {
              opcode: 'docsURI',
              blockType: Scratch.BlockType.COMMAND,
              text: 'docsURI[URI]',
              arguments: {
                URI: {type: Scratch.ArgumentType.STRING, defaultValue: 'URI'},
              },
            },
            {
              opcode: '颜色',
              blockType: Scratch.BlockType.COMMAND,
              text: '设置颜色>块[块]框[框]线[线]',
              arguments: {
                块: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '#ff8829',
                },
                框: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '#ff8829',
                },
                线: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '#ff8829',
                },
              },
            },
            {
              opcode: '开始定义积木',
              blockType: Scratch.BlockType.COMMAND,
              text: '开始定义积木',
              arguments: {},
            },
            {
              opcode: '积木信息',
              blockType: Scratch.BlockType.COMMAND,
              text: '积木名[积木名]操作码[操作码]类型[类型]解释[解释]',
              arguments: {
                积木名: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '我的积木',
                },
                操作码: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'myblock',
                },
                类型: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'REPORTER',
                  menu: '积木类型',
                },
                解释: {type: Scratch.ArgumentType.STRING, defaultValue: ' '},
              },
            },
            {
              opcode: '解释',
              blockType: Scratch.BlockType.REPORTER,
              text: '字符[字符]类型[类型]默认值[默认值]',
              arguments: {
                字符: {type: Scratch.ArgumentType.STRING, defaultValue: '字符'},
                类型: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'STRING',
                  menu: '解释类型',
                },
                默认值: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '默认值',
                },
              },
            },
            {
              opcode: '结束定义积木',
              blockType: Scratch.BlockType.COMMAND,
              text: '结束定义积木',
              arguments: {},
            },
            {
              opcode: '编译',
              blockType: Scratch.BlockType.COMMAND,
              text: '编译[opcode]参数[参数]',
              arguments: {
                opcode: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'myblock',
                },
                参数: {type: Scratch.ArgumentType.STRING, defaultValue: ' '},
              },
            },
            {
              opcode: '积木运行',
              blockType: Scratch.BlockType.COMMAND,
              text: '积木运行[代码]',
              arguments: {
                代码: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return "World!";',
                },
              },
            },
            {
              opcode: '编译结束',
              blockType: Scratch.BlockType.COMMAND,
              text: '结束编译',
              arguments: {},
            },
            {
              opcode: '定义结束',
              blockType: Scratch.BlockType.COMMAND,
              text: '结束定义扩展>扩展ID[扩展id][沙盒]',
              arguments: {
                扩展id: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'myextension',
                },
                沙盒: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '沙盒模式',
                  menu: '沙盒',
                },
              },
            },
            {
              opcode: '运行',
              blockType: Scratch.BlockType.REPORTER,
              text: '现场运行[测试代码]',
              arguments: {
                测试代码: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'window.open("http://example.com/");',
                },
              },
            },
            {
              opcode: '插入',
              blockType: Scratch.BlockType.COMMAND,
              text: '插入标签[标签]',
              arguments: {
                标签: {type: Scratch.ArgumentType.STRING, defaultValue: '标签'},
              },
            },
            {
              opcode: '加载扩展',
              blockType: Scratch.BlockType.COMMAND,
              text: '直接加载扩展[TEXT]',
              arguments: {
                TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'TEXT',
                },
              },
            },
          ],
          menus: {
            积木类型: {
              acceptReporters: true,
              items: [
                {text: '块状(COMMAND)', value: 'COMMAND'},
                {text: '返回型(REPORTER)', value: 'REPORTER'},
                {text: '布尔值(BOOLEAN)', value: 'BOOLEAN'},
                {text: '帽子型(HAT)', value: 'HAT'},
                {text: '事件(EVENT)', value: 'EVENT'},
                {text: '条件(CONDITIONAL)', value: 'CONDITIONAL'},
                {text: '循环(LOOP)', value: 'LOOP'},
                {text: '按钮(BUTTON)', value: 'BUTTON'},
              ],
            },
            解释类型: {
              acceptReporters: true,
              items: [
                {text: '字符串(STRING)', value: 'STRING'},
                {text: '数值(NUMBER)', value: 'NUMBER'},
                {text: '布尔(BOOLEAN)', value: 'BOOLEAN'},
                {text: '颜色(COLOR)', value: 'COLOR'},
                {text: '角度(ANGLE)', value: 'ANGLE'},
                {text: '矩阵(MATRIX)', value: 'MATRIX'},
                {text: '音符(NOTE)', value: 'NOTE'},
                {text: '内联图像(IMAGE)', value: 'IMAGE'},
              ],
            },
            沙盒: {
              acceptReporters: true,
              items: [
                {text: '沙盒模式', value: ' '},
                {text: '非沙盒模式', value: '})(Scratch);'},
              ],
            },
          },
        };
      }
      扩展代码 () {
        扩展代码列表.push (`//此扩展使用“扩展制作器”制作`);
        扩展代码列表.push (`//©主核kernel`);
        return 扩展代码列表.join ('\n');
      }
      初始化 () {
        扩展代码列表 = [];
      }
      启用非沙盒 () {
        扩展代码列表.push (`(function (Scratch) {'use strict';const vm = Scratch.vm;`);
      }
      声明扩展({扩展名, ID}) {
        扩展代码列表.push (
          `class ${ID} {getInfo() {return {id: '${ID}',name: '${扩展名}',`
        );
      }
      docsURI({URI}) {
        扩展代码列表.push (`docsURI: '${URI}',`);
      }
      颜色({块, 框, 线}) {
        扩展代码列表.push (`color1: '${块}',color2: '${框}',color3: '${线}',`);
      }
      开始定义积木 () {
        扩展代码列表.push (`blocks: [`);
      }
      积木信息({积木名, 操作码, 类型, 解释}) {
        扩展代码列表.push (
          `{opcode: '${操作码}',blockType: Scratch.BlockType.${类型},text: "${积木名}",arguments: {${解释}}},`
        );
      }
      解释({字符, 类型, 默认值}) {
        return `${字符}: {type: Scratch.ArgumentType.${类型},defaultValue: '${默认值}',},`;
      }
      结束定义积木 () {
        扩展代码列表.push (`]};}`);
      }
      编译({opcode, 参数}) {
        扩展代码列表.push (`${opcode}({${参数}}) {`);
      }
      积木运行({代码}) {
        扩展代码列表.push (代码);
      }
      编译结束 () {
        扩展代码列表.push (`}`);
      }
      定义结束({扩展id, 沙盒}) {
        扩展代码列表.push (`}Scratch.extensions.register(new ${扩展id}()); ${沙盒}`);
      }
      运行({测试代码}) {
       (`${测试代码}`);
      }
      插入({标签}) {
        扩展代码列表.push (`'${标签}',`);
      }
      async 加载扩展({TEXT}) {
        alert('此功能已被禁用')
        // const blob = new Blob ([TEXT], {type: 'application/javascript'});
        // const url = URL.createObjectURL (blob);
        // vm.extensionManager.loadExtensionURL (url);
      }
    }
    Scratch.extensions.register (new Advancedextensionmaker ());
  }) (Scratch);
  