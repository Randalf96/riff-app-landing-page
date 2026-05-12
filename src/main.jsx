import React from 'react';
import { createRoot } from 'react-dom/client';
import { AudioLines, BadgeCheck, BookOpenCheck, Bot, CirclePlay, Clock3, Ear, Gauge, Guitar, Library, LockKeyhole, Mail, Music2, Play, ShieldCheck, Sparkles, Star, UserX, Wand2, Zap } from 'lucide-react';
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
  return <a className="logo" href="/" aria-label="Riff App home"><span className="logoMark"><Guitar size={20} /></span><span>Riff App</span></a>;
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

const supportEmail = 'sebas.garcia.u.1996@gmail.com';
const lastUpdated = 'May 12, 2026';

function LegalShell({ title, eyebrow, children }) {
  return <>
    <header className="nav legalNav" id="top">
      <Logo />
      <nav>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/support">Support</a>
        <a href="/delete-account">Delete account</a>
      </nav>
      <a className="navCta" href="/">Back to landing</a>
    </header>
    <main className="legalPage sectionPad">
      <div className="pill"><ShieldCheck size={16} /> {eyebrow}</div>
      <h1>{title}</h1>
      <p className="legalLead">Last updated: {lastUpdated}. This public page is provided for app store review, users, and anyone evaluating how Riff handles microphone audio, recognition data, accounts, and deletion requests.</p>
      {children}
    </main>
    <footer>
      <Logo />
      <p>© 2026 Riff App. Built for guitarists.</p>
      <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/support">Support</a><a href="mailto:sebas.garcia.u.1996@gmail.com">Contact</a></div>
    </footer>
  </>;
}

function PrivacyPolicy() {
  return <LegalShell title="Privacy Policy" eyebrow="Privacy and microphone use">
    <section className="legalCard importantPolicy">
      <h2>Microphone and audio summary</h2>
      <ul>
        <li><strong>Riff uses the microphone only when you tap Listen or start an equivalent recording action.</strong></li>
        <li><strong>Short audio samples are used for song, riff, chord, tuning, technique, and practice-flow recognition.</strong></li>
        <li><strong>Audio samples may be sent to backend recognition, AI, analytics, quality, or research services that help provide and improve Riff.</strong></li>
        <li><strong>Riff stores song/workspace history and recognition results. Riff does not store full raw recordings by default unless a feature explicitly states that a recording will be saved or you choose to save/share it.</strong></li>
        <li><strong>You can request deletion of your account and associated data.</strong></li>
      </ul>
      <p>Contact/support email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
    </section>

    <section className="legalGrid">
      <article><h2>1. Information we collect</h2><p>Depending on which features you use, Riff may collect account information, device/app metadata, microphone permission state, short audio samples you submit, song/workspace history, recognition results, saved riffs, practice notes, diagnostics, and support messages.</p></article>
      <article><h2>2. Microphone access</h2><p>Microphone access is user-initiated. Riff should not listen continuously in the background. The microphone is used when you tap Listen, record, upload, or otherwise ask Riff to analyze audio. You can disable microphone permission in your device settings.</p></article>
      <article><h2>3. How audio is used</h2><p>Submitted audio may be processed to identify songs, riffs, chords, tempo, tuning clues, guitar techniques, and related learning guidance. Audio may be transmitted to Riff backend services and selected third-party recognition, AI, infrastructure, analytics, debugging, or research providers under appropriate confidentiality and security controls.</p></article>
      <article><h2>4. What we store</h2><p>Riff may store recognition results, song/workspace history, saved riffs, user preferences, practice progress, and account metadata. Unless explicitly stated in the app, Riff stores history/results rather than full raw recordings. If a feature later offers saved recordings, the app will make that clear.</p></article>
      <article><h2>5. Research and service improvement</h2><p>Audio samples, recognition outputs, and interaction data may be used to improve matching quality, guitar-specific recognition, transcription heuristics, model evaluation, product reliability, abuse prevention, and user experience. Where practical, we minimize or de-identify data used for research and quality work.</p></article>
      <article><h2>6. Legal bases and purposes</h2><p>We process data to provide the app, perform audio recognition, maintain accounts, secure the service, debug issues, improve models and product quality, respond to support requests, comply with law, and enforce our terms.</p></article>
      <article><h2>7. Sharing and processors</h2><p>We may share data with service providers that host infrastructure, run recognition/AI services, store databases, send transactional email, provide analytics/crash reporting, or help with support. We do not sell personal information.</p></article>
      <article><h2>8. Retention</h2><p>We keep account, workspace, recognition, and support data for as long as needed to provide the service, improve reliability, comply with legal obligations, resolve disputes, and enforce agreements. Raw audio is not intended to be retained by default unless a feature explicitly says it is saved.</p></article>
      <article><h2>9. Security</h2><p>We use reasonable technical and organizational safeguards designed to protect data in transit and at rest. No online service is perfectly secure, so users should avoid submitting sensitive, private, or third-party audio they are not allowed to process.</p></article>
      <article><h2>10. Your choices and rights</h2><p>You can deny microphone permission, stop using Listen, delete saved workspace items where available, and request access, correction, deletion, or account deletion by contacting support. Some records may be retained where required for security, legal, or legitimate business reasons.</p></article>
      <article><h2>11. Children</h2><p>Riff is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child provided data, contact us for deletion.</p></article>
      <article><h2>12. International processing</h2><p>Data may be processed in countries other than where you live. By using Riff, you understand that data may be transferred to and processed where our providers operate.</p></article>
      <article><h2>13. Changes</h2><p>We may update this policy as Riff evolves. Material changes will be reflected by updating the date above and, when appropriate, providing notice in the app or on this site.</p></article>
      <article><h2>14. Contact</h2><p>Questions, privacy requests, deletion requests, and account deletion requests can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p></article>
    </section>
  </LegalShell>;
}

