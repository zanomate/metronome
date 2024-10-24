import { Big } from 'big.js'
import { EMPH_BEEP, NORMAL_BEEP } from '../assets/sounds.ts'

const emphBeep = new Audio(EMPH_BEEP)
const normalBeep = new Audio(NORMAL_BEEP)

export class Metronome {
  intervalId: number | null = null
  tempo: boolean[] = []
  cursor: number = 0

  play(emph: boolean) {
    const beep = emph ? emphBeep : normalBeep
    beep.pause()
    beep.currentTime = 0
    beep.play()
  }

  beat(onBeat: (index: number) => void) {
    this.play(this.tempo[this.cursor])
    onBeat(this.cursor)
    this.cursor = (this.cursor + 1) % this.tempo.length
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
    this.cursor = 0
  }
}
