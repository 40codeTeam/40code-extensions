class Unicode {
    getInfo() {
        return {
            id: 'unicode',
            name: 'Unicode',
            blocks: [
                {
                    opcode: 'GetUnicodeNumber',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[char] 的Unicode编码',
                    arguments: {
                        char: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        }
                    }
                },
                {
                    opcode: 'GetUnicodeChar',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[number] 对应的Unicode字符',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '65'
                        }
                    }
                }
            ]
        };
    }
    GetUnicodeNumber(args) {
        return args.char.charCodeAt(0);
    };
    GetUnicodeChar(args) {
        return String.fromCharCode(args.number);
    }
}
Scratch.extensions.register(new Unicode());