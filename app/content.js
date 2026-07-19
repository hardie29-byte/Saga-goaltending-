/* =============================================================
   BUILDER GOLD — COURSE CONTENT
   Edit this file to change modules, lessons, videos, and tests.

   To attach a real video to a lesson, paste an embed URL into
   videoUrl, e.g.:
     videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
     videoUrl: "https://player.vimeo.com/video/VIDEO_ID"
   Until then the app shows a clearly-labeled placeholder slot.
   ============================================================= */

const QUIZ_PASS_PERCENT = 80;

const CONTENT = {
  programTitle: "Builder Gold",
  programSubtitle: "Goalie Development Program",
  blocks: ["Getting Started", "Block 1 — Foundations", "Block 2 — Reading the Game"],
  modules: [

    /* ---------------- WELCOME ---------------- */
    {
      id: "welcome",
      block: 0,
      title: "Welcome to Builder Gold",
      lessons: [
        { id: "welcome-video", type: "video", title: "Program Welcome Video",
          duration: "5 min",
          videoLabel: "INSERT VIDEO: welcome and how to use this program",
          videoUrl: "" },
        { id: "welcome-how", type: "text", title: "How the Program Works",
          duration: "5 min",
          html: `
            <p>Builder Gold is built as two training blocks. <strong>Block 1 — Foundations</strong> covers stance, movement, angles, and rebound control. <strong>Block 2 — Reading the Game</strong> builds reads, tracking, post play, and puck handling on top of them. Complete Block 1 in order before starting Block 2.</p>
            <p>Every module follows the same structure:</p>
            <ul>
              <li><strong>Overview video</strong> — watch it first.</li>
              <li><strong>Step-by-step instructions</strong> — exactly what to do on the ice, with rep counts.</li>
              <li><strong>Technique videos</strong> — one per skill.</li>
              <li><strong>Coaching cues &amp; common mistakes</strong> — what to say mid-rep and what to watch for.</li>
              <li><strong>Module test</strong> — pass it (${QUIZ_PASS_PERCENT}%+) to complete the module.</li>
            </ul>
            <p>A checkmark appears beside every lesson you finish, and the My Progress page shows exactly where you stand in every module — so do the work, not just the clicks.</p>` },
      ]
    },

    /* ---------------- MODULE 1 ---------------- */
    {
      id: "stance",
      block: 1,
      title: "Stance & Ready Position",
      objective: "Build a repeatable, balanced stance you can hold under fatigue and return to after every movement or save.",
      time: "60–75 min on ice",
      lessons: [
        { id: "stance-overview", type: "video", title: "Stance Overview & Demonstration",
          duration: "8 min", videoLabel: "INSERT VIDEO: stance overview and demonstration", videoUrl: "" },
        { id: "stance-steps", type: "text", title: "Step-by-Step: Building Your Stance",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Set the base.</strong> Skates slightly wider than shoulder width, weight on the balls of the feet, heels light. Bounce once — if you tip forward or back, reset.</li>
              <li><strong>Stack the joints.</strong> Knees bend forward over the toes, hips sit back slightly, chest stays up. Ankles, knees, and hips flex together.</li>
              <li><strong>Set the hands.</strong> Glove and blocker in front of the body, visible in your bottom peripheral vision. Glove open and angled to the shooter, blocker square.</li>
              <li><strong>Set the stick.</strong> Blade flat on the ice, centered between the skates, 6–12 inches ahead of the toes.</li>
              <li><strong>Hold and scan.</strong> Hold the stance 30 seconds while moving only your eyes across three targets. Rest, repeat 5 times.</li>
              <li><strong>Stress it.</strong> Partner gives light pushes on shoulders and hips. If you stumble, your base is too narrow or your weight is on your heels.</li>
              <li><strong>Return to it.</strong> 10 reps: drop to butterfly → recover → land back in your exact stance.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: side view of correct stance with joint-stacking lines</div>
            <div class="media-slot">INSERT IMAGE: front view showing hand and stick position</div>` },
        { id: "stance-mistakes-video", type: "video", title: "Common Stance Mistakes — Side-by-Side",
          duration: "6 min", videoLabel: "INSERT VIDEO: common stance mistakes side-by-side comparison", videoUrl: "" },
        { id: "stance-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Chest up, hips down."</li><li>"Hands you can see."</li><li>"Toes loaded, heels light."</li><li>"Same stance every time."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Hands tucked at the hips</strong> — pucks beat you before the glove moves. Hands live in front.</li>
              <li><strong>Weight on the heels</strong> — first push is slow. Feel pressure in the balls of the feet.</li>
              <li><strong>Chest collapsed forward</strong> — kills sightlines and balance. Bend at the knees and ankles, not the waist.</li>
              <li><strong>Stance changes under fatigue</strong> — the last rep should look like the first.</li>
            </ul>` },
        { id: "stance-quiz", type: "quiz", title: "Module Test: Stance & Ready Position",
          duration: "5 min",
          questions: [
            { q: "Where should your weight be in a proper ready stance?",
              options: ["On the heels for stability", "On the balls of the feet, heels light", "Evenly split, flat-footed", "On the inside edges only"], answer: 1 },
            { q: "Where do your glove and blocker belong?",
              options: ["Tucked at the hips to protect five-hole", "Behind the pads", "In front of the body, visible in your bottom peripheral vision", "As high as possible at all times"], answer: 2 },
            { q: "A collapsed chest (bending at the waist) causes what?",
              options: ["Faster pushes", "Lost sightlines and balance", "Better rebound control", "A wider butterfly"], answer: 1 },
            { q: "After recovering from the butterfly you should land in…",
              options: ["A wider stance than before", "Whatever position is comfortable", "A deeper crouch", "The exact same stance you started in"], answer: 3 },
            { q: "Where does the stick blade sit in your stance?",
              options: ["Flat on the ice, centered, 6–12 inches ahead of the toes", "Resting against the toes of the skates", "Raised slightly off the ice", "Off to the blocker side"], answer: 0 },
          ] },
      ]
    },

    /* ---------------- MODULE 2 ---------------- */
    {
      id: "movement",
      block: 1,
      title: "Crease Movement & Skating",
      objective: "Move around the crease with control — shuffle, T-push, and butterfly slide — arriving set before the shot, not during it.",
      time: "75–90 min on ice",
      lessons: [
        { id: "movement-overview", type: "video", title: "Crease Movement Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: crease movement overview", videoUrl: "" },
        { id: "movement-shuffle", type: "video", title: "Shuffle Technique",
          duration: "6 min", videoLabel: "INSERT VIDEO: shuffle technique", videoUrl: "" },
        { id: "movement-tpush", type: "video", title: "T-Push Technique",
          duration: "6 min", videoLabel: "INSERT VIDEO: T-push technique", videoUrl: "" },
        { id: "movement-slide", type: "video", title: "Butterfly Slide Technique",
          duration: "6 min", videoLabel: "INSERT VIDEO: butterfly slide technique", videoUrl: "" },
        { id: "movement-steps", type: "text", title: "Step-by-Step: Movement Circuit",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Shuffle — short lateral moves.</strong> Push off the far leg, step the lead skate 6–12 inches, stay square the whole time. Head level, no bobbing. 3 sets of 10 each direction.</li>
              <li><strong>T-push — longer moves.</strong> Eyes lock the destination, rotate the lead skate, push hard, glide, snap back square and set. 3 sets of 8 each direction.</li>
              <li><strong>Butterfly slide — moving while down.</strong> Load the push leg, rotate the lead pad, slide with chest facing the puck, recover. 3 sets of 6 each direction.</li>
              <li><strong>Post-to-post circuit.</strong> Shuffle to center → T-push to far post → butterfly slide to center → recover. 5 circuits each direction at game speed.</li>
              <li><strong>Stop on arrival.</strong> Every movement ends with a hard inside-edge stop and one full second of stillness. Arriving set is the skill.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: crease movement pattern diagram — post-to-post routes</div>` },
        { id: "movement-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Set before the shot."</li><li>"Lead with the eyes, then the feet."</li><li>"Stay square through the shuffle."</li><li>"Push, glide, stop, still."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Drifting past the spot</strong> — finish every move with a hard stop.</li>
              <li><strong>Opening up on the shuffle</strong> — shoulders and hips stay square; don't let it become a lazy T-push.</li>
              <li><strong>Head bobbing</strong> — your eyes lose the puck every time the head drops.</li>
              <li><strong>Sliding when a shuffle would do</strong> — stay on your skates unless the play demands the slide.</li>
            </ul>` },
        { id: "movement-quiz", type: "quiz", title: "Module Test: Crease Movement",
          duration: "5 min",
          questions: [
            { q: "Which movement is correct for short lateral adjustments while staying square?",
              options: ["T-push", "Butterfly slide", "Shuffle", "C-cut"], answer: 2 },
            { q: "What happens FIRST in a good T-push?",
              options: ["The push off the back leg", "Eyes lock onto the destination", "The glide", "Dropping to the knees"], answer: 1 },
            { q: "How should every crease movement finish?",
              options: ["With a hard stop and a set stance", "With a slow drift into position", "Down in the butterfly", "With a glance back at the net"], answer: 0 },
            { q: "Why is head bobbing during movement a problem?",
              options: ["It tires the neck", "It slows the shuffle", "It makes the goalie look nervous", "Your eyes lose the puck every time the head drops"], answer: 3 },
            { q: "When should you use a butterfly slide instead of staying on your feet?",
              options: ["Any time you cross the crease", "Only when the play forces you to move while down", "Whenever you feel tired", "On every one-timer"], answer: 1 },
          ] },
      ]
    },

    /* ---------------- MODULE 3 ---------------- */
    {
      id: "angles",
      block: 1,
      title: "Angles & Depth Management",
      objective: "Position yourself on the shooter's line and at the right depth so shots hit you — cutting down the net before the puck leaves the stick.",
      time: "60–75 min on ice",
      lessons: [
        { id: "angles-overview", type: "video", title: "Angles & Depth Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: angles and depth overview", videoUrl: "" },
        { id: "angles-steps", type: "text", title: "Step-by-Step: Angles & the Depth Ladder",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Find center.</strong> Locate the middle of your net without looking back — crease markings, post touches, ice landmarks. 10 reps of skating out and returning to dead center.</li>
              <li><strong>Draw the line.</strong> Imagine a straight line from the puck to the middle of the net; put your chest on it. Track a slowly moving puck around the zone.</li>
              <li><strong>Set your depth ladder.</strong> Three depths: <strong>top of crease</strong> (shot threat, no pass), <strong>mid-crease</strong> (shot with a pass option), <strong>near the goal line</strong> (play behind/beside the net). Walk each 5 times.</li>
              <li><strong>Angle circuit.</strong> Five stations — corner, half-wall, point, slot, opposite corner. Re-find your line and call your depth at each. 3 circuits.</li>
              <li><strong>Add shots.</strong> If a puck hits you without a reaching save, the angle was right. Track how many of 15 shots hit your body.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: overhead diagram — puck-to-net lines from five shooting positions</div>
            <div class="media-slot">INSERT IMAGE: depth ladder diagram — top of crease, mid-crease, goal line</div>` },
        { id: "angles-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Chest on the line."</li><li>"Shots should hit you."</li><li>"Depth follows the pass threat."</li><li>"Know your net without looking."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Squaring to the shooter's body instead of the puck</strong> — line up on the release point.</li>
              <li><strong>Playing one depth everywhere</strong> — pick from the ladder every time.</li>
              <li><strong>Peeking at the net mid-play</strong> — every glance back is a lost half-second. Trust your landmarks.</li>
              <li><strong>Correcting angle during the shot</strong> — if you're still moving at release, you're late.</li>
            </ul>` },
        { id: "angles-quiz", type: "quiz", title: "Module Test: Angles & Depth",
          duration: "5 min",
          questions: [
            { q: "You should square your body to…",
              options: ["The shooter's chest", "The puck's release point", "The center of the ice", "The nearest defenseman"], answer: 1 },
            { q: "What does a perfect angle look like on a clean shot?",
              options: ["A great glove save", "A shot that misses the net", "The puck hits your body without a reaching save", "A blocked shot by the defense"], answer: 2 },
            { q: "The shooter has a clear pass option across the slot. Your depth should be…",
              options: ["Top of the crease or higher", "Mid-crease, ready to push", "On the goal line", "Outside the crease challenging hard"], answer: 1 },
            { q: "How do you find the center of your net during play?",
              options: ["Glance back at the net quickly", "Ask a defenseman", "Use crease markings, post touches, and ice landmarks", "Guess from the shooter's reaction"], answer: 2 },
            { q: "If you are still moving when the shot is released…",
              options: ["You gained momentum for the save", "You were late — the angle must be won early", "It doesn't matter if you're square", "You should drop into RVH"], answer: 1 },
          ] },
      ]
    },

    /* ---------------- MODULE 4 ---------------- */
    {
      id: "rebounds",
      block: 1,
      title: "Rebound Control",
      objective: "Decide where every puck goes after it hits you — smothered, steered to the corner, or set for a teammate — so second chances disappear.",
      time: "75–90 min on ice",
      lessons: [
        { id: "rebounds-overview", type: "video", title: "Rebound Control Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: rebound control overview", videoUrl: "" },
        { id: "rebounds-stick", type: "video", title: "Steering Low Shots with the Stick",
          duration: "6 min", videoLabel: "INSERT VIDEO: steering low shots with the stick", videoUrl: "" },
        { id: "rebounds-pad", type: "video", title: "Pad Rotation on Butterfly Saves",
          duration: "6 min", videoLabel: "INSERT VIDEO: pad rotation on butterfly saves", videoUrl: "" },
        { id: "rebounds-chest", type: "video", title: "Chest Save Absorption",
          duration: "5 min", videoLabel: "INSERT VIDEO: chest save absorption technique", videoUrl: "" },
        { id: "rebounds-steps", type: "text", title: "Step-by-Step: The Three Outcomes",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Sort every save into three outcomes.</strong> Call your intention out loud before each rep: <strong>"Freeze"</strong> (chest/glove, play dead), <strong>"Corner"</strong> (steer wide of the slot), or <strong>"Play"</strong> (set it for your stick or a teammate).</li>
              <li><strong>Stick saves to the corner.</strong> Angle the blade so low shots deflect to the corner boards. 20 reps each side.</li>
              <li><strong>Pad saves with direction.</strong> Rotate the pad's face toward the corner at contact. 20 reps each side.</li>
              <li><strong>Chest saves that die.</strong> Exhale, cradle, trap against the chest, cover. No puck drops more than a pad-length in front. 15 reps.</li>
              <li><strong>Glove shots you keep.</strong> Squeeze, look it in, hold. 15 reps.</li>
              <li><strong>Chaos test.</strong> 15 mixed shots at game pace. 2 pts = intended outcome, 1 pt = safe but unintended, 0 = rebound into the slot. Target: 24+/30.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: rebound zone map — safe zones vs. danger zone</div>` },
        { id: "rebounds-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Call it before you catch it."</li><li>"Corners, never the slot."</li><li>"Soft chest, hard squeeze."</li><li>"The save isn't over until the puck is dead or gone."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Stopping the puck without a plan</strong> — a save into the slot is half a goal against.</li>
              <li><strong>Flat stick blade</strong> — returns shots straight back to the shooter.</li>
              <li><strong>Rigid chest on body shots</strong> — pucks bounce off a tense torso. Absorb, then cover.</li>
              <li><strong>Admiring the save</strong> — the rebound is live while you watch it.</li>
            </ul>` },
        { id: "rebounds-quiz", type: "quiz", title: "Module Test: Rebound Control",
          duration: "5 min",
          questions: [
            { q: "What are the three intended outcomes for every save?",
              options: ["Block, kick, catch", "Freeze, corner, play", "High, low, middle", "Stack, slide, poke"], answer: 1 },
            { q: "A flat stick blade on a low shot sends the rebound…",
              options: ["Into the corner", "Over the glass", "Straight back toward the slot", "Behind the net"], answer: 2 },
            { q: "The correct technique on a shot into the chest is…",
              options: ["Tense up so the puck bounces away", "Absorb softly, trap it, then cover", "Redirect it with the blocker", "Let it drop and play it with the stick"], answer: 1 },
            { q: "The most dangerous place for a rebound to land is…",
              options: ["The corner boards", "Behind the net", "The slot", "Your teammate's stick"], answer: 2 },
            { q: "The moment the puck leaves your body after a save, your eyes should…",
              options: ["Check the scoreboard", "Find the puck immediately", "Look for the referee", "Watch the shooter celebrate"], answer: 1 },
          ] },
      ]
    },

    /* ---------------- MODULE 5 ---------------- */
    {
      id: "reads",
      block: 2,
      title: "Reading the Release",
      objective: "Pick up shot cues from the shooter's body and stick before the puck leaves, so your save starts early instead of on time.",
      time: "60–75 min on ice + video study",
      lessons: [
        { id: "reads-overview", type: "video", title: "Reading the Release Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: reading the release overview", videoUrl: "" },
        { id: "reads-blade", type: "video", title: "Blade Angle Cues — Open vs. Closed",
          duration: "6 min", videoLabel: "INSERT VIDEO: blade angle cues — open vs. closed comparison", videoUrl: "" },
        { id: "reads-shotpass", type: "video", title: "Shot vs. Pass Body Language",
          duration: "6 min", videoLabel: "INSERT VIDEO: shot vs. pass body language", videoUrl: "" },
        { id: "reads-steps", type: "text", title: "Step-by-Step: Building Your Reads",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Learn the tells.</strong> Blade angle (open = high, closed = low), hand position (hands away from body = shot coming), weight shift (back-leg load = wrist/snap, big windup = slapper).</li>
              <li><strong>Call the shot.</strong> 20 half-speed shots. Call "high" or "low" out loud <em>before release</em>. Don't save it — read it.</li>
              <li><strong>Read, then save.</strong> Repeat at 3/4 speed, now making the save. The read should make you feel early. 20 reps.</li>
              <li><strong>Shot vs. pass.</strong> Add a second shooter. Call "shot" or "pass" before it happens. 15 reps.</li>
              <li><strong>Screen reads.</strong> Put a body in front; read posture and blade through the screen. 10 reps.</li>
              <li><strong>Video habit.</strong> 5 minutes of game footage after each session — pause at every release and call it. Log two reads you got right and one you missed.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: annotated photo — shooter pre-release cues labeled</div>` },
        { id: "reads-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Read the blade, not the puck."</li><li>"Call it before it leaves."</li><li>"Early beats fast."</li><li>"Posture tells the truth."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Staring at the puck alone</strong> — the blade and body tell you first.</li>
              <li><strong>Guessing instead of reading</strong> — if you can't call it, stay square and trust positioning.</li>
              <li><strong>Reading late</strong> — a read after release is just a reaction.</li>
              <li><strong>Skipping the video work</strong> — reads are built off-ice as much as on-ice.</li>
            </ul>` },
        { id: "reads-quiz", type: "quiz", title: "Module Test: Reading the Release",
          duration: "5 min",
          questions: [
            { q: "An open blade at release usually means the shot is going…",
              options: ["Low", "High", "Wide", "Five-hole"], answer: 1 },
            { q: "A big windup most likely signals…",
              options: ["A pass", "A wrist shot", "A slap shot", "A fake"], answer: 2 },
            { q: "When must the read happen to be useful?",
              options: ["While the puck is still on the blade", "Just after release", "As the puck crosses the hash marks", "After the save"], answer: 0 },
            { q: "You can't get a clear read on the shooter. You should…",
              options: ["Guess glove side", "Cheat toward the far post", "Drop early into the butterfly", "Stay square and trust your positioning"], answer: 3 },
            { q: "Hands spread wide with a closed blade most often signals…",
              options: ["A high shot", "A pass", "A slap shot", "A dump-in"], answer: 1 },
          ] },
      ]
    },

    /* ---------------- MODULE 6 ---------------- */
    {
      id: "tracking",
      block: 2,
      title: "Puck Tracking",
      objective: "Keep your eyes attached to the puck from release to contact — leading every save with your head so your body follows in sequence.",
      time: "60–75 min on ice",
      lessons: [
        { id: "tracking-overview", type: "video", title: "Puck Tracking Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: puck tracking overview", videoUrl: "" },
        { id: "tracking-head", type: "video", title: "Head Trajectory on Lateral Saves (Slow-Mo)",
          duration: "6 min", videoLabel: "INSERT VIDEO: head trajectory on lateral saves — slow motion", videoUrl: "" },
        { id: "tracking-screens", type: "video", title: "Tracking Through Screens",
          duration: "6 min", videoLabel: "INSERT VIDEO: tracking through screens", videoUrl: "" },
        { id: "tracking-steps", type: "text", title: "Step-by-Step: Eye Attachment",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Eye-attach warm-up.</strong> Partner tosses tennis balls from 10 feet; watch each all the way into your hand. 20 tosses.</li>
              <li><strong>Track into the body.</strong> Soft mid-speed shots into chest and pads; watch each puck to contact and nod the head down as it arrives. 20 reps.</li>
              <li><strong>Head leads the save.</strong> On lateral shots: eyes and head first, then hands, then body. Exaggerate the head turn — 15 reps each side.</li>
              <li><strong>Track through traffic.</strong> Add a screen; fight for sightlines with your head, not just your body. 15 reps.</li>
              <li><strong>Rebound re-attach.</strong> Every rep ends only when your eyes find the puck after the save.</li>
              <li><strong>Off-ice habit.</strong> 5 minutes daily: juggling, ball-wall, or reaction-ball work, always watching the object into the hand.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: photo sequence — eyes attached from release to chest contact</div>` },
        { id: "tracking-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"See it hit you."</li><li>"Head first, hands second."</li><li>"Nod it into the chest."</li><li>"Find it again — every time."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Watching the general area</strong> — attach to the puck itself, all the way in.</li>
              <li><strong>Pulling the head off the puck</strong> — the head finishes toward the puck, never away.</li>
              <li><strong>Body beats the eyes</strong> — eyes, head, hands, body, in that order.</li>
              <li><strong>Losing the puck after the save</strong> — re-attach instantly.</li>
            </ul>` },
        { id: "tracking-quiz", type: "quiz", title: "Module Test: Puck Tracking",
          duration: "5 min",
          questions: [
            { q: "What is the correct save sequence?",
              options: ["Body, hands, head, eyes", "Hands, eyes, body, head", "Eyes, head, hands, body", "Head, body, eyes, hands"], answer: 2 },
            { q: "\"See it hit you\" means…",
              options: ["Watch the shooter, not the puck", "Watch the puck all the way to contact with your body", "Keep the net in view", "Blink at the moment of impact"], answer: 1 },
            { q: "When a screen blocks your view, you should…",
              options: ["Drop early and cover the bottom", "Guess where the shot is going", "Move your head to fight for a sightline", "Back into the net for more time"], answer: 2 },
            { q: "The rep is over when…",
              options: ["The puck hits you", "The whistle blows", "You return to your stance", "Your eyes have found the puck after the save"], answer: 3 },
            { q: "How often should you do off-ice tracking work?",
              options: ["5 minutes daily", "Once a week", "Only in the off-season", "Only before games"], answer: 0 },
          ] },
      ]
    },

    /* ---------------- MODULE 7 ---------------- */
    {
      id: "postplay",
      block: 2,
      title: "Post Play",
      objective: "Own the posts — seal them on sharp-angle attacks and wraparounds, and move in and out of post positions without opening holes.",
      time: "75–90 min on ice",
      lessons: [
        { id: "postplay-overview", type: "video", title: "Post Play Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: post play overview", videoUrl: "" },
        { id: "postplay-rvh", type: "video", title: "RVH Technique Breakdown",
          duration: "7 min", videoLabel: "INSERT VIDEO: RVH technique breakdown", videoUrl: "" },
        { id: "postplay-wrap", type: "video", title: "Wraparound Coverage — Both Directions",
          duration: "6 min", videoLabel: "INSERT VIDEO: wraparound coverage both directions", videoUrl: "" },
        { id: "postplay-steps", type: "text", title: "Step-by-Step: Seals, Transitions, Escapes",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Learn your seals.</strong> <strong>RVH</strong>: post-side pad flush on the ice, skate against the post, body rotated to the play. <strong>Stand-up post lean</strong>: skate locked to the post, upright and square. 10 slow entries into each, both posts.</li>
              <li><strong>Pick by threat.</strong> RVH when the puck is below the goal line or tight to the post; stay on your skates when the shooter is above the face-off dot. 15 called reps per side.</li>
              <li><strong>Enter and exit clean.</strong> Stance at top of crease → play goes behind the net → drop into RVH → play returns out front → push out to your angle. No pad-post gap at any point. 10 circuits each side.</li>
              <li><strong>Wraparound battles.</strong> Seal before the puck arrives — post-to-post through the crease, never around the top. 10 reps each direction.</li>
              <li><strong>Sharp-angle shots.</strong> From below the dot: absorb short-side shots with the seal; stay patient on jam plays. 15 reps per side.</li>
              <li><strong>Escape to the slot.</strong> From RVH, pass goes to the slot — explode off the post into your angle and set. 10 reps each side.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: correct RVH seal with contact points labeled</div>
            <div class="media-slot">INSERT IMAGE: diagram — when to use RVH vs. stand-up post lean</div>` },
        { id: "postplay-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Seal before the puck arrives."</li><li>"No daylight at the post."</li><li>"Patience on the jam."</li><li>"Post is home, not a hiding place."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Living in the RVH</strong> — dropping when the shooter is out high gives away the top of the net.</li>
              <li><strong>Gap between pad and post</strong> — that daylight is where wraparounds score.</li>
              <li><strong>Going over the top on wraparounds</strong> — through the crease is faster.</li>
              <li><strong>Stuck on the post</strong> — when the play leaves the post, you leave too.</li>
            </ul>` },
        { id: "postplay-quiz", type: "quiz", title: "Module Test: Post Play",
          duration: "5 min",
          questions: [
            { q: "When is the RVH the right choice?",
              options: ["Any time the puck is in your zone", "When the puck is below the goal line or tight to the post", "When the shooter is at the point", "On every penalty kill"], answer: 1 },
            { q: "The shooter has the puck above the face-off dot. You should…",
              options: ["Drop into RVH", "Stay on your skates, square to the puck", "Lean on the post in a full seal", "Poke check"], answer: 1 },
            { q: "On a wraparound, the fastest route to the far post is…",
              options: ["Around the top of the crease", "Post-to-post through the crease", "Standing up and turning around", "Following the shooter behind the net"], answer: 1 },
            { q: "The most common way wraparounds score is…",
              options: ["Over the glove", "Through a gap between pad and post during the transition", "Off the defenseman", "Five-hole from the slot"], answer: 1 },
            { q: "The pass leaves the post area toward the slot. You should…",
              options: ["Hold the RVH and hope", "Stack the pads", "Explode off the post into your angle and set", "Follow the puck behind the net"], answer: 2 },
          ] },
      ]
    },

    /* ---------------- MODULE 8 ---------------- */
    {
      id: "puckhandling",
      block: 2,
      title: "Puck Handling",
      objective: "Turn dump-ins and loose pucks into possession for your team — stopping rims, setting pucks for defensemen, and making simple, safe passes under pressure.",
      time: "75–90 min on ice",
      lessons: [
        { id: "puckhandling-overview", type: "video", title: "Puck Handling Overview",
          duration: "8 min", videoLabel: "INSERT VIDEO: puck handling overview", videoUrl: "" },
        { id: "puckhandling-rim", type: "video", title: "Stopping the Rim Behind the Net",
          duration: "6 min", videoLabel: "INSERT VIDEO: stopping the rim behind the net", videoUrl: "" },
        { id: "puckhandling-set", type: "video", title: "Setting Pucks for the Defense",
          duration: "5 min", videoLabel: "INSERT VIDEO: setting pucks for the defense", videoUrl: "" },
        { id: "puckhandling-pass", type: "video", title: "Forehand Pass & Backhand Clear",
          duration: "6 min", videoLabel: "INSERT VIDEO: forehand pass and backhand clear technique", videoUrl: "" },
        { id: "puckhandling-steps", type: "text", title: "Step-by-Step: Stops, Sets, Decisions",
          duration: "10 min",
          html: `
            <ol>
              <li><strong>Grip and stance.</strong> Blocker hand at the top of the paddle, glove hand lower on the shaft. 20 smooth switches between save grip and handling grip.</li>
              <li><strong>Stop the rim.</strong> Blade angled against the boards to kill the rim; stop the puck flat. 15 reps each direction.</li>
              <li><strong>Set it for your D.</strong> Leave the puck a stick-length off the boards on the strong side, then return to the crease. A good set can be taken at speed. 15 reps.</li>
              <li><strong>Forehand pass.</strong> Short, firm passes to a target 15–20 feet away. 20 reps.</li>
              <li><strong>Backhand clear.</strong> Off the boards and out — height and hardness beat precision under pressure. 15 reps.</li>
              <li><strong>Decision drill.</strong> Coach calls "time" (set it), "pressure" (rim it out or leave it), or "pass" (find the outlet). 15 reps.</li>
              <li><strong>Get back home.</strong> Every rep ends with a hard return to the crease and a set stance.</li>
            </ol>
            <div class="media-slot">INSERT IMAGE: diagram — decision map for dump-ins (time / pressure / pass)</div>` },
        { id: "puckhandling-cues", type: "text", title: "Coaching Cues & Common Mistakes",
          duration: "5 min",
          html: `
            <h3>Coaching cues</h3>
            <ul><li>"Stop it flat, leave it clean."</li><li>"Simple beats fancy."</li><li>"When in doubt, rim it out."</li><li>"Touch the puck, then get home."</li></ul>
            <h3>Common mistakes</h3>
            <ul>
              <li><strong>Wandering without a plan</strong> — decide before you leave the crease.</li>
              <li><strong>Overhandling</strong> — extra touches under pressure become turnovers.</li>
              <li><strong>Soft board sets</strong> — kill the rim dead before you set it.</li>
              <li><strong>Slow return to the net</strong> — a great set with an empty net behind it is a bad trade.</li>
            </ul>` },
        { id: "puckhandling-quiz", type: "quiz", title: "Module Test: Puck Handling",
          duration: "5 min",
          questions: [
            { q: "You're under heavy forecheck pressure with the puck. The right play is…",
              options: ["A cross-ice saucer pass", "A toe-drag around the forechecker", "Simple: rim it out or leave it for the D", "Carry it up the ice"], answer: 2 },
            { q: "A good set for your defenseman is one they can…",
              options: ["Take at speed without slowing down", "Reach after stopping completely", "Find behind the net", "Chip off the glass themselves"], answer: 0 },
            { q: "Overhandling the puck under pressure usually leads to…",
              options: ["More saves", "Turnovers", "Icing calls", "Better breakouts"], answer: 1 },
            { q: "After any puck touch, your immediate job is to…",
              options: ["Watch where the pass went", "Celebrate the play", "Return hard to the crease and get set", "Call for a line change"], answer: 2 },
            { q: "To stop a hard rim around the boards, you should…",
              options: ["Trap it with your skate", "Set the blade angled against the boards and kill it flat", "Let it wrap to the other side", "Chip it into the air"], answer: 1 },
          ] },
      ]
    },

  ]
};
