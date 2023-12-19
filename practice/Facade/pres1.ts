class VideoFile {
  public filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
}

class OggCompressionCodec {
  // Детали реализации Ogg компрессии
  name: 'ogg';
}

class MPEG4CompressionCodec {
  // Детали реализации MPEG4 компрессии
  name: 'mpeg4';
}

class CodecFactory {
  extract(file: VideoFile) {
    if (file.filename.endsWith('.mp4')) {
      return new MPEG4CompressionCodec();
    }

    return new OggCompressionCodec();
  }
}

class BitrateReader {
  static read(
    filename: string,
    codec: OggCompressionCodec | MPEG4CompressionCodec,
  ) {
    // Логика чтения файла с использованием кодека
    // Возвращает буфер (пример)
    return `Buffer from ${filename}; codec: ${codec}`;
  }

  static convert(
    buffer: string,
    codec: OggCompressionCodec | MPEG4CompressionCodec,
  ) {
    // Логика конвертации буфера
    return `Converted ${buffer} using ${codec.constructor.name}`;
  }
}
class AudioMixer {
  fix(result: string) {
    // Логика обработки аудио
    return `Fixed audio in ${result}`;
  }
}

class File {
  content: string;

  constructor(content: string) {
    this.content = content;
  }

  save() {
    console.log(`Saving file: ${this.content}`);
  }
}

class VideoConverter {
  convert(filename: string, format: 'mp4' | 'mov'): File {
    const file = new VideoFile(filename);

    const sourceCodec = new CodecFactory().extract(file);

    const destinationCodec =
      format === 'mp4'
        ? new MPEG4CompressionCodec()
        : new OggCompressionCodec();

    const buffer = BitrateReader.read(filename, sourceCodec);

    let result = BitrateReader.convert(buffer, destinationCodec);

    result = new AudioMixer().fix(result);

    return new File(result);
  }
}

const convertor = new VideoConverter();
const mp4 = convertor.convert('funny-cats-video.ogg', 'mp4');
mp4.save();
