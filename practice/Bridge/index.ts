class Remote{
    constructor(protected device: Device) {

    }
    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        }else {
            this.device.enable();
        }
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }
    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }
    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

class AdvancedRemote extends Remote{
    mute() {
        this.device.setVolume(0);
    }
}

interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    setVolume(volume: number): void;
    setChannel(channel: number): void;
    getChannel(): number;
    getVolume(): number;
}

class Tv implements Device {
    private video = new HTMLVideoElement();
    private channel = 0;
    private channels = [
        'https://tnt.online/videos',
        'https://premier.one/videos',
    ];
    isEnabled() {
        return !this.video.paused;
    }
    enable() {
        this.video.src = this.channels[this.channel];
        this.video.play().catch(() => null);
    }
    disable() {
        this.video.pause();
    }

    setChannel(channel: number) {
        if (channel === this.channel) {
            return;
        }

        if (channel >= this.channels.length || channel < 0) {
            throw new Error('канал не найден');
        }
        this.disable();
        this.channel = channel;
        this.enable();
    }

    getChannel(): number {
        return this.channel;
    }

    setVolume(volume: number) {
        this.video.volume = volume;
    }

    getVolume(): number {
        return this.video.volume;
    }
}

class Radio implements Device {
    /*
     * логика такая же,
     * но может иметь свои особенности,
     * текущий вариант - всего лишь пример
     */

    private audio = new HTMLAudioElement();
    private channel = 0;
    private channels = [
        'https://record.ru/radio',
        'https://101.fm/radio',
    ];
    isEnabled() {
        return !this.audio.paused;
    }
    enable() {
        this.audio.src = this.channels[this.channel];
        this.audio.play().catch(() => null);
    }
    disable() {
        this.audio.pause();
    }

    setChannel(channel: number) {
        if (channel === this.channel) {
            return;
        }

        if (channel >= this.channels.length || channel < 0) {
            throw new Error('канал не найден');
        }
        this.disable();
        this.channel = channel;
        this.enable();
    }

    getChannel(): number {
        return this.channel;
    }

    setVolume(volume: number) {
        this.audio.volume = volume;
    }

    getVolume(): number {
        return this.audio.volume;
    }
}

const tv = new Tv();

const remoteTV = new Remote(tv);

remoteTV.togglePower();

const radio = new Radio();

const remoteRadio = new Remote(radio);

remoteRadio.volumeUp();
