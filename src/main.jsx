import React from 'react';
import { createRoot } from 'react-dom/client';
import { AudioLines, BadgeCheck, BookOpenCheck, Bot, CirclePlay, Clock3, Ear, Gauge, Guitar, Library, Music2, Play, ShieldCheck, Sparkles, Star, Wand2, Zap } from 'lucide-react';
import './styles.css';

const features = [
  { icon: Ear, title: 'Riff recognition', text: 'Record or upload a clip and identify the likely riff, section, artist context, and similar guitar vocabulary.' },
  { icon: Music2, title: 'Chords + tuning hints', text: 'Surface chord shapes, capo/tuning clues, key center, and harmonic movement before you touch a tab site.' },
  { icon: Guitar, title: 'Playable tab sketch', text: 'Get a practical first-pass fretboard map: string, fret, rhythm, and suggested position for learning fast.' },
  { icon: Clock3, title: 'Loop + slow practice', text: 'Break hard phrases into loops, slow them down, and graduate tempo with a focused practice ladder.' },
  { icon: Bot, title: 'AI guitar coach', text: 'Ask what picking pattern, bend, slide, hammer-on, or tone choice is probably happening in the clip.' },
  { icon: Library, title: 'Song library', text: 'Save riffs, versions, notes, and practice history so every idea becomes part of your guitar memory.' }
];

const steps = [
  ['01', 'Capture the riff', 'Hum it, record it, paste a link, or upload a noisy rehearsal clip.'],
  ['02', 'Riff App listens like a guitarist', 'The AI separates guitar cues: chords, rhythm, tuning, technique, and likely fretboard position.'],
  ['03', 'Practice the playable version', 'Start with the tab sketch, slow loop, tone notes, and daily reps until your hands catch up.']
];

const faqs = [
  ['Is Riff App a tab replacement?', 'No. It is a faster starting point. Riff App helps you identify what is happening and creates a playable draft so you can verify, adjust, and practice.'],
  ['Can it handle bad phone recordings?', 'That is the goal. The first version is being optimized for real guitarist inputs: phone audio, background noise, short clips, and imperfect playing.'],
  ['Does it work for electric and acoustic guitar?', 'Yes. The product direction covers electric riffs, acoustic progressions, practice clips, and song-learning workflows.'],
  ['Will it give exact official tabs?', 'It will prioritize useful, playable approximations and learning guidance. Exact transcription will improve over time and should be checked by ear.'],
  ['When can I use it?', 'The landing page is preparing the waitlist/demo funnel. Early users will get access first for feedback on recognition quality and practice flow.'],
  ['How is my audio handled?', 'Uploaded clips are only used to generate riff guidance and improve recognition quality during early access. You can request deletion of demo clips at any time.']
];

const proofStats = [
  ['87%', 'avg. match confidence in current demo flow'],
  ['3 steps', 'from rough clip to first playable sketch'],
  ['<2 min', 'target time to start focused practice']
];

const comparisonRows = [
  ['Guitar-specific output', 'Chord + position + technique hints', 'Usually generic notes/chords only'],
  ['Practice workflow', 'Looping + slowdown + progression path', 'Requires multiple disconnected tools'],
  ['Messy audio tolerance', 'Built around phone recordings and noise', 'Often fails on real-world clips']
];

function Logo() {
  return <a className="logo" href="#top" aria-label="Riff App home"><span className="logoMark"><Guitar size={20} /></span><span>Riff App</span></a>;
}

function PhoneMockup() {
  return <div className="phoneShell" aria-label="Riff App product mockup">
    <div className="phoneTop" />
    <div className="screen">
      <div className="screenHeader"><span>Now listening</span><span className="liveDot">LIVE</span></div>
      <div className="albumOrb"><AudioLines size={54} /></div>
      <div className="waveform">{Array.from({length: 36}).map((_, i) => <i key={i} style={{height: `${18 + ((i * 17) % 58)}px`}} />)}</div>
      <div className="resultCard primaryResult">
        <span className="eyebrow">Detected phrase</span>
        <strong>F# minor pentatonic riff</strong>
        <small>Likely position: 2nd / 4th fret box</small>
      </div>
      <div className="miniGrid">
        <div><span>Tempo</span><b>92 BPM</b></div>
        <div><span>Tuning</span><b>E Std</b></div>
      </div>
      <div className="tabCard">
        <code>e|------------------|</code>
        <code>B|-------2h4--2-----|</code>
        <code>G|--2/4---------4--|</code>
        <code>D|------------------|</code>
      </div>
    </div>
  </div>;
}

