import { Big } from 'big.js'
import { EMPH_BEEP, NORMAL_BEEP } from '../assets/sounds.ts'

const beep = (src: string) => new Audio(src).play()

export class Metronome {
  intervalId: number | null = null
  tempo: boolean[] = []
  current: number = 0

  beat(onBeat: (index: number) => void) {
    beep(this.tempo[this.current] ? EMPH_BEEP : NORMAL_BEEP)
    onBeat(this.current)
    this.current = (this.current + 1) % this.tempo.length
  }

  start(bpm: number, tempo: boolean[], onBeat: (index: number) => void) {
    this.stop()
    this.tempo = tempo
    const delay = new Big(60000).div(bpm).toNumber()
    this.beat(onBeat)
    this.intervalId = setInterval(() => {
      this.beat(onBeat)
    }, delay)
  }

  stop() {
    if (this.intervalId === null) return
    clearInterval(this.intervalId)
    this.current = 0
  }
}
