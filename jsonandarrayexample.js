(function(Scratch) {
  'use strict';
  class JSONandArray {
    getInfo() {
      return {
        id: 'jsonandarrayexample',
        name: 'JSON和数组操作',
        blocks: [
          {
            opcode: 'uniqueArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 去重',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              }
            }
          },
          {
            opcode: 'sumArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY1] 和数组 [ARRAY2] 相加 [UNIQUE]',
            arguments: {
              ARRAY1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              ARRAY2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]'
              },
              UNIQUE: {
                type: Scratch.ArgumentType.BOOLEAN,
                menu: 'UNIQUE_MENU',
                defaultValue: true
              }
            }
          },
          {
            opcode: 'subtractArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY1] 减去数组 [ARRAY2]',
            arguments: {
              ARRAY1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              ARRAY2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]'
              }
            }
          },
          {
            opcode: 'sortArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 按照 [KEY] 排序 [ORDER]',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"name":"a","age":1},{"name":"c","age":3},{"name":"b","age":2}]'
              },
              KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'age'
              },
              ORDER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ORDER_MENU',
                defaultValue: '升序'
              }
            }
          },
            {
            opcode: 'sortArrayOld',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 排序 [ORDER]',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","c","b"]'
              },
              ORDER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ORDER_MENU',
                defaultValue: '升序'
              }
            }
          },
          {
            opcode: 'reverseArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 反转',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              }
            }
          },
          {
            opcode: 'sliceArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 从 [START] 到 [END] 的子数组',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          },
          {
            opcode: 'setArrayItem',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 的 [INDEX] 项设为 [VALUE]',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'd'
              }
            }
          },
          {
            opcode: 'deleteArrayItem',
            blockType: Scratch.BlockType.REPORTER,
            text: '删除数组 [ARRAY] 的 [INDEX] 项',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'sumArrayValue',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 的所有项相加',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[1,2,3]'
              }
            }
          },
          {
            opcode: 'deleteArrayItemToAnother',
            blockType: Scratch.BlockType.REPORTER,
            text: '删除数组 [ARRAY] 的 [INDEX] 到 [INDEX2] 项',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              INDEX2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          {
            opcode: 'intersectArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY1] 和数组 [ARRAY2] 的交集',
            arguments: {
              ARRAY1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              ARRAY2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]'
              }
            }
          },
          {
            opcode: 'filterArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 满足正则表达式 [REGEX] 的项',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/a/'
              }
            }
          },
          {
            opcode: 'findArray',
            blockType: Scratch.BlockType.REPORTER,
            text: '数组 [ARRAY] 从第 [START] 项开始查找 [VALUE] 的项 [RETURN]',
            arguments: {
              ARRAY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'b'
              },
              RETURN: {
                type: Scratch.ArgumentType.STRING,
                menu: 'RETURN_MENU',
                defaultValue: '值'
              }
            }
          }
        ],
        menus: {
          UNIQUE_MENU: {
            items: [
              {
                text: '去重',
                value: true
              },
              {
                text: '不去重',
                value: false
              }
            ]
          },
          ORDER_MENU: {
            items: [
              {
                text: '升序',
                value: '升序'
              },
              {
                text: '降序',
                value: '降序'
              }
            ]
          },
          RETURN_MENU: {
            items: [
              {
                text: '值',
                value: '值'
              },
              {
                text: '下标',
                value: '下标'
              }
            ]
          }
        }
      };
    }
    uniqueArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = Array.from(new Set(arr));
      return JSON.stringify(result);
    }
    sumArray(args) {
      let arr1 = JSON.parse(args.ARRAY1);
      let arr2 = JSON.parse(args.ARRAY2);
      let result = arr1.concat(arr2);
      if (args.UNIQUE) {
        result = Array.from(new Set(result));
      }
      return JSON.stringify(result);
    }
    subtractArray(args) {
      let arr1 = JSON.parse(args.ARRAY1);
      let arr2 = JSON.parse(args.ARRAY2);
      let result = arr1.filter(x => !arr2.includes(x));
      return JSON.stringify(result);
    }
    sortArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = arr.sort((a, b) => a[args.KEY] - b[args.KEY]);
      if (args.ORDER === '降序') {
        result = result.reverse();
      }
      return JSON.stringify(result);
    }
    sortArrayOld(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = arr.sort();
      if (args.ORDER === '降序') {
        result = result.reverse();
      }
      return JSON.stringify(result);
    }
    reverseArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = arr.reverse();
      return JSON.stringify(result);
    }
    sliceArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = arr.slice(args.START, args.END);
      return JSON.stringify(result);
    }
    setArrayItem(args) {
      let arr = JSON.parse(args.ARRAY);
      arr[args.INDEX] = args.VALUE;
      return JSON.stringify(arr);
    }
    deleteArrayItem(args) {
      let arr = JSON.parse(args.ARRAY);
      arr.splice(args.INDEX, 1);
      return JSON.stringify(arr);
    }
    sumArrayValue(args) {
      let arr = JSON.parse(args.ARRAY);
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
    deleteArrayItemToAnother(args) {
      let arr = JSON.parse(args.ARRAY);
      arr.splice(args.INDEX, args.INDEX2 - args.INDEX + 1);
      return JSON.stringify(arr);
    }
    intersectArray(args) {
      let arr1 = JSON.parse(args.ARRAY1);
      let arr2 = JSON.parse(args.ARRAY2);
      let result = arr1.filter(x => arr2.includes(x));
      return JSON.stringify(result);
    }
    filterArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let regex = new RegExp(args.REGEX);
      let result = arr.filter(x => regex.test(x));
      return JSON.stringify(result);
    }
    findArray(args) {
      let arr = JSON.parse(args.ARRAY);
      let result = [];
      for (let i = args.START; i < arr.length; i++) {
        if (arr[i] === args.VALUE) {
          if (args.RETURN === '下标') {
            result.push(i);
          } else {
            result.push(arr[i]);
          }
        }
      }
      return JSON.stringify(result);
    }
  }
  Scratch.extensions.register(new JSONandArray());
}(Scratch));
