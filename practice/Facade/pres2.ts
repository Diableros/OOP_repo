import * as fs from 'fs/promises';

type Map = { [key: string]: number };

interface Extractor {
  extract(): Promise<string>;
}

interface Transformer {
  transform(input: string): Map;
}

interface Loader {
  load(input: Map): Promise<void>;
}

class FileExtractor implements Extractor {
  filepath: string;
  constructor(filepath: string) {
    this.filepath = filepath;
  }

  public async extract() {
    // load file from this.filepath
    return fs.readFile(this.filepath, 'utf8');
  }
}

class FileLoader implements Loader {
  filepath: string;
  constructor(filepath: string) {
    this.filepath = filepath;
  }
  public async load(input: Map) {
    return fs.writeFile(this.filepath, JSON.stringify(input, undefined, 4));
  }
}

class FileTransformer implements Transformer {
  public transform(input: string): Map {
    const result: Map = {};

    input.split('\n').forEach(line => {
      if (line.trim().length === 0) return;

      const [key] = line.split(',');
      if (typeof result[key] === 'undefined') {
        result[key] = 0;
      }
      result[key] = result[key] + 1;
    });

    return result;
  }
}

class ETLProcessor {
  extractor: Extractor;
  transformer: Transformer;
  loader: Loader;

  constructor(extractor: Extractor, transformer: Transformer, loader: Loader) {
    this.extractor = extractor;
    this.transformer = transformer;
    this.loader = loader;
  }

  public async process() {
    const input = await this.extractor.extract();
    const transformed = this.transformer.transform(input);
    return this.loader.load(transformed);
  }
}

const processor = new ETLProcessor(
  new FileExtractor('input.txt'),
  new FileTransformer(),
  new FileLoader('output.json'),
);

processor.process().then(() => {
  console.log('Process completed');
});
