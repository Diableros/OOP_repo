interface DataSource {
    writeData: (data: string) => void;
    readData: () => string;
}

const FILES: Record<string, string> = {};

class FileDataSource implements DataSource{
    constructor(public filename: string) {
        FILES[this.filename] = '';
    }

    writeData(data: string) {
        FILES[this.filename] = data;
    }

    readData() {
        return FILES[this.filename];
    }
}


class DataSourceDecorator implements DataSource {
    constructor(protected wrappee: DataSource) {
    }

    public writeData(data: string) {
        this.wrappee.writeData(data);
    }

    readData() {
        return this.wrappee.readData();
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string) {
        super.writeData(data.split('').reverse().join());
    }

    readData(): string {
        return super.readData().split('').reverse().join();
    }
}


class CompressionDecorator extends DataSourceDecorator {
    private compress(input: string): string {
        let compressed = '';
        let count = 1;

        for (let i = 1; i <= input.length; i += 1) {
            if (input[i] === input[i - 1]) {
                count += 1;
            } else {
                compressed += input[i - 1] + count;
                count = 1;
            }
        }

        return compressed;
    }

    private decompress(input: string): string {
        let decompressed = '';
        let currentChar = '';
        let count = '';

        for (const char of input) {
            if (isNaN(Number(char))) {
                if (count !== '') {
                    decompressed += currentChar.repeat(Number(count));
                }
                currentChar = char;
                count = '';
            } else {
                count += char;
            }
        }

        if (count !== '') {
            decompressed += currentChar.repeat(Number(count));
        }

        return decompressed;
    }
    writeData(data: string) {
        super.writeData(this.compress(data)); // 'aaaa' -> 'a4'
    }

    readData(): string {
        return this.decompress(super.readData()); // 'a4' -> 'aaaa'
    }
}

const source = new FileDataSource('somefile');
source.writeData('salaaaaary records'); // salaaaaary records

const sourceCompressed = new CompressionDecorator(source);
sourceCompressed.writeData('salaaaaary records'); // sala3ry records

const sourceCompressedEncrypted = new EncryptionDecorator(sourceCompressed);
sourceCompressedEncrypted.writeData('salaaaaary records'); // 'sdrocer yr3alas'




const isEnabledCompression = false;
const isEnabledEncryption = true;


let source2: DataSource = new FileDataSource('somefile');
if (isEnabledCompression) {
    source2 = new CompressionDecorator(source2);
}
if (isEnabledEncryption) {
    source2 = new EncryptionDecorator(source2);
}

source2.writeData('daaataaa');

const data = source2.readData(); // 'daaataaa'






