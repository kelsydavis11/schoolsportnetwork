const Arrow = () => <span aria-hidden="true">↗</span>;
const Icon = ({ name }: { name: "connect" | "listen" | "share" }) => {
  const paths = {
    connect: <><circle cx="8" cy="12" r="3"/><circle cx="19" cy="7" r="3"/><circle cx="19" cy="18" r="3"/><path d="m11 11 5-3M11 14l5 3"/></>,
    listen: <><path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 4v8l5 3"/><path d="M20 16v5M17.5 18.5h5"/></>,
    share: <><path d="M5 18V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-4 4v-3Z"/><path d="M9 10h6M9 13h4"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
};
const insights = [
  { type: "Leader conversation", title: "What school sport leadership needs next", meta: "Five questions with a Director of Sport", tone: "blue" },
  { type: "Practical insight", title: "Creating a culture that keeps students in sport", meta: "Participation · Culture · Leadership", tone: "lime" },
  { type: "Research update", title: "Help shape the first State of School Sport Report", meta: "National survey · 2026", tone: "sand" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="School Sport Network home"><img src="/ssn-logo.png" alt="School Sport Network"/></a>
      <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#network">Network</a><a href="#events">Events</a><a href="#insights">Insights</a><a href="#research">Research</a></nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div><a href="#about">About</a><a href="#network">Network</a><a href="#events">Events</a><a href="#insights">Insights</a><a href="#research">Research</a><a href="#join">Join the network</a></div>
      </details>
      <a className="button button-small" href="#join">Join the network <Arrow/></a>
    </header>

    <section className="hero" id="top">
      <div className="field-lines" aria-hidden="true"><span/><span/><span/><span/></div>
      <div className="hero-content"><p className="eyebrow light"><span/> Australia · Founding year 2026</p><h1>Connecting the leaders<br/>shaping <em>school sport.</em></h1><p className="hero-copy">A growing professional network for Directors of Sport, Heads of Sport, coordinators, coaches and school leaders to connect, share ideas and strengthen school sport.</p><div className="hero-actions"><a className="button button-lime" href="#join">Join the network <Arrow/></a><a className="text-link" href="#about">Explore our founding year <span>↓</span></a></div></div>
      <div className="hero-stat"><span className="pulse"/><p>Now building connections across</p><strong>NSW · QLD · VIC · SA · WA</strong></div>
    </section>

    <section className="founding" id="about"><div><p className="eyebrow"><span/> Our founding year</p><p className="year">2026</p></div><div><h2>Built through relationships.<br/>Shaped by the profession.</h2><p>This year is about listening, building relationships and connecting the people shaping school sport. There is no membership fee and no sales proposition—just a genuine invitation to help shape what School Sport Network becomes.</p></div></section>

    <section className="pillars" id="network"><div className="section-head"><p className="eyebrow"><span/> What we’re doing</p><h2>Connect. Listen. Share.</h2><p>Practical ways to build a stronger, more connected profession in 2026.</p></div><div className="pillar-grid">
      <article><div className="icon"><Icon name="connect"/></div><span className="number">01</span><h3>Connect</h3><p>Bringing leaders together through conversations, school visits, dinners and our pilot Exchange Series.</p><ul><li>One-to-one meetings</li><li>School leader dinners</li><li>School Sport Exchange</li></ul></article>
      <article><div className="icon"><Icon name="listen"/></div><span className="number">02</span><h3>Listen</h3><p>Learning directly from the profession about its challenges, priorities and opportunities.</p><ul><li>National leader survey</li><li>State-by-state engagement</li><li>Ideas shaping 2027</li></ul></article>
      <article><div className="icon"><Icon name="share"/></div><span className="number">03</span><h3>Share</h3><p>Making useful ideas, practical examples and diverse school sport experiences easier to access.</p><ul><li>Leader conversations</li><li>School spotlights</li><li>Practical resources</li></ul></article>
    </div></section>

    <section className="activity" id="events"><div className="activity-intro"><p className="eyebrow light"><span/> 2026 activity</p><h2>The network is<br/><em>in motion.</em></h2><p>From coffee conversations to school visits and new events, relationships are being built one meaningful connection at a time.</p><a className="text-link light-link" href="#join">See all 2026 activity <Arrow/></a></div><div className="activity-list">
      <article className="event featured"><div className="event-date"><strong>EOI</strong><span>2026</span></div><div><p className="tag">Register your interest</p><h3>Inaugural School Sport Network Dinner</h3><p>Sydney, NSW · An informal evening for school sport leaders to meet, exchange ideas and help shape the network.</p></div><a href="#join" aria-label="Express interest in inaugural dinner"><Arrow/></a></article>
      <article className="event"><div className="event-date"><strong>Q4</strong><span>2026</span></div><div><p className="tag">Pilot program</p><h3>School Sport Network Exchange</h3><p>Step inside another school’s sport program, observe practice and share what’s working.</p></div><a href="#join" aria-label="Express interest in Exchange Series"><Arrow/></a></article>
      <div className="this-month"><span>Current focus</span><p>Meeting leaders, preparing the national survey and inviting schools to help pilot the first Exchange.</p></div>
    </div></section>

    <section className="states"><div className="section-head compact"><p className="eyebrow"><span/> Growing nationally</p><h2>Local conversations.<br/>A national perspective.</h2></div><div className="state-track">{[["NSW","Dinners + Exchange pilot","active"],["QLD","Conference + conversations","active"],["VIC","School visits + meetings","active"],["SA","Building connections",""] ,["WA","December school visits",""]].map(([s,d,a])=><div className={`state ${a}`} key={s}><span className="dot"/><strong>{s}</strong><p>{d}</p></div>)}</div><p className="state-note">We’re building relationships—not claiming chapters or member numbers. Every conversation helps shape the network.</p></section>

    <section className="insights" id="insights"><div className="section-head row"><div><p className="eyebrow"><span/> Ideas worth sharing</p><h2>Latest from the network</h2></div><a className="text-link dark-link" href="#join">Explore all insights <Arrow/></a></div><div className="insight-grid">{insights.map((item,i)=><article className={`insight ${item.tone}`} key={item.title}><div className="insight-art"><span>{String(i+1).padStart(2,"0")}</span><i/></div><div><p className="tag">{item.type}</p><h3>{item.title}</h3><p>{item.meta}</p><a href="#join" aria-label={`Read ${item.title}`}><Arrow/></a></div></article>)}</div></section>

    <section className="research" id="research"><div><p className="eyebrow light"><span/> School Sport Leaders Survey</p><h2>Your experience can help build a clearer picture of school sport.</h2><p>Contribute to the first State of School Sport Report. The survey will listen to leaders across Australia and turn shared challenges, priorities and ideas into useful evidence for the profession.</p><a className="button button-white" href="#join">Register for survey updates <Arrow/></a></div><div className="report-card"><span>FOUNDING RESEARCH · 2026</span><div className="report-lines"/><h3>STATE<br/>OF SCHOOL<br/><em>SPORT</em></h3><p>Annual report</p></div></section>

    <section className="join" id="join"><div><p className="eyebrow"><span/> Stay connected</p><h2>Help shape what<br/>comes next.</h2><p>Join the free contact network for updates, events, research and practical ideas from school sport leaders across Australia.</p><p className="no-fee">No fee. No obligation. Just a better way to stay connected.</p></div><form action="mailto:araw@pymblelc.nsw.edu.au" method="post" encType="text/plain"><div className="form-row"><label>First name<input name="first-name" required placeholder="Your first name"/></label><label>Last name<input name="last-name" required placeholder="Your last name"/></label></div><label>Work email<input type="email" name="email" required placeholder="you@school.edu.au"/></label><div className="form-row"><label>Role<input name="role" required placeholder="e.g. Director of Sport"/></label><label>State<select name="state" required defaultValue=""><option value="" disabled>Select state</option><option>NSW</option><option>QLD</option><option>VIC</option><option>SA</option><option>WA</option><option>TAS</option><option>ACT</option><option>NT</option><option>International</option></select></label></div><label>School or organisation<input name="organisation" required placeholder="Your school or organisation"/></label><label className="check"><input type="checkbox" required/><span>I agree to receive occasional School Sport Network updates. I can unsubscribe at any time.</span></label><button className="button button-navy" type="submit">Join the network <Arrow/></button></form></section>

    <footer><a className="brand footer-brand" href="#top"><img src="/ssn-logo.png" alt="School Sport Network"/></a><p>Connecting the leaders shaping school sport.</p><div><a href="#about">About</a><a href="#events">Events</a><a href="#insights">Insights</a><a href="#join">Contact</a><a href="#">Privacy</a><a href="#">LinkedIn ↗</a></div><small>© 2026 School Sport Network. Founding year.</small></footer>
  </main>;
}