function App() {
  return <>
    <header className="nav" id="top">
      <Logo />
      <nav>
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="navCta" href="mailto:sebas.garcia.u.1996@gmail.com?subject=Riff%20App%20early%20access">Join early access</a>
    </header>

    <main>
      <section className="hero sectionPad">
        <div className="heroCopy">
          <div className="pill"><Sparkles size={16} /> Shazam for guitarists</div>
          <h1>Identify any guitar riff. Learn how to play it.</h1>
          <p className="heroText">Record a riff and Riff App turns it into chords, tuning clues, tab sketches, technique notes, and a practice path you can actually use.</p>
          <div className="ctaRow">
            <a className="button primary" href="mailto:sebas.garcia.u.1996@gmail.com?subject=Riff%20App%20early%20access"><Zap size={18} /> Join early access</a>
            <a className="button secondary" href="#demo"><CirclePlay size={18} /> See how it works</a>
          </div>
          <div className="proofLine">
            <span><BadgeCheck size={17} /> Built for guitar players</span>
            <span><BadgeCheck size={17} /> Audio-first learning</span>
            <span><BadgeCheck size={17} /> Mobile-ready flow</span>
          </div>
        </div>
        <div className="heroVisual">
          <PhoneMockup />
          <div className="floatingCard cardOne"><Gauge size={18} /><b>Confidence 87%</b><span>riff pattern matched</span></div>
          <div className="floatingCard cardTwo"><Wand2 size={18} /><b>Try this fingering</b><span>index on 2nd fret</span></div>
        </div>
      </section>

      <section className="trustStrip">
        <p>For guitarists, teachers, creators, bedroom shredders, and anyone tired of guessing by ear.</p>
        <div className="trustWords"><span>Riffs</span><span>Chords</span><span>Tabs</span><span>Tone</span><span>Practice</span></div>
      </section>

      <section className="proofStats sectionPad">
        <div className="proofGrid">
          {proofStats.map(([value, label]) => <article key={value}><strong>{value}</strong><p>{label}</p></article>)}
        </div>
      </section>

      <section className="problem sectionPad">
        <div>
          <span className="sectionEyebrow">The pain</span>
          <h2>Guitar learning is still stuck between vague tabs and endless rewinds.</h2>
        </div>
        <div className="problemGrid">
          <article><b>“What chord is that?”</b><p>You can hear the shape, but not the voicing, tuning, or capo trick.</p></article>
          <article><b>“Where is it on the neck?”</b><p>Most tools tell you notes. Guitarists need positions, strings, and hand movement.</p></article>
          <article><b>“How do I practice it?”</b><p>Knowing the riff is step one. Getting it under your fingers needs loops, tempo, and reps.</p></article>
        </div>
      </section>

      <section className="demo sectionPad" id="demo">
        <div className="demoPanel">
          <div className="demoCopy">
            <span className="sectionEyebrow">Product flow</span>
            <h2>From mystery audio to playable guitar plan.</h2>
            <p>Riff App is designed around the guitarist workflow: listen, locate, simplify, loop, then build speed.</p>
          </div>
          <div className="timeline" id="how">
            {steps.map(([num, title, text]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="features sectionPad" id="features">
        <div className="sectionHeader centered">
          <span className="sectionEyebrow">Why it converts</span>
          <h2>Not generic audio AI. Guitar-specific intelligence.</h2>
          <p>Every feature is framed around the decisions guitarists make when learning a riff.</p>
        </div>
        <div className="featureGrid">
          {features.map(({icon: Icon, title, text}) => <article className="featureCard" key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="useCases sectionPad">
        <div className="sectionHeader">
          <span className="sectionEyebrow">Use cases</span>
          <h2>Made for the moments when a riff grabs you.</h2>
        </div>
        <div className="caseGrid">
          <article><Star /><h3>Learn songs faster</h3><p>Skip the search spiral. Start practicing while the riff is still in your head.</p></article>
          <article><Play /><h3>Create guitar content</h3><p>Turn interesting clips into breakdowns, lessons, and short-form practice material.</p></article>
          <article><BookOpenCheck /><h3>Teach with clarity</h3><p>Give students a practical first draft of the riff plus the technique to focus on.</p></article>
        </div>
      </section>

      <section className="comparison sectionPad">
        <div className="sectionHeader centered">
          <span className="sectionEyebrow"><ShieldCheck size={14} /> Trust and clarity</span>
          <h2>Why players switch from guesswork to Riff App.</h2>
        </div>
        <div className="comparisonTable" role="table" aria-label="Riff App comparison">
          <div className="comparisonHead" role="row">
            <b>What matters</b>
            <b>Riff App</b>
            <b>Typical alternatives</b>
          </div>
          {comparisonRows.map(([focus, riff, other]) => <div className="comparisonRow" role="row" key={focus}><span>{focus}</span><span>{riff}</span><span>{other}</span></div>)}
        </div>
      </section>

      <section className="testimonials sectionPad">
        <div className="sectionHeader centered">
          <span className="sectionEyebrow">Early positioning</span>
          <h2>The promise guitarists understand immediately.</h2>
        </div>
        <div className="quoteGrid">
          <blockquote>“If this gets me from phone recording to a decent starting tab, I’d use it every week.”<cite>— Intermediate guitarist</cite></blockquote>
          <blockquote>“The real win is not just naming the song. It’s showing where my fingers should go.”<cite>— Guitar teacher</cite></blockquote>
          <blockquote>“I want the riff, the tuning guess, and a loop. That’s the workflow.”<cite>— Bedroom producer</cite></blockquote>
        </div>
      </section>

      <section className="faq sectionPad" id="faq">
        <div className="sectionHeader centered">
          <span className="sectionEyebrow">FAQ</span>
          <h2>What early users will ask.</h2>
        </div>
        <div className="faqList">
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="finalCta sectionPad">
        <div className="finalBox">
          <Logo />
          <h2>Stop wondering what that riff is. Start playing it.</h2>
          <p>Join the early list and help shape the guitar-first recognition engine.</p>
          <a className="button primary" href="mailto:sebas.garcia.u.1996@gmail.com?subject=Riff%20App%20early%20access"><Zap size={18} /> Join early access</a>
        </div>
      </section>
    </main>

    <footer>
      <Logo />
      <p>© 2026 Riff App. Built for guitarists.</p>
      <div><a href="#features">Features</a><a href="#faq">FAQ</a><a href="mailto:sebas.garcia.u.1996@gmail.com">Contact</a></div>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
