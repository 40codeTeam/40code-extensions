var Stack = function () {}
  Stack.prototype = {
    Init: function () {
        this.STACKMAX = 100;
        this.stack = new Array(this.STACKMACK);
        this.top = -1;
        return this.stack;
    },
    isEmpty: function () {
        if (this.top == -1) return true;
        else return false;
    },
    push: function (elem) {
        if (this.top == this.STACKMAX - 1) return "error";
        else this.top++,this.stack[this.top] = elem;
    },
    pop: function () {
        if (this.top == -1) return "error";
        else {
            var x = this.stack[this.top];
            this.top--;
            return x;
        }
    },
    peek: function () {
        if (this.top != -1) return this.stack[this.top];
        else return "error";
    },
    Clear: function () {
        this.top = -1;
    },
    Length: function () {
        return this.top + 1;
    }
  }

function getBackExpre(s) {
    var list = new Array();
    var op = new Stack();
    op.Init();
    var i = 0;
    while (i < s.length) {
        var c = s.charAt(i);
        if (c >= '0' && c <= '9') {
            var s1 = s.substr(i);
            var m = s1.match(/\d+(\.\d+)?/g);
            if (m.length > 0) s1 = m[0],list.push(s1);
            i = i + s1.length;
            continue;
        } else if (c == '(')  op.push(c);
        else if (c == ')') {
            var p = op.pop();
            while (p != '(') list.push(p),p = op.pop();
        } else if (c == '+' || c == '-') {
            while (!op.isEmpty() && (op.peek() == '+' || op.peek() == '-' || op.peek() == '*' || op.peek() == '/' || op.peek() == '^' || op.peek() == '√')) list.push(op.pop());
            op.push(c);
        } else if (c == '*' || c == '/' || c == '%') {
            while (!op.isEmpty() && (op.peek() == '*' || op.peek() == '/' || op.peek() == '%')) list.push(op.pop());
            op.push(c);
        } else if (c == '^' || c == '√') {
            op.push(c);
        }
        i++;
    }
    while (!op.isEmpty()) list.push(op.pop());
    return list;
}
function arit(a, b, c) {
    var v = 0;
    a = parseFloat(a);
    b = parseFloat(b);
    switch (c) {
        case '+':v = a + b;break;
        case '-': v = a - b;break;
        case '*': v = a * b;break;
        case '/': v = a / b;break;
        case '%': v = a % b;break;
        case '^': v = Math.pow(a, b);break;
        case '√': v = Math.sqrt(a);break;
    }
    return v;
}
function getResult(list, result) {
    for (var i = 0; i < list.length; i++) {
        if (!isNaN(list[i])) result.push(list[i]);
        else {
            var b = result.pop(),a = result.pop(),v = arit(a, b, list[i]);
            result.push(v);
        }
    }
    return result.pop();
}

class Expression {
  getInfo() {
    return {
      id: 'Expression',
      name: '表达式',
      blocks: [
        {
          opcode: 'runExpression',
          blockType: Scratch.BlockType.REPORTER,
          text: '运行表达式[FACT]，参数ID[ARGNAMES]，参数数据[ARGVALUES]（加+，减-，乘*，除/，取余%，次方^，开方√）',
          arguments: {
            FACT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x+y'
            },
            ARGNAMES: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'x y'
            },
            ARGVALUES: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1 2'
            }
          }
        }
      ]
    };
  }

  runExpression(args){
    var Fact=args.FACT;
    var Argnames=args.ARGNAMES.split(" ");
    var Argvals=args.ARGVALUES.split(" ");
    if(Argnames.length!=Argvals.length) return "参数数量不对";
    else{
      for(var i=0;i<Argnames.length;i++){
        Fact=Fact.replaceAll(Argnames[i],Argvals[i]);
      }
      var list = getBackExpre(Fact);
      var result = new Stack();
      result.Init();
      var num = getResult(list, result);
      return num;
    }
    
  }
}

Scratch.extensions.register(new Expression());