function TermsOfUse() {
  return <LegalShell title="Terms of Use" eyebrow="Compliance endpoint">
    <section className="legalCard"><h2>Use of Riff</h2><p>Riff provides guitar-learning assistance, audio recognition, riff analysis, and practice guidance. Results may be incomplete or inaccurate and should be treated as educational assistance, not official tabs or guaranteed transcription.</p></section>
    <section className="legalGrid">
      <article><h2>User responsibilities</h2><p>Only submit audio you have the right to process. Do not use Riff to infringe copyrights, bypass rights management, upload unlawful content, attack the service, or violate another person’s privacy.</p></article>
      <article><h2>Audio and outputs</h2><p>You are responsible for reviewing any chords, tabs, practice advice, or recognition results before relying on them. Riff may use submitted clips and outputs to operate and improve the service as described in the Privacy Policy.</p></article>
      <article><h2>Accounts and deletion</h2><p>You may request account deletion through the deletion endpoint or by emailing support. We may retain limited records where required for legal, security, or operational reasons.</p></article>
      <article><h2>Contact</h2><p>Questions about these terms can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p></article>
    </section>
  </LegalShell>;
}

function SupportPage() {
  return <LegalShell title="Support" eyebrow="Help and contact">
    <section className="legalCard"><h2>Contact support</h2><p>Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> for product support, microphone/privacy questions, bug reports, data access, deletion requests, or account deletion.</p></section>
    <section className="legalGrid">
      <article><Mail /><h2>Privacy requests</h2><p>Use the subject line “Riff Privacy Request” and include the email/account identifier you used in the app.</p></article>
      <article><LockKeyhole /><h2>Microphone questions</h2><p>Riff only uses the microphone when you tap Listen or start a recording/upload action. You can revoke microphone access in your device settings.</p></article>
    </section>
  </LegalShell>;
}

function DeleteAccountPage() {
  return <LegalShell title="Account and Data Deletion" eyebrow="Deletion endpoint">
    <section className="legalCard importantPolicy"><UserX size={28} /><h2>Request deletion</h2><p>To request deletion of your Riff account and associated data, email <a href={`mailto:${supportEmail}?subject=Riff%20Account%20Deletion%20Request`}>{supportEmail}</a> with the subject “Riff Account Deletion Request”. Include the email/account identifier used in the app.</p></section>
    <section className="legalGrid">
      <article><h2>What deletion covers</h2><p>We will delete or anonymize account data, saved song/workspace history, recognition history, practice data, and related user records where technically and legally possible.</p></article>
      <article><h2>What may remain</h2><p>We may retain limited logs, security records, transaction/support records, or backups for a reasonable period where required for legal, fraud prevention, security, dispute resolution, or operational reasons.</p></article>
      <article><h2>Timing</h2><p>We aim to acknowledge deletion requests promptly and complete valid requests within a reasonable period, subject to identity verification and legal obligations.</p></article>
      <article><h2>Alternative request</h2><p>You may also ask for access, correction, export, or deletion of specific workspace/history items by emailing support.</p></article>
    </section>
  </LegalShell>;
}

function Router() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/privacy' || path === '/privacy-policy') {
    document.title = 'Riff App Privacy Policy';
    return <PrivacyPolicy />;
  }
  if (path === '/terms' || path === '/terms-of-use') {
    document.title = 'Riff App Terms of Use';
    return <TermsOfUse />;
  }
  if (path === '/support') {
    document.title = 'Riff App Support';
    return <SupportPage />;
  }
  if (path === '/delete-account' || path === '/data-deletion') {
    document.title = 'Riff App Account and Data Deletion';
    return <DeleteAccountPage />;
  }
  document.title = 'Riff App — Shazam for Guitarists';
  return <App />;
}

function App() {
  return <>
    <header className="nav" id="top">
      <Logo />
      <nav>
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#faq">FAQ</a>
        <a href="/privacy">Privacy</a>
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

      <section className="complianceStrip sectionPad">
        <div className="sectionHeader centered">
          <span className="sectionEyebrow"><LockKeyhole size={14} /> Privacy first</span>
          <h2>Clear microphone policy for app review and users.</h2>
          <p>Riff listens only when you ask it to, uses short samples for recognition, and provides public privacy, support, terms, and deletion endpoints.</p>
        </div>
        <div className="complianceLinks">
          <a href="/privacy">Privacy Policy</a>
          <a href="/delete-account">Account deletion</a>
          <a href="/support">Support</a>
          <a href="/terms">Terms</a>
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
      <div><a href="/#features">Features</a><a href="/#faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/support">Support</a><a href="/delete-account">Delete account</a></div>
    </footer>
  </>;
}

createRoot(document.getElementById('root')).render(<Router />);